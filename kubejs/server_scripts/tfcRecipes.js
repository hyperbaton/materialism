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
}
)