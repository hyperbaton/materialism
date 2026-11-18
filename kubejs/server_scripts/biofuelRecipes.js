// One bio path: Chemica liquid fuels (ethanol, biodiesel), Solarpunk solid biomass, fermentation in the Solarpunk vat
ServerEvents.recipes(event => {
  const id = name => 'kubejs:biofuel/' + name

  // Fermentation vat (materialismcore:fermenting); amounts per batch, one batch per 2x2x4 of vat
  fermenting(event, {tag: 'tfc:foods/sweeteners', count: 3}, {fluid: 'firmalife:yeast_starter', amount: 100},
    {id: 'chemica:ethanol', amount: 1000}, 800).id(id('fermenting/ethanol'))
  // Cellulosic ethanol from densified biomass: slower and poorer than sugar
  fermenting(event, {item: 'solarpunk:biomass_pellet', count: 1}, {fluid: 'minecraft:water', amount: 500},
    {id: 'chemica:ethanol', amount: 250}, 1200).id(id('fermenting/ethanol_from_pellets'))

  // Biomass from any organic waste: dry browns are shredded, wet greens (fresh or rotten) are pulped
  event.remove({id: /^solarpunk:(crushing|milling)\/(crops|leaves)_to_biomass$/})
  ;['#tfc:compost_browns/low', '#tfc:compost_browns/high', '#tfc:fallen_leaves'].forEach((tag, i) =>
    event.recipes.create.crushing(['solarpunk:biomass', CreateItem.of('solarpunk:biomass', 0.5)], Ingredient.of(tag))
      .processingTime(150).id(id(`crushing/biomass_${i}`)))
  const green = Ingredient.of('#tfc:compost_greens')
  event.recipes.create.mixing(['2x solarpunk:biomass', Fluid.of('minecraft:water', 100)], [green, green, green, green])
    .id(id('mixing/biomass_pulp'))
  event.recipes.create.mixing(['2x solarpunk:biomass', Fluid.of('minecraft:water', 50)], ['tfc:rotten_compost'])
    .id(id('mixing/biomass_from_rotten_compost'))
  // Fertilizer besides biochar slurry: compost tea and guano steeped in water
  ;[['compost', 'tfc:compost'], ['guano', 'tfc:groundcover/guano']].forEach(([name, item]) => event.custom({
    type: 'create:mixing',
    ingredients: [{item: item}, fluidIn('minecraft:water', 250)],
    results: [{id: 'solarpunk:fertilizer', amount: 250}]
  }).id(id('mixing/fertilizer_from_' + name)))

  // Rich fertilizer: plain fertilizer enriched with nitrogen, phosphorus and potassium
  event.custom({
    type: 'create:mixing',
    ingredients: [{item: 'tfc:powder/saltpeter'}, {item: 'minecraft:bone_meal'}, {item: 'tfc:powder/sylvite'},
      fluidIn('solarpunk:fertilizer', 1000)],
    results: [{id: 'solarpunk:rich_fertilizer', amount: 1000}]
  }).id(id('mixing/rich_fertilizer'))
  // Synthetic NPK: ammonia and phosphoric acid make ammonium phosphate, sylvite adds the potash, all dissolved in water
  event.custom({
    type: 'tfmg:vat',
    allowed_vat_types: ['tfmg:cast_iron', 'tfmg:steel', 'tfmg:fireproof'],
    machines: ['tfmg:mixer'],
    min_size: 1,
    ingredients: [{item: 'tfc:powder/sylvite'},
      fluidIn('minecraft:water', 1000),
      fluidIn('chemica:ammonia', 100),
      fluidIn('chemica:phosphoric_acid', 100)],
    processing_time: 200,
    results: [{id: 'solarpunk:rich_fertilizer', amount: 1000}]
  }).id(id('vat/rich_fertilizer'))

  // Biodiesel: any plant oil transesterified with ethanol, caustic soda as catalyst
  event.remove({id: 'chemica:vat_machine_recipe/mixing/biodiesel'})
  event.custom({
    type: 'tfmg:vat',
    allowed_vat_types: ['tfmg:cast_iron', 'tfmg:steel', 'tfmg:fireproof'],
    machines: ['tfmg:mixer'],
    min_size: 1,
    ingredients: [
      {type: 'neoforge:tag', tag: 'c:plantoil', amount: 1000},
      fluidIn('chemica:ethanol', 500),
      {item: 'chemica:caustic_soda_dust'}
    ],
    processing_time: 300,
    results: [
      {id: 'chemica:biodiesel', amount: 1000},
      {id: 'chemica:glycerin', amount: 100}
    ]
  }).id(id('vat/biodiesel'))

  // Duplicate chains: C&A seed oil, biomass and bioethanol; EE plant oil; Solarpunk biofuel engine
  event.remove({id: /^createaddition:(compacting\/(biomass_pellet|seed_oil)|crafting\/biomass_.*|mixing\/(bioethanol|biomass_from_.*)|liquid_burning\/biofuel)$/})
  event.remove({id: 'electroenergetics:compacting/plant_oil'})
  event.remove({id: 'solarpunk:mechanical_crafting/biofuel_engine'})

  // Biomass ash is TFC wood ash
  event.replaceOutput({id: 'solarpunk:ash_from_blasting_biomass'}, 'solarpunk:ash', 'tfc:powder/wood_ash')

  // Gasifier: fire-brick firebox under an aluminium casing
  event.remove({id: 'solarpunk:biomass_gasifier'})
  event.recipes.create.mechanical_crafting('solarpunk:biomass_gasifier', [
    'BCB',
    'FSF',
    'BCB'
  ], {
    B: 'tfc:fire_bricks',
    C: 'create:andesite_casing',
    F: 'tfc:metal/sheet/cast_iron',
    S: 'create:shaft'
  }).id(id('biomass_gasifier'))
})

ServerEvents.tags('fluid', event => {
  // Plant oils: TFC's pressed oils and Chemica seed oil
  event.add('c:plantoil', ['chemica:seed_oil', 'chemica:flowing_seed_oil'])
  event.remove('c:plantoil', ['createaddition:seed_oil', 'createaddition:flowing_seed_oil',
    'electroenergetics:plant_oil', 'electroenergetics:flowing_plant_oil'])
})
