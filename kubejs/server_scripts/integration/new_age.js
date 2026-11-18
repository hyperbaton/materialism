// Create: New Age: its machines made from pack materials
ServerEvents.recipes(event => {
  event.remove({id: 'create_new_age:shaped/connector'})
  event.remove({id: 'create_new_age:shaped/connector_mirrored'})
  event.remove({id: 'create_new_age:cutting/copper_sheet'})
  event.remove({id: 'create_new_age:cutting/overcharged_iron_sheet'})
  event.remove({id: 'create_new_age:cutting/overcharged_golden_sheet'})
  event.remove({id: 'create_new_age:diamond_wire'})
  event.remove({id: 'create_new_age:thorium_multiplication'})
  event.remove({output: /create_new_age:overcharged.*/})
  // Transmission is Electro Energetics'
  event.remove({output: 'create_new_age:copper_wire'})
  event.remove({output: 'create_new_age:copper_wire_block'})

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
            ingredients: [{item: 'tfc:metal/sheet/copper'}, fluidIn('tfmg:cooling_fluid', 1000)],
            results: [{id: 'tfc:metal/sheet/copper'}],
            heat_requirement: 'heated'
          }),
          event.recipes.createCutting('tfc:metal/sheet/copper', 'tfc:metal/sheet/copper')
      ]
    ).transitionalItem('tfc:metal/sheet/copper')
    .loops(1);
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

    // Lamp post: steel rods instead of andesite alloy
    event.replaceInput({ id: 'create_new_age:shaped/lamp_post' }, 'create:andesite_alloy', 'tfc:metal/rod/steel')
})
