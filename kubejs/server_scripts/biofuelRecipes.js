// One bio path: Chemica liquid fuels (ethanol, biodiesel), Solarpunk solid biomass, fermentation in the Solarpunk vat
ServerEvents.recipes(event => {
  const id = name => 'kubejs:biofuel/' + name
  const fermenting = (name, ingredient, fluid, result, time) => event.custom({
    type: 'materialismcore:fermenting',
    ingredient: ingredient,
    fluid_ingredient: fluid,
    result: result,
    processing_time: time
  }).id(id('fermenting/' + name))

  // Fermentation vat (materialismcore:fermenting); amounts per batch, one batch per 2x2x4 of vat
  fermenting('ethanol', {tag: 'tfc:foods/sweeteners', count: 3}, {fluid: 'firmalife:yeast_starter', amount: 100},
    {id: 'chemica:ethanol', amount: 1000}, 800)
  // Cellulosic ethanol from densified biomass: slower and poorer than sugar
  fermenting('ethanol_from_pellets', {item: 'solarpunk:biomass_pellet', count: 1}, {fluid: 'minecraft:water', amount: 500},
    {id: 'chemica:ethanol', amount: 250}, 1200)

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
  fermenting('rich_fertilizer', {tag: 'solarpunk:fermentation_waste', count: 1}, {fluid: 'minecraft:water', amount: 1000},
    {id: 'solarpunk:rich_fertilizer', amount: 500}, 400)

  // Biodiesel: any plant oil transesterified with ethanol, caustic soda as catalyst
  event.remove({id: 'chemica:vat_machine_recipe/mixing/biodiesel'})
  event.custom({
    type: 'tfmg:vat',
    allowed_vat_types: ['tfmg:cast_iron', 'tfmg:steel', 'tfmg:fireproof'],
    machines: ['tfmg:mixer'],
    min_size: 1,
    ingredients: [
      {type: 'neoforge:tag', tag: 'c:plantoil', amount: 1000},
      {type: 'neoforge:single', fluid: 'chemica:ethanol', amount: 500},
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
