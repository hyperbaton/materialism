TFCEvents.worldgenData(event => {
    event.clusterVein(
        'materialism:vein/deep_zircon', // Name
        [ // Replacement of blocks
            event.blockToWeightedBlockState(['tfc:rock/raw/granite'], ["5 tfc_metallurgy:ore/poor_zircon/granite", "20 tfc_metallurgy:ore/normal_zircon/granite", "75 tfc_metallurgy:ore/rich_zircon/granite"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/rhyolite'], ["5 tfc_metallurgy:ore/poor_zircon/rhyolite", "20 tfc_metallurgy:ore/normal_zircon/rhyolite", "75 tfc_metallurgy:ore/rich_zircon/rhyolite"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/quartzite'], ["5 tfc_metallurgy:ore/poor_zircon/quartzite", "20 tfc_metallurgy:ore/normal_zircon/quartzite", "75 tfc_metallurgy:ore/rich_zircon/quartzite"])
        ],
        2000, // Rarity
        0.5, // Density
        -150, // MinY
        -50, // MaxY
        110, // Size
        
        vein => {
            vein.indicator(
                12, // Rarity
                150, // Depth
                1, // UndergroundRarity
                0, // UndergroundCount
                ["tfc_metallurgy:ore/small_zircon"]
            ).project(true).projectOffset(true)
        },
        placement => {}
    )
})
ServerEvents.tags('worldgen/placed_feature', event => {
    event.add('tfc:in_biome/veins', 'materialism:vein/deep_zircon')
})