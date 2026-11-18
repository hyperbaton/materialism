// Petroleum: early lubricating oil and oil seeps
ServerEvents.recipes(event => {
  // Early/mid-game lubrication oil, so it is available before oil is drilled
  event.custom({
    type: 'create:mixing',
    ingredients: [
      fluidIn('tfc:tallow', 1000)
    ],
    results: [
      {amount: 100, id: 'tfmg:lubrication_oil'}
    ],
    heat_requirement: 'heated',
    processing_time: 400
  })

  // Oil seep pebbles (surface indicator for the oil vein) can be heated
  // to render out a tiny amount of crude oil
  event.custom({
    type: 'tfc:heating',
    ingredient: {item: 'kubejs:oil_seep'},
    result_fluid: {amount: 10, id: 'tfmg:crude_oil'},
    temperature: 200
  })
})
