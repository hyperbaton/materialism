ServerEvents.recipes(event => {
    event.remove('artisanal:distillery/kerosene')
    event.custom({
        type: 'artisanal:distillery',
        input_fluid: {
            ingredient: 'artisanal:sweet_crude_oil',
            amount: 200
        },
        result_fluid: {
            fluid: 'tfmg:kerosene',
            amount: 50
        },
        leftover_item: {
            item: 'artisanal:bitumen'
        },
        min_temp: 300,
        duration: 2000
    })
})