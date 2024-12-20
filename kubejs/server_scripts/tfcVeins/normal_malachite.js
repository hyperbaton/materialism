TFCEvents.worldgenData(event => {
    event.clusterVein(
        'materialism:vein/normal_malachite', // Name
        [ // Replacement of blocks
            event.blockToWeightedBlockState(['tfc:rock/raw/marble'], ["35 tfc:ore/poor_malachite/marble", "40 tfc:ore/normal_malachite/marble", "25 tfc:ore/rich_malachite/marble"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/limestone'], ["35 tfc:ore/poor_malachite/limestone", "40 tfc:ore/normal_malachite/limestone", "25 tfc:ore/rich_malachite/limestone"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/chalk'], ["35 tfc:ore/poor_malachite/chalk", "40 tfc:ore/normal_malachite/chalk", "25 tfc:ore/rich_malachite/chalk"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/dolomite'], ["35 tfc:ore/poor_malachite/dolomite", "40 tfc:ore/normal_malachite/dolomite", "25 tfc:ore/rich_malachite/dolomite"])
        ],
        90, // Rarity
        0.5, // Density
        0, // MinY
        60, // MaxY
        20, // Size
        
        vein => {
            vein.indicator(
                25, // Rarity
                35, // Depth
                1, // UndergroundRarity
                0, // UndergroundCount
                ["tfc:ore/small_malachite"]
            )
        },
        placement => {}
    )
})
ServerEvents.tags('worldgen/placed_feature', event => {
    event.add('tfc:in_biome/veins', 'materialism:vein/normal_malachite')
})