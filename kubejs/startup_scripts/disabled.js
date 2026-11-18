// The pack's disabled and hidden content, read by server_scripts/disabled.js (recipes) and client_scripts/hidden.js (JEI). Edits need a game restart.
// Entries are ids, or regexes matched anywhere in the id.

const ids = (prefix, names, suffix) => names.map(name => prefix + name + (suffix || ''))

// Disabled: every mod recipe making them is removed, and they're hidden in JEI
const DISABLED_ITEMS = [].concat(
  // TFC Metallurgy metals the pack doesn't use
  [/.*signalum.*/, /.*blutonium.*/, /.*enderium.*/, /.*lumium.*/, /.*mithril.*/, /.*pink_slime.*/, /.*refined_glowstone.*/, /.*refined_obsidian.*/,
    /.*compressed_iron.*/, /.*tfc_metallurgy.*andesite.*/, 'tfc_metallurgy:bucket/metal/graphite'],
  // Thorium and uranium make no tools, armor or metalwork
  [].concat.apply([], ['thorium', 'uranium'].map(metal => ids('tfc_metallurgy:metal/', ['anvil', 'chain', 'lamp', 'unfinished_lamp', 'trapdoor', 'tuyere',
    'fish_hook', 'fishing_rod', 'pickaxe', 'pickaxe_head', 'propick', 'propick_head', 'axe', 'axe_head', 'shovel', 'shovel_head', 'hoe', 'hoe_head',
    'chisel', 'chisel_head', 'hammer', 'hammer_head', 'saw', 'saw_blade', 'javelin', 'javelin_head', 'sword', 'sword_blade', 'mace', 'mace_head', 'knife',
    'knife_blade', 'scythe', 'scythe_blade', 'shears', 'unfinished_helmet', 'helmet', 'unfinished_chestplate', 'chestplate', 'unfinished_greaves', 'greaves',
    'unfinished_boots', 'boots', 'shield'], '/' + metal))),
  // Create: the pack makes its own alloys, sheets and food
  ['create:cart_assembler', /create:.*blaze.*/, /create:.*obsidian.*/, 'create:controller_rail', 'create:andesite_alloy', 'create:andesite_alloy_block', 'create:brass_ingot',
    'create:zinc_ingot', 'create:zinc_ore', 'create:deepslate_zinc_ore', 'create:raw_zinc', 'create:raw_zinc_block', /create:crushed_raw.*/,
    'create:brass_sheet', 'create:golden_sheet', 'create:cinder_flour', 'create:wheat_flour', 'create:dough', 'create:chocolate_bucket',
    'create:bar_of_chocolate', 'create:honeyed_apple'],
  // Only the brass mechanical extruder is kept
  ['create_mechanical_extruder:mechanical_extruder'],
  // Vintage Improvements metal parts, made from TFC metals instead
  [/vintageimprovements:.*_rod/, /vintageimprovements:.*sheet/, /vintageimprovements:.*andesite.*/, /vintageimprovements:.*netherite.*/,
    /vintageimprovements:.*nethersteel.*/, /vintageimprovements:.*blaze.*/, 'vintageimprovements:vanadium_ingot', 'vintageimprovements:sulfur',
    'vintageimprovements:sulfur_chunk', 'vintageimprovements:sulfur_block', 'vintageimprovements:sulfuric_acid_bucket'],
  // Create Deco and Create Crafts & Additions metal parts
  [/createdeco:.*netherite.*/, 'createdeco:andesite_sheet', 'createdeco:zinc_sheet', 'createaddition:electrum_sheet', 'createaddition:zinc_sheet',
    'createaddition:electrum_ingot', /createaddition:.*rod/, 'createaddition:diamond_grit_sandpaper', 'createaddition:diamond_grit'],
  // Crafts & Additions and New Age electrics; transmission is Electro Energetics', generation New Age's
  ['createaddition:electric_motor', 'createaddition:alternator', 'createaddition:capacitor', 'createaddition:modular_accumulator',
    'createaddition:electric_pump', 'createaddition:connector', 'createaddition:small_light_connector', 'createaddition:large_connector',
    'createaddition:redstone_relay', 'createaddition:spool', 'createaddition:copper_spool', 'createaddition:electrum_spool', 'createaddition:gold_spool',
    'createaddition:festive_spool', 'create_new_age:electrical_connector', 'create_new_age:copper_wire', /create_new_age:overcharged.*/,
    'create_new_age:blank_circuit', 'create_new_age:copper_circuit', 'create_new_age:thorium_ore', 'create_new_age:thorium', 'create_new_age:copper_wire_block'],
  ids('electroenergetics:', ['alternator_rotor', 'stator', 'alternator_brushes', 'three_phase_alternator_brushes', 'magnet', 'plant_oil_bucket']),
  // TFMG ores, metals, tools and parts the pack makes from TFC metals
  ['tfmg:lead_ore', 'tfmg:deepslate_lead_ore', 'tfmg:nickel_ore', 'tfmg:deepslate_nickel_ore', 'tfmg:lithium_ore', 'tfmg:deepslate_lithium_ore',
    /tfmg:raw.*/, 'tfmg:crushed_raw_lithium', 'tfmg:sulfur', 'tfmg:lignite', 'tfmg:fireclay', 'tfmg:fireclay_ball', 'tfmg:fireproof_brick',
    'tfmg:copper_sulfate', 'tfmg:bauxite_powder', 'tfmg:limesand', 'tfmg:nickel_ingot', 'tfmg:lithium_ingot', 'tfmg:steel_ingot', 'tfmg:cast_iron_ingot',
    'tfmg:constantan_nugget', 'tfmg:constantan_block', 'tfmg:lead_sheet', 'tfmg:aluminum_sheet', 'tfmg:cast_iron_sheet', 'tfmg:heavy_plate',
    'tfmg:industrial_aluminum_casing', 'tfmg:screw', 'tfmg:aluminum_bars', 'tfmg:steel_bars', 'tfmg:copper_wire', 'tfmg:aluminum_wire',
    'tfmg:constantan_wire', 'tfmg:plastic_sheet', 'tfmg:plastic_block', 'tfmg:molten_plastic_bucket'],
  ids('tfmg:', ['lead', 'steel', 'aluminum'].map(metal => [metal + '_axe', metal + '_hoe', metal + '_shovel', metal + '_pickaxe', metal + '_sword'])
    .reduce((all, tools) => all.concat(tools), [])),
  ids('tfmg:', ['aluminum_cable_hub', 'brass_cable_hub', 'copper_cable_hub', 'heavy_cable_hub', 'steel_cable_hub', 'steel_casing_cable_hub',
    'cable_connector', 'cable_tube', 'concrete_encased_cable_tube', 'copycat_cable_base', 'copycat_cable_block', 'diagonal_cable_block', 'electric_post',
    'concrete_encased_electric_post', 'glass_cable_insulator', 'large_switch', 'electric_motor', 'heavy_electric_motor', 'unfinished_electric_motor',
    'unfinished_heavy_electric_motor', 'potentiometer', 'encased_potentiometer', 'unfinished_potentiometer', 'rotor', 'stator', 'generator',
    'unfinished_generator', 'electric_diode']),
  [/^tfmg:([a-z_]+_)?multimeter$/],
  // Create Big Cannons metals and molten metal buckets
  ['createbigcannons:steel_scrap', 'createbigcannons:cast_iron_ingot', 'createbigcannons:steel_ingot', 'createbigcannons:nethersteel_ingot',
    'createbigcannons:cast_iron_nugget', 'createbigcannons:bronze_ingot', 'createbigcannons:molten_cast_iron_bucket', 'createbigcannons:molten_bronze_bucket',
    'createbigcannons:molten_steel_bucket', 'createbigcannons:molten_nethersteel_bucket'],
  // Create Optical coils, replaced by TFMG coils
  ['create_optical:copper_coil', 'create_optical:golden_coil'],
  // TFC Items rods, wires and double sheets that other mods already provide
  [/.*tfc_items.*rod.*/, 'tfc_items:aluminum_double_sheet', 'tfc_items:constantan_double_sheet', 'tfc_items:electrum_double_sheet',
    'tfc_items:lead_double_sheet', 'tfc_items:uranium_double_sheet'],
  ids('tfc_items:', ['aluminum', 'brass', 'bronze', 'cast_iron', 'constantan', 'copper', 'electrum', 'gold', 'lead', 'nickel', 'rose_gold', 'silver',
    'steel', 'tin', 'uranium', 'wrought_iron', 'zinc'], '_wire'),
  // Cooking pots and grills replaced by the pack's cooking
  ['tfc:grill', 'tfc:pot', 'tfc:stove_pot', 'castirongrill:cast_iron_grill'],
  ['minecraft:cake', 'bellsandwhistles:headlight'],
  // Weather 2
  [/.*weather2.*/],
  // Steam 'n' Rails tracks of vanilla and Nether woods (the TFC-wood tracks replace them) and Nether/End tracks
  [/^railways:track_(incomplete_)?(oak|birch|spruce|jungle|dark_oak|acacia|cherry|mangrove|bamboo|stripped_bamboo|crimson|warped|blackstone|ender|phantom)(_narrow|_wide)?$/],
  // TFCHotOrNot tongs of metals other than TFC's base ones
  [/^tfchotornot:(tongs|tong_part)\/(?!(wood|bismuth|bismuth_bronze|black_bronze|bronze|brass|copper|gold|nickel|rose_gold|silver|tin|zinc|sterling_silver|wrought_iron|cast_iron|pig_iron|steel|black_steel|blue_steel|red_steel)$).+$/],
  // Aeronautics items TFC recipes bypass
  ['aeronautics:end_stone_powder', 'aeronautics:levitite_blend', 'aeronautics:levitite_blend_bucket', 'simulated:spring'],
  // Butchery: items of mobs that don't live in TFC worlds, and equipment TFC replaces
  [/butchery:.*salt.*/, /butchery:.*sulfur.*/, /butchery:.*dragon.*/, /butchery:.*end.*/, /butchery:.*shulker.*/, /butchery:.*strider.*/,
    /butchery:.*piglin.*/, /butchery:.*hoglin.*/, /butchery:.*zoglin.*/, /butchery:.*wither.*/, /butchery:.*magma.*/, /butchery:.*blazer.*/,
    /butchery:.*sculk.*/, /butchery:.*crimson.*/, /butchery:.*warped.*/, /butchery:.*creeper.*/, /butchery:.*spider.*/, /butchery:.*slime.*/,
    /butchery:.*phantom.*/, /butchery:.*silverfish.*/, /butchery:.*guardian.*/, /butchery:.*elder.*/, /butchery:.*ravager.*/, /butchery:.*warden.*/,
    /butchery:.*illager.*/, /butchery:.*evoker.*/, /butchery:.*vindicator.*/, /butchery:.*witch.*/, /butchery:.*sniffer.*/, /butchery:.*zombie.*/,
    /butchery:.*drowned.*/, /butchery:.*husk.*/, /butchery:.*stray.*/, /butchery:skeleton.*/, /butchery:.*iron.?golem.*/, /butchery:.*axolotl.*/,
    /butchery:.*bat.*/, /butchery:.*bee.*/, /butchery:.*camel.*/, /butchery:.*dolphin.*/, /butchery:.*goat.*/, /butchery:.*glow_squid.*/,
    /butchery:.*llama.*/, /butchery:.*mooshroom.*/, /butchery:.*ocelot.*/, /butchery:.*panda.*/, /butchery:.*polar.?bear.*/, /butchery:.*pufferfish.*/,
    /butchery:.*villager.*/, /butchery:.*humanmeat.*/, /butchery:.*playercorpse.*/, /butchery:.*diorite.*/],
  ids('butchery:', ['icey_bone', 'icey_bone_meal', 'honey_stomach', 'poison_sac', 'skin_rack', 'freezer', 'photos', 'cling_film', 'coin',
    'deep_smithing_template', 'diamond_cleaver', 'diamond_hacksaw', 'diamond_hammer', 'diamond_skinning_knife']),
  // Astikor carts of vanilla woods, and of AFC species without their own wood
  [/^astikorcartsredux:/],
  ['acacia_koa', 'atlas_cedar', 'bald_cypress', 'balsam_fir', 'bigleaf_maple', 'black_beech', 'black_oak', 'black_spruce', 'chinquapin', 'coast_redwood',
    'coast_spruce', 'columnar_araucaria', 'dawn_redwood', 'flame_of_the_forest', 'giant_rosewood', 'gum_arabic', 'hardy_chestnut', 'horsetail_ironwood',
    'huangshan_pine', 'iroko_teak', 'jaggery_palm', 'juniper', 'kauri', 'lebombo_ironwood', 'live_oak', 'mountain_ash', 'mountain_fir', 'mpingo_blackwood',
    'parana', 'poplar', 'rainbow_eucalyptus', 'rauli_beech', 'red_pine', 'red_silk_cotton', 'redcedar', 'rubber_fig', 'sapele_mahogany', 'scrub_hickory',
    'sitka_spruce', 'small_leaf_mahogany', 'stone_pine', 'tamarack', 'weeping_cypress', 'weeping_maple', 'weeping_willow']
    .map(species => new RegExp('tfcastikorcarts:.*' + species + '.*')),
  // Create Sifter outputs of Nether and End blocks
  ['createsifter:dust', 'createsifter:crushed_netherrack', 'createsifter:crushed_end_stone', 'createsifter:crushed_basalt', /createsifter.*pebble/,
    /createsifter.*piece/],
  // Vanilla content TFC replaces or that can't be reached
  [/minecraft:(?!leather).*helm/, /minecraft:(?!leather).*chestplate/, /minecraft:(?!leather).*leggings/, /minecraft:(?!leather).*boots/,
    /minecraft:.*ore.*/, /minecraft:.*nylium.*/, /minecraft:.*nether.*/, /minecraft:.*raw.*/, /minecraft:.*shovel.*/, /minecraft:.*axe.*/,
    /minecraft:.*hoe.*/, /minecraft:.*sword.*/,  /minecraft:.*oak.*/, /minecraft:.*spruce.*/,
    /minecraft:.*birch.*/, /minecraft:.*jungle.*/, /minecraft:.*acacia.*/, /minecraft:.*mangrove.*/, /minecraft:.*cherry.*/, /minecraft:.*crimson.*/,
    /minecraft:.*warped.*/, /minecraft:.*candle.*/, /minecraft:.*quartz.*/, /minecraft:.*prismarine.*/, /minecraft:.*deepslate.*/, /minecraft:.*blackstone.*/,
    /minecraft:.*smooth_stone.*/, /minecraft:.*basalt.*/, /minecraft:.*granite.*/, /minecraft:.*diorite.*/, /minecraft:.*sand.*/, /minecraft:.*concrete.*/,
    /minecraft:.*end.*/, /minecraft:.*pottery.*/, /minecraft:.*stone_brick.*/, /minecraft:.*cobblestone.*/, /minecraft:.*purpur.*/, /minecraft:.*cook.*/,
    /minecraft:.*dragon.*/, /minecraft:.*chorus.*/, /minecraft:.*diamond.*/, /minecraft:.*azalea.*/, /minecraft:.*apple.*/, /minecraft:.*carrot.*/,
    /minecraft:.*potato.*/, /minecraft:.*beet.*/, /minecraft:.*melon.*/, /minecraft:.*drip.*/, /minecraft:.*pitch.*/, /minecraft:.*dirt.*/, /minecraft:.*mud.*/,
    /minecraft:.*froglight.*/, /minecraft:.*soul.*/, /minecraft:.*shulker.*/, /minecraft:.*vine.*/, /minecraft:.*furnace.*/, /minecraft:.*bucket.*/,
    /minecraft:.*emerald.*/, /minecraft:.*rabbit.*/, /minecraft:.*glowstone.*/, /minecraft:.*stew.*/, /minecraft:(?!red).*stone/, /minecraft:.*seed.*/,
    /minecraft:.*sculk.*/, /minecraft:.*_raft.*/, /minecraft:.*moss.*/, /minecraft:.*fish.*/, /minecraft:.*obsidian.*/,
    /minecraft:.*mushroom.*/, /minecraft:.*blaze.*/, /minecraft:.*coral.*(?!block)/, /minecraft:.*potion.*/, /minecraft:.*trial.*/,
    /minecraft:.*kelp.*/, /minecraft:.*head.*/, /^minecraft:(waxed_)?((exposed|weathered|oxidized)_)?copper_(door|trapdoor)$/, /^minecraft:jack_o_lantern$/],
  ids('minecraft:', ['enchanted_book', 'lantern', 'sea_lantern', 'barrel', 'bee_nest', 'beehive', 'coal', 'coal_block', 'sugar_cane',
    'ancient_debris', 'chain', 'beacon', 'ghast_tear', 'trident', 'echo_shard',
    'recovery_compass', 'torch', 'torchflower_seeds', 'torchflower', 'string', 'iron_bars', 'iron_block', 'iron_ingot', 'iron_nugget', 'iron_horse_armor',
    'golden_horse_armor', 'iron_door', 'iron_trapdoor', 'gold_block', 'gold_ingot', 'gold_nugget', 'copper_block', 'copper_ingot', 'conduit', 'lodestone',
    'dandelion', 'poppy', 'blue_orchid', 'allium', 'azure_bluet', 'red_tulip', 'orange_tulip', 'white_tulip', 'pink_tulip', 'oxeye_daisy', 'cornflower',
    'lily_of_the_valley', 'wither_rose', 'lilac', 'rose_bush', 'peony', 'sunflower', 'fern', 'tall_grass', 'large_fern', 'dead_bush', 'heart_of_the_sea',
    'podzol', 'mycelium', 'farmland', 'grass_block', 'calcite', 'redstone_lamp', 'composter', 'smoker', 'sniffer_egg', 'glow_berries',
    'glow_lichen', 'bread', 'pink_petals', 'cocoa_beans', 'pumpkin', 'enchanting_table', 'suspicious_gravel', 'bookshelf', 'chiseled_bookshelf', 'chest',
    'trapped_chest', 'respawn_anchor', 'shears', 'magma_block', 'magma_cream', 'phantom_membrane', 'fletching_table', 'campfire', 'shroomlight',
    'sweet_berries', 'bamboo_hanging_sign', 'tnt', 'elytra', 'totem_of_undying', 'spawner', 'frogspawn', 'ominous_bottle', 'cobweb',
    'wind_charge', 'breeze_rod', 'anvil', 'chipped_anvil', 'damaged_anvil', 'mace', 'heavy_core', 'lectern', 'crafter', 'cactus', 'lily_pad', 'sea_pickle',
    'vault', 'brewing_stand', 'fermented_spider_eye', 'piston', 'sticky_piston', 'wheat', 'skeleton_skull', 'wither_skeleton_skull', 'spectral_arrow', 'tipped_arrow']),
  ['tfc:plant/dead_bush', 'tfc:plant/potted/dead_bush'],
  // Chemica ores and raw ores; the pack has its own sources
  ids('chemica:raw_', ['antimony', 'chromite', 'cobalt', 'molybdenum', 'platinum', 'silver', 'tin', 'tungsten', 'vanadium']),
  ids('chemica:crushed_raw_', ['antimony', 'chromium', 'vanadium']),
  ids('chemica:deepslate_', ['antimony', 'chromite', 'cobalt', 'graphite', 'molybdenum', 'platinum', 'rutile', 'silver', 'tin', 'vanadium', 'wolframite',
    'phosphorus', 'fluorite'], '_ore'),
  ['chemica:tin_ore', 'chemica:phosphorus_ore', 'chemica:fervorite', 'chemica:zelosite', 'chemica:raw_platinum_block', 'chemica:rutile_crystal',
    'chemica:medium_grade_rutile_crystal', 'chemica:high_grade_rutile_crystal', 'chemica:unfinished_reinforced_iridium_plate'],
  // Chemica gas tanks of the pack's own gases
  ids('chemica:', ['oxygen', 'nitrogen', 'molten_titanium', 'propene', 'brine'], '_bucket'),
  // Create: Solarpunk duplicates, wiring, greenhouses and building blocks
  ['solarpunk:lithium_ore', 'solarpunk:deepslate_lithium_ore', 'solarpunk:raw_lithium', 'solarpunk:salt', 'solarpunk:empty_spool', 'solarpunk:wire_connector',
    'solarpunk:andesite_solar_panel', 'solarpunk:firebox_boiler', 'solarpunk:geyser_vent', 'solarpunk:geyser_cap', 'solarpunk:moss_slab',
    'solarpunk:moss_stairs', 'solarpunk:biofuel_bucket', 'solarpunk:biofuel_engine', 'solarpunk:ash', /^solarpunk:.*greenhouse.*/,
    /^solarpunk:.*rammed_earth.*/, /^solarpunk:(grow_lamp|solar_plant_bed|salt_lamp|charred_timber.*|ruined_dirt|(incomplete_)?electromagnet_coil)$/,
    /^solarpunk:(ash_block|(chiseled_)?(ash|salt)_brick.*|polished_(ash|salt).*|salt_(slab|stairs))$/],
  ids('solarpunk:', ['lithium', 'beryllium'].map(metal => [metal + '_dust', metal + '_ingot', metal + '_nugget', metal + '_block'])
    .reduce((all, forms) => all.concat(forms), [])),
  ids('solarpunk:', ['copper', 'iron', 'gold'].map(metal => [metal + '_wire', metal + '_spool']).reduce((all, items) => all.concat(items), [])),
  // Duplicate bio chains (see power/biofuel.js)
  ids('createaddition:', ['seed_oil_bucket', 'bioethanol_bucket', 'biomass', 'biomass_pellet', 'biomass_pellet_block'])
)

