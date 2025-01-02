TFCEvents.data(event => {
    event.itemHeat('tfc:silica_glass_batch', 0.7, null, null)
    event.itemHeat('tfc:hematitic_glass_batch', 0.7, null, null)
    event.itemHeat('tfc:volcanic_glass_batch', 0.7, null, null)
    event.itemHeat('tfc:olivine_glass_batch', 0.7, null, null)
})

ServerEvents.recipes(event => {
    // #1
    event.recipes.create.sequenced_assembly([
        Item.of('minecraft:pink_stained_glass', 1)
      ], TFC.ingredient.heatable('tfc:silica_glass_batch', 480, null), [ // input
        event.recipes.create.deploying('tfc:silica_glass_batch', ['tfc:silica_glass_batch', 'tfc:powder/native_gold']),
        event.recipes.vintageimprovements.curving('#tfc:glass_batches_tier_2', '#tfc:glass_batches_tier_2').head('vintageimprovements:concave_curving_head')
      ]).transitionalItem('tfc:silica_glass_batch').loops(1)

    // #2
    event.recipes.create.sequenced_assembly([
        Item.of('minecraft:orange_stained_glass_pane', 16)
    ], TFC.ingredient.heatable('tfc:hematitic_glass_batch', 480, null), [ // input
        event.recipes.create.pressing('tfc:hematitic_glass_batch', 'tfc:hematitic_glass_batch'),
        event.recipes.create.cutting('tfc:hematitic_glass_batch', 'tfc:hematitic_glass_batch')
    ]).transitionalItem('tfc:hematitic_glass_batch').loops(1)
      
    // #3
    event.recipes.create.sequenced_assembly([
        Item.of('minecraft:brown_stained_glass_pane', 16)
    ], TFC.ingredient.heatable('#tfc:glass_batches', 480, null), [ // input
        event.recipes.create.deploying('#tfc:glass_batches', ['#tfc:glass_batches', 'tfc:powder/garnierite']),
        event.recipes.create.pressing('#tfc:glass_batches', '#tfc:glass_batches'),
        event.recipes.create.cutting('#tfc:glass_batches', '#tfc:glass_batches')
    ]).transitionalItem('#tfc:glass_batches').loops(1)

    // #4
    event.recipes.create.sequenced_assembly([
        Item.of('minecraft:cyan_stained_glass')
    ], TFC.ingredient.heatable('#tfc:glass_batches_tier_3', 480, null), [ // input
        event.recipes.create.deploying('#tfc:glass_batches_tier_3', ['#tfc:glass_batches_tier_3', 'tfc:powder/sapphire']),
        event.recipes.create.deploying('#tfc:glass_batches_tier_3', ['#tfc:glass_batches_tier_3', '#tfc:powders/copper']),
        event.recipes.vintageimprovements.curving('#tfc:glass_batches_tier_3', '#tfc:glass_batches_tier_3').head('vintageimprovements:concave_curving_head')
    ]).transitionalItem('#tfc:glass_batches_tier_3').loops(1)
    
    // #5
    event.recipes.create.sequenced_assembly([
        Item.of('minecraft:light_blue_stained_glass_pane', 16)
    ], TFC.ingredient.heatable('tfc:silica_glass_batch', 480, null), [ // input
        event.recipes.create.deploying('tfc:silica_glass_batch', ['tfc:silica_glass_batch', 'tfc:powder/lapis_lazuli']),
        event.recipes.create.pressing('tfc:silica_glass_batch', 'tfc:silica_glass_batch'),
        event.recipes.create.cutting('tfc:silica_glass_batch', 'tfc:silica_glass_batch')
    ]).transitionalItem('tfc:silica_glass_batch').loops(1)
      
    // #6
    event.recipes.create.sequenced_assembly([
        Item.of('minecraft:brown_stained_glass', 1)
    ], TFC.ingredient.heatable('#tfc:glass_batches', 480, null), [ // input
        event.recipes.create.deploying('#tfc:glass_batches', ['#tfc:glass_batches', 'tfc:powder/garnierite']),
        event.recipes.vintageimprovements.curving('#tfc:glass_batches', '#tfc:glass_batches').head('vintageimprovements:concave_curving_head')
    ]).transitionalItem('#tfc:glass_batches').loops(1)
      
    // #7
    event.recipes.create.sequenced_assembly([
        Item.of('firmalife:empty_hematitic_wine_bottle', 1)
    ], TFC.ingredient.heatable('tfc:hematitic_glass_batch', 480, null), [ // input
        event.recipes.vintageimprovements.turning('tfc:hematitic_glass_batch', 'tfc:hematitic_glass_batch'),
        event.recipes.vintageimprovements.turning('tfc:hematitic_glass_batch', 'tfc:hematitic_glass_batch'),
        event.recipes.vintageimprovements.curving('tfc:hematitic_glass_batch', 'tfc:hematitic_glass_batch').head('vintageimprovements:convex_curving_head'),
        event.recipes.create.cutting('tfc:hematitic_glass_batch', 'tfc:hematitic_glass_batch')
    ]).transitionalItem('tfc:hematitic_glass_batch').loops(1)
      
    // #8
    event.recipes.create.sequenced_assembly([
        Item.of('minecraft:blue_stained_glass_pane', 16)
    ], TFC.ingredient.heatable('tfc:volcanic_glass_batch', 480, null), [ // input
        event.recipes.create.pressing('tfc:volcanic_glass_batch', 'tfc:volcanic_glass_batch'),
        event.recipes.create.cutting('tfc:volcanic_glass_batch', 'tfc:volcanic_glass_batch')
    ]).transitionalItem('tfc:volcanic_glass_batch').loops(1)
      
    // #9
    event.recipes.create.sequenced_assembly([
        Item.of('tfc:lens', 1)
    ], TFC.ingredient.heatable('tfc:silica_glass_batch', 480, null), [ // input
        event.recipes.vintageimprovements.turning('tfc:silica_glass_batch', 'tfc:silica_glass_batch'),
        event.recipes.vintageimprovements.hammering('tfc:silica_glass_batch', 'tfc:silica_glass_batch').hammerBlows(2).anvilBlock('tfc:metal/anvil/steel'),
        event.recipes.vintageimprovements.polishing('tfc:silica_glass_batch', 'tfc:silica_glass_batch'),
        event.recipes.create.cutting('tfc:silica_glass_batch', 'tfc:silica_glass_batch')
    ]).transitionalItem('tfc:silica_glass_batch').loops(1)

    // #10
    event.recipes.vintageimprovements.curving(Item.of('minecraft:green_stained_glass', 1), TFC.ingredient.heatable('tfc:olivine_glass_batch', 480, null)).head('vintageimprovements:concave_curving_head')

    // #11
    event.recipes.create.sequenced_assembly([
        Item.of('firmalife:wine_glass', 2)
    ], TFC.ingredient.heatable('tfc:silica_glass_batch', 480, null), [ // input
        event.recipes.vintageimprovements.turning('tfc:silica_glass_batch', 'tfc:silica_glass_batch'),
        event.recipes.vintageimprovements.turning('tfc:silica_glass_batch', 'tfc:silica_glass_batch'),
        event.recipes.vintageimprovements.curving('tfc:silica_glass_batch', 'tfc:silica_glass_batch').head('vintageimprovements:convex_curving_head'),
        event.recipes.create.cutting('tfc:silica_glass_batch', 'tfc:silica_glass_batch')
    ]).transitionalItem('tfc:silica_glass_batch').loops(1)
      
    // #12
    event.recipes.create.sequenced_assembly([
        Item.of('minecraft:blue_stained_glass_pane', 16)
      ], TFC.ingredient.heatable('tfc:silica_glass_batch', 480, null), [ // input
        event.recipes.create.deploying('tfc:silica_glass_batch', ['tfc:silica_glass_batch', '#tfc:powders/copper']),
        event.recipes.create.pressing('tfc:silica_glass_batch', 'tfc:silica_glass_batch'),
        event.recipes.create.cutting('tfc:silica_glass_batch', 'tfc:silica_glass_batch')
    ]).transitionalItem('tfc:silica_glass_batch').loops(1)

    // #13
    event.recipes.vintageimprovements.curving(Item.of('minecraft:glass', 1), TFC.ingredient.heatable('tfc:silica_glass_batch', 480, null)).head('vintageimprovements:concave_curving_head')

    // #14
    event.recipes.vintageimprovements.curving(Item.of('minecraft:orange_stained_glass', 1), TFC.ingredient.heatable('tfc:hematitic_glass_batch', 480, null)).head('vintageimprovements:concave_curving_head')

    // #15
    event.recipes.create.sequenced_assembly([
        Item.of('minecraft:lime_stained_glass')
    ], TFC.ingredient.heatable('#tfc:glass_batches_tier_2', 480, null), [ // input
        event.recipes.create.deploying('#tfc:glass_batches_tier_2', ['#tfc:glass_batches_tier_2', '#tfc:powders/iron']),
        event.recipes.create.deploying('#tfc:glass_batches_tier_2', ['#tfc:glass_batches_tier_2', 'tfc:powder/soda_ash']),
        event.recipes.vintageimprovements.curving('#tfc:glass_batches_tier_2', '#tfc:glass_batches_tier_2').head('vintageimprovements:concave_curving_head')
    ]).transitionalItem('#tfc:glass_batches_tier_2').loops(1)

    // #16
    event.recipes.create.sequenced_assembly([
        Item.of('minecraft:gray_stained_glass_pane', 16)
    ], TFC.ingredient.heatable('#tfc:glass_batches', 480, null), [ // input
        event.recipes.create.deploying('#tfc:glass_batches', ['#tfc:glass_batches', 'tfc:powder/graphite']),
        event.recipes.create.deploying('#tfc:glass_batches', ['#tfc:glass_batches', 'tfc:powder/soda_ash']),
        event.recipes.create.pressing('#tfc:glass_batches', '#tfc:glass_batches'),
        event.recipes.create.cutting('#tfc:glass_batches', '#tfc:glass_batches')
    ]).transitionalItem('#tfc:glass_batches').loops(1)

    // #17
    event.recipes.create.sequenced_assembly([
        Item.of('minecraft:red_stained_glass_pane', 16)
    ], TFC.ingredient.heatable('#tfc:glass_batches_tier_2', 480, null), [ // input
        event.recipes.create.deploying('#tfc:glass_batches_tier_2', ['#tfc:glass_batches_tier_2', 'tfc:powder/cassiterite']),
        event.recipes.create.pressing('#tfc:glass_batches_tier_2', '#tfc:glass_batches_tier_2'),
        event.recipes.create.cutting('#tfc:glass_batches_tier_2', '#tfc:glass_batches_tier_2')
    ]).transitionalItem('#tfc:glass_batches_tier_2').loops(1)

    // #18
    event.recipes.create.sequenced_assembly([
        Item.of('minecraft:lime_stained_glass_pane', 16)
    ], TFC.ingredient.heatable('#tfc:glass_batches_tier_2', 480, null), [ // input
        event.recipes.create.deploying('#tfc:glass_batches_tier_2', ['#tfc:glass_batches_tier_2', 'tfc:powder/soda_ash']),
        event.recipes.create.deploying('#tfc:glass_batches_tier_2', ['#tfc:glass_batches_tier_2', '#tfc:powders/iron']),
        event.recipes.create.pressing('#tfc:glass_batches_tier_2', '#tfc:glass_batches_tier_2'),
        event.recipes.create.cutting('#tfc:glass_batches_tier_2', '#tfc:glass_batches_tier_2')
    ]).transitionalItem('#tfc:glass_batches_tier_2').loops(1)

    // #19
    event.recipes.create.sequenced_assembly([
        Item.of('minecraft:orange_stained_glass')
    ], TFC.ingredient.heatable('tfc:silica_glass_batch', 480, null), [ // input
        event.recipes.create.deploying('tfc:silica_glass_batch', ['tfc:silica_glass_batch', 'tfc:powder/pyrite']),
        event.recipes.vintageimprovements.curving('tfc:silica_glass_batch', 'tfc:silica_glass_batch').head('vintageimprovements:concave_curving_head')
    ]).transitionalItem('tfc:silica_glass_batch').loops(1)

    // #20
    event.recipes.create.sequenced_assembly([
        Item.of('minecraft:light_gray_stained_glass', 1)
    ], TFC.ingredient.heatable('#tfc:glass_batches', 480, null), [ // input
        event.recipes.create.deploying('#tfc:glass_batches', ['#tfc:glass_batches', 'tfc:powder/graphite']),
        event.recipes.create.deploying('#tfc:glass_batches', ['#tfc:glass_batches', 'tfc:powder/soda_ash']),
        event.recipes.create.deploying('#tfc:glass_batches', ['#tfc:glass_batches', 'tfc:powder/soda_ash']),
        event.recipes.vintageimprovements.curving('#tfc:glass_batches', '#tfc:glass_batches').head('vintageimprovements:concave_curving_head')
    ]).transitionalItem('#tfc:glass_batches').loops(1)
    
    // #21
    event.recipes.create.sequenced_assembly([
        Item.of('minecraft:cyan_stained_glass', 1)
    ], TFC.ingredient.heatable('#tfc:glass_batches_tier_2', 480, null), [ // input
        event.recipes.create.deploying('#tfc:glass_batches_tier_2', ['#tfc:glass_batches_tier_2', '#tfc:powders/copper']),
        event.recipes.create.deploying('#tfc:glass_batches_tier_2', ['#tfc:glass_batches_tier_2', 'tfc:powder/sapphire']),
        event.recipes.vintageimprovements.curving('#tfc:glass_batches_tier_2', '#tfc:glass_batches_tier_2').head('vintageimprovements:concave_curving_head')
    ]).transitionalItem('#tfc:glass_batches_tier_2').loops(1)
    
    // #22
    event.recipes.create.sequenced_assembly([
        Item.of('minecraft:light_gray_stained_glass', 1)
    ], TFC.ingredient.heatable('#tfc:glass_batches', 480, null), [ // input
        event.recipes.create.deploying('#tfc:glass_batches', ['#tfc:glass_batches', 'tfc:powder/soda_ash']),
        event.recipes.create.deploying('#tfc:glass_batches', ['#tfc:glass_batches', 'tfc:powder/soda_ash']),
        event.recipes.create.deploying('#tfc:glass_batches', ['#tfc:glass_batches', 'tfc:powder/graphite']),
        event.recipes.vintageimprovements.curving('#tfc:glass_batches', '#tfc:glass_batches').head('vintageimprovements:concave_curving_head')
    ]).transitionalItem('#tfc:glass_batches').loops(1)
    
    // #23
    event.recipes.create.sequenced_assembly([
        Item.of('minecraft:cyan_stained_glass_pane', 16)
    ], TFC.ingredient.heatable('#tfc:glass_batches_tier_3', 480, null), [ // input
        event.recipes.create.deploying('#tfc:glass_batches_tier_3', ['#tfc:glass_batches_tier_3', 'tfc:powder/sapphire']),
        event.recipes.create.deploying('#tfc:glass_batches_tier_3', ['#tfc:glass_batches_tier_3', '#tfc:powders/copper']),
        event.recipes.create.pressing('#tfc:glass_batches_tier_3', '#tfc:glass_batches_tier_3'),
        event.recipes.create.cutting('#tfc:glass_batches_tier_3', '#tfc:glass_batches_tier_3')
    ]).transitionalItem('#tfc:glass_batches_tier_3').loops(1)
    
    // #24
    event.recipes.create.sequenced_assembly([
        Item.of('minecraft:glass_pane', 16)
    ], TFC.ingredient.heatable('tfc:silica_glass_batch', 480, null), [ // input
        event.recipes.create.pressing('tfc:silica_glass_batch', 'tfc:silica_glass_batch'),
        event.recipes.create.cutting('tfc:silica_glass_batch', 'tfc:silica_glass_batch')
    ]).transitionalItem('tfc:silica_glass_batch').loops(1)
    
    // #25
    event.recipes.create.sequenced_assembly([
        Item.of('minecraft:light_gray_stained_glass', 1)
    ], TFC.ingredient.heatable('#tfc:glass_batches', 480, null), [ // input
        event.recipes.create.deploying('#tfc:glass_batches', ['#tfc:glass_batches', 'tfc:powder/soda_ash']),
        event.recipes.create.deploying('#tfc:glass_batches', ['#tfc:glass_batches', 'tfc:powder/graphite']),
        event.recipes.create.deploying('#tfc:glass_batches', ['#tfc:glass_batches', 'tfc:powder/soda_ash']),
        event.recipes.vintageimprovements.curving('#tfc:glass_batches', '#tfc:glass_batches').head('vintageimprovements:concave_curving_head')
    ]).transitionalItem('#tfc:glass_batches').loops(1)

    // #26
    event.recipes.create.sequenced_assembly([
        Item.of('minecraft:light_blue_stained_glass', 1)
    ], TFC.ingredient.heatable('tfc:silica_glass_batch', 480, null), [ // input
        event.recipes.create.deploying('tfc:silica_glass_batch', ['tfc:silica_glass_batch', 'tfc:powder/lapis_lazuli']),
        event.recipes.vintageimprovements.curving('tfc:silica_glass_batch', 'tfc:silica_glass_batch').head('vintageimprovements:concave_curving_head')
    ]).transitionalItem('tfc:silica_glass_batch').loops(1)
    
    // #27
    event.recipes.create.sequenced_assembly([
        Item.of('minecraft:red_stained_glass', 1)
    ], TFC.ingredient.heatable('#tfc:glass_batches_tier_2', 480, null), [ // input
        event.recipes.create.deploying('#tfc:glass_batches_tier_2', ['#tfc:glass_batches_tier_2', 'tfc:powder/cassiterite']),
        event.recipes.vintageimprovements.curving('#tfc:glass_batches_tier_2', '#tfc:glass_batches_tier_2').head('vintageimprovements:concave_curving_head')
    ]).transitionalItem('#tfc:glass_batches_tier_2').loops(1)
    
    // #28
    event.recipes.create.sequenced_assembly([
        Item.of('tfc:olivine_glass_bottle', 1)
    ], TFC.ingredient.heatable('tfc:olivine_glass_batch', 480, null), [ // input
        event.recipes.vintageimprovements.turning('tfc:olivine_glass_batch', 'tfc:olivine_glass_batch'),
        event.recipes.vintageimprovements.curving('tfc:olivine_glass_batch', 'tfc:olivine_glass_batch').head('vintageimprovements:convex_curving_head'),
        event.recipes.create.cutting('tfc:olivine_glass_batch', 'tfc:olivine_glass_batch')
    ]).transitionalItem('tfc:olivine_glass_batch').loops(1)
    
    // #29
    event.recipes.create.sequenced_assembly([
        Item.of('minecraft:yellow_stained_glass', 1)
    ], TFC.ingredient.heatable('#tfc:glass_batches_tier_2', 480, null), [ // input
        event.recipes.create.deploying('#tfc:glass_batches_tier_2', ['#tfc:glass_batches_tier_2', 'tfc:powder/native_silver']),
        event.recipes.vintageimprovements.curving('#tfc:glass_batches_tier_2', '#tfc:glass_batches_tier_2').head('vintageimprovements:concave_curving_head')
    ]).transitionalItem('#tfc:glass_batches_tier_2').loops(1)
    
    // #30
    event.recipes.create.sequenced_assembly([
        Item.of('firmalife:empty_volcanic_wine_bottle', 1)
    ], TFC.ingredient.heatable('tfc:volcanic_glass_batch', 480, null), [ // input
        event.recipes.vintageimprovements.turning('tfc:volcanic_glass_batch', 'tfc:volcanic_glass_batch'),
        event.recipes.vintageimprovements.turning('tfc:volcanic_glass_batch', 'tfc:volcanic_glass_batch'),
        event.recipes.vintageimprovements.curving('tfc:volcanic_glass_batch', 'tfc:volcanic_glass_batch').head('vintageimprovements:convex_curving_head'),
        event.recipes.create.cutting('tfc:volcanic_glass_batch', 'tfc:volcanic_glass_batch')
    ]).transitionalItem('tfc:volcanic_glass_batch').loops(1)
    
    // #31
    event.recipes.vintageimprovements.curving(Item.of('minecraft:blue_stained_glass', 1), TFC.ingredient.heatable('tfc:volcanic_glass_batch', 480, null)).head('vintageimprovements:concave_curving_head')
    
    // #32
    event.recipes.create.sequenced_assembly([
        Item.of('minecraft:magenta_stained_glass_pane', 16)
    ], TFC.ingredient.heatable('#tfc:glass_batches_tier_2', 480, null), [ // input
        event.recipes.create.deploying('#tfc:glass_batches_tier_2', ['#tfc:glass_batches_tier_2', 'tfc:powder/ruby']),
        event.recipes.create.pressing('#tfc:glass_batches_tier_2', '#tfc:glass_batches_tier_2'),
        event.recipes.create.cutting('#tfc:glass_batches_tier_2', '#tfc:glass_batches_tier_2')
    ]).transitionalItem('#tfc:glass_batches_tier_2').loops(1)

    // #33
    event.recipes.create.sequenced_assembly([
        Item.of('minecraft:pink_stained_glass_pane', 16)
    ], TFC.ingredient.heatable('tfc:silica_glass_batch', 480, null), [ // input
        event.recipes.create.deploying('tfc:silica_glass_batch', ['tfc:silica_glass_batch', 'tfc:powder/native_gold']),
        event.recipes.create.pressing('tfc:silica_glass_batch', 'tfc:silica_glass_batch'),
        event.recipes.create.cutting('tfc:silica_glass_batch', 'tfc:silica_glass_batch')
    ]).transitionalItem('tfc:silica_glass_batch').loops(1)
    
    // #34
    event.recipes.create.sequenced_assembly([
        Item.of('minecraft:black_stained_glass_pane', 16)
    ], TFC.ingredient.heatable('#tfc:glass_batches', 480, null), [ // input
        event.recipes.create.deploying('#tfc:glass_batches', ['#tfc:glass_batches', 'tfc:powder/graphite']),
        event.recipes.create.pressing('#tfc:glass_batches', '#tfc:glass_batches'),
        event.recipes.create.cutting('#tfc:glass_batches', '#tfc:glass_batches')
    ]).transitionalItem('#tfc:glass_batches').loops(1)

    // #35
    event.recipes.create.sequenced_assembly([
        Item.of('minecraft:lime_stained_glass', 1)
    ], TFC.ingredient.heatable('#tfc:glass_batches_tier_2', 480, null), [ // input
        event.recipes.create.deploying('#tfc:glass_batches_tier_2', ['#tfc:glass_batches_tier_2', 'tfc:powder/soda_ash']),
        event.recipes.create.deploying('#tfc:glass_batches_tier_2', ['#tfc:glass_batches_tier_2', '#tfc:powders/iron']),
        event.recipes.vintageimprovements.curving('#tfc:glass_batches_tier_2', '#tfc:glass_batches_tier_2').head('vintageimprovements:concave_curving_head')
    ]).transitionalItem('#tfc:glass_batches_tier_2').loops(1)

    // #36
    event.recipes.create.sequenced_assembly([
        Item.of('tfc:hematitic_glass_bottle', 1)
    ], TFC.ingredient.heatable('tfc:hematitic_glass_batch', 480, null), [ // input
        event.recipes.vintageimprovements.turning('tfc:hematitic_glass_batch', 'tfc:hematitic_glass_batch'),
        event.recipes.vintageimprovements.curving('tfc:hematitic_glass_batch', 'tfc:hematitic_glass_batch').head('vintageimprovements:convex_curving_head'),
        event.recipes.create.cutting('tfc:hematitic_glass_batch', 'tfc:hematitic_glass_batch')
    ]).transitionalItem('tfc:hematitic_glass_batch').loops(1)
    
    // #37
    event.recipes.create.sequenced_assembly([
        Item.of('minecraft:green_stained_glass_pane', 16)
    ], TFC.ingredient.heatable('tfc:olivine_glass_batch', 480, null), [ // input
        event.recipes.create.pressing('tfc:olivine_glass_batch', 'tfc:olivine_glass_batch'),
        event.recipes.create.cutting('tfc:olivine_glass_batch', 'tfc:olivine_glass_batch')
    ]).transitionalItem('tfc:olivine_glass_batch').loops(1)
    
    // #38
    event.recipes.create.sequenced_assembly([
        Item.of('minecraft:green_stained_glass', 1)
    ], TFC.ingredient.heatable('#tfc:glass_batches_tier_2', 480, null), [ // input
        event.recipes.create.deploying('#tfc:glass_batches_tier_2', ['#tfc:glass_batches_tier_2', '#tfc:powders/iron']),
        event.recipes.vintageimprovements.curving('#tfc:glass_batches_tier_2', '#tfc:glass_batches_tier_2').head('vintageimprovements:concave_curving_head')
    ]).transitionalItem('#tfc:glass_batches_tier_2').loops(1)
    
    // #39
    event.recipes.create.sequenced_assembly([
        Item.of('minecraft:light_gray_stained_glass_pane', 16)
    ], TFC.ingredient.heatable('#tfc:glass_batches_tier_2', 480, null), [ // input
        event.recipes.create.deploying('#tfc:glass_batches_tier_2', ['#tfc:glass_batches_tier_2', 'tfc:powder/soda_ash']),
        event.recipes.create.deploying('#tfc:glass_batches_tier_2', ['#tfc:glass_batches_tier_2', 'tfc:powder/graphite']),
        event.recipes.create.deploying('#tfc:glass_batches_tier_2', ['#tfc:glass_batches_tier_2', 'tfc:powder/soda_ash']),
        event.recipes.create.pressing('#tfc:glass_batches_tier_2', '#tfc:glass_batches_tier_2'),
        event.recipes.create.cutting('#tfc:glass_batches_tier_2', '#tfc:glass_batches_tier_2')
    ]).transitionalItem('#tfc:glass_batches_tier_2').loops(1)
    
    // #40
    event.recipes.create.sequenced_assembly([
        Item.of('minecraft:light_gray_stained_glass_pane', 16)
    ], TFC.ingredient.heatable('#tfc:glass_batches_tier_2', 480, null), [ // input
        event.recipes.create.deploying('#tfc:glass_batches_tier_2', ['#tfc:glass_batches_tier_2', 'tfc:powder/soda_ash']),
        event.recipes.create.deploying('#tfc:glass_batches_tier_2', ['#tfc:glass_batches_tier_2', 'tfc:powder/soda_ash']),
        event.recipes.create.deploying('#tfc:glass_batches_tier_2', ['#tfc:glass_batches_tier_2', 'tfc:powder/graphite']),
        event.recipes.create.pressing('#tfc:glass_batches_tier_2', '#tfc:glass_batches_tier_2'),
        event.recipes.create.cutting('#tfc:glass_batches_tier_2', '#tfc:glass_batches_tier_2')
    ]).transitionalItem('#tfc:glass_batches_tier_2').loops(1)

    // #41
    event.recipes.create.sequenced_assembly([
        Item.of('firmalife:empty_olivine_wine_bottle', 1)
    ], TFC.ingredient.heatable('tfc:olivine_glass_batch', 480, null), [ // input
        event.recipes.vintageimprovements.turning('tfc:olivine_glass_batch', 'tfc:olivine_glass_batch'),
        event.recipes.vintageimprovements.turning('tfc:olivine_glass_batch', 'tfc:olivine_glass_batch'),
        event.recipes.vintageimprovements.curving('tfc:olivine_glass_batch', 'tfc:olivine_glass_batch').head('vintageimprovements:convex_curving_head'),
        event.recipes.create.cutting('tfc:olivine_glass_batch', 'tfc:olivine_glass_batch')
    ]).transitionalItem('tfc:olivine_glass_batch').loops(1)

    // #42
    event.recipes.create.sequenced_assembly([
        Item.of('minecraft:lime_stained_glass_pane', 16)
    ], TFC.ingredient.heatable('#tfc:glass_batches_tier_2', 480, null), [ // input
        event.recipes.create.deploying('#tfc:glass_batches_tier_2', ['#tfc:glass_batches_tier_2', '#tfc:powders/iron']),
        event.recipes.create.deploying('#tfc:glass_batches_tier_2', ['#tfc:glass_batches_tier_2', 'tfc:powder/soda_ash']),
        event.recipes.create.pressing('#tfc:glass_batches_tier_2', '#tfc:glass_batches_tier_2'),
        event.recipes.create.cutting('#tfc:glass_batches_tier_2', '#tfc:glass_batches_tier_2')
    ]).transitionalItem('#tfc:glass_batches_tier_2').loops(1)
      
    // #43
    event.recipes.create.sequenced_assembly([
        Item.of('minecraft:light_gray_stained_glass_pane', 16)
    ], TFC.ingredient.heatable('#tfc:glass_batches_tier_2', 480, null), [ // input
        event.recipes.create.deploying('#tfc:glass_batches_tier_2', ['#tfc:glass_batches_tier_2', 'tfc:powder/graphite']),
        event.recipes.create.deploying('#tfc:glass_batches_tier_2', ['#tfc:glass_batches_tier_2', 'tfc:powder/soda_ash']),
        event.recipes.create.deploying('#tfc:glass_batches_tier_2', ['#tfc:glass_batches_tier_2', 'tfc:powder/soda_ash']),
        event.recipes.create.pressing('#tfc:glass_batches_tier_2', '#tfc:glass_batches_tier_2'),
        event.recipes.create.cutting('#tfc:glass_batches_tier_2', '#tfc:glass_batches_tier_2')
    ]).transitionalItem('#tfc:glass_batches_tier_2').loops(1)

    // #44
    event.recipes.create.sequenced_assembly([
        Item.of('minecraft:cyan_stained_glass_pane', 16)
    ], TFC.ingredient.heatable('#tfc:glass_batches_tier_3', 480, null), [ // input
        event.recipes.create.deploying('#tfc:glass_batches_tier_3', ['#tfc:glass_batches_tier_3', '#tfc:powders/copper']),
        event.recipes.create.deploying('#tfc:glass_batches_tier_3', ['#tfc:glass_batches_tier_3', 'tfc:powder/sapphire']),
        event.recipes.create.pressing('#tfc:glass_batches_tier_3', '#tfc:glass_batches_tier_3'),
        event.recipes.create.cutting('#tfc:glass_batches_tier_3', '#tfc:glass_batches_tier_3')
    ]).transitionalItem('#tfc:glass_batches_tier_3').loops(1)

    // #45
    event.recipes.create.sequenced_assembly([
        Item.of('minecraft:yellow_stained_glass_pane', 16)
    ], TFC.ingredient.heatable('#tfc:glass_batches_tier_2', 480, null), [ // input
        event.recipes.create.deploying('#tfc:glass_batches_tier_2', ['#tfc:glass_batches_tier_2', 'tfc:powder/native_silver']),
        event.recipes.create.pressing('#tfc:glass_batches_tier_2', '#tfc:glass_batches_tier_2'),
        event.recipes.create.cutting('#tfc:glass_batches_tier_2', '#tfc:glass_batches_tier_2')
    ]).transitionalItem('#tfc:glass_batches_tier_2').loops(1)

    // #46
    event.recipes.create.sequenced_assembly([
        Item.of('tfc:silica_glass_bottle', 1)
    ], TFC.ingredient.heatable('tfc:silica_glass_batch', 480, null), [ // input
        event.recipes.vintageimprovements.turning('tfc:silica_glass_batch', 'tfc:silica_glass_batch'),
        event.recipes.vintageimprovements.curving('tfc:silica_glass_batch', 'tfc:silica_glass_batch').head('vintageimprovements:convex_curving_head'),
        event.recipes.create.cutting('tfc:silica_glass_batch', 'tfc:silica_glass_batch')
    ]).transitionalItem('tfc:silica_glass_batch').loops(1)

    // #47
    event.recipes.create.sequenced_assembly([
        Item.of('minecraft:gray_stained_glass', 1)
    ], TFC.ingredient.heatable('#tfc:glass_batches', 480, null), [ // input
        event.recipes.create.deploying('#tfc:glass_batches', ['#tfc:glass_batches', 'tfc:powder/soda_ash']),
        event.recipes.create.deploying('#tfc:glass_batches', ['#tfc:glass_batches', 'tfc:powder/graphite']),
        event.recipes.vintageimprovements.curving('#tfc:glass_batches', '#tfc:glass_batches').head('vintageimprovements:concave_curving_head')
    ]).transitionalItem('#tfc:glass_batches').loops(1)
    
    // #48
    event.recipes.create.sequenced_assembly([
        Item.of('minecraft:black_stained_glass', 1)
    ], TFC.ingredient.heatable('#tfc:glass_batches', 480, null), [ // input
        event.recipes.create.deploying('#tfc:glass_batches', ['#tfc:glass_batches', 'tfc:powder/graphite']),
        event.recipes.vintageimprovements.curving('#tfc:glass_batches', '#tfc:glass_batches').head('vintageimprovements:concave_curving_head')
    ]).transitionalItem('#tfc:glass_batches').loops(1)

    // #49
    event.recipes.create.sequenced_assembly([
        Item.of('minecraft:purple_stained_glass_pane', 16)
    ], TFC.ingredient.heatable('#tfc:glass_batches', 480, null), [ // input
        event.recipes.create.deploying('#tfc:glass_batches', ['#tfc:glass_batches', '#tfc:powders/iron']),
        event.recipes.create.deploying('#tfc:glass_batches', ['#tfc:glass_batches', '#tfc:powders/copper']),
        event.recipes.vintageimprovements.curving('#tfc:glass_batches', '#tfc:glass_batches').head('vintageimprovements:concave_curving_head'),
        event.recipes.create.pressing('#tfc:glass_batches', '#tfc:glass_batches'),
        event.recipes.create.cutting('#tfc:glass_batches', '#tfc:glass_batches')
    ]).transitionalItem('#tfc:glass_batches').loops(1)

    // #50
    event.recipes.create.sequenced_assembly([
        Item.of('minecraft:purple_stained_glass', 1)
    ], TFC.ingredient.heatable('#tfc:glass_batches', 480, null), [ // input
        event.recipes.create.deploying('#tfc:glass_batches', ['#tfc:glass_batches', '#tfc:powders/iron']),
        event.recipes.create.deploying('#tfc:glass_batches', ['#tfc:glass_batches', '#tfc:powders/copper']),
        event.recipes.vintageimprovements.curving('#tfc:glass_batches', '#tfc:glass_batches').head('vintageimprovements:concave_curving_head')
    ]).transitionalItem('#tfc:glass_batches').loops(1)

    // #51
    event.recipes.create.sequenced_assembly([
        Item.of('minecraft:white_stained_glass', 1)
    ], TFC.ingredient.heatable('#tfc:glass_batches_tier_2', 480, null), [ // input
        event.recipes.create.deploying('#tfc:glass_batches_tier_2', ['#tfc:glass_batches_tier_2', 'tfc:powder/soda_ash']),
        event.recipes.vintageimprovements.curving('#tfc:glass_batches_tier_2', '#tfc:glass_batches_tier_2').head('vintageimprovements:concave_curving_head')
    ]).transitionalItem('#tfc:glass_batches_tier_2').loops(1)

    // #52
    event.recipes.create.sequenced_assembly([
        Item.of('firmalife:reinforced_glass', 16)
    ], TFC.ingredient.heatable('tfc:silica_glass_batch', 480, null), [ // input
        event.recipes.create.pressing('tfc:silica_glass_batch', 'tfc:silica_glass_batch'),
        event.recipes.create.deploying('tfc:silica_glass_batch', ['tfc:silica_glass_batch', 'tfc:powder/soda_ash']),
        event.recipes.create.pressing('tfc:silica_glass_batch', 'tfc:silica_glass_batch'),
        event.recipes.create.cutting('tfc:silica_glass_batch', 'tfc:silica_glass_batch')
    ]).transitionalItem('tfc:silica_glass_batch').loops(1)
    
    // #53
    event.recipes.create.sequenced_assembly([
        Item.of('minecraft:blue_stained_glass', 1)
    ], TFC.ingredient.heatable('tfc:silica_glass_batch', 480, null), [ // input
        event.recipes.create.deploying('tfc:silica_glass_batch', ['tfc:silica_glass_batch', '#tfc:powders/copper']),
        event.recipes.vintageimprovements.curving('tfc:silica_glass_batch', 'tfc:silica_glass_batch').head('vintageimprovements:concave_curving_head')
    ]).transitionalItem('tfc:silica_glass_batch').loops(1)
    
    // #54
    event.recipes.create.sequenced_assembly([
        Item.of('butcher:jar', 1)
      ], '#tfc:glass_batches_tier_2', [ // input
        event.recipes.vintageimprovements.turning('#tfc:glass_batches_tier_2', '#tfc:glass_batches_tier_2'),
        event.recipes.vintageimprovements.turning('#tfc:glass_batches_tier_2', '#tfc:glass_batches_tier_2'),
        event.recipes.create.pressing('#tfc:glass_batches_tier_2', '#tfc:glass_batches_tier_2'),
        event.recipes.vintageimprovements.curving('#tfc:glass_batches_tier_2', '#tfc:glass_batches_tier_2').head('vintageimprovements:convex_curving_head'),
        event.recipes.create.cutting('#tfc:glass_batches_tier_2', '#tfc:glass_batches_tier_2')
      ]).transitionalItem('#tfc:glass_batches_tier_2').loops(1)
    
    // #55
      event.recipes.create.sequenced_assembly([
          Item.of('minecraft:tinted_glass', 1)
      ], TFC.ingredient.heatable('#tfc:glass_batches_tier_2', 480, null), [ // input
          event.recipes.create.deploying('#tfc:glass_batches_tier_2', ['#tfc:glass_batches_tier_2', 'tfc:powder/amethyst']),
          event.recipes.vintageimprovements.curving('#tfc:glass_batches_tier_2', '#tfc:glass_batches_tier_2').head('vintageimprovements:concave_curving_head')
      ]).transitionalItem('#tfc:glass_batches_tier_2').loops(1)

    // #56
      event.recipes.create.sequenced_assembly([
          Item.of('minecraft:green_stained_glass_pane', 16)
      ], TFC.ingredient.heatable('#tfc:glass_batches_tier_2', 480, null), [ // input
          event.recipes.create.deploying('#tfc:glass_batches_tier_2', ['#tfc:glass_batches_tier_2', '#tfc:powders/iron']),
          event.recipes.create.pressing('#tfc:glass_batches_tier_2', '#tfc:glass_batches_tier_2'),
          event.recipes.create.cutting('#tfc:glass_batches_tier_2', '#tfc:glass_batches_tier_2')
      ]).transitionalItem('#tfc:glass_batches_tier_2').loops(1)
    
    // #57
      event.recipes.create.sequenced_assembly([
          Item.of('minecraft:gray_stained_glass', 1)
      ], TFC.ingredient.heatable('#tfc:glass_batches', 480, null), [ // input
          event.recipes.create.deploying('#tfc:glass_batches', ['#tfc:glass_batches', 'tfc:powder/graphite']),
          event.recipes.create.deploying('#tfc:glass_batches', ['#tfc:glass_batches', 'tfc:powder/soda_ash']),
          event.recipes.vintageimprovements.curving('#tfc:glass_batches', '#tfc:glass_batches').head('vintageimprovements:concave_curving_head')
      ]).transitionalItem('#tfc:glass_batches').loops(1)

    // #58
    event.recipes.create.sequenced_assembly([
        Item.of('minecraft:gray_stained_glass_pane', 16)
    ], TFC.ingredient.heatable('#tfc:glass_batches', 480, null), [ // input
    event.recipes.create.deploying('#tfc:glass_batches', ['#tfc:glass_batches', 'tfc:powder/soda_ash']),
        event.recipes.create.deploying('#tfc:glass_batches', ['#tfc:glass_batches', 'tfc:powder/graphite']),
        event.recipes.create.pressing('#tfc:glass_batches', '#tfc:glass_batches'),
        event.recipes.create.cutting('#tfc:glass_batches', '#tfc:glass_batches')
    ]).transitionalItem('#tfc:glass_batches').loops(1)

    // #59
    event.recipes.create.sequenced_assembly([
        Item.of('minecraft:orange_stained_glass_pane', 16)
    ], TFC.ingredient.heatable('tfc:silica_glass_batch', 480, null), [ // input
        event.recipes.create.deploying('tfc:silica_glass_batch', ['tfc:silica_glass_batch', 'tfc:powder/pyrite']),
        event.recipes.create.pressing('tfc:silica_glass_batch', 'tfc:silica_glass_batch'),
        event.recipes.create.cutting('tfc:silica_glass_batch', 'tfc:silica_glass_batch')
    ]).transitionalItem('tfc:silica_glass_batch').loops(1)

    // #60
    event.recipes.create.sequenced_assembly([
        Item.of('minecraft:magenta_stained_glass', 1)
    ], TFC.ingredient.heatable('#tfc:glass_batches_tier_2', 480, null), [ // input
        event.recipes.create.deploying('#tfc:glass_batches_tier_2', ['#tfc:glass_batches_tier_2', 'tfc:powder/ruby']),
        event.recipes.vintageimprovements.curving('#tfc:glass_batches_tier_2', '#tfc:glass_batches_tier_2').head('vintageimprovements:concave_curving_head')
    ]).transitionalItem('#tfc:glass_batches_tier_2').loops(1)
    
    // #61    
    event.recipes.create.sequenced_assembly([
        Item.of('tfc:volcanic_glass_bottle', 1)
    ], TFC.ingredient.heatable('tfc:volcanic_glass_batch', 480, null), [ // input
        event.recipes.vintageimprovements.turning('tfc:volcanic_glass_batch', 'tfc:volcanic_glass_batch'),
        event.recipes.vintageimprovements.curving('tfc:volcanic_glass_batch', 'tfc:volcanic_glass_batch').head('vintageimprovements:convex_curving_head'),
        event.recipes.create.cutting('tfc:volcanic_glass_batch', 'tfc:volcanic_glass_batch')
    ]).transitionalItem('tfc:volcanic_glass_batch').loops(1)
    
    // #62
    event.recipes.create.sequenced_assembly([
        Item.of('tfc:lamp_glass', 1)
    ], TFC.ingredient.heatable('#tfc:glass_batches', 480, null), [ // input
        event.recipes.vintageimprovements.turning('#tfc:glass_batches', '#tfc:glass_batches'),
        event.recipes.vintageimprovements.curving('#tfc:glass_batches', '#tfc:glass_batches').head('vintageimprovements:convex_curving_head'),
        event.recipes.create.pressing('#tfc:glass_batches', '#tfc:glass_batches'),
        event.recipes.vintageimprovements.turning('#tfc:glass_batches', '#tfc:glass_batches'),
        event.recipes.create.cutting('#tfc:glass_batches', '#tfc:glass_batches')
    ]).transitionalItem('#tfc:glass_batches').loops(1)

    // #63
    event.recipes.create.sequenced_assembly([
        Item.of('minecraft:white_stained_glass_pane', 16)
    ], TFC.ingredient.heatable('#tfc:glass_batches_tier_2', 480, null), [ // input
        event.recipes.create.deploying('#tfc:glass_batches_tier_2', ['#tfc:glass_batches_tier_2', 'tfc:powder/soda_ash']),
        event.recipes.create.pressing('#tfc:glass_batches_tier_2', '#tfc:glass_batches_tier_2'),
        event.recipes.create.cutting('#tfc:glass_batches_tier_2', '#tfc:glass_batches_tier_2')
    ]).transitionalItem('#tfc:glass_batches_tier_2').loops(1)

    // #64
    event.recipes.create.sequenced_assembly([
        Item.of('tfc:empty_jar', 1)
    ], TFC.ingredient.heatable('#tfc:glass_batches_tier_2', 480, null), [ // input
        event.recipes.vintageimprovements.turning('#tfc:glass_batches_tier_2', '#tfc:glass_batches_tier_2'),
        event.recipes.vintageimprovements.curving('#tfc:glass_batches_tier_2', '#tfc:glass_batches_tier_2').head('vintageimprovements:convex_curving_head'),
        event.recipes.vintageimprovements.polishing('#tfc:glass_batches_tier_2', '#tfc:glass_batches_tier_2'),
        event.recipes.create.cutting('#tfc:glass_batches_tier_2', '#tfc:glass_batches_tier_2')
    ]).transitionalItem('#tfc:glass_batches_tier_2').loops(1)

})