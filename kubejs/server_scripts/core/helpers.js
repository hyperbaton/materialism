// priority: 1000
// Shared helpers for the recipe scripts. Server scripts share one scope, so these load first and are visible everywhere; don't reuse these names.

// Recipe-specific swaps, one row per swap: [filter, from, to]. A string filter is a recipe id. Rows run in order.
function swapInputs(event, rows) {
  rows.forEach(row => event.replaceInput(typeof row[0] == 'string' ? { id: row[0] } : row[0], row[1], row[2]))
}
function swapOutputs(event, rows) {
  rows.forEach(row => event.replaceOutput(typeof row[0] == 'string' ? { id: row[0] } : row[0], row[1], row[2]))
}

// NeoForge fluid ingredient
function fluidIn(fluid, amount) {
  return { type: 'neoforge:single', fluid: fluid, amount: amount }
}

// TFC ingredient that refuses rotten food; takes an item id or an ingredient
function fresh(ingredient) {
  return { type: 'tfc:and', children: [typeof ingredient == 'string' ? { item: ingredient } : ingredient, { type: 'tfc:not_rotten' }] }
}

// WoodenCog heated ingredient (between two temperatures) and a result that keeps the input's heat
function heatedIngredient(item, minTemp, maxTemp) {
  return { type: 'woodencog:heated', ingredient: { item: item }, min_temp: minTemp, max_temp: maxTemp === undefined ? 3000 : maxTemp }
}
function heatedResult(id) {
  return { type: 'heated', copy_heat: true, internal: { id: id } }
}

// Fermentation vat batch (Materialism Core); set the id on the result
function fermenting(event, ingredient, fluid, result, time) {
  return event.custom({ type: 'materialismcore:fermenting', ingredient: ingredient, fluid_ingredient: fluid, result: result, processing_time: time })
}

// Create windows: glass cut and framed with four pieces of lumber, replacing the mod's recipe. Pairs are [window name, lumber].
function addWindowRecipes(event, namespace, woodPairs) {
  woodPairs.forEach(pair => {
    const windowId = namespace + ':' + pair[0] + '_window'
    event.remove({ id: windowId })
    const frame = () => event.recipes.createDeploying('minecraft:glass', ['minecraft:glass', pair[1]])
    event.recipes.create.sequenced_assembly(Item.of(windowId, 2), '#c:glass_blocks/colorless', [
      event.recipes.create.cutting('minecraft:glass', 'minecraft:glass'), frame(), frame(), frame(), frame(),
      event.recipes.createPressing('minecraft:glass', 'minecraft:glass')
    ]).transitionalItem('minecraft:glass').loops(2)
  })
}
