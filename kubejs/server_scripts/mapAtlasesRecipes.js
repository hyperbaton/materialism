ServerEvents.recipes(event => {
    event.remove({ id: 'map_atlases:craft_atlas' })
    event.custom({
        type: 'map_atlases:crafting_atlas',
        ingredients: [
            { item: 'tfc:glue' },
            { item: 'minecraft:writable_book' }
        ]
    }).id('map_atlases:craft_atlas')
})
