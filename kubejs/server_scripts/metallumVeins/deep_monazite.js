TFCEvents.worldgenData(event => {
    event.clusterVein(
        'materialism:vein/normal_monazite', // Name
        [ // Replacement of blocks
            event.blockToWeightedBlockState(['tfc:rock/raw/schist'], ["10 tfc_metallurgy:ore/poor_monazite/schist", "20 tfc_metallurgy:ore/normal_monazite/schist", "70 tfc_metallurgy:ore/rich_monazite/schist"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/gneiss'], ["10 tfc_metallurgy:ore/poor_monazite/gneiss", "20 tfc_metallurgy:ore/normal_monazite/gneiss", "70 tfc_metallurgy:ore/rich_monazite/gneiss"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/granite'], ["10 tfc_metallurgy:ore/poor_monazite/granite", "20 tfc_metallurgy:ore/normal_monazite/granite", "70 tfc_metallurgy:ore/rich_monazite/granite"])
        ],
        2000, // Rarity
        0.4, // Density
        -200, // MinY
        -64, // MaxY
        100, // Size
        
        vein => {
            vein.indicator(
                12, // Rarity
                35, // Depth
                1, // UndergroundRarity
                0, // UndergroundCount
                ["tfc_metallurgy:ore/small_monazite"]
            ).project(true).projectOffset(true)
        },
        placement => {}
    )
})
ServerEvents.tags('worldgen/placed_feature', event => {
    event.add('tfc:in_biome/veins', 'materialism:vein/normal_monazite')
})