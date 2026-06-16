ServerEvents.recipes(event => {
    event.remove({id: 'tfc:heating/kaolin_clay'})
    event.custom({
        type: 'tfc:heating',
        ingredient: { item: 'tfc:kaolin_clay' },
        temperature: 500,
        result_item: {
            stack: { id: 'tfc:powder/kaolinite' },
            modifiers: [{ type: 'tfc:chance', chance: 0.4 }]
        }
    })
})