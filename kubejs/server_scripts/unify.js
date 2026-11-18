// priority: -100
// Pack-wide item and fluid unification. Runs after the recipe scripts, so their recipe-specific swaps and removals come first.
// Swaps only reach the mods' own recipes: recipes added by scripts must already use the pack items.

// [from, to, where]: 'in' inputs, 'out' outputs, 'both'. Order matters where swaps chain.
const UNIFY_ITEMS = [
  ['simulated:spring', 'vintageimprovements:steel_spring', 'in'],
  ['createbigcannons:recoil_spring', 'vintageimprovements:steel_spring', 'in'],
  ['createbigcannons:nethersteel_ingot', 'tfc_metallurgy:metal/ingot/tungsten_steel', 'in'],
  // Chemica, TFMG and Create metals, dusts and minerals that TFC, TFC Metallurgy or the pack already provide
  ['chemica:chromium_ingot', 'firmalife:metal/ingot/chromium', 'both'],
  ['chemica:silver_ingot', 'tfc:metal/ingot/silver', 'both'],
  ['chemica:tin_ingot', 'tfc:metal/ingot/tin', 'both'],
  ['chemica:silver_sheet', 'tfc:metal/sheet/silver', 'both'],
  ['chemica:tin_sheet', 'tfc:metal/sheet/tin', 'both'],
  ['chemica:constantan_dust', 'tfc_metallurgy:metal/dust/constantan', 'both'],
  ['chemica:electrum_grit', 'tfc_metallurgy:metal/dust/electrum', 'both'],
  ['chemica:platinum_block', 'tfc_metallurgy:metal/block/platinum', 'both'],
  ['chemica:salt', 'tfc:powder/salt', 'both'],
  ['chemica:soda_ash', 'tfc:powder/soda_ash', 'both'],
  ['chemica:ash', 'tfc:powder/wood_ash', 'both'],
  ['chemica:charcoal_dust', 'tfc:powder/charcoal', 'both'],
  ['tfmg:nitrate_dust', 'tfc:powder/saltpeter', 'both'],
  ['chemica:crushed_graphite', 'tfc:powder/graphite', 'both'],
  ['chemica:graphite_ingot', 'tfc_metallurgy:metal/ingot/graphite', 'both'],
  ['chemica:graphite_sheet', 'tfc_metallurgy:metal/sheet/graphite', 'both'],
  ['chemica:chromium_nugget', 'chemica:chromium_dust', 'both'],
  ['chemica:silver_nugget', 'kubejs:metal/dust/silver', 'both'],
  ['minecraft:iron_nugget', 'kubejs:metal/dust/iron', 'both'],
  ['minecraft:gold_nugget', 'kubejs:metal/dust/gold', 'both'],
  ['tfmg:aluminum_nugget', 'tfc_metallurgy:metal/dust/aluminum', 'both'],
  ['tfmg:aluminum_ingot', 'tfc_metallurgy:metal/ingot/aluminum', 'both'],
  ['tfmg:nickel_ingot', 'tfc:metal/ingot/nickel', 'both'],
  ['tfmg:constantan_ingot', 'tfc_metallurgy:metal/ingot/constantan', 'both'],
  ['tfmg:lead_ingot', 'tfc_metallurgy:metal/ingot/lead', 'both'],
  ['create:zinc_ingot', 'tfc:metal/ingot/zinc', 'both'],
  ['create:copper_sheet', 'tfc:metal/sheet/copper', 'both'],
  ['create:iron_sheet', 'tfc:metal/sheet/wrought_iron', 'both'],
  ['create:copper_nugget', 'kubejs:metal/dust/copper', 'both']
]
// Chemica metals TFC Metallurgy has (no molybdenum dust, sheets only for some), and the base metal dusts the pack adds
;['antimony', 'cobalt', 'iridium', 'magnesium', 'molybdenum', 'platinum', 'tantalum', 'titanium', 'tungsten', 'vanadium'].forEach(metal => {
  UNIFY_ITEMS.push(['chemica:' + metal + '_ingot', 'tfc_metallurgy:metal/ingot/' + metal, 'both'])
  UNIFY_ITEMS.push(['chemica:' + metal + '_nugget', 'tfc_metallurgy:metal/dust/' + metal, 'both'])
  if (metal != 'molybdenum') UNIFY_ITEMS.push(['chemica:' + metal + '_dust', 'tfc_metallurgy:metal/dust/' + metal, 'both'])
})
;['iridium', 'magnesium', 'tantalum', 'titanium'].forEach(metal =>
  UNIFY_ITEMS.push(['chemica:' + metal + '_sheet', 'tfc_metallurgy:metal/sheet/' + metal, 'both']))
;['copper', 'iron', 'gold', 'nickel', 'silver', 'tin', 'zinc'].forEach(metal =>
  UNIFY_ITEMS.push(['chemica:' + metal + '_dust', 'kubejs:metal/dust/' + metal, 'both']))
