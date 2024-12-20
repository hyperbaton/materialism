TFCEvents.worldgenData(event => {
    event.clusterVein(
        'materialism:vein/deep_magnetite', // Name
        [ // Replacement of blocks
            event.blockToWeightedBlockState(['tfc:rock/raw/shale'], ["10 tfc:ore/poor_magnetite/shale", "20 tfc:ore/normal_magnetite/shale", "70 tfc:ore/rich_magnetite/shale"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/claystone'], ["10 tfc:ore/poor_magnetite/claystone", "20 tfc:ore/normal_magnetite/claystone", "70 tfc:ore/rich_magnetite/claystone"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/limestone'], ["10 tfc:ore/poor_magnetite/limestone", "20 tfc:ore/normal_magnetite/limestone", "70 tfc:ore/rich_magnetite/limestone"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/conglomerate'], ["10 tfc:ore/poor_magnetite/conglomerate", "20 tfc:ore/normal_magnetite/conglomerate", "70 tfc:ore/rich_magnetite/conglomerate"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/dolomite'], ["10 tfc:ore/poor_magnetite/dolomite", "20 tfc:ore/normal_magnetite/dolomite", "70 tfc:ore/rich_magnetite/dolomite"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/chert'], ["10 tfc:ore/poor_magnetite/chert", "20 tfc:ore/normal_magnetite/chert", "70 tfc:ore/rich_magnetite/chert"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/chalk'], ["10 tfc:ore/poor_magnetite/chalk", "20 tfc:ore/normal_magnetite/chalk", "70 tfc:ore/rich_magnetite/chalk"])
        ],
        2000, // Rarity
        0.5, // Density
        -100, // MinY
        -40, // MaxY
        100, // Size
        
        vein => {
            vein.indicator(
                24, // Rarity
                35, // Depth
                1, // UndergroundRarity
                0, // UndergroundCount
                ["tfc:ore/small_magnetite"]
            ).project(true).projectOffset(true)
        },
        placement => {}
    )
})
ServerEvents.tags('worldgen/placed_feature', event => {
    event.add('tfc:in_biome/veins', 'materialism:vein/deep_magnetite')
})