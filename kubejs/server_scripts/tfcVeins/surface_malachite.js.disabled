TFCEvents.worldgenData(event => {
    event.clusterVein(
        'materialism:vein/surface_malachite', // Name
        [ // Replacement of blocks
            event.blockToWeightedBlockState(['tfc:rock/raw/marble'], ["80 tfc:ore/poor_malachite/marble", "15 tfc:ore/normal_malachite/marble", "5 tfc:ore/rich_malachite/marble"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/limestone'], ["80 tfc:ore/poor_malachite/limestone", "15 tfc:ore/normal_malachite/limestone", "5 tfc:ore/rich_malachite/limestone"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/chalk'], ["80 tfc:ore/poor_malachite/chalk", "15 tfc:ore/normal_malachite/chalk", "5 tfc:ore/rich_malachite/chalk"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/dolomite'], ["80 tfc:ore/poor_malachite/dolomite", "15 tfc:ore/normal_malachite/dolomite", "5 tfc:ore/rich_malachite/dolomite"])
        ],
        30, // Rarity
        0.2, // Density
        -40, // MinY
        5, // MaxY
        20, // Size
        
        vein => {
            vein.indicator(
                14, // Rarity
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
    event.add('tfc:in_biome/veins', 'materialism:vein/surface_malachite')
})