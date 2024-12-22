ServerEvents.recipes(event => {

    // Remove unwanted recipes introduced by TFC
    event.remove({id: 'tfc:crafting/vanilla/redstone/powered_rail'})

    event.remove({id: 'tfc:crafting/vanilla/lightning_rod'})
    // Add a custom recipe for lightning rods
    event.recipes.create.sequenced_assembly(
        [
            Item.of('minecraft:lightning_rod', 1)
        ],
        // Input item: Smooth stone slab
        'tfc:metal/rod/copper',
        // Sequence of assembly steps
        [
            event.recipes.createFilling(
                'tfc:metal/rod/copper',
                ['tfc:metal/rod/copper', Fluid.of('tfc_metallurgy:metal/solder', 10)]
            ),
            event.recipes.createDeploying('tfc:metal/rod/copper', ['tfc:metal/rod/copper', 'tfc:metal/rod/copper']),
            event.recipes.createPressing('tfc:metal/rod/copper', 'tfc:metal/rod/copper')
        ]
    ).transitionalItem('tfc:metal/rod/copper')
    .loops(2);

    // Early game rose quartz recipes
    event.recipes.tfc.quern('kubejs:certus_quartz_powder', 'tfc_metallurgy:ore/certus_quartz')
    event.shapeless('1x kubejs:redstone_imbued_quartz_powder',[
        'kubejs:certus_quartz_powder',
        'minecraft:redstone',
        'minecraft:redstone',
        'minecraft:redstone',
        'minecraft:redstone',
        'minecraft:redstone',
        'minecraft:redstone',
        'firmalife:beeswax'
      ])
    // Consider replacing this with a compressor recipe
    event.recipes.tfc.heating('kubejs:redstone_imbued_quartz_powder', 1800)
        .resultItem('create:rose_quartz')
        .chance(0.4)
}
)