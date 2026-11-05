#!/usr/bin/env python3
"""Generate Patchouli ore-generation entries from the materialism TFC vein JSONs.

Re-run after retuning veins:  python kubejs/gen_ore_entries.py
Hand-written entries (never overwritten): introduction, oil_deposit.
"""
import json, os, re, glob

VEIN_DIR = r"D:\Program Files\CurseForge\minecraft\Instances\Materialism 1.21\kubejs\data\materialism\worldgen\configured_feature\vein"
OUT_DIR  = r"D:\Program Files\CurseForge\minecraft\Instances\Materialism 1.21\kubejs\assets\tfc\patchouli_books\field_guide\en_us\entries\materialism_ore_generation"
CATEGORY = "tfc:materialism_ore_generation"
HAND_WRITTEN = {"introduction", "oil_deposit"}
GENERATED_EXTRA = {"mineral_finder"}

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
BAND_LABEL = {"surface":"Surface band","deep":"Deep band","montane":"Mountain band",
              "normal":"Main band","rich":"Rich band","fake":"Decoy sample","":"Vein"}

# vein rarity = one vein per N chunks. Words are calibrated to the values used in this pack.
def rarity_word(r):
    if r < 50: return "very common"
    if r < 200: return "common"
    if r < 1500: return "uncommon"
    if r < 5000: return "rare"
    if r < 9500: return "very rare"
    return "extremely rare"

def size_word(s):
    if s < 30: return "tiny"
    if s < 80: return "small"
    if s < 150: return "medium"
    if s < 200: return "large"
    if s < 240: return "very large"
    return "huge"

def density_word(d):
    if d < 0.3: return "sparse"
    if d < 0.55: return "moderately dense"
    if d < 0.8: return "dense"
    return "packed"

def material_key(name):
    parts = name.split("_")
    if parts and parts[0] in QUALIFIERS:
        parts = parts[1:]
    return "_".join(parts)

def title(s):
    return " ".join(w.capitalize() for w in s.split("_"))

def rock_of(block):
    return block.split("/")[-1]

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
    fam_rocks = {}
    for r in rocks:
        f = FAMILY.get(r, "other")
        fam_rocks.setdefault(f, []).append(r)
    pieces = []
    for f in fams:
        allrocks = [rk for rk, fam in FAMILY.items() if fam == f]
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

ORE_RE = re.compile(r"^[a-z_0-9]+:ore/(?:(?:poor|normal|rich)_)?([a-z_]+)/[a-z_]+$")

def minerals_of(vein_blocks):
    """Mineral names a vein produces, in order of appearance (loose surface deposits ignored)."""
    out = []
    for grp in vein_blocks:
        for w in grp.get("with", []):
            b = w.get("block", "")
            m = ORE_RE.match(b)
            if m:
                name = m.group(1)
            elif b.startswith("tfc:deposit/"):
                continue
            else:
                name = b.split(":")[-1].split("/")[-1]
            if name not in out:
                out.append(name)
    return out

def link(key, text):
    return "$(l:%s/%s)%s$(0)" % (CATEGORY, key, text)

# ---- load veins ----
mats = {}  # key -> list of band dicts
for path in sorted(glob.glob(os.path.join(VEIN_DIR, "*.json"))):
    fname = os.path.splitext(os.path.basename(path))[0]
    with open(path, encoding="utf-8-sig") as fh:
        data = json.load(fh)
    cfg = data.get("config", {})
    vb = cfg.get("blocks", [])
    vtype = data.get("type", "")
    band = {
        "file": fname,
        "qual": fname.split("_")[0] if fname.split("_")[0] in QUALIFIERS else "",
        "min_y": cfg.get("min_y"),
        "max_y": cfg.get("max_y"),
        "rarity": cfg.get("rarity", 0),
        "size": cfg.get("size", 0),
        "density": cfg.get("density", 0),
        "rocks": collect_rocks(vb),
        "minerals": minerals_of(vb),
        "indicator": bool(cfg.get("indicator", {}).get("blocks")),
        "icon": first_ore_block(vb),
        "type": vtype,
    }
    mats.setdefault(material_key(fname), []).append(band)

# skip non-ore filler veins and specials handled by hand
SKIP = {"gravel", "oil_deposit"}

def band_text(b):
    label = BAND_LABEL.get(b["qual"], b["qual"].capitalize() + " band")
    head = "$(li)$(thing)%s:$(0) Y %s to %s, %s (1 per %s chunks)" % (
        label, b["min_y"], b["max_y"], rarity_word(b["rarity"]), format(b["rarity"], ","))
    shape = "%s vein, %s" % (size_word(b["size"]).capitalize(), density_word(b["density"]))
    mark = "marked by surface samples" if b["indicator"] else "no surface sample"
    return "%s$(br)%s; %s" % (head, shape, mark)

def plain_len(s):
    return len(re.sub(r"\$\([^)]*\)", "", s))

count = 0
sortnum = 10
generated = set()
mineral_home = {}   # mineral -> set of entry keys that contain it
max_page = 0
for key in sorted(mats.keys()):
    if key in SKIP:
        continue
    bands = sorted(mats[key], key=lambda b: -(b["min_y"] if b["min_y"] is not None else 0))
    icon = next((b["icon"] for b in bands if b["icon"]), "tfc:rock/raw/granite")
    disp = title(key)

    minerals = []
    for b in bands:
        for m in b["minerals"]:
            if m not in minerals:
                minerals.append(m)
    # the decoy (fool's gold) band is not a real yield
    real = []
    for b in bands:
        if b["qual"] == "fake":
            continue
        for m in b["minerals"]:
            if m not in real:
                real.append(m)
    shown = real or minerals
    for m in shown:
        mineral_home.setdefault(m, []).append(key)

    rocks_all = []
    for b in bands:
        for r in b["rocks"]:
            if r not in rocks_all:
                rocks_all.append(r)

    p1 = "$(bold)%s$(0)$(br2)$(thing)Contains:$(0) %s$(br2)$(thing)Host rock:$(0) %s" % (
        disp, ", ".join(title(m) for m in shown), rocks_phrase(rocks_all))
    if len(minerals) != len(shown):
        p1 += "$(br2)$(italic)Also shows decoy %s.$(0)" % ", ".join(title(m) for m in minerals if m not in shown)
    p2 = "$(thing)Where to dig$(0)$(br2)" + "$(br2)".join(band_text(b) for b in bands)

    pages = [{"type":"patchouli:text","text":t} for t in (p1, p2)]
    for p in pages:
        max_page = max(max_page, plain_len(p["text"]))

    entry = {
        "name": disp,
        "category": CATEGORY,
        "icon": icon,
        "sortnum": sortnum,
        "read_by_default": True,
        "pages": pages,
    }
    with open(os.path.join(OUT_DIR, key + ".json"), "w", encoding="utf-8") as fh:
        json.dump(entry, fh, indent=2, ensure_ascii=False)
    generated.add(key)
    count += 1
    sortnum += 10

# ---- mineral finder: minerals that live inside a vein of a different name ----
aliases = sorted((m, ks) for m, ks in mineral_home.items() if m not in generated)
if aliases:
    lines = []
    for m, ks in aliases:
        lines.append("$(thing)%s$(0): %s" % (title(m), ", ".join(link(k, title(k)) for k in ks)))
    per_page = 7
    pages = [{"type":"patchouli:text","text":"$(bold)Mineral Finder$(0)$(br2)Some minerals are not mined from a vein of their own name — they share a deposit with another ore. Look them up here."}]
    for i in range(0, len(lines), per_page):
        pages.append({"type":"patchouli:text","text":"$(br2)".join(lines[i:i+per_page])})
    with open(os.path.join(OUT_DIR, "mineral_finder.json"), "w", encoding="utf-8") as fh:
        json.dump({"name":"Mineral Finder","category":CATEGORY,"icon":"tfc:metal/propick/copper",
                   "sortnum":5,"read_by_default":True,"pages":pages}, fh, indent=2, ensure_ascii=False)
    generated.add("mineral_finder")
elif os.path.exists(os.path.join(OUT_DIR, "mineral_finder.json")):
    os.remove(os.path.join(OUT_DIR, "mineral_finder.json"))

stale = sorted(os.path.splitext(f)[0] for f in os.listdir(OUT_DIR)
               if f.endswith(".json") and os.path.splitext(f)[0] not in generated | HAND_WRITTEN)
print("Generated %d ore entries into %s" % (count, OUT_DIR))
print("Longest page: %d visible characters (aim for <= ~420)" % max_page)
print("Materials:", ", ".join(sorted(k for k in mats if k not in SKIP)))
print("Mineral finder aliases:", ", ".join(m for m, _ in aliases) or "none")
if stale:
    print("WARNING stale entries with no vein (delete by hand if intended):", ", ".join(stale))
