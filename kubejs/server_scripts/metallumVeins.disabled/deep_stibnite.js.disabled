TFCEvents.worldgenData(event => {
    event.clusterVein(
        'materialism:vein/normal_stibnite', // Name
        [ // Replacement of blocks
            event.blockToWeightedBlockState(['tfc:rock/raw/diorite'], ["20 tfc_metallurgy:ore/poor_stibnite/diorite", "50 tfc_metallurgy:ore/normal_stibnite/diorite", "30 tfc_metallurgy:ore/rich_stibnite/diorite"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/shale'], ["20 tfc_metallurgy:ore/poor_stibnite/shale", "50 tfc_metallurgy:ore/normal_stibnite/shale", "30 tfc_metallurgy:ore/rich_stibnite/shale"])
        ],
        2000, // Rarity
        0.6, // Density
        -130, // MinY
        -40, // MaxY
        80, // Size
        
        vein => {
            vein.indicator(
                200, // Depth
                500, // Rarity
                1, // UndergroundRarity
                5, // UndergroundCount
                ["tfc_metallurgy:ore/small_stibnite"]
            ).project(true).projectOffset(true)
        },
        placement => {}
    )
})
ServerEvents.tags('worldgen/placed_feature', event => {
    event.add('tfc:in_biome/veins', 'materialism:vein/normal_stibnite')
})