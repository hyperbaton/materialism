ServerEvents.recipes(event => {
    // TODO: Multiple items missing in 1.21: vintageimprovements:laser_item, tfmg:electric_casing
    // Also create_optical:focusing constructor changed. Commenting out until replacements are found.

    //event.remove('create_power_loader:crafting/empty_andesite_chunk_loader')
    //event.remove('create_power_loader:crafting/empty_brass_chunk_loader')

    // Sequenced assembly recipes for chunk loaders (these don't use missing items)
    event.remove('create:conversion_0')
    event.recipes.create.sequenced_assembly(
        'create_power_loader:andesite_chunk_loader',
        'create_power_loader:empty_andesite_chunk_loader',
        [
            event.recipes.create.filling('create_power_loader:empty_andesite_chunk_loader', ['create_power_loader:empty_andesite_chunk_loader', Fluid.of('tfmg:lubrication_oil', 1000)]),
            event.recipes.create.filling('create_power_loader:empty_andesite_chunk_loader', ['create_power_loader:empty_andesite_chunk_loader', Fluid.of('tfmg:cooling_fluid', 1000)]),
            event.custom({
                type: 'create_new_age:energising',
                energy_needed: 500000,
                ingredients: [
                { item: 'create_power_loader:empty_andesite_chunk_loader'},
                ],
                results: [
                { id: 'create_power_loader:empty_andesite_chunk_loader'},
                ]
            })
        ]
    ).transitionalItem('create_power_loader:empty_andesite_chunk_loader').loops(1)
    event.recipes.create.sequenced_assembly(
        'create_power_loader:brass_chunk_loader',
        'create_power_loader:empty_brass_chunk_loader',
        [
            event.recipes.create.filling('create_power_loader:empty_brass_chunk_loader', ['create_power_loader:empty_brass_chunk_loader', Fluid.of('tfmg:lubrication_oil', 1500)]),
            event.recipes.create.filling('create_power_loader:empty_brass_chunk_loader', ['create_power_loader:empty_brass_chunk_loader', Fluid.of('tfmg:cooling_fluid', 1500)]),
            event.custom({
                type: 'create_new_age:energising',
                energy_needed: 700000,
                ingredients: [
                { item: 'create_power_loader:empty_brass_chunk_loader'},
                ],
                results: [
                { id: 'create_power_loader:empty_brass_chunk_loader'},
                ]
            })
        ]
    ).transitionalItem('create_power_loader:empty_brass_chunk_loader').loops(1)
    event.remove('create:conversion_1')
})