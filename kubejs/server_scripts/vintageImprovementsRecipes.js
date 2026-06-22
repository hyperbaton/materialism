ServerEvents.recipes(event => {

    // Remove unwanted recipes
    event.remove({id: 'vintageimprovements:coiling/andesite_rod'})
    event.remove({id: 'vintageimprovements:coiling/blaze_rod'})
    event.remove({id: 'vintageimprovements:coiling/netherite_rod'})
    event.remove({id: 'vintageimprovements:coiling/nethersteel_rod'})
    event.remove({id: 'vintageimprovements:coiling/andesite_wire'})
    event.remove({id: 'vintageimprovements:coiling/netherite_wire'})
    event.remove({id: 'vintageimprovements:coiling/nethersteel_wire'})

    
    event.remove({id: 'vintageimprovements:pressing/andesite_alloy'})
    event.remove({id: 'vintageimprovements:hammering/netherite_ingot'})
    event.remove({id: 'vintageimprovements:hammering/nethersteel_ingot'})
    event.remove({id: 'vintageimprovements:rolling/andesite_alloy'})
    event.remove({id: 'vintageimprovements:rolling/netherite_plate'})
    event.remove({id: 'vintageimprovements:rolling/nethersteel_plate'})
    event.remove({id: 'vintageimprovements:rolling/andesite_plate'})
    event.remove({id: 'vintageimprovements:rolling/netherite_rod'})
    event.remove({id: 'vintageimprovements:rolling/nethersteel_rod'})
    event.remove({id: 'vintageimprovements:coiling/nethersteel_wire'})
    event.remove({id: 'vintageimprovements:coiling/nethersteel_wire'})
    event.remove({id: 'vintageimprovements:coiling/nethersteel_wire'})
    event.remove({id: 'tfc_metal_items:seq_pressing/sheets/pig_iron'})

    event.remove({id: /vintageimprovements:pressing\/\w+_ingot/})

    // Lathe recipes
    // tfc_metal_items mod not present in 1.21 — pressing head recipes disabled
    //event.remove({id: 'tfc_metal_items:crafting/steel_pressing_head'})
    //event.recipes.vintageimprovements.turning('tfc_metal_items:steel_pressing_head', 'tfc:metal/block/steel').processingTime(300)
    event.recipes.vintageimprovements.turning('vintageimprovements:w_shaped_curving_head', 'tfc:metal/block/steel').processingTime(300)
    event.recipes.vintageimprovements.turning('vintageimprovements:v_shaped_curving_head', 'tfc:metal/block/steel').processingTime(300)
    event.recipes.vintageimprovements.turning('4x tfmg:screw', 'tfc:metal/rod/steel').processingTime(300)
    event.recipes.vintageimprovements.turning('2x tfmg:rebar', 'tfc:metal/rod/steel').processingTime(300)
    event.recipes.vintageimprovements.turning('2x tfc_items:copper_rivet', 'tfc:metal/rod/copper').processingTime(300)
    // Pipes to be made with the lathe
    event.remove({output: 'create:fluid_pipe'})
    event.remove({output: 'tfmg:steel_pipe'})
    event.remove({output: 'tfmg:brass_pipe'})
    event.remove({output: 'tfmg:cast_iron_pipe'})
    event.remove({output: 'tfmg:aluminum_pipe'})
    event.remove({output: 'tfmg:plastic_pipe'})
    event.recipes.vintageimprovements.turning('2x create:fluid_pipe', 'tfc:metal/rod/copper').processingTime(300)
    event.recipes.vintageimprovements.turning('2x tfmg:steel_pipe', 'tfc:metal/rod/steel').processingTime(300)
    event.recipes.vintageimprovements.turning('2x tfmg:brass_pipe', 'tfc:metal/rod/brass').processingTime(300)
    event.recipes.vintageimprovements.turning('2x tfmg:cast_iron_pipe', 'tfc:metal/rod/cast_iron').processingTime(300)
    event.recipes.vintageimprovements.turning('2x tfmg:aluminum_pipe', 'tfc_metallurgy:metal/rod/aluminum').processingTime(300)
    event.recipes.vintageimprovements.turning('2x tfmg:plastic_pipe', 'tfmg:plastic_sheet').processingTime(300)
    event.remove({output: 'createaddition:spool'})
    event.custom({type: 'vintageimprovements:turning',
      ingredients: [{tag: 'tfc:lumber'}],
      results: [{id: 'createaddition:spool', count: 4}],
      processing_time: 150
    })
    event.remove({id: 'tfmg:stonecutting/industrial_pipe'})
    event.recipes.vintageimprovements.turning('4x tfmg:industrial_pipe', 'tfc:metal/rod/steel').processingTime(300)

    // Curving recipes
    event.remove({id: 'vintageimprovements:curving/iron_sheet'})
    event.remove({id: 'vintageimprovements:curving/diamond'})
    event.custom({type: 'vintageimprovements:curving', ingredients: [{item: 'tfc:metal/sheet/zinc'}], results: [{id: 'createdeco:zinc_support_wedge'}], mode: 4})
    event.custom({type: 'vintageimprovements:curving', ingredients: [{item: 'tfc:metal/sheet/brass'}], results: [{id: 'createdeco:brass_support_wedge'}], mode: 4})
    event.custom({type: 'vintageimprovements:curving', ingredients: [{item: 'tfc:metal/sheet/copper'}], results: [{id: 'createdeco:copper_support_wedge'}], mode: 4})
    event.custom({type: 'vintageimprovements:curving', ingredients: [{item: 'tfc:metal/sheet/wrought_iron'}], results: [{id: 'createdeco:iron_support_wedge'}], mode: 4})
    event.custom({type: 'vintageimprovements:curving', ingredients: [{item: 'tfc_metallurgy:metal/sheet/aluminum'}], results: [{id: 'createdeco:andesite_support_wedge'}], mode: 4})

    // Vacuum recipes

    // Presurizing recipes
    // Use TFMG sulfuric acid with vintage recipe
    event.custom({type: 'vintageimprovements:pressurizing',
      ingredients: [
        {item: 'tfc:powder/sphalerite'},
        {fluid: 'tfmg:sulfuric_acid', amount: 200, type: 'neoforge:single'},
        {fluid: 'minecraft:water', amount: 200, type: 'neoforge:single'}
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
        {fluid: 'vintageimprovements:sulfur_trioxide', amount: 1000, type: 'neoforge:single'},
        {fluid: 'minecraft:water', amount: 1000, type: 'neoforge:single'}
      ],
      results: [{id: 'tfmg:sulfuric_acid', amount: 1000}],
      secondary_fluid_input: 1
    })
    event.custom({type: 'vintageimprovements:pressurizing',
      ingredients: [
        {item: 'tfc:powder/native_copper'},
        {fluid: 'tfmg:sulfuric_acid', amount: 200, type: 'neoforge:single'},
        {fluid: 'minecraft:water', amount: 200, type: 'neoforge:single'}
      ],
      results: [{id: 'vintageimprovements:copper_sulfate'}],
      secondary_fluid_input: 1
    })

    // Centrifugation recipes
    event.custom({type: 'vintageimprovements:centrifugation',
      ingredients: [
        {item: 'tfcvolcanoes:mineral/powder/bastnasite'},
        {fluid: 'tfmg:sulfuric_acid', amount: 100, type: 'neoforge:single'}
      ],
      results: [{id: 'kubejs:powder/neodymium', chance: 0.2}],
      processing_time: 300,
      minimal_rpm: 216
    })

    // Polishing recipes
    event.recipes.vintageimprovements.polishing('tfc:large_scraped_hide', 'tfc:large_soaked_hide')
    event.recipes.vintageimprovements.polishing('tfc:medium_scraped_hide', 'tfc:medium_soaked_hide')
    event.recipes.vintageimprovements.polishing('tfc:small_scraped_hide', 'tfc:small_soaked_hide')
    event.recipes.vintageimprovements.polishing('minecraft:paper', 'tfc:unrefined_paper')

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
        {fluid: 'minecraft:water', amount: 200, type: 'neoforge:single'}
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
        {fluid: 'tfmg:sulfuric_acid', amount: 200, type: 'neoforge:single'}
      ],
      results: [{id: 'vintageimprovements:vanadium_nugget', chance: 0.3}],
      secondary_fluid_input: 0,
      heat_requirement: 'heated'
    })

    event.replaceInput(
      { id: 'vintageimprovements:turning/convex_curving_head' }, // Arg 1: the filter
      'minecraft:iron_block',            // Arg 2: the item to replace
      'tfc:metal/block/steel'         // Arg 3: the item to replace it with
    )
    event.replaceInput(
      { id: 'vintageimprovements:turning/concave_curving_head' }, // Arg 1: the filter
      'minecraft:iron_block',            // Arg 2: the item to replace
      'tfc:metal/block/steel'         // Arg 3: the item to replace it with
    )
    event.replaceInput(
      { id: 'createdeco:zinc_support_wedge' }, // Arg 1: the filter
      'createdeco:zinc_sheet',            // Arg 2: the item to replace
      'tfc:metal/sheet/zinc'         // Arg 3: the item to replace it with
    )
    event.replaceInput(
      { id: 'vintageimprovements:craft/vacuum_chamber' }, // Arg 1: the filter
      'create:andesite_alloy',            // Arg 2: the item to replace
      'tfc:metal/sheet/steel'         // Arg 3: the item to replace it with
    )
    event.replaceInput(
      { id: 'vintageimprovements:craft/vacuum_chamber' }, // Arg 1: the filter
      'create:andesite_alloy',            // Arg 2: the item to replace
      'tfc:metal/sheet/steel'         // Arg 3: the item to replace it with
    )
    event.replaceInput(
      { id: 'vintageimprovements:craft/vacuum_chamber' }, // Arg 1: the filter
      'vintageimprovements:iron_spring',            // Arg 2: the item to replace
      'vintageimprovements:steel_spring'         // Arg 3: the item to replace it with
    )
    event.replaceInput(
      { id: 'vintageimprovements:mechanical_crafting/lathe' }, // Arg 1: the filter
      'create:andesite_alloy',            // Arg 2: the item to replace
      'tfc_metallurgy:metal/sheet/tungsten_steel'         // Arg 3: the item to replace it with
    )
    event.replaceInput(
      { id: 'vintageimprovements:mechanical_crafting/lathe' }, // Arg 1: the filter
      'minecraft:iron_block',            // Arg 2: the item to replace
      'tfc:metal/block/steel'         // Arg 3: the item to replace it with
    )
    // Replace TFMG lime by TFC lime
    event.remove({id: 'tfmg:crushing/limesand'})
    event.remove({id: 'tfmg:milling/limesand'})
    event.replaceInput(
      { input: 'tfmg:limesand' }, // Arg 1: the filter
      'tfmg:limesand',            // Arg 2: the item to replace
      'tfc:powder/lime'         // Arg 3: the item to replace it with
    )

    event.recipes.create.sequenced_assembly(
        [
            Item.of('vintageimprovements:helve_hammer_slot_cover', 4)
        ],
        // Input item: Smooth stone slab
        'tfc:metal/sheet/brass',
        // Sequence of assembly steps
        [
            event.recipes.create.cutting(
                'tfc:metal/sheet/brass',
                'tfc:metal/sheet/brass'
            ),
            event.recipes.vintageimprovements.polishing(
                'tfc:metal/sheet/brass',
                'tfc:metal/sheet/brass'
            )
        ]
    ).transitionalItem('tfc:metal/sheet/brass')
    .loops(2);
    event.remove({id: 'vintageimprovements:sequenced_assembly/redstone_module'})
    event.recipes.create.sequenced_assembly(
        [
            Item.of('vintageimprovements:redstone_module', 1)
        ],
        // Input item: Smooth stone slab
        'tfc:metal/sheet/gold',
        // Sequence of assembly steps
        [
          event.recipes.createDeploying('tfc:metal/sheet/gold', ['tfc:metal/sheet/gold', 'minecraft:redstone']),
          event.recipes.vintageimprovements.vibrating('tfc:metal/sheet/gold', 'tfc:metal/sheet/gold'),
          event.recipes.createDeploying('tfc:metal/sheet/gold', ['tfc:metal/sheet/gold', 'tfc_metallurgy:ore/certus_quartz']),
          event.recipes.createPressing('tfc:metal/sheet/gold', 'tfc:metal/sheet/gold'),
          event.recipes.createDeploying('tfc:metal/sheet/gold', ['tfc:metal/sheet/gold', 'tfc:metal/rod/steel'])
        ]
    ).transitionalItem('tfc:metal/sheet/gold')
    .loops(3);

    // Laser recipes
    event.recipes.create.sequenced_assembly(
        [
            Item.of('vintageimprovements:laser_item', 1)
        ],
        // Input item: Smooth stone slab
        'tfmg:steel_pipe',
        // Sequence of assembly steps
        [
          event.recipes.createDeploying('tfmg:steel_pipe', ['tfmg:steel_pipe', 'create_optical:mirror']),
          event.recipes.createDeploying('tfmg:steel_pipe', ['tfmg:steel_pipe', 'tfc:gem/ruby']),
          event.recipes.createDeploying('tfmg:steel_pipe', ['tfmg:steel_pipe', 'create_optical:mirror']),
          event.recipes.createDeploying('tfmg:steel_pipe', ['tfmg:steel_pipe', 'tfmg:light_bulb']),
          event.recipes.createDeploying('tfmg:steel_pipe', ['tfmg:steel_pipe', 'createaddition:copper_wire'])
        ]
    ).transitionalItem('tfmg:steel_pipe')
    .loops(1);
    // Semiconductor laser - simpler but requires access to microchips
    event.recipes.create.sequenced_assembly(
        [
            Item.of('vintageimprovements:laser_item', 1)
        ],
        // Input item: Smooth stone slab
        'tfmg:plastic_pipe',
        // Sequence of assembly steps
        [
          event.recipes.createDeploying('tfmg:plastic_pipe', ['tfmg:plastic_pipe', 'create_optical:mirror']),
          event.recipes.createDeploying('tfmg:plastic_pipe', ['tfmg:plastic_pipe', 'create_new_age:copper_circuit']),
          event.recipes.createDeploying('tfmg:plastic_pipe', ['tfmg:plastic_pipe', 'create_optical:mirror']),
          event.recipes.createDeploying('tfmg:plastic_pipe', ['tfmg:plastic_pipe', 'createaddition:copper_wire'])
        ]
    ).transitionalItem('tfmg:plastic_pipe')
    .loops(1);
    event.remove('vintageimprovements:craft/laser')
    event.shaped(
        Item.of('vintageimprovements:laser', 1), // arg 1: output
        [
          'ABA',
          'CDC', // arg 2: the shape (array of strings)
          'EFE'
        ],
        {
          A: 'create:cogwheel',
          B: 'vintageimprovements:laser_item',  //arg 3: the mapping object
          C: 'create:precision_mechanism',
          D: 'create:brass_casing',
          E: 'vintageimprovements:invar_spring',
          F: 'kubejs:lithium_battery_core'
        }
      )

  })