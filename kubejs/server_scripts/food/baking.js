// Doughs and baking
ServerEvents.recipes(event => {
  // Dough recipes
  const cereals = ['wheat', 'oat', 'maize', 'rice', 'rye', 'barley']
  addDoughRecipes(event, cereals);
  addYeastDoughRecipes(event, cereals);
  function addDoughRecipes(event, cereals) {
      cereals.forEach(cereal => {
          event.recipes.create.mixing(
              Item.of(`tfc:food/${cereal}_dough`, 2),
              [
                  `tfc:food/${cereal}_flour`,
                  Fluid.of('minecraft:water', 100)
              ],
              500
          )
      });
  }
  function addYeastDoughRecipes(event, cereals) {
      cereals.forEach(cereal => {
          event.custom({
              type: 'create:mixing',
              ingredients: [
                  {item: `tfc:food/${cereal}_flour`},
                  {tag: 'tfc:foods/sweeteners'},
                  fluidIn('firmalife:yeast_starter', 100)
              ],
              results: [{id: `firmalife:food/${cereal}_dough`, count: 4}],
              processing_time: 500
          })
      });
  }
  addCuttingCerealRecipes(event, cereals);
  function addCuttingCerealRecipes(event, cereals) {
      cereals.forEach(cereal => {
          event.recipes.vintageimprovements.vibrating([`tfc:food/${cereal}_grain`, 'tfc:straw'], `tfc:food/${cereal}`)
      });
  }
  event.custom({
      type: 'create:mixing',
      ingredients: [
          {tag: 'c:foods/dough'},
          {item: 'tfc:powder/salt'},
          {item: 'firmalife:spice/basil_leaves'},
          fluidIn('firmalife:soybean_oil', 100)
      ],
      results: [{id: 'firmalife:food/pizza_dough', count: 4}],
      processing_time: 5000
  })
  event.custom({
      type: 'create:mixing',
      ingredients: [
          {tag: 'c:foods/dough'},
          {item: 'tfc:powder/salt'},
          {item: 'firmalife:spice/basil_leaves'},
          fluidIn('tfc:olive_oil', 100)
      ],
      results: [{id: 'firmalife:food/pizza_dough', count: 4}],
      processing_time: 5000
  })
  event.custom({
      type: 'create:mixing',
      ingredients: [
          {item: 'firmalife:food/butter'},
          {tag: 'firmalife:feeds_yeast'},
          {tag: 'tfc:foods/sweeteners'},
          fluidIn('minecraft:water', 1000)
      ],
      results: [{id: 'firmalife:food/pie_dough'}],
      processing_time: 5000
  })
  event.custom({
      type: 'create:mixing',
      ingredients: [
          {item: 'minecraft:egg'},
          {item: 'tfc:food/pumpkin_chunks'},
          {item: 'tfc:food/pumpkin_chunks'},
          {tag: 'firmalife:feeds_yeast'},
          {tag: 'tfc:foods/sweeteners'},
          fluidIn('minecraft:water', 1000)
      ],
      results: [{id: 'firmalife:food/pumpkin_pie_dough'}],
      processing_time: 5000
  })
  event.custom({
      type: 'create:mixing',
      ingredients: [
          {item: 'minecraft:egg'},
          {item: 'firmalife:spice/vanilla'},
          {item: 'firmalife:food/butter'},
          {tag: 'firmalife:feeds_yeast'},
          {tag: 'tfc:foods/sweeteners'},
          fluidIn('minecraft:water', 1000)
      ],
      results: [{id: 'firmalife:food/cookie_dough', count: 4}],
      processing_time: 5000
  })
  event.recipes.create.mixing(
      Item.of(`firmalife:food/chocolate_chip_cookie_dough`, 4),
      [
          Item.of(`firmalife:food/cookie_dough`, 4),
          Ingredient.of(`#firmalife:foods/chocolate`),
      ],
      5000
  )
  event.custom({
      type: 'create:mixing',
      ingredients: [
          {tag: 'firmalife:feeds_yeast'},
          {item: 'tfc:powder/salt'},
          fluidIn('minecraft:water', 1000)
      ],
      results: [{id: 'firmalife:food/hardtack_dough', count: 4}],
      processing_time: 3000
  })
})
