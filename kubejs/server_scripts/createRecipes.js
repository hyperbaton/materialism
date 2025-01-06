ServerEvents.recipes(event => {

    // Remove unnecesary recipes
    event.remove({id: 'create:crafting/kinetics/fluid_tank'})

    // Shaped recipes
    // Substitute super glue recipe with TFC materials
    event.remove({id: 'create:crafting/kinetics/super_glue'})
    event.shaped(
        Item.of('create:super_glue', 1), // arg 1: output
        [
          ' A ',
          'BBB', // arg 2: the shape (array of strings)
          ' C '
        ],
        {
          A: 'tfc:jar_lid',
          B: 'tfc:glue',  //arg 3: the mapping object
          C: 'tfc:metal/sheet/tin'
        }
      )
    event.shaped(
        Item.of('create:basin', 1), // arg 1: output
        [
          '   ',
          'ABA', // arg 2: the shape (array of strings)
          'AAA'
        ],
        {
          A: 'tfc:metal/sheet/cast_iron',
          B: 'tfc:crucible',
        }
      )
    event.shaped(
        Item.of('create:hand_crank', 1), // arg 1: output
        [
          '   ',
          'AAA', // arg 2: the shape (array of strings)
          '  B'
        ],
        {
          A: '#tfc:lumber',
          B: 'tfc:metal/rod/steel',
        }
    )
    event.shaped(
        Item.of('create:clipboard', 1), // arg 1: output
        [
            ' A ',
            ' B ', // arg 2: the shape (array of strings)
            ' C '
        ],
        {
            A: 'tfc:metal/ingot/wrought_iron',
            B: 'minecraft:paper',
            C: '#tfc:lumber',
        }
        )
    // Change windmill sail recipe
    event.remove({id: 'create:crafting/kinetics/white_sail'})
    event.shaped(
        Item.of('create:white_sail', 2), // arg 1: output
        [
            'CB ',
            'BA ', // arg 2: the shape (array of strings)
            '   '
        ],
        {
            A: 'tfc:metal/ingot/steel',
            B: '#forge:rods/wooden',
            C: 'tfc:wool_cloth',
        }
        )
    // Change windmill bearing recipe   
    event.remove({id: 'create:crafting/kinetics/windmill_bearing'})
    event.shaped(
        Item.of('create:windmill_bearing', 1), // arg 1: output
        [
            ' A ',
            ' B ', // arg 2: the shape (array of strings)
            ' C '
        ],
        {
            A: '#minecraft:wooden_slabs',
            B: 'tfc:metal/block/steel',
            C: 'create:shaft',
        }
        )
    // Change netherite backtank recipe 
    event.shaped(
      Item.of('create:netherite_backtank', 1), // arg 1: output
      [
          ' B ',
          'BAB', // arg 2: the shape (array of strings)
          ' B '
      ],
      {
          A: 'create:copper_backtank',
          B: 'tfc_metallurgy:metal/sheet/tungsten',
      }
      )
    // Change mechanical drill recipe
    event.remove({id: 'create:crafting/kinetics/mechanical_drill'})
    event.shaped(
      Item.of('create:mechanical_drill', 1), // arg 1: output
      [
          ' B ',
          'BAB', // arg 2: the shape (array of strings)
          ' C '
      ],
      {
          A: 'tfc_metallurgy:metal/sheet/cobalt',
          B: 'tfc_metallurgy:metal/sheet/tungsten_steel',
          C: 'create:andesite_casing'
      }
      )
    // Change electron tube recipe
    event.remove('create:crafting/materials/electron_tube')
    event.shaped(
      Item.of('create:electron_tube', 1), // arg 1: output
      [
          ' B ',
          ' A ', // arg 2: the shape (array of strings)
          ' C '
      ],
      {
          A: 'tfc:lamp_glass',
          B: 'create:polished_rose_quartz',
          C: 'tfc:metal/sheet/nickel'
      }
      )
    // Change minecarft coupling recipe
    event.remove('create:crafting/curiosities/minecart_coupling')
    event.shaped(
      Item.of('create:minecart_coupling', 1), // arg 1: output
      [
          '  B',
          ' A ', // arg 2: the shape (array of strings)
          'B  '
      ],
      {
          A: 'vintageimprovements:nickel_spring',
          B: 'tfc_metallurgy:metal/rod/titanium'
      }
      )
    // Change filter recipe
    event.remove('create:crafting/kinetics/filter')
    event.shaped(
      Item.of('create:filter', 1), // arg 1: output
      [
          '   ',
          'ABA', // arg 2: the shape (array of strings)
          '   '
      ],
      {
          A: 'tfc_metallurgy:metal/rod/pewter',
          B: 'tfc:burlap_cloth'
      }
      )
    // Change attribute filter recipe
    event.remove('create:crafting/kinetics/attribute_filter')
    event.shaped(
      Item.of('create:attribute_filter', 1), // arg 1: output
      [
          '   ',
          'ABA', // arg 2: the shape (array of strings)
          '   '
      ],
      {
          A: 'tfc_metallurgy:metal/rod/brass',
          B: 'create:filter'
      }
      )
    // Change rope pulley recipe
    event.remove({id: 'create:crafting/kinetics/rope_pulley'})
    event.shaped(
      Item.of('create:rope_pulley', 1), // arg 1: output
      [
          ' A ',
          ' B ', // arg 2: the shape (array of strings)
          ' C '
      ],
      {
          A: 'create:andesite_casing',
          B: 'firmaciv:rope_coil',
          C: 'tfc_metal_items:steel_pressing_head'
      }
      )

    // Add recipes with tools
    event.remove({id: 'create:crafting/kinetics/shaft'})
    event.shapeless('8x create:shaft',[
      'tfc:metal/rod/steel',
      'tfc:metal/rod/steel',
      '#tfc:chisels'
  ]).damageIngredient(Ingredient.of('#tfc:chisels'))
      
    event.replaceInput(
      { id: 'create:crafting/materials/electron_tube' }, // Arg 1: the filter
      'create:polished_rose_quartz',            // Arg 2: the item to replace
      'tfc:lamp_glass'         // Arg 3: the item to replace it with
    )
    // Replace all create kelp recipes
    replaceKelpWithRubber('create:crafting/logistics/brass_tunnel')
    replaceKelpWithRubber('create:crafting/logistics/brass_funnel')
    replaceKelpWithRubber('create:crafting/kinetics/spout')
    replaceKelpWithRubber('create:crafting/logistics/andesite_funnel')
    replaceKelpWithRubber('create:crafting/logistics/andesite_tunnel')
    //replaceKelpWithRubber('create:crafting/kinetics/belt_connector')

    // Replace andesite alloy in recipes
    replaceAndesiteAlloyWith('create:crafting/logistics/andesite_funnel', 'tfc:metal/sheet/steel')
    replaceAndesiteAlloyWith('create:crafting/kinetics/steam_engine', 'tfc:metal/double_sheet/steel')
    replaceAndesiteAlloyWith('create:crafting/kinetics/mechanical_arm', 'tfc:metal/double_sheet/steel')
    replaceAndesiteAlloyWith('create:crafting/kinetics/gantry_shaft', 'tfc:metal/sheet/steel')
    replaceAndesiteAlloyWith('create:crafting/appliances/copper_backtank', 'firmalife:metal/sheet/stainless_steel')
    replaceAndesiteAlloyWith('create:crafting/kinetics/piston_extension_pole', 'tfc:metal/rod/steel')
    replaceAndesiteAlloyWith('create:crafting/kinetics/radial_chassis', 'tfc:metal/rod/steel')
    replaceAndesiteAlloyWith('create:crafting/kinetics/metal_girder', 'tfc:metal/ingot/steel')
    replaceAndesiteAlloyWith('create:crafting/kinetics/mechanical_plough', 'tfc:metal/ingot/steel')
    replaceAndesiteAlloyWith('create:crafting/logistics/andesite_tunnel', 'tfc:metal/sheet/steel')
    replaceAndesiteAlloyWith('create:crafting/kinetics/copper_valve_handle', 'tfc:metal/ingot/steel')
    replaceAndesiteAlloyWith('create:crafting/kinetics/depot', 'tfc:metal/sheet/steel')
    replaceAndesiteAlloyWith('create:crafting/appliances/copper_diving_boots', 'tfc:metal/sheet/steel')
    replaceAndesiteAlloyWith('create:crafting/kinetics/mechanical_drill', 'tfc:metal/ingot/steel')
    //replaceAndesiteAlloyWith('create:crafting/kinetics/cart_assembler', 'tfc:metal/sheet/steel')
    replaceAndesiteAlloyWith('create:crafting/kinetics/metal_bracket', 'tfc:metal/sheet/steel')
    replaceAndesiteAlloyWith('create:crafting/kinetics/sticker', 'tfc:metal/ingot/steel')
    replaceAndesiteAlloyWith('create:crafting/kinetics/nozzle', 'tfc:metal/sheet/steel')
    replaceAndesiteAlloyWith('create:crafting/kinetics/linear_chassis', 'tfc:metal/sheet/steel')
    replaceAndesiteAlloyWith('create:crafting/kinetics/mechanical_harvester', 'tfc:metal/scythe_blade/steel')
    replaceAndesiteAlloyWith('create:crafting/kinetics/display_board', 'tfc:metal/sheet/steel')
    replaceAndesiteAlloyWith('create:crafting/kinetics/wooden_bracket', 'tfc:metal/sheet/steel')
    replaceAndesiteAlloyWith('create:mechanical_crafting/potato_cannon', 'tfc:metal/sheet/steel')
    replaceAndesiteAlloyWith('create:mechanical_crafting/crushing_wheel', 'tfc:metal/sheet/steel')
    replaceAndesiteAlloyWith('create:andesite_ladder_from_andesite_alloy_stonecutting', 'tfc:metal/rod/aluminum')
    replaceAndesiteAlloyWith('create:andesite_bars_from_andesite_alloy_stonecutting', 'tfc:metal/ingot/aluminum')
    replaceAndesiteAlloyWith('create:andesite_scaffolding_from_andesite_alloy_stonecutting', 'tfc:metal/ingot/aluminum')

    // Item application recipes
    event.remove({type: 'create:item_application'})
    event.custom({
      type: 'create:item_application',
      ingredients: [
        { tag: 'forge:stripped_logs' },
        { item: 'tfc_metallurgy:metal/sheet/aluminum' },
      ],
      results: [
        { item: 'create:andesite_casing' },
      ],
    })
    event.custom({
      type: 'create:item_application',
      ingredients: [
        { tag: 'forge:stripped_logs' },
        { item: 'tfc:metal/sheet/copper' },
      ],
      results: [
        { item: 'create:copper_casing' },
      ],
    })
    event.custom({
      type: 'create:item_application',
      ingredients: [
        { tag: 'forge:stripped_logs' },
        { item: 'tfc:metal/sheet/brass' },
      ],
      results: [
        { item: 'create:brass_casing' },
      ],
    })
    event.custom({
      type: 'create:item_application',
      ingredients: [
        { tag: 'forge:stripped_logs' },
        { item: 'tfc_metallurgy:metal/sheet/titanium' },
      ],
      results: [
        { item: 'create:railway_casing' },
      ],
    })
    event.remove({id: 'create:crafting/kinetics/depot'})
    event.custom({
      type: 'create:item_application',
      ingredients: [
        { item: 'create:andesite_casing' },
        { item: 'tfc:metal/sheet/steel' },
      ],
      results: [
        { item: 'create:depot' },
      ],
    })
    event.remove({id: 'create:crafting/kinetics/fluid_valve'})
    event.custom({
      type: 'create:item_application',
      ingredients: [
        { item: 'create:fluid_pipe' },
        { item: 'tfc:metal/sheet/steel' },
      ],
      results: [
        { item: 'create:fluid_valve' },
      ],
    })
    event.remove({id: 'create:crafting/kinetics/speedometer'})
    event.custom({
      type: 'create:item_application',
      ingredients: [
        { item: 'create:andesite_casing' },
        { item: 'minecraft:compass' },
      ],
      results: [
        { item: 'create:speedometer' },
      ],
    })
    event.remove({id: 'create:crafting/kinetics/mechanical_pump'})
    event.custom({
      type: 'create:item_application',
      ingredients: [
        { item: 'create:fluid_pipe' },
        { item: 'create:cogwheel' },
      ],
      results: [
        { item: 'create:mechanical_pump' },
      ],
    })
    event.remove({id: 'create:crafting/kinetics/item_drain'})
    event.custom({
      type: 'create:item_application',
      ingredients: [
        { item: 'create:copper_casing' },
        { item: 'tfc:metal/bars/wrought_iron' },
      ],
      results: [
        { item: 'create:item_drain' },
      ],
    })
    event.remove({id: 'create:crafting/kinetics/spout'})
    event.custom({
      type: 'create:item_application',
      ingredients: [
        { item: 'create:copper_casing' },
        { item: 'afc:rubber_bar' },
      ],
      results: [
        { item: 'create:spout' },
      ],
    })
    event.remove({id: 'create:crafting/kinetics/portable_fluid_interface'})
    event.custom({
      type: 'create:item_application',
      ingredients: [
        { item: 'create:copper_casing' },
        { item: 'create:chute' },
      ],
      results: [
        { item: 'create:portable_fluid_interface' },
      ],
    })

    // Recipes with vanilla ingots
    event.replaceInput(
      { id: 'create:crafting/kinetics/mechanical_saw' }, // Arg 1: the filter
      'minecraft:iron_ingot',            // Arg 2: the item to replace
      'tfc:metal/ingot/steel'         // Arg 3: the item to replace it with
    )
    event.replaceInput( // Use casting iron?
      { id: 'create:crafting/kinetics/chute' }, // Arg 1: the filter
      'minecraft:iron_ingot',            // Arg 2: the item to replace
      'tfc:metal/ingot/steel'         // Arg 3: the item to replace it with
    )
    event.replaceInput(
      { id: 'create:crafting/kinetics/mechanical_press' }, // Arg 1: the filter
      'minecraft:iron_block',            // Arg 2: the item to replace
      'tfc_metal_items:steel_pressing_head'         // Arg 3: the item to replace it with
    )
    event.replaceInput(
      { id: 'create:crafting/appliances/copper_backtank' }, // Arg 1: the filter
      'minecraft:copper_block',            // Arg 2: the item to replace
      'tfc:metal/block/copper'         // Arg 3: the item to replace it with
    )
    event.replaceInput(
      { id: 'create:crafting/kinetics/metal_bracket' }, // Arg 1: the filter
      'minecraft:iron_ingot',            // Arg 2: the item to replace
      'tfc:metal/ingot/steel'         // Arg 3: the item to replace it with
    )
    event.replaceInput(
      { id: 'create:brass_ladder_from_ingots_brass_stonecutting' }, // Arg 1: the filter
      'tfc:metal/ingot/brass',            // Arg 2: the item to replace
      'tfc:metal/rod/brass'         // Arg 3: the item to replace it with
    )
    event.replaceInput(
      { id: 'create:brass_ladder_from_ingots_brass_stonecutting' }, // Arg 1: the filter
      'create:brass',            // Arg 2: the item to replace
      'tfc:metal/rod/brass'         // Arg 3: the item to replace it with
    )
    event.replaceInput(
      { id: 'create:copper_ladder_from_ingots_copper_stonecutting' }, // Arg 1: the filter
      'tfc:metal/ingot/copper',            // Arg 2: the item to replace
      'tfc:metal/rod/copper'         // Arg 3: the item to replace it with
    )
    event.replaceInput(
      { id: 'create:copper_ladder_from_ingots_copper_stonecutting' }, // Arg 1: the filter
      'create:copper',            // Arg 2: the item to replace
      'tfc:metal/rod/copper'         // Arg 3: the item to replace it with
    )

    // Recipes with nuggets
    event.replaceInput(
      { id: 'create:crafting/kinetics/metal_bracket' }, // Arg 1: the filter
      'minecraft:iron_nugget',            // Arg 2: the item to replace
      'tfc:metal/rod/wrought_iron'         // Arg 3: the item to replace it with
    )
    event.replaceInput(
      { id: 'create:crafting/kinetics/encased_chain_drive' }, // Arg 1: the filter
      'minecraft:iron_nugget',            // Arg 2: the item to replace
      'tfc_metallurgy:metal/chain/invar'         // Arg 3: the item to replace it with
    )

    // Recipes with bars
    event.replaceInput(
      { id: 'create:crafting/kinetics/item_drain' }, // Arg 1: the filter
      'minecraft:iron_bars',            // Arg 2: the item to replace
      'tfc:metal/bars/wrought_iron'         // Arg 3: the item to replace it with
    )
    event.replaceInput(
      { input: 'create:andesite_bars' }, // Arg 1: the filter
      'create:andesite_bars',            // Arg 2: the item to replace
      'tfc:metal/bars/steel'         // Arg 3: the item to replace it with
    )

    // Recipes with metal blocks
    event.replaceInput(
      { id: 'create:crafting/kinetics/steam_engine' }, // Arg 1: the filter
      'minecraft:copper_block',            // Arg 2: the item to replace
      'tfc:metal/block/copper'         // Arg 3: the item to replace it with
    )
    event.replaceInput(
      { id: 'create:crafting/curiosities/peculiar_bell' }, // Arg 1: the filter
      'create:brass_block',            // Arg 2: the item to replace
      'tfc:metal/block/brass'         // Arg 3: the item to replace it with
    )
    event.replaceInput(
      { id: 'create:crafting/schematics/schematicannon' }, // Arg 1: the filter
      'minecraft:iron_block',            // Arg 2: the item to replace
      'tfc:metal/block/steel'         // Arg 3: the item to replace it with
    )

    // Recipes with springs
    event.replaceInput(
      { id: 'create:crafting/kinetics/weighted_ejector' }, // Arg 1: the filter
      'tfc:metal/sheet/gold',            // Arg 2: the item to replace
      'vintageimprovements:steel_spring'         // Arg 3: the item to replace it with
    )

    // Recipes with rocks
    event.replaceInput(
      { id: 'create:crafting/schematics/schematic_table' }, // Arg 1: the filter
      'minecraft:smooth_stone',            // Arg 2: the item to replace
      'tfc_metallurgy:metal/rod/aluminum'         // Arg 3: the item to replace it with
    )
    event.replaceInput(
      { id: 'create:crafting/schematics/schematicannon' }, // Arg 1: the filter
      'minecraft:smooth_stone',            // Arg 2: the item to replace
      'tfc_metallurgy:metal/double_sheet/aluminum'         // Arg 3: the item to replace it with
    )
    event.replaceInput(
      { id: 'create:crafting/logistics/redstone_contact' }, // Arg 1: the filter
      'minecraft:cobblestone',            // Arg 2: the item to replace
      'tfc_metallurgy:metal/sheet/aluminum'         // Arg 3: the item to replace it with
    )

    // Recipes with glass
    event.replaceInput(
      { id: 'create:crafting/kinetics/goggles' }, // Arg 1: the filter
      '#forge:glass',            // Arg 2: the item to replace
      'tfc:lens'         // Arg 3: the item to replace it with
    )

    // Recipes with quartz

    // Recipes with wool 
    event.remove({id: 'create:milling/wool'})
    event.recipes.create.milling('8x tfc:wool_yarn', '#minecraft:wool')
    /*event.replaceInput(
      { id: 'create:crafting/kinetics/rope_pulley' }, // Arg 1: the filter
      '#minecraft:wool',            // Arg 2: the item to replace
      'firmaciv:crafting/rope_coil'         // Arg 3: the item to replace it with
    )*/

    // Recipes with rubber
    event.replaceInput(
      { id: 'create:crafting/kinetics/elevator_pulley' }, // Arg 1: the filter
      'minecraft:dried_kelp_block',            // Arg 2: the item to replace
      'firmaciv:crafting/rope_coil'         // Arg 3: the item to replace it with
    )
    event.replaceInput(
      { id: 'create:crafting/kinetics/hose_pulley' }, // Arg 1: the filter
      'minecraft:dried_kelp_block',            // Arg 2: the item to replace
      'firmaciv:rope_coil'         // Arg 3: the item to replace it with
    )

    // Recipes with slime balls
    event.replaceInput(
      { id: 'create:crafting/kinetics/sticky_mechanical_piston' }, // Arg 1: the filter
      'minecraft:slime_ball',            // Arg 2: the item to replace
      'tfc:glue'         // Arg 3: the item to replace it with
    )
    event.replaceInput(
      { id: 'create:crafting/kinetics/sticker' }, // Arg 1: the filter
      'minecraft:slime_ball',            // Arg 2: the item to replace
      'tfc:glue'         // Arg 3: the item to replace it with
    )

    // Recipes with barrels and other blocks
    // TODO: Candidate to more complex processing
    event.replaceInput(
      { id: 'create:crafting/kinetics/item_vault' }, // Arg 1: the filter
      'minecraft:barrel',            // Arg 2: the item to replace
      '#tfc:barrels'         // Arg 3: the item to replace it with
    )

    // TODO: Uncomment
    // Remove all references to andesite alloy
    //event.remove({input: 'create:andesite_alloy'})
    //event.remove({output: 'create:andesite_alloy'})

    event.replaceInput(
        { input: 'create:brass_sheet' }, // Arg 1: the filter
        'create:brass_sheet',            // Arg 2: the item to replace
        'tfc:metal/sheet/brass'         // Arg 3: the item to replace it with
      )

    event.replaceInput(
        { input: 'create:copper_sheet' }, // Arg 1: the filter
        'create:copper_sheet',            // Arg 2: the item to replace
        'tfc:metal/sheet/copper'         // Arg 3: the item to replace it with
      )

    event.replaceInput(
        { input: 'minecraft:copper_ingot', mod: 'create' }, // Arg 1: the filter
        'minecraft:copper_ingot',            // Arg 2: the item to replace
        'tfc:metal/ingot/copper'         // Arg 3: the item to replace it with
      )

    event.replaceInput(
        { input: 'create:iron_sheet' }, // Arg 1: the filter
        'create:iron_sheet',            // Arg 2: the item to replace
        'tfc:metal/sheet/steel'         // Arg 3: the item to replace it with
      )

    event.replaceInput(
        { input: 'create:golden_sheet' }, // Arg 1: the filter
        'create:golden_sheet',            // Arg 2: the item to replace
        'tfc:metal/sheet/gold'         // Arg 3: the item to replace it with
      )

    // TODO: Remove create sandpaper from modpack
    event.replaceInput(
        { input: 'create:sand_paper' }, // Arg 1: the filter
        'create:sand_paper',            // Arg 2: the item to replace
        'tfc:sandpaper'         // Arg 3: the item to replace it with
      )
    event.recipes.tfc.anvil('create:brass_hand', 'tfc:metal/double_sheet/brass', ['hit_not_last', 'upset_any'])
        .tier(3)
    event.recipes.tfc.anvil('create:propeller', 'tfc:metal/double_sheet/steel', ['hit_not_last', 'upset_any'])
        .tier(4)
    event.recipes.tfc.anvil('create:whisk', 'tfc:metal/double_sheet/steel', ['hit_not_last', 'upset_any'])
        .tier(4)
    event.recipes.tfc.anvil('create:crafter_slot_cover', 'tfc:metal/ingot/brass', ['hit_not_last', 'upset_any'])
        .tier(3)
    
    event.shapeless('4x create:schedule',[
      'create:sturdy_sheet',
      'minecraft:paper'
    ])

    // Remove unwanted Wooden Cog recipes
    event.remove({id: "woodencog:crafting/kinetics/belt_connector"})
    event.remove({id: "woodencog:rock_knapping/andesite_alloy"})
    event.remove({id: "woodencog:crafting/kinetics/mechanical_press"})
    event.remove({id: "create:crafting/kinetics/whisk"})
    event.remove({id: "woodencog:crafting/kinetics/basin"})
    event.remove({id: "create:crafting/kinetics/empty_blaze_burner"})
    event.remove({id: "woodencog:crafting/kinetics/spout"})
    event.remove({id: "woodencog:crafting/kinetics/hose_pulley"})
    event.remove({id: "woodencog:crafting/kinetics/item_drain"})
    //event.remove({id: "woodencog:crafting/kinetics/elevator_pulley"})
    event.remove({id: "woodencog:crafting/kinetics/sticker"})
    event.remove({id: "woodencog:crafting/logistics/andesite_funnel"})
    event.remove({id: "woodencog:crafting/logistics/brass_funnel"})
    event.remove({id: "woodencog:crafting/logistics/andesite_tunnel"})
    event.remove({id: "woodencog:crafting/logistics/brass_tunnel"})
    event.remove({id: "woodencog:crafting/kinetics/encased_chain_drive"})
    event.remove({id: "woodencog:crafting/kinetics/windmill_bearing"})
    event.remove({id: "woodencog:crafting/logistics/redstone_contact"})
    event.remove({id: "woodencog:crafting/appliances/copper_backtank"})
    event.remove({id: "create:crafting/kinetics/brass_hand"})
    event.remove({id: "create:crafting/kinetics/propeller"})
    event.remove({id: "woodencog:crafting/sequenced_assembly/precision_mechanism"})
    event.remove({id: "create:pressing/copper_ingot"})
    event.remove({id: "create:pressing/iron_ingot"})
    event.remove({id: "create:pressing/brass_ingot"})
    event.remove({id: "create:pressing/gold_ingot"})
    event.remove({id: "create:cutting/andesite_alloy"})

    // Remove unwanted contraptions
    event.remove({id: "create:crafting/kinetics/cart_assembler"})
    event.remove({id: "woodencog:crafting/kinetics/empty_blaze_burner"})
    event.remove({id: "create:conversion_2"}) // Blaze burner
    event.remove({id: "create:crafting/kinetics/controller_rail"})

    // Remove all crushed ores
    event.remove({output: /create:crushed_raw.*/})

    // Cutting recipes
    event.recipes.create.cutting('4x create:shaft', 'tfc:metal/rod/steel')
    event.recipes.create.cutting('4x tfc:papyrus_strip', 'tfc:papyrus')

    // Mixing recipes
    event.recipes.create.mixing(
      'tfc:soaked_papyrus_strip',
      [
        'tfc:papyrus_strip',
        Fluid.of('minecraft:water', 200)
      ],
      4000
    )

    // Create sequenced assembly recipes

    // Remove the existing recipe for train tracks
    event.remove({ output: 'create:track' });
    // Add a custom recipe for train tracks
    event.recipes.create.sequenced_assembly(
        // Final output: 32 train tracks
        [
            Item.of('create:track', 32)
        ],
        // Input item: Smooth stone slab
        '#tfc:rock/smooth',
        // Sequence of assembly steps
        [
            event.recipes.createDeploying(
                'create:track',
                ['create:track', 'tfc:metal/rod/steel']
            ),
            event.recipes.createDeploying(
                'create:track',
                ['create:track', 'tfc:metal/rod/steel']
            ),
            event.recipes.createPressing('create:track', 'create:track')
        ]
    ).transitionalItem('create:track')
    .loops(4);
    // Remove the existing recipe for train tracks
    event.remove({ output: 'create:sturdy_sheet' });
    // Add a custom recipe for sturdy sheets
    event.recipes.create.sequenced_assembly(
        // Final output: 32 train tracks
        [
            Item.of('create:sturdy_sheet', 1)
        ],
        // Input item: Smooth stone slab
        'tfc:metal/sheet/steel',
        // Sequence of assembly steps
        [
            event.recipes.createFilling(
                'tfc:metal/sheet/steel',
                ['tfc:metal/sheet/steel', Fluid.of('tfc_metallurgy:metal/tungsten', 100)]
            ),
            event.recipes.createPressing('tfc:metal/sheet/steel', 'tfc:metal/sheet/steel'),
            event.recipes.createPressing('tfc:metal/sheet/steel', 'tfc:metal/sheet/steel'),
            event.recipes.vintageimprovements.polishing('tfc:metal/sheet/steel', 'tfc:metal/sheet/steel').processingTime(200)
        ]
    ).transitionalItem('tfc:metal/sheet/steel')
    .loops(1);
    // Remove Create's recipe for precision mechanism
    event.remove('create:sequenced_assembly/precision_mechanism');
    // Add a custom recipe for precision mechanisms
    event.recipes.create.sequenced_assembly([
      Item.of('create:precision_mechanism').withChance(130.0), // this is the item that will appear in JEI as the result
      Item.of('tfc:metal/sheet/brass').withChance(8.0), // the rest of these items will be part of the scrap
      Item.of('vintageimprovements:invar_wire').withChance(8.0),
      Item.of('create:cogwheel').withChance(5.0),
      Item.of('create:shaft').withChance(2.0),
      'tfc_metallurgy:metal/rod/constantan',
      'minecraft:clock'
    ], 'tfc:metal/sheet/brass', [ // input
      // the transitional item set by `transitionalItem('create:incomplete_large_cogwheel')` is the item used during the intermediate stages of the assembly
      event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'create:cogwheel']),
      event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'create:large_cogwheel']),
      event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'vintageimprovements:small_invar_spring']),
      event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'tfc_metallurgy:metal/rod/constantan'])
    ]).transitionalItem('create:incomplete_precision_mechanism').loops(5) // set the transitional item and the number of loops
    // Add a custom recipe for sandpaper
    event.remove({id: 'tfc:crafting/sandpaper'})
    event.recipes.create.sequenced_assembly([
      Item.of('tfc:sandpaper').withChance(95.0), // this is the item that will appear in JEI as the result
      Item.of('minecraft:paper').withChance(5.0)
    ], 'minecraft:paper', [ // input
      // the transitional item set by `transitionalItem('create:incomplete_large_cogwheel')` is the item used during the intermediate stages of the assembly
      event.recipes.createDeploying('minecraft:paper', ['minecraft:paper', 'tfc:glue']),
      event.recipes.createDeploying('minecraft:paper', ['minecraft:paper', 'tfc:powder/flux']),
      event.recipes.createDeploying('minecraft:paper', ['minecraft:paper', '#tfc:volcanic_sand']),
      event.recipes.createDeploying('minecraft:paper', ['minecraft:paper', '#tfc:gem_powders']),
      event.recipes.createPressing('minecraft:paper', 'minecraft:paper')
    ]).transitionalItem('minecraft:paper').loops(1) // set the transitional item and the number of loops
    // Add a custom recipe for rose quartz
    event.remove({output: 'create:rose_quartz'})
    event.recipes.create.sequenced_assembly([
      Item.of('create:rose_quartz').withChance(95.0), // this is the item that will appear in JEI as the result
      Item.of('tfc_metallurgy:ore/certus_quartz').withChance(5.0)
    ], 'tfc_metallurgy:ore/certus_quartz', [ // input
      // the transitional item set by `transitionalItem('create:incomplete_large_cogwheel')` is the item used during the intermediate stages of the assembly
      event.recipes.createDeploying('tfc_metallurgy:ore/certus_quartz', ['tfc_metallurgy:ore/certus_quartz', 'minecraft:redstone']),
      event.recipes.vintageimprovements.vibrating('tfc_metallurgy:ore/certus_quartz', 'tfc_metallurgy:ore/certus_quartz'),
      event.recipes.create_optical.focusing('tfc_metallurgy:ore/certus_quartz', 'tfc_metallurgy:ore/certus_quartz')
    ]).transitionalItem('tfc_metallurgy:ore/certus_quartz').loops(6) // set the transitional item and the number of loops

    // Gunpowder recipes
    event.recipes.remove("tfc:crafting/gunpowder")
    event.recipes.remove("tfc:crafting/gunpowder_graphite")
    event.recipes.createMixing(
      Item.of("minecraft:gunpowder", 4),
      [
        "tfc:powder/saltpeter",
        "tfc:powder/saltpeter",
        "tfc:powder/sulfur",
        "tfc:powder/charcoal",
      ]
    )
    event.recipes.createMixing(
      Item.of("minecraft:gunpowder", 12),
      [
        "tfc:powder/saltpeter",
        "tfc:powder/saltpeter",
        "tfc:powder/saltpeter",
        "tfc:powder/saltpeter",
        "tfc:powder/sulfur",
        "tfc:powder/sulfur",
        "tfc:powder/charcoal",
        "tfc:powder/charcoal",
        "tfc:powder/graphite",
      ]
    )

    function replaceKelpWithRubber(recipeId){
        event.replaceInput(
            { id: recipeId }, // Arg 1: the filter
            'minecraft:dried_kelp',            // Arg 2: the item to replace
            'afc:rubber_bar'         // Arg 3: the item to replace it with
          )
    }

    function replaceAndesiteAlloyWith(recipeId, replacer){
        event.replaceInput(
            { id: recipeId }, // Arg 1: the filter
            'create:andesite_alloy',            // Arg 2: the item to replace
            replacer         // Arg 3: the item to replace it with
          )
    }
})