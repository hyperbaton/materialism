TFCEvents.worldgenData(event => {
    event.clusterVein(
        'materialism:vein/surface_limonite', // Name
        [ // Replacement of blocks
            event.blockToWeightedBlockState(['tfc:rock/raw/shale'], ["75 tfc:ore/poor_limonite/shale", "20 tfc:ore/normal_limonite/shale", "5 tfc:ore/rich_limonite/shale"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/claystone'], ["75 tfc:ore/poor_limonite/claystone", "20 tfc:ore/normal_limonite/claystone", "5 tfc:ore/rich_limonite/claystone"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/limestone'], ["75 tfc:ore/poor_limonite/limestone", "20 tfc:ore/normal_limonite/limestone", "5 tfc:ore/rich_limonite/limestone"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/conglomerate'], ["75 tfc:ore/poor_limonite/conglomerate", "20 tfc:ore/normal_limonite/conglomerate", "5 tfc:ore/rich_limonite/conglomerate"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/dolomite'], ["75 tfc:ore/poor_limonite/dolomite", "20 tfc:ore/normal_limonite/dolomite", "5 tfc:ore/rich_limonite/dolomite"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/chert'], ["75 tfc:ore/poor_limonite/chert", "20 tfc:ore/normal_limonite/chert", "5 tfc:ore/rich_limonite/chert"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/chalk'], ["75 tfc:ore/poor_limonite/chalk", "20 tfc:ore/normal_limonite/chalk", "5 tfc:ore/rich_limonite/chalk"])
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
                ["tfc:ore/small_limonite"]
            )
        },
        placement => {}
    )
})
ServerEvents.tags('worldgen/placed_feature', event => {
    event.add('tfc:in_biome/veins', 'materialism:vein/surface_limonite')
})