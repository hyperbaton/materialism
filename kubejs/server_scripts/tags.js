// priority: 10
// Pack-wide tags. Tags that only serve one recipe script stay in it; vein selection is in TFCVeins.js.
// Loads before disabled.js, so its kubejs:disabled tag survives the duplicates' untagging.
// materialism:* block tags (class woods, furniture, roofs, wattle...) are generated into materialism-core

const FLUORITE_ROCKS = ['granite', 'rhyolite', 'gneiss', 'quartzite', 'schist', 'marble', 'limestone', 'dolomite', 'slate', 'phyllite']
const PHOSPHORITE_ROCKS = ['limestone', 'chalk', 'shale', 'claystone', 'chert', 'dolomite', 'conglomerate']

ServerEvents.tags('block', event => {
  // Levitite catalyzers: the charcoal forge and coal blocks stand in for the Nether blocks
  event.add('aeronautics:levitite_catalyzer', 'tfc:charcoal_forge')
  event.add('aeronautics:levitite_adjacent_catalyzer', '#c:storage_blocks/coal')
  // The pack's own fluorite and phosphorite ores
  FLUORITE_ROCKS.forEach(rock => event.add('c:ores/fluorite', 'kubejs:ore/fluorite/' + rock))
  PHOSPHORITE_ROCKS.forEach(rock => event.add('c:ores/phosphorite', 'kubejs:ore/phosphorite/' + rock))
  event.add('c:ores', ['#c:ores/fluorite', '#c:ores/phosphorite'])
})

ServerEvents.tags('item', event => {
  FLUORITE_ROCKS.forEach(rock => event.add('c:ores/fluorite', 'kubejs:ore/fluorite/' + rock))
  PHOSPHORITE_ROCKS.forEach(rock => event.add('c:ores/phosphorite', 'kubejs:ore/phosphorite/' + rock))
  event.add('c:ores', ['#c:ores/fluorite', '#c:ores/phosphorite'])
  // The pack's metal dusts
  ;['bismuth', 'bismuth_bronze', 'black_bronze', 'black_steel', 'blue_steel', 'brass', 'bronze', 'cast_iron', 'copper', 'gold', 'iron',
    'nickel', 'red_steel', 'rose_gold', 'silver', 'steel', 'sterling_silver', 'tin', 'zinc'].forEach(metal => event.add('c:dusts/' + metal, 'kubejs:metal/dust/' + metal))
  // Ore powders by metal
  event.add('materialism:powders/copper', ['tfc:powder/native_copper', 'tfc:powder/malachite', 'tfc:powder/tetrahedrite'])
  event.add('materialism:powders/iron', ['tfc:powder/hematite', 'tfc:powder/magnetite', 'tfc:powder/limonite'])
  event.add('materialism:rubber', 'afc:rubber_bar')
  event.add('materialism:bone_knapping', 'minecraft:bone')
  // TFMG's blast furnace sends tfmg:flux items to its flux hopper
  event.add('tfmg:flux', 'tfc:powder/flux')
  // TFC sheets for the c:plates tags TFMG recipes use
  event.add('c:plates/nickel', 'tfc:metal/sheet/nickel')
  event.add('c:plates/lead', 'tfc_metallurgy:metal/sheet/lead')
  event.add('c:plates/cast_iron', 'tfc:metal/sheet/cast_iron')
  event.add('c:plates/gold', 'tfc:metal/sheet/gold')
  // Create sandpaper is TFC sandpaper only
  event.removeAll('create:sandpaper')
  event.add('create:sandpaper', 'tfc:sandpaper')
  // Steel rods also work as rail spikes for the TFC-wood tracks
  event.add('c:rods/wrought_iron', 'tfc:metal/rod/steel')
  // Plant fibre for Create pulp
  event.add('create:pulpifiable', ['tfc:straw', 'tfc:papyrus', 'tfc:papyrus_strip', 'tfc:jute', 'tfc:jute_fiber', 'tfc:thatch'])
  // TFC and AFC stripped logs, which aren't in c:stripped_logs on their own
  ;['acacia', 'ash', 'aspen', 'birch', 'blackwood', 'chestnut', 'douglas_fir', 'hickory', 'kapok', 'mangrove', 'maple', 'oak', 'palm',
    'pine', 'rosewood', 'sequoia', 'spruce', 'sycamore', 'white_cedar', 'willow'].forEach(wood => event.add('c:stripped_logs', 'tfc:wood/stripped_log/' + wood))
  ;['araucaria', 'baobab', 'beech', 'cypress', 'eucalyptus', 'fig', 'ginkgo', 'hevea', 'ipe', 'ironwood', 'mahoe', 'mahogany', 'teak',
    'tualang'].forEach(wood => event.add('c:stripped_logs', 'afc:wood/stripped_log/' + wood))
  // Strings, used e.g. for fishing rods; the silk cloth loom takes every string but nylon thread, which weaves into nylon cloth
  const strings = ['minecraft:string', 'tfc_items:leather_strap', 'tfc_items:plant_string', 'tfc_items:bamboo_string']
  event.add('c:strings', strings.concat('kubejs:nylon_thread'))
  event.add('kubejs:silk_cloth_strings', strings)
  // Metal tools of the pack's metals in the c:tools tags
  const toolMetals = {
    tfc: ['copper', 'bronze', 'bismuth_bronze', 'black_bronze', 'wrought_iron', 'steel', 'black_steel', 'blue_steel', 'red_steel'],
    tfc_metallurgy: ['aluminum', 'boron', 'beryllium_copper', 'cobalt', 'ferroboron', 'florentine_bronze', 'invar', 'nickel_silver', 'osmium',
      'osmiridium', 'pewter', 'titanium', 'tungsten', 'tungsten_steel']
  }
  const tools = {axes: 'axe', pickaxes: 'pickaxe', shovels: 'shovel', hoes: 'hoe', swords: 'sword', knives: 'knife', hammers: 'hammer',
    saws: 'saw', chisels: 'chisel', scythes: 'scythe', propicks: 'propick'}
  Object.keys(toolMetals).forEach(ns => toolMetals[ns].forEach(metal =>
    Object.keys(tools).forEach(tag => event.add('c:tools/' + tag, ns + ':metal/' + tools[tag] + '/' + metal))))
  // TFC anvils work under Vintage Improvements' helve hammer
  ;['bismuth_bronze', 'black_bronze', 'black_steel', 'blue_steel', 'bronze', 'copper', 'red_steel', 'steel', 'wrought_iron']
    .forEach(metal => event.add('vintageimprovements:anvils', 'tfc:metal/anvil/' + metal))
  ;['aluminum', 'beryllium_copper', 'boron', 'cobalt', 'compressed_iron', 'enderium', 'ferroboron', 'florentine_bronze', 'invar', 'lumium',
    'mithril', 'nickel_silver', 'osmiridium', 'osmium', 'pewter', 'refined_glowstone', 'refined_obsidian', 'signalum', 'thorium', 'titanium',
    'tungsten', 'tungsten_steel', 'uranium'].forEach(metal => event.add('vintageimprovements:anvils', 'tfc_metallurgy:metal/anvil/' + metal))
  // DynamicLights: TFC's torch and jack o'lantern light up when held or dropped
  event.add('dynamiclights:self', ['tfc:torch', 'tfc:jack_o_lantern'])
  event.add('dynamiclights:dropped', ['tfc:torch', 'tfc:jack_o_lantern'])
  // Removed Solarpunk blocks leave the wood tags
  event.removeAllTagsFrom('solarpunk:charred_timber', 'solarpunk:charred_timber_slab', 'solarpunk:charred_timber_stairs', 'solarpunk:ruined_dirt')
})

