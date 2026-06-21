ServerEvents.recipes(event => {
    event.remove('create_power_loader:empty_andesite_chunk_loader')
    event.recipes.create.mechanical_crafting(
        Item.of('create_power_loader:empty_andesite_chunk_loader', 1),
        [
            'SPOSGSOPS',
            'SZACGCAZS',
            'RMCEHECMU',
            'RMEBLBEMU',
            'RMEBLBEMU',
            'TVSMMMSVT',
            ' TVNNNVT '
        ],
        {
            H: 'create_optical:hologram_source',
            L: 'vintageimprovements:laser_item',
            B: 'tfmg:accumulator',
            M: 'create_new_age:netherite_magnet',
            // TODO: Find replacement for missing item
            //E: 'tfmg:electric_casing',
            E: 'tfmg:electrical_switch',
            C: 'computercraft:computer_normal',
            G: 'create_new_age:reactor_glass',
            S: 'tfmg:heavy_machinery_casing',
            R: 'tfc:metal/block/red_steel',
            U: 'tfc:metal/block/blue_steel',
            V: 'tfc_metallurgy:metal/block/vanadium',
            T: 'tfc_metallurgy:metal/double_sheet/titanium',
            P: 'tfc_metallurgy:metal/double_sheet/platinum',
            O: 'tfc_metallurgy:metal/double_sheet/osmiridium',
            A: 'create:precision_mechanism',
            Z: 'tfmg:steel_mechanism',
            N: 'firmalife:metal/double_sheet/stainless_steel'
        }
    )
    event.remove('create_power_loader:empty_brass_chunk_loader')
    event.recipes.create.mechanical_crafting(
        Item.of('create_power_loader:empty_brass_chunk_loader', 1),
        [
            'SPOSGSOPS',
            'SZACGCAZS',
            'RMCEHECMU',
            'RMEBLBEMU',
            'RMEBLBEMU',
            'TVSMMMSVT',
            ' TVNNNVT '
        ],
        {
            H: 'create_optical:hologram_source',
            L: 'vintageimprovements:laser_item',
            B: 'tfmg:accumulator',
            M: 'create_new_age:netherite_magnet',
            // TODO: Find replacement for missing item
            //E: 'tfmg:electric_casing',
            E: 'tfmg:electrical_switch',
            C: 'computercraft:computer_advanced',
            G: 'create_new_age:reactor_glass',
            S: 'tfmg:heavy_machinery_casing',
            R: 'tfc:metal/block/red_steel',
            U: 'tfc:metal/block/blue_steel',
            V: 'tfc_metallurgy:metal/block/vanadium',
            T: 'tfc_metallurgy:metal/double_sheet/titanium',
            P: 'tfc_metallurgy:metal/double_sheet/platinum',
            O: 'tfc_metallurgy:metal/double_sheet/osmiridium',
            A: 'create:precision_mechanism',
            Z: 'tfmg:steel_mechanism',
            N: 'firmalife:metal/double_sheet/stainless_steel'
        }
    )

    // Sequenced assembly recipes for activating chunk loaders
    event.remove({output: 'create_power_loader:andesite_chunk_loader'})
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

    event.remove({output: 'create_power_loader:brass_chunk_loader'})
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
})