// Batteries: the galvanic cell and the lithium battery
ServerEvents.recipes(event => {
  // Galvanic cell recipe (reimplemented in materialismcore, original removed from TFMG 1.21)
  // Daniell cell: porous divider and salt bridge between a zinc and a copper half-cell,
  // sealed inside a steel casing.
  event.recipes.create.sequenced_assembly(
    'materialismcore:galvanic_cell',
    'tfmg:steel_casing',
    [
      event.recipes.createDeploying('tfmg:steel_casing', ['tfmg:steel_casing', 'tfc:ceramic/large_vessel']),
      event.recipes.createFilling('tfmg:steel_casing', ['tfmg:steel_casing', Fluid.of('minecraft:water', 500)]),
      event.recipes.createDeploying('tfmg:steel_casing', ['tfmg:steel_casing', 'kubejs:zinc_sulfate']),
      event.recipes.createDeploying('tfmg:steel_casing', ['tfmg:steel_casing', 'vintageimprovements:copper_sulfate']),
      event.recipes.createDeploying('tfmg:steel_casing', ['tfmg:steel_casing', 'tfc:powder/salt']),
      event.recipes.createDeploying('tfmg:steel_casing', ['tfmg:steel_casing', 'tfc:metal/rod/zinc']),
      event.recipes.createDeploying('tfmg:steel_casing', ['tfmg:steel_casing', 'tfc:metal/rod/copper']),
      event.recipes.createDeploying('tfmg:steel_casing', ['tfmg:steel_casing', 'createaddition:copper_wire']),
      event.recipes.createPressing('tfmg:steel_casing', 'tfmg:steel_casing')
    ]
  ).transitionalItem('tfmg:steel_casing').loops(1)

  // The lead-acid battery is the EE accumulator (power/electrical.js); TFMG's accumulator is the lithium battery
  event.recipes.create.sequenced_assembly([
   Item.of('kubejs:lithium_battery_core', 1)
  ], 'tfmg:heavy_machinery_casing', [ // input
   event.recipes.createDeploying('tfmg:heavy_machinery_casing', ['tfmg:heavy_machinery_casing', 'tfc_metallurgy:metal/sheet/manganese']),
   event.recipes.createDeploying('tfmg:heavy_machinery_casing', ['tfmg:heavy_machinery_casing', 'chemica:polyethylene_sheet']),
   event.recipes.createFilling(
     'tfmg:heavy_machinery_casing',
     ['tfmg:heavy_machinery_casing', Fluid.of('tfmg:propylene', 100)]
   ),
   event.recipes.createFilling(
     'tfmg:heavy_machinery_casing',
     ['tfmg:heavy_machinery_casing', Fluid.of('tfmg:ethylene', 100)]
   ),
   event.recipes.createFilling(
     'tfmg:heavy_machinery_casing',
     ['tfmg:heavy_machinery_casing', Fluid.of('tfc_metallurgy:metal/lithium', 200)]
   ),
   event.recipes.createDeploying('tfmg:heavy_machinery_casing', ['tfmg:heavy_machinery_casing', 'tfc_metallurgy:metal/rod/graphite']),
   event.recipes.create.pressing('tfmg:heavy_machinery_casing', 'tfmg:heavy_machinery_casing')
  ]).transitionalItem('tfmg:heavy_machinery_casing').loops(5)

  // Remove base TFMG accumulator recipes (replaced by custom lithium battery core path)
  event.remove({id: 'tfmg:crafting/materials/accumulator'})
  event.remove({id: 'tfmg:crafting/materials/accumulatorfrom_lithium'})

  event.recipes.create.sequenced_assembly([
    Item.of('tfmg:accumulator', 1)
  ], 'kubejs:lithium_battery_core', [ // input
    event.recipes.createDeploying('kubejs:lithium_battery_core', ['kubejs:lithium_battery_core', 'tfc_metallurgy:metal/sheet/aluminum']),
    event.recipes.createDeploying('kubejs:lithium_battery_core', ['kubejs:lithium_battery_core', 'tfc_metallurgy:metal/sheet/titanium']),
    event.recipes.vintageimprovements.vacuumizing('kubejs:lithium_battery_core', 'kubejs:lithium_battery_core'),
    event.recipes.createDeploying('kubejs:lithium_battery_core', ['kubejs:lithium_battery_core', 'firmalife:metal/double_sheet/stainless_steel']),
    event.recipes.createDeploying('kubejs:lithium_battery_core', ['kubejs:lithium_battery_core', 'createaddition:copper_wire']),
    event.custom({
      type: 'create_new_age:energising',
      energy_needed: 1000,
      ingredients: [
        { item: 'kubejs:lithium_battery_core'},
      ],
      results: [
        { id: 'kubejs:lithium_battery_core'},
      ]
    })
  ]).transitionalItem('kubejs:lithium_battery_core').loops(1)
})
