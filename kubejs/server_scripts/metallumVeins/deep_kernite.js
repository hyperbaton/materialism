TFCEvents.worldgenData(event => {
    event.clusterVein(
        'materialism:vein/deep_kernite', // Name
        [ // Replacement of blocks
            event.blockToWeightedBlockState(['tfc:rock/raw/limestone'], ["5 tfc_metallurgy:ore/poor_kernite/limestone", "20 tfc_metallurgy:ore/normal_kernite/limestone", "75 tfc_metallurgy:ore/rich_kernite/limestone"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/dolomite'], ["5 tfc_metallurgy:ore/poor_kernite/dolomite", "20 tfc_metallurgy:ore/normal_kernite/dolomite", "75 tfc_metallurgy:ore/rich_kernite/dolomite"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/chalk'], ["5 tfc_metallurgy:ore/poor_kernite/chalk", "20 tfc_metallurgy:ore/normal_kernite/chalk", "75 tfc_metallurgy:ore/rich_kernite/chalk"])
        ],
        1500, // Rarity
        0.5, // Density
        -120, // MinY
        -40, // MaxY
        80, // Size
        
        vein => {
            vein.indicator(
                200, // Depth
                500, // Rarity
                1, // UndergroundRarity
                5, // UndergroundCount
                ["tfc_metallurgy:ore/small_kernite"]
            ).project(true).projectOffset(true)
        },
        placement => {}
    )
})
ServerEvents.tags('worldgen/placed_feature', event => {
    event.add('tfc:in_biome/veins', 'materialism:vein/deep_kernite')
})