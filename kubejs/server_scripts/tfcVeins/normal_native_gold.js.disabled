TFCEvents.worldgenData(event => {
    event.clusterVein(
        'materialism:vein/normal_native_gold', // Name
        [ // Replacement of blocks
            event.blockToWeightedBlockState(['tfc:rock/raw/rhyolite'], ["35 tfc:ore/poor_native_gold/rhyolite", "40 tfc:ore/normal_native_gold/rhyolite", "25 tfc:ore/rich_native_gold/rhyolite"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/basalt'], ["35 tfc:ore/poor_native_gold/basalt", "40 tfc:ore/normal_native_gold/basalt", "25 tfc:ore/rich_native_gold/basalt"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/andesite'], ["35 tfc:ore/poor_native_gold/andesite", "40 tfc:ore/normal_native_gold/andesite", "25 tfc:ore/rich_native_gold/andesite"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/dacite'], ["35 tfc:ore/poor_native_gold/dacite", "40 tfc:ore/normal_native_gold/dacite", "25 tfc:ore/rich_native_gold/dacite"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/granite'], ["35 tfc:ore/poor_native_gold/granite", "40 tfc:ore/normal_native_gold/granite", "25 tfc:ore/rich_native_gold/granite"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/diorite'], ["35 tfc:ore/poor_native_gold/diorite", "40 tfc:ore/normal_native_gold/diorite", "25 tfc:ore/rich_native_gold/diorite"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/gabbro'], ["35 tfc:ore/poor_native_gold/gabbro", "40 tfc:ore/normal_native_gold/gabbro", "25 tfc:ore/rich_native_gold/gabbro"])
        ],
        90, // Rarity
        0.25, // Density
        0, // MinY
        70, // MaxY
        15, // Size
        
        vein => {
            vein.indicator(
                40, // Rarity
                35, // Depth
                1, // UndergroundRarity
                0, // UndergroundCount
                ["tfc:ore/small_native_gold"]
            )
        },
        placement => {}
    )
})
ServerEvents.tags('worldgen/placed_feature', event => {
    event.add('tfc:in_biome/veins', 'materialism:vein/normal_native_gold')
})