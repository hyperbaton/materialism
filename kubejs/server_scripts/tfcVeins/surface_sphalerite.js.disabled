TFCEvents.worldgenData(event => {
    event.clusterVein(
        'materialism:vein/surface_sphalerite', // Name
        [ // Replacement of blocks
            event.blockToWeightedBlockState(['tfc:rock/raw/rhyolite'], ["70 tfc:ore/poor_sphalerite/rhyolite", "25 tfc:ore/normal_sphalerite/rhyolite", "5 tfc:ore/rich_sphalerite/rhyolite"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/basalt'], ["70 tfc:ore/poor_sphalerite/basalt", "25 tfc:ore/normal_sphalerite/basalt", "5 tfc:ore/rich_sphalerite/basalt"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/andesite'], ["70 tfc:ore/poor_sphalerite/andesite", "25 tfc:ore/normal_sphalerite/andesite", "5 tfc:ore/rich_sphalerite/andesite"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/dacite'], ["70 tfc:ore/poor_sphalerite/dacite", "25 tfc:ore/normal_sphalerite/dacite", "5 tfc:ore/rich_sphalerite/dacite"])
        ],
        30, // Rarity
        0.3, // Density
        40, // MinY
        130, // MaxY
        15, // Size
        
        vein => {
            vein.indicator(
                6, // Rarity
                50, // Depth
                1, // UndergroundRarity
                0, // UndergroundCount
                ["tfc:ore/small_sphalerite"]
            )
        },
        placement => {}
    )
})
ServerEvents.tags('worldgen/placed_feature', event => {
    event.add('tfc:in_biome/veins', 'materialism:vein/surface_sphalerite')
})