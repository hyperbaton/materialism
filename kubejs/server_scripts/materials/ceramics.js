// Ceramics and clay
ServerEvents.recipes(event => {
    event.remove({id: 'tfc:heating/powder/kaolinite'})
    event.custom({
        type: 'tfc:heating',
        ingredient: { item: 'tfc:kaolin_clay' },
        temperature: 500,
        result_item: {
            stack: { id: 'tfc:powder/kaolinite' },
            modifiers: [{ type: 'tfc:chance', chance: 0.4 }]
        }
    })
})

ServerEvents.recipes(event => {
  // Make reinforced fire bricks by applying sheets
  event.remove('tfc:crafting/reinforced_fire_bricks_from_iron')
  event.remove('tfc:crafting/reinforced_fire_bricks_from_steel')
  event.custom({
    type: 'create:item_application',
    ingredients: [
      { item: 'tfc:fire_bricks' },
      { item: 'tfc:metal/sheet/wrought_iron' },
    ],
    results: [
      { id: 'tfc:reinforced_fire_bricks', count: 1 },
    ],
  })
  event.custom({
    type: 'create:item_application',
    ingredients: [
      { item: 'tfc:fire_bricks' },
      { item: 'tfc:metal/sheet/steel' },
    ],
    results: [
      { id: 'tfc:reinforced_fire_bricks', count: 1 },
    ],
  })
  event.recipes.create.compacting(
      [Item.of('tfc:ceramic/unfired_fire_ingot_mold', 2)], 
      '5x tfc:fire_clay'
  )
})
