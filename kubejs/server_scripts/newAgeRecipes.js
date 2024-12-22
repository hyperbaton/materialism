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
  // Remove the existing recipe for carbon brushes
  event.remove({ id: 'create_new_age:shaped/carbon_brushes' });
  event.recipes.create.sequenced_assembly(
      [
          Item.of('create_new_age:carbon_brushes', 1)
      ],
      // Input item: Smooth stone slab
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