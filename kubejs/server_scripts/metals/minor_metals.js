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

  // Vanadium nugget: standardized onto tfc_metallurgy's ingot (the only source of
  // vanadium ingots, since the metal has no ore)
  event.remove({ id: 'vintageimprovements:craft/vanadium_ingot_to_nuggets' })
  event.remove({ id: 'vintageimprovements:craft/vanadium_nuggets_to_ingot' })
  event.shapeless('10x vintageimprovements:vanadium_nugget', ['tfc_metallurgy:metal/ingot/vanadium', '#tfc:chisels']).damageIngredient(Ingredient.of('#tfc:chisels'))
  event.custom({ type: 'tfc:heating', ingredient: { item: 'vintageimprovements:vanadium_nugget' }, result_fluid: { amount: 10, id: 'tfc_metallurgy:metal/vanadium' }, temperature: 625 })
  event.custom({ type: 'create:deploying', ingredients: [{ item: 'tfc_metallurgy:metal/ingot/vanadium' }, { tag: 'tfc:chisels' }], results: [{ id: 'vintageimprovements:vanadium_nugget', count: 10 }] })
})
