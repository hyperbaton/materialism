TFCEvents.worldgenData(event => {
    event.clusterVein(
        'materialism:vein/normal_native_osmium', // Name
        [ // Replacement of blocks
            event.blockToWeightedBlockState(['tfc:rock/raw/basalt'], ["10 tfc_metallurgy:ore/poor_native_osmium/basalt", "30 tfc_metallurgy:ore/normal_native_osmium/basalt", "15 tfc_metallurgy:ore/rich_native_osmium/basalt", "10 tfc_metallurgy:ore/poor_native_iridium/basalt", "30 tfc_metallurgy:ore/normal_native_iridium/basalt", "15 tfc_metallurgy:ore/rich_native_iridium/basalt"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/gabbro'], ["10 tfc_metallurgy:ore/poor_native_osmium/gabbro", "30 tfc_metallurgy:ore/normal_native_osmium/gabbro", "15 tfc_metallurgy:ore/rich_native_osmium/gabbro", "10 tfc_metallurgy:ore/poor_native_iridium/gabbro", "30 tfc_metallurgy:ore/normal_native_iridium/gabbro", "15 tfc_metallurgy:ore/rich_native_iridium/gabbro"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/quartzite'], ["10 tfc_metallurgy:ore/poor_native_osmium/quartzite", "30 tfc_metallurgy:ore/normal_native_osmium/quartzite", "15 tfc_metallurgy:ore/rich_native_osmium/quartzite", "10 tfc_metallurgy:ore/poor_native_iridium/quartzite", "30 tfc_metallurgy:ore/normal_native_iridium/quartzite", "15 tfc_metallurgy:ore/rich_native_iridium/quartzite"])
        ],
        40, // Rarity
        0.15, // Density
        30, // MinY
        100, // MaxY
        10, // Size
        
        vein => {
            vein.indicator(
                12, // Rarity
                35, // Depth
                1, // UndergroundRarity
                0, // UndergroundCount
                ["tfc_metallurgy:ore/small_native_osmium", "tfc_metallurgy:ore/small_native_iridium"]
            )
        },
        placement => {}
    )
})
ServerEvents.tags('worldgen/placed_feature', event => {
    event.add('tfc:in_biome/veins', 'materialism:vein/normal_native_osmium')
})