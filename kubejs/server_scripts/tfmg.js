ServerEvents.recipes(event => {

  event.remove({id: /.*tfmg:.*axe.*/})
  event.remove({id: /.*tfmg:.*sword.*/})
  event.remove({id: /.*tfmg:.*hoe.*/})
  event.remove({id: /.*tfmg:.*shovel.*/})
  event.remove({output: 'tfmg:aluminum_ingot'})
  // Remove wires, using vintageimprovement or carfts and additions ones
  event.remove('tfmg:stonecutting/aluminum_wire')
  event.remove('tfmg:stonecutting/copper_wire')

  // Change sulfuric acid recipes for vintageimprovements ones:
  event.remove('tfmg:mixing/copper_sulfate')
  event.remove('tfmg:mixing/zinc_sulfate')
  // Remove parts cutting (done with lathe)
  event.remove('tfmg:stonecutting/screw')
  event.remove('tfmg:stonecutting/rebar')
  // Remove fire clay from TFMG
  event.remove({input: 'tfmg:fireclay_ball'})

  event.custom({
    type: 'create:item_application',
    ingredients: [
      { tag: 'forge:stripped_logs' },
      { item: 'tfc:metal/sheet/steel' },
    ],
    results: [
      { item: 'tfmg:steel_casing' },
    ],
  })
  event.custom({
    type: 'create:item_application',
    ingredients: [
      { tag: 'forge:stripped_logs' },
      { item: 'tfc:metal/sheet/black_steel' },
    ],
    results: [
      { item: 'tfmg:heavy_machinery_casing' },
    ],
  })
  // Replace tfmg steel ingot for tfc steel ingot
  event.replaceInput(
    { input: 'tfmg:steel_ingot' }, // Arg 1: the filter
    'tfmg:steel_ingot',            // Arg 2: the item to replace
    'tfc:metal/ingot/steel'         // Arg 3: the item to replace it with
  )
  // Replace tfmg sulfur dust for tfc sulfur powder
  event.replaceInput(
    { id: 'tfmg:crafting/zinc_grenade' }, // Arg 1: the filter
    'tfmg:sulfur_dust',            // Arg 2: the item to replace
    'tfc:powder/sulfur'         // Arg 3: the item to replace it with
  )
  event.replaceInput(
    { id: 'tfmg:mixing/sulfuric_acid' }, // Arg 1: the filter
    'tfmg:sulfur_dust',            // Arg 2: the item to replace
    'tfc:powder/sulfur'         // Arg 3: the item to replace it with
  )
  event.replaceOutput(
    { id: 'tfmg:compacting/bitumen' }, // Arg 1: the filter
    'tfmg:sulfur_dust',            // Arg 2: the item to replace
    'tfc:powder/sulfur'         // Arg 3: the item to replace it with
  )
  // Replace TFMG copper sulfate for vintageimprovements' (has more uses)
  event.replaceInput(
    { id: 'tfmg:crafting/galvanic_cell' }, // Arg 1: the filter
    'tfmg:copper_sulfate',            // Arg 2: the item to replace
    'vintageimprovements:copper_sulfate'         // Arg 3: the item to replace it with
  )
  // Replace all wires with C&A or vintage ones
  event.replaceInput(
    { input: 'tfmg:copper_wire' }, // Arg 1: the filter
    'tfmg:copper_wire',            // Arg 2: the item to replace
    'createaddition:copper_wire'         // Arg 3: the item to replace it with
  )
  // Improve cable recipes
  event.replaceInput(
    { output: 'tfmg:copper_cable' }, // Arg 1: the filter
    'minecraft:stick',            // Arg 2: the item to replace
    'createaddition:spool'         // Arg 3: the item to replace it with
  )
  event.replaceInput(
    { id: 'tfmg:crafting/copper_wire' }, // Arg 1: the filter
    'minecraft:leather',            // Arg 2: the item to replace
    'afc:rubber_bar'         // Arg 3: the item to replace it with
  )
  // Make heavy plates out of tungsten steel (heavily used on TFMG recipes)
  // TODO: Consider adding heating requisite to make it harder :P
  event.replaceInput(
    { id: 'tfmg:sequenced_assembly/heavy_plate' }, // Arg 1: the filter
    '#createbigcannons:ingot_steel',            // Arg 2: the item to replace
    'tfc_metallurgy:metal/ingot/tungsten_steel'         // Arg 3: the item to replace it with
  )
  // Allow for coking of TFC coal
  event.replaceInput(
    { id: 'tfmg:coking/coal_coke' }, // Arg 1: the filter
    'minecraft:coal',            // Arg 2: the item to replace
    'tfc:ore/bituminous_coal'         // Arg 3: the item to replace it with
  )
  // Use TFC firebricks instead of TFMG ones
  // Using fire_bricks instead of fire_brick increases the cost
  // at a point where you can automatize most of the process.
  event.replaceInput(
    { input: 'tfmg:fireproof_brick' }, // Arg 1: the filter
    'tfmg:fireproof_brick',            // Arg 2: the item to replace
    'tfc:fire_bricks'         // Arg 3: the item to replace it with
  )
  // Replace vanilla string requirements
  event.replaceInput(
    { id: 'tfmg:mechanical_crafting/pumpjack_crank' }, // Arg 1: the filter
    'minecraft:string',            // Arg 2: the item to replace
    'firmaciv:rope_coil'         // Arg 3: the item to replace it with
  )
  event.replaceInput(
    { id: 'tfmg:mechanical_crafting/pumpjack_base' }, // Arg 1: the filter
    'minecraft:string',            // Arg 2: the item to replace
    'firmaciv:rope_coil'         // Arg 3: the item to replace it with
  )
  event.replaceInput(
    { id: 'tfmg:crafting/polarizer' }, // Arg 1: the filter
    'minecraft:copper_ingot',            // Arg 2: the item to replace
    'tfc:metal/ingot/copper' // Arg 3: the item to replace it with
  )
  // Use TFC ores for steel
  event.remove({id: 'tfmg:mixing/blasting_mixture'})
  event.recipes.create.mixing(
    'tfmg:blasting_mixture',
    ['tfc:powder/lime', '20x #tfc:powders/iron']
  )
  // Use TFC steel as product of TFMG blast furnace and casting
  event.replaceOutput(
    { id: 'tfmg:casting/steel'},
    'tfmg:steel_ingot',
    'tfc:metal/ingot/steel'
  )
  event.remove({id: 'tfmg:casting/amogus'})
  // Galvanic cell proper recipe
  event.replaceInput(
    { id: 'tfmg:crafting/galvanic_cell' }, // Arg 1: the filter
    'minecraft:copper_ingot',            // Arg 2: the item to replace
    'tfc:metal/ingot/copper'         // Arg 3: the item to replace it with
  )
  event.replaceInput(
    { id: 'tfmg:crafting/galvanic_cell' }, // Arg 1: the filter
    'tfmg:electric_casing',            // Arg 2: the item to replace
    'tfmg:steel_casing'         // Arg 3: the item to replace it with
  )
  event.replaceInput(
    { id: 'tfmg:crafting/galvanic_cell' }, // Arg 1: the filter
    '#forge:ingots/zinc',            // Arg 2: the item to replace
    'tfc:metal/ingot/zinc'         // Arg 3: the item to replace it with
  )
  // Use TFC gravel for concrete
  event.replaceInput(
    { id: 'tfmg:mixing/liquid_concrete_from_slag' }, // Arg 1: the filter
    'minecraft:gravel',            // Arg 2: the item to replace
    '#tfc:rock/gravel'    // Arg 3: the item to replace it with
  )
  event.replaceInput(
    { id: 'tfmg:mixing/concrete_mixture' }, // Arg 1: the filter
    'minecraft:gravel',            // Arg 2: the item to replace
    '#tfc:rock/gravel'    // Arg 3: the item to replace it with
  )
  event.replaceInput(
    { id: 'tfmg:mixing/concrete_mixture' }, // Arg 1: the filter
    'minecraft:sand',            // Arg 2: the item to replace
    '#tfc:silica_sand' // Arg 3: the item to replace it with
  )
  event.replaceInput(
    { id: 'tfmg:mixing/liquid_concrete' }, // Arg 1: the filter
    'minecraft:gravel',            // Arg 2: the item to replace
    '#tfc:rock/gravel'    // Arg 3: the item to replace it with
  )
  event.replaceInput(
    { id: 'tfmg:mixing/liquid_concrete' }, // Arg 1: the filter
    'minecraft:sand',            // Arg 2: the item to replace
    '#tfc:silica_sand' // Arg 3: the item to replace it with
  )
  // Use TFC gravel and sand for asphalt
  event.replaceInput(
    { id: 'tfmg:mixing/liquid_asphalt' }, // Arg 1: the filter
    'minecraft:sand',            // Arg 2: the item to replace
    '#tfc:silica_sand' // Arg 3: the item to replace it with
  )
  event.replaceInput(
    { id: 'tfmg:mixing/liquid_asphalt' }, // Arg 1: the filter
    'minecraft:gravel',            // Arg 2: the item to replace
    '#tfc:rock/gravel'    // Arg 3: the item to replace it with
  )
  event.replaceInput(
    { id: 'tfmg:crafting/nickel_block' }, // Arg 1: the filter
    'tfmg:nickel_ingot',            // Arg 2: the item to replace
    'tfc:metal/ingot/nickel' // Arg 3: the item to replace it with
  )

  // Bauxite and galena compacting recipes
  event.recipes.create.compacting('tfmg:bauxite', Ingredient.of('tfc_metallurgy:ore/rich_bauxite', 3))
  event.recipes.create.compacting('tfmg:bauxite', Ingredient.of('tfc_metallurgy:ore/normal_bauxite', 4))
  event.recipes.create.compacting('tfmg:bauxite', Ingredient.of('tfc_metallurgy:ore/poor_bauxite', 7))
  event.recipes.create.compacting('tfmg:bauxite', Ingredient.of('tfc_metallurgy:ore/small_bauxite', 10))
  event.recipes.create.compacting('tfmg:galena', Ingredient.of('tfc_metallurgy:ore/rich_galena', 3))
  event.recipes.create.compacting('tfmg:galena', Ingredient.of('tfc_metallurgy:ore/normal_galena', 4))
  event.recipes.create.compacting('tfmg:galena', Ingredient.of('tfc_metallurgy:ore/poor_galena', 7))
  event.recipes.create.compacting('tfmg:galena', Ingredient.of('tfc_metallurgy:ore/small_galena', 10))
  event.recipes.tfc.heating('tfmg:bauxite', 660)
    .resultFluid(Fluid.of('tfc_metallurgy:metal/aluminum', 100))
  event.recipes.tfc.heating('tfmg:galena', 328)
    .resultFluid(Fluid.of('tfc_metallurgy:metal/lead', 100))
  

  // Electrical components
  // Resistor item
  event.remove({id: 'tfmg:crafting/resistor_item'})
  event.recipes.create.sequenced_assembly([
    Item.of('tfmg:resistor_').withChance(90.0), // this is the item that will appear in JEI as the result
    Item.of('createaddition:copper_wire').withChance(5.0),
    Item.of('vintageimprovements:lead_wire').withChance(5.0)
  ], 'createaddition:copper_wire', [ // input
    // the transitional item set by `transitionalItem('create:incomplete_large_cogwheel')` is the item used during the intermediate stages of the assembly
    event.recipes.createDeploying('createaddition:copper_wire', ['createaddition:copper_wire', 'tfc:glue']),
    event.recipes.createDeploying('createaddition:copper_wire', ['createaddition:copper_wire', 'vintageimprovements:lead_wire']),
    event.recipes.createDeploying('createaddition:copper_wire', ['createaddition:copper_wire', 'vintageimprovements:lead_wire']),
    event.recipes.createFilling(
      'createaddition:copper_wire',
      ['createaddition:copper_wire', Fluid.of('tfmg:liquid_plastic', 100)]
    ),
    event.recipes.createPressing('createaddition:copper_wire', 'createaddition:copper_wire'),
    event.custom({
      type: 'create_new_age:energising',
      energy_needed: 500,
      ingredients: [
        { item: 'createaddition:copper_wire'},
      ],
      results: [
        { item: 'createaddition:copper_wire'},
      ]
    })
  ]).transitionalItem('createaddition:copper_wire').loops(1)
  // Capacitor item
  event.remove({id: 'tfmg:crafting/capacitor_item'})
  event.recipes.create.sequenced_assembly([
    Item.of('tfmg:capacitor_', 2).withChance(90.0), // this is the item that will appear in JEI as the result
    Item.of('tfc_metallurgy:metal/sheet/aluminum').withChance(5.0),
    Item.of('minecraft:paper').withChance(5.0)
  ], 'tfc_metallurgy:metal/sheet/aluminum', [ // input
    // the transitional item set by `transitionalItem('create:incomplete_large_cogwheel')` is the item used during the intermediate stages of the assembly
    event.recipes.createDeploying('tfc_metallurgy:metal/sheet/aluminum', ['tfc_metallurgy:metal/sheet/aluminum', 'minecraft:paper']),
    event.recipes.createDeploying('tfc_metallurgy:metal/sheet/aluminum', ['tfc_metallurgy:metal/sheet/aluminum', 'tfc_metallurgy:metal/sheet/aluminum']),
    event.recipes.createDeploying('tfc_metallurgy:metal/sheet/aluminum', ['tfc_metallurgy:metal/sheet/aluminum', 'createaddition:copper_wire']),
    event.recipes.createFilling(
      'tfc_metallurgy:metal/sheet/aluminum',
      ['tfc_metallurgy:metal/sheet/aluminum', Fluid.of('tfmg:liquid_plastic', 100)]
    ),
    event.recipes.createPressing('tfc_metallurgy:metal/sheet/aluminum', 'tfc_metallurgy:metal/sheet/aluminum'),
    event.custom({
      type: 'create_new_age:energising',
      energy_needed: 500,
      ingredients: [
        { item: 'tfc_metallurgy:metal/sheet/aluminum'},
      ],
      results: [
        { item: 'tfc_metallurgy:metal/sheet/aluminum'},
      ]
    })
  ]).transitionalItem('tfc_metallurgy:metal/sheet/aluminum').loops(1)
  // Electric casing
  event.remove({id: 'tfmg:crafting/electric_casing'})
  event.recipes.create.sequenced_assembly([
    Item.of('tfmg:electric_casing').withChance(90.0), // this is the item that will appear in JEI as the result
    Item.of('tfmg:heavy_machinery_casing').withChance(5.0),
    Item.of('tfmg:capacitor_').withChance(3.0),
    Item.of('tfmg:resistor_').withChance(2.0)
  ], 'tfmg:heavy_machinery_casing', [ // input
    event.recipes.createDeploying('tfmg:heavy_machinery_casing', ['tfmg:heavy_machinery_casing', 'tfmg:copper_cable']),
    event.recipes.createDeploying('tfmg:heavy_machinery_casing', ['tfmg:heavy_machinery_casing', 'tfmg:resistor_']),
    event.recipes.createDeploying('tfmg:heavy_machinery_casing', ['tfmg:heavy_machinery_casing', 'tfmg:capacitor_']),
    event.recipes.createDeploying('tfmg:heavy_machinery_casing', ['tfmg:heavy_machinery_casing', 'create:electron_tube']),
    event.recipes.createPressing('tfmg:heavy_machinery_casing', 'tfmg:heavy_machinery_casing'),
    event.custom({
      type: 'create_new_age:energising',
      energy_needed: 1500,
      ingredients: [
        { item: 'tfmg:heavy_machinery_casing'},
      ],
      results: [
        { item: 'tfmg:heavy_machinery_casing'},
      ]
    })
  ]).transitionalItem('tfmg:heavy_machinery_casing').loops(2)
  // Lightbulb
  event.remove({id: 'tfmg:crafting/light_bulb'})
  event.recipes.create.sequenced_assembly([
    Item.of('tfmg:light_bulb', 4)
  ], 'tfc_metallurgy:metal/sheet/nickel_silver', [ // input
    event.recipes.createDeploying('tfc_metallurgy:metal/sheet/nickel_silver', ['tfc_metallurgy:metal/sheet/nickel_silver', 'kubejs:wire/tungsten_wire']),
    event.recipes.createFilling(
      'tfc_metallurgy:metal/sheet/nickel_silver',
      ['tfc_metallurgy:metal/sheet/nickel_silver', Fluid.of('tfc_metallurgy:metal/solder', 20)]
    ),
    event.recipes.createDeploying('tfc_metallurgy:metal/sheet/nickel_silver', ['tfc_metallurgy:metal/sheet/nickel_silver', 'tfc:lamp_glass']),
    event.recipes.vintageimprovements.vacuumizing('tfc_metallurgy:metal/sheet/nickel_silver', ['tfc_metallurgy:metal/sheet/nickel_silver']),
    event.custom({
      type: 'create_new_age:energising',
      energy_needed: 500,
      ingredients: [
        { item: 'tfc_metallurgy:metal/sheet/nickel_silver'},
      ],
      results: [
        { item: 'tfc_metallurgy:metal/sheet/nickel_silver'},
      ]
    })
  ]).transitionalItem('tfc_metallurgy:metal/sheet/nickel_silver').loops(1)
  // Lead-acid battery
  event.remove({id: 'tfmg:crafting/capacitor'})
  event.recipes.create.sequenced_assembly([
    Item.of('tfmg:capacitor', 1)
  ], 'create:basin', [ // input
    event.recipes.createDeploying('create:basin', ['create:basin', 'tfc_metallurgy:metal/double_sheet/lead']),
    event.recipes.createDeploying('create:basin', ['create:basin', 'tfc_metallurgy:metal/double_sheet/lead']),
    event.recipes.createFilling(
      'create:basin',
      ['create:basin', Fluid.of('tfmg:sulfuric_acid', 1000)]
    ),
    event.recipes.createDeploying('create:basin', ['create:basin', 'createaddition:copper_wire']),
    event.recipes.createDeploying('create:basin', ['create:basin', 'tfc_metallurgy:metal/sheet/cobalt']),
    event.recipes.create.pressing('create:basin', 'create:basin'),
    event.custom({
      type: 'create_new_age:energising',
      energy_needed: 1000,
      ingredients: [
        { item: 'create:basin'},
      ],
      results: [
        { item: 'create:basin'},
      ]
    })
  ]).transitionalItem('create:basin').loops(1)
  // Lithium battery
  event.remove({id: 'tfmg:crafting/accumulator'})
  event.recipes.create.sequenced_assembly([
    Item.of('kubejs:lithium_battery_core', 1)
  ], 'tfmg:electric_casing', [ // input
    event.recipes.createDeploying('tfmg:electric_casing', ['tfmg:electric_casing', 'tfc_metallurgy:metal/sheet/manganese']),
    event.recipes.createDeploying('tfmg:electric_casing', ['tfmg:electric_casing', 'tfmg:plastic_sheet']),
    event.recipes.createFilling(
      'tfmg:electric_casing',
      ['tfmg:electric_casing', Fluid.of('tfmg:propylene', 100)]
    ),
    event.recipes.createFilling(
      'tfmg:electric_casing',
      ['tfmg:electric_casing', Fluid.of('tfmg:ethylene', 100)]
    ),
    event.recipes.createFilling(
      'tfmg:electric_casing',
      ['tfmg:electric_casing', Fluid.of('tfc_metallurgy:metal/lithium', 200)]
    ),
    event.recipes.createDeploying('tfmg:electric_casing', ['tfmg:electric_casing', 'tfc_metallurgy:metal/rod/graphite']),
    event.recipes.create.pressing('tfmg:electric_casing', 'tfmg:electric_casing')
  ]).transitionalItem('tfmg:electric_casing').loops(5)

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
        { item: 'kubejs:lithium_battery_core'},
      ]
    })
  ]).transitionalItem('kubejs:lithium_battery_core').loops(1)


  event.remove({id: 'tfmg:crafting/turbine_blade'})
  event.recipes.create.sequenced_assembly([
    Item.of('tfmg:turbine_blade', 1)
  ], 'create:propeller', [ // input
    event.recipes.createDeploying('create:propeller', ['create:propeller', 'create:propeller']),
    event.recipes.createFilling(
      'create:propeller',
      ['create:propeller', Fluid.of('tfc_metallurgy:metal/solder', 20)]
    ),
    event.recipes.create.pressing('create:propeller', 'create:propeller')
  ]).transitionalItem('create:propeller').loops(1)

  event.recipes.tfmg.coking('minecraft:charcoal', [Item.of('tfmg:coal_coke').withChance(0.4), Fluid.of('createbb:methanol', 1)], 2000)
  event.recipes.tfmg.coking('#minecraft:logs', [Item.of('minecraft:charcoal').withChance(0.8), Fluid.of('minecraft:water', 1)], 5000)

  event.recipes.create.sequenced_assembly(
    [
      Item.of('tfmg:steel_mechanism').withChance(130.0), // this is the item that will appear in JEI as the result
      Item.of('tfc:metal/sheet/steel').withChance(8.0), // the rest of these items will be part of the scrap
      Item.of('vintageimprovements:invar_wire').withChance(8.0),
      Item.of('tfmg:steel_cogwheel').withChance(5.0),
      Item.of('create:shaft').withChance(2.0)
    ],
    'tfc:metal/sheet/steel',
    [
      event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'tfmg:steel_cogwheel']),
      event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'tfmg:large_steel_cogwheel']),
      event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'vintageimprovements:small_invar_spring']),
      event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'tfc_metallurgy:metal/rod/constantan'])
    ]
  ).transitionalItem('create:incomplete_precision_mechanism').loops(5)
  
  // Make cinder blocks from red concrete
  event.remove({id: 'tfmg:compacting/cinderflourblock'})
  event.recipes.create.cutting(
    'tfmg:cinderflourblock',
    'tfmg:red_concrete'
  )

  event.replaceInput(
    { id: 'tfmg:mechanical_crafting/lithium_blade' }, // Arg 1: the filter
    'tfmg:steel_sword',            // Arg 2: the item to replace
    'tfc:metal/sword/steel'         // Arg 3: the item to replace it with
  )

  event.shaped('tfmg:lead_flywheel', 
    [ 'III',
      'ISI',
      'III'
    ], 
    {I: 'tfc_metallurgy:metal/ingot/lead', S: 'create:shaft'}
  )

  event.shaped('tfmg:nickel_flywheel', 
    [ 'III',
      'ISI',
      'III'
    ], 
    {I: 'tfc:metal/ingot/nickel', S: 'create:shaft'}
  )
}
)