// Duplicates unify.js swaps leave the shared tags, so tag recipes don't accept them
ServerEvents.tags('item', event => {
  ;['salt', 'soda_ash', 'ash', 'charcoal_dust', 'electrum_grit', 'platinum_block', 'constantan_dust', 'graphite_ingot', 'graphite_sheet',
    'quartz_dust', 'yeast', 'reinforced_iridium_plate'].forEach(item => event.removeAllTagsFrom('chemica:' + item))
  ;['antimony', 'cobalt', 'iridium', 'magnesium', 'molybdenum', 'platinum', 'tantalum', 'titanium', 'tungsten', 'vanadium', 'silver', 'tin']
    .forEach(metal => event.removeAllTagsFrom('chemica:' + metal + '_ingot', 'chemica:' + metal + '_nugget'))
  ;['antimony', 'cobalt', 'iridium', 'magnesium', 'platinum', 'tantalum', 'titanium', 'tungsten', 'vanadium', 'copper', 'iron', 'gold', 'nickel',
    'silver', 'tin', 'zinc'].forEach(metal => event.removeAllTagsFrom('chemica:' + metal + '_dust'))
  ;['iridium', 'magnesium', 'silver', 'tantalum', 'tin', 'titanium'].forEach(metal => event.removeAllTagsFrom('chemica:' + metal + '_sheet'))
  ;['salt', 'lithium_ore', 'deepslate_lithium_ore', 'raw_lithium', 'copper_wire', 'iron_wire', 'gold_wire'].forEach(item => event.removeAllTagsFrom('solarpunk:' + item))
  ;['lithium', 'beryllium'].forEach(metal => ['dust', 'ingot', 'nugget', 'block'].forEach(form => event.removeAllTagsFrom('solarpunk:' + metal + '_' + form)))
  ;['copper_wire', 'electrum_wire', 'iron_wire'].forEach(wire => event.removeAllTagsFrom('electroenergetics:' + wire))
})

ServerEvents.tags('fluid', event => {
  event.add('tfmg:exhaustable', ['kubejs:oxygen', 'kubejs:flowing_oxygen', 'chemica:steam'])
})

ServerEvents.tags('enchantment', event => {
  event.removeAll('minecraft:in_enchanting_table')
  event.removeAll('minecraft:tradeable')
  event.removeAll('minecraft:on_random_loot')
})

ServerEvents.tags('entity_type', event => {
  // Butchery: TFC animals drop their carcasses with butchery knives
  ;['cow', 'pig', 'chicken', 'sheep', 'goat', 'rabbit', 'horse', 'donkey', 'mule', 'cat', 'wolf', 'fox', 'ocelot', 'frog', 'turtle', 'squid',
    'dolphin', 'pufferfish', 'cod', 'salmon', 'panda'].forEach(animal => event.add('c:' + animal, 'tfc:' + animal))
  event.add('c:polarbear', 'tfc:polar_bear')
  // TFC-unique animals without a Butchery carcass, mapped to the closest one if ever wanted:
  // bison, musk_ox, yak -> cow; boar -> pig; duck, quail, grouse, pheasant, turkey, peafowl -> chicken; deer, gazelle, bongo, wildebeest -> goat;
  // alpaca -> llama; moose, caribou -> horse; grizzly_bear, black_bear -> polarbear; dog, direwolf, hyena, mongoose, cougar, panther, lion,
  // tiger, sabertooth, leopard_seal, crocodile -> wolf
})
