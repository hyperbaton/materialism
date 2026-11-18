// Solar power: molten salt, solar heating and photovoltaic cells
ServerEvents.recipes(event => {
  // Molten salt is nitrate salt: 1 saltpeter = 100 mB
  event.remove({ output: 'solarpunk:salt_block' })
  event.remove({ id: 'solarpunk:salt_from_salt_block' })
  event.recipes.create.compacting('solarpunk:salt_block', '20x tfc:powder/saltpeter').id('kubejs:solarpunk/compacting/salt_block')
  event.remove({ id: 'solarpunk:solar_heating/salt_to_molten_salt' })
  event.remove({ id: 'solarpunk:solar_heating/salt_item_to_molten_salt' })
  event.custom({
    type: 'solarpunk:solar_heating',
    ingredient: { item: 'tfc:powder/saltpeter' },
    result: { id: 'solarpunk:molten_salt', amount: 100 }
  }).id('kubejs:solarpunk/solar_heating/saltpeter_to_molten_salt')

  event.remove({ id: 'solarpunk:crystallizing/molten_salt_to_salt' })
  event.custom({
    type: 'solarpunk:crystallizing',
    input_a: { id: 'solarpunk:molten_salt', amount: 100 },
    input_b: { id: 'minecraft:water', amount: 50 },
    byproduct: { id: 'solarpunk:steam', amount: 25 },
    processing_time: 100,
    result: { id: 'tfc:powder/saltpeter', count: 1 }
  }).id('kubejs:solarpunk/crystallizing/molten_salt_to_saltpeter')

  // Solar heater: rock to lava, reduced yield
  const LAVA_FROM_RAW_ROCK = 250
  const LAVA_FROM_COBBLE = 100
  event.remove({ id: 'solarpunk:solar_heating/stone_to_lava' })
  event.remove({ id: 'solarpunk:solar_heating/cobblestone_to_lava' })
  event.custom({
    type: 'solarpunk:solar_heating',
    ingredient: { tag: 'c:stones' },
    result: { id: 'minecraft:lava', amount: LAVA_FROM_RAW_ROCK }
  }).id('kubejs:solarpunk/solar_heating/rock_to_lava')
  event.custom({
    type: 'solarpunk:solar_heating',
    ingredient: { tag: 'c:cobblestones' },
    result: { id: 'minecraft:lava', amount: LAVA_FROM_COBBLE }
  }).id('kubejs:solarpunk/solar_heating/cobble_to_lava')

  // Photovoltaic cells (multicrystalline, from polysilicon)
  const cell = 'solarpunk:incomplete_photovoltaic_cell'
  const heatedPressurizing = () => event.custom({
    type: 'vintageimprovements:pressurizing',
    ingredients: [{ item: cell }],
    results: [{ id: cell }],
    heat_requirement: 'heated'
  })
  event.remove({ id: 'solarpunk:sequenced_assembly/photovoltaic_cell' })
  event.recipes.create.sequenced_assembly(
    [Item.of('solarpunk:photovoltaic_cell', 4)],
    'kubejs:polysilicon',
    [
      event.recipes.createFilling(cell, [cell, Fluid.of('tfc_metallurgy:metal/boron', 10)]),
      event.recipes.createCutting(cell, cell),
      event.recipes.createFilling(cell, [cell, Fluid.of('chemica:caustic_soda', 100)]),
      event.recipes.createDeploying(cell, [cell, 'chemica:phosphorus_dust']),
      heatedPressurizing(),
      event.recipes.createFilling(cell, [cell, Fluid.of('chemica:hydrofluoric_acid', 100)]),
      event.recipes.createFilling(cell, [cell, Fluid.of('chemica:ammonia', 100)]),
      event.recipes.createFilling(cell, [cell, Fluid.of('tfc:metal/silver', 20)]),
      event.recipes.createFilling(cell, [cell, Fluid.of('tfc_metallurgy:metal/aluminum', 40)]),
      heatedPressurizing()
    ]
  ).transitionalItem(cell).loops(1).id('kubejs:solarpunk/sequenced_assembly/photovoltaic_cell')
})
