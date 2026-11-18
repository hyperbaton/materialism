// Minor metals: neodymium and vanadium
ServerEvents.recipes(event => {
  // Centrifugation recipes
  event.custom({type: 'vintageimprovements:centrifugation',
    ingredients: [
      {item: 'tfcvolcanoes:mineral/powder/bastnasite'},
      fluidIn('tfmg:sulfuric_acid', 100)
    ],
    results: [{id: 'kubejs:powder/neodymium', chance: 0.2}],
    processing_time: 300,
    minimal_rpm: 216
  })

  // Introduce a way of obtaining vanadium
  event.remove({id: 'create:crushing/crimsite_recycling'})  // Remove standard vanadium source
  event.remove({id: 'vintageimprovements:crushing/basalt_recycling'})
  event.remove({id: 'create:crushing/crimsite'})
  event.remove({id: 'vintageimprovements:crushing/basalt'})
  event.custom({type: 'vintageimprovements:pressurizing',
    ingredients: [
      {item: 'tfmg:slag'},
      {item: 'tfc:powder/salt'},
      {item: 'tfc:powder/saltpeter'},
      fluidIn('minecraft:water', 200)
    ],
    results: [{id: 'vintageimprovements:vanadium_nugget', chance: 0.1}],
    secondary_fluid_input: 0,
    heat_requirement: 'heated'
  })
  event.custom({type: 'vintageimprovements:pressurizing',
    ingredients: [
      {item: 'tfmg:slag'},
      {item: 'tfc:powder/salt'},
      {item: 'tfc:powder/saltpeter'},
      fluidIn('tfmg:sulfuric_acid', 200)
    ],
    results: [{id: 'vintageimprovements:vanadium_nugget', chance: 0.3}],
    secondary_fluid_input: 0,
    heat_requirement: 'heated'
  })

})