// Hidden in JEI only: duplicates unify.js swaps for the pack's items (their recipes are kept), and clutter
const HIDDEN_ITEMS = [].concat(
  // Swapped in unify.js
  ['create:copper_sheet', 'create:iron_sheet', 'tfmg:aluminum_ingot', 'tfmg:constantan_ingot', 'tfmg:lead_ingot', 'tfmg:nickel_sheet', 'tfmg:rubber_sheet',
    'tfmg:sulfur_dust', 'tfmg:nitrate_dust'],
  ids('chemica:', ['antimony', 'chromium', 'cobalt', 'iridium', 'magnesium', 'molybdenum', 'platinum', 'silver', 'tantalum', 'tin', 'titanium', 'tungsten',
    'vanadium', 'graphite'], '_nugget'),
  ids('chemica:', ['antimony', 'chromium', 'cobalt', 'iridium', 'magnesium', 'molybdenum', 'platinum', 'silver', 'tantalum', 'tin', 'titanium', 'tungsten',
    'vanadium'], '_ingot'),
  ids('chemica:', ['iridium', 'magnesium', 'silver', 'tantalum', 'tin', 'titanium'], '_sheet'),
  ids('chemica:', ['antimony', 'cobalt', 'constantan', 'copper', 'gold', 'iridium', 'iron', 'magnesium', 'nickel', 'platinum', 'silver', 'tantalum', 'tin',
    'titanium', 'tungsten', 'vanadium', 'zinc'], '_dust'),
  ids('chemica:', ['electrum_grit', 'ash', 'charcoal_dust', 'salt', 'soda_ash', 'crushed_graphite', 'graphite_ingot', 'graphite_sheet', 'quartz_dust',
    'yeast', 'reinforced_iridium_plate', 'platinum_block']),
  ids('electroenergetics:', ['copper_wire', 'electrum_wire', 'iron_wire']),
  // Vanilla items kept out of JEI that the pack still makes and uses (Butchery meats, decorative stone)
  [/minecraft:.*andesite.*/, /minecraft:.*amethyst.*/, /minecraft:.*tuff.*/, /minecraft:.*honey.*/],
  ids('minecraft:', ['gravel', 'beef', 'porkchop', 'mutton', 'chicken', 'cod', 'salmon', 'powered_rail']),
  // Ores, natural blocks and plants nobody looks up
  [/tfc:ore\/.*\/.*/, /tfc_metallurgy:ore\/.*\/.*/, /firmalife:ore\/.*\/.*/, /tfc:deposit\/.*/, /^kubejs:ore\/fluorite\//, /^kubejs:ore\/phosphorite\//,
    /afc:.*leaves.*/, /tfc:.*leaves.*/, /.*wild_crop.*/, /.*grass.*/, /.*rooted.*/, /.*roots.*/, /.*mossy.*/, /.*krummholz.*/, /.*duff.*/, /^rnr:tamped_/],
  // Fish buckets
  [/^(tfc:bucket\/(arctic_char|bluegill|burbot|cod|crappie|jellyfish|lake_trout|largemouth_bass|muksun|northern_pike|pacu|peacock_bass|pufferfish|rainbow_trout|red_piranha|salmon|smallmouth_bass|spotted_gudgeon|tilapia|tropical_fish)|minecraft:(cod|salmon|pufferfish|tropical_fish)_bucket)$/],
  // Spawn eggs, FTB items and sequenced assembly transitional items
  [/.*spawn_egg.*/, /^(ftbquests|ftbfiltersystem):/, /^kubejs:plastic_sheet\/.*/],
  ids('kubejs:', ['incomplete_caramel_apple', 'incomplete_photovoltaic_panel', 'incomplete_blast_furnace_reinforcement', 'wood_plating_blank',
    'incomplete_daylight_detector', 'incomplete_metal_support'])
)

