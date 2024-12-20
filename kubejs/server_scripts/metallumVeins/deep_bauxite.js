TFCEvents.worldgenData(event => {
    event.clusterVein(
        'materialism:vein/deep_bauxite', // Name
        [ // Replacement of blocks
            event.blockToWeightedBlockState(['tfc:rock/raw/granite'], ["5 tfc_metallurgy:ore/poor_bauxite/granite", "10 tfc_metallurgy:ore/normal_bauxite/granite", "85 tfc_metallurgy:ore/rich_bauxite/granite"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/gneiss'], ["5 tfc_metallurgy:ore/poor_bauxite/gneiss", "10 tfc_metallurgy:ore/normal_bauxite/gneiss", "85 tfc_metallurgy:ore/rich_bauxite/gneiss"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/basalt'], ["5 tfc_metallurgy:ore/poor_bauxite/basalt", "10 tfc_metallurgy:ore/normal_bauxite/basalt", "85 tfc_metallurgy:ore/rich_bauxite/basalt"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/shale'], ["5 tfc_metallurgy:ore/poor_bauxite/shale", "10 tfc_metallurgy:ore/normal_bauxite/shale", "85 tfc_metallurgy:ore/rich_bauxite/shale"])
        ],
        2000, // Rarity
        0.5, // Density
        -50, // MinY
        -150, // MaxY
        150, // Size
        
        vein => {
            vein.indicator(
                6, // Rarity
                35, // Depth
                1, // UndergroundRarity
                0, // UndergroundCount
                ["tfc_metallurgy:ore/small_bauxite"]
            ).project(true).projectOffset(true)
        },
        placement => {}
    )
})
ServerEvents.tags('worldgen/placed_feature', event => {
    event.add('tfc:in_biome/veins', 'materialism:vein/deep_bauxite')
})