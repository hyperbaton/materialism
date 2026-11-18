// Wool processing
ServerEvents.recipes(event => {
  // Recipes with wool
  event.remove({id: 'create:milling/wool'})
  event.recipes.create.milling('8x tfc:wool_yarn', {'tag': 'minecraft:wool'})
  // Automated wool to wool yarn
  event.custom({
      type: 'vintageimprovements:vibrating',
      ingredients: [{ item: 'tfc:wool' }],
      results: [{ id: 'tfc:wool_yarn', count: 8 }],
      processing_time: 300
  })
})
