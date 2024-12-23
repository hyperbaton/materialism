ServerEvents.recipes(event => {

  event.remove({id: 'create_new_age:shaped/connector'})
  event.remove({id: 'create_new_age:shaped/connector_mirrored'})
  event.remove({id: 'create_new_age:cutting/copper_sheet'})
  event.remove({id: 'create_new_age:cutting/overcharged_iron_sheet'})
  event.remove({id: 'create_new_age:cutting/overcharged_golden_sheet'})
  event.remove({id: 'create_new_age:diamond_wire'})

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
}
)