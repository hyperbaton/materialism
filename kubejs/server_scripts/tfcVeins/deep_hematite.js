TFCEvents.worldgenData(event => {
    event.clusterVein(
        'materialism:vein/deep_hematite', // Name
        [ // Replacement of blocks
            event.blockToWeightedBlockState(['tfc:rock/raw/rhyolite'], ["10 tfc:ore/poor_hematite/rhyolite", "20 tfc:ore/normal_hematite/rhyolite", "70 tfc:ore/rich_hematite/rhyolite"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/basalt'], ["10 tfc:ore/poor_hematite/basalt", "20 tfc:ore/normal_hematite/basalt", "70 tfc:ore/rich_hematite/basalt"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/andesite'], ["10 tfc:ore/poor_hematite/andesite", "20 tfc:ore/normal_hematite/andesite", "70 tfc:ore/rich_hematite/andesite"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/dacite'], ["10 tfc:ore/poor_hematite/dacite", "20 tfc:ore/normal_hematite/dacite", "70 tfc:ore/rich_hematite/dacite"])
        ],
        2000, // Rarity
        0.4, // Density
        -150, // MinY
        -64, // MaxY
        100, // Size
        
        vein => {
            vein.indicator(
                24, // Rarity
                35, // Depth
                1, // UndergroundRarity
                0, // UndergroundCount
                ["tfc:ore/small_hematite"]
            ).project(true).projectOffset(true)
        },
        placement => {}
    )
})
ServerEvents.tags('worldgen/placed_feature', event => {
    event.add('tfc:in_biome/veins', 'materialism:vein/deep_hematite')
})