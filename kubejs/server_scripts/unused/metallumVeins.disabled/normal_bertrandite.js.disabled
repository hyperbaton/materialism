TFCEvents.worldgenData(event => {
    event.clusterVein(
        'materialism:vein/normal_bertrandite', // Name
        [ // Replacement of blocks
            event.blockToWeightedBlockState(['tfc:rock/raw/granite'], ["70 tfc_metallurgy:ore/poor_bertrandite/granite", "25 tfc_metallurgy:ore/normal_bertrandite/granite", "5 tfc_metallurgy:ore/rich_bertrandite/granite"])
        ],
        12, // Rarity
        0.2, // Density
        -10, // MinY
        60, // MaxY
        10, // Size
        
        vein => {
            vein.indicator(
                12, // Rarity
                35, // Depth
                1, // UndergroundRarity
                0, // UndergroundCount
                ["tfc_metallurgy:ore/small_bertrandite"]
            )
        },
        placement => {}
    )
})
ServerEvents.tags('worldgen/placed_feature', event => {
    event.add('tfc:in_biome/veins', 'materialism:vein/normal_bertrandite')
})