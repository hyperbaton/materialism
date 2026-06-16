TFCEvents.data(event => {
    event.heat({ ingredient: { item: 'tfc:silica_glass_batch' }, heat_capacity: 0.7 })
    event.heat({ ingredient: { item: 'tfc:hematitic_glass_batch' }, heat_capacity: 0.7 })
    event.heat({ ingredient: { item: 'tfc:volcanic_glass_batch' }, heat_capacity: 0.7 })
    event.heat({ ingredient: { item: 'tfc:olivine_glass_batch' }, heat_capacity: 0.7 })
})

ServerEvents.recipes(event => {
    function curvingConcave(ingredientStr) {
        const ingredient = ingredientStr.startsWith('#') ? { tag: ingredientStr.substring(1) } : { item: ingredientStr }
        return event.custom({ type: 'createvintageneoforged:curving_concave', ingredients: [ingredient], results: [{ id: ingredientStr.startsWith('#') ? 'tfc:silica_glass_batch' : ingredientStr }] })
    }
    function curvingConvex(ingredientStr) {
        const ingredient = ingredientStr.startsWith('#') ? { tag: ingredientStr.substring(1) } : { item: ingredientStr }
        return event.custom({ type: 'createvintageneoforged:curving_convex', ingredients: [ingredient], results: [{ id: ingredientStr.startsWith('#') ? 'tfc:silica_glass_batch' : ingredientStr }] })
    }
    // #1
    event.recipes.create.sequenced_assembly([
        Item.of('minecraft:pink_stained_glass', 1)
      ], Ingredient.of('tfc:silica_glass_batch'), [ // input
        event.recipes.create.deploying('tfc:silica_glass_batch', ['tfc:silica_glass_batch', 'tfc:powder/native_gold']),
        curvingConcave('#tfc:glass_batches_tier_2')
      ]).transitionalItem('tfc:silica_glass_batch').loops(1)

    // #2
    event.recipes.create.sequenced_assembly([
        Item.of('minecraft:orange_stained_glass_pane', 16)
    ], Ingredient.of('tfc:hematitic_glass_batch'), [ // input
        event.recipes.create.pressing('tfc:hematitic_glass_batch', 'tfc:hematitic_glass_batch'),
        event.recipes.create.cutting('tfc:hematitic_glass_batch', 'tfc:hematitic_glass_batch')
    ]).transitionalItem('tfc:hematitic_glass_batch').loops(1)
      
    // #3
    event.recipes.create.sequenced_assembly([
        Item.of('minecraft:brown_stained_glass_pane', 16)
    ], Ingredient.of('#tfc:glass_batches'), [ // input
        event.recipes.create.deploying('tfc:silica_glass_batch', ['tfc:silica_glass_batch', 'tfc:powder/garnierite']),
        event.recipes.create.pressing('tfc:silica_glass_batch', 'tfc:silica_glass_batch'),
        event.recipes.create.cutting('tfc:silica_glass_batch', 'tfc:silica_glass_batch')
    ]).transitionalItem('tfc:silica_glass_batch').loops(1)

    // #4
    event.recipes.create.sequenced_assembly([
        Item.of('minecraft:cyan_stained_glass')
    ], Ingredient.of('#tfc:glass_batches_tier_3'), [ // input
        event.recipes.create.deploying('tfc:volcanic_glass_batch', ['tfc:volcanic_glass_batch', 'tfc:powder/sapphire']),
        // TODO: tfc:powders/copper tag is empty in 1.21
        //event.custom({type: 'create:deploying', ingredients: [{item: 'tfc:volcanic_glass_batch'}, {tag: 'tfc:powders/copper'}], results: [{id: 'tfc:volcanic_glass_batch'}]}),
        curvingConcave('#tfc:glass_batches_tier_3')
    ]).transitionalItem('tfc:volcanic_glass_batch').loops(1)

    // #5
    event.recipes.create.sequenced_assembly([
        Item.of('minecraft:light_blue_stained_glass_pane', 16)
    ], Ingredient.of('tfc:silica_glass_batch'), [ // input
        event.recipes.create.deploying('tfc:silica_glass_batch', ['tfc:silica_glass_batch', 'tfc:powder/lapis_lazuli']),
        event.recipes.create.pressing('tfc:silica_glass_batch', 'tfc:silica_glass_batch'),
        event.recipes.create.cutting('tfc:silica_glass_batch', 'tfc:silica_glass_batch')
    ]).transitionalItem('tfc:silica_glass_batch').loops(1)
      
    // #6
    event.recipes.create.sequenced_assembly([
        Item.of('minecraft:brown_stained_glass', 1)
    ], Ingredient.of('#tfc:glass_batches'), [ // input
        event.recipes.create.deploying('tfc:silica_glass_batch', ['tfc:silica_glass_batch', 'tfc:powder/garnierite']),
        curvingConcave('#tfc:glass_batches')
    ]).transitionalItem('tfc:silica_glass_batch').loops(1)
      
    // #7
    event.recipes.create.sequenced_assembly([
        Item.of('firmalife:empty_hematitic_wine_bottle', 1)
    ], Ingredient.of('tfc:hematitic_glass_batch'), [ // input
        event.recipes.createvintageneoforged.turning('tfc:hematitic_glass_batch', 'tfc:hematitic_glass_batch'),
        event.recipes.createvintageneoforged.turning('tfc:hematitic_glass_batch', 'tfc:hematitic_glass_batch'),
        curvingConvex('tfc:hematitic_glass_batch'),
        event.recipes.create.cutting('tfc:hematitic_glass_batch', 'tfc:hematitic_glass_batch')
    ]).transitionalItem('tfc:hematitic_glass_batch').loops(1)
      
    // #8
    event.recipes.create.sequenced_assembly([
        Item.of('minecraft:blue_stained_glass_pane', 16)
    ], Ingredient.of('tfc:volcanic_glass_batch'), [ // input
        event.recipes.create.pressing('tfc:volcanic_glass_batch', 'tfc:volcanic_glass_batch'),
        event.recipes.create.cutting('tfc:volcanic_glass_batch', 'tfc:volcanic_glass_batch')
    ]).transitionalItem('tfc:volcanic_glass_batch').loops(1)
      
    // #9
    event.recipes.create.sequenced_assembly([
        Item.of('tfc:lens', 1)
    ], Ingredient.of('tfc:silica_glass_batch'), [ // input
        event.recipes.createvintageneoforged.turning('tfc:silica_glass_batch', 'tfc:silica_glass_batch'),
        event.recipes.createvintageneoforged.hammering('tfc:silica_glass_batch', 'tfc:silica_glass_batch').hammerBlows(2).anvilBlock('tfc:metal/anvil/steel'),
        event.recipes.createvintageneoforged.polishing('tfc:silica_glass_batch', 'tfc:silica_glass_batch'),
        event.recipes.create.cutting('tfc:silica_glass_batch', 'tfc:silica_glass_batch')
    ]).transitionalItem('tfc:silica_glass_batch').loops(1)

    // #10
    event.custom({ type: 'createvintageneoforged:curving_concave', ingredients: [{ item: 'tfc:olivine_glass_batch' }], results: [{ id: 'minecraft:green_stained_glass' }] })

    // #11
    event.recipes.create.sequenced_assembly([
        Item.of('firmalife:wine_glass', 2)
    ], Ingredient.of('tfc:silica_glass_batch'), [ // input
        event.recipes.createvintageneoforged.turning('tfc:silica_glass_batch', 'tfc:silica_glass_batch'),
        event.recipes.createvintageneoforged.turning('tfc:silica_glass_batch', 'tfc:silica_glass_batch'),
        curvingConvex('tfc:silica_glass_batch'),
        event.recipes.create.cutting('tfc:silica_glass_batch', 'tfc:silica_glass_batch')
    ]).transitionalItem('tfc:silica_glass_batch').loops(1)
      
    // #12
    event.recipes.create.sequenced_assembly([
        Item.of('minecraft:blue_stained_glass_pane', 16)
      ], Ingredient.of('tfc:silica_glass_batch'), [ // input
        // TODO: tfc:powders/copper tag is empty in 1.21
        //event.custom({type: 'create:deploying', ingredients: [{item: 'tfc:silica_glass_batch'}, {tag: 'tfc:powders/copper'}], results: [{id: 'tfc:silica_glass_batch'}]}),
        event.recipes.create.pressing('tfc:silica_glass_batch', 'tfc:silica_glass_batch'),
        event.recipes.create.cutting('tfc:silica_glass_batch', 'tfc:silica_glass_batch')
    ]).transitionalItem('tfc:silica_glass_batch').loops(1)

    // #13
    event.custom({ type: 'createvintageneoforged:curving_concave', ingredients: [{ item: 'tfc:silica_glass_batch' }], results: [{ id: 'minecraft:glass' }] })

    // #14
    event.custom({ type: 'createvintageneoforged:curving_concave', ingredients: [{ item: 'tfc:hematitic_glass_batch' }], results: [{ id: 'minecraft:orange_stained_glass' }] })

    // #15
    event.recipes.create.sequenced_assembly([
        Item.of('minecraft:lime_stained_glass')
    ], Ingredient.of('#tfc:glass_batches_tier_2'), [ // input
        // TODO: tfc:powders/iron tag is empty in 1.21
        //event.custom({type: 'create:deploying', ingredients: [{item: 'tfc:hematitic_glass_batch'}, {tag: 'tfc:powders/iron'}], results: [{id: 'tfc:hematitic_glass_batch'}]}),
        event.recipes.create.deploying('tfc:hematitic_glass_batch', ['tfc:hematitic_glass_batch', 'tfc:powder/soda_ash']),
        curvingConcave('#tfc:glass_batches_tier_2')
    ]).transitionalItem('tfc:hematitic_glass_batch').loops(1)

    // #16
    event.recipes.create.sequenced_assembly([
        Item.of('minecraft:gray_stained_glass_pane', 16)
    ], Ingredient.of('#tfc:glass_batches'), [ // input
        event.recipes.create.deploying('tfc:silica_glass_batch', ['tfc:silica_glass_batch', 'tfc:powder/graphite']),
        event.recipes.create.deploying('tfc:silica_glass_batch', ['tfc:silica_glass_batch', 'tfc:powder/soda_ash']),
        event.recipes.create.pressing('tfc:silica_glass_batch', 'tfc:silica_glass_batch'),
        event.recipes.create.cutting('tfc:silica_glass_batch', 'tfc:silica_glass_batch')
    ]).transitionalItem('tfc:silica_glass_batch').loops(1)

    // #17
    event.recipes.create.sequenced_assembly([
        Item.of('minecraft:red_stained_glass_pane', 16)
    ], Ingredient.of('#tfc:glass_batches_tier_2'), [ // input
        event.recipes.create.deploying('tfc:hematitic_glass_batch', ['tfc:hematitic_glass_batch', 'tfc:powder/cassiterite']),
        event.recipes.create.pressing('tfc:hematitic_glass_batch', 'tfc:hematitic_glass_batch'),
        event.recipes.create.cutting('tfc:hematitic_glass_batch', 'tfc:hematitic_glass_batch')
    ]).transitionalItem('tfc:hematitic_glass_batch').loops(1)

    // #18
    event.recipes.create.sequenced_assembly([
        Item.of('minecraft:lime_stained_glass_pane', 16)
    ], Ingredient.of('#tfc:glass_batches_tier_2'), [ // input
        event.recipes.create.deploying('tfc:hematitic_glass_batch', ['tfc:hematitic_glass_batch', 'tfc:powder/soda_ash']),
        // TODO: tfc:powders/iron tag is empty in 1.21
        //event.custom({type: 'create:deploying', ingredients: [{item: 'tfc:hematitic_glass_batch'}, {tag: 'tfc:powders/iron'}], results: [{id: 'tfc:hematitic_glass_batch'}]}),
        event.recipes.create.pressing('tfc:hematitic_glass_batch', 'tfc:hematitic_glass_batch'),
        event.recipes.create.cutting('tfc:hematitic_glass_batch', 'tfc:hematitic_glass_batch')
    ]).transitionalItem('tfc:hematitic_glass_batch').loops(1)

    // #19
    event.recipes.create.sequenced_assembly([
        Item.of('minecraft:orange_stained_glass')
    ], Ingredient.of('tfc:silica_glass_batch'), [ // input
        event.recipes.create.deploying('tfc:silica_glass_batch', ['tfc:silica_glass_batch', 'tfc:powder/pyrite']),
        curvingConcave('tfc:silica_glass_batch')
    ]).transitionalItem('tfc:silica_glass_batch').loops(1)

    // #20
    event.recipes.create.sequenced_assembly([
        Item.of('minecraft:light_gray_stained_glass', 1)
    ], Ingredient.of('#tfc:glass_batches'), [ // input
        event.recipes.create.deploying('tfc:silica_glass_batch', ['tfc:silica_glass_batch', 'tfc:powder/graphite']),
        event.recipes.create.deploying('tfc:silica_glass_batch', ['tfc:silica_glass_batch', 'tfc:powder/soda_ash']),
        event.recipes.create.deploying('tfc:silica_glass_batch', ['tfc:silica_glass_batch', 'tfc:powder/soda_ash']),
        curvingConcave('#tfc:glass_batches')
    ]).transitionalItem('tfc:silica_glass_batch').loops(1)
    
    // #21
    event.recipes.create.sequenced_assembly([
        Item.of('minecraft:cyan_stained_glass', 1)
    ], Ingredient.of('#tfc:glass_batches_tier_2'), [ // input
        // TODO: tfc:powders/copper tag is empty in 1.21
        //event.custom({type: 'create:deploying', ingredients: [{item: 'tfc:hematitic_glass_batch'}, {tag: 'tfc:powders/copper'}], results: [{id: 'tfc:hematitic_glass_batch'}]}),
        event.recipes.create.deploying('tfc:hematitic_glass_batch', ['tfc:hematitic_glass_batch', 'tfc:powder/sapphire']),
        curvingConcave('#tfc:glass_batches_tier_2')
    ]).transitionalItem('tfc:hematitic_glass_batch').loops(1)
    
    // #22
    event.recipes.create.sequenced_assembly([
        Item.of('minecraft:light_gray_stained_glass', 1)
    ], Ingredient.of('#tfc:glass_batches'), [ // input
        event.recipes.create.deploying('tfc:silica_glass_batch', ['tfc:silica_glass_batch', 'tfc:powder/soda_ash']),
        event.recipes.create.deploying('tfc:silica_glass_batch', ['tfc:silica_glass_batch', 'tfc:powder/soda_ash']),
        event.recipes.create.deploying('tfc:silica_glass_batch', ['tfc:silica_glass_batch', 'tfc:powder/graphite']),
        curvingConcave('#tfc:glass_batches')
    ]).transitionalItem('tfc:silica_glass_batch').loops(1)
    
    // #23
    event.recipes.create.sequenced_assembly([
        Item.of('minecraft:cyan_stained_glass_pane', 16)
    ], Ingredient.of('#tfc:glass_batches_tier_3'), [ // input
        event.recipes.create.deploying('tfc:volcanic_glass_batch', ['tfc:volcanic_glass_batch', 'tfc:powder/sapphire']),
        // TODO: tfc:powders/copper tag is empty in 1.21
        //event.custom({type: 'create:deploying', ingredients: [{item: 'tfc:volcanic_glass_batch'}, {tag: 'tfc:powders/copper'}], results: [{id: 'tfc:volcanic_glass_batch'}]}),
        event.recipes.create.pressing('tfc:volcanic_glass_batch', 'tfc:volcanic_glass_batch'),
        event.recipes.create.cutting('tfc:volcanic_glass_batch', 'tfc:volcanic_glass_batch')
    ]).transitionalItem('tfc:volcanic_glass_batch').loops(1)
    
    // #24
    event.recipes.create.sequenced_assembly([
        Item.of('minecraft:glass_pane', 16)
    ], Ingredient.of('tfc:silica_glass_batch'), [ // input
        event.recipes.create.pressing('tfc:silica_glass_batch', 'tfc:silica_glass_batch'),
        event.recipes.create.cutting('tfc:silica_glass_batch', 'tfc:silica_glass_batch')
    ]).transitionalItem('tfc:silica_glass_batch').loops(1)
    
    // #25
    event.recipes.create.sequenced_assembly([
        Item.of('minecraft:light_gray_stained_glass', 1)
    ], Ingredient.of('#tfc:glass_batches'), [ // input
        event.recipes.create.deploying('tfc:silica_glass_batch', ['tfc:silica_glass_batch', 'tfc:powder/soda_ash']),
        event.recipes.create.deploying('tfc:silica_glass_batch', ['tfc:silica_glass_batch', 'tfc:powder/graphite']),
        event.recipes.create.deploying('tfc:silica_glass_batch', ['tfc:silica_glass_batch', 'tfc:powder/soda_ash']),
        curvingConcave('#tfc:glass_batches')
    ]).transitionalItem('tfc:silica_glass_batch').loops(1)

    // #26
    event.recipes.create.sequenced_assembly([
        Item.of('minecraft:light_blue_stained_glass', 1)
    ], Ingredient.of('tfc:silica_glass_batch'), [ // input
        event.recipes.create.deploying('tfc:silica_glass_batch', ['tfc:silica_glass_batch', 'tfc:powder/lapis_lazuli']),
        curvingConcave('tfc:silica_glass_batch')
    ]).transitionalItem('tfc:silica_glass_batch').loops(1)
    
    // #27
    event.recipes.create.sequenced_assembly([
        Item.of('minecraft:red_stained_glass', 1)
    ], Ingredient.of('#tfc:glass_batches_tier_2'), [ // input
        event.recipes.create.deploying('tfc:hematitic_glass_batch', ['tfc:hematitic_glass_batch', 'tfc:powder/cassiterite']),
        curvingConcave('#tfc:glass_batches_tier_2')
    ]).transitionalItem('tfc:hematitic_glass_batch').loops(1)
    
    // #28
    event.recipes.create.sequenced_assembly([
        Item.of('tfc:olivine_glass_bottle', 1)
    ], Ingredient.of('tfc:olivine_glass_batch'), [ // input
        event.recipes.createvintageneoforged.turning('tfc:olivine_glass_batch', 'tfc:olivine_glass_batch'),
        curvingConvex('tfc:olivine_glass_batch'),
        event.recipes.create.cutting('tfc:olivine_glass_batch', 'tfc:olivine_glass_batch')
    ]).transitionalItem('tfc:olivine_glass_batch').loops(1)
    
    // #29
    event.recipes.create.sequenced_assembly([
        Item.of('minecraft:yellow_stained_glass', 1)
    ], Ingredient.of('#tfc:glass_batches_tier_2'), [ // input
        event.recipes.create.deploying('tfc:hematitic_glass_batch', ['tfc:hematitic_glass_batch', 'tfc:powder/native_silver']),
        curvingConcave('#tfc:glass_batches_tier_2')
    ]).transitionalItem('tfc:hematitic_glass_batch').loops(1)
    
    // #30
    event.recipes.create.sequenced_assembly([
        Item.of('firmalife:empty_volcanic_wine_bottle', 1)
    ], Ingredient.of('tfc:volcanic_glass_batch'), [ // input
        event.recipes.createvintageneoforged.turning('tfc:volcanic_glass_batch', 'tfc:volcanic_glass_batch'),
        event.recipes.createvintageneoforged.turning('tfc:volcanic_glass_batch', 'tfc:volcanic_glass_batch'),
        curvingConvex('tfc:volcanic_glass_batch'),
        event.recipes.create.cutting('tfc:volcanic_glass_batch', 'tfc:volcanic_glass_batch')
    ]).transitionalItem('tfc:volcanic_glass_batch').loops(1)
    
    // #31
    event.custom({ type: 'createvintageneoforged:curving_concave', ingredients: [{ item: 'tfc:volcanic_glass_batch' }], results: [{ id: 'minecraft:blue_stained_glass' }] })
    
    // #32
    event.recipes.create.sequenced_assembly([
        Item.of('minecraft:magenta_stained_glass_pane', 16)
    ], Ingredient.of('#tfc:glass_batches_tier_2'), [ // input
        event.recipes.create.deploying('tfc:hematitic_glass_batch', ['tfc:hematitic_glass_batch', 'tfc:powder/ruby']),
        event.recipes.create.pressing('tfc:hematitic_glass_batch', 'tfc:hematitic_glass_batch'),
        event.recipes.create.cutting('tfc:hematitic_glass_batch', 'tfc:hematitic_glass_batch')
    ]).transitionalItem('tfc:hematitic_glass_batch').loops(1)

    // #33
    event.recipes.create.sequenced_assembly([
        Item.of('minecraft:pink_stained_glass_pane', 16)
    ], Ingredient.of('tfc:silica_glass_batch'), [ // input
        event.recipes.create.deploying('tfc:silica_glass_batch', ['tfc:silica_glass_batch', 'tfc:powder/native_gold']),
        event.recipes.create.pressing('tfc:silica_glass_batch', 'tfc:silica_glass_batch'),
        event.recipes.create.cutting('tfc:silica_glass_batch', 'tfc:silica_glass_batch')
    ]).transitionalItem('tfc:silica_glass_batch').loops(1)
    
    // #34
    event.recipes.create.sequenced_assembly([
        Item.of('minecraft:black_stained_glass_pane', 16)
    ], Ingredient.of('#tfc:glass_batches'), [ // input
        event.recipes.create.deploying('tfc:silica_glass_batch', ['tfc:silica_glass_batch', 'tfc:powder/graphite']),
        event.recipes.create.pressing('tfc:silica_glass_batch', 'tfc:silica_glass_batch'),
        event.recipes.create.cutting('tfc:silica_glass_batch', 'tfc:silica_glass_batch')
    ]).transitionalItem('tfc:silica_glass_batch').loops(1)

    // #35
    event.recipes.create.sequenced_assembly([
        Item.of('minecraft:lime_stained_glass', 1)
    ], Ingredient.of('#tfc:glass_batches_tier_2'), [ // input
        event.recipes.create.deploying('tfc:hematitic_glass_batch', ['tfc:hematitic_glass_batch', 'tfc:powder/soda_ash']),
        // TODO: tfc:powders/iron tag is empty in 1.21
        //event.custom({type: 'create:deploying', ingredients: [{item: 'tfc:hematitic_glass_batch'}, {tag: 'tfc:powders/iron'}], results: [{id: 'tfc:hematitic_glass_batch'}]}),
        curvingConcave('#tfc:glass_batches_tier_2')
    ]).transitionalItem('tfc:hematitic_glass_batch').loops(1)

    // #36
    event.recipes.create.sequenced_assembly([
        Item.of('tfc:hematitic_glass_bottle', 1)
    ], Ingredient.of('tfc:hematitic_glass_batch'), [ // input
        event.recipes.createvintageneoforged.turning('tfc:hematitic_glass_batch', 'tfc:hematitic_glass_batch'),
        curvingConvex('tfc:hematitic_glass_batch'),
        event.recipes.create.cutting('tfc:hematitic_glass_batch', 'tfc:hematitic_glass_batch')
    ]).transitionalItem('tfc:hematitic_glass_batch').loops(1)
    
    // #37
    event.recipes.create.sequenced_assembly([
        Item.of('minecraft:green_stained_glass_pane', 16)
    ], Ingredient.of('tfc:olivine_glass_batch'), [ // input
        event.recipes.create.pressing('tfc:olivine_glass_batch', 'tfc:olivine_glass_batch'),
        event.recipes.create.cutting('tfc:olivine_glass_batch', 'tfc:olivine_glass_batch')
    ]).transitionalItem('tfc:olivine_glass_batch').loops(1)
    
    // #38
    event.recipes.create.sequenced_assembly([
        Item.of('minecraft:green_stained_glass', 1)
    ], Ingredient.of('#tfc:glass_batches_tier_2'), [ // input
        // TODO: tfc:powders/iron tag is empty in 1.21
        //event.custom({type: 'create:deploying', ingredients: [{item: 'tfc:hematitic_glass_batch'}, {tag: 'tfc:powders/iron'}], results: [{id: 'tfc:hematitic_glass_batch'}]}),
        curvingConcave('#tfc:glass_batches_tier_2')
    ]).transitionalItem('tfc:hematitic_glass_batch').loops(1)
    
    // #39
    event.recipes.create.sequenced_assembly([
        Item.of('minecraft:light_gray_stained_glass_pane', 16)
    ], Ingredient.of('#tfc:glass_batches_tier_2'), [ // input
        event.recipes.create.deploying('tfc:hematitic_glass_batch', ['tfc:hematitic_glass_batch', 'tfc:powder/soda_ash']),
        event.recipes.create.deploying('tfc:hematitic_glass_batch', ['tfc:hematitic_glass_batch', 'tfc:powder/graphite']),
        event.recipes.create.deploying('tfc:hematitic_glass_batch', ['tfc:hematitic_glass_batch', 'tfc:powder/soda_ash']),
        event.recipes.create.pressing('tfc:hematitic_glass_batch', 'tfc:hematitic_glass_batch'),
        event.recipes.create.cutting('tfc:hematitic_glass_batch', 'tfc:hematitic_glass_batch')
    ]).transitionalItem('tfc:hematitic_glass_batch').loops(1)
    
    // #40
    event.recipes.create.sequenced_assembly([
        Item.of('minecraft:light_gray_stained_glass_pane', 16)
    ], Ingredient.of('#tfc:glass_batches_tier_2'), [ // input
        event.recipes.create.deploying('tfc:hematitic_glass_batch', ['tfc:hematitic_glass_batch', 'tfc:powder/soda_ash']),
        event.recipes.create.deploying('tfc:hematitic_glass_batch', ['tfc:hematitic_glass_batch', 'tfc:powder/soda_ash']),
        event.recipes.create.deploying('tfc:hematitic_glass_batch', ['tfc:hematitic_glass_batch', 'tfc:powder/graphite']),
        event.recipes.create.pressing('tfc:hematitic_glass_batch', 'tfc:hematitic_glass_batch'),
        event.recipes.create.cutting('tfc:hematitic_glass_batch', 'tfc:hematitic_glass_batch')
    ]).transitionalItem('tfc:hematitic_glass_batch').loops(1)

    // #41
    event.recipes.create.sequenced_assembly([
        Item.of('firmalife:empty_olivine_wine_bottle', 1)
    ], Ingredient.of('tfc:olivine_glass_batch'), [ // input
        event.recipes.createvintageneoforged.turning('tfc:olivine_glass_batch', 'tfc:olivine_glass_batch'),
        event.recipes.createvintageneoforged.turning('tfc:olivine_glass_batch', 'tfc:olivine_glass_batch'),
        curvingConvex('tfc:olivine_glass_batch'),
        event.recipes.create.cutting('tfc:olivine_glass_batch', 'tfc:olivine_glass_batch')
    ]).transitionalItem('tfc:olivine_glass_batch').loops(1)

    // #42
    event.recipes.create.sequenced_assembly([
        Item.of('minecraft:lime_stained_glass_pane', 16)
    ], Ingredient.of('#tfc:glass_batches_tier_2'), [ // input
        // TODO: tfc:powders/iron tag is empty in 1.21
        //event.custom({type: 'create:deploying', ingredients: [{item: 'tfc:hematitic_glass_batch'}, {tag: 'tfc:powders/iron'}], results: [{id: 'tfc:hematitic_glass_batch'}]}),
        event.recipes.create.deploying('tfc:hematitic_glass_batch', ['tfc:hematitic_glass_batch', 'tfc:powder/soda_ash']),
        event.recipes.create.pressing('tfc:hematitic_glass_batch', 'tfc:hematitic_glass_batch'),
        event.recipes.create.cutting('tfc:hematitic_glass_batch', 'tfc:hematitic_glass_batch')
    ]).transitionalItem('tfc:hematitic_glass_batch').loops(1)
      
    // #43
    event.recipes.create.sequenced_assembly([
        Item.of('minecraft:light_gray_stained_glass_pane', 16)
    ], Ingredient.of('#tfc:glass_batches_tier_2'), [ // input
        event.recipes.create.deploying('tfc:hematitic_glass_batch', ['tfc:hematitic_glass_batch', 'tfc:powder/graphite']),
        event.recipes.create.deploying('tfc:hematitic_glass_batch', ['tfc:hematitic_glass_batch', 'tfc:powder/soda_ash']),
        event.recipes.create.deploying('tfc:hematitic_glass_batch', ['tfc:hematitic_glass_batch', 'tfc:powder/soda_ash']),
        event.recipes.create.pressing('tfc:hematitic_glass_batch', 'tfc:hematitic_glass_batch'),
        event.recipes.create.cutting('tfc:hematitic_glass_batch', 'tfc:hematitic_glass_batch')
    ]).transitionalItem('tfc:hematitic_glass_batch').loops(1)

    // #44
    event.recipes.create.sequenced_assembly([
        Item.of('minecraft:cyan_stained_glass_pane', 16)
    ], Ingredient.of('#tfc:glass_batches_tier_3'), [ // input
        // TODO: tfc:powders/copper tag is empty in 1.21
        //event.custom({type: 'create:deploying', ingredients: [{item: 'tfc:volcanic_glass_batch'}, {tag: 'tfc:powders/copper'}], results: [{id: 'tfc:volcanic_glass_batch'}]}),
        event.recipes.create.deploying('tfc:volcanic_glass_batch', ['tfc:volcanic_glass_batch', 'tfc:powder/sapphire']),
        event.recipes.create.pressing('tfc:volcanic_glass_batch', 'tfc:volcanic_glass_batch'),
        event.recipes.create.cutting('tfc:volcanic_glass_batch', 'tfc:volcanic_glass_batch')
    ]).transitionalItem('tfc:volcanic_glass_batch').loops(1)

    // #45
    event.recipes.create.sequenced_assembly([
        Item.of('minecraft:yellow_stained_glass_pane', 16)
    ], Ingredient.of('#tfc:glass_batches_tier_2'), [ // input
        event.recipes.create.deploying('tfc:hematitic_glass_batch', ['tfc:hematitic_glass_batch', 'tfc:powder/native_silver']),
        event.recipes.create.pressing('tfc:hematitic_glass_batch', 'tfc:hematitic_glass_batch'),
        event.recipes.create.cutting('tfc:hematitic_glass_batch', 'tfc:hematitic_glass_batch')
    ]).transitionalItem('tfc:hematitic_glass_batch').loops(1)

    // #46
    event.recipes.create.sequenced_assembly([
        Item.of('tfc:silica_glass_bottle', 1)
    ], Ingredient.of('tfc:silica_glass_batch'), [ // input
        event.recipes.createvintageneoforged.turning('tfc:silica_glass_batch', 'tfc:silica_glass_batch'),
        curvingConvex('tfc:silica_glass_batch'),
        event.recipes.create.cutting('tfc:silica_glass_batch', 'tfc:silica_glass_batch')
    ]).transitionalItem('tfc:silica_glass_batch').loops(1)

    // #47
    event.recipes.create.sequenced_assembly([
        Item.of('minecraft:gray_stained_glass', 1)
    ], Ingredient.of('#tfc:glass_batches'), [ // input
        event.recipes.create.deploying('tfc:silica_glass_batch', ['tfc:silica_glass_batch', 'tfc:powder/soda_ash']),
        event.recipes.create.deploying('tfc:silica_glass_batch', ['tfc:silica_glass_batch', 'tfc:powder/graphite']),
        curvingConcave('#tfc:glass_batches')
    ]).transitionalItem('tfc:silica_glass_batch').loops(1)
    
    // #48
    event.recipes.create.sequenced_assembly([
        Item.of('minecraft:black_stained_glass', 1)
    ], Ingredient.of('#tfc:glass_batches'), [ // input
        event.recipes.create.deploying('tfc:silica_glass_batch', ['tfc:silica_glass_batch', 'tfc:powder/graphite']),
        curvingConcave('#tfc:glass_batches')
    ]).transitionalItem('tfc:silica_glass_batch').loops(1)

    // #49
    event.recipes.create.sequenced_assembly([
        Item.of('minecraft:purple_stained_glass_pane', 16)
    ], Ingredient.of('#tfc:glass_batches'), [ // input
        // TODO: tfc:powders/iron tag is empty in 1.21
        //event.custom({type: 'create:deploying', ingredients: [{item: 'tfc:silica_glass_batch'}, {tag: 'tfc:powders/iron'}], results: [{id: 'tfc:silica_glass_batch'}]}),
        // TODO: tfc:powders/copper tag is empty in 1.21
        //event.custom({type: 'create:deploying', ingredients: [{item: 'tfc:silica_glass_batch'}, {tag: 'tfc:powders/copper'}], results: [{id: 'tfc:silica_glass_batch'}]}),
        curvingConcave('#tfc:glass_batches'),
        event.recipes.create.pressing('tfc:silica_glass_batch', 'tfc:silica_glass_batch'),
        event.recipes.create.cutting('tfc:silica_glass_batch', 'tfc:silica_glass_batch')
    ]).transitionalItem('tfc:silica_glass_batch').loops(1)

    // #50
    event.recipes.create.sequenced_assembly([
        Item.of('minecraft:purple_stained_glass', 1)
    ], Ingredient.of('#tfc:glass_batches'), [ // input
        // TODO: tfc:powders/iron tag is empty in 1.21
        //event.custom({type: 'create:deploying', ingredients: [{item: 'tfc:silica_glass_batch'}, {tag: 'tfc:powders/iron'}], results: [{id: 'tfc:silica_glass_batch'}]}),
        // TODO: tfc:powders/copper tag is empty in 1.21
        //event.custom({type: 'create:deploying', ingredients: [{item: 'tfc:silica_glass_batch'}, {tag: 'tfc:powders/copper'}], results: [{id: 'tfc:silica_glass_batch'}]}),
        curvingConcave('#tfc:glass_batches')
    ]).transitionalItem('tfc:silica_glass_batch').loops(1)

    // #51
    event.recipes.create.sequenced_assembly([
        Item.of('minecraft:white_stained_glass', 1)
    ], Ingredient.of('#tfc:glass_batches_tier_2'), [ // input
        event.recipes.create.deploying('tfc:hematitic_glass_batch', ['tfc:hematitic_glass_batch', 'tfc:powder/soda_ash']),
        curvingConcave('#tfc:glass_batches_tier_2')
    ]).transitionalItem('tfc:hematitic_glass_batch').loops(1)

    // #52
    event.recipes.create.sequenced_assembly([
        Item.of('firmalife:reinforced_glass', 16)
    ], Ingredient.of('tfc:silica_glass_batch'), [ // input
        event.recipes.create.pressing('tfc:silica_glass_batch', 'tfc:silica_glass_batch'),
        event.recipes.create.deploying('tfc:silica_glass_batch', ['tfc:silica_glass_batch', 'tfc:powder/soda_ash']),
        event.recipes.create.pressing('tfc:silica_glass_batch', 'tfc:silica_glass_batch'),
        event.recipes.create.cutting('tfc:silica_glass_batch', 'tfc:silica_glass_batch')
    ]).transitionalItem('tfc:silica_glass_batch').loops(1)
    
    // #53
    event.recipes.create.sequenced_assembly([
        Item.of('minecraft:blue_stained_glass', 1)
    ], Ingredient.of('tfc:silica_glass_batch'), [ // input
        // TODO: tfc:powders/copper tag is empty in 1.21
        //event.custom({type: 'create:deploying', ingredients: [{item: 'tfc:silica_glass_batch'}, {tag: 'tfc:powders/copper'}], results: [{id: 'tfc:silica_glass_batch'}]}),
        curvingConcave('tfc:silica_glass_batch')
    ]).transitionalItem('tfc:silica_glass_batch').loops(1)
    
    // #54
    // TODO: butcher:jar no longer exists (butcher mod not in 1.21)
    event.recipes.create.sequenced_assembly([
        Item.of('minecraft:glass_bottle', 1)
      ], '#tfc:glass_batches_tier_2', [ // input
        event.recipes.createvintageneoforged.turning('tfc:hematitic_glass_batch', 'tfc:hematitic_glass_batch'),
        event.recipes.createvintageneoforged.turning('tfc:hematitic_glass_batch', 'tfc:hematitic_glass_batch'),
        event.recipes.create.pressing('tfc:hematitic_glass_batch', 'tfc:hematitic_glass_batch'),
        curvingConvex('#tfc:glass_batches_tier_2'),
        event.recipes.create.cutting('tfc:hematitic_glass_batch', 'tfc:hematitic_glass_batch')
      ]).transitionalItem('tfc:hematitic_glass_batch').loops(1)
    
    // #55
      event.recipes.create.sequenced_assembly([
          Item.of('minecraft:tinted_glass', 1)
      ], Ingredient.of('#tfc:glass_batches_tier_2'), [ // input
          event.recipes.create.deploying('tfc:hematitic_glass_batch', ['tfc:hematitic_glass_batch', 'tfc:powder/amethyst']),
          curvingConcave('#tfc:glass_batches_tier_2')
      ]).transitionalItem('tfc:hematitic_glass_batch').loops(1)

    // #56
      event.recipes.create.sequenced_assembly([
          Item.of('minecraft:green_stained_glass_pane', 16)
      ], Ingredient.of('#tfc:glass_batches_tier_2'), [ // input
          // TODO: tfc:powders/iron tag is empty in 1.21
        //event.custom({type: 'create:deploying', ingredients: [{item: 'tfc:hematitic_glass_batch'}, {tag: 'tfc:powders/iron'}], results: [{id: 'tfc:hematitic_glass_batch'}]}),
          event.recipes.create.pressing('tfc:hematitic_glass_batch', 'tfc:hematitic_glass_batch'),
          event.recipes.create.cutting('tfc:hematitic_glass_batch', 'tfc:hematitic_glass_batch')
      ]).transitionalItem('tfc:hematitic_glass_batch').loops(1)
    
    // #57
      event.recipes.create.sequenced_assembly([
          Item.of('minecraft:gray_stained_glass', 1)
      ], Ingredient.of('#tfc:glass_batches'), [ // input
          event.recipes.create.deploying('tfc:silica_glass_batch', ['tfc:silica_glass_batch', 'tfc:powder/graphite']),
          event.recipes.create.deploying('tfc:silica_glass_batch', ['tfc:silica_glass_batch', 'tfc:powder/soda_ash']),
          curvingConcave('#tfc:glass_batches')
      ]).transitionalItem('tfc:silica_glass_batch').loops(1)

    // #58
    event.recipes.create.sequenced_assembly([
        Item.of('minecraft:gray_stained_glass_pane', 16)
    ], Ingredient.of('#tfc:glass_batches'), [ // input
    event.recipes.create.deploying('tfc:silica_glass_batch', ['tfc:silica_glass_batch', 'tfc:powder/soda_ash']),
        event.recipes.create.deploying('tfc:silica_glass_batch', ['tfc:silica_glass_batch', 'tfc:powder/graphite']),
        event.recipes.create.pressing('tfc:silica_glass_batch', 'tfc:silica_glass_batch'),
        event.recipes.create.cutting('tfc:silica_glass_batch', 'tfc:silica_glass_batch')
    ]).transitionalItem('tfc:silica_glass_batch').loops(1)

    // #59
    event.recipes.create.sequenced_assembly([
        Item.of('minecraft:orange_stained_glass_pane', 16)
    ], Ingredient.of('tfc:silica_glass_batch'), [ // input
        event.recipes.create.deploying('tfc:silica_glass_batch', ['tfc:silica_glass_batch', 'tfc:powder/pyrite']),
        event.recipes.create.pressing('tfc:silica_glass_batch', 'tfc:silica_glass_batch'),
        event.recipes.create.cutting('tfc:silica_glass_batch', 'tfc:silica_glass_batch')
    ]).transitionalItem('tfc:silica_glass_batch').loops(1)

    // #60
    event.recipes.create.sequenced_assembly([
        Item.of('minecraft:magenta_stained_glass', 1)
    ], Ingredient.of('#tfc:glass_batches_tier_2'), [ // input
        event.recipes.create.deploying('tfc:hematitic_glass_batch', ['tfc:hematitic_glass_batch', 'tfc:powder/ruby']),
        curvingConcave('#tfc:glass_batches_tier_2')
    ]).transitionalItem('tfc:hematitic_glass_batch').loops(1)
    
    // #61    
    event.recipes.create.sequenced_assembly([
        Item.of('tfc:volcanic_glass_bottle', 1)
    ], Ingredient.of('tfc:volcanic_glass_batch'), [ // input
        event.recipes.createvintageneoforged.turning('tfc:volcanic_glass_batch', 'tfc:volcanic_glass_batch'),
        curvingConvex('tfc:volcanic_glass_batch'),
        event.recipes.create.cutting('tfc:volcanic_glass_batch', 'tfc:volcanic_glass_batch')
    ]).transitionalItem('tfc:volcanic_glass_batch').loops(1)
    
    // #62
    event.recipes.create.sequenced_assembly([
        Item.of('tfc:lamp_glass', 1)
    ], Ingredient.of('#tfc:glass_batches'), [ // input
        event.recipes.createvintageneoforged.turning('tfc:silica_glass_batch', 'tfc:silica_glass_batch'),
        curvingConvex('#tfc:glass_batches'),
        event.recipes.create.pressing('tfc:silica_glass_batch', 'tfc:silica_glass_batch'),
        event.recipes.createvintageneoforged.turning('tfc:silica_glass_batch', 'tfc:silica_glass_batch'),
        event.recipes.create.cutting('tfc:silica_glass_batch', 'tfc:silica_glass_batch')
    ]).transitionalItem('tfc:silica_glass_batch').loops(1)

    // #63
    event.recipes.create.sequenced_assembly([
        Item.of('minecraft:white_stained_glass_pane', 16)
    ], Ingredient.of('#tfc:glass_batches_tier_2'), [ // input
        event.recipes.create.deploying('tfc:hematitic_glass_batch', ['tfc:hematitic_glass_batch', 'tfc:powder/soda_ash']),
        event.recipes.create.pressing('tfc:hematitic_glass_batch', 'tfc:hematitic_glass_batch'),
        event.recipes.create.cutting('tfc:hematitic_glass_batch', 'tfc:hematitic_glass_batch')
    ]).transitionalItem('tfc:hematitic_glass_batch').loops(1)

    // #64
    event.recipes.create.sequenced_assembly([
        Item.of('tfc:empty_jar', 1)
    ], Ingredient.of('#tfc:glass_batches_tier_2'), [ // input
        event.recipes.createvintageneoforged.turning('tfc:hematitic_glass_batch', 'tfc:hematitic_glass_batch'),
        curvingConvex('#tfc:glass_batches_tier_2'),
        event.recipes.createvintageneoforged.polishing('tfc:hematitic_glass_batch', 'tfc:hematitic_glass_batch'),
        event.recipes.create.cutting('tfc:hematitic_glass_batch', 'tfc:hematitic_glass_batch')
    ]).transitionalItem('tfc:hematitic_glass_batch').loops(1)

})