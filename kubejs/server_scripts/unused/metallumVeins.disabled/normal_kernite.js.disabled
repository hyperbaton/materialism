TFCEvents.worldgenData(event => {
    event.clusterVein(
        'materialism:vein/normal_kernite', // Name
        [ // Replacement of blocks
            event.blockToWeightedBlockState(['tfc:rock/raw/limestone'], ["20 tfc_metallurgy:ore/poor_kernite/limestone", "40 tfc_metallurgy:ore/normal_kernite/limestone", "20 tfc_metallurgy:ore/rich_kernite/limestone"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/dolomite'], ["20 tfc_metallurgy:ore/poor_kernite/dolomite", "40 tfc_metallurgy:ore/normal_kernite/dolomite", "20 tfc_metallurgy:ore/rich_kernite/dolomite"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/chalk'], ["20 tfc_metallurgy:ore/poor_kernite/chalk", "40 tfc_metallurgy:ore/normal_kernite/chalk", "20 tfc_metallurgy:ore/rich_kernite/chalk"])
        ],
        30, // Rarity
        0.3, // Density
        0, // MinY
        70, // MaxY
        12, // Size
        
        vein => {
            vein.indicator(
                12, // Rarity
                35, // Depth
                1, // UndergroundRarity
                0, // UndergroundCount
                ["tfc_metallurgy:ore/small_kernite"]
            )
        },
        placement => {}
    )
})
ServerEvents.tags('worldgen/placed_feature', event => {
    event.add('tfc:in_biome/veins', 'materialism:vein/normal_kernite')
})