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
    event.remove({id: 'tfc_metal_items:crafting/steel_pressing_head'})
    event.recipes.vintageimprovements.turning('tfc_metal_items:steel_pressing_head', 'tfc:metal/block/steel').processingTime(300)
    event.recipes.vintageimprovements.turning('vintageimprovements:w_shaped_curving_head', 'tfc:metal/block/steel').processingTime(300)
    event.recipes.vintageimprovements.turning('vintageimprovements:v_shaped_curving_head', 'tfc:metal/block/steel').processingTime(300)
    event.recipes.vintageimprovements.turning('4x tfmg:screw', 'tfc:metal/rod/steel').processingTime(300)
    event.recipes.vintageimprovements.turning('2x tfmg:rebar', 'tfc:metal/rod/steel').processingTime(300)
    event.recipes.vintageimprovements.turning('2x firmaciv:copper_bolt', 'tfc:metal/rod/copper').processingTime(300)
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
    event.remove({output: 'createaddition:crafting/spool'})
    event.recipes.vintageimprovements.turning('4x createaddition:spool', '#tfc:lumber').processingTime(150)
    event.remove({output: 'tfmg:stonecutting/industrial_pipe'})
    event.recipes.vintageimprovements.turning('4x tfmg:industrial_pipe', 'tfc:metal/rod/steel').processingTime(300)

    // Curving recipes
    event.remove({id: 'vintageimprovements:curving/iron_sheet'})
    event.remove({id: 'vintageimprovements:curving/diamond'})
    event.recipes.vintageimprovements.curving('createdeco:zinc_support_wedge', 'tfc:metal/sheet/zinc').head("vintageimprovements:v_shaped_curving_head")
    event.recipes.vintageimprovements.curving('createdeco:brass_support_wedge', 'tfc:metal/sheet/brass').head("vintageimprovements:v_shaped_curving_head")
    event.recipes.vintageimprovements.curving('createdeco:copper_support_wedge', 'tfc:metal/sheet/copper').head("vintageimprovements:v_shaped_curving_head")
    event.recipes.vintageimprovements.curving('createdeco:iron_support_wedge', 'tfc:metal/sheet/wrought_iron').head("vintageimprovements:v_shaped_curving_head")
    event.recipes.vintageimprovements.curving('createdeco:andesite_support_wedge', 'tfc_metallurgy:metal/sheet/aluminum').head("vintageimprovements:v_shaped_curving_head")

    // Vacuum recipes

    // Presurizing recipes
    // Use TFMG sulfuric acid with vintage recipe
    event.recipes.vintageimprovements.pressurizing(
      'tfmg:zinc_sulfate',
      ['tfc:powder/sphalerite', Fluid.of('tfmg:sulfuric_acid', 200), Fluid.of('minecraft:water', 200)]
    )
    event.remove({id: 'vintageimprovements:pressurizing/sulfur_trioxide_alt'})  // Why use iron powder?
    event.remove({id: 'vintageimprovements:pressurizing/copper_sulfate'}) // Remove recipe with vintage sulfuric acid
    event.remove({id: 'vintageimprovements:pressurizing/sulfuric_acid'}) // Remove recipe for vintage sulfuric acid
    event.remove({id: 'tfmg:mixing/sulfuric_acid'})
    event.recipes.vintageimprovements.pressurizing(
      Fluid.of('tfmg:sulfuric_acid', 1000),
      [Fluid.of('vintageimprovements:sulfur_trioxide', 1000), Fluid.of('minecraft:water', 1000)]
    ).secondaryFluidInput(1)
    event.recipes.vintageimprovements.pressurizing(
      'vintageimprovements:copper_sulfate',
      ['#tfc:powders/copper', Fluid.of('tfmg:sulfuric_acid', 200), Fluid.of('minecraft:water', 200)]
    )
    // Introduce a way of obtaining vanadium
    event.remove({id: 'create:crushing/crimsite_recycling'})  // Remove standard vanadium source
    event.remove({id: 'vintageimprovements:crushing/basalt_recycling'})
    event.remove({id: 'create:crushing/crimsite'})
    event.remove({id: 'vintageimprovements:crushing/basalt'})
    event.recipes.vintageimprovements.pressurizing(
      Item.of('vintageimprovements:vanadium_nugget').withChance(0.1),
      ['tfmg:slag', 'tfc:powder/salt',  'tfc:powder/saltpeter', Fluid.of('minecraft:water', 200)]
    ).secondaryFluidInput(0).heated()
    event.recipes.vintageimprovements.pressurizing(
      Item.of('vintageimprovements:vanadium_nugget').withChance(0.3),
      ['tfmg:slag', 'tfc:powder/salt',  'tfc:powder/saltpeter', Fluid.of('tfmg:sulfuric_acid', 200)]
    ).secondaryFluidInput(0).heated()

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
  })