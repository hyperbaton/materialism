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
  // Magnetite magnet
  event.recipes.create.compacting('create_new_age:magnetite_block', '14x tfc:ore/poor_magnetite')
  event.recipes.create.compacting('create_new_age:magnetite_block', '9x tfc:ore/normal_magnetite')
  event.recipes.create.compacting('create_new_age:magnetite_block', '6x tfc:ore/rich_magnetite')
  // Redstone magnet -> Weak Ferrite Magnet
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
  // Layered magnet -> Strong Ferrite Magnet
  event.remove({ id: 'create_new_age:shaped/layered_magnet' });
  event.recipes.create.sequenced_assembly(
    [
        Item.of('create_new_age:layered_magnet', 1)
    ],
    // Input item
    'tfmg:magnetic_ingot',
    // Sequence of assembly steps
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
        //event.recipes.tfmg.polarizing('tfmg:magnetic_ingot', 'tfmg:magnetic_ingot', 10000),
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

  // Remove the existing recipe for carbon brushes
  event.remove({ id: 'create_new_age:shaped/carbon_brushes' });
  event.recipes.create.sequenced_assembly(
      [
          Item.of('create_new_age:carbon_brushes', 1)
      ],
      // Input item
      'tfmg:coal_coke_block',
      // Sequence of assembly steps
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
}
)