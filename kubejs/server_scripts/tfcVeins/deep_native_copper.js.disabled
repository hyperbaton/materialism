TFCEvents.worldgenData(event => {
    event.clusterVein(
        'materialism:vein/deep_native_copper', // Name
        [ // Replacement of blocks
            event.blockToWeightedBlockState(['tfc:rock/raw/rhyolite'], ["5 tfc:ore/poor_native_copper/rhyolite", "15 tfc:ore/normal_native_copper/rhyolite", "80 tfc:ore/rich_native_copper/rhyolite", "10 tfc:deposit/native_copper/rhyolite"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/basalt'], ["5 tfc:ore/poor_native_copper/basalt", "15 tfc:ore/normal_native_copper/basalt", "80 tfc:ore/rich_native_copper/basalt", "10 tfc:deposit/native_copper/basalt"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/andesite'], ["5 tfc:ore/poor_native_copper/andesite", "15 tfc:ore/normal_native_copper/andesite", "80 tfc:ore/rich_native_copper/andesite", "10 tfc:deposit/native_copper/andesite"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/dacite'], ["5 tfc:ore/poor_native_copper/dacite", "15 tfc:ore/normal_native_copper/dacite", "80 tfc:ore/rich_native_copper/dacite", "10 tfc:deposit/native_copper/dacite"])
        ],
        2000, // Rarity
        0.5, // Density
        -150, // MinY
        -64, // MaxY
        100, // Size
        
        vein => {
            vein.indicator(
                200, // Depth
                500, // Rarity
                1, // UndergroundRarity
                5, // UndergroundCount
                ["tfc:ore/small_native_copper"]
            ).project(true).projectOffset(true)
        },
        placement => {}
    )
})
ServerEvents.tags('worldgen/placed_feature', event => {
    event.add('tfc:in_biome/veins', 'materialism:vein/deep_native_copper')
})