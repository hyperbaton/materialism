TFCEvents.worldgenData(event => {
    event.clusterVein(
        'materialism:vein/normal_native_silver', // Name
        [ // Replacement of blocks
            event.blockToWeightedBlockState(['tfc:rock/raw/granite'], ["15 tfc:ore/poor_native_silver/granite", "25 tfc:ore/normal_native_silver/granite", "60 tfc:ore/rich_native_silver/granite"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/diorite'], ["15 tfc:ore/poor_native_silver/diorite", "25 tfc:ore/normal_native_silver/diorite", "60 tfc:ore/rich_native_silver/diorite"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/gneiss'], ["15 tfc:ore/poor_native_silver/gneiss", "25 tfc:ore/normal_native_silver/gneiss", "60 tfc:ore/rich_native_silver/gneiss"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/schist'], ["15 tfc:ore/poor_native_silver/schist", "25 tfc:ore/normal_native_silver/schist", "60 tfc:ore/rich_native_silver/schist"])
        ],
        2000, // Rarity
        0.6, // Density
        -150, // MinY
        -64, // MaxY
        90, // Size
        
        vein => {
            vein.indicator(
                200, // Depth
                500, // Rarity
                1, // UndergroundRarity
                5, // UndergroundCount
                ["tfc:ore/small_native_silver"]
            ).project(true).projectOffset(true)
        },
        placement => {}
    )
})
ServerEvents.tags('worldgen/placed_feature', event => {
    event.add('tfc:in_biome/veins', 'materialism:vein/normal_native_silver')
})