;[
  ['createaddition:capacitor', 'tfmg:capacitor_item', 'in'],
  ['createdeco:andesite_sheet', 'tfc_metallurgy:metal/sheet/aluminum', 'in'],
  ['createdeco:zinc_sheet', 'tfc:metal/sheet/zinc', 'in'],
  ['create_optical:copper_coil', 'tfmg:large_coil', 'in'],
  ['create:andesite_bars', 'tfc:metal/bars/steel', 'in'],
  ['create:brass_sheet', 'tfc:metal/sheet/brass', 'in'],
  ['create:copper_sheet', 'tfc:metal/sheet/copper', 'in'],
  ['create:iron_sheet', 'tfc:metal/sheet/steel', 'in'],
  ['create:golden_sheet', 'tfc:metal/sheet/gold', 'in'],
  ['create:zinc_ingot', 'tfc:metal/ingot/zinc', 'in'],
  ['minecraft:copper_block', 'tfc:metal/block/copper', 'in'],
  ['create:sand_paper', 'tfc:sandpaper', 'in'],
  ['minecraft:string', '#c:strings', 'in'],
  ['minecraft:iron_bars', 'tfc:metal/bars/wrought_iron', 'in'],
  // TFMG parts the pack makes from TFC metals, Electro Energetics wire and AFC rubber
  ['tfmg:aluminum_sheet', 'tfc_metallurgy:metal/sheet/aluminum', 'in'],
  ['tfmg:heavy_plate', 'tfc:metal/sheet/steel', 'in'],
  ['tfmg:industrial_aluminum_casing', 'tfmg:steel_casing', 'in'],
  ['tfmg:aluminum_bars', 'create:andesite_bars', 'in'],
  ['tfmg:steel_ingot', 'tfc:metal/ingot/steel', 'in'],
  ['tfmg:sulfur_dust', 'tfc:powder/sulfur', 'both'],
  ['vintageimprovements:sulfur', 'tfc:powder/sulfur', 'in'],
  ['vintageimprovements:sulfur_chunk', 'tfc:powder/sulfur', 'in'],
  ['tfmg:copper_wire', 'createaddition:copper_wire', 'in'],
  ['tfmg:constantan_ingot', 'tfc_metallurgy:metal/ingot/constantan', 'in'],
  ['tfmg:bauxite_powder', 'tfmg:bauxite', 'in'],
  ['tfmg:screw', 'tfc_items:steel_screw', 'in'],
  ['tfmg:steel_bars', 'tfc:metal/bars/steel', 'in'],
  ['tfmg:nickel_sheet', 'tfc:metal/sheet/nickel', 'both'],
  ['tfmg:lead_ingot', 'tfc_metallurgy:metal/ingot/lead', 'in'],
  ['tfmg:fireproof_brick', 'tfc:fire_bricks', 'in'],
  ['tfmg:cable_tube', 'electroenergetics:insulated_wire', 'in'],
  ['tfmg:steel_casing_cable_hub', 'tfmg:steel_casing', 'in'],
  ['tfmg:rubber_sheet', 'afc:rubber_bar', 'both'],
  ['tfmg:cast_iron_ingot', 'tfc:metal/ingot/cast_iron', 'in'],
  ['vintageimprovements:iron_spring', 'vintageimprovements:steel_spring', 'in'],
  ['tfmg:limesand', 'tfc:powder/lime', 'in']
].forEach(swap => UNIFY_ITEMS.push(swap))

// Fluids KubeJS can't swap, rewritten in the recipe JSON below
const UNIFY_FLUIDS = [
  ['chemica:oxygen', 'kubejs:oxygen'],
  ['chemica:nitrogen', 'kubejs:nitrogen'],
  ['chemica:molten_titanium', 'tfc_metallurgy:metal/titanium'],
  ['chemica:hydrogen', 'tfmg:hydrogen'],
  ['chemica:propene', 'tfmg:propylene'],
  ['chemica:brine', 'tfc:salt_water']
]
// Recipe types KubeJS has no schema for, so replaceInput can't edit them; their items are rewritten in JSON too
const UNIFY_RAW_TYPES = ['tfmg:vat_machine_recipe', 'createbigcannons:melting', 'createaddition:charging', 'createsifter:sifting']

ServerEvents.recipes(event => {
  UNIFY_ITEMS.forEach(swap => {
    if (swap[2] != 'out') event.replaceInput({}, swap[0], swap[1])
    if (swap[2] != 'in') event.replaceOutput({}, swap[0], swap[1])
  })

  // JSON pass: recipes still holding a swapped fluid, or a swapped item in a type KubeJS can't edit, are rebuilt with every swap applied
  const swapsFor = side => UNIFY_ITEMS.filter(swap => swap[1].charAt(0) != '#' && (swap[2] == 'both' || swap[2] == side)).concat(UNIFY_FLUIDS)
  const sides = {in: swapsFor('in'), out: swapsFor('out')}
  const outputKey = key => /result|output/.test(key)
  const has = (text, swaps) => swaps.some(swap => text.indexOf('"' + swap[0] + '"') !== -1)
  const apply = (text, swaps) => {
    swaps.forEach(swap => { text = text.split('"' + swap[0] + '"').join('"' + swap[1] + '"') })
    return text
  }
  const rewrites = []
  event.forEachRecipe([{mod: 'chemica'}].concat(UNIFY_RAW_TYPES.map(type => ({type: type}))), recipe => {
    if (recipe.removed) return
    const json = JSON.parse(String(recipe.json))
    const raw = UNIFY_RAW_TYPES.indexOf(json.type) !== -1
    const keys = Object.keys(json).filter(key => key != 'type')
    const stale = keys.some(key => has(JSON.stringify(json[key]), raw ? (outputKey(key) ? sides.out : sides.in) : UNIFY_FLUIDS))
    if (!stale) return
    keys.forEach(key => { json[key] = JSON.parse(apply(JSON.stringify(json[key]), outputKey(key) ? sides.out : sides.in)) })
    rewrites.push({id: String(recipe.getId()), json: json})
  })
  rewrites.forEach(recipe => {
    event.remove({id: recipe.id})
    event.custom(recipe.json).id('kubejs:' + recipe.id.replace(':', '/'))
  })
})
