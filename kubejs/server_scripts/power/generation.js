// Generators: magnets and carbon brushes
ServerEvents.recipes(event => {
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
    'tfmg:magnet',
    [
        event.recipes.createDeploying(
            'tfmg:magnet',
            ['tfmg:magnet', 'tfc:powder/hematite']
        ),
        event.recipes.createDeploying(
            'tfmg:magnet',
            ['tfmg:magnet', 'kubejs:powder/zinc']
        ),
        event.recipes.vintageimprovements.vibrating('tfmg:magnet',
            'tfmg:magnet'),
        event.recipes.createFilling(
          'tfmg:magnet',
          ['tfmg:magnet', Fluid.of('tfc_metallurgy:metal/manganese', 50)]
        ),
        event.custom({type: 'vintageimprovements:pressurizing',
          ingredients: [{item: 'tfmg:magnet'}, {item: 'tfc:powder/hematite'}],
          results: [{id: 'tfmg:magnet'}],
          heat_requirement: 'heated'
        }),
        event.custom({
          type: 'create_new_age:energising',
          energy_needed: 10000,
          ingredients: [
            { item: 'tfmg:magnet'},
          ],
          results: [
            { id: 'tfmg:magnet'},
          ]
        })
    ]
  ).transitionalItem('tfmg:magnet')
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
  // Carbon brushes, following the real manufacturing process: graphite and copper powder with a
  // copper shunt wire are pressed in a die (the steel casing) into a green brush, sintered at
  // ~1200 degrees, then ground to size. The finished brushes are mounted around a rotor coil
  // with a spring-loaded holder.
  event.recipes.create.sequenced_assembly(
      [
          Item.of('create_new_age:carbon_brushes', 1)
      ],
      'tfmg:steel_casing',
      [
          event.recipes.createDeploying('tfmg:steel_casing', ['tfmg:steel_casing', 'tfc_metallurgy:metal/block/graphite']),
          event.recipes.createDeploying('tfmg:steel_casing', ['tfmg:steel_casing', 'kubejs:metal/dust/copper']),
          event.recipes.createDeploying('tfmg:steel_casing', ['tfmg:steel_casing', 'createaddition:copper_wire']),
          event.recipes.createPressing('tfmg:steel_casing', 'tfmg:steel_casing'),
          event.recipes.vintageimprovements.pressurizing('tfmg:steel_casing', 'tfmg:steel_casing').superheated(),
          event.recipes.vintageimprovements.polishing('tfmg:steel_casing', 'tfmg:steel_casing'),
          event.recipes.createDeploying('tfmg:steel_casing', ['tfmg:steel_casing', 'vintageimprovements:cobalt_spring']),
          event.recipes.createDeploying('tfmg:steel_casing', ['tfmg:steel_casing', 'tfmg:electromagnetic_coil']),
          event.recipes.createDeploying('tfmg:steel_casing', ['tfmg:steel_casing', 'create:shaft']),
          event.custom({
            type: 'create_new_age:energising',
            energy_needed: 5000,
            ingredients: [
              { item: 'tfmg:steel_casing'},
            ],
            results: [
              { id: 'tfmg:steel_casing'},
            ]
          })
      ]
    ).transitionalItem('tfmg:steel_casing')
    .loops(1);
})
