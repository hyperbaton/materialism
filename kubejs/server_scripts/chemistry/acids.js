// Sulfuric acid and sulfates
ServerEvents.recipes(event => {
  // Presurizing recipes
  // Produce sulfuric acid
  event.remove({id: 'vintageimprovements:pressurizing/sulfur_dioxide'})
  event.remove({id: 'vintageimprovements:pressurizing/compat/sulfur_dioxide_from_dust'})
  event.remove({id: 'vintageimprovements:milling/sulfur'})
  event.recipes.vintageimprovements.pressurizing(Fluid.of('vintageimprovements:sulfur_dioxide', 1000),
    ['tfc:powder/sulfur'])
    .secondaryFluidOutput(0).heatRequirement('heated').processingTime(200)

  // Use TFMG sulfuric acid with vintage recipe
  event.custom({type: 'vintageimprovements:pressurizing',
    ingredients: [
      {item: 'tfc:powder/sphalerite'},
      fluidIn('tfmg:sulfuric_acid', 200),
      fluidIn('minecraft:water', 200)
    ],
    results: [{id: 'kubejs:zinc_sulfate'}],
    secondary_fluid_input: 1
  })
  event.remove({id: 'vintageimprovements:pressurizing/sulfur_trioxide_alt'})  // Why use iron powder?
  event.remove({id: 'vintageimprovements:pressurizing/copper_sulfate'}) // Remove recipe with vintage sulfuric acid
  event.remove({id: 'vintageimprovements:pressurizing/sulfuric_acid'}) // Remove recipe for vintage sulfuric acid
  event.remove({id: 'tfmg:mixing/sulfuric_acid'})
  event.custom({type: 'vintageimprovements:pressurizing',
    ingredients: [
      fluidIn('vintageimprovements:sulfur_trioxide', 1000),
      fluidIn('minecraft:water', 1000)
    ],
    results: [{id: 'tfmg:sulfuric_acid', amount: 1000}],
    secondary_fluid_input: 1
  })
  event.custom({type: 'vintageimprovements:pressurizing',
    ingredients: [
      {tag: 'materialism:powders/copper'},
      fluidIn('tfmg:sulfuric_acid', 200),
      fluidIn('minecraft:water', 200)
    ],
    results: [{id: 'vintageimprovements:copper_sulfate'}],
    secondary_fluid_input: 1
  })
})
