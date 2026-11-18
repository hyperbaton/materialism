ServerEvents.recipes(event => {

    // Remove unnecesary recipes
    event.remove({id: 'create:crafting/kinetics/fluid_tank'})
    // Re-add fluid tank with TFC materials
    event.shaped('create:fluid_tank', [
        'B',
        'C',
        'B'
    ], {
        B: 'tfc:metal/sheet/copper',
        C: 'minecraft:glass_pane'
    })

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
    event.remove({id: 'create:crafting/appliances/clipboard'})
    event.shaped(
        Item.of('create:clipboard', 1), // arg 1: output
        [
            ' A ',
            ' B ', // arg 2: the shape (array of strings)
            ' C '
        ],
        {
            A: 'tfc_metallurgy:metal/sheet/aluminum',
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
            B: '#c:rods/wooden',
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
    event.recipes.create.sequenced_assembly(
      'kubejs:drill_bit',
      'tfc_metallurgy:metal/rod/tungsten_steel',
      [
        event.recipes.vintageimprovements.turning('tfc_metallurgy:metal/rod/tungsten_steel', 'tfc_metallurgy:metal/rod/tungsten_steel'),
        event.recipes.vintageimprovements.pressurizing('tfc_metallurgy:metal/rod/tungsten_steel', [
          'tfc_metallurgy:metal/rod/tungsten_steel',
          '5x tfc_metallurgy:metal/dust/cobalt'
        ]),
        event.recipes.vintageimprovements.polishing('tfc_metallurgy:metal/rod/tungsten_steel', 'tfc_metallurgy:metal/rod/tungsten_steel')
      ]
    ).transitionalItem('tfc_metallurgy:metal/rod/tungsten_steel').loops(1)
    // Premium drill bit: the higher-quality tip is worth 3 bits per batch instead of 1.
    event.recipes.create.sequenced_assembly(
      [Item.of('kubejs:drill_bit', 3)],
      'tfc_metallurgy:metal/rod/tungsten_steel',
      [
        event.recipes.createDeploying('tfc_metallurgy:metal/rod/tungsten_steel', [
          'tfc_metallurgy:metal/rod/tungsten_steel',
          'chemica:tungsten_carbide_dust'
        ]),
        event.recipes.vintageimprovements.turning('tfc_metallurgy:metal/rod/tungsten_steel', 'tfc_metallurgy:metal/rod/tungsten_steel'),
        event.recipes.vintageimprovements.pressurizing('tfc_metallurgy:metal/rod/tungsten_steel', 'tfc_metallurgy:metal/rod/tungsten_steel'),
        event.recipes.vintageimprovements.polishing('tfc_metallurgy:metal/rod/tungsten_steel', 'tfc_metallurgy:metal/rod/tungsten_steel')
      ]
    ).transitionalItem('tfc_metallurgy:metal/rod/tungsten_steel').loops(1)
    event.shaped(
      Item.of('create:mechanical_drill', 1), // arg 1: output
      [
          ' A ',
          ' B ', // arg 2: the shape (array of strings)
          ' C '
      ],
      {
          A: 'kubejs:drill_bit',
          B: 'create:andesite_casing',
          C: 'create:shaft'
      }
      )
    // Mechanical carfter to use TFC workbench
    event.remove({id: 'create:crafting/kinetics/mechanical_crafter'})
    event.shaped(
      Item.of('create:mechanical_crafter', 3), // arg 1: output
      [
          ' A ',
          ' B ', // arg 2: the shape (array of strings)
          ' C '
      ],
      {
          A: 'create:electron_tube',
          B: 'create:brass_casing',
          C: '#c:player_workstations/crafting_tables'
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
    event.remove('create:crafting/curiosities/minecart_coupling')
    event.shaped(
     Item.of('create:minecart_coupling', 1),
     ['  B', ' A ', 'B  '],
     { A: 'vintageimprovements:nickel_spring', B: 'tfc_metallurgy:metal/rod/titanium' }
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
    event.remove('create:crafting/kinetics/attribute_filter')
    event.shaped(
     Item.of('create:attribute_filter', 1),
     ['   ', 'ABA', '   '],
     { A: 'tfc:metal/rod/brass', B: 'create:filter' }
    )
    event.shaped(
      Item.of('materialismcore:fluid_scanner', 1), // arg 1: output
      [
          'ABA', // arg 2: the shape (array of strings)
      ],
      {
          A: 'tfc:metal/rod/copper',
          B: 'tfc:silica_glass_bottle'
      }
    )
    event.remove({id: 'create:crafting/kinetics/rope_pulley'})
    event.shaped(
     Item.of('create:rope_pulley', 1),
     [' A ', ' B ', ' C '],
     { A: 'create:andesite_casing', B: 'tfc:rope', C: 'vintageimprovements:concave_curving_head' }
    )
    // Create bells from TFC bells
    event.remove({id: 'create:crafting/curiosities/peculiar_bell'})
    event.shaped(
      Item.of('create:peculiar_bell', 1), // arg 1: output
      [
          'BAB',
          ' C ', // arg 2: the shape (array of strings)
          '   '
      ],
      {
          A: 'tfc:metal/sheet/brass',
          B: 'tfc:metal/rod/brass',
          C: 'tfc:brass_bell'
      }
      )
    event.remove({id: 'create:haunting/haunted_bell'})
    event.remove({id: 'create:conversion_3'})
    event.recipes.create.mixing(
      'create:haunted_bell',
      [
        'tfc:brass_bell',
        'tfc:bronze_bell',
        'tfc_metallurgy:florentine_bronze_bell',
        'tfc_metallurgy:beryllium_copper_bell'
      ]
    ).superheated()

    // Add recipes with tools
    event.remove({id: 'create:crafting/kinetics/shaft'})
    event.shapeless('8x create:shaft',[
      'tfc:metal/rod/steel',
      'tfc:metal/rod/steel',
      '#c:tools/chisel'
  ]).damageIngredient(Ingredient.of('#c:tools/chisel'))

    // Replace all create kelp recipes
    swapInputs(event, [
      ['create:crafting/logistics/brass_tunnel', 'minecraft:dried_kelp', 'afc:rubber_bar'],
      ['create:crafting/logistics/brass_funnel', 'minecraft:dried_kelp', 'afc:rubber_bar'],
      ['create:crafting/kinetics/spout', 'minecraft:dried_kelp', 'afc:rubber_bar'],
      ['create:crafting/logistics/andesite_funnel', 'minecraft:dried_kelp', 'afc:rubber_bar'],
      ['create:crafting/logistics/andesite_tunnel', 'minecraft:dried_kelp', 'afc:rubber_bar'],
      // Replace andesite alloy in recipes
      ['create:crafting/logistics/andesite_funnel', 'create:andesite_alloy', 'tfc:metal/sheet/steel'],
      ['create:crafting/kinetics/mechanical_arm', 'create:andesite_alloy', 'tfc:metal/double_sheet/steel'],
      ['create:crafting/kinetics/gantry_shaft', 'create:andesite_alloy', 'tfc:metal/sheet/steel'],
      ['create:crafting/appliances/copper_backtank', 'create:andesite_alloy', 'firmalife:metal/sheet/stainless_steel'],
      ['create:crafting/kinetics/piston_extension_pole', 'create:andesite_alloy', 'tfc:metal/rod/steel'],
      ['create:crafting/kinetics/radial_chassis', 'create:andesite_alloy', 'tfc:metal/rod/steel'],
      ['create:crafting/kinetics/metal_girder', 'create:andesite_alloy', 'tfc:metal/ingot/steel'],
      ['create:crafting/kinetics/mechanical_plough', 'create:andesite_alloy', 'tfc:metal/ingot/steel'],
      ['create:crafting/logistics/andesite_tunnel', 'create:andesite_alloy', 'tfc:metal/sheet/steel'],
      ['create:crafting/kinetics/copper_valve_handle', 'create:andesite_alloy', 'tfc:metal/ingot/steel'],
      ['create:crafting/kinetics/depot', 'create:andesite_alloy', 'tfc:metal/sheet/steel'],
      ['create:crafting/appliances/copper_diving_boots', 'create:andesite_alloy', 'tfc:metal/sheet/steel'],
      ['create:crafting/kinetics/metal_bracket', 'create:andesite_alloy', 'tfc:metal/sheet/steel'],
      ['create:crafting/kinetics/sticker', 'create:andesite_alloy', 'tfc:metal/ingot/steel'],
      ['create:crafting/kinetics/nozzle', 'create:andesite_alloy', 'tfc:metal/sheet/steel'],
      ['create:crafting/kinetics/linear_chassis', 'create:andesite_alloy', 'tfc:metal/sheet/steel'],
      ['create:crafting/kinetics/mechanical_harvester', 'create:andesite_alloy', 'tfc:metal/scythe_blade/steel'],
      ['create:crafting/kinetics/display_board', 'create:andesite_alloy', 'tfc:metal/sheet/steel'],
      ['create:crafting/kinetics/wooden_bracket', 'create:andesite_alloy', 'tfc:metal/sheet/steel'],
      ['create:mechanical_crafting/potato_cannon', 'create:andesite_alloy', 'tfc:metal/sheet/steel'],
      ['create:mechanical_crafting/crushing_wheel', 'create:andesite_alloy', 'tfc:metal/sheet/steel'],
      ['create:andesite_ladder_from_andesite_alloy_stonecutting', 'create:andesite_alloy', 'tfc_metallurgy:metal/rod/aluminum'],
      ['create:andesite_bars_from_andesite_alloy_stonecutting', 'create:andesite_alloy', 'tfc_metallurgy:metal/rod/aluminum'],
      ['create:andesite_scaffolding_from_andesite_alloy_stonecutting', 'create:andesite_alloy', 'tfc_metallurgy:metal/ingot/aluminum'],
      ['create:crafting/kinetics/hand_crank', 'create:andesite_alloy', 'tfc:metal/rod/steel'],
      // --- De-andesite batch ---
      // Table cloth (base andesite variant) -> aluminium sheet
      [{ id: /create:.*table_cloth.*$/ }, 'create:andesite_alloy', 'tfc_metallurgy:metal/sheet/aluminum'],
      // Postboxes (all colours) -> aluminium sheet
      [{ id: /create:crafting\/logistics\/[a-z_]*postbox$/ }, 'create:andesite_alloy', 'tfc_metallurgy:metal/sheet/aluminum']
    ])

    // Item hatch: steel heavy plate + steel trapdoor
    event.remove({ id: 'create:crafting/logistics/item_hatch' })
    event.shapeless('create:item_hatch', ['tfc_items:steel_heavy_sheet', 'tfc:metal/trapdoor/steel'])

    // Package frogport: a spring-loaded, rubber-tongued package launcher
    event.remove({ id: 'create:crafting/logistics/package_frogport' })
    event.shaped('create:package_frogport', [
        'R',
        'V',
        'S'
    ], {
        R: '#materialism:rubber',
        V: 'create:item_vault',
        S: 'vintageimprovements:brass_spring'
    })

    // Remove the block of andesite alloy (compacting + uncrafting)
    event.remove({ id: 'create:crafting/materials/andesite_alloy_block' })
    event.remove({ id: 'create:crafting/materials/andesite_alloy_from_block' })

    // --- Create 6 "Factory"/logistics blocks: TFC material swaps ---
    event.remove({ id: 'create:crafting/materials/transmitter' })
    event.shaped('create:transmitter', [
        'N',
        'F',
        'R'
    ], {
        N: 'minecraft:lightning_rod',
        F: 'tfc_items:copper_foil',
        R: '#c:dusts/redstone'
    })

    event.remove({ id: 'create:crafting/logistics/packager' })
    event.shaped('create:packager', [
        ' P ',
        'SAS',
        'R R'
    ], {
        P: 'vintageimprovements:steel_spring',
        S: 'tfc_metallurgy:metal/sheet/aluminum',
        A: 'create:cardboard_block',
        R: '#c:dusts/redstone'
    })

    event.remove({ id: 'create:crafting/logistics/redstone_requester' })
    event.shaped('create:redstone_requester', [
        ' S ',
        'RLR',
        ' M '
    ], {
        M: 'vintageimprovements:redstone_module',
        L: 'create:stock_link',
        S: 'tfc:metal/sheet/steel',
        R: 'tfc_items:steel_rivet'
    })

    event.remove({ id: 'create:crafting/logistics/stock_ticker' })
    event.recipes.create.sequenced_assembly(
        [Item.of('create:stock_ticker', 1)],
        'create:brass_casing',
        [
            event.recipes.createDeploying('create:brass_casing', ['create:brass_casing', 'tfc_items:gold_foil']),
            event.recipes.createDeploying('create:brass_casing', ['create:brass_casing', 'create:stock_link']),
            event.recipes.createFilling(
                'create:brass_casing',
                ['create:brass_casing', Fluid.of('tfc_metallurgy:metal/solder', 20)]
            ),
            event.recipes.createDeploying('create:brass_casing', ['create:brass_casing', Ingredient.of('#c:glass_blocks')]),
            event.recipes.createPressing('create:brass_casing', 'create:brass_casing')
        ]
    ).transitionalItem('create:brass_casing').loops(1)

    // Desk Bell: the hidden gold plate -> a TFC brass bell
    swapInputs(event, [
      ['create:crafting/logistics/desk_bell', '#c:plates/gold', 'tfc:brass_bell'],
      // Pulse Timer: certus quartz instead of vanilla amethyst
      ['create:crafting/logistics/pulse_timer', 'minecraft:amethyst_shard', 'tfc_metallurgy:ore/certus_quartz']
    ])

    // Cardboard chain: explicit pulp recipe (4x straw + water in a Mixer) so it's always
    // craftable and JEI-visible, independent of the #create:pulpifiable tag (which the
    // vanilla create:pulp recipe relies on, and which only updates on a full relog).
    event.custom({
        type: 'create:mixing',
        ingredients: [
            { item: 'tfc:straw' }, { item: 'tfc:straw' },
            { item: 'tfc:straw' }, { item: 'tfc:straw' },
            fluidIn('minecraft:water', 250)
        ],
        results: [{ id: 'create:pulp' }]
    })
    // Flexible version: any #create:pulpifiable fibre (straw/papyrus/jute/thatch/...).
    // Re-added here because the jar's own create:pulp recipe isn't loading in-pack.
    event.custom({
        type: 'create:mixing',
        ingredients: [
            { tag: 'create:pulpifiable' }, { tag: 'create:pulpifiable' },
            { tag: 'create:pulpifiable' }, { tag: 'create:pulpifiable' },
            fluidIn('minecraft:water', 250)
        ],
        results: [{ id: 'create:pulp' }]
    })

    event.custom({
        type: 'createaddition:rolling',
        ingredients: [{ item: 'create:pulp' }],
        results: [{ id: 'tfc:unrefined_paper' }]
    })

    // Package filter: zinc rods + burlap cloth (was zinc nuggets + wool)
    event.remove({ id: 'create:crafting/kinetics/package_filter' })
    event.shaped('create:package_filter', [
        'ASA'
    ], {
        A: 'tfc:metal/rod/zinc',
        S: 'tfc:burlap_cloth'
    })

    // Netherite diving gear: no netherite in TFC -> upgrade copper diving gear with
    // tungsten steel sheets (removes the smithing-template recipes).
    event.remove({ output: 'create:netherite_diving_boots' })
    event.remove({ output: 'create:netherite_diving_helmet' })
    event.shaped('create:netherite_diving_boots', [
        ' S ',
        'SBS',
        ' S '
    ], { B: 'create:copper_diving_boots', S: 'tfc_metallurgy:metal/double_sheet/tungsten_steel' })
    event.shaped('create:netherite_diving_helmet', [
        ' S ',
        'SBS',
        ' S '
    ], { B: 'create:copper_diving_helmet', S: 'tfc_metallurgy:metal/double_sheet/tungsten_steel' })

    // Item application recipes
    event.remove({type: 'create:item_application'})
    event.custom({
      type: 'create:item_application',
      ingredients: [
        { tag: 'c:stripped_logs' },
        { item: 'tfc_metallurgy:metal/sheet/aluminum' },
      ],
      results: [
        { id: 'create:andesite_casing' },
      ],
    })
    event.custom({
      type: 'create:item_application',
      ingredients: [
        { tag: 'c:stripped_logs' },
        { item: 'tfc:metal/sheet/copper' },
      ],
      results: [
        { id: 'create:copper_casing' },
      ],
    })
    event.custom({
      type: 'create:item_application',
      ingredients: [
        { tag: 'c:stripped_logs' },
        { item: 'tfc:metal/sheet/brass' },
      ],
      results: [
        { id: 'create:brass_casing' },
      ],
    })
    event.custom({
      type: 'create:item_application',
      ingredients: [
        { tag: 'c:stripped_logs' },
        { item: 'tfc_metallurgy:metal/sheet/titanium' },
      ],
      results: [
        { id: 'create:railway_casing' },
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
        { id: 'create:depot' },
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
        { id: 'create:fluid_valve' },
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
        { id: 'create:speedometer' },
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
        { id: 'create:mechanical_pump' },
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
        { id: 'create:item_drain' },
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
        { id: 'create:spout' },
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
        { id: 'create:portable_fluid_interface' },
      ],
    })

    // Mechanical saw using a circular saw component
    event.recipes.tfc.anvil('kubejs:circular_saw', 'tfc:metal/double_sheet/steel', ['hit_not_last', 'upset_any'])
        .tier(4)
    event.remove({id: 'create:crafting/kinetics/mechanical_saw'})
    event.shaped(
        Item.of('create:mechanical_saw', 1), // arg 1: output
        [
          ' A ',
          ' B ', // arg 2: the shape (array of strings)
          ' C '
        ],
        {
          A: 'kubejs:circular_saw',
          B: 'create:andesite_casing',  //arg 3: the mapping object
          C: 'create:shaft'
        }
      )
    swapInputs(event, [
      ['create:crafting/kinetics/chute', 'minecraft:iron_ingot', 'tfc:metal/ingot/steel'],
      ['create:crafting/kinetics/mechanical_press', 'minecraft:iron_block', 'vintageimprovements:concave_curving_head'],
      ['create:crafting/appliances/copper_backtank', 'minecraft:copper_block', 'tfc:metal/block/copper'],
      ['create:crafting/kinetics/metal_bracket', 'minecraft:iron_ingot', 'tfc:metal/ingot/steel'],
      ['create:brass_ladder_from_ingots_brass_stonecutting', 'tfc:metal/ingot/brass', 'tfc:metal/rod/brass'],
      ['create:copper_ladder_from_ingots_copper_stonecutting', 'tfc:metal/ingot/copper', 'tfc:metal/rod/copper']
    ])

    // Nuggets: 1 ingot (+ chisel) -> 10 nuggets
    event.remove({id: 'create:crafting/materials/copper_nugget'})
    event.remove({id: 'create:crafting/materials/copper_ingot'}) // 9 nuggets -> vanilla copper ingot
    event.shapeless('10x create:copper_nugget',[
      'tfc:metal/ingot/copper',
      '#tfc:chisels'
    ]).damageIngredient(Ingredient.of('#tfc:chisels'))
    event.custom({type: 'tfc:heating', ingredient: {item: 'create:copper_nugget'}, result_fluid: {amount: 10, id: 'tfc:metal/copper'}, temperature: 1080})
    event.custom({type: 'create:deploying', ingredients: [{item: 'tfc:metal/ingot/copper'}, {tag: 'tfc:chisels'}], results: [{id: 'create:copper_nugget', count: 10}]})

    event.remove({output: 'create:brass_nugget'})
    event.remove({id: 'create:crafting/materials/brass_ingot_from_compacting'})
    event.shapeless('10x create:brass_nugget',[
      'tfc:metal/ingot/brass',
      '#tfc:chisels'
    ]).damageIngredient(Ingredient.of('#tfc:chisels'))
    event.custom({type: 'tfc:heating', ingredient: {item: 'create:brass_nugget'}, result_fluid: {amount: 10, id: 'tfc:metal/brass'}, temperature: 930})
    event.custom({type: 'create:deploying', ingredients: [{item: 'tfc:metal/ingot/brass'}, {tag: 'tfc:chisels'}], results: [{id: 'create:brass_nugget', count: 10}]})

    event.remove({id: 'create:crafting/materials/zinc_nugget_from_decompacting'})
    event.remove({id: 'create:crafting/materials/zinc_ingot_from_compacting'})
    event.shapeless('10x create:zinc_nugget',[
      'tfc:metal/ingot/zinc',
      '#tfc:chisels'
    ]).damageIngredient(Ingredient.of('#tfc:chisels'))
    event.custom({type: 'tfc:heating', ingredient: {item: 'create:zinc_nugget'}, result_fluid: {amount: 10, id: 'tfc:metal/zinc'}, temperature: 420})
    event.custom({type: 'create:deploying', ingredients: [{item: 'tfc:metal/ingot/zinc'}, {tag: 'tfc:chisels'}], results: [{id: 'create:zinc_nugget', count: 10}]})
    swapInputs(event, [
      ['create:crafting/kinetics/metal_bracket', 'minecraft:iron_nugget', 'tfc:metal/rod/wrought_iron'],
      ['create:crafting/kinetics/encased_chain_drive', 'minecraft:iron_nugget', 'tfc_metallurgy:metal/chain/invar']
    ])

    // Recipes with bars
    // Steam engine: two recipes. If beryllium copper is used, the resulting machine is more durable, which is modeled by having
    // the recipe yield two instead of one.
    event.remove({id: 'create:crafting/kinetics/steam_engine'})
    event.recipes.create.mechanical_crafting('kubejs:unlubricated_steam_engine', [
      ' RSR ',
      ' BSB ',
      ' LGL ',
      '  C  ',
      ' WWW '
    ], {
      G: 'tfc_items:brass_gear',
      B: 'tfc:metal/sheet/brass',
      C: 'tfc:metal/block/copper',
      S: 'tfc:metal/rod/steel',
      L: 'tfc_items:lead_ring',
      R: 'tfc_items:steel_rivet',
      W: 'tfc_items:brass_screw'
    }).id('kubejs:mechanical_crafting/unlubricated_steam_engine')
    event.recipes.create.mechanical_crafting('2x kubejs:unlubricated_steam_engine', [
      ' RSR ',
      ' BSB ',
      ' LGL ',
      '  C  ',
      ' WWW '
    ], {
      G: 'tfc_items:brass_gear',
      B: 'tfc_metallurgy:metal/sheet/beryllium_copper',
      C: 'tfc:metal/block/copper',
      S: 'tfc:metal/rod/steel',
      L: 'tfc_items:lead_ring',
      R: 'tfc_items:steel_rivet',
      W: 'tfc_items:brass_screw'
    }).id('kubejs:mechanical_crafting/unlubricated_steam_engine_beryllium_copper')
    event.recipes.create.filling(
      'create:steam_engine',
      ['kubejs:unlubricated_steam_engine', Fluid.of('tfmg:lubrication_oil', 1000)]
    )
    
    swapInputs(event, [
      ['create:crafting/schematics/schematicannon', 'minecraft:iron_block', 'tfc:metal/block/steel'],
      // Recipes with springs
      ['create:crafting/kinetics/weighted_ejector', 'tfc:metal/sheet/gold', 'vintageimprovements:steel_spring'],
      // Recipes with rocks
      ['create:crafting/schematics/schematic_table', 'minecraft:smooth_stone', 'tfc_metallurgy:metal/rod/aluminum'],
      ['create:crafting/schematics/schematicannon', 'minecraft:smooth_stone', 'tfc_metallurgy:metal/double_sheet/aluminum'],
      ['create:crafting/logistics/redstone_contact', 'minecraft:cobblestone', 'tfc_metallurgy:metal/sheet/aluminum']
    ])
    // Recipes for making the Create decorative blocks
    event.recipes.create.sequenced_assembly(
      'create:cut_granite',
      'tfc:rock/hardened/granite',
      [
        event.recipes.create.cutting('tfc:rock/hardened/granite','tfc:rock/hardened/granite'),
        event.recipes.vintageimprovements.polishing('tfc:rock/hardened/granite','tfc:rock/hardened/granite')
      ]
    ).transitionalItem('tfc:rock/hardened/granite').loops(6)
    event.recipes.create.sequenced_assembly(
      'create:cut_diorite',
      'tfc:rock/hardened/diorite',
      [
        event.recipes.create.cutting('tfc:rock/hardened/diorite','tfc:rock/hardened/diorite'),
        event.recipes.vintageimprovements.polishing('tfc:rock/hardened/diorite','tfc:rock/hardened/diorite')
      ]
    ).transitionalItem('tfc:rock/hardened/diorite').loops(6)
    event.recipes.create.sequenced_assembly(
      'create:cut_limestone',
      'tfc:rock/hardened/limestone',
      [
        event.recipes.create.cutting('tfc:rock/hardened/limestone','tfc:rock/hardened/limestone'),
        event.recipes.vintageimprovements.polishing('tfc:rock/hardened/limestone','tfc:rock/hardened/limestone')
      ]
    ).transitionalItem('tfc:rock/hardened/limestone').loops(6)
    event.recipes.create.sequenced_assembly(
      'create:cut_deepslate',
      'tfc:rock/hardened/slate',
      [
        event.recipes.create.cutting('tfc:rock/hardened/slate','tfc:rock/hardened/slate'),
        event.recipes.vintageimprovements.polishing('tfc:rock/hardened/slate','tfc:rock/hardened/slate')
      ]
    ).transitionalItem('tfc:rock/hardened/slate').loops(6)
    event.recipes.create.sequenced_assembly(
      'create:cut_deepslate',
      'tfc:rock/hardened/shale',
      [
        event.recipes.create.pressing('tfc:rock/hardened/shale','tfc:rock/hardened/shale'),
        event.recipes.create.cutting('tfc:rock/hardened/shale','tfc:rock/hardened/shale'),
        event.recipes.vintageimprovements.polishing('tfc:rock/hardened/shale','tfc:rock/hardened/shale')
      ]
    ).transitionalItem('tfc:rock/hardened/shale').loops(6)
    event.recipes.create.sequenced_assembly(
      'create:cut_dripstone',
      'tfc:rock/hardened/claystone',
      [
        event.recipes.create.cutting('tfc:rock/hardened/claystone','tfc:rock/hardened/claystone'),
        event.recipes.vintageimprovements.polishing('tfc:rock/hardened/claystone','tfc:rock/hardened/claystone')
      ]
    ).transitionalItem('tfc:rock/hardened/claystone').loops(6)
    event.recipes.create.sequenced_assembly(
      'create:cut_tuff',
      'tfc:rock/hardened/tuff',
      [
        event.recipes.create.cutting('tfc:rock/hardened/tuff','tfc:rock/hardened/tuff'),
        event.recipes.vintageimprovements.polishing('tfc:rock/hardened/tuff','tfc:rock/hardened/tuff')
      ]
    ).transitionalItem('tfc:rock/hardened/tuff').loops(6)
    event.recipes.create.sequenced_assembly(
      'create:cut_andesite',
      'tfc:rock/hardened/andesite',
      [
        event.recipes.create.cutting('tfc:rock/hardened/andesite','tfc:rock/hardened/andesite'),
        event.recipes.vintageimprovements.polishing('tfc:rock/hardened/andesite','tfc:rock/hardened/andesite')
      ]
    ).transitionalItem('tfc:rock/hardened/andesite').loops(6)
    event.recipes.create.sequenced_assembly(
      'create:cut_calcite',
      'tfc:rock/hardened/chalk',
      [
        event.recipes.create.cutting('tfc:rock/hardened/chalk','tfc:rock/hardened/chalk'),
        event.recipes.vintageimprovements.polishing('tfc:rock/hardened/chalk','tfc:rock/hardened/chalk')
      ]
    ).transitionalItem('tfc:rock/hardened/chalk').loops(6)
    // Advanced rocks:
    event.recipes.create.sequenced_assembly(
      'create:veridium',
      'tfc:rock/cobble/schist',
      [
        event.recipes.createDeploying('tfc:rock/cobble/schist', ['tfc:rock/cobble/schist', 'tfc:powder/emerald']),
        event.custom({type: 'vintageimprovements:pressurizing', ingredients: [{item: 'tfc:rock/cobble/schist'}, fluidIn('tfc:metal/bismuth_bronze', 100), fluidIn('tfc:green_dye', 250)], results: [{id: 'tfc:rock/cobble/schist'}], secondary_fluid_input: 1, heat_requirement: 'heated'}),
        event.recipes.vintageimprovements.polishing('tfc:rock/cobble/schist', 'tfc:rock/cobble/schist')
      ]
    ).transitionalItem('tfc:rock/cobble/schist').loops(1)
    event.recipes.create.sequenced_assembly(
      'create:crimsite',
      'tfc:rock/cobble/chert',
      [
        event.recipes.createDeploying('tfc:rock/cobble/chert', ['tfc:rock/cobble/chert', 'tfc:powder/ruby']),
        event.custom({type: 'vintageimprovements:pressurizing', ingredients: [{item: 'tfc:rock/cobble/chert'}, fluidIn('tfc_metallurgy:metal/beryllium_copper', 100), fluidIn('tfc:red_dye', 250)], results: [{id: 'tfc:rock/cobble/chert'}], secondary_fluid_input: 1, heat_requirement: 'heated'}),
        event.recipes.vintageimprovements.polishing('tfc:rock/cobble/chert', 'tfc:rock/cobble/chert')
      ]
    ).transitionalItem('tfc:rock/cobble/chert').loops(1)
    event.recipes.create.sequenced_assembly(
      'create:asurine',
      'tfc:rock/cobble/phyllite',
      [
        event.recipes.createDeploying('tfc:rock/cobble/phyllite', ['tfc:rock/cobble/phyllite', 'tfc:powder/lapis_lazuli']),
        event.custom({type: 'vintageimprovements:pressurizing', ingredients: [{item: 'tfc:rock/cobble/phyllite'}, fluidIn('tfc_metallurgy:metal/cobalt', 100), fluidIn('tfc:blue_dye', 250)], results: [{id: 'tfc:rock/cobble/phyllite'}], secondary_fluid_input: 1, heat_requirement: 'heated'}),
        event.recipes.vintageimprovements.polishing('tfc:rock/cobble/phyllite', 'tfc:rock/cobble/phyllite')
      ]
    ).transitionalItem('tfc:rock/cobble/phyllite').loops(1)
    event.recipes.create.sequenced_assembly(
      'create:ochrum',
      'tfc:rock/cobble/claystone',
      [
        event.recipes.createDeploying('tfc:rock/cobble/claystone', ['tfc:rock/cobble/claystone', 'tfc:powder/topaz']),
        event.custom({type: 'vintageimprovements:pressurizing', ingredients: [{item: 'tfc:rock/cobble/claystone'}, fluidIn('tfc_metallurgy:metal/constantan', 100), fluidIn('tfc:brown_dye', 250)], results: [{id: 'tfc:rock/cobble/claystone'}], secondary_fluid_input: 1, heat_requirement: 'heated'}),
        event.recipes.vintageimprovements.polishing('tfc:rock/cobble/claystone', 'tfc:rock/cobble/claystone')
      ]
    ).transitionalItem('tfc:rock/cobble/claystone').loops(1)
    event.remove('create:smelting/scoria')
    event.remove('create_mechanical_extruder:extruding/scoria')
    event.recipes.create.sequenced_assembly(
      'create:scoria',
      'tfc:rock/cobble/basalt',
      [
        event.recipes.create.filling('tfc:rock/cobble/basalt', ['tfc:rock/cobble/basalt', Fluid.of('tfmg:molten_slag', 100)]),
        event.custom({type: 'vintageimprovements:pressurizing', ingredients: [{item: 'tfc:rock/cobble/basalt'}, fluidIn('tfc:metal/cast_iron', 100)], results: [{id: 'tfc:rock/cobble/basalt'}], secondary_fluid_input: 1, heat_requirement: 'heated'}),
        event.recipes.vintageimprovements.vacuumizing('tfc:rock/cobble/basalt',
          ['tfc:rock/cobble/basalt']),
        event.recipes.vintageimprovements.polishing('tfc:rock/cobble/basalt', 'tfc:rock/cobble/basalt')
      ]
    ).transitionalItem('tfc:rock/cobble/basalt').loops(1)
    // TODO: Make recipes for schoria and schroria, using slag and mechanical extruder

    // Recipes with glass
    swapInputs(event, [
      ['create:crafting/kinetics/goggles', '#c:glass_blocks', 'tfc:lens']
    ])
    // Windows
    const woodPairs = [
        ['oak', 'tfc:wood/lumber/oak'],
        ['spruce', 'tfc:wood/lumber/spruce'],
        ['birch', 'tfc:wood/lumber/birch'],
        ['acacia', 'tfc:wood/lumber/acacia'],
        ['mangrove', 'tfc:wood/lumber/mangrove'],
        ['jungle', 'afc:wood/lumber/teak'],
        ['crimson', 'afc:wood/lumber/mahogany'],
        ['warped', 'afc:wood/lumber/hevea'],
        ['dark_oak', 'tfc:wood/lumber/hickory'],
        ['ornate_iron', 'tfc:metal/rod/wrought_iron']
    ];
    addWindowRecipes(event, 'create', woodPairs);

    // Recipes with quartz

    // Recipes with wool
    event.remove({id: 'create:milling/wool'})
    event.recipes.create.milling('8x tfc:wool_yarn', {'tag': 'minecraft:wool'})
    // Automated wool to wool yarn
    event.custom({
        type: 'vintageimprovements:vibrating',
        ingredients: [{ item: 'tfc:wool' }],
        results: [{ id: 'tfc:wool_yarn', count: 8 }],
        processing_time: 300
    })

    // Recipes with rubber
    event.custom({type: 'vintageimprovements:pressurizing',
      ingredients: [
        {item: 'tfc:powder/sulfur'},
        fluidIn('afc:latex', 1000)
      ],
      results: [{id: 'afc:rubber_bar'}],
      heat_requirement: 'heated'
    })
    swapInputs(event, [
      ['create:crafting/kinetics/elevator_pulley', 'minecraft:dried_kelp_block', 'tfc:rope'],
      ['create:crafting/kinetics/hose_pulley', 'minecraft:dried_kelp_block', 'tfc:rope'],
      // Recipes with slime balls
      ['create:crafting/kinetics/sticky_mechanical_piston', 'minecraft:slime_ball', 'tfc:glue'],
      ['create:crafting/kinetics/sticker', 'minecraft:slime_ball', 'tfc:glue']
    ])

    // Item Vault recipe
    event.remove({output: 'create:item_vault'})
    event.shaped(
        Item.of('create:item_vault', 1),
        [
          ' A ',
          ' B ',
          ' A '
        ],
        {
          A: 'tfc_metallurgy:metal/sheet/titanium',
          B: '#c:chests',
        }
      )

    event.remove({input: 'create:andesite_alloy', type: 'create:stonecutting'})
    event.remove({input: 'minecraft:copper_ingot', type: 'create:stonecutting'})

    swapInputs(event, [
      [{ input: 'minecraft:copper_ingot', mod: 'create' }, 'minecraft:copper_ingot', 'tfc:metal/ingot/copper']
    ])

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
    event.remove({id: "woodencog:crafting/mechanical_crafting/potato_cannon"})
    event.remove({id: "woodencog:crafting/schematics/schematicannon"})
    event.remove({id: "woodencog:crafting/mechanical_crafting/crushing_wheel"})
    event.remove({id: "create:crafting/kinetics/basin"})

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

    // Create sequenced assembly recipes

    // Remove the existing recipe for train tracks
    event.remove({ output: 'create:track' });
    event.recipes.create.sequenced_assembly(
       [
           Item.of('create:track', 32)
       ],
       '#c:stones/smooth',
       [
           event.recipes.createDeploying(
               'create:incomplete_track',
               ['create:incomplete_track', 'tfc:metal/rod/steel']
           ),
           event.recipes.createDeploying(
               'create:incomplete_track',
               ['create:incomplete_track', 'tfc:metal/rod/steel']
           ),
           event.recipes.createPressing('create:incomplete_track', 'create:incomplete_track')
       ]
    ).transitionalItem('create:incomplete_track')
    .loops(4);
    // Remove the existing recipe for sturdy sheets
    event.remove({ output: 'create:sturdy_sheet' });
    // Sturdy sheet is terne plate: thick steel coated with a lead-tin alloy
    event.recipes.create.sequenced_assembly(
        [
            Item.of('create:sturdy_sheet', 1)
        ],
        'tfc_items:steel_heavy_sheet',
        [
            event.recipes.createFilling(
                'tfc_items:steel_heavy_sheet',
                ['tfc_items:steel_heavy_sheet', Fluid.of('tfc_metallurgy:metal/lead', 80)]
            ),
            event.recipes.createFilling(
                'tfc_items:steel_heavy_sheet',
                ['tfc_items:steel_heavy_sheet', Fluid.of('tfc:metal/tin', 20)]
            ),
            event.recipes.createPressing('tfc_items:steel_heavy_sheet', 'tfc_items:steel_heavy_sheet'),
            event.recipes.vintageimprovements.polishing('tfc_items:steel_heavy_sheet', 'tfc_items:steel_heavy_sheet').processingTime(200)
        ]
    ).transitionalItem('tfc_items:steel_heavy_sheet')
    .loops(1);

    event.remove('create:sequenced_assembly/precision_mechanism');
    event.recipes.create.sequenced_assembly([
      CreateItem.of('create:precision_mechanism', 0.85),
      CreateItem.of('tfc:metal/sheet/brass', 0.05),
      CreateItem.of('vintageimprovements:invar_wire', 0.04),
      CreateItem.of('create:cogwheel', 0.02),
      CreateItem.of('create:shaft', 0.02),
      CreateItem.of('tfc_metallurgy:metal/rod/constantan', 0.01),
      CreateItem.of('minecraft:clock', 0.01)
    ], 'tfc:metal/sheet/brass', [
      event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'create:cogwheel']),
      event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'create:large_cogwheel']),
      event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'vintageimprovements:small_invar_spring']),
      event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'tfc_metallurgy:metal/rod/constantan'])
    ]).transitionalItem('create:incomplete_precision_mechanism').loops(5)

    // Add a custom recipe for sandpaper
    event.remove({id: 'tfc:crafting/sandpaper'})

    // Sandpaper seq assembly recipe requires deployers, which require sandpaper.
    // So we need a regular crafting recipe, but more expensive
    event.shapeless('tfc:sandpaper', [
        'minecraft:paper',
        'tfc:powder/flux',
        'tfc:glue',
        'tfc:glue',
        '#c:sands',
        '#tfc:gem_powders',
        '#tfc:gem_powders'
    ])
