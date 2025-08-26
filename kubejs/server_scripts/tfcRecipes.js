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
    event.recipes.tfc.heating('kubejs:redstone_imbued_quartz_powder', 1800)
        .resultItem('create:rose_quartz')
        .chance(0.4)

    // Replace powderkeg recipe's planks for a less accesible item
    event.remove('tfc:crafting/powderkeg_from_barrel')
    event.replaceInput(
        { id: 'tfc:crafting/powderkeg' }, // Arg 1: the filter
        '#tfc:lumber',            // Arg 2: the item to replace
        'tfmg:hardened_planks_slab'         // Arg 3: the item to replace it with
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
            event.recipes.create.mixing(
                Item.of(`firmalife:food/${cereal}_dough`, 4),
                [
                    `tfc:food/${cereal}_flour`,
                    '#tfc:sweetener',
                    Fluid.of('firmalife:yeast_starter', 100)
                ],
                500
            )
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
    event.recipes.create.mixing(
        Item.of(`firmalife:food/pizza_dough`, 4),
        [
            `#tfc:foods/dough`,
            'tfc:powder/salt',
            'firmalife:spice/basil_leaves',
            Fluid.of('firmalife:soybean_oil', 100)
        ],
        5000
    )
    event.recipes.create.mixing(
        Item.of(`firmalife:food/pizza_dough`, 4),
        [
            `#tfc:foods/dough`,
            'tfc:powder/salt',
            'firmalife:spice/basil_leaves',
            Fluid.of('tfc:olive_oil', 100)
        ],
        5000
    )
    event.recipes.create.mixing(
        Item.of(`firmalife:food/pie_dough`, 1),
        [
            `firmalife:food/butter`,
            '#firmalife:feeds_yeast',
            '#tfc:sweetener',
            Fluid.of('minecraft:water', 1000)
        ],
        5000
    )
    event.recipes.create.mixing(
        Item.of(`firmalife:food/pumpkin_pie_dough`, 1),
        [
            `minecraft:egg`,
            'tfc:food/pumpkin_chunks',
            'tfc:food/pumpkin_chunks',
            '#firmalife:feeds_yeast',
            '#tfc:sweetener',
            Fluid.of('minecraft:water', 1000)
        ],
        5000
    )
    event.recipes.create.mixing(
        Item.of(`firmalife:food/cookie_dough`, 4),
        [
            `minecraft:egg`,
            'firmalife:spice/vanilla',
            `firmalife:food/butter`,
            '#firmalife:feeds_yeast',
            '#tfc:sweetener',
            Fluid.of('minecraft:water', 1000)
        ],
        5000
    )
    event.recipes.create.mixing(
        Item.of(`firmalife:food/chocolate_chip_cookie_dough`, 4),
        [
            Item.of(`firmalife:food/cookie_dough`, 4),
            `#firmalife:foods/chocolate`,
        ],
        5000
    )
    event.recipes.create.mixing(
        Item.of(`firmalife:food/hardtack_dough`, 4),
        [
            '#firmalife:feeds_yeast',
            'tfc:powder/salt',
            Fluid.of('minecraft:water', 1000)
        ],
        3000
    )

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

    // Phosphorus recipes
    event.recipes.vintageimprovements.pressurizing(Item.of('tfc:pure_phosphorus', 5),
    ['tfcthermaldeposits:mineral/powder/apatite', 'tfcthermaldeposits:mineral/powder/apatite', 'tfc:powder/charcoal', '#tfc:silica_sand'])
    .superheated().processingTime(500)
    event.recipes.vintageimprovements.pressurizing(Item.of('tfc:pure_phosphorus', 5),
    ['tfc:groundcover/guano', 'tfc:powder/charcoal', '#tfc:silica_sand'])
    .superheated().processingTime(500)
    event.remove('createbb:phase1/limestone_tag_crushing')
    event.recipes.create.crushing('createbb:white_phosphorus', 'tfc:pure_phosphorus')

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
}
)