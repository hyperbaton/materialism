ServerEvents.recipes(event => {

  // Support wedges are made with the curving press
  event.remove({id: 'createdeco:zinc_support_wedge'})
  event.remove({id: 'createdeco:andesite_support_wedge'})
  event.remove({id: 'createdeco:brass_support_wedge'})
  event.remove({id: 'createdeco:iron_support_wedge'})
  event.remove({id: 'createdeco:copper_support_wedge'})
  event.remove({id: 'createdeco:industrial_iron_support_wedge'})
  event.remove({id: 'createdeco:zinc_support_wedge_from_stonecutting'})
  event.remove({id: 'createdeco:andesite_support_wedge_from_stonecutting'})
  event.remove({id: 'createdeco:brass_support_wedge_from_stonecutting'})
  event.remove({id: 'createdeco:iron_support_wedge_from_stonecutting'})
  event.remove({id: 'createdeco:copper_support_wedge_from_stonecutting'})
  event.remove({id: 'createdeco:industrial_iron_support_wedge_from_stonecutting'})
  event.remove({id: "createdeco:pressing/zinc_sheet"})
  event.remove({id: "createdeco:pressing/andesite_sheet"})
  event.remove({id: "createdeco:pressing/coins/netherite_coin"})
  swapInputs(event, [
    ['createdeco:umber_bricks', 'minecraft:brick', '#tfc:rock/chiseled_bricks']
  ])
  
  // A recipe for producing industrial iron
  event.remove({id: 'createdeco:compacting/industrial_iron_ingot'})
  event.remove({id: 'create:industrial_iron_block_from_ingots_iron_stonecutting'})
  event.remove({id: 'create:industrial_iron_block_from_iron_ingots_stonecutting'})
  event.recipes.create.sequenced_assembly(
    [Item.of('createdeco:industrial_iron_ingot', 1)],
    'tfc:metal/ingot/high_carbon_steel',
    [
      event.recipes.createFilling(
        'tfc:metal/ingot/unknown',
        ['tfc:metal/ingot/unknown', Fluid.of('tfc_metallurgy:metal/manganese', 25)]
      ),
      event.recipes.createFilling(
        'tfc:metal/ingot/unknown',
        ['tfc:metal/ingot/unknown', Fluid.of('tfc:metal/zinc', 25)]
      ),
      event.recipes.createPressing('tfc:metal/ingot/unknown', 'tfc:metal/ingot/unknown'),
      event.recipes.createPressing('tfc:metal/ingot/unknown', 'tfc:metal/ingot/unknown')
    ]
  ).transitionalItem('tfc:metal/ingot/unknown')
  .loops(2)
  // Industrial iron nugget
  event.remove({id: 'createdeco:industrial_iron_nugget_from_industrial_iron_ingot'})
  event.remove({id: 'createdeco:industrial_iron_ingot'})
  event.shapeless('10x createdeco:industrial_iron_nugget',[
    'createdeco:industrial_iron_ingot',
    '#tfc:chisels'
  ]).damageIngredient(Ingredient.of('#tfc:chisels'))
  event.custom({type: 'create:deploying', ingredients: [{item: 'createdeco:industrial_iron_ingot'}, {tag: 'tfc:chisels'}], results: [{id: 'createdeco:industrial_iron_nugget', count: 10}]})
  
    // Windows
    const woodPairs = [
        ['copper', 'tfc:metal/rod/copper'],
        ['andesite', 'tfc_metallurgy:metal/rod/aluminum'],
        ['brass', 'tfc:metal/rod/brass'],
        ['zinc', 'tfc:metal/rod/zinc'],
        ['iron', 'firmalife:metal/rod/stainless_steel'],
        ['industrial_iron', 'createdeco:industrial_iron_sheet']
    ];
    addWindowRecipes(event, 'createdeco', woodPairs);

    swapInputs(event, [
      ['createdeco:iron_hull', 'minecraft:iron_block', 'tfc:metal/block/wrought_iron'],
      ['createdeco:copper_hull', 'minecraft:copper_block', 'tfc:metal/block/copper'],
      ['createdeco:brass_support', 'create:brass_ingot', 'tfc:metal/rod/brass'],
      ['createdeco:iron_support', 'minecraft:iron_ingot', 'tfc:metal/rod/wrought_iron'],
      ['createdeco:copper_support', 'minecraft:copper_ingot', 'tfc:metal/rod/copper'],
      ['createdeco:brass_door', 'create:brass_ingot', 'tfc:metal/sheet/brass'],
      ['createdeco:zinc_door', 'create:zinc_ingot', 'tfc:metal/sheet/zinc'],
      [{ output: 'createdeco:brass_bars' }, 'create:brass_ingot', 'tfc:metal/ingot/brass'],
      ['createdeco:andesite_door', 'create:andesite_alloy', 'tfc_metallurgy:metal/sheet/aluminum'],
      ['createdeco:andesite_trapdoor', 'create:andesite_alloy', 'tfc_metallurgy:metal/sheet/aluminum'],
      ['createdeco:andesite_support', 'create:andesite_alloy', 'tfc_metallurgy:metal/rod/aluminum']
    ])


    // Trapdoor anvil recipes
    event.remove('createdeco:andesite_trapdoor')
    event.recipes.tfc.anvil('createdeco:andesite_trapdoor', 'tfc_metallurgy:metal/sheet/aluminum', ['draw_any', 'hit_any', 'hit_last']).tier(4)
    event.remove('createdeco:brass_trapdoor')
    event.recipes.tfc.anvil('createdeco:brass_trapdoor', 'tfc:metal/sheet/brass', ['draw_any', 'hit_any', 'hit_last'])
    event.remove('createdeco:industrial_iron_trapdoor')
    event.recipes.tfc.anvil('createdeco:industrial_iron_trapdoor', 'createdeco:industrial_iron_sheet', ['draw_any', 'hit_any', 'hit_last'])
    event.remove('createdeco:zinc_trapdoor')
    event.recipes.tfc.anvil('createdeco:zinc_trapdoor', 'tfc:metal/sheet/zinc', ['draw_any', 'hit_any', 'hit_last'])

    // Andesite lamps: aluminium bars on top instead of raw andesite alloy
    swapInputs(event, [
      ['minecraft:andesite_bars', 'create:andesite_alloy', 'tfc_metallurgy:metal/rod/aluminum'],
      [{ id: /createdeco:[a-z_]*andesite_lamp/ }, 'create:andesite_alloy', 'create:andesite_bars'],
      [{ mod: 'createdeco' }, '#c:plates/andesite_alloy', 'tfc_metallurgy:metal/sheet/aluminum'],
      [{ mod: 'createdeco' }, '#c:storage_blocks/andesite_alloy', 'tfc_metallurgy:metal/block/aluminum'],
      ['createdeco:andesite_catwalk_stairs', 'createdeco:andesite_bars', 'create:andesite_bars']
    ])

    // Cut stone recipes
    event.recipes.create.sequenced_assembly(
      'dndecor:cut_packed_mud',
      'tfc:hardened_clay',
      [
        event.recipes.create.cutting('tfc:hardened_clay','tfc:hardened_clay'),
        event.recipes.vintageimprovements.polishing('tfc:hardened_clay','tfc:hardened_clay')
      ]
    ).transitionalItem('tfc:hardened_clay').loops(6)
    event.recipes.create.sequenced_assembly(
      'dndecor:cut_basalt',
      'tfc:rock/hardened/basalt',
      [
        event.recipes.create.cutting('tfc:rock/hardened/basalt','tfc:rock/hardened/basalt'),
        event.recipes.vintageimprovements.polishing('tfc:rock/hardened/basalt','tfc:rock/hardened/basalt')
      ]
    ).transitionalItem('tfc:rock/hardened/basalt').loops(6)
    event.recipes.create.sequenced_assembly(
      'dndecor:cut_blackstone',
      'tfc:rock/hardened/dolomite',
      [
        event.recipes.create.cutting('tfc:rock/hardened/dolomite','tfc:rock/hardened/dolomite'),
        event.recipes.vintageimprovements.polishing('tfc:rock/hardened/dolomite','tfc:rock/hardened/dolomite')
      ]
    ).transitionalItem('tfc:rock/hardened/dolomite').loops(6)
    event.recipes.create.sequenced_assembly(
      'dndecor:cut_dolomite',
      'tfc:rock/hardened/marble',
      [
        event.recipes.create.cutting('tfc:rock/hardened/marble','tfc:rock/hardened/marble'),
        event.recipes.vintageimprovements.polishing('tfc:rock/hardened/marble','tfc:rock/hardened/marble')
      ]
    ).transitionalItem('tfc:rock/hardened/marble').loops(6)
    event.recipes.create.sequenced_assembly(
      'dndecor:cut_gabbro',
      'tfc:rock/hardened/chert',
      [
        event.recipes.create.cutting('tfc:rock/hardened/chert','tfc:rock/hardened/chert'),
        event.recipes.vintageimprovements.polishing('tfc:rock/hardened/chert','tfc:rock/hardened/chert')
      ]
    ).transitionalItem('tfc:rock/hardened/chert').loops(6)
    event.recipes.create.sequenced_assembly(
      'dndecor:cut_stone',
      'tfc:rock/hardened/gabbro',
      [
        event.recipes.create.cutting('tfc:rock/hardened/gabbro','tfc:rock/hardened/gabbro'),
        event.recipes.vintageimprovements.polishing('tfc:rock/hardened/gabbro','tfc:rock/hardened/gabbro')
      ]
    ).transitionalItem('tfc:rock/hardened/gabbro').loops(6)
    event.recipes.create.sequenced_assembly(
      'dndecor:cut_weathered_limestone',
      'create:cut_limestone',
      [
        event.recipes.create.filling('create:cut_limestone', ['create:cut_limestone', Fluid.of('minecraft:water', 100)]),
        event.recipes.create.cutting('create:cut_limestone','create:cut_limestone'),
        event.recipes.vintageimprovements.polishing('create:cut_limestone','create:cut_limestone')
      ]
    ).transitionalItem('create:cut_limestone').loops(6)
    event.recipes.create.sequenced_assembly(
      'dndecor:cut_amethyst',
      'tfc:gem/amethyst',
      [
        event.recipes.createDeploying('tfc:gem/amethyst', ['tfc:gem/amethyst', 'tfc:gem/amethyst']),
        event.recipes.create.cutting('tfc:gem/amethyst','tfc:gem/amethyst'),
        event.recipes.vintageimprovements.polishing('tfc:gem/amethyst','tfc:gem/amethyst')
      ]
    ).transitionalItem('tfc:gem/amethyst').loops(6)

})