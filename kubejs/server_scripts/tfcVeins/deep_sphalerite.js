TFCEvents.worldgenData(event => {
    event.clusterVein(
        'materialism:vein/deep_sphalerite', // Name
        [ // Replacement of blocks
            event.blockToWeightedBlockState(['tfc:rock/raw/granite'], ["15 tfc:ore/poor_sphalerite/granite", "25 tfc:ore/normal_sphalerite/granite", "60 tfc:ore/rich_sphalerite/granite"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/diorite'], ["15 tfc:ore/poor_sphalerite/diorite", "25 tfc:ore/normal_sphalerite/diorite", "60 tfc:ore/rich_sphalerite/diorite"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/gabbro'], ["15 tfc:ore/poor_sphalerite/gabbro", "25 tfc:ore/normal_sphalerite/gabbro", "60 tfc:ore/rich_sphalerite/gabbro"])
        ],
        2000, // Rarity
        0.5, // Density
        -200, // MinY
        -64, // MaxY
        100, // Size
        
        vein => {
            vein.indicator(
                10, // Rarity
                35, // Depth
                1, // UndergroundRarity
                5, // UndergroundCount
                ["tfc:ore/small_sphalerite"]
            ).project(true).projectOffset(true)
        },
        placement => {}
    )
})
ServerEvents.tags('worldgen/placed_feature', event => {
    event.add('tfc:in_biome/veins', 'materialism:vein/deep_sphalerite')
})