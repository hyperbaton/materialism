// Chemica (TFMG addon) integration. Many of the items it brings are already added by other mods (mainly TFC Metallurgy), so they are removed.
ServerEvents.recipes(event => {

  // Recipes that only existed for the duplicated ores, ingots and nuggets
  event.remove({id: /^chemica:(blasting|smelting)\/(deepslate_.*_ore|tin_ore|raw_.*|electrum_grit|ash)$/})
  event.remove({id: /^chemica:crushing\/(deepslate_(antimony|chromite|cobalt|graphite|molybdenum|platinum|rutile|silver|tin|vanadium|wolframite)_ore|tin_ore|raw_platinum_block|coal_block|quartz)$/})
  event.remove({id: /^chemica:crushing\/(antimony|cobalt|constantan|copper|gold|iridium|iron|magnesium|nickel|platinum|silver|tantalum|tin|titanium|vanadium|zinc)_ingot$/})
  event.remove({id: /^chemica:crafting\/(.*nugget.*|.*_ingot_crafting.*|platinum_.*|raw_platinum.*)$/})
  event.remove({id: /^chemica:vat_machine_recipe\/leaching_/})
  // Fervorite and zelosite are not used in the pack
  event.remove({id: /^chemica:(crushing\/(ferosite|fervorite|zelosite)|vat_machine_recipe\/leaching_(fervorite|zelosite))$/})
  event.remove({id: 'chemica:vat_machine_recipe/arc_furnace_tungsten'})
  // Fluorite and phosphorus come from the pack's own ores (below)
  event.remove({id: /^chemica:crushing\/(deepslate_fluorite_ore|deepslate_phosphorus_ore|phosphorus_ore)$/})
  event.remove({id: 'chemica:casting/molten_titanium'})
  // Broken: the fluid ingredient does not parse
  event.remove({id: 'chemica:mixing/caustic_soda'})
  // Air comes from our liquid air chain (tfmg.js), which also gives argon and helium
  event.remove({id: 'chemica:distillation/air'})
  event.remove({id: 'chemica:vat_machine_recipe/electrolysis/powdered_obsidian'})
  event.remove({id: 'chemica:sequenced_assembly/unfinished_reinforced_iridium_plate'})
  // Yeast: Firmalife's yeast starter replaces Chemica's yeast (see the ethanol recipe below)
  event.remove({id: 'chemica:mixing/yeast'})
  event.remove({id: 'chemica:vat_machine_recipe/vat_reaction/yeast'})
  event.remove({id: 'chemica:vat_machine_recipe/vat_reaction/ethanol'})
  event.remove({id: 'chemica:compacting/tungsten_carbide_dust'})

  // Item swaps: Chemica item -> pack item
  const swaps = {
    'chemica:chromium_ingot': 'firmalife:metal/ingot/chromium',
    'chemica:silver_ingot': 'tfc:metal/ingot/silver',
    'chemica:tin_ingot': 'tfc:metal/ingot/tin',
    'chemica:silver_sheet': 'tfc:metal/sheet/silver',
    'chemica:tin_sheet': 'tfc:metal/sheet/tin',
    'chemica:constantan_dust': 'tfc_metallurgy:metal/dust/constantan',
    'chemica:electrum_grit': 'tfc_metallurgy:metal/dust/electrum',
    'chemica:platinum_block': 'tfc_metallurgy:metal/block/platinum',
    'chemica:salt': 'tfc:powder/salt',
    'chemica:soda_ash': 'tfc:powder/soda_ash',
    'chemica:ash': 'tfc:powder/wood_ash',
    'chemica:charcoal_dust': 'tfc:powder/charcoal',
    'tfmg:nitrate_dust': 'tfc:powder/saltpeter',
    'chemica:crushed_graphite': 'tfc:powder/graphite',
    'chemica:graphite_ingot': 'tfc_metallurgy:metal/ingot/graphite',
    'chemica:graphite_sheet': 'tfc_metallurgy:metal/sheet/graphite',
    'chemica:chromium_nugget': 'chemica:chromium_dust',
    'chemica:silver_nugget': 'kubejs:metal/dust/silver',
    'minecraft:iron_nugget': 'kubejs:metal/dust/iron',
    'minecraft:gold_nugget': 'kubejs:metal/dust/gold',
    'tfmg:aluminum_nugget': 'tfc_metallurgy:metal/dust/aluminum',
    'tfmg:aluminum_ingot': 'tfc_metallurgy:metal/ingot/aluminum',
    'tfmg:nickel_ingot': 'tfc:metal/ingot/nickel',
    'tfmg:constantan_ingot': 'tfc_metallurgy:metal/ingot/constantan',
    'tfmg:lead_ingot': 'tfc_metallurgy:metal/ingot/lead',
    'create:zinc_ingot': 'tfc:metal/ingot/zinc',
    'create:copper_sheet': 'tfc:metal/sheet/copper',
    'create:iron_sheet': 'tfc:metal/sheet/wrought_iron',
    'create:copper_nugget': 'kubejs:metal/dust/copper'
  }
  // Metals that TFC Metallurgy has. Chemica has no molybdenum dust or sheet, and sheets only for some
  const tfcmMetals = ['antimony', 'cobalt', 'iridium', 'magnesium', 'molybdenum', 'platinum', 'tantalum', 'titanium', 'tungsten', 'vanadium']
  tfcmMetals.forEach(metal => {
    swaps['chemica:' + metal + '_ingot'] = 'tfc_metallurgy:metal/ingot/' + metal
    swaps['chemica:' + metal + '_nugget'] = 'tfc_metallurgy:metal/dust/' + metal
    if (metal != 'molybdenum') swaps['chemica:' + metal + '_dust'] = 'tfc_metallurgy:metal/dust/' + metal
  })
  ;['iridium', 'magnesium', 'tantalum', 'titanium'].forEach(metal => {
    swaps['chemica:' + metal + '_sheet'] = 'tfc_metallurgy:metal/sheet/' + metal
  })
  // Base TFC metals: the dusts are the ones we added
  ;['copper', 'iron', 'gold', 'nickel', 'silver', 'tin', 'zinc'].forEach(metal => {
    swaps['chemica:' + metal + '_dust'] = 'kubejs:metal/dust/' + metal
  })
  Object.keys(swaps).forEach(item => {
    event.replaceInput({}, item, swaps[item])
    event.replaceOutput({}, item, swaps[item])
  })

  // Casting basin and arc furnace: Chemica uses 90 mB per ingot, the pack uses 100 mB
  event.forEachRecipe({id: /^chemica:(casting\/.*|vat_machine_recipe\/arc_furnace_.*)/}, recipe => {
    ['ingredients', 'results'].forEach(key => {
      const list = recipe.json.get(key)
      if (!list) return
      list.forEach(entry => {
        const amount = entry.getAsJsonObject().get('amount')
        if (amount && amount.getAsInt() == 90) {
          entry.getAsJsonObject().addProperty('amount', 100)
          recipe.save()
        }
      })
    })
  })

  // Fluid swaps. replaceInput can't touch fluids, so the few recipes using them are rewritten.
  const fluidSwaps = [
    ['chemica:oxygen', 'kubejs:oxygen'],
    ['chemica:nitrogen', 'kubejs:nitrogen'],
    ['chemica:molten_titanium', 'tfc_metallurgy:metal/titanium'],
    ['chemica:hydrogen', 'tfmg:hydrogen'],
    ['chemica:propene', 'tfmg:propylene']
  ]
  event.remove({id: 'chemica:filling/propene'})
  const fluidRecipes = []
  event.forEachRecipe({mod: 'chemica'}, recipe => {
    if (String(recipe.getId()) == 'chemica:filling/propene') return
    const json = String(recipe.json)
    if (fluidSwaps.some(swap => json.indexOf('"' + swap[0] + '"') !== -1)) {
      fluidRecipes.push({id: String(recipe.getId()), json: json})
    }
  })
  fluidRecipes.forEach(recipe => {
    let json = recipe.json
    fluidSwaps.forEach(swap => {
      json = json.split('"' + swap[0] + '"').join('"' + swap[1] + '"')
    })
    event.remove({id: recipe.id})
    event.custom(JSON.parse(json)).id('kubejs:' + recipe.id.replace(':', '/'))
  })

  // Recipes that asked for plates by tag, declared with the TFC sheets instead
  event.remove({id: 'chemica:deploying/coated_epoxy_circuit_board'})
  event.recipes.createDeploying('chemica:coated_epoxy_circuit_board', ['chemica:empty_epoxy_circuit_board', 'tfc:metal/sheet/gold'])
  event.remove({id: 'chemica:deploying/coated_pvc_circuit_board'})
  event.recipes.createDeploying('chemica:coated_pvc_circuit_board', ['chemica:empty_pvc_circuit_board', 'tfc:metal/sheet/silver'])
  event.remove({id: 'chemica:crafting/ethanol_engine_cylinder'})
  event.shaped('chemica:ethanol_engine_cylinder', [
    ' S ',
    'C C',
    'CCC'
  ], {
    S: 'minecraft:flint_and_steel',
    C: 'tfc:metal/sheet/wrought_iron'
  })
  event.remove({id: 'chemica:sequenced_assembly/unfinished_tantalum_capacitor'})
  event.recipes.create.sequenced_assembly(
    [Item.of('chemica:tantalum_capacitor_item', 4)],
    'tfc_metallurgy:metal/sheet/tantalum',
    [
      event.recipes.createDeploying('chemica:unfinished_tantalum_capacitor', ['chemica:unfinished_tantalum_capacitor', 'tfc:metal/sheet/copper']),
      event.recipes.createDeploying('chemica:unfinished_tantalum_capacitor', ['chemica:unfinished_tantalum_capacitor', 'chemica:conductive_paste']),
      event.recipes.createDeploying('chemica:unfinished_tantalum_capacitor', ['chemica:unfinished_tantalum_capacitor', 'tfc:metal/sheet/copper'])
    ]
  ).transitionalItem('chemica:unfinished_tantalum_capacitor').loops(1)

  // Ethanol, fermented with Firmalife's yeast starter
  event.custom({
    type: 'tfmg:vat_machine_recipe',
    allowed_vat_types: ['tfmg:cast_iron_vat', 'tfmg:steel_vat', 'tfmg:firebrick_lined_vat'],
    machines: [],
    min_size: 1,
    ingredients: [
      {item: 'minecraft:sugar'},
      {item: 'minecraft:sugar'},
      {item: 'minecraft:sugar'},
      {type: 'neoforge:single', amount: 100, fluid: 'firmalife:yeast_starter'}
    ],
    processing_time: 800,
    results: [{amount: 1000, id: 'chemica:ethanol'}]
  })

  // Chromium has no dust in the pack, so Chemica's own stays; let it melt like the others
  event.custom({
    type: 'tfc:heating',
    ingredient: {item: 'chemica:chromium_dust'},
    result_fluid: {id: 'firmalife:metal/chromium', amount: 5},
    temperature: 1250,
    use_durability: false
  })

  // Coal dust from TFC coal (the vanilla coal block recipe is gone)
  event.recipes.create.crushing(['3x chemica:coal_dust', CreateItem.of('chemica:coal_dust', 0.5)], 'tfc:ore/bituminous_coal')
  event.recipes.create.crushing(['2x chemica:coal_dust', CreateItem.of('chemica:coal_dust', 0.25)], 'tfc:ore/lignite')

  // Rutile chunks into Chemica's rutile grades
  event.recipes.create.crushing(['chemica:rutile_crystal', CreateItem.of('chemica:rutile_dust', 0.25)], 'tfc_metallurgy:ore/small_rutile')
  event.recipes.create.crushing(['2x chemica:rutile_crystal', CreateItem.of('chemica:rutile_dust', 0.25)], 'tfc_metallurgy:ore/poor_rutile')
  event.recipes.create.crushing(['chemica:medium_grade_rutile_crystal', CreateItem.of('chemica:rutile_crystal', 0.5)], 'tfc_metallurgy:ore/normal_rutile')
  event.recipes.create.crushing(['chemica:high_grade_rutile_crystal', CreateItem.of('chemica:medium_grade_rutile_crystal', 0.5)], 'tfc_metallurgy:ore/rich_rutile')

  // Fluorite and phosphorite (kubejs ores, see addBlocks.js) are the source of Chemica's fluorite and phosphorus dust
  event.recipes.create.crushing(['3x chemica:fluorite_dust', CreateItem.of('chemica:fluorite_dust', 0.5)], 'kubejs:ore/fluorite').processingTime(250)
  event.recipes.create.crushing(['3x chemica:phosphorus_dust', CreateItem.of('chemica:phosphorus_dust', 0.5), CreateItem.of('chemica:arsenic_dust', 0.03)], 'kubejs:ore/phosphorite').processingTime(250)

  // The new ores can collapse like any other ore in their rock
  const rockOres = {
    fluorite: ['granite', 'rhyolite', 'gneiss', 'quartzite', 'schist', 'marble', 'limestone', 'dolomite', 'slate', 'phyllite'],
    phosphorite: ['limestone', 'chalk', 'shale', 'claystone', 'chert', 'dolomite', 'conglomerate']
  }
  const collapsing = {}
  Object.keys(rockOres).forEach(mineral => rockOres[mineral].forEach(rock => {
    collapsing[rock] = (collapsing[rock] || []).concat('kubejs:ore/' + mineral + '/' + rock)
  }))
  Object.keys(collapsing).forEach(rock => {
    event.custom({type: 'tfc:collapse', ingredient: collapsing[rock], result: 'tfc:rock/cobble/' + rock}).id('kubejs:collapse/ore_' + rock)
  })

  // Ore chunks of each grade give 2/3/5/7 dust (5 mB each, like a smelt), and the acid used
  // adds a 50% chance of one more
  const grades = [
    {name: 'small', dust: 2, acid: 150},
    {name: 'poor', dust: 3, acid: 250},
    {name: 'normal', dust: 5, acid: 400},
    {name: 'rich', dust: 7, acid: 550}
  ]

  // Acid leaching: [dust, ore mod, ores, acids]
  const sulfuric = 'tfmg:sulfuric_acid'
  const hydrochloric = 'chemica:hydrochloric_acid'
  const nitric = 'chemica:nitric_acid'
  const leaching = [
    ['kubejs:metal/dust/copper', 'tfc', ['native_copper', 'malachite', 'tetrahedrite'], [sulfuric]],
    ['kubejs:metal/dust/iron', 'tfc', ['hematite', 'magnetite', 'limonite'], [sulfuric]],
    ['kubejs:metal/dust/zinc', 'tfc', ['sphalerite'], [sulfuric]],
    ['kubejs:metal/dust/nickel', 'tfc', ['garnierite'], [sulfuric]],
    ['kubejs:metal/dust/tin', 'tfc', ['cassiterite'], [hydrochloric]],
    ['kubejs:metal/dust/silver', 'tfc', ['native_silver'], [nitric]],
    ['kubejs:metal/dust/gold', 'tfc', ['native_gold'], [nitric, hydrochloric]],
    ['tfc_metallurgy:metal/dust/lead', 'tfc_metallurgy', ['galena'], [sulfuric]],
    ['tfc_metallurgy:metal/dust/platinum', 'tfc_metallurgy', ['native_platinum'], [nitric, hydrochloric]],
    ['tfc_metallurgy:metal/dust/cobalt', 'tfc_metallurgy', ['cobaltite'], [sulfuric]],
    ['tfc_metallurgy:metal/dust/molybdenum', 'tfc_metallurgy', ['molybdenite'], [sulfuric]],
    ['tfc_metallurgy:metal/dust/antimony', 'tfc_metallurgy', ['stibnite'], [hydrochloric]],
    ['chemica:chromium_dust', 'firmalife', ['chromite'], [sulfuric]]
  ]
  leaching.forEach(entry => {
    entry[2].forEach(ore => {
      grades.forEach(grade => {
        event.custom({
          type: 'tfmg:vat_machine_recipe',
          machines: ['tfmg:mixing'],
          ingredients: [{item: entry[1] + ':ore/' + grade.name + '_' + ore}].concat(
            entry[3].map(acid => ({type: 'neoforge:single', amount: grade.acid, fluid: acid}))
          ),
          results: [{id: entry[0], count: grade.dust}, {id: entry[0], chance: 0.5}]
        })
      })
    })
  })

  // Tungsten: arc furnace the wolframite chunks into dust, like Chemica did with its raw tungsten
  grades.forEach(grade => {
    event.custom({
      type: 'tfmg:vat_machine_recipe',
      allowed_vat_types: ['tfmg:firebrick_lined_vat'],
      machines: ['tfmg:graphite_electrode', 'tfmg:graphite_electrode', 'tfmg:graphite_electrode'],
      min_size: 6,
      ingredients: [{item: 'tfc_metallurgy:ore/' + grade.name + '_wolframite'}, {item: 'tfmg:coal_coke_dust'}],
      processing_time: 20,
      results: [
        {chance: 0.9, id: 'tfmg:coal_coke_dust'},
        {id: 'tfc_metallurgy:metal/dust/tungsten', count: grade.dust},
        {amount: 60, id: 'tfmg:molten_slag'}
      ]
    })
  })
})

// Hidden duplicates must not stay in the shared c: tags, or tag recipes would still accept them
ServerEvents.tags('item', event => {
  const duplicates = ['salt', 'soda_ash', 'ash', 'charcoal_dust', 'electrum_grit', 'platinum_block', 'constantan_dust', 'graphite_ingot', 'graphite_sheet', 'quartz_dust', 'yeast', 'reinforced_iridium_plate']
  duplicates.forEach(item => event.removeAllTagsFrom('chemica:' + item))
  const metals = ['antimony', 'cobalt', 'iridium', 'magnesium', 'molybdenum', 'platinum', 'tantalum', 'titanium', 'tungsten', 'vanadium', 'silver', 'tin']
  metals.forEach(metal => {
    ;['ingot', 'nugget'].forEach(form => event.removeAllTagsFrom('chemica:' + metal + '_' + form))
  })
  ;['antimony', 'cobalt', 'iridium', 'magnesium', 'platinum', 'tantalum', 'titanium', 'tungsten', 'vanadium', 'copper', 'iron', 'gold', 'nickel', 'silver', 'tin', 'zinc']
    .forEach(metal => event.removeAllTagsFrom('chemica:' + metal + '_dust'))
  ;['iridium', 'magnesium', 'silver', 'tantalum', 'tin', 'titanium'].forEach(metal => event.removeAllTagsFrom('chemica:' + metal + '_sheet'))
  // Chemica's brine recipe looks salt up by tag
  event.add('c:dusts/salt', 'tfc:powder/salt')
})