event.recipes.create.sequenced_assembly([
    CreateItem.of('tfc:sandpaper', 0.95),
    CreateItem.of('minecraft:paper', 0.05)
], 'minecraft:paper', [ 
    event.recipes.createDeploying('minecraft:paper', ['minecraft:paper', 'tfc:glue']),
    event.recipes.createDeploying('minecraft:paper', ['minecraft:paper', 'tfc:powder/flux']),
    // Wrap the tags here:
    event.recipes.createDeploying('minecraft:paper', ['minecraft:paper', Ingredient.of('#c:sands/volcanic')]),
    event.recipes.createDeploying('minecraft:paper', ['minecraft:paper', Ingredient.of('#tfc:gem_powders')]),
    event.recipes.createPressing('minecraft:paper', 'minecraft:paper')
]).transitionalItem('minecraft:paper').loops(1)

    event.remove({output: 'create:rose_quartz'})
    event.recipes.create.sequenced_assembly([
     CreateItem.of('create:rose_quartz', 0.95),
     CreateItem.of('tfc_metallurgy:ore/certus_quartz', 0.05)
    ], 'tfc_metallurgy:ore/certus_quartz', [
     event.recipes.createDeploying('tfc_metallurgy:ore/certus_quartz', ['tfc_metallurgy:ore/certus_quartz', 'minecraft:redstone']),
     event.recipes.vintageimprovements.vibrating('tfc_metallurgy:ore/certus_quartz', 'tfc_metallurgy:ore/certus_quartz'),
     event.custom({type: 'create_optical:focusing', ingredients: [{item: 'tfc_metallurgy:ore/certus_quartz'}], results: [{id: 'tfc_metallurgy:ore/certus_quartz'}]})
    ]).transitionalItem('tfc_metallurgy:ore/certus_quartz').loops(6)

    // Gunpowder recipes
    event.remove("tfc:crafting/gunpowder")
    event.remove("tfc:crafting/gunpowder_with_graphite")
    event.remove("create:filling/gunpowder")
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


})