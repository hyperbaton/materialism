TFCEvents.worldgenData(event => {
    event.clusterVein(
        'materialism:vein/surface_hematite', // Name
        [ // Replacement of blocks
            event.blockToWeightedBlockState(['tfc:rock/raw/rhyolite'], ["75 tfc:ore/poor_hematite/rhyolite", "20 tfc:ore/normal_hematite/rhyolite", "5 tfc:ore/rich_hematite/rhyolite"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/basalt'], ["75 tfc:ore/poor_hematite/basalt", "20 tfc:ore/normal_hematite/basalt", "5 tfc:ore/rich_hematite/basalt"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/andesite'], ["75 tfc:ore/poor_hematite/andesite", "20 tfc:ore/normal_hematite/andesite", "5 tfc:ore/rich_hematite/andesite"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/dacite'], ["75 tfc:ore/poor_hematite/dacite", "20 tfc:ore/normal_hematite/dacite", "5 tfc:ore/rich_hematite/dacite"])
        ],
        45, // Rarity
        0.4, // Density
        10, // MinY
        90, // MaxY
        15, // Size
        
        vein => {
            vein.indicator(
                24, // Rarity
                35, // Depth
                1, // UndergroundRarity
                0, // UndergroundCount
                ["tfc:ore/small_hematite"]
            )
        },
        placement => {}
    )
})
ServerEvents.tags('worldgen/placed_feature', event => {
    event.add('tfc:in_biome/veins', 'materialism:vein/surface_hematite')
})