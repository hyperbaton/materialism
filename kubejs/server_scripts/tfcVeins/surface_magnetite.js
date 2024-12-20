TFCEvents.worldgenData(event => {
    event.clusterVein(
        'materialism:vein/surface_magnetite', // Name
        [ // Replacement of blocks
            event.blockToWeightedBlockState(['tfc:rock/raw/shale'], ["75 tfc:ore/poor_magnetite/shale", "20 tfc:ore/normal_magnetite/shale", "5 tfc:ore/rich_magnetite/shale"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/claystone'], ["75 tfc:ore/poor_magnetite/claystone", "20 tfc:ore/normal_magnetite/claystone", "5 tfc:ore/rich_magnetite/claystone"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/limestone'], ["75 tfc:ore/poor_magnetite/limestone", "20 tfc:ore/normal_magnetite/limestone", "5 tfc:ore/rich_magnetite/limestone"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/conglomerate'], ["75 tfc:ore/poor_magnetite/conglomerate", "20 tfc:ore/normal_magnetite/conglomerate", "5 tfc:ore/rich_magnetite/conglomerate"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/dolomite'], ["75 tfc:ore/poor_magnetite/dolomite", "20 tfc:ore/normal_magnetite/dolomite", "5 tfc:ore/rich_magnetite/dolomite"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/chert'], ["75 tfc:ore/poor_magnetite/chert", "20 tfc:ore/normal_magnetite/chert", "5 tfc:ore/rich_magnetite/chert"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/chalk'], ["75 tfc:ore/poor_magnetite/chalk", "20 tfc:ore/normal_magnetite/chalk", "5 tfc:ore/rich_magnetite/chalk"])
        ],
        90, // Rarity
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
                ["tfc:ore/small_magnetite"]
            )
        },
        placement => {}
    )
})
ServerEvents.tags('worldgen/placed_feature', event => {
    event.add('tfc:in_biome/veins', 'materialism:vein/surface_magnetite')
})