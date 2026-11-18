// Cakes: C&A cake bases baked the TFC way, TFC cake on a baked base, Firmalife chocolate and honey for the rest
TFCEvents.data(event => {
  event.heat({ ingredient: { item: 'createaddition:cake_base' }, heat_capacity: 1.0 })
})

ServerEvents.recipes(event => {
  const id = name => 'kubejs:cakes/' + name
  const flour = fresh({ tag: 'c:foods/flour' })
  const egg = fresh({ item: 'minecraft:egg' })
  const sweetener = { tag: 'tfc:foods/sweeteners' }
  const base = 'createaddition:cake_base'
  const baked = 'createaddition:cake_base_baked'

  // Old routes: vanilla cake, TFC's one-step cake, C&A's dough base and smoker, Create chocolate
  event.remove({ output: 'minecraft:cake' })
  event.remove({ id: 'tfc:crafting/cake' })
  ;['compacting/cake_base', 'smoking/cake_base_baked', 'filling/chocolate_cake'].forEach(r => event.remove({ id: 'createaddition:' + r }))
  ;['mixing/chocolate', 'mixing/chocolate_melting', 'compacting/chocolate', 'filling/chocolate_glazed_berries'].forEach(r => event.remove({ id: 'create:' + r }))

  // Cake base: flour, egg, sweetener and water, by hand or in a mixer
  event.custom({
    type: 'minecraft:crafting_shaped',
    pattern: [' M ', 'SES', 'FFF'],
    key: { M: { type: 'tfc:fluid_content', fluid: { fluid: 'minecraft:water', amount: 100 } }, S: sweetener, E: egg, F: flour },
    result: { id: base, count: 1 }
  }).id(id('crafting/cake_base'))
  event.custom({
    type: 'create:mixing',
    ingredients: [flour, flour, flour, egg, sweetener, sweetener, fluidIn('minecraft:water', 100)],
    results: [{ id: base }]
  }).id(id('mixing/cake_base'))

  // Baking: firepit or forge at 200 °C (a smoking fan works too), or a Firmalife oven
  event.custom({ type: 'tfc:heating', ingredient: { item: base }, result_item: { id: baked, count: 1 }, temperature: 200 })
    .id(id('heating/cake_base_baked'))
  event.custom({ type: 'firmalife:oven', ingredient: { item: base }, result: { id: baked, count: 1 }, temperature: 400, duration: 1000 })
    .id(id('oven/cake_base_baked'))

  // TFC cake: baked base with milk, a sweetener and a dried cherry on top
  const cherry = { type: 'tfc:and', children: [{ item: 'tfc:food/cherry' }, { type: 'tfc:not_rotten' }, { type: 'tfc:has_trait', trait: 'firmalife:dried' }] }
  event.custom({
    type: 'minecraft:crafting_shaped',
    pattern: [' C ', 'SMS', ' B '],
    key: { M: { type: 'tfc:fluid_content', fluid: { tag: 'firmalife:milks', amount: 100 } }, S: sweetener, B: { item: baked }, C: cherry },
    result: { id: 'tfc:cake', count: 1 }
  }).id(id('crafting/tfc_cake'))
  event.recipes.create.sequenced_assembly(['tfc:cake'], baked, [
    event.custom({ type: 'create:filling', ingredients: [{ item: baked }, { type: 'neoforge:tag', tag: 'firmalife:milks', amount: 100 }], results: [{ id: baked }] }),
    event.recipes.create.deploying(baked, [baked, Ingredient.of('#tfc:foods/sweeteners')]),
    event.custom({ type: 'create:deploying', ingredients: [{ item: baked }, cherry], results: [{ id: baked }] })
  ]).transitionalItem(baked).loops(1).id(id('sequenced_assembly/tfc_cake'))

  // Chocolate cake and glazed berries use Firmalife chocolate
  event.custom({
    type: 'create:filling',
    ingredients: [{ item: baked }, fluidIn('firmalife:chocolate', 500)],
    results: [{ id: 'createaddition:chocolate_cake' }]
  }).id(id('filling/chocolate_cake'))
  const berries = ['blackberry', 'blueberry', 'bunchberry', 'cloudberry', 'cranberry', 'elderberry', 'gooseberry',
    'raspberry', 'snowberry', 'strawberry', 'wintergreen_berry'].map(b => ({ item: 'tfc:food/' + b }))
  event.custom({
    type: 'create:filling',
    ingredients: [fresh(berries), fluidIn('firmalife:chocolate', 100)],
    results: [{ id: 'create:chocolate_glazed_berries' }]
  }).id(id('filling/chocolate_glazed_berries'))

  // Raw honey strained into Create honey (one way: honey fluid doesn't spoil, raw honey does); feeds the honey cake
  event.custom({
    type: 'create:mixing',
    ingredients: [fresh({ item: 'firmalife:food/raw_honey' })],
    results: [{ id: 'create:honey', amount: 125 }]
  }).id(id('mixing/honey'))
})
