TFCEvents.worldgenData(event => {
    event.clusterVein(
        'materialism:vein/surface_native_copper', // Name
        [ // Replacement of blocks
            event.blockToWeightedBlockState(['tfc:rock/raw/rhyolite'], ["80 tfc:ore/poor_native_copper/rhyolite", "15 tfc:ore/normal_native_copper/rhyolite", "5 tfc:ore/rich_native_copper/rhyolite", "10 tfc:deposit/native_copper/rhyolite"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/basalt'], ["80 tfc:ore/poor_native_copper/basalt", "15 tfc:ore/normal_native_copper/basalt", "5 tfc:ore/rich_native_copper/basalt", "10 tfc:deposit/native_copper/basalt"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/andesite'], ["80 tfc:ore/poor_native_copper/andesite", "15 tfc:ore/normal_native_copper/andesite", "5 tfc:ore/rich_native_copper/andesite", "10 tfc:deposit/native_copper/andesite"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/dacite'], ["80 tfc:ore/poor_native_copper/dacite", "15 tfc:ore/normal_native_copper/dacite", "5 tfc:ore/rich_native_copper/dacite", "10 tfc:deposit/native_copper/dacite"])
        ],
        24, // Rarity
        0.2, // Density
        -40, // MinY
        5, // MaxY
        20, // Size
        
        vein => {
            vein.indicator(
                6, // Rarity
                50, // Depth
                1, // UndergroundRarity
                0, // UndergroundCount
                ["tfc:ore/small_native_copper"]
            ).project(true).projectOffset(true)
        },
        placement => {}
    )
})
ServerEvents.tags('worldgen/placed_feature', event => {
    event.add('tfc:in_biome/veins', 'materialism:vein/surface_native_copper')
})