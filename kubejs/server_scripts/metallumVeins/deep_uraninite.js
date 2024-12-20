TFCEvents.worldgenData(event => {
    event.clusterVein(
        'materialism:vein/deep_uraninite', // Name
        [ // Replacement of blocks
            event.blockToWeightedBlockState(['tfc:rock/raw/granite'], ["20 tfc_metallurgy:ore/poor_uraninite/granite", "50 tfc_metallurgy:ore/normal_uraninite/granite", "30 tfc_metallurgy:ore/rich_uraninite/granite"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/diorite'], ["20 tfc_metallurgy:ore/poor_uraninite/diorite", "50 tfc_metallurgy:ore/normal_uraninite/diorite", "30 tfc_metallurgy:ore/rich_uraninite/diorite"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/gneiss'], ["20 tfc_metallurgy:ore/poor_uraninite/gneiss", "50 tfc_metallurgy:ore/normal_uraninite/gneiss", "30 tfc_metallurgy:ore/rich_uraninite/gneiss"])
        ],
        2000, // Rarity
        0.6, // Density
        -200, // MinY
        -80, // MaxY
        80, // Size
        
        vein => {
            vein.indicator(
                12, // Rarity
                35, // Depth
                1, // UndergroundRarity
                0, // UndergroundCount
                ["tfc_metallurgy:ore/small_uraninite"]
            ).project(true).projectOffset(true)
        },
        placement => {}
    )
})
ServerEvents.tags('worldgen/placed_feature', event => {
    event.add('tfc:in_biome/veins', 'materialism:vein/deep_uraninite')
})