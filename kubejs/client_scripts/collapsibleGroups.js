// Collapsible Groups: JEI item groups (explicit groups first, then auto-detected variant families)

const GROUP_NS = 'materialism'
const MIN_FAMILY = 6
const NS_MERGE = { afc: 'tfc' }

const COLORS = ['white', 'orange', 'magenta', 'light_blue', 'yellow', 'lime', 'pink', 'gray',
    'light_gray', 'cyan', 'purple', 'blue', 'brown', 'green', 'red', 'black']

const DND_COLORS = COLORS.concat(['amber', 'aqua', 'beige', 'coral', 'forest', 'ginger', 'indigo', 'maroon',
    'mint', 'navy', 'olive', 'rose', 'slate', 'tan', 'teal', 'verdant'])

const METAL_ALIASES = ['iron', 'golden', 'igneous_extrusive', 'igneous_intrusive', 'metamorphic', 'sedimentary']

const METAL_SOURCES = /^((tfc|tfc_metallurgy|firmalife|kubejs|rnr):metal\/|tfc:stone\/|tfc_items:|tfc_metallurgy:[a-z_]+_bars$|kubejs:wire\/[a-z_]+_wire$|chemica:[a-z_]+_dust$|(vintageimprovements|createaddition):[a-z_]+_wire$)/

const CBC_METALS = ['bronze', 'cast_iron', 'steel', 'nethersteel', 'wrought_iron']

const FAMILY_EXTRAS = [
    ['tfc:wood/planks/#', /^(minecraft:bamboo_(planks|mosaic)|tfc:wood\/planks\/palm_mosaic)$/],
    ['tfc:wood/planks/#_slab', /^(minecraft:bamboo_(mosaic_)?slab|tfc:wood\/planks\/palm_mosaic_slab)$/],
    ['tfc:wood/planks/#_stairs', /^(minecraft:bamboo_(mosaic_)?stairs|tfc:wood\/planks\/palm_mosaic_stairs)$/],
    ['tfc:metal/grate/#', /^tfc:metal\/(exposed|weathered|oxidized)_grate\/[a-z_]+$/],
    ['tfc:wattle/#', /^tfc:wattle\/unstained$/],
    ['rnr:rock/sett_road/#', /^rnr:brick_road$/],
    ['rnr:rock/sett_road/#_slab', /^rnr:brick_road_slab$/],
    ['rnr:rock/sett_road/#_stairs', /^rnr:brick_road_stairs$/],
    ['tfc:wood/fence/#', /^minecraft:bamboo_fence$/],
    ['tfc:wood/fence_gate/#', /^minecraft:bamboo_fence_gate$/],
    ['tfc:wood/door/#', /^minecraft:bamboo_door$/],
    ['tfc:wood/trapdoor/#', /^minecraft:bamboo_trapdoor$/],
    ['tfc:wood/button/#', /^minecraft:bamboo_button$/],
    ['tfc:wood/pressure_plate/#', /^minecraft:bamboo_pressure_plate$/],
    ['tfc:wood/sign/#', /^minecraft:bamboo_sign$/],
    ['tfc:wood/boat/#', /^minecraft:bamboo_raft$/]
]