// Fluids hidden in JEI
const HIDDEN_FLUIDS = [
  /.*signalum.*/, /.*blutonium.*/, /.*enderium.*/, /.*lumium.*/, /.*mithril.*/, /.*pink_slime.*/, /.*refined_glowstone.*/, /.*refined_obsidian.*/, /.*graphite.*/,
  'vintageimprovements:sulfuric_acid', 'createbigcannons:molten_cast_iron', 'createbigcannons:molten_bronze', 'createbigcannons:molten_steel',
  'createbigcannons:molten_nethersteel', 'tfmg:molten_steel', 'tfmg:molten_plastic',
  // Chemica fluids that duplicate the pack's own (see unify.js)
  'chemica:oxygen', 'chemica:nitrogen', 'chemica:molten_titanium', 'chemica:propene', 'chemica:brine',
  // Duplicate bio fluids (see power/biofuel.js)
  'electroenergetics:plant_oil', 'createaddition:seed_oil', 'createaddition:bioethanol', 'solarpunk:biofuel',
  // Create potions and chocolate (Firmalife chocolate is used instead); levitite is assembled with hydrogen or helium instead of blend
  'create:potion', 'create:chocolate', 'aeronautics:levitite_blend'
]

global.DISABLED = { items: DISABLED_ITEMS, hidden: HIDDEN_ITEMS, fluids: HIDDEN_FLUIDS }
