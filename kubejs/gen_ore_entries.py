#!/usr/bin/env python3
"""Generate Patchouli ore-generation entries from the materialism TFC vein JSONs."""
import json, os, re, glob

VEIN_DIR = r"D:\Program Files\CurseForge\minecraft\Instances\Materialism 1.21\kubejs\data\materialism\worldgen\configured_feature\vein"
OUT_DIR  = r"D:\Program Files\CurseForge\minecraft\Instances\Materialism 1.21\kubejs\assets\tfc\patchouli_books\field_guide\en_us\entries\materialism_ore_generation"
CATEGORY = "tfc:materialism_ore_generation"

FAMILY = {
    "rhyolite":"igneous extrusive","basalt":"igneous extrusive","andesite":"igneous extrusive","dacite":"igneous extrusive","tuff":"igneous extrusive",
    "granite":"igneous intrusive","diorite":"igneous intrusive","gabbro":"igneous intrusive",
    "shale":"sedimentary","claystone":"sedimentary","limestone":"sedimentary","conglomerate":"sedimentary",
    "dolomite":"sedimentary","chert":"sedimentary","chalk":"sedimentary",
    "quartzite":"metamorphic","slate":"metamorphic","phyllite":"metamorphic","schist":"metamorphic",
    "gneiss":"metamorphic","marble":"metamorphic",
}
FAMILY_ORDER = ["igneous extrusive","igneous intrusive","sedimentary","metamorphic"]

# strip these leading qualifiers to group veins by ore material
QUALIFIERS = ["surface","deep","normal","montane","rich","fake"]

def rarity_word(r):
    if r < 30: return "very common"
    if r < 90: return "common"
    if r < 200: return "uncommon"
    if r < 1500: return "rare"
    if r < 12000: return "very rare"
    return "extremely rare"

def material_key(name):
    parts = name.split("_")
    if parts and parts[0] in QUALIFIERS:
        parts = parts[1:]
    return "_".join(parts)

def title(s):
    return " ".join(w.capitalize() for w in s.split("_"))

def rock_of(block):
    # block like tfc:rock/raw/rhyolite  OR  tfc:ore/poor_x/rhyolite
    seg = block.split("/")[-1]
    return seg

def collect_rocks(vein_blocks):
    rocks = []
    for grp in vein_blocks:
        for rep in grp.get("replace", []):
            r = rock_of(rep)
            if r not in rocks:
                rocks.append(r)
    return rocks

def rocks_phrase(rocks):
    fams = []
    for r in rocks:
        f = FAMILY.get(r)
        if f and f not in fams:
            fams.append(f)
    fams.sort(key=lambda f: FAMILY_ORDER.index(f) if f in FAMILY_ORDER else 99)
    # if a family is fully covered, name the family; else list rocks
    fam_rocks = {}
    for r in rocks:
        f = FAMILY.get(r, "other")
        fam_rocks.setdefault(f, []).append(r)
    pieces = []
    for f in fams:
        allrocks = [rk for rk,fam in FAMILY.items() if fam==f]
        got = fam_rocks.get(f, [])
        if set(got) >= set(allrocks):
            pieces.append(f)
        else:
            pieces.append(f + " (" + ", ".join(got) + ")")
    others = fam_rocks.get("other", [])
    if others:
        pieces.append(", ".join(others))
    return "; ".join(pieces) if pieces else "various stone"

def first_ore_block(vein_blocks):
    for grp in vein_blocks:
        w = grp.get("with", [])
        if w:
            b = w[0].get("block")
            if b:
                return b
    return None

# ---- load veins ----
mats = {}  # key -> list of band dicts
for path in sorted(glob.glob(os.path.join(VEIN_DIR, "*.json"))):
    fname = os.path.splitext(os.path.basename(path))[0]
    with open(path, encoding="utf-8-sig") as fh:
        data = json.load(fh)
    cfg = data.get("config", {})
    vb = cfg.get("blocks", [])
    band = {
        "file": fname,
        "qual": fname.split("_")[0] if fname.split("_")[0] in QUALIFIERS else "",
        "min_y": cfg.get("min_y"),
        "max_y": cfg.get("max_y"),
        "rarity": cfg.get("rarity", 0),
        "rocks": collect_rocks(vb),
        "indicator": bool(cfg.get("indicator", {}).get("blocks")),
        "icon": first_ore_block(vb),
        "type": data.get("type",""),
    }
    mats.setdefault(material_key(fname), []).append(band)

# skip non-ore filler veins and specials handled by hand
SKIP = {"gravel", "oil_deposit"}

count = 0
sortnum = 10
for key in sorted(mats.keys()):
    if key in SKIP:
        continue
    bands = sorted(mats[key], key=lambda b: -(b["min_y"] if b["min_y"] is not None else 0))
    icon = next((b["icon"] for b in bands if b["icon"]), "tfc:rock/raw/granite")
    disp = title(key)

    # build band bullet lines
    lines = []
    for b in bands:
        qual = b["qual"] or "vein"
        label = {"surface":"Surface band","deep":"Deep band","montane":"Mountain band",
                 "normal":"Main band","rich":"Rich band","fake":"Decoy sample","":"Vein"}.get(b["qual"], b["qual"].capitalize()+" band")
        depth = "Y %s to %s" % (b["min_y"], b["max_y"])
        lines.append("$(li)$(thing)%s:$(0) %s, %s" % (label, depth, rarity_word(b["rarity"])))

    rocks_all = []
    for b in bands:
        for r in b["rocks"]:
            if r not in rocks_all:
                rocks_all.append(r)
    rocks_txt = rocks_phrase(rocks_all)
    has_ind = any(b["indicator"] for b in bands)
    ind_txt = "Yes — small surface samples mark a vein below." if has_ind else "No surface sample; prospect with a pick."

    p1 = "$(bold)%s$(0)$(br2)$(thing)Rocks:$(0) %s$(br2)%s" % (disp, rocks_txt, "$(br)".join(lines))
    p2 = "$(thing)Surface sample:$(0) %s$(br2)Strike exposed host rock with a Prospector's Pick to close in on the vein." % ind_txt

    entry = {
        "name": disp,
        "category": CATEGORY,
        "icon": icon,
        "sortnum": sortnum,
        "read_by_default": True,
        "pages": [
            {"type":"patchouli:text","text":p1},
            {"type":"patchouli:text","text":p2},
        ],
    }
    out = os.path.join(OUT_DIR, key + ".json")
    with open(out, "w", encoding="utf-8") as fh:
        json.dump(entry, fh, indent=2, ensure_ascii=False)
    count += 1
    sortnum += 10

print("Generated %d ore entries into %s" % (count, OUT_DIR))
print("Materials:", ", ".join(sorted(k for k in mats if k not in SKIP)))
