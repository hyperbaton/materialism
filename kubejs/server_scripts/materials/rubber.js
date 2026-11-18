// Rubber vulcanization
ServerEvents.recipes(event => {
  // Rubber vat recipe
  event.remove({id: 'tfmg:vat/rubber'})
  event.custom({
    type: 'tfmg:vat',
    heat_level: 2,
    ingredients: [
      {item: 'tfc:powder/sulfur'},
      {type: 'neoforge:tag', amount: 250, tag: 'c:heavy_oil'}
    ],
    machines: ['tfmg:mixer'],
    min_size: 1,
    processing_time: 40,
    results: [{id: 'afc:rubber_bar'}]
  })
})

ServerEvents.recipes(event => {
  // Recipes with rubber
  event.custom({type: 'vintageimprovements:pressurizing',
    ingredients: [
      {item: 'tfc:powder/sulfur'},
      fluidIn('afc:latex', 1000)
    ],
    results: [{id: 'afc:rubber_bar'}],
    heat_requirement: 'heated'
  })
})
