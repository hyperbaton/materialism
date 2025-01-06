TFCEvents.worldgenData(event => {
    event.clusterVein(
        'materialism:vein/deep_garnierite', // Name
        [ // Replacement of blocks
            event.blockToWeightedBlockState(['tfc:rock/raw/gabbro'], ["15 tfc:ore/poor_garnierite/gabbro", "25 tfc:ore/normal_garnierite/gabbro", "60 tfc:ore/rich_garnierite/gabbro"])
        ],
        200, // Rarity
        0.6, // Density
        -150, // MinY
        -64, // MaxY
        120, // Size
        
        vein => {
            vein.indicator(
                200, // Depth
                500, // Rarity
                1, // UndergroundRarity
                5, // UndergroundCount
                ["tfc:ore/small_garnierite"]
            ).project(true).projectOffset(true)
        },
        placement => {}
    )
})
ServerEvents.tags('worldgen/placed_feature', event => {
    event.add('tfc:in_biome/veins', 'materialism:vein/deep_garnierite')
})