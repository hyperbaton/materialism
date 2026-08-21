ServerEvents.recipes(event => {

  // Raw lithium is cut from the pack: drop every recipe that makes or uses it.
  event.remove({ output: 'tfmg:raw_lithium' })
  event.remove({ input: 'tfmg:raw_lithium' })
  event.remove({ input: 'tfmg:crushed_raw_lithium' })
  event.remove({ input: 'tfmg:crushed_raw_lithium' })

  // Aluminium sheet: standardise on tfc_metallurgy's. Stop TFMG from producing its own,
  // and swap it for the tfc_metallurgy sheet wherever it's used as an input.
  event.remove({ output: 'tfmg:aluminum_sheet' })
  event.replaceInput({}, 'tfmg:aluminum_sheet', 'tfc_metallurgy:metal/sheet/aluminum')

  event.remove({id: /.*tfmg:.*axe.*/})
  event.remove({id: /.*tfmg:.*sword.*/})
  event.remove({id: /.*tfmg:.*hoe.*/})
  event.remove({id: /.*tfmg:.*shovel.*/})
  event.remove({output: 'tfmg:aluminum_ingot'})

  // Remove iron and steel ingots
  event.remove({ output: 'tfmg:cast_iron_ingot' })
  event.remove({ output: 'tfmg:steel_ingot' })
  event.remove({ output: 'tfmg:cast_iron_sheet' })
  event.replaceInput({}, 'tfmg:heavy_plate', 'tfc:metal/sheet/steel')

  // Nugget standardization: TFMG's own ingots are removed, so their nuggets
  //  are re-anchored onto the TFC or tfc_metallurgy ingot.
  event.remove({ id: 'tfmg:crafting/materials/aluminum_ingot_from_compacting' })
  event.remove({ id: 'tfmg:crafting/materials/aluminum_nugget_from_decompacting' })
  event.shapeless('10x tfmg:aluminum_nugget', ['tfc_metallurgy:metal/ingot/aluminum', '#tfc:chisels']).damageIngredient(Ingredient.of('#tfc:chisels'))
  event.custom({ type: 'tfc:heating', ingredient: { item: 'tfmg:aluminum_nugget' }, result_fluid: { amount: 10, id: 'tfc_metallurgy:metal/aluminum' }, temperature: 660 })
  event.custom({ type: 'create:deploying', ingredients: [{ item: 'tfc_metallurgy:metal/ingot/aluminum' }, { tag: 'tfc:chisels' }], results: [{ id: 'tfmg:aluminum_nugget', count: 10 }] })

  event.remove({ id: 'tfmg:crafting/materials/lead_ingot_from_compacting' })
  event.remove({ id: 'tfmg:crafting/materials/lead_nugget_from_decompacting' })
  event.shapeless('10x tfmg:lead_nugget', ['tfc_metallurgy:metal/ingot/lead', '#tfc:chisels']).damageIngredient(Ingredient.of('#tfc:chisels'))
  event.custom({ type: 'tfc:heating', ingredient: { item: 'tfmg:lead_nugget' }, result_fluid: { amount: 10, id: 'tfc_metallurgy:metal/lead' }, temperature: 328 })
  event.custom({ type: 'create:deploying', ingredients: [{ item: 'tfc_metallurgy:metal/ingot/lead' }, { tag: 'tfc:chisels' }], results: [{ id: 'tfmg:lead_nugget', count: 10 }] })

  event.remove({ id: 'tfmg:crafting/materials/lithium_ingot_from_compacting' })
  event.remove({ id: 'tfmg:crafting/materials/lithium_nugget_from_decompacting' })
  event.shapeless('10x tfmg:lithium_nugget', ['tfc_metallurgy:metal/ingot/lithium', '#tfc:chisels']).damageIngredient(Ingredient.of('#tfc:chisels'))
  event.custom({ type: 'tfc:heating', ingredient: { item: 'tfmg:lithium_nugget' }, result_fluid: { amount: 10, id: 'tfc_metallurgy:metal/lithium' }, temperature: 328 })
  event.custom({ type: 'create:deploying', ingredients: [{ item: 'tfc_metallurgy:metal/ingot/lithium' }, { tag: 'tfc:chisels' }], results: [{ id: 'tfmg:lithium_nugget', count: 10 }] })

  event.remove({ id: 'tfmg:crafting/materials/nickel_ingot_from_compacting' })
  event.remove({ id: 'tfmg:crafting/materials/nickel_nugget_from_decompacting' })
  event.shapeless('10x tfmg:nickel_nugget', ['tfc:metal/ingot/nickel', '#tfc:chisels']).damageIngredient(Ingredient.of('#tfc:chisels'))
  event.custom({ type: 'tfc:heating', ingredient: { item: 'tfmg:nickel_nugget' }, result_fluid: { amount: 10, id: 'tfc:metal/nickel' }, temperature: 1453 })
  event.custom({ type: 'create:deploying', ingredients: [{ item: 'tfc:metal/ingot/nickel' }, { tag: 'tfc:chisels' }], results: [{ id: 'tfmg:nickel_nugget', count: 10 }] })
  
  event.remove({ id: 'tfmg:crafting/materials/steel_ingot_from_compacting' })
  event.remove({ id: 'tfmg:crafting/materials/steel_nugget_from_decompacting' })
  event.shapeless('10x tfmg:steel_nugget', ['tfc:metal/ingot/steel', '#tfc:chisels']).damageIngredient(Ingredient.of('#tfc:chisels'))
  event.custom({ type: 'tfc:heating', ingredient: { item: 'tfmg:steel_nugget' }, result_fluid: { amount: 10, id: 'tfc:metal/cast_iron' }, temperature: 1535 })
  event.custom({ type: 'create:deploying', ingredients: [{ item: 'tfc:metal/ingot/steel' }, { tag: 'tfc:chisels' }], results: [{ id: 'tfmg:steel_nugget', count: 10 }] })

  // Cast iron: keep tfmg's nugget as canonical (createbigcannons's duplicate is hidden instead)
  event.remove({ id: 'tfmg:crafting/materials/cast_iron_ingot_from_compacting' })
  event.remove({ id: 'tfmg:crafting/materials/cast_iron_nugget_from_decompacting' })
  event.shapeless('10x tfmg:cast_iron_nugget', ['tfc:metal/ingot/cast_iron', '#tfc:chisels']).damageIngredient(Ingredient.of('#tfc:chisels'))
  event.custom({ type: 'tfc:heating', ingredient: { item: 'tfmg:cast_iron_nugget' }, result_fluid: { amount: 10, id: 'tfc:metal/cast_iron' }, temperature: 1535 })
  event.custom({ type: 'create:deploying', ingredients: [{ item: 'tfc:metal/ingot/cast_iron' }, { tag: 'tfc:chisels' }], results: [{ id: 'tfmg:cast_iron_nugget', count: 10 }] })

  // Remove wires, using vintageimprovement or carfts and additions ones
  event.remove('tfmg:stonecutting/aluminum_wire')
  event.remove('tfmg:stonecutting/copper_wire')
  event.remove('tfmg:stonecutting/constantan_wire')

  event.replaceInput({}, 'tfmg:industrial_aluminum_casing', 'tfmg:steel_casing')

  event.remove({id: 'tfmg:crafting/materials/cast_iron_fluid_tank'})
  event.shaped('tfmg:cast_iron_fluid_tank', [
        'B',
        'C',
        'B'
    ], {
        B: 'tfc:metal/sheet/cast_iron',
        C: '#tfc:barrels'
    })

  // Change sulfuric acid recipes for vintageimprovements ones:
  event.remove('tfmg:mixing/copper_sulfate')
  event.remove('tfmg:mixing/zinc_sulfate')
  // Zinc sulfate recipe (item reimplemented via KubeJS, mirrors copper sulfate pressurizing)
  // event.custom({
  //   type: 'vintageimprovements:pressurizing',
  //   ingredients: [
  //     {amount: 200, tag: 'c:sulfuric_acid', type: 'neoforge:tag'},
  //     {fluid: 'minecraft:water', amount: 200, type: 'neoforge:single'},
  //     {item: 'tfc:metal/ingot/zinc'}
  //   ],
  //   results: [{id: 'kubejs:zinc_sulfate'}],
  //   processing_time: 800
  // })
  // Remove parts cutting (done with lathe)
  event.remove('tfmg:stonecutting/screw')
  event.remove('tfmg:stonecutting/rebar')
  // Remove fire clay from TFMG
  event.remove({input: 'tfmg:fireclay_ball'})

  event.custom({
    type: 'create:item_application',
    ingredients: [
      { tag: 'c:stripped_logs' },
      { item: 'tfc:metal/sheet/steel' },
    ],
    results: [
      { id: 'tfmg:steel_casing' },
    ],
  })
  event.custom({
    type: 'create:item_application',
    ingredients: [
      { tag: 'c:stripped_logs' },
      { item: 'tfc:metal/sheet/black_steel' },
    ],
    results: [
      { id: 'tfmg:heavy_machinery_casing' },
    ],
  })
  // Replace tfmg bars
  event.replaceInput(
    { input: 'tfmg:aluminum_bars' }, // Arg 1: the filter
    'tfmg:aluminum_bars',            // Arg 2: the item to replace
    'create:andesite_bars'         // Arg 3: the item to replace it with
  )
  // Replace tfmg steel ingot for tfc steel ingot
  event.replaceInput(
    { input: 'tfmg:steel_ingot' }, // Arg 1: the filter
    'tfmg:steel_ingot',            // Arg 2: the item to replace
    'tfc:metal/ingot/steel'         // Arg 3: the item to replace it with
  )
  // Replace all tfmg sulfur dust with tfc sulfur powder
  event.replaceInput(
    { input: 'tfmg:sulfur_dust' },
    'tfmg:sulfur_dust',
    'tfc:powder/sulfur'
  )
  event.replaceOutput(
    { output: 'tfmg:sulfur_dust' },
    'tfmg:sulfur_dust',
    'tfc:powder/sulfur'
  )
  // Replace vintageimprovements sulfur items with tfc equivalents
  event.replaceInput(
    { input: 'vintageimprovements:sulfur' },
    'vintageimprovements:sulfur',
    'tfc:powder/sulfur'
  )
  event.replaceInput(
    { input: 'vintageimprovements:sulfur_chunk' },
    'vintageimprovements:sulfur_chunk',
    'tfc:powder/sulfur'
  )
  event.remove({output: 'vintageimprovements:sulfur'})
  event.remove({output: 'vintageimprovements:sulfur_chunk'})
  // Replace TFMG copper sulfate for vintageimprovements' (has more uses)
  // (original galvanic cell recipe no longer exists in TFMG 1.21, replaced below)
  // Replace all wires with C&A or vintage ones
  event.replaceInput(
    { input: 'tfmg:copper_wire' }, // Arg 1: the filter
    'tfmg:copper_wire',            // Arg 2: the item to replace
    'createaddition:copper_wire'         // Arg 3: the item to replace it with
  )
  // TODO: tfmg:copper_cable no longer exists in TFMG 1.21
  //event.replaceInput(
  //  { output: 'tfmg:copper_cable' },
  //  'minecraft:stick',
  //  'createaddition:spool'
  //)
  event.replaceInput(
    { id: 'tfmg:crafting/copper_wire' }, // Arg 1: the filter
    'minecraft:leather',            // Arg 2: the item to replace
    'afc:rubber_bar'         // Arg 3: the item to replace it with
  )
  // Replace TFMG constantan with TFC Metallurgy constantan
  event.remove({id: 'tfmg:mixing/constantan'})
  event.remove({output: 'tfmg:constantan_ingot'})
  event.remove({output: 'tfmg:constantan_nugget'})
  event.remove({output: 'tfmg:constantan_block'})
  event.replaceInput(
    { input: 'tfmg:constantan_ingot' },
    'tfmg:constantan_ingot',
    'tfc_metallurgy:metal/ingot/constantan'
  )
  // Replace vanilla copper ingot in remaining TFMG recipes
  event.replaceInput(
    { id: 'tfmg:crafting/materials/cable_connector' },
    'minecraft:copper_ingot',
    'tfc:metal/ingot/copper'
  )
  // Replace steel nuggets with tfc_items steel rivets
  event.replaceInput(
    { id: 'tfmg:crafting/materials/cable_connector' },
    '#c:nuggets/steel',
    'tfc_items:steel_rivet'
  )
  event.replaceInput(
    { id: 'tfmg:crafting/materials/cable_tube' },
    '#c:nuggets/steel',
    'tfc_items:steel_rivet'
  )
  event.replaceInput(
    { id: 'tfmg:crafting/materials/fire_extinguisher' },
    '#c:nuggets/steel',
    'tfc_items:steel_rivet'
  )
  event.replaceInput(
    { id: 'tfmg:crafting/materials/glass_insulator_segment' },
    '#c:nuggets/steel',
    'tfc_items:steel_rivet'
  )
  event.replaceInput(
    { id: 'tfmg:crafting/materials/oil_can' },
    '#c:nuggets/steel',
    'tfc_items:steel_rivet'
  )
  event.replaceInput(
    { id: 'tfmg:crafting/materials/unfinished_electromagnetic_coil' },
    '#c:nuggets/steel',
    'tfc_items:steel_ring'
  )
  event.replaceInput(
    { id: /tfmg.*/ },
    '#c:nuggets/steel',
    'tfc_items:steel_rivet'
  )
  // Replace kelp in concrete hose with rubber
  event.replaceInput(
    { id: 'tfmg:crafting/materials/concrete_hose' },
    'minecraft:dried_kelp_block',
    'afc:rubber_bar'
  )
  // Remove TFMG gunpowder recipe (replaced elsewhere)
  event.remove({id: 'tfmg:mixing/gunpowder'})

  // Remove bauxite powder recipe and replace usage with bauxite block
  event.remove({id: 'create:crushing/bauxite'})
  event.replaceInput(
    { input: 'tfmg:bauxite_powder' },
    'tfmg:bauxite_powder',
    'tfmg:bauxite'
  )

  // Replace gravel and sand in asphalt mixture recipes with TFC tags
  event.replaceInput(
    { id: 'tfmg:mixing/asphalt_mixture' },
    'minecraft:gravel',
    '#c:gravels'
  )
  event.replaceInput(
    { id: 'tfmg:mixing/asphalt_mixture' },
    'minecraft:sand',
    '#c:sands/silica'
  )
  event.replaceInput(
    { id: 'tfmg:mixing/asphalt_mixture_from_slag' },
    'minecraft:gravel',
    '#c:gravels'
  )

  // Replace tfmg:screw with tfc_items:steel_screw globally
  event.replaceInput(
    { input: 'tfmg:screw' },
    'tfmg:screw',
    'tfc_items:steel_screw'
  )

  // Replace tfmg:aluminum_bars with create:andesite_bars (renamed to "Aluminum Bars")
  event.remove({id: 'tfmg:aluminum_bars_from_ingots_aluminum_stonecutting'})
  event.replaceInput(
    { input: 'tfmg:aluminum_bars' },
    'tfmg:aluminum_bars',
    'create:andesite_bars'
  )

  // Replace tfmg:steel_bars with tfc:metal/bars/steel
  event.remove({id: 'tfmg:steel_bars_from_ingots_steel_stonecutting'})
  event.replaceInput(
    { input: 'tfmg:steel_bars' },
    'tfmg:steel_bars',
    'tfc:metal/bars/steel'
  )

  // Replace tfmg:nickel_sheet with tfc:metal/sheet/nickel
  event.remove({id: 'tfmg:pressing/nickel_ingot'})
  event.replaceInput(
    { input: 'tfmg:nickel_sheet' },
    'tfmg:nickel_sheet',
    'tfc:metal/sheet/nickel'
  )
  event.replaceOutput(
    { output: 'tfmg:nickel_sheet' },
    'tfmg:nickel_sheet',
    'tfc:metal/sheet/nickel'
  )

  // Replace tfmg:lead_ingot with tfc_metallurgy lead
  event.replaceInput(
    { input: 'tfmg:lead_ingot' },
    'tfmg:lead_ingot',
    'tfc_metallurgy:metal/ingot/lead'
  )

  // Remove create_new_age blank and copper circuit items/recipes
  event.remove({output: 'create_new_age:blank_circuit'})
  event.remove({output: 'create_new_age:copper_circuit'})

  // Make heavy plates out of tungsten steel (heavily used on TFMG recipes)
  // TODO: Consider adding heating requisite to make it harder :P
  // Update: decided to remove them
  // event.replaceInput(
  //   { id: 'tfmg:sequenced_assembly/heavy_plate' }, // Arg 1: the filter
  //   '#createbigcannons:ingot_steel',            // Arg 2: the item to replace
  //   'tfc_metallurgy:metal/ingot/tungsten_steel'         // Arg 3: the item to replace it with
  // )
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
    { id: 'tfmg:crafting/materials/pumpjack_crank' }, // Arg 1: the filter
    'minecraft:string',            // Arg 2: the item to replace
    'tfc:rope'         // Arg 3: the item to replace it with
  )
  event.replaceInput(
    { id: 'tfmg:crafting/materials/pumpjack_base' }, // Arg 1: the filter
    'minecraft:string',            // Arg 2: the item to replace
    'tfc:rope'         // Arg 3: the item to replace it with
  )
  event.replaceInput(
    { id: 'tfmg:crafting/polarizer' }, // Arg 1: the filter
    'minecraft:copper_ingot',            // Arg 2: the item to replace
    'tfc:metal/ingot/copper' // Arg 3: the item to replace it with
  )
  // Use TFC steel as product of TFMG blast furnace and casting
  event.replaceOutput(
    { id: 'tfmg:casting/steel'},
    'tfmg:steel_ingot',
    'tfc:metal/ingot/steel'
  )
  event.remove({id: 'tfmg:casting/amogus'})
  // Galvanic cell recipe (reimplemented in materialismcore, original removed from TFMG 1.21)
  event.shaped(
    Item.of('materialismcore:galvanic_cell', 1),
    [
      'ABA',
      'CDE',
      'AFA'
    ],
    {
      A: 'tfc:metal/ingot/copper',
      B: 'vintageimprovements:copper_sulfate',
      C: 'tfmg:steel_pipe',
      D: 'tfmg:steel_casing',
      E: 'tfmg:cast_iron_pipe',
      F: 'kubejs:zinc_sulfate'
    }
  )
  // Use TFC gravel for concrete
  event.replaceInput(
    { id: 'tfmg:mixing/liquid_concrete_from_slag' }, // Arg 1: the filter
    'minecraft:gravel',            // Arg 2: the item to replace
    '#c:gravels'    // Arg 3: the item to replace it with
  )
  event.replaceInput(
    { id: 'tfmg:mixing/concrete_mixture' }, // Arg 1: the filter
    'minecraft:gravel',            // Arg 2: the item to replace
    '#c:gravels'    // Arg 3: the item to replace it with
  )
  event.replaceInput(
    { id: 'tfmg:mixing/concrete_mixture' }, // Arg 1: the filter
    'minecraft:sand',            // Arg 2: the item to replace
    '#c:sands/silica' // Arg 3: the item to replace it with
  )
  event.replaceInput(
    { id: 'tfmg:mixing/liquid_concrete' }, // Arg 1: the filter
    'minecraft:gravel',            // Arg 2: the item to replace
    '#c:gravels'    // Arg 3: the item to replace it with
  )
  event.replaceInput(
    { id: 'tfmg:mixing/liquid_concrete' }, // Arg 1: the filter
    'minecraft:sand',            // Arg 2: the item to replace
    '#c:sands/silica' // Arg 3: the item to replace it with
  )
  // Use TFC gravel and sand for asphalt
  event.replaceInput(
    { id: 'tfmg:mixing/liquid_asphalt' }, // Arg 1: the filter
    'minecraft:sand',            // Arg 2: the item to replace
    '#c:sands/silica' // Arg 3: the item to replace it with
  )
  event.replaceInput(
    { id: 'tfmg:mixing/liquid_asphalt' }, // Arg 1: the filter
    'minecraft:gravel',            // Arg 2: the item to replace
    '#c:gravels'    // Arg 3: the item to replace it with
  )
  event.replaceInput(
    { id: 'tfmg:crafting/nickel_block' }, // Arg 1: the filter
    'tfmg:nickel_ingot',            // Arg 2: the item to replace
    'tfc:metal/ingot/nickel' // Arg 3: the item to replace it with
  )
  // Use TFC cast iron
  event.remove({id: 'tfmg:mixing/cast_iron_ingot'})
  event.replaceInput(
    { input: 'tfmg:cast_iron_ingot' }, // Arg 1: the filter
    'tfmg:cast_iron_ingot',            // Arg 2: the item to replace
    'tfc:metal/ingot/cast_iron' // Arg 3: the item to replace it with
  )
  event.replaceOutput(
    { id: 'tfmg:crafting/cast_iron_from_block' }, // Arg 1: the filter
    'tfmg:cast_iron_ingot',            // Arg 2: the item to replace
    'tfc:metal/ingot/cast_iron' // Arg 3: the item to replace it with
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
  event.remove({output: 'tfmg:unfinished_resistor'})
  event.recipes.create.sequenced_assembly([
    CreateItem.of('tfmg:unfinished_resistor', 0.9),
    CreateItem.of('createaddition:copper_wire', 0.05),
    CreateItem.of('createaddition:gold_wire', 0.05)
  ], 'createaddition:copper_wire', [ // input
    // the transitional item set by `transitionalItem('create:incomplete_large_cogwheel')` is the item used during the intermediate stages of the assembly
    event.recipes.createDeploying('createaddition:copper_wire', ['createaddition:copper_wire', 'tfc:glue']),
    event.recipes.createDeploying('createaddition:copper_wire', ['createaddition:copper_wire', 'createaddition:gold_wire']),
    event.recipes.createDeploying('createaddition:copper_wire', ['createaddition:copper_wire', 'createaddition:gold_wire']),
    event.recipes.createFilling(
      'createaddition:copper_wire',
      ['createaddition:copper_wire', Fluid.of('tfmg:molten_plastic', 100)]
    ),
    event.recipes.createPressing('createaddition:copper_wire', 'createaddition:copper_wire'),
    event.custom({
      type: 'create_new_age:energising',
      energy_needed: 500,
      ingredients: [
        { item: 'createaddition:copper_wire'},
      ],
      results: [
        { id: 'createaddition:copper_wire'},
      ]
    })
  ]).transitionalItem('createaddition:copper_wire').loops(1)
  // Capacitor item
  event.remove({id: 'tfmg:sequenced_assembly/capacitor'})
  event.recipes.create.sequenced_assembly([
    CreateItem.of(Item.of('tfmg:capacitor_item', 2), 0.9),
    CreateItem.of('tfc_metallurgy:metal/sheet/aluminum', 0.05),
    CreateItem.of('minecraft:paper', 0.05)
  ], 'tfc_metallurgy:metal/sheet/aluminum', [ // input
    // the transitional item set by `transitionalItem('create:incomplete_large_cogwheel')` is the item used during the intermediate stages of the assembly
    event.recipes.createDeploying('tfc_metallurgy:metal/sheet/aluminum', ['tfc_metallurgy:metal/sheet/aluminum', 'minecraft:paper']),
    event.recipes.createDeploying('tfc_metallurgy:metal/sheet/aluminum', ['tfc_metallurgy:metal/sheet/aluminum', 'tfc_metallurgy:metal/sheet/aluminum']),
    event.recipes.createDeploying('tfc_metallurgy:metal/sheet/aluminum', ['tfc_metallurgy:metal/sheet/aluminum', 'createaddition:copper_wire']),
    event.recipes.createFilling(
      'tfc_metallurgy:metal/sheet/aluminum',
      ['tfc_metallurgy:metal/sheet/aluminum', Fluid.of('tfmg:molten_plastic', 100)]
    ),
    event.recipes.createPressing('tfc_metallurgy:metal/sheet/aluminum', 'tfc_metallurgy:metal/sheet/aluminum'),
    event.custom({
      type: 'create_new_age:energising',
      energy_needed: 500,
      ingredients: [
        { item: 'tfc_metallurgy:metal/sheet/aluminum'},
      ],
      results: [
        { id: 'tfc_metallurgy:metal/sheet/aluminum'},
      ]
    })
  ]).transitionalItem('tfc_metallurgy:metal/sheet/aluminum').loops(1)
  // TODO: tfmg:electric_casing, tfmg:copper_cable no longer exist in TFMG 1.21
  /*event.remove({id: 'tfmg:crafting/electric_casing'})
  event.recipes.create.sequenced_assembly([
    CreateItem.of('tfmg:electric_casing', 90.0),
    CreateItem.of('tfmg:heavy_machinery_casing', 5.0),
    CreateItem.of('tfmg:capacitor_item', 3.0),
    CreateItem.of('tfmg:resistor', 2.0)
  ], 'tfmg:heavy_machinery_casing', [
    event.recipes.createDeploying('tfmg:heavy_machinery_casing', ['tfmg:heavy_machinery_casing', 'tfmg:copper_cable']),
    event.recipes.createDeploying('tfmg:heavy_machinery_casing', ['tfmg:heavy_machinery_casing', 'tfmg:resistor']),
    event.recipes.createDeploying('tfmg:heavy_machinery_casing', ['tfmg:heavy_machinery_casing', 'tfmg:capacitor_item']),
    event.recipes.createDeploying('tfmg:heavy_machinery_casing', ['tfmg:heavy_machinery_casing', 'create:electron_tube']),
    event.recipes.createPressing('tfmg:heavy_machinery_casing', 'tfmg:heavy_machinery_casing'),
    event.custom({
      type: 'create_new_age:energising',
      energy_needed: 1500,
      ingredients: [
        { item: 'tfmg:heavy_machinery_casing'},
      ],
      results: [
        { id: 'tfmg:heavy_machinery_casing'},
      ]
    })
  ]).transitionalItem('tfmg:heavy_machinery_casing').loops(2)*/
  // Lightbulb
  event.remove({id: 'tfmg:crafting/materials/light_bulb'})
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
        { id: 'tfc_metallurgy:metal/sheet/nickel_silver'},
      ]
    })
  ]).transitionalItem('tfc_metallurgy:metal/sheet/nickel_silver').loops(1)
  // tfmg:capacitor removed in 1.21 - lead acid batteries will also produce accumulator
  event.recipes.create.sequenced_assembly([
   Item.of('tfmg:accumulator', 1)
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
       { id: 'create:basin'},
     ]
   })
  ]).transitionalItem('create:basin').loops(1)
  event.recipes.create.sequenced_assembly([
   Item.of('kubejs:lithium_battery_core', 1)
  ], 'tfmg:heavy_machinery_casing', [ // input
   event.recipes.createDeploying('tfmg:heavy_machinery_casing', ['tfmg:heavy_machinery_casing', 'tfc_metallurgy:metal/sheet/manganese']),
   event.recipes.createDeploying('tfmg:heavy_machinery_casing', ['tfmg:heavy_machinery_casing', 'tfmg:plastic_sheet']),
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
    Item.of('tfmg:accumulator', 5)
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


  event.remove({id: 'tfmg:turbine_blade'})
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

  event.remove({id: 'tfmg:sequenced_assembly/steel_mechanism'})
  event.recipes.create.sequenced_assembly(
   [
     CreateItem.of('tfmg:steel_mechanism', 0.85),
     CreateItem.of('tfc:metal/sheet/steel', 0.05),
     CreateItem.of('vintageimprovements:invar_wire', 0.05),
     CreateItem.of('tfmg:steel_cogwheel', 0.03),
     CreateItem.of('create:shaft', 0.02)
   ],
   'tfc:metal/sheet/steel',
   [
     event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'tfmg:steel_cogwheel']),
     event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'tfmg:large_steel_cogwheel']),
     event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'vintageimprovements:small_invar_spring']),
     event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'tfc_metallurgy:metal/rod/constantan'])
   ]
  ).transitionalItem('create:incomplete_precision_mechanism').loops(5)

  // Generator modified recipe
  event.remove({id: 'tfmg:sequenced_assembly/generator'})
  event.recipes.create.sequenced_assembly(
   [
     CreateItem.of('tfmg:generator', 0.85),
     CreateItem.of('tfmg:steel_casing', 0.05),
     CreateItem.of('tfmg:steel_cogwheel', 0.05),
     CreateItem.of('tfmg:capacitor_item', 0.05)
   ],
   'create:shaft',
   [
     event.recipes.createDeploying('tfmg:unfinished_generator', ['tfmg:unfinished_generator', 'tfmg:capacitor_item']),
     event.recipes.createDeploying('tfmg:unfinished_generator', ['tfmg:unfinished_generator', 'tfc_items:steel_heavy_sheet']),
     event.custom({ type: 'tfmg:winding',     ingredients: [{ item: 'tfmg:unfinished_generator' }, { item: 'tfmg:copper_spool' }],   processing_time: 75, results: [{ id: 'tfmg:unfinished_generator' }] }),
     event.recipes.createDeploying('tfmg:unfinished_generator', ['tfmg:unfinished_generator', 'tfmg:magnet']),
     event.recipes.createDeploying('tfmg:unfinished_generator', ['tfmg:unfinished_generator', 'tfmg:steel_mechanism']),
     event.recipes.createDeploying('tfmg:unfinished_generator', ['tfmg:unfinished_generator', 'tfmg:screwdriver'])
   ]
  ).transitionalItem('tfmg:unfinished_generator').loops(3)
  
  // Make cinder blocks from red concrete
  event.remove({id: 'tfmg:compacting/cinderflourblock'})
  event.recipes.create.cutting(
    'tfmg:cinderflourblock',
    'tfmg:red_concrete'
  )
  event.replaceInput({id: 'tfmg:crafting/materials/cinderflour_block'},
    'minecraft:nether_wart_block',
    'tfmg:liquid_concrete_bucket'
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

  // Semiconductor recipes using TFC materials
  event.remove({id: 'tfmg:mixing/n_semiconductor'})
  event.remove({id: 'tfmg:mixing/p_semiconductor'})
  event.recipes.create.mixing(
    'tfmg:n_semiconductor',
    ['tfmg:silicon_ingot', 'tfc:pure_phosphorus']
  )
  event.custom({
    type: 'create:mixing',
    ingredients: [
      {item: 'tfmg:silicon_ingot'},
      {type: 'neoforge:single', fluid: 'tfc_metallurgy:metal/boron', amount: 50}
    ],
    results: [{id: 'tfmg:p_semiconductor'}],
    heat_requirement: 'heated'
  })

  // Thermite using TFC iron oxide and aluminum
  event.remove({id: 'tfmg:mixing/thermite'})
  event.custom({
    type: 'create:mixing',
    ingredients: [
      {item: 'tfc:powder/hematite'},
      {item: 'tfc:powder/hematite'},
      {item: 'tfc_metallurgy:metal/ingot/aluminum'},
      {item: 'tfc_metallurgy:metal/ingot/aluminum'}
    ],
    results: [{id: 'tfmg:thermite_powder'}],
    heat_requirement: 'heated'
  })

  // Weapon recipes — replace simple crafting with sequenced assembly
  event.remove({id: 'tfmg:crafting/materials/pipe_bomb'})
  event.remove({id: 'tfmg:crafting/materials/thermite_grenade'})
  event.remove({id: 'tfmg:crafting/materials/zinc_grenade'})
  event.remove({id: 'tfmg:crafting/materials/copper_grenade'})
  event.remove({id: 'tfmg:crafting/materials/napalm_bomb'})

  // Pipe bomb: steel pipe → deploy saltpeter + charcoal + screw → press
  event.recipes.create.sequenced_assembly([
    Item.of('tfmg:pipe_bomb', 2)
  ], 'tfmg:steel_pipe', [
    event.recipes.createDeploying('tfmg:steel_pipe', ['tfmg:steel_pipe', 'tfc:powder/saltpeter']),
    event.recipes.createDeploying('tfmg:steel_pipe', ['tfmg:steel_pipe', 'tfc:powder/charcoal']),
    event.recipes.createDeploying('tfmg:steel_pipe', ['tfmg:steel_pipe', 'tfc_items:steel_screw']),
    event.recipes.createPressing('tfmg:steel_pipe', 'tfmg:steel_pipe')
  ]).transitionalItem('tfmg:steel_pipe').loops(1)

  // Thermite grenade: aluminum sheet → deploy thermite + rivets → press + curving
  event.recipes.create.sequenced_assembly([
    Item.of('tfmg:thermite_grenade', 1)
  ], 'tfc_metallurgy:metal/sheet/aluminum', [
    event.recipes.createDeploying('tfc_metallurgy:metal/sheet/aluminum', ['tfc_metallurgy:metal/sheet/aluminum', 'tfmg:thermite_powder']),
    event.recipes.createDeploying('tfc_metallurgy:metal/sheet/aluminum', ['tfc_metallurgy:metal/sheet/aluminum', 'tfmg:thermite_powder']),
    event.recipes.createDeploying('tfc_metallurgy:metal/sheet/aluminum', ['tfc_metallurgy:metal/sheet/aluminum', 'tfc_items:aluminum_rivet']),
    event.recipes.createPressing('tfc_metallurgy:metal/sheet/aluminum', 'tfc_metallurgy:metal/sheet/aluminum'),
    event.custom({
      type: 'vintageimprovements:curving',
      ingredients: [{item: 'tfc_metallurgy:metal/sheet/aluminum'}],
      results: [{id: 'tfc_metallurgy:metal/sheet/aluminum'}],
      mode: 2
    })
  ]).transitionalItem('tfc_metallurgy:metal/sheet/aluminum').loops(1)

  // Zinc grenade: thermite grenade + zinc + sulfur → press
  event.recipes.create.sequenced_assembly([
    Item.of('tfmg:zinc_grenade', 1)
  ], 'tfmg:thermite_grenade', [
    event.recipes.createDeploying('tfmg:thermite_grenade', ['tfmg:thermite_grenade', 'tfc:metal/ingot/zinc']),
    event.recipes.createDeploying('tfmg:thermite_grenade', ['tfmg:thermite_grenade', 'tfc:powder/sulfur']),
    event.recipes.createPressing('tfmg:thermite_grenade', 'tfmg:thermite_grenade')
  ]).transitionalItem('tfmg:thermite_grenade').loops(1)

  // Copper grenade: thermite grenade + copper + sulfur → press
  event.recipes.create.sequenced_assembly([
    Item.of('tfmg:copper_grenade', 1)
  ], 'tfmg:thermite_grenade', [
    event.recipes.createDeploying('tfmg:thermite_grenade', ['tfmg:thermite_grenade', 'tfc:metal/ingot/copper']),
    event.recipes.createDeploying('tfmg:thermite_grenade', ['tfmg:thermite_grenade', 'tfc:powder/sulfur']),
    event.recipes.createPressing('tfmg:thermite_grenade', 'tfmg:thermite_grenade')
  ]).transitionalItem('tfmg:thermite_grenade').loops(1)

  // Napalm bomb: plastic sheet → fill napalm → seal with plastic + rivets → press
  event.recipes.create.sequenced_assembly([
    Item.of('tfmg:napalm_bomb', 1)
  ], 'tfmg:plastic_sheet', [
    event.recipes.createFilling(
      'tfmg:plastic_sheet',
      ['tfmg:plastic_sheet', Fluid.of('tfmg:napalm', 1000)]
    ),
    event.recipes.createDeploying('tfmg:plastic_sheet', ['tfmg:plastic_sheet', 'tfmg:plastic_sheet']),
    event.recipes.createDeploying('tfmg:plastic_sheet', ['tfmg:plastic_sheet', 'tfc_items:steel_rivet']),
    event.recipes.createPressing('tfmg:plastic_sheet', 'tfmg:plastic_sheet'),
    event.recipes.createPressing('tfmg:plastic_sheet', 'tfmg:plastic_sheet')
  ]).transitionalItem('tfmg:plastic_sheet').loops(1)

  event.remove({id: 'tfmg:crafting/materials/coke_oven'})
  event.recipes.shaped('9x tfmg:coke_oven', [
    'RRR',
    'RIR',
    'RRR'
  ], {
    R: 'tfc_items:stainless_steel_rivet',
    I: 'create:industrial_iron_block'
  })
  event.replaceInput('tfmg:crafting/materials/air_intake', 'create:industrial_iron_block', 'createdeco:industrial_iron_sheet')

  // Coking recipes

  // Allow for coking of TFC coal
  event.remove({id: 'tfmg:coking/coal'})
  event.custom({
    type: 'tfmg:coking',
    ingredients: [{item: 'tfc:ore/bituminous_coal'}],
    processing_time: 1200,
    results: [
      {id: 'tfmg:coal_coke'},
      {amount: 2, id: 'tfmg:creosote'},
      {amount: 30, id: 'tfmg:carbon_dioxide'}
    ]
  })
  // Charcoal → coal coke (slower, less creosote than coal path)
  event.remove({id: 'tfmg:coking/charcoal'})
  event.custom({
    type: 'tfmg:coking',
    ingredients: [{item: 'minecraft:charcoal'}],
    processing_time: 3000,
    results: [
      {id: 'tfmg:coal_coke'},
      {amount: 1, id: 'tfmg:creosote'},
      {amount: 50, id: 'tfmg:carbon_dioxide'}
    ]
  })

  // Blast stove burns creosote twice as fast, so creosote
  // consumption keeps pace with the coking process producing it
  event.remove({id: 'tfmg:hot_blast/hot_air'})
  event.custom({
    type: 'tfmg:hot_blast',
    ingredients: [
      {type: 'neoforge:single', amount: 25, fluid: 'tfmg:air'},
      {type: 'neoforge:tag', amount: 10, tag: 'tfmg:blast_stove_fuel'}
    ],
    processing_time: 200,
    results: [
      {amount: 25, id: 'tfmg:hot_air'},
      {amount: 25, id: 'tfmg:carbon_dioxide'}
    ]
  })

  // Blast furnace reinforcement
  event.remove({id: 'tfmg:crafting/materials/blast_furnace_reinforcement'})
  {
    const transitional = 'kubejs:incomplete_blast_furnace_reinforcement'
    event.recipes.create.sequenced_assembly(
      ['2x tfmg:blast_furnace_reinforcement'],
      'tfmg:fireproof_bricks',
      [
        event.recipes.createDeploying(transitional, [transitional, 'tfc_items:steel_heavy_sheet']),
        event.recipes.createDeploying(transitional, [transitional, 'tfc_items:steel_rivet']),
        event.recipes.createDeploying(transitional, [transitional, 'tfc_items:steel_rivet']),
        event.recipes.createDeploying(transitional, [transitional, 'tfc_items:steel_rivet']),
        event.recipes.createDeploying(transitional, [transitional, 'tfc_items:steel_rivet']),
        event.recipes.createPressing(transitional, transitional),
        event.recipes.createFilling(transitional, [transitional, Fluid.of('tfmg:creosote', 1000)])
      ]
    ).transitionalItem(transitional)
  }

  //Blasting recipes

  // Replace silicon industrial blasting input with silica sand
  event.remove({id: 'tfmg:industrial_blasting/silicon'})
  event.custom({
    type: 'tfmg:industrial_blasting',
    ingredients: [{tag: 'c:sands/silica'}],
    processing_time: 5,
    results: [{amount: 40, id: 'tfmg:liquid_silicon'}]
  })

  // Industrial blasting for boron (kernite ore pieces → molten boron)
  event.custom({
    type: 'tfmg:industrial_blasting',
    hot_air_usage: 30,
    ingredients: [{item: 'tfc_metallurgy:ore/small_kernite'}],
    processing_time: 15,
    results: [
      {amount: 10, id: 'tfc_metallurgy:metal/boron'},
      {amount: 50, id: 'tfmg:molten_slag'}
    ]
  })
  event.custom({
    type: 'tfmg:industrial_blasting',
    hot_air_usage: 30,
    ingredients: [{item: 'tfc_metallurgy:ore/poor_kernite'}],
    processing_time: 15,
    results: [
      {amount: 15, id: 'tfc_metallurgy:metal/boron'},
      {amount: 50, id: 'tfmg:molten_slag'}
    ]
  })
  event.custom({
    type: 'tfmg:industrial_blasting',
    hot_air_usage: 30,
    ingredients: [{item: 'tfc_metallurgy:ore/normal_kernite'}],
    processing_time: 15,
    results: [
      {amount: 25, id: 'tfc_metallurgy:metal/boron'},
      {amount: 50, id: 'tfmg:molten_slag'}
    ]
  })
  event.custom({
    type: 'tfmg:industrial_blasting',
    hot_air_usage: 30,
    ingredients: [{item: 'tfc_metallurgy:ore/rich_kernite'}],
    processing_time: 15,
    results: [
      {amount: 35, id: 'tfc_metallurgy:metal/boron'},
      {amount: 50, id: 'tfmg:molten_slag'}
    ]
  })

  // Industrial blasting for steel (iron powder + flux → molten steel)
  event.remove({id: 'tfmg:industrial_blasting/steel'})
  event.remove({id: 'tfmg:industrial_blasting/steel_from_dust'})
  event.remove({id: 'tfmg:industrial_blasting/steel_from_raw_iron'})
  event.custom({
    type: 'tfmg:industrial_blasting',
    hot_air_usage: 5,
    ingredients: [
      {tag: 'materialism:powders/iron'},
      {item: 'tfc:powder/flux'}
    ],
    processing_time: 4,
    results: [
      {amount: 5, id: 'tfc:metal/pig_iron'},
      {amount: 5, id: 'tfmg:molten_slag'},
      {amount: 10, id: 'tfmg:furnace_gas'}
    ]
  })
}
)