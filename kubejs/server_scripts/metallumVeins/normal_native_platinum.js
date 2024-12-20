TFCEvents.worldgenData(event => {
    event.clusterVein(
        'materialism:vein/normal_native_platinum', // Name
        [ // Replacement of blocks
            event.blockToWeightedBlockState(['tfc:rock/raw/quartzite'], ["20 tfc_metallurgy:ore/poor_native_platinum/quartzite", "50 tfc_metallurgy:ore/normal_native_platinum/quartzite", "30 tfc_metallurgy:ore/rich_native_platinum/quartzite"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/basalt'], ["20 tfc_metallurgy:ore/poor_native_platinum/basalt", "50 tfc_metallurgy:ore/normal_native_platinum/basalt", "30 tfc_metallurgy:ore/rich_native_platinum/basalt"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/gabbro'], ["20 tfc_metallurgy:ore/poor_native_platinum/gabbro", "50 tfc_metallurgy:ore/normal_native_platinum/gabbro", "30 tfc_metallurgy:ore/rich_native_platinum/gabbro"])
        ],
        2000, // Rarity
        0.4, // Density
        -100, // MinY
        40, // MaxY
        80, // Size
        
        vein => {
            vein.indicator(
                12, // Rarity
                35, // Depth
                1, // UndergroundRarity
                0, // UndergroundCount
                ["tfc_metallurgy:ore/small_native_platinum"]
            )
        },
        placement => {}
    )
})
ServerEvents.tags('worldgen/placed_feature', event => {
    event.add('tfc:in_biome/veins', 'materialism:vein/normal_native_platinum')
})