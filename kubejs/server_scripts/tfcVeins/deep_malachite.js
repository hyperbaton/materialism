TFCEvents.worldgenData(event => {
    event.clusterVein(
        'materialism:vein/deep_malachite', // Name
        [ // Replacement of blocks
            event.blockToWeightedBlockState(['tfc:rock/raw/marble'], ["5 tfc:ore/poor_malachite/marble", "15 tfc:ore/normal_malachite/marble", "80 tfc:ore/rich_malachite/marble"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/limestone'], ["5 tfc:ore/poor_malachite/limestone", "15 tfc:ore/normal_malachite/limestone", "80 tfc:ore/rich_malachite/limestone"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/chalk'], ["5 tfc:ore/poor_malachite/chalk", "15 tfc:ore/normal_malachite/chalk", "80 tfc:ore/rich_malachite/chalk"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/dolomite'], ["5 tfc:ore/poor_malachite/dolomite", "15 tfc:ore/normal_malachite/dolomite", "80 tfc:ore/rich_malachite/dolomite"])
        ],
        2000, // Rarity
        0.5, // Density
        -150, // MinY
        -64, // MaxY
        100, // Size
        
        vein => {
            vein.indicator(
                25, // Rarity
                35, // Depth
                1, // UndergroundRarity
                0, // UndergroundCount
                ["tfc:ore/small_malachite"]
            ).project(true).projectOffset(true)
        },
        placement => {}
    )
})
ServerEvents.tags('worldgen/placed_feature', event => {
    event.add('tfc:in_biome/veins', 'materialism:vein/deep_malachite')
})