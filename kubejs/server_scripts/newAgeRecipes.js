ServerEvents.recipes(event => {

  event.remove({id: 'create_new_age:shaped/connector'})
  event.remove({id: 'create_new_age:shaped/connector_mirrored'})
  event.remove({id: 'create_new_age:cutting/copper_sheet'})
  event.remove({id: 'create_new_age:cutting/overcharged_iron_sheet'})
  event.remove({id: 'create_new_age:cutting/overcharged_golden_sheet'})
  event.remove({id: 'create_new_age:diamond_wire'})
  event.remove({id: 'create_new_age:thorium_multiplication'})
  event.remove({output: /create_new_age:overcharged.*/})

  event.remove({id: 'create_new_age:shapeless/basic_energiser'})
  event.custom({
      type: 'create:item_application',
      ingredients: [
        { item: 'create:andesite_casing' },
        { item: 'minecraft:lightning_rod' },
      ],
      results: [
        { id: 'create_new_age:basic_energiser', count: 1 },
      ],
    })

  event.remove({id: 'create_new_age:shaped/generator_coil'})
  event.recipes.create.mechanical_crafting('create_new_age:generator_coil', [
    '  C C  ', ' SWSWS ', 'CWM MWC', ' S A S ', 'CWM MWC', ' SWSWS ', '  C C  ',
  ], {
    A: 'create:shaft', M: 'tfc_metallurgy:metal/rod/manganese',
    W: 'tfc_metallurgy:metal/sheet/tungsten_steel', C: 'tfmg:electromagnetic_coil',
    S: 'firmalife:metal/sheet/stainless_steel'
  })

  // Magnet recipes
  // Tier 1: Magnetite magnet
  event.recipes.create.compacting('create_new_age:magnetite_block', '40x tfc:powder/magnetite')
  event.remove({ id: 'create_new_age:shaped/redstone_magnet' });
  event.recipes.create.sequenced_assembly([Item.of('create_new_age:redstone_magnet', 1)],
    'create_new_age:magnetite_block', [
      event.recipes.createDeploying('create_new_age:magnetite_block', ['create_new_age:magnetite_block', 'kubejs:powder/zinc']),
      event.recipes.vintageimprovements.vibrating('create_new_age:magnetite_block', 'create_new_age:magnetite_block'),
      event.recipes.createPressing('create_new_age:magnetite_block', 'create_new_age:magnetite_block'),
      event.custom({ type: 'create_new_age:energising', energy_needed: 1000,
        ingredients: [{ item: 'create_new_age:magnetite_block'}],
        results: [{ id: 'create_new_age:magnetite_block'}] })
  ]).transitionalItem('create_new_age:magnetite_block').loops(4);
  // Tier 3: Layered magnet -> Strong Ferrite Magnet (DISABLED)
  event.remove({ id: 'create_new_age:shaped/layered_magnet' });
  event.recipes.create.sequenced_assembly(
    [
        Item.of('create_new_age:layered_magnet', 1)
    ],
    // Input item
    'tfmg:magnetic_alloy_ingot',
    [
        event.recipes.createDeploying(
            'tfmg:magnetic_alloy_ingot',
            ['tfmg:magnetic_alloy_ingot', 'tfc:powder/hematite']
        ),
        event.recipes.createDeploying(
            'tfmg:magnetic_alloy_ingot',
            ['tfmg:magnetic_alloy_ingot', 'kubejs:powder/zinc']
        ),
        event.recipes.vintageimprovements.vibrating('tfmg:magnetic_alloy_ingot',
            'tfmg:magnetic_alloy_ingot'),
        event.recipes.createFilling(
          'tfmg:magnetic_alloy_ingot',
          ['tfmg:magnetic_alloy_ingot', Fluid.of('tfc_metallurgy:metal/manganese', 50)]
        ),
        event.custom({type: 'vintageimprovements:pressurizing',
          ingredients: [{item: 'tfmg:magnetic_alloy_ingot'}, {item: 'tfc:powder/hematite'}],
          results: [{id: 'tfmg:magnetic_alloy_ingot'}],
          heat_requirement: 'heated'
        }),
        event.custom({
          type: 'create_new_age:energising',
          energy_needed: 10000,
          ingredients: [
            { item: 'tfmg:magnetic_alloy_ingot'},
          ],
          results: [
            { id: 'tfmg:magnetic_alloy_ingot'},
          ]
        })
    ]
  ).transitionalItem('tfmg:magnetic_alloy_ingot')
  .loops(5);
  // Tier 4: Fluxuated Magnetite -> Alnico Magnet
  event.remove({id: 'create_new_age:shaped/fluxuated_magnetite'})
  // First step: alnico core
  event.recipes.create.sequenced_assembly(
    [Item.of('kubejs:alnico_core', 1)],
    'tfc_metallurgy:metal/double_sheet/alnico',
    [
      event.recipes.createFilling(
        'tfc_metallurgy:metal/double_sheet/alnico',
        ['tfc_metallurgy:metal/double_sheet/alnico', Fluid.of('tfc_metallurgy:metal/solder', 50)]
      ),
      event.recipes.createDeploying(
        'tfc_metallurgy:metal/double_sheet/alnico',
        ['tfc_metallurgy:metal/double_sheet/alnico', 'tfc_metallurgy:metal/double_sheet/alnico']
      ),
      event.recipes.createPressing('tfc_metallurgy:metal/double_sheet/alnico', 'tfc_metallurgy:metal/double_sheet/alnico')
    ]
  ).transitionalItem('tfc_metallurgy:metal/double_sheet/alnico')
  .loops(3)
  // Second step: polarize alnico core
  event.custom({
    type: 'tfmg:polarizing',
    ingredients: [{ item: 'kubejs:alnico_core' }],
    results: [{ id: 'kubejs:polarized_alnico_core' }]
  })
  // Third step: Assemble the magnet
  event.recipes.create.sequenced_assembly(
    [
        Item.of('create_new_age:fluxuated_magnetite', 1)
    ],
    // Input item
    'kubejs:polarized_alnico_core',
    [
        event.recipes.createDeploying(
            'kubejs:alnico_core',
            ['kubejs:alnico_core', 'tfc_metallurgy:metal/rod/cobalt']
        ),
        event.recipes.createDeploying(
            'kubejs:alnico_core',
            ['kubejs:alnico_core', 'tfc_metallurgy:metal/rod/cobalt']
        ),
        event.recipes.createPressing('kubejs:alnico_core', 'kubejs:alnico_core'),
        event.custom({
          type: 'create_new_age:energising',
          energy_needed: 50000,
          ingredients: [
            { item: 'kubejs:alnico_core'},
          ],
          results: [
            { id: 'kubejs:alnico_core'},
          ]
        }),
        event.recipes.createFilling(
          'kubejs:alnico_core',
          ['kubejs:alnico_core', Fluid.of('firmalife:metal/chromium', 100)]
        ),
        event.recipes.vintageimprovements.vibrating('kubejs:alnico_core',
            'kubejs:alnico_core')
    ]
  ).transitionalItem('kubejs:alnico_core')
  .loops(1);
  // Tier 5: Netherite Magnet -> Neodymium Magnet
  event.remove({id: 'create_new_age:shaped/netherite_magnet'})
  event.recipes.create.sequenced_assembly(
    [
        Item.of('create_new_age:netherite_magnet', 1)
    ],
    // Input item
    'tfc_metallurgy:metal/sheet/electrum',
    [
        event.recipes.createDeploying(
            'tfc_metallurgy:metal/sheet/electrum',
            ['tfc_metallurgy:metal/sheet/electrum', 'tfc_metallurgy:metal/rod/ferroboron']
        ),
        event.recipes.createFilling(
          'tfc_metallurgy:metal/sheet/electrum',
          ['tfc_metallurgy:metal/sheet/electrum', Fluid.of('tfc_metallurgy:metal/solder', 20)]
        ),
        event.recipes.createDeploying(
            'tfc_metallurgy:metal/sheet/electrum',
            ['tfc_metallurgy:metal/sheet/electrum', 'kubejs:powder/neodymium']
        ),
        event.custom({type: 'vintageimprovements:vacuumizing',
          ingredients: [{item: 'tfc_metallurgy:metal/sheet/electrum'}],
          results: [{id: 'tfc_metallurgy:metal/sheet/electrum'}],
          heat_requirement: 'superheated'
        }),
        event.recipes.createPressing('tfc_metallurgy:metal/sheet/electrum', 'tfc_metallurgy:metal/sheet/electrum'),
        event.recipes.vintageimprovements.polishing(
          'tfc_metallurgy:metal/sheet/electrum',
          'tfc_metallurgy:metal/sheet/electrum'),
        event.custom({
          type: 'create_new_age:energising',
          energy_needed: 100000,
          ingredients: [
            { item: 'tfc_metallurgy:metal/sheet/electrum'},
          ],
          results: [
            { id: 'tfc_metallurgy:metal/sheet/electrum'},
          ]
        })
    ]
  ).transitionalItem('tfc_metallurgy:metal/sheet/electrum')
  .loops(5);

  // Remove the existing recipe for carbon brushes
  event.remove({ id: 'create_new_age:shaped/carbon_brushes' });
  event.recipes.create.sequenced_assembly(
      [
          Item.of('create_new_age:carbon_brushes', 1)
      ],
      // Input item
      'tfmg:coal_coke_block',
      [
          event.recipes.createDeploying(
              'tfmg:coal_coke_block',
              ['tfmg:coal_coke_block', 'create:shaft']
          ),
          event.recipes.createPressing('tfmg:coal_coke_block', 'tfmg:coal_coke_block'),
          event.custom({
            type: 'create_new_age:energising',
            energy_needed: 5000,
            ingredients: [
              { item: 'tfmg:coal_coke_block'},
            ],
            results: [
              { id: 'tfmg:coal_coke_block'},
            ]
          }),
          event.recipes.createDeploying(
              'tfmg:coal_coke_block',
              ['tfmg:coal_coke_block', 'tfc:metal/sheet/steel']
          ),
          event.recipes.createDeploying(
              'tfmg:coal_coke_block',
              ['tfmg:coal_coke_block', 'tfc:metal/sheet/steel']
          ),
          event.recipes.createDeploying(
              'tfmg:coal_coke_block',
              ['tfmg:coal_coke_block', 'tfc:metal/rod/steel']
          ),
          event.recipes.createDeploying(
              'tfmg:coal_coke_block',
              ['tfmg:coal_coke_block', 'tfc:metal/rod/steel']
          ),
          event.recipes.createPressing('tfmg:coal_coke_block', 'tfmg:coal_coke_block')
      ]
    ).transitionalItem('tfmg:coal_coke_block')
    .loops(1);

    // Advanced energizer recipes
    // T2
    event.remove({ id: 'create_new_age:shaped/advanced_energiser' });
    event.recipes.create.sequenced_assembly(
      [
          Item.of('create_new_age:advanced_energiser', 1)
      ],
      // Input item
      'create_new_age:basic_energiser',
      // Sequence of assembly steps
      [
          event.recipes.createDeploying(
              'create_new_age:basic_energiser',
              ['create_new_age:basic_energiser', 'create_new_age:magnetite_block']
          ),
          event.recipes.createDeploying(
              'create_new_age:basic_energiser',
              ['create_new_age:basic_energiser', 'tfmg:electromagnetic_coil']
          ),
          event.recipes.createDeploying(
              'create_new_age:basic_energiser',
              ['create_new_age:basic_energiser', 'minecraft:lightning_rod']
          ),
          event.custom({type: 'vintageimprovements:hammering', ingredients: [{item: 'create_new_age:basic_energiser'}], results: [{id: 'create_new_age:basic_energiser'}], hammer_blows: 1, anvil_block: 'tfc:metal/anvil/steel'}),
          event.custom({
            type: 'create_new_age:energising',
            energy_needed: 1000,
            ingredients: [
              { item: 'create_new_age:basic_energiser'},
            ],
            results: [
              { id: 'create_new_age:basic_energiser'},
            ]
          })
      ]
    ).transitionalItem('create_new_age:basic_energiser')
    .loops(3);
    // T3
    event.remove({id: 'create_new_age:shaped/reinforced_energiser'})
    event.recipes.create.mechanical_crafting('create_new_age:reinforced_energiser', [
      'ABA',
      'CDC',
      'AEA'
    ], {
      A: 'create_new_age:layered_magnet',
      B: 'tfmg:capacitor_item',
      C: 'tfmg:electromagnetic_coil',
      D: 'create_new_age:advanced_energiser',
      E: 'tfmg:circuit_board'
    })
    
    // Motor recipes
    // T1: Basic motor
    event.remove({id: 'create_new_age:shaped/basic_motor'})
    event.recipes.create.mechanical_crafting('create_new_age:basic_motor', [
      'B H B',
      ' CDF ',
      ' EAGG',
      ' CDF ',
      'B   B'
    ], {
      A: 'tfmg:electrical_switch',
      B: 'tfc:metal/rod/steel',
      C: 'tfmg:electromagnetic_coil',
      D: 'create_new_age:magnetite_block',
      E: 'tfmg:magnetic_alloy_ingot',
      F: 'tfmg:steel_mechanism',
      G: 'create:shaft',
      H: 'createaddition:copper_wire'
    })
    // T1.5: Basic motor extension
    event.remove({id: 'create_new_age:shaped/basic_motor_extension'})
    event.recipes.create.mechanical_crafting('create_new_age:basic_motor_extension', [
      'B   B',
      ' CDF ',
      'IDCA ',
      ' CDF ',
      'B   B'
    ], {
      A: 'tfmg:electrical_switch',
      B: 'tfc:metal/rod/steel',
      C: 'tfmg:electromagnetic_coil',
      D: 'create_new_age:redstone_magnet',
      F: 'create:precision_mechanism',
      I: 'railways:smokestack_diesel'
    })
    // T2: Advanced motor
    event.remove({id: 'create_new_age:shaped/advanced_motor'})
    event.recipes.create.mechanical_crafting('create_new_age:advanced_motor', [
      'B H B',
      ' CDF ',
      ' EAGG',
      ' CDF ',
      'B   B'
    ], {
      A: 'tfmg:electrical_switch',
      B: 'tfc_metallurgy:metal/rod/manganese',
      C: 'tfmg:electromagnetic_coil',
      D: 'create_new_age:layered_magnet',
      E: 'tfmg:magnetic_alloy_ingot',
      F: 'tfmg:steel_mechanism',
      G: 'create:shaft',
      H: 'createaddition:gold_wire'
    })

    // T2.5: Advanced motor extension
    event.remove({id: 'create_new_age:mechanical_crafting/advanced_motor_extension'})
    event.recipes.create.mechanical_crafting('create_new_age:advanced_motor_extension', [
      'B   B',
      ' CDF ',
      'IDCA ',
      ' CDF ',
      'B   B'
    ], {
      A: 'tfmg:electrical_switch',
      B: 'tfc_metallurgy:metal/rod/tungsten_steel',
      C: 'tfmg:electromagnetic_coil',
      D: 'create_new_age:fluxuated_magnetite',
      F: 'create:precision_mechanism',
      I: 'railways:smokestack_diesel'
    })

    // T3: Reinforced motor
    event.remove({id: 'create_new_age:mechanical_crafting/reinforced_motor'})
    event.recipes.create.mechanical_crafting('create_new_age:reinforced_motor', [
      'B H B',
      ' CDF ',
      ' EAGG',
      ' CDF ',
      'B   B'
    ], {
      A: 'tfmg:electrical_switch',
      B: 'tfc_metallurgy:metal/rod/tungsten_steel',
      C: 'tfmg:electromagnetic_coil',
      D: 'create_new_age:netherite_magnet',
      E: 'tfmg:magnetic_alloy_ingot',
      F: 'tfmg:steel_mechanism',
      G: 'create:shaft',
      H: 'vintageimprovements:silver_wire'
    })

    // Heat transfer elements
    event.remove({ output: 'create_new_age:heat_pipe' });
    event.recipes.create.sequenced_assembly(
      [
          Item.of('create_new_age:heat_pipe', 4)
      ],
      'tfc:metal/sheet/copper',
      [
          event.recipes.createPressing('tfc:metal/sheet/copper', 'tfc:metal/sheet/copper'),
          event.recipes.createDeploying(
              'tfc:metal/sheet/copper',
              ['tfc:metal/sheet/copper', 'tfc:metal/sheet/copper']
          ),
          event.custom({type: 'vintageimprovements:curving', ingredients: [{item: 'tfc:metal/sheet/copper'}], results: [{id: 'tfc:metal/sheet/copper'}], mode: 3}),
          event.custom({type: 'vintageimprovements:vacuumizing',
            ingredients: [{item: 'tfc:metal/sheet/copper'}, {fluid: 'tfmg:cooling_fluid', amount: 1000, type: 'neoforge:single'}],
            results: [{id: 'tfc:metal/sheet/copper'}],
            heat_requirement: 'heated'
          }),
          event.recipes.createCutting('tfc:metal/sheet/copper', 'tfc:metal/sheet/copper')
      ]
    ).transitionalItem('tfc:metal/sheet/copper')
    .loops(1);
    // TODO: revisit base item if Design n Decor copper_gas_tank is added later
    event.remove({ id: 'create_new_age:shaped/heat_pump' });
    event.recipes.create.sequenced_assembly(
      [
          Item.of('create_new_age:heat_pump', 1)
      ],
      'create:fluid_tank',
      [
          event.recipes.createFilling(
              'create:fluid_tank',
              ['create:fluid_tank', Fluid.of('tfmg:cooling_fluid', 1000)]
          ),
          event.recipes.createDeploying(
              'create:fluid_tank',
              ['create:fluid_tank', 'create:mechanical_pump']
          ),
          event.recipes.createDeploying(
              'create:fluid_tank',
              ['create:fluid_tank', 'tfc_items:handful_steel_screws']
          ),
          event.custom({type: 'vintageimprovements:hammering',
            ingredients: [{item: 'create:fluid_tank'}],
            results: [{id: 'create:fluid_tank'}],
            hammer_blows: 3, anvil_block: 'tfc:metal/anvil/steel'
          }),
          event.recipes.createDeploying(
              'create:fluid_tank',
              ['create:fluid_tank', 'create_new_age:heat_pipe']
          ),
          event.recipes.createDeploying(
              'create:fluid_tank',
              ['create:fluid_tank', 'create_new_age:heat_pipe']
          )
      ]
    ).transitionalItem('create:fluid_tank')
    .loops(1);
    event.remove({ id: 'create_new_age:shaped/heater' });
    event.recipes.create.sequenced_assembly(
      [
          Item.of('create_new_age:heater', 1)
      ],
      'create_new_age:heat_pipe',
      [
          event.recipes.create.pressing('create_new_age:heat_pipe', 'create_new_age:heat_pipe'),
          event.recipes.createDeploying(
            'create_new_age:heat_pipe',
            ['create_new_age:heat_pipe', 'tfc_metallurgy:metal/sheet/tungsten']
          ),
          event.recipes.createDeploying(
              'create_new_age:heat_pipe',
              ['create_new_age:heat_pipe', 'tfc:fire_clay']
          ),
          event.custom({type: 'vintageimprovements:curving', ingredients: [{item: 'create_new_age:heat_pipe'}], results: [{id: 'create_new_age:heat_pipe'}], mode: 2})
      ]
    ).transitionalItem('create_new_age:heat_pipe')
    .loops(3);
    // Stirling engine
    event.remove({ id: 'create_new_age:shaped/stirling_engine' });
    event.recipes.create.sequenced_assembly(
      [
          Item.of('create_new_age:stirling_engine', 1)
      ],
      // Input item
      'tfc:metal/block/copper_slab',
      [
          event.recipes.createDeploying(
              'tfc:metal/block/copper_slab',
              ['tfc:metal/block/copper_slab', 'tfc_metallurgy:metal/sheet/tungsten']
          ),
          event.recipes.createDeploying(
              'tfc:metal/block/copper_slab',
              ['tfc:metal/block/copper_slab', 'firmalife:metal/sheet/stainless_steel']
          ),
          event.recipes.create.pressing('tfc:metal/block/copper_slab', 'tfc:metal/block/copper_slab'),
          event.recipes.createDeploying(
            'tfc:metal/block/copper_slab',
            ['tfc:metal/block/copper_slab', 'create:flywheel']
          ),
          event.recipes.createDeploying(
              'tfc:metal/block/copper_slab',
              ['tfc:metal/block/copper_slab', 'create:shaft']
          ),
          event.recipes.vintageimprovements.vacuumizing('tfc:metal/sheet/copper', ['tfc:metal/sheet/copper']),
      ]
    ).transitionalItem('tfc:metal/block/copper_slab')
    .loops(1);
    // Basic solar plate
    event.remove({ id: 'create_new_age:shaped/basic_solar_heating_plate' });
    event.recipes.create.sequenced_assembly(
      [
          Item.of('create_new_age:basic_solar_heating_plate', 1)
      ],
      // Input item
      'tfmg:steel_casing',
      [
          event.recipes.createDeploying(
              'tfmg:steel_casing',
              ['tfmg:steel_casing', 'create_new_age:heat_pipe']
          ),
          event.recipes.createDeploying(
              'tfmg:steel_casing',
              ['tfmg:steel_casing', 'tfc:lens']
          ),
          event.recipes.createDeploying(
            'tfmg:steel_casing',
            ['tfmg:steel_casing', 'tfc:metal/rod/steel']
          ),
          event.recipes.createDeploying(
              'tfmg:steel_casing',
              ['tfmg:steel_casing', 'minecraft:glass_pane']
          )
      ]
    ).transitionalItem('tfmg:steel_casing')
    .loops(1);
    // Advanced solar plate
    event.remove({ id: 'create_new_age:shaped/advanced_solar_heating_plate' });
    event.recipes.create.sequenced_assembly(
      [
          Item.of('create_new_age:advanced_solar_heating_plate', 1)
      ],
      // Input item
      'tfmg:heavy_machinery_casing',
      [
          event.recipes.createDeploying(
              'tfmg:heavy_machinery_casing',
              ['tfmg:heavy_machinery_casing', 'create_new_age:heat_pipe']
          ),
          event.recipes.createDeploying(
              'tfmg:heavy_machinery_casing',
              ['tfmg:heavy_machinery_casing', 'tfc:lens']
          ),
          event.recipes.createDeploying(
            'tfmg:heavy_machinery_casing',
            ['tfmg:heavy_machinery_casing', 'tfc:metal/rod/steel']
          ),
          event.recipes.createDeploying(
              'tfmg:heavy_machinery_casing',
              ['tfmg:heavy_machinery_casing', 'tfc:lens']
          ),
          event.recipes.createDeploying(
            'tfmg:heavy_machinery_casing',
            ['tfmg:heavy_machinery_casing', 'tfc:metal/rod/steel']
          ),
          event.recipes.createDeploying(
              'tfmg:heavy_machinery_casing',
              ['tfmg:heavy_machinery_casing', 'minecraft:glass_pane']
          )
      ]
    ).transitionalItem('tfmg:heavy_machinery_casing')
    .loops(1);

    // Reactor parts
    event.remove('create_new_age:sequenced_assembly/reactor_casing')
    event.custom({
      type: 'create:item_application',
      ingredients: [
        { item: 'tfmg:rebar_concrete' },
        { item: 'tfc_metallurgy:metal/sheet/lead' },
      ],
      results: [
        { id: 'create_new_age:reactor_casing' },
      ],
    })
    event.remove({ id: 'create_new_age:shapeless/reactor_heat_vent' });
    event.recipes.create.sequenced_assembly(
      [
          Item.of('create_new_age:reactor_heat_vent', 1)
      ],
      'create_new_age:reactor_casing',
      [
          event.recipes.createDeploying(
            'create_new_age:reactor_casing',
            ['create_new_age:reactor_casing', 'tfc_metallurgy:metal/sheet/tungsten']
          ),
          event.recipes.createDeploying(
              'create_new_age:reactor_casing',
              ['create_new_age:reactor_casing', 'tfc:fire_clay']
          ),
          event.custom({type: 'vintageimprovements:curving', ingredients: [{item: 'create_new_age:reactor_casing'}], results: [{id: 'create_new_age:reactor_casing'}], mode: 2})
      ]
    ).transitionalItem('create_new_age:reactor_casing')
    .loops(3);
    // Reactor rods
    event.remove({id: 'create_new_age:mechanical_crafting/reactor_rod'})
    event.recipes.create.mechanical_crafting('create_new_age:reactor_rod', [
      'BBBBB',
      'CDDDC',
      'CEAEC',
      'CFAFC',
      'CGAGC',
      'CDDDC',
      'BBBBB'
    ], {
      A: 'create_new_age:nuclear_fuel',
      B: 'create_new_age:reactor_casing',
      C: 'create_new_age:reactor_glass',
      D: 'firmalife:metal/sheet/stainless_steel',
      E: 'tfc:metal/rod/silver',
      F: 'tfc_metallurgy:metal/rod/ferroboron',
      G: 'tfc_metallurgy:metal/rod/graphite'
    })

    event.remove('create_new_age:thorium/thorium_crushing')
    event.custom({type: 'create_optical:focusing',
      ingredients: [{item: 'tfc_metallurgy:metal/ingot/thorium'}],
      results: [{id: 'create_new_age:radioactive_thorium'}],
      processing_time: 100,
      mode: 3
    })
    event.custom({type: 'vintageimprovements:centrifugation',
      ingredients: [
        {item: 'tfc_metallurgy:metal/ingot/uranium'},
        {fluid: 'tfmg:sulfuric_acid', amount: 500, type: 'neoforge:single'}
      ],
      results: [{id: 'create_new_age:radioactive_thorium', chance: 0.5}],
      processing_time: 500,
      minimal_rpm: 256
    })

    event.remove('create_new_age:sequenced_assembly/nuclear_fuel')
    event.recipes.create.sequenced_assembly(
      [
          Item.of('create_new_age:nuclear_fuel', 1)
      ],
      'tfc_metallurgy:metal/double_sheet/zircaloy',
      [
          event.recipes.createDeploying(
            'tfc_metallurgy:metal/double_sheet/zircaloy',
            ['tfc_metallurgy:metal/double_sheet/zircaloy', 'create_new_age:radioactive_thorium']
          ),
          event.recipes.create.pressing('tfc_metallurgy:metal/double_sheet/zircaloy', 'tfc_metallurgy:metal/double_sheet/zircaloy'),
          event.recipes.createDeploying(
              'tfc_metallurgy:metal/double_sheet/zircaloy',
              ['tfc_metallurgy:metal/double_sheet/zircaloy', 'tfc_metallurgy:metal/double_sheet/zircaloy']
          ),
          event.custom({type: 'vintageimprovements:curving', ingredients: [{item: 'tfc_metallurgy:metal/double_sheet/zircaloy'}], results: [{id: 'tfc_metallurgy:metal/double_sheet/zircaloy'}], mode: 3})
      ]
    ).transitionalItem('tfc_metallurgy:metal/double_sheet/zircaloy')
    .loops(1);

    // Circuit fabrication
    // TODO: Item.of('#tfc:silica_sand') doesn't work — tags need Ingredient format, not Item.of. Also #tfc:silica_sand may be empty.
    //event.recipes.create.sequenced_assembly(
    //  [
    //      Item.of('kubejs:silicon_wafer', 5)
    //  ],
    //  Item.of('#tfc:silica_sand', 5),
    //  [
    //    event.recipes.vintageimprovements.pressurizing('#tfc:silica_sand', 'tfcweather:sand/sand_layer/white').heated().processingTime(10),
    //    event.recipes.create.pressing('tfcweather:sand/sand_layer/white', 'tfcweather:sand/sand_layer/white'),
    //    event.recipes.vintageimprovements.pressurizing('#tfc:silica_sand', 'tfcweather:sand/sand_layer/white').heated().processingTime(20),
    //    event.recipes.create.cutting('tfcweather:sand/sand_layer/white', 'tfcweather:sand/sand_layer/white')
    //  ]
    //).transitionalItem('tfcweather:sand/sand_layer/white')
    //.loops(1);
    // Blank circuit
    // event.remove('create_new_age:pressing/blank_circuit')
    // event.recipes.create.sequenced_assembly(
    //   [
    //       Item.of('create_new_age:blank_circuit', 1)
    //   ],
    //   // Input item
    //   'kubejs:silicon_wafer',
    //   [
    //     event.recipes.create.filling('kubejs:silicon_wafer', ['kubejs:silicon_wafer', Fluid.of('tfc_metallurgy:metal/boron', 50)]),
    //     event.recipes.createDeploying('kubejs:silicon_wafer', ['kubejs:silicon_wafer', 'tfc:pure_phosphorus']),
    //     event.recipes.create.filling('kubejs:silicon_wafer', ['kubejs:silicon_wafer', Fluid.of('tfmg:molten_plastic', 100)]),
    //     /*event.recipes.create_optical.focusing(
    //       ['kubejs:silicon_wafer'],
    //       ['kubejs:silicon_wafer'],
    //       500,
    //       2
    //     ),*/
    //     event.recipes.vintageimprovements.laser_cutting('kubejs:silicon_wafer', 'kubejs:silicon_wafer').energyCost(1000),
    //     event.recipes.create.filling('kubejs:silicon_wafer', ['kubejs:silicon_wafer', Fluid.of('minecraft:water', 100)]),
    //     event.recipes.vintageimprovements.vibrating('kubejs:silicon_wafer','kubejs:silicon_wafer').processingTime(500),
    //     event.recipes.create.filling('kubejs:silicon_wafer', ['kubejs:silicon_wafer', Fluid.of('minecraft:water', 100)])
    //   ]
    // ).transitionalItem('kubejs:silicon_wafer')
    // .loops(1);
    // event.remove('create_new_age:deploying/copper_circuit')
    // event.recipes.create.sequenced_assembly(
    //   [
    //       CreateItem.of('create_new_age:copper_circuit', 85.0),
    //       CreateItem.of('createaddition:copper_wire', 5.0),
    //       CreateItem.of('tfmg:resistor', 5.0),
    //       CreateItem.of('tfmg:capacitor_item', 5.0)
    //   ],
    //   // Input item
    //   'create_new_age:blank_circuit',
    //   [
    //     event.recipes.createDeploying('create_new_age:blank_circuit', ['create_new_age:blank_circuit', 'createaddition:copper_wire']),
    //     event.recipes.createDeploying('create_new_age:blank_circuit', ['create_new_age:blank_circuit', 'tfmg:resistor']),
    //     event.recipes.createDeploying('create_new_age:blank_circuit', ['create_new_age:blank_circuit', 'tfmg:capacitor_item']),
    //     event.recipes.createDeploying('create_new_age:blank_circuit', ['create_new_age:blank_circuit', 'createaddition:copper_wire']),
    //     event.recipes.vintageimprovements.polishing('create_new_age:blank_circuit', 'create_new_age:blank_circuit')
    //   ]
    // ).transitionalItem('create_new_age:blank_circuit')
    // .loops(3);

    // Lamp post: steel rods instead of andesite alloy
    event.replaceInput({ id: 'create_new_age:shaped/lamp_post' }, 'create:andesite_alloy', 'tfc:metal/rod/steel')
}
)