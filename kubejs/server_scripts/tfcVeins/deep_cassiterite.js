TFCEvents.worldgenData(event => {
    event.clusterVein(
        'materialism:vein/deep_cassiterite', // Name
        [ // Replacement of blocks
            event.blockToWeightedBlockState(['tfc:rock/raw/granite'], ["10 tfc:ore/poor_cassiterite/granite", "20 tfc:ore/normal_cassiterite/granite", "70 tfc:ore/rich_cassiterite/granite"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/diorite'], ["10 tfc:ore/poor_cassiterite/diorite", "20 tfc:ore/normal_cassiterite/diorite", "70 tfc:ore/rich_cassiterite/diorite"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/gabbro'], ["10 tfc:ore/poor_cassiterite/gabbro", "20 tfc:ore/normal_cassiterite/gabbro", "70 tfc:ore/rich_cassiterite/gabbro"])
        ],
        2000, // Rarity
        0.4, // Density
        -150, // MinY
        -64, // MaxY
        100, // Size
        
        vein => {
            vein.indicator(
                200, // Depth
                500, // Rarity
                1, // UndergroundRarity
                5, // UndergroundCount
                ["tfc:ore/small_cassiterite"]
            ).project(true).projectOffset(true)
        },
        placement => {}
    )
})
ServerEvents.tags('worldgen/placed_feature', event => {
    event.add('tfc:in_biome/veins', 'materialism:vein/deep_cassiterite')
})