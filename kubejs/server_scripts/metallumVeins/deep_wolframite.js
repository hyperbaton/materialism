TFCEvents.worldgenData(event => {
    event.clusterVein(
        'materialism:vein/deep_wolframite', // Name
        [ // Replacement of blocks
            event.blockToWeightedBlockState(['tfc:rock/raw/granite'], ["20 tfc_metallurgy:ore/poor_wolframite/granite", "50 tfc_metallurgy:ore/normal_wolframite/granite", "30 tfc_metallurgy:ore/rich_wolframite/granite"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/diorite'], ["20 tfc_metallurgy:ore/poor_wolframite/diorite", "50 tfc_metallurgy:ore/normal_wolframite/diorite", "30 tfc_metallurgy:ore/rich_wolframite/diorite"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/gneiss'], ["20 tfc_metallurgy:ore/poor_wolframite/gneiss", "50 tfc_metallurgy:ore/normal_wolframite/gneiss", "30 tfc_metallurgy:ore/rich_wolframite/gneiss"])
        ],
        2000, // Rarity
        0.6, // Density
        -150, // MinY
        -70, // MaxY
        100, // Size
        
        vein => {
            vein.indicator(
                12, // Rarity
                35, // Depth
                1, // UndergroundRarity
                0, // UndergroundCount
                ["tfc_metallurgy:ore/small_wolframite"]
            ).project(true).projectOffset(true)
        },
        placement => {}
    )
})
ServerEvents.tags('worldgen/placed_feature', event => {
    event.add('tfc:in_biome/veins', 'materialism:vein/deep_wolframite')
})