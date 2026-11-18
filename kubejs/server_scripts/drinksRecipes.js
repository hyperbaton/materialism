// TFC Advanced Drinks: machine versions of the pot, barrel and processing steps (heating steps already run in a smoking fan via WoodenCog)
ServerEvents.recipes(event => {
  const id = name => 'kubejs:drinks/' + name
  const fresh = item => ({type: 'tfc:and', children: [{item: item}, {type: 'tfc:not_rotten'}]})
  const water = amount => ({type: 'neoforge:single', fluid: 'minecraft:water', amount: amount})

  // Brewing: same ratios as the pot, slow in a heated mixer
  const brew = (name, ingredients, result) => event.custom({
    type: 'create:mixing',
    ingredients: ingredients.concat([water(500)]),
    results: [{id: 'jsdrinks:' + result, amount: 500}],
    heat_requirement: 'heated',
    processing_time: 1200
  }).id(id('mixing/' + name))
  ;[['white', 'white_tea_leaf'], ['green', 'green_tea_leaf'], ['yellow', 'yellow_tea_leaf'], ['red', 'red_tea_leaf'],
    ['puerh', 'puerh_tea'], ['strong_puerh', 'strong_puerh_tea']].forEach(([tea, leaf]) =>
    brew(tea + '_tea', [fresh('jsdrinks:' + leaf)], tea + '_tea'))
  brew('coffee', [fresh('jsdrinks:ground_coffee')], 'coffee')
  brew('strong_coffee', [fresh('jsdrinks:ground_coffee'), fresh('jsdrinks:ground_coffee')], 'strong_coffee')

  // White coffees, as in the barrel
  ;['coffee', 'strong_coffee'].forEach(coffee => event.custom({
    type: 'create:mixing',
    ingredients: [
      {type: 'neoforge:single', fluid: 'jsdrinks:' + coffee, amount: 500},
      {type: 'neoforge:tag', tag: 'firmalife:milks', amount: 100}
    ],
    results: [{id: `jsdrinks:${coffee}_with_milk`, amount: 600}]
  }).id(id(`mixing/${coffee}_with_milk`)))

  // Processing steps that carry no recipe-relevant data
  event.custom({type: 'create:milling', ingredients: [fresh('jsdrinks:dried_coffee_cherries')],
    results: [{id: 'jsdrinks:raw_coffee_bean'}], processing_time: 100}).id(id('milling/raw_coffee_bean'))
  event.custom({type: 'create:milling', ingredients: [fresh('jsdrinks:roasted_coffee_bean')],
    results: [{id: 'jsdrinks:ground_coffee'}], processing_time: 100}).id(id('milling/ground_coffee'))
  event.custom({type: 'create:pressing', ingredients: [fresh('jsdrinks:fresh_tea_leaf')],
    results: [{id: 'jsdrinks:bruised_tea_leaf'}]}).id(id('pressing/bruised_tea_leaf'))

  // Fermentation vat: each barrel alcohol at its barrel ratio, batched by vat size, in 0.8 of the barrel time
  const alcohols = ['tfc:beer', 'tfc:cider', 'tfc:rum', 'tfc:sake', 'tfc:vodka', 'tfc:whiskey', 'tfc:corn_whiskey',
    'tfc:rye_whiskey', 'firmalife:mead']
  const sugars = [{item: 'minecraft:sugar'}, {item: 'afc:birch_sugar'}, {item: 'afc:maple_sugar'}]
  const brews = []
  event.forEachRecipe({type: 'tfc:barrel_sealed'}, recipe => {
    const json = JSON.parse(String(recipe.json))
    if (recipe.removed || !json.output_fluid || alcohols.indexOf(json.output_fluid.id) === -1) return
    json.source = String(recipe.getId())
    brews.push(json)
  })
  // Rum ferments from any sugar, in the barrel too
  brews.filter(json => json.output_fluid.id == 'tfc:rum').forEach(json => {
    json.input_item.children[0] = sugars
    event.remove({id: json.source})
    event.custom({type: 'tfc:barrel_sealed', duration: json.duration, input_fluid: json.input_fluid,
      input_item: json.input_item, output_fluid: json.output_fluid}).id(id('barrel/rum'))
  })
  brews.forEach(json => event.custom({
    type: 'materialismcore:fermenting',
    ingredient: json.input_item,
    fluid_ingredient: json.input_fluid,
    result: json.output_fluid,
    processing_time: Math.round(json.duration * 0.8)
  }).id(id('fermenting/' + json.source.replace(':', '/'))))
})
