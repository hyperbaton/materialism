ServerEvents.recipes(event => {

  event.remove({id: 'create_new_age:shaped/connector'})
  event.remove({id: 'create_new_age:shaped/connector_mirrored'})
  event.remove({id: 'create_new_age:cutting/copper_sheet'})
  event.remove({id: 'create_new_age:cutting/overcharged_iron_sheet'})
  event.remove({id: 'create_new_age:cutting/overcharged_golden_sheet'})
  event.remove({id: 'create_new_age:diamond_wire'})
  event.remove({id: 'create_new_age:thorium_multiplication'})
  event.remove({output: /create_new_age:overcharged.*/})

  event.remove({id: 'create_new_age:shapeless/energiser_t1'})
  event.custom({
      type: 'create:item_application',
      ingredients: [
        { item: 'create:andesite_casing' },
        { item: 'minecraft:lightning_rod' },
      ],
      results: [
        { item: 'create_new_age:energiser_t1' },
      ],
    })

  // New recipe for generator coil
  event.remove({id: 'create_new_age:shaped/generator_coil'})
  event.recipes.create.mechanical_crafting('create_new_age:generator_coil', [
    '  C C  ',
    ' SWSWS ',
    'CWM MWC',
    ' S A S ',
    'CWM MWC',
    ' SWSWS ',
    '  C C  ',
  ], {
    A: 'create:shaft',
    M: 'tfc_metallurgy:metal/rod/manganese',
    W: 'tfc_metallurgy:metal/sheet/tungsten_steel',
    C: 'tfmg:copper_coil',
    S: 'firmalife:metal/sheet/stainless_steel'
  })

  // Magnet recipes
  // Tier 1: Magnetite magnet
  event.recipes.create.compacting('create_new_age:magnetite_block', '40x tfc:powder/magnetite')
  // Tier 2: Redstone magnet -> Weak Ferrite Magnet
  event.remove({ id: 'create_new_age:shaped/redstone_magnet' });
  event.recipes.create.sequenced_assembly(
    [
        Item.of('create_new_age:redstone_magnet', 1)
    ],
    // Input item
    'create_new_age:magnetite_block',
    // Sequence of assembly steps
    [
        event.recipes.createDeploying(
            'create_new_age:magnetite_block',
            ['create_new_age:magnetite_block', 'createbb:crushed_zinc']
        ),
        event.recipes.vintageimprovements.vibrating('create_new_age:magnetite_block',
            'create_new_age:magnetite_block'),
        event.recipes.createPressing('create_new_age:magnetite_block', 'create_new_age:magnetite_block'),
        event.custom({
          type: 'create_new_age:energising',
          energy_needed: 1000,
          ingredients: [
            { item: 'create_new_age:magnetite_block'},
          ],
          results: [
            { item: 'create_new_age:magnetite_block'},
          ]
        })        
    ]
  ).transitionalItem('create_new_age:magnetite_block')
  .loops(4);
  // Tier 3: Layered magnet -> Strong Ferrite Magnet
  event.remove({ id: 'create_new_age:shaped/layered_magnet' });
  event.recipes.create.sequenced_assembly(
    [
        Item.of('create_new_age:layered_magnet', 1)
    ],
    // Input item
    'tfmg:magnetic_ingot',
    [
        event.recipes.createDeploying(
            'tfmg:magnetic_ingot',
            ['tfmg:magnetic_ingot', 'tfc:powder/hematite']
        ),
        event.recipes.createDeploying(
            'tfmg:magnetic_ingot',
            ['tfmg:magnetic_ingot', 'createbb:crushed_zinc']
        ),
        event.recipes.vintageimprovements.vibrating('tfmg:magnetic_ingot',
            'tfmg:magnetic_ingot'),
        event.recipes.createFilling(
          'tfmg:magnetic_ingot',
          ['tfmg:magnetic_ingot', Fluid.of('tfc_metallurgy:metal/manganese', 50)]
        ),
        event.recipes.vintageimprovements.pressurizing(
          'tfmg:magnetic_ingot',
          ['tfmg:magnetic_ingot', 'tfc:powder/hematite']
        ).heated(),
        event.custom({
          type: 'create_new_age:energising',
          energy_needed: 10000,
          ingredients: [
            { item: 'tfmg:magnetic_ingot'},
          ],
          results: [
            { item: 'tfmg:magnetic_ingot'},
          ]
        })
    ]
  ).transitionalItem('tfmg:magnetic_ingot')
  .loops(5);
  // Tier 4: Fluxuated Magnetite -> Alnico Magnet
  event.remove({id: 'create_new_age:shaped/fluxuated_magnetite'})
  // First step: alnico core
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": {
      "type": "tfc:heatable",
      "min_temp": 1200,
      "ingredient": {
        "item": "tfc_metallurgy:metal/double_sheet/alnico"
      }
    },
    "transitionalItem": {
      "item": "tfc_metallurgy:metal/double_sheet/alnico"
    },
    "sequence": [
    {
      "type": "create:filling",
      "results": [
        {
          "item": "tfc_metallurgy:metal/double_sheet/alnico",
          "count": 1
        }
      ],
      "ingredients": [
        {
          "item": "tfc_metallurgy:metal/double_sheet/alnico"
        },
        {
          "fluid": "tfc_metallurgy:metal/solder",
          "nbt": {},
          "amount": 50
        }
      ]
    },
    {
      "type": "create:deploying",
      "results": [
        {
          "item": "tfc_metallurgy:metal/double_sheet/alnico"
        }
      ],
      "ingredients": [
        {
          "item": "tfc_metallurgy:metal/double_sheet/alnico"
        },
        {
          "type": "tfc:heatable",
          "min_temp": 1200,
          "ingredient": {
            "item": "tfc_metallurgy:metal/double_sheet/alnico"
          }
        }
      ]
    },
      {
        "type": "create:pressing",
        "ingredients": [
          {
            "item": "tfc_metallurgy:metal/double_sheet/alnico"
          }
        ],
        "results": [
          {
            "item": "tfc_metallurgy:metal/double_sheet/alnico"
          }
        ]
      }
    ],
    "results": [
      {
        "item": "kubejs:alnico_core"
      }
    ],
    "loops": 3
  })
  // Second step: polarize alnico core
  event.recipes.tfmg.polarizing('kubejs:alnico_core', 'kubejs:polarized_alnico_core', 10000)
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
            { item: 'kubejs:alnico_core'},
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
        event.recipes.vintageimprovements.vacuumizing(
          'tfc_metallurgy:metal/sheet/electrum',
          'tfc_metallurgy:metal/sheet/electrum'
        ).superheated(),
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
            { item: 'tfc_metallurgy:metal/sheet/electrum'},
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
              { item: 'tfmg:coal_coke_block'},
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
    event.remove({ id: 'create_new_age:shaped/energiser_t2' });
    event.recipes.create.sequenced_assembly(
      [
          Item.of('create_new_age:energiser_t2', 1)
      ],
      // Input item
      'create_new_age:energiser_t1',
      // Sequence of assembly steps
      [
          event.recipes.createDeploying(
              'create_new_age:energiser_t1',
              ['create_new_age:energiser_t1', 'create_new_age:magnetite_block']
          ),
          event.recipes.createDeploying(
              'create_new_age:energiser_t1',
              ['create_new_age:energiser_t1', 'tfmg:copper_coil']
          ),
          event.recipes.createDeploying(
              'create_new_age:energiser_t1',
              ['create_new_age:energiser_t1', 'minecraft:lightning_rod']
          ),
          event.recipes.vintageimprovements.hammering('create_new_age:energiser_t1','create_new_age:energiser_t1').hammerBlows(1).anvilBlock('tfc:metal/anvil/steel'),
          event.custom({
            type: 'create_new_age:energising',
            energy_needed: 1000,
            ingredients: [
              { item: 'create_new_age:energiser_t1'},
            ],
            results: [
              { item: 'create_new_age:energiser_t1'},
            ]
          })        
      ]
    ).transitionalItem('create_new_age:energiser_t1')
    .loops(3);
    // T3
    event.remove({id: 'create_new_age:shaped/energiser_t3'})
    event.recipes.create.mechanical_crafting('create_new_age:energiser_t3', [
      'ABA',
      'CDC',
      'AEA'
    ], {
      A: 'create_new_age:layered_magnet',
      B: 'tfmg:capacitor',
      C: 'tfmg:copper_coil',
      D: 'create_new_age:energiser_t2',
      E: 'tfmg:circuit_casing'
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
      A: 'tfmg:electric_casing',
      B: 'tfc:metal/rod/steel',
      C: 'tfmg:copper_coil',
      D: 'create_new_age:magnetite_block',
      E: 'tfmg:magnetic_ingot',
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
      A: 'tfmg:electric_casing',
      B: 'tfc:metal/rod/steel',
      C: 'tfmg:copper_coil',
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
      A: 'tfmg:electric_casing',
      B: 'tfc_metallurgy:metal/rod/manganese',
      C: 'tfmg:copper_coil',
      D: 'create_new_age:layered_magnet',
      E: 'tfmg:magnetic_ingot',
      F: 'tfmg:steel_mechanism',
      G: 'create:shaft',
      H: 'createaddition:gold_wire'
    })

    // T2.5: Advanced motor extension
    event.remove({id: 'create_new_age:advanced_motor_extension'})
    event.recipes.create.mechanical_crafting('create_new_age:advanced_motor_extension', [
      'B   B',
      ' CDF ',
      'IDCA ',
      ' CDF ',
      'B   B'
    ], {
      A: 'tfmg:electric_casing',
      B: 'tfc_metallurgy:metal/rod/tungsten_steel',
      C: 'tfmg:copper_coil',
      D: 'create_new_age:fluxuated_magnetite',
      F: 'create:precision_mechanism',
      I: 'railways:smokestack_diesel'
    })
    
    // T3: Reinforced motor
    event.remove({id: 'create_new_age:reinforced_motor'})
    event.recipes.create.mechanical_crafting('create_new_age:reinforced_motor', [
      'B H B',
      ' CDF ',
      ' EAGG',
      ' CDF ',
      'B   B'
    ], {
      A: 'tfmg:electric_casing',
      B: 'tfc_metallurgy:metal/rod/tungsten_steel',
      C: 'tfmg:copper_coil',
      D: 'create_new_age:netherite_magnet',
      E: 'tfmg:magnetic_ingot',
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
      // Input item
      'tfc:metal/sheet/copper',
      [
          event.recipes.createDeploying(
              'tfc:metal/sheet/copper',
              ['tfc:metal/sheet/copper', 'createbb:crushed_copper']
          ),
          event.recipes.create.pressing('tfc:metal/sheet/copper', 'tfc:metal/sheet/copper'),
          event.recipes.createDeploying(
              'tfc:metal/sheet/copper',
              ['tfc:metal/sheet/copper', 'tfc:metal/sheet/copper']
          ),
          event.recipes.vintageimprovements.curving('tfc:metal/sheet/copper', 'tfc:metal/sheet/copper').head('vintageimprovements:w_shaped_curving_head'),
          event.recipes.vintageimprovements.vacuumizing('tfc:metal/sheet/copper', ['tfc:metal/sheet/copper', Fluid.of('tfmg:cooling_fluid', 1000)]).secondaryFluidInput(0).heated(),
          event.recipes.create.cutting('tfc:metal/sheet/copper', 'tfc:metal/sheet/copper')
      ]
    ).transitionalItem('tfc:metal/sheet/copper')
    .loops(1);
    // Heat pump
    event.remove({ id: 'create_new_age:shaped/heat_pump' });
    event.recipes.create.sequenced_assembly(
      [
          Item.of('create_new_age:heat_pump', 1)
      ],
      // Input item
      'design_decor:copper_gas_tank',
      [
          event.recipes.createFilling(
              'design_decor:copper_gas_tank',
              ['design_decor:copper_gas_tank', Fluid.of('tfmg:cooling_fluid', 1000)]
          ),
          event.recipes.createDeploying(
              'design_decor:copper_gas_tank',
              ['design_decor:copper_gas_tank', 'create:mechanical_pump']
          ),
          event.recipes.createDeploying(
              'design_decor:copper_gas_tank',
              ['design_decor:copper_gas_tank', 'tfmg:screw']
          ),
          event.recipes.vintageimprovements.hammering('design_decor:copper_gas_tank','design_decor:copper_gas_tank').hammerBlows(3).anvilBlock('tfc:metal/anvil/steel'),
          event.recipes.createDeploying(
              'design_decor:copper_gas_tank',
              ['design_decor:copper_gas_tank', 'create_new_age:heat_pipe']
          ),
          event.recipes.createDeploying(
              'design_decor:copper_gas_tank',
              ['design_decor:copper_gas_tank', 'create_new_age:heat_pipe']
          )
      ]
    ).transitionalItem('design_decor:copper_gas_tank')
    .loops(1);
    // Boiler heater
    event.remove({ id: 'create_new_age:shaped/boiler_heater' });
    event.recipes.create.sequenced_assembly(
      [
          Item.of('create_new_age:heater', 1)
      ],
      // Input item
      'create_new_age:heat_pipe',
      [
          event.recipes.createDeploying(
              'create_new_age:heat_pipe',
              ['create_new_age:heat_pipe', 'createbb:crushed_copper']
          ),
          event.recipes.create.pressing('create_new_age:heat_pipe', 'create_new_age:heat_pipe'),
          event.recipes.createDeploying(
            'create_new_age:heat_pipe',
            ['create_new_age:heat_pipe', 'tfc_metallurgy:metal/sheet/tungsten']
          ),
          event.recipes.createDeploying(
              'create_new_age:heat_pipe',
              ['create_new_age:heat_pipe', 'tfc:fire_clay']
          ),
          event.recipes.vintageimprovements.curving('create_new_age:heat_pipe', 'create_new_age:heat_pipe').head('vintageimprovements:concave_curving_head')
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
    event.remove({ id: 'create_new_age:shaped/basic_solar_plate' });
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
    event.remove({ id: 'create_new_age:shaped/advanced_solar_plate' });
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
    event.remove('create_new_age:reactor/reactor_casing')
    event.custom({
      type: 'create:item_application',
      ingredients: [
        { item: 'tfmg:rebar_concrete' },
        { item: 'tfc_metallurgy:metal/sheet/lead' },
      ],
      results: [
        { item: 'create_new_age:reactor_casing' },
      ],
    })
    // Boiler heater
    event.remove({ id: 'create_new_age:reactor/reactor_heat_vent' });
    event.recipes.create.sequenced_assembly(
      [
          Item.of('create_new_age:reactor_heat_vent', 1)
      ],
      // Input item
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
          event.recipes.vintageimprovements.curving('create_new_age:reactor_casing', 'create_new_age:reactor_casing').head('vintageimprovements:concave_curving_head')
      ]
    ).transitionalItem('create_new_age:reactor_casing')
    .loops(3);
    // Reactor rods
    event.remove({id: 'create_new_age:reactor/reactor_rod'})
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

    // Fissible material recipes
    event.remove('create_new_age:thorium/thorium_crushing')
    event.recipes.create_optical.focusing(
      ['create_new_age:radioactive_thorium'],
      ['tfc_metallurgy:metal/ingot/thorium'],
      100,
      3
    )
    event.recipes.vintageimprovements.centrifugation(Item.of('create_new_age:radioactive_thorium').withChance(0.5),
      ['tfc_metallurgy:metal/ingot/uranium', Fluid.of('tfmg:sulfuric_acid', 500)], 500, 256
    )

    // Fuel rods
    event.remove('create_new_age:thorium/nuclear_fuel')
    event.recipes.create.sequenced_assembly(
      [
          Item.of('create_new_age:nuclear_fuel', 1)
      ],
      // Input item
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
          event.recipes.vintageimprovements.curving('tfc_metallurgy:metal/double_sheet/zircaloy', 'tfc_metallurgy:metal/double_sheet/zircaloy').head('vintageimprovements:w_shaped_curving_head')
      ]
    ).transitionalItem('tfc_metallurgy:metal/double_sheet/zircaloy')
    .loops(1);
}
)