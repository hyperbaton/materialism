TFCEvents.worldgenData(event => {
    event.clusterVein(
        'materialism:vein/deep_limonite', // Name
        [ // Replacement of blocks
            event.blockToWeightedBlockState(['tfc:rock/raw/shale'], ["10 tfc:ore/poor_limonite/shale", "20 tfc:ore/normal_limonite/shale", "70 tfc:ore/rich_limonite/shale"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/claystone'], ["10 tfc:ore/poor_limonite/claystone", "20 tfc:ore/normal_limonite/claystone", "70 tfc:ore/rich_limonite/claystone"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/limestone'], ["10 tfc:ore/poor_limonite/limestone", "20 tfc:ore/normal_limonite/limestone", "70 tfc:ore/rich_limonite/limestone"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/conglomerate'], ["10 tfc:ore/poor_limonite/conglomerate", "20 tfc:ore/normal_limonite/conglomerate", "70 tfc:ore/rich_limonite/conglomerate"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/dolomite'], ["10 tfc:ore/poor_limonite/dolomite", "20 tfc:ore/normal_limonite/dolomite", "70 tfc:ore/rich_limonite/dolomite"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/chert'], ["10 tfc:ore/poor_limonite/chert", "20 tfc:ore/normal_limonite/chert", "70 tfc:ore/rich_limonite/chert"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/chalk'], ["10 tfc:ore/poor_limonite/chalk", "20 tfc:ore/normal_limonite/chalk", "70 tfc:ore/rich_limonite/chalk"])
        ],
        2000, // Rarity
        0.4, // Density
        -100, // MinY
        -40, // MaxY
        100, // Size
        
        vein => {
            vein.indicator(
                24, // Rarity
                35, // Depth
                1, // UndergroundRarity
                0, // UndergroundCount
                ["tfc:ore/small_limonite"]
            ).project(true).projectOffset(true)
        },
        placement => {}
    )
})
ServerEvents.tags('worldgen/placed_feature', event => {
    event.add('tfc:in_biome/veins', 'materialism:vein/deep_limonite')
})