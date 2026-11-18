// Vintage Improvements: its machines and recipes fitted to the pack
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

  event.remove({id: /vintageimprovements:pressing\/\w+_ingot/})
  event.remove({id: /vintageimprovements:rolling\/\w+_ingot/})

  // Lathe recipes
  event.recipes.vintageimprovements.turning('vintageimprovements:w_shaped_curving_head', 'tfc:metal/block/steel').processingTime(300)
  event.recipes.vintageimprovements.turning('vintageimprovements:v_shaped_curving_head', 'tfc:metal/block/steel').processingTime(300)
  event.recipes.vintageimprovements.turning('2x tfmg:rebar', 'tfc:metal/rod/steel').processingTime(300)
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
  event.recipes.vintageimprovements.turning('2x tfmg:plastic_pipe', 'chemica:polyvinyl_chloride_sheet').processingTime(300)
  // C&A spools retired; the lathe now turns Electro Energetics spools
  event.remove({output: /createaddition:.*spool/})
  event.remove({id: 'tfmg:stonecutting/industrial_pipe'})
  event.recipes.vintageimprovements.turning('4x tfmg:industrial_pipe', 'tfc:metal/rod/steel').processingTime(300)
  event.recipes.vintageimprovements.turning('kubejs:circular_saw', 'tfc:metal/double_sheet/steel').processingTime(500)

  // Curving recipes
  event.remove({id: 'vintageimprovements:curving/iron_sheet'})
  event.remove({id: 'vintageimprovements:curving/diamond'})
  event.custom({type: 'vintageimprovements:curving', ingredients: [{item: 'tfc:metal/sheet/zinc'}], results: [{id: 'createdeco:zinc_support_wedge'}], mode: 4})
  event.custom({type: 'vintageimprovements:curving', ingredients: [{item: 'tfc:metal/sheet/brass'}], results: [{id: 'createdeco:brass_support_wedge'}], mode: 4})
  event.custom({type: 'vintageimprovements:curving', ingredients: [{item: 'tfc:metal/sheet/copper'}], results: [{id: 'createdeco:copper_support_wedge'}], mode: 4})
  event.custom({type: 'vintageimprovements:curving', ingredients: [{item: 'tfc:metal/sheet/wrought_iron'}], results: [{id: 'createdeco:iron_support_wedge'}], mode: 4})
  event.custom({type: 'vintageimprovements:curving', ingredients: [{item: 'tfc_metallurgy:metal/sheet/aluminum'}], results: [{id: 'createdeco:andesite_support_wedge'}], mode: 4})


  // Polishing recipes
  event.recipes.vintageimprovements.polishing('tfc:large_scraped_hide', 'tfc:large_soaked_hide')
  event.recipes.vintageimprovements.polishing('tfc:medium_scraped_hide', 'tfc:medium_soaked_hide')
  event.recipes.vintageimprovements.polishing('tfc:small_scraped_hide', 'tfc:small_soaked_hide')
  event.recipes.vintageimprovements.polishing('minecraft:paper', 'tfc:unrefined_paper')

  swapInputs(event, [
    ['vintageimprovements:turning/convex_curving_head', 'minecraft:iron_block', 'tfc:metal/block/steel'],
    ['vintageimprovements:turning/concave_curving_head', 'minecraft:iron_block', 'tfc:metal/block/steel'],
    ['vintageimprovements:craft/vacuum_chamber', 'create:andesite_alloy', 'tfc:metal/sheet/steel'],
    ['vintageimprovements:mechanical_crafting/lathe', 'create:andesite_alloy', 'tfc_metallurgy:metal/sheet/tungsten_steel'],
    ['vintageimprovements:mechanical_crafting/lathe', 'minecraft:iron_block', 'tfc:metal/block/steel'],
    ['vintageimprovements:mechanical_crafting/helve_hammer', 'minecraft:iron_block', 'tfc:metal/block/steel']
  ])
  // Replace TFMG lime by TFC lime
  event.remove({id: 'tfmg:crushing/limesand'})
  event.remove({id: 'tfmg:milling/limesand'})

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
        event.recipes.createDeploying('tfmg:plastic_pipe', ['tfmg:plastic_pipe', 'tfmg:circuit_board']),
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

  // Spring coiling machine wheel
  event.remove({ id: 'vintageimprovements:craft/spring_coiling_machine_wheel' })
  event.shaped('vintageimprovements:spring_coiling_machine_wheel', [
      ' R ',
      'RGR',
      ' R '
  ], {
      R: 'tfc:rock/smooth/marble',
      G: 'tfc:rock/smooth/marble_slab'
  })
})
