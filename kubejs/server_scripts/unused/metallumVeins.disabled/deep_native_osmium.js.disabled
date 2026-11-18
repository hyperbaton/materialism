TFCEvents.worldgenData(event => {
    event.clusterVein(
        'materialism:vein/deep_native_osmium', // Name
        [ // Replacement of blocks
            event.blockToWeightedBlockState(['tfc:rock/raw/basalt'], ["10 tfc_metallurgy:ore/poor_native_osmium/basalt", "30 tfc_metallurgy:ore/normal_native_osmium/basalt", "15 tfc_metallurgy:ore/rich_native_osmium/basalt", "10 tfc_metallurgy:ore/poor_native_iridium/basalt", "30 tfc_metallurgy:ore/normal_native_iridium/basalt", "15 tfc_metallurgy:ore/rich_native_iridium/basalt"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/gabbro'], ["10 tfc_metallurgy:ore/poor_native_osmium/gabbro", "30 tfc_metallurgy:ore/normal_native_osmium/gabbro", "15 tfc_metallurgy:ore/rich_native_osmium/gabbro", "10 tfc_metallurgy:ore/poor_native_iridium/gabbro", "30 tfc_metallurgy:ore/normal_native_iridium/gabbro", "15 tfc_metallurgy:ore/rich_native_iridium/gabbro"])
        ],
        1500, // Rarity
        0.5, // Density
        -150, // MinY
        -80, // MaxY
        80, // Size
        
        vein => {
            vein.indicator(
                200, // Depth
                500, // Rarity
                1, // UndergroundRarity
                5, // UndergroundCount
                ["tfc_metallurgy:ore/small_native_osmium", "tfc_metallurgy:ore/small_native_iridium"]
            ).project(true).projectOffset(true)
        },
        placement => {}
    )
})
ServerEvents.tags('worldgen/placed_feature', event => {
    event.add('tfc:in_biome/veins', 'materialism:vein/deep_native_osmium')
})