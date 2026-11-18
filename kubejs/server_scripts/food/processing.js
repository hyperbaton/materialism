// Food processing: vinegar, flour, olive oil, yeast, dairy separation and tallow
ServerEvents.recipes(event => {
  // Decanter: olive paste splits into oil and vegetation water in one pass, at the barrel and jute net yield
  event.custom({type: 'vintageimprovements:centrifugation',
    ingredients: [{item: 'tfc:olive_paste'}, fluidIn('minecraft:water', 200)],
    results: [{id: 'tfc:olive_oil', amount: 40}, {id: 'minecraft:water', amount: 160}],
    processing_time: 200
  }).id('kubejs:vintageimprovements/centrifugation/olive_oil')
  // Cream separator, at the cheesecloth yield
  event.custom({type: 'vintageimprovements:centrifugation',
    ingredients: [{type: 'neoforge:tag', tag: 'firmalife:milks', amount: 500}],
    results: [{id: 'firmalife:cream', amount: 500}],
    processing_time: 200
  }).id('kubejs:vintageimprovements/centrifugation/cream')
  // Curds spun out of curdled milk, leaving whey, as the cheesecloth does
  ;[['tfc:curdled_milk', 'firmalife:food/milk_curd'], ['firmalife:curdled_goat_milk', 'firmalife:food/goat_curd'],
    ['firmalife:curdled_yak_milk', 'firmalife:food/yak_curd']].forEach(([milk, curd]) => {
    event.custom({type: 'vintageimprovements:centrifugation',
      ingredients: [fluidIn(milk, 1000)],
      results: [{id: curd}, {id: 'firmalife:whey', amount: 1000}],
      processing_time: 300
    }).id('kubejs:vintageimprovements/centrifugation/' + curd.split('/')[1])
  })
})

ServerEvents.recipes(event => {
  // Vinegar: native recipe disappears for some reason, so we are readding it.
  event.remove({ id: 'tfc:barrel/vinegar' })
  event.custom({
      type: 'tfc:barrel_sealed',
      duration: 7200,
      input_fluid: { tag: 'tfc:alcohols', amount: 250 },
      input_item: {
          type: 'tfc:and',
          children: [
              { tag: 'c:foods/fruit' },
              { type: 'tfc:not_rotten' }
          ],
          count: 1
      },
      output_fluid: { id: 'tfc:vinegar', amount: 250 }
  })

  // Milling grain into flour with Create's millstone
  ;['wheat', 'oat', 'maize', 'rice', 'rye', 'barley'].forEach(cereal => {
      event.recipes.create.milling(
          `tfc:food/${cereal}_flour`,
          TFC.ingredient.and(Ingredient.of(`tfc:food/${cereal}_grain`), TFC.ingredient.notRotten())
      )
  })

  // Automation of olive oil processing
  event.recipes.create.milling(
      '2x tfc:olive_paste',
      TFC.ingredient.and(Ingredient.of('tfc:food/olive'), TFC.ingredient.notRotten())
  )
  event.custom({
      type: 'create:mixing',
      ingredients: [
          {item: 'tfc:olive_paste'},
          {item: 'tfc:olive_paste'},
          {item: 'tfc:olive_paste'},
          {item: 'tfc:olive_paste'},
          {item: 'tfc:olive_paste'},
          fluidIn('minecraft:water', 1000)
      ],
      results: [{amount: 1000, id: 'tfc:olive_oil_water'}],
      heat_requirement: 'heated',
      processing_time: 400
  })

  // Automation of feeding a yeast starter
  event.custom({
      type: 'create:mixing',
      ingredients: [
          fluidIn('firmalife:yeast_starter', 100),
          {type: 'tfc:and', children: [{tag: 'firmalife:feeds_yeast'}, {type: 'tfc:not_rotten'}]}
      ],
      results: [{amount: 600, id: 'firmalife:yeast_starter'}]
  })

  // Tallow rendering
  event.custom({
      type: 'create:mixing',
      ingredients: [
      {item: 'tfc:blubber'},
      {item: 'tfc:blubber'},
      {item: 'tfc:blubber'},
      {item: 'tfc:blubber'},
      {item: 'tfc:blubber'},
      fluidIn('minecraft:water', 1000)
      ],
      results: [
      {amount: 1000, id: 'tfc:tallow'}
      ],
      heat_requirement: 'heated',
      processing_time: 400
  })
  event.custom({
      type: 'create:mixing',
      ingredients: [
      {item: 'butchery:animal_fat'},
      {item: 'butchery:animal_fat'},
      {item: 'butchery:animal_fat'},
      {item: 'butchery:animal_fat'},
      {item: 'butchery:animal_fat'},
      fluidIn('minecraft:water', 1000)
      ],
      results: [
      {amount: 1000, id: 'tfc:tallow'}
      ],
      heat_requirement: 'heated',
      processing_time: 400
  })
})
