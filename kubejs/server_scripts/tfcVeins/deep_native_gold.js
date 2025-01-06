TFCEvents.worldgenData(event => {
    event.clusterVein(
        'materialism:vein/deep_native_gold', // Name
        [ // Replacement of blocks
            event.blockToWeightedBlockState(['tfc:rock/raw/granite'], ["10 tfc:ore/poor_native_gold/granite", "20 tfc:ore/normal_native_gold/granite", "70 tfc:ore/rich_native_gold/granite"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/diorite'], ["10 tfc:ore/poor_native_gold/diorite", "20 tfc:ore/normal_native_gold/diorite", "70 tfc:ore/rich_native_gold/diorite"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/gabbro'], ["10 tfc:ore/poor_native_gold/gabbro", "20 tfc:ore/normal_native_gold/gabbro", "70 tfc:ore/rich_native_gold/gabbro"])
        ],
        2000, // Rarity
        0.5, // Density
        -170, // MinY
        -80, // MaxY
        80, // Size
        
        vein => {
            vein.indicator(
                200, // Depth
                500, // Rarity
                1, // UndergroundRarity
                5, // UndergroundCount
                ["tfc:ore/small_native_gold"]
            ).project(true).projectOffset(true)
        },
        placement => {}
    )
})
ServerEvents.tags('worldgen/placed_feature', event => {
    event.add('tfc:in_biome/veins', 'materialism:vein/deep_native_gold')
})