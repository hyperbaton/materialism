// Phosphorus
ServerEvents.recipes(event => {
  // Phosphorus recipes
  event.custom({type: 'vintageimprovements:pressurizing',
    ingredients: [
      {item: 'tfcvolcanoes:mineral/powder/apatite'},
      {item: 'tfcvolcanoes:mineral/powder/apatite'},
      {item: 'tfc:powder/charcoal'},
      {tag: 'c:sands/silica'}
    ],
    results: [{id: 'chemica:phosphorus_dust', count: 5}],
    heat_requirement: 'superheated',
    processing_time: 500
  })
  event.custom({type: 'vintageimprovements:pressurizing',
    ingredients: [
      {item: 'tfc:groundcover/guano'},
      {item: 'tfc:powder/charcoal'},
      {tag: 'c:sands/silica'}
    ],
    results: [{id: 'chemica:phosphorus_dust', count: 5}],
    heat_requirement: 'superheated',
    processing_time: 500
  })
})
