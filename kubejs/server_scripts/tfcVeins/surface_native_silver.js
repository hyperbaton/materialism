TFCEvents.worldgenData(event => {
    event.clusterVein(
        'materialism:vein/surface_native_silver', // Name
        [ // Replacement of blocks
            event.blockToWeightedBlockState(['tfc:rock/raw/granite'], ["70 tfc:ore/poor_native_silver/granite", "25 tfc:ore/normal_native_silver/granite", "5 tfc:ore/rich_native_silver/granite"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/diorite'], ["70 tfc:ore/poor_native_silver/diorite", "25 tfc:ore/normal_native_silver/diorite", "5 tfc:ore/rich_native_silver/diorite"])
        ],
        15, // Rarity
        0.2, // Density
        90, // MinY
        180, // MaxY
        15, // Size
        
        vein => {
            vein.indicator(
                6, // Rarity
                50, // Depth
                1, // UndergroundRarity
                0, // UndergroundCount
                ["tfc:ore/small_native_silver"]
            )
        },
        placement => {}
    )
})
ServerEvents.tags('worldgen/placed_feature', event => {
    event.add('tfc:in_biome/veins', 'materialism:vein/surface_native_silver')
})