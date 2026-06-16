TFCEvents.worldgenData(event => {
    event.clusterVein(
        'materialism:vein/deep_chromite', // Name
        [ // Replacement of blocks
            event.blockToWeightedBlockState(['tfc:rock/raw/basalt'], ['15 firmalife:ore/poor_chromite/basalt', '25 firmalife:ore/normal_chromite/basalt', '60 firmalife:ore/rich_chromite/basalt']),
            event.blockToWeightedBlockState(['tfc:rock/raw/diorite'], ['15 firmalife:ore/poor_chromite/diorite', '25 firmalife:ore/normal_chromite/diorite', '60 firmalife:ore/rich_chromite/diorite']),
            event.blockToWeightedBlockState(['tfc:rock/raw/gabbro'], ['15 firmalife:ore/poor_chromite/gabbro', '25 firmalife:ore/normal_chromite/gabbro', '60 firmalife:ore/rich_chromite/gabbro'])
        ],
        2000, // Rarity
        0.5, // Density
        -150, // MinY
        -64, // MaxY
        90, // Size
        
        vein => {
            vein.indicator(
                200, // Depth
                500, // Rarity
                1, // UndergroundRarity
                5, // UndergroundCount
                ["firmalife:ore/small_chromite"]
            ).project(true).projectOffset(true)
        },
        placement => {}
    )
})
ServerEvents.tags('worldgen/placed_feature', event => {
    event.add('tfc:in_biome/veins', 'materialism:vein/deep_chromite')
})