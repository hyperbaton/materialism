TFCEvents.worldgenData(event => {
    event.clusterVein(
        'materialism:vein/deep_bertrandite', // Name
        [ // Replacement of blocks
            event.blockToWeightedBlockState(['tfc:rock/raw/granite'], ["5 tfc_metallurgy:ore/poor_bertrandite/granite", "15 tfc_metallurgy:ore/normal_bertrandite/granite", "80 tfc_metallurgy:ore/rich_bertrandite/granite"])
        ],
        1500, // Rarity
        0.5, // Density
        -150, // MinY
        -60, // MaxY
        100, // Size
        
        vein => {
            vein.indicator(
                200, // Depth
                500, // Rarity
                1, // UndergroundRarity
                5, // UndergroundCount
                ["tfc_metallurgy:ore/small_bertrandite"]
            ).project(true).projectOffset(true)
        },
        placement => {}
    )
})
ServerEvents.tags('worldgen/placed_feature', event => {
    event.add('tfc:in_biome/veins', 'materialism:vein/deep_bertrandite')
})