TFCEvents.worldgenData(event => {
    event.clusterVein(
        'materialism:vein/surface_bismuthinite', // Name
        [ // Replacement of blocks
            event.blockToWeightedBlockState(['tfc:rock/raw/shale'], ["70 tfc:ore/poor_bismuthinite/shale", "25 tfc:ore/normal_bismuthinite/shale", "5 tfc:ore/rich_bismuthinite/shale"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/claystone'], ["70 tfc:ore/poor_bismuthinite/claystone", "25 tfc:ore/normal_bismuthinite/claystone", "5 tfc:ore/rich_bismuthinite/claystone"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/limestone'], ["70 tfc:ore/poor_bismuthinite/limestone", "25 tfc:ore/normal_bismuthinite/limestone", "5 tfc:ore/rich_bismuthinite/limestone"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/conglomerate'], ["70 tfc:ore/poor_bismuthinite/conglomerate", "25 tfc:ore/normal_bismuthinite/conglomerate", "5 tfc:ore/rich_bismuthinite/conglomerate"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/dolomite'], ["70 tfc:ore/poor_bismuthinite/dolomite", "25 tfc:ore/normal_bismuthinite/dolomite", "5 tfc:ore/rich_bismuthinite/dolomite"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/chert'], ["70 tfc:ore/poor_bismuthinite/chert", "25 tfc:ore/normal_bismuthinite/chert", "5 tfc:ore/rich_bismuthinite/chert"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/chalk'], ["70 tfc:ore/poor_bismuthinite/chalk", "25 tfc:ore/normal_bismuthinite/chalk", "5 tfc:ore/rich_bismuthinite/chalk"])
        ],
        32, // Rarity
        0.3, // Density
        40, // MinY
        130, // MaxY
        15, // Size
        
        vein => {
            vein.indicator(
                14, // Rarity
                35, // Depth
                1, // UndergroundRarity
                0, // UndergroundCount
                ["tfc:ore/small_bismuthinite"]
            )
        },
        placement => {}
    )
})
ServerEvents.tags('worldgen/placed_feature', event => {
    event.add('tfc:in_biome/veins', 'materialism:vein/surface_bismuthinite')
})