function metalKey(key) {
    return key
        .replace(/^(tfc_metallurgy|firmalife|kubejs|rnr):metal\//, 'tfc:metal/')
        .replace(/^tfc_metallurgy:#_bars$/, 'tfc:metal/bars/#')
        .replace(/^tfc:stone\/knife_head\//, 'tfc:metal/knife_blade/')
        .replace(/^tfc:stone\//, 'tfc:metal/')
        .replace(/^kubejs:wire\/#_wire$/, 'tfc:metal/wire/#')
        .replace(/^chemica:#_dust$/, 'tfc:metal/dust/#')
        .replace(/^(tfc_items|vintageimprovements|createaddition):#_([a-z_]+)$/, 'tfc:metal/$2/#')
}

const DECO_METALS =['andesite', 'brass', 'copper', 'gold', 'industrial_iron', 'industrial', 'iron', 'netherite', 'zinc']

const FLOWERS = ['allium', 'anthurium', 'azalea', 'black_orchid', 'blood_lily', 'blue_ginger', 'blue_orchid',
    'buttercup', 'butterfly_milkweed', 'calendula', 'canna', 'cornflower', 'dandelion', 'desert_flame', 'edelweiss',
    'foxglove', 'goldenrod', 'grape_hyacinth', 'heather', 'heliconia', 'hibiscus', 'houstonia', 'kangaroo_paw',
    'kinnikinnick', 'labrador_tea', 'lilac', 'lily_of_the_valley', 'lotus', 'maiden_pink', 'marigold',
    'meads_milkweed', 'morning_glory', 'moss_campion', 'mountain_hullwort', 'nasturtium', 'oxeye_daisy', 'palash',
    'penwortel', 'perovskia', 'pickerelweed', 'poppy', 'primrose', 'pulsatilla', 'purple_water_lily', 'qantu',
    'ramirezella', 'ramunda', 'rose', 'sacred_datura', 'sapphire_tower', 'sea_lavender', 'silver_spurflower',
    'snapdragon_[a-z]+', 'strelitzia', 'sunflower', 'trillium', 'tropical_milkweed', 'tulip_[a-z]+', 'water_canna',
    'white_water_lily', 'yellow_saxifrage', 'yellow_water_lily']

const USEFUL_PLANTS = ['cattail', 'water_taro', 'giant_kelp_flower', 'saguaro', 'barrel_cactus', 'mussels',
    'barnacles', 'sugar_cane', 'golden_bamboo']

const HERBS = ['basil', 'bay_laurel', 'cardamom', 'cilantro', 'cumin', 'oregano', 'pimento', 'vanilla']

const MCW_ROOF_SHAPES = ['roof', 'attic_roof', 'lower_roof', 'steep_roof', 'top_roof', 'upper_lower_roof',
    'upper_steep_roof', 'roof_block', 'roof_slab']

const RNR_ROOF = '(wood\\/shingles\\/[a-z_]+|(terracotta|ceramic|thatch)_roof|roof_frame)'

const EXPLICIT = [
    ['logs', 'Logs', /^((tfc|afc):wood\/(log|wood|stripped_log|stripped_wood)\/|minecraft:(stripped_)?bamboo_block$|tfc:golden_bamboo_block$)/],
    ['saplings', 'Tree Saplings', /^(tfc|afc):wood\/sapling\//],
    ['fruit_saplings', 'Fruit Tree Saplings', /^(tfc|firmalife):plant\/[a-z_]+_sapling$/],
    ['fruit_leaves', 'Fruit Tree Leaves', /^(tfc|firmalife):plant\/[a-z_]+_leaves$/],
    ['berry_bushes', 'Berry Bushes', /^(tfc|firmalife):plant\/(?!dead_bush$)[a-z_]+_bush$/],
    ['herbs', 'Herbs', new RegExp('^firmalife:plant\\/(' + HERBS.join('|') + ')$')],
    ['useful_plants', 'Useful Wild Plants', new RegExp('^tfc:plant\\/(' + USEFUL_PLANTS.join('|') + ')$')],
    ['flowers', 'Flowers', new RegExp('^tfc:plant\\/(' + FLOWERS.join('|') + ')$')],
    ['decorative_plants', 'Decorative Plants', /^tfc:plant\//],
    ['corals', 'Corals', /^tfc:coral\//],
    ['twigs', 'Twigs', /^(tfc|afc):wood\/twig\//],
    ['gravel', 'Gravel', /^tfc:rock\/gravel\//],
    ['magma', 'Magma Blocks', /^tfc:rock\/magma\//],
    ['alabaster', 'Alabaster', /^tfc:alabaster(\/|_brick$)/],
    ['jams', 'Jams & Jars', /^(tfc:[a-z_]+_jam|firmalife:food\/(?!toast_)[a-z_]+_jam|(tfc|firmalife):jar\/(?!(compost|rotten_compost|guano|honey)$)[a-z_]+)$/],
    ['hides', 'Hides', /^(tfc:((small|medium|large)_[a-z]+|treated)_hide|butchery:[a-z_]+_pelt)$/],
    ['molten_buckets', 'Molten Metal Buckets', /^(tfc|tfc_metallurgy|firmalife):bucket\/metal\//],
    ['chalk', 'Chalk', /^chalk:([a-z_]+_)?chalk$/],
    ['floppy_disks', 'Floppy Disks', /^computercraft:(disk|treasure_disk)$/],
    ['goat_horns', 'Goat Horns', /^minecraft:goat_horn$/],
    ['rockets', 'Firework Rockets', /^minecraft:firework_rocket$/],
    ['rnr_roofs', 'Roofs (RnR)', new RegExp('^rnr:(?![a-z_\\/]+_(slab|stairs)$)' + RNR_ROOF + '$')],
    ['rnr_roof_slabs', 'Roof Slabs (RnR)', new RegExp('^rnr:' + RNR_ROOF + '_slab$')],
    ['rnr_roof_stairs', 'Roof Stairs (RnR)', new RegExp('^rnr:' + RNR_ROOF + '_stairs$')],
    ['rnr_roof_tiles', 'Shingles & Roof Tiles (RnR)', /^rnr:(wood\/shingle\/[a-z_]+|(unfired_)?(terracotta_)?roof_tile|ceramic_roof_tile)$/],
    ['rnr_concrete_roads', 'Concrete Roads (RnR)', /^rnr:[a-z_]*concrete_(road|flagstones|sett)[a-z_]*$/],
    ['copper_blocks', 'Oxidizing Copper Blocks', /^(create:(waxed_)?((exposed|weathered|oxidized)_)?copper_(shingle|tile)(s|_slab|_stairs)|dndecor:(waxed_)?((exposed|weathered|oxidized)_)?copper_floor|minecraft:(waxed_)?((exposed|weathered|oxidized)_)?(copper_block|copper|cut_copper(_slab|_stairs)?|chiseled_copper|copper_grate|copper_door|copper_trapdoor|copper_bulb))$/],
    ['liquid_concrete_buckets', 'Liquid Concrete Buckets (TFMG)', /^tfmg:liquid_([a-z_]+_)?concrete_bucket$/],
    ['pilots', 'Pilots (Bells & Whistles)', /^bellsandwhistles:[a-z_]+_pilot$/],
    ['pumpkins', 'Carved Pumpkins', /^(firmalife:(carved|lit)_pumpkin\/[a-z_]+|minecraft:carved_pumpkin|tfc:jack_o_lantern)$/],
    ['kaolin', 'Kaolin Clay', /^tfc:((pink|red|white)_)?kaolin_clay(_grass)?$/],
    ['soils', 'Soils', /^tfc:((dirt|clay|clay_duff|clay_grass|coarse_dirt|duff|farmland|grass|grass_path|mud|muddy_roots|rooted_dirt)\/[a-z]+|peat(_grass)?)$/],
    ['kunai', 'Kunai', /^tfc_throwable_rocks:kunai\//],
    ['shuriken', 'Shuriken', /^tfc_throwable_rocks:shuriken\//],
    ['metal_ladders', 'Metal Ladders', /^(create|tfmg|createdeco):[a-z_]+_ladder$/],
    ['mud_brick_blocks', 'Mud Brick Blocks', /^tfc:(mud_bricks\/[a-z_]+|smooth_mud_bricks)$/],
    ['mud_bricks', 'Mud Bricks', /^tfc:(mud_brick|drying_bricks)\/[a-z]+$/],
    ['carcasses', 'Carcasses (Butchery)', /^butchery:[a-z_]+_carcass(_block)?$/],
    ['heads', 'Heads (Butchery)', /^butchery:[a-z_]+_head$/],
    ['head_mounts', 'Head Mounts (Butchery)', /^butchery:[a-z_]+_head_mount$/],
    ['skeletons', 'Skeletons (Butchery)', /^butchery:([a-z_]+_)?skeleton(_corpse)?$/],
    ['blooms', 'Blooms', /^(tfc|tfc_metallurgy):(raw|refined)_[a-z_]+_bloom$/],
    ['mcw_bridges', 'Bridges (Macaw\'s)', /^mcw_tfc_aio_unofficial:bridges\/[a-z_]+_bridges\/([a-z_]+_log_bridge_middle|(dry_)?bamboo_bridge|brick_bridge|iron_bridge)$/],
    ['mcw_bridge_stairs', 'Bridge Stairs (Macaw\'s)', /^mcw_tfc_aio_unofficial:bridges\/[a-z_]+_bridges\/([a-z_]+_log_bridge_stair|(dry_)?bamboo_bridge_stair|brick_bridge_stair|iron_bridge_stair)$/],
    ['mcw_bridge_piers', 'Bridge Supports (Macaw\'s)', /^mcw_tfc_aio_unofficial:bridges\/[a-z_]+_bridges\/[a-z_]+_bridge_pier$/],
    ['nuggets', 'Metal Nuggets', /^[a-z_]+:(?!experience_)[a-z_]+_nugget$/],
    ['banner_patterns', 'Banner Patterns', /^minecraft:[a-z_]+_banner_pattern$/],
    ['cbc_ammo', 'Ammunition (Big Cannons)', /^createbigcannons:[a-z_0-9]*(shell|shot|fuze|round|cartridge|charge|grapeshot|tracer_tip)[a-z_0-9]*$/],
    ['cbc_moulds', 'Cast Moulds (Big Cannons)', /^createbigcannons:[a-z_]+_cast_mould$/],
    ['greenhouse', 'Greenhouse Parts (Firmalife)', /^firmalife:[a-z_]+_greenhouse_[a-z_]+$/],
    ['tongs', 'Tongs', /^tfchotornot:tongs\//],
    ['tong_parts', 'Tong Parts', /^tfchotornot:tong_part\//],
    ['springs', 'Springs (VI)', /^vintageimprovements:(?!small_)[a-z_]+_spring$/],
    ['small_springs', 'Small Springs (VI)', /^vintageimprovements:small_[a-z_]+_spring$/],
    ['trusses', 'Trusses (TFMG)', /^tfmg:[a-z_]+_truss$/],
    ['frames', 'Frames (TFMG)', /^tfmg:[a-z_]+_frame$/],
    ['decals_signs', 'Decals & Signs',/^(createdeco:decal_[a-z_]+|electroenergetics:[a-z_]+_sign)$/],
    ['create_glass', 'Glass (Create)', /^create:(framed|horizontal_framed|vertical_framed|tiled)_glass(_pane|_door|_trapdoor)?$/],
    ['create_windows', 'Windows (Create)', /^create:[a-z_]+_window(_pane)?$/],
    ['dnd_crushing_wheels', 'Crushing Wheels (D&D)', /^dndecor:[a-z_]+_crushing_wheel$/],
    ['dnd_millstones', 'Millstones (D&D)', /^dndecor:[a-z_]+_millstone$/],
    ['dnd_dark_metal', 'Dark Metal (D&D)', /^dndecor:(large_)?dark_metal_/]
]

const FLUID_GROUPS = [
    ['dye_fluids', 'Dye Fluids', '#c:dyes'],
    ['liquid_concrete', 'Liquid Concrete (TFMG)', ['tfmg:liquid_concrete'].concat(COLORS.map(c => 'tfmg:liquid_' + c + '_concrete'))]
]

function escapeRegex(s) {
    return s.replace(/[.*+?^${}()|[\]\\\/]/g, '\\$&')
}

function titleCase(s) {
    return s.replace(/_/g, ' ').replace(/\b[a-z]/g, c => c.toUpperCase())
}

function capture(ids, re) {
    const seen = {}
    ids.forEach(id => {
        const m = re.exec(id)
        if (m) seen[m[m.length - 1]] = true
    })
    return Object.keys(seen).sort()
}

function generatedGroups(ids) {
    const groups = []
    MCW_ROOF_SHAPES.forEach(shape => {
        groups.push(['mcw_' + shape, titleCase(shape) + 's (Macaw\'s)',
            new RegExp('^mcw_tfc_aio_unofficial:roofs\\/(?![a-z_]*(concrete|terracotta)_roofs)([a-z_]+)_roofs\\/\\2s?_' + shape + '$')])
    })
    capture(ids, /^(create|dndecor|tfmg):cut_([a-z_]+)_bricks$/).forEach(stone => {
        groups.push(['palette_' + stone, titleCase(stone) + ' (Create Palette)',
            new RegExp('^(create|dndecor|tfmg):((cut|polished_cut|small|layered)_)?' + stone + '(_pillar|_bricks|_brick_(slab|stairs|wall)|_(slab|stairs|wall))?$')])
    })
    capture(ids, /^firmalife:(?!insulated_)([a-z]+)_oven_top$/).forEach(oven => {
        groups.push(['oven_' + oven, titleCase(oven) + ' Oven (Firmalife)',
            new RegExp('^firmalife:(insulated_)?' + oven + '_oven_(top|bottom|chimney|hopper)$')])
    })
    capture(ids, /^(tfc|tfc_metallurgy|firmalife):ore\/(small|poor|normal|rich)_([a-z_]+)$/).forEach(mineral => {
        groups.push(['ore_' + mineral, titleCase(mineral) + ' Ore',
            new RegExp('^(tfc|tfc_metallurgy|firmalife):ore\\/(small|poor|normal|rich)_' + mineral + '$')])
    })
    CBC_METALS.forEach(metal => {
        groups.push(['cbc_' + metal, titleCase(metal) + ' Cannon Parts (Big Cannons)',
            new RegExp('^createbigcannons:([a-z_]+_)?' + metal + '_(?!(ingot|nugget|block|scrap|bucket)$)[a-z_]+$')])
    })
    capture(ids, /^createdeco:corner_([a-z]+)_bricks$/).forEach(brick => {
        groups.push(['createdeco_' + brick + '_bricks', titleCase(brick) + ' Bricks (Create Deco)',
            new RegExp('^createdeco:((corner|cracked|long|mossy|short|tiled)_)?' + brick + '_brick(s|_slab|_stairs|_wall)$')])
    })
    return groups
}

function tokenRegex(tokens) {
    const alt = tokens.slice().sort((a, b) => b.length - a.length).map(escapeRegex).join('|')
    return new RegExp('(^|[:\\/_])(' + alt + ')(?=$|[\\/_])', 'g')
}

function displayName(id) {
    try {
        return String(Item.of(id).getHoverName().getString())
    } catch (e) {
        return null
    }
}

function pathName(key) {
    const segs = key.split(':')[1].split('/')
        .map(s => s.replace(/#/g, '').replace(/^_+|_+$/g, '').replace(/__+/g, '_'))
        .filter(s => s && ['wood', 'rock', 'block'].indexOf(s) < 0)
    return titleCase(segs.slice(-2).join(' '))
}

function familyName(key, member) {
    const full = displayName(member[0])
    if (full) {
        const words = titleCase(member[1]).split(' ').map(escapeRegex).join('\\s+')
        const stripped = full.replace(new RegExp('\\b' + words + '\\b', 'ig'), ' ').replace(/\s+/g, ' ').trim()
        if (stripped && stripped !== full.trim()) return stripped
    }
    return pathName(key)
}

RecipeViewerEvents.groupEntries('item', event => {
    const ids = []
    Item.getTypeList().forEach(id => ids.push(String(id)))
    const idSet = {}
    ids.forEach(id => idSet[id] = true)
    const claimed = {}
    let explicitCount = 0

    EXPLICIT.concat(generatedGroups(ids)).forEach(g => {
        const members = ids.filter(id => !claimed[id] && g[2].test(id))
        if (members.length === 0) return
        members.forEach(id => claimed[id] = true)
        event.group(members, GROUP_NS + ':' + g[0], g[1])
        explicitCount++
    })

    const metals = capture(ids, /^(tfc|tfc_metallurgy|firmalife):metal\/ingot\/([a-z_]+)$/)
        .concat(capture(ids, /^tfc_items:([a-z_]+)_wire$/))
        .concat(METAL_ALIASES)

    const sets = [
        ['woods', 'Woods', capture(ids, /^(tfc|afc):wood\/log\/([a-z_]+)$/), null],
        ['metals', 'Metals', metals, METAL_SOURCES, metalKey],
        ['metals', 'Metals', DECO_METALS, /^(createdeco|dndecor):/],
        ['colors', 'Colors', DND_COLORS, /^dndecor:/],
        ['colors', 'Colors', COLORS, null],
        ['rocks', 'Rocks', capture(ids, /^tfc:rock\/raw\/([a-z]+)$/), null]
    ]

    let autoCount = 0
    sets.forEach(set => {
        const re = tokenRegex(set[2])
        const families = {}
        ids.forEach(id => {
            if (claimed[id] || (set[3] && !set[3].test(id))) return
            let variant = null
            let mixed = false
            const key = id.replace(re, (m, pre, tok) => {
                if (variant !== null && variant !== tok) mixed = true
                variant = tok
                return pre + '#'
            })
            if (variant === null || mixed) return
            const aliased = set[4] ? set[4](key) : key
            const ns = aliased.split(':')[0]
            const merged = (NS_MERGE[ns] || ns) + aliased.substring(ns.length)
            if (!families[merged]) families[merged] = []
            families[merged].push([id, variant])
        })

        Object.keys(families).sort().forEach(key => {
            const members = families[key]
            if (members.length < MIN_FAMILY) return
            members.forEach(m => claimed[m[0]] = true)
            FAMILY_EXTRAS.forEach(extra => {
                if (extra[0] === key) ids.forEach(id => {
                    if (!claimed[id] && extra[1].test(id)) { members.push([id, null]); claimed[id] = true }
                })
            })
            if (set[0] === 'colors' && key.split('#').length === 2) {
                [key.replace('#_', ''), key.replace('_#', ''), key.replace('/#', '')].forEach(base => {
                    if (base !== key && idSet[base] && !claimed[base]) { members.push([base, null]); claimed[base] = true }
                })
            }
            const groupId = GROUP_NS + ':auto/' + set[0] + '/' + key.replace(':', '/').replace(/#/g, 'x')
            event.group(members.map(m => m[0]), groupId, familyName(key, members[0]) + ' (' + set[1] + ')')
            autoCount++
        })
    })

    console.info('[collapsibleGroups] ' + explicitCount + ' explicit and ' + autoCount + ' auto item groups registered')
})

RecipeViewerEvents.groupEntries('fluid', event => {
    FLUID_GROUPS.forEach(g => event.group(g[2], GROUP_NS + ':' + g[0], g[1]))
    const molten = ['#tfc:molten_metals']
    Item.getTypeList().forEach(id => {
        const m = /^tfc_metallurgy:bucket\/metal\/([a-z_]+)$/.exec(String(id))
        if (m) molten.push('tfc_metallurgy:metal/' + m[1])
    })
    event.group(molten, GROUP_NS + ':molten_metals', 'Molten Metals')
})
