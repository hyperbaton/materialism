ServerEvents.recipes(event => {
    event.remove({id: 'firmalife:barrel/cork'})
    event.custom({
        type: 'tfc:barrel_sealed',
        input_item: { tag: 'c:bark' },
        input_fluid: { fluid: 'tfc:limewater', amount: 200 },
        output_item: { id: 'firmalife:cork' },
        duration: 8000
    })

    // Yeast starter: dried fruit + water, sealed in a barrel.
    // Firmalife does ship this recipe, but it doesn't seem to surface in the recipe viewer
    event.remove({ id: 'firmalife:barrel_sealed/yeast_starter' })
    event.custom({
        type: 'tfc:barrel_sealed',
        duration: 72000,
        input_fluid: { fluid: 'minecraft:water', amount: 100 },
        input_item: {
            type: 'tfc:and',
            children: [
                { tag: 'c:foods/fruit' },
                { type: 'tfc:not_rotten' },
                { type: 'tfc:has_trait', trait: 'firmalife:dried' }
            ],
            count: 1
        },
        output_fluid: { id: 'firmalife:yeast_starter', amount: 100 }
    })
})