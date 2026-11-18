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
  // Yeast: Firmalife's yeast starter replaces Chemica's yeast (ethanol is fermented in biofuelRecipes.js)
  event.remove({id: 'chemica:mixing/yeast'})
  event.remove({id: 'chemica:vat_machine_recipe/vat_reaction/yeast'})
  event.remove({id: 'chemica:vat_machine_recipe/vat_reaction/ethanol'})
  event.remove({id: 'chemica:compacting/tungsten_carbide_dust'})

  // Item and fluid swaps are in unify.js

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

  // Salt electrolysis is dropped (salt water electrolysis covers chlorine); TFC salt water replaces brine (unify.js)
  ;['chemica:filling/propene', 'chemica:vat_machine_recipe/electrolysis/salt', 'chemica:mixing/brine'].forEach(recipe => event.remove({id: recipe}))
  // Sodium from the persulfate chain is pressed back into ingots, matching Chemica's 1:1 crushing
  event.recipes.create.compacting('chemica:sodium_ingot', 'chemica:sodium_dust').id('kubejs:chemica/compacting/sodium_ingot')

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

  // Chemica's rutile grades are replaced by TFC Metallurgy ore, crushed into rutile dust
  event.remove({ id: /^chemica:crushing\/(medium_grade_|high_grade_)?rutile_crystal$/ })

  // Fluorite and phosphorite (kubejs ores, see addBlocks.js) are the source of Chemica's fluorite and phosphorus dust
  event.recipes.create.crushing(['3x chemica:fluorite_dust', CreateItem.of('chemica:fluorite_dust', 0.5)], 'kubejs:ore/fluorite').processingTime(250)
  event.recipes.create.crushing(['3x chemica:phosphorus_dust', CreateItem.of('chemica:phosphorus_dust', 0.5)], 'kubejs:ore/phosphorite').processingTime(250)

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

  // Acid leaching of oxide and native ores, same metal as smelting: [dust, ore mod, ores, acids]
  // Sulfides (galena, sphalerite, molybdenite, stibnite, tetrahedrite) are roasted first, see metalExtractionRecipes.js
  const sulfuric = 'tfmg:sulfuric_acid'
  const hydrochloric = 'chemica:hydrochloric_acid'
  const nitric = 'chemica:nitric_acid'
  const leaching = [
    ['kubejs:metal/dust/copper', 'tfc', ['native_copper', 'malachite'], [sulfuric]],
    ['kubejs:metal/dust/iron', 'tfc', ['hematite', 'magnetite', 'limonite'], [sulfuric]],
    ['kubejs:metal/dust/nickel', 'tfc', ['garnierite'], [sulfuric]],
    ['kubejs:metal/dust/tin', 'tfc', ['cassiterite'], [hydrochloric]],
    ['kubejs:metal/dust/silver', 'tfc', ['native_silver'], [nitric]],
    ['kubejs:metal/dust/gold', 'tfc', ['native_gold'], [nitric, hydrochloric]],
    ['chemica:chromium_dust', 'firmalife', ['chromite'], [sulfuric]]
  ]
  // Chromite (FeCr2O4) leaves its iron as iron oxide: one Fe2O3 per four chromium
  const ironOxide = {small: [0, 0.5], poor: [0, 0.75], normal: [1, 0.25], rich: [1, 0.75]}
  leaching.forEach(entry => {
    entry[2].forEach(ore => {
      grades.forEach(grade => {
        const results = [{id: entry[0], count: grade.dust}]
        if (ore === 'chromite') {
          if (ironOxide[grade.name][0] > 0) results.push({id: 'tfc:powder/hematite', count: ironOxide[grade.name][0]})
          results.push({id: 'tfc:powder/hematite', chance: ironOxide[grade.name][1]})
        }
        event.custom({
          type: 'tfmg:vat_machine_recipe',
          machines: ['tfmg:mixing'],
          ingredients: [{item: entry[1] + ':ore/' + grade.name + '_' + ore}].concat(
            entry[3].map(acid => (fluidIn(acid, grade.acid)))
          ),
          results: results
        })
      })
    })
  })
})
