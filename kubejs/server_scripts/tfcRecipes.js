ServerEvents.recipes(event => {
    
   const cereals = [
        'wheat',
        'oat',
        'maize',
        'rice',
        'rye',
        'barley'
    ];

    // Remove unwanted recipes introduced by TFC
    event.remove({id: 'tfc:crafting/vanilla/redstone/powered_rail'})

    // Remove vanilla recipes with TFC alternative
    event.remove('minecraft:minecart')

    event.remove({id: 'minecraft:lightning_rod'})
    event.remove({id: 'tfc:crafting/vanilla/lightning_rod'})
    // Add a custom recipe for lightning rods
    event.recipes.create.sequenced_assembly(
        [
            Item.of('minecraft:lightning_rod', 1)
        ],
        // Input item: Smooth stone slab
        'tfc:metal/rod/copper',
        // Sequence of assembly steps
        [
            event.recipes.createFilling(
                'tfc:metal/rod/copper',
                ['tfc:metal/rod/copper', Fluid.of('tfc_metallurgy:metal/solder', 10)]
            ),
            event.recipes.createDeploying('tfc:metal/rod/copper', ['tfc:metal/rod/copper', 'tfc:metal/rod/copper']),
            event.recipes.createPressing('tfc:metal/rod/copper', 'tfc:metal/rod/copper')
        ]
    ).transitionalItem('tfc:metal/rod/copper')
    .loops(2);

    // Early game rose quartz recipes
    event.recipes.tfc.quern('kubejs:certus_quartz_powder', 'tfc_metallurgy:ore/certus_quartz')
    event.shapeless('1x kubejs:redstone_imbued_quartz_powder',[
        'kubejs:certus_quartz_powder',
        'minecraft:redstone',
        'minecraft:redstone',
        'minecraft:redstone',
        'minecraft:redstone',
        'minecraft:redstone',
        'minecraft:redstone',
        'firmalife:beeswax'
      ])
    // Consider replacing this with a compressor recipe
    event.custom({
        type: 'tfc:heating',
        ingredient: { item: 'kubejs:redstone_imbued_quartz_powder' },
        temperature: 1800,
        result_item: {
            stack: { id: 'create:rose_quartz' },
            modifiers: [{ type: 'tfc:chance', chance: 0.4 }]
        }
    })

    event.remove('tfc:crafting/powderkeg_from_barrel')
    event.replaceInput(
       { id: 'tfc:crafting/powderkeg' },
       '#tfc:lumber',
       'tfmg:hardened_planks'
    )

    // Dough recipes
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
                    {type: 'neoforge:single', fluid: 'firmalife:yeast_starter', amount: 100}
                ],
                results: [{id: `firmalife:food/${cereal}_dough`, count: 4}],
                processing_time: 500
            })
        });
    }
    addCuttingCerealRecipes(event, cereals);
    // TODO: Uncomment this when sliceanddice is fixed
    /*function addCuttingCerealRecipes(event, cereals) {
        cereals.forEach(cereal => {
            event.custom({
                type: 'sliceanddice:cutting',
                ingredients: [
                    { item: `tfc:food/${cereal}` }
                ],
                results: [
                    { item: `tfc:food/${cereal}_grain` }
                ],
                tool: {
                    tag: '#tfc:knives'
                }
            })
        });
    }*/
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
            {type: 'neoforge:single', fluid: 'firmalife:soybean_oil', amount: 100}
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
            {type: 'neoforge:single', fluid: 'tfc:olive_oil', amount: 100}
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
            {type: 'neoforge:single', fluid: 'minecraft:water', amount: 1000}
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
            {type: 'neoforge:single', fluid: 'minecraft:water', amount: 1000}
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
            {type: 'neoforge:single', fluid: 'minecraft:water', amount: 1000}
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
            {type: 'neoforge:single', fluid: 'minecraft:water', amount: 1000}
        ],
        results: [{id: 'firmalife:food/hardtack_dough', count: 4}],
        processing_time: 3000
    })

    // TODO: artisanal mod fluids (apple_juice, sugarcane_juice, etc.) no longer exist in 1.21
    /*
    // Proper alcohols
    event.remove('woodencog:mixing/barrel/cider')
    event.recipes.create.compacting(['artisanal:food/fruit_mash', Fluid.of('artisanal:apple_juice', 200)], TFC.ingredient.notRotten('tfc:food/red_apple'))
    event.recipes.create.compacting(['artisanal:food/fruit_mash', Fluid.of('artisanal:apple_juice', 200)], TFC.ingredient.notRotten('tfc:food/green_apple'))
    event.recipes.vintageimprovements.pressurizing(Fluid.of('tfc:cider'), Fluid.of('artisanal:apple_juice')).processingTime(24000)
    event.recipes.vintageimprovements.pressurizing(Fluid.of('tfcagedalcohol:aged_cider'), Fluid.of('tfc:cider')).processingTime(120000)
    event.recipes.vintageimprovements.pressurizing(Fluid.of('tfcagedalcohol:aged_beer'), Fluid.of('tfc:beer')).processingTime(120000)
    event.recipes.vintageimprovements.pressurizing(Fluid.of('tfcagedalcohol:aged_rum'), Fluid.of('tfc:rum')).processingTime(120000)
    event.recipes.vintageimprovements.pressurizing(Fluid.of('tfcagedalcohol:aged_sake'), Fluid.of('tfc:sake')).processingTime(120000)
    event.recipes.vintageimprovements.pressurizing(Fluid.of('tfcagedalcohol:aged_vodka'), Fluid.of('tfc:vodka')).processingTime(120000)
    event.recipes.vintageimprovements.pressurizing(Fluid.of('tfcagedalcohol:aged_whiskey'), Fluid.of('tfc:whiskey')).processingTime(120000)
    event.recipes.vintageimprovements.pressurizing(Fluid.of('tfcagedalcohol:aged_corn_whiskey'), Fluid.of('tfc:corn_whiskey')).processingTime(120000)
    event.recipes.vintageimprovements.pressurizing(Fluid.of('tfcagedalcohol:aged_rye_whiskey'), Fluid.of('tfc:rye_whiskey')).processingTime(120000)
    event.remove('woodencog:mixing/barrel/rum')
    event.recipes.create.mixing('artisanal:food/cleaned_sugarcane', ['tfc:food/sugarcane', Fluid.of('minecraft:water', 100)]).processingTime(4000)
    event.recipes.create.mixing('artisanal:food/cleaned_sugarcane', ['tfc:food/sugarcane', Fluid.of('artisanal:soapy_water', 100)]).processingTime(100)
    event.recipes.create.compacting([Fluid.of('artisanal:sugarcane_juice', 200)], TFC.ingredient.notRotten('artisanal:food/cleaned_sugarcane'))
    event.recipes.create.mixing(['artisanal:dirty_burlap_cloth', Fluid.of('artisanal:filtered_sugarcane_juice', 500)],
        ['tfc:burlap_cloth', Fluid.of('artisanal:sugarcane_juice', 500)]).processingTime(100)
    event.recipes.create.mixing(['artisanal:dirty_silk_cloth', Fluid.of('artisanal:filtered_sugarcane_juice', 500)],
        ['tfc:silk_cloth', Fluid.of('artisanal:sugarcane_juice', 500)]).processingTime(100)
    event.recipes.create.mixing(['artisanal:dirty_wool_cloth', Fluid.of('artisanal:filtered_sugarcane_juice', 500)],
        ['tfc:wool_cloth', Fluid.of('artisanal:sugarcane_juice', 500)]).processingTime(100)
    event.recipes.create.mixing(['tfc:dirty_jute_net', Fluid.of('artisanal:filtered_sugarcane_juice', 500)],
        ['tfc:jute_net', Fluid.of('artisanal:sugarcane_juice', 500)]).processingTime(100)
    event.recipes.vintageimprovements.pressurizing(Fluid.of('artisanal:alkalized_sugarcane_juice', 500), [Fluid.of('artisanal:filtered_sugarcane_juice', 500), 'tfc:powder/lime'])
        .processingTime(4000)
    event.recipes.create.mixing(['artisanal:dirty_burlap_cloth', Fluid.of('artisanal:clarified_sugarcane_juice', 500)],
        ['tfc:burlap_cloth', Fluid.of('artisanal:alkalized_sugarcane_juice', 500)]).processingTime(100)
    event.recipes.create.mixing(['artisanal:dirty_silk_cloth', Fluid.of('artisanal:clarified_sugarcane_juice', 500)],
        ['tfc:silk_cloth', Fluid.of('artisanal:alkalized_sugarcane_juice', 500)]).processingTime(100)
    event.recipes.create.mixing(['artisanal:dirty_wool_cloth', Fluid.of('artisanal:clarified_sugarcane_juice', 500)],
        ['tfc:wool_cloth', Fluid.of('artisanal:alkalized_sugarcane_juice', 500)]).processingTime(100)
    event.recipes.create.mixing(['tfc:dirty_jute_net', Fluid.of('artisanal:clarified_sugarcane_juice', 500)],
        ['tfc:jute_net', Fluid.of('artisanal:alkalized_sugarcane_juice', 500)]).processingTime(100)
    event.recipes.vintageimprovements.pressurizing([Fluid.of('artisanal:molasses', 20), 'artisanal:perishable_sugar'], Fluid.of('artisanal:filtered_sugarcane_juice', 200))
        .processingTime(2000).heated()
    event.recipes.vintageimprovements.pressurizing([Fluid.of('artisanal:molasses', 20), 'artisanal:perishable_sugar'], Fluid.of('artisanal:sugarcane_juice', 200))
        .processingTime(2000).heated()
    event.recipes.vintageimprovements.pressurizing([Fluid.of('artisanal:molasses', 20), 'artisanal:non_perishable_sugar'], Fluid.of('artisanal:clarified_sugarcane_juice', 200))
        .processingTime(2000).heated()
    event.recipes.vintageimprovements.pressurizing(Fluid.of('tfc:rum'), Fluid.of('artisanal:molasses')).processingTime(24000)
    */

    // Phosphorus recipes
    event.custom({type: 'vintageimprovements:pressurizing',
      ingredients: [
        {item: 'tfcvolcanoes:mineral/powder/apatite'},
        {item: 'tfcvolcanoes:mineral/powder/apatite'},
        {item: 'tfc:powder/charcoal'},
        {tag: 'c:sands/silica'}
      ],
      results: [{id: 'tfc:pure_phosphorus', count: 5}],
      heat_requirement: 'superheated',
      processing_time: 500
    })
    event.custom({type: 'vintageimprovements:pressurizing',
      ingredients: [
        {item: 'tfc:groundcover/guano'},
        {item: 'tfc:powder/charcoal'},
        {tag: 'c:sands/silica'}
      ],
      results: [{id: 'tfc:pure_phosphorus', count: 5}],
      heat_requirement: 'superheated',
      processing_time: 500
    })
    // TODO: createbb:white_phosphorus no longer exists in CreateBigCannons 1.21
    //event.remove('createbb:phase1/limestone_tag_crushing')
    //event.recipes.create.crushing('createbb:white_phosphorus', 'tfc:pure_phosphorus')

    // Cut gems with vintageimprovements polishing
    const gemTypes = [
        'ruby',
        'sapphire',
        'emerald',
        'diamond',
        'topaz',
        'amethyst',
        'opal',
        'pyrite',
        'lapis_lazuli'
    ]
    addGemPolishingRecipes(event, gemTypes)
    function addGemPolishingRecipes(event, gems) {
        gems.forEach(gem => {
            event.recipes.vintageimprovements.polishing(
                `tfc:gem/${gem}`,
                `tfc:ore/${gem}`
            )
        })
    }

    // Replace minecraft:iron_bars with tfc:metal/bars/wrought_iron
    event.replaceInput(
        { input: 'minecraft:iron_bars' },
        'minecraft:iron_bars',
        'tfc:metal/bars/wrought_iron'
    )

    // Make reinforced fire bricks by applying sheets
    event.remove('tfc:crafting/reinforced_fire_bricks_from_iron')
    event.remove('tfc:crafting/reinforced_fire_bricks_from_steel')
    event.custom({
      type: 'create:item_application',
      ingredients: [
        { item: 'tfc:fire_bricks' },
        { item: 'tfc:metal/sheet/wrought_iron' },
      ],
      results: [
        { id: 'tfc:reinforced_fire_bricks', count: 1 },
      ],
    })
    event.custom({
      type: 'create:item_application',
      ingredients: [
        { item: 'tfc:fire_bricks' },
        { item: 'tfc:metal/sheet/steel' },
      ],
      results: [
        { id: 'tfc:reinforced_fire_bricks', count: 1 },
      ],
    })
    event.recipes.create.compacting(
        [Item.of('tfc:ceramic/unfired_fire_ingot_mold', 2)], 
        '5x tfc:fire_clay'
    )
    // This kind of recipe can't be done: it can only take 1 input. Maybe it can be done with a create sequenced assembly: deploy and press.
    // event.custom({
    //     type: 'vintageimprovements:curving',
    //     ingredients: [
    //         { item: 'tfc:fire_clay' },
    //         { item: 'tfc:fire_clay' },
    //         { item: 'tfc:fire_clay' },
    //         { item: 'tfc:fire_clay' },
    //         { item: 'tfc:fire_clay' }
    //     ],
    //     results: [
    //         { 
    //             id: 'tfc:ceramic/unfired_mold_table',
    //             count: 1
    //         }
    //     ],
    //     mode: 4
    // })

}
)