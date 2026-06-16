ServerEvents.recipes(event => {
    event.remove({id: 'firmalife:barrel/cork'})
    event.custom({
        type: 'tfc:barrel_sealed',
        input_item: { tag: 'c:bark' },
        input_fluid: { fluid: 'tfc:limewater', amount: 200 },
        output_item: { id: 'firmalife:cork' },
        duration: 8000
    })
})