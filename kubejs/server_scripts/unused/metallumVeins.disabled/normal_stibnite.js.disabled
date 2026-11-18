TFCEvents.worldgenData(event => {
    event.clusterVein(
        'materialism:vein/normal_stibnite', // Name
        [ // Replacement of blocks
            event.blockToWeightedBlockState(['tfc:rock/raw/diorite'], ["20 tfc_metallurgy:ore/poor_stibnite/diorite", "50 tfc_metallurgy:ore/normal_stibnite/diorite", "30 tfc_metallurgy:ore/rich_stibnite/diorite"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/shale'], ["20 tfc_metallurgy:ore/poor_stibnite/shale", "50 tfc_metallurgy:ore/normal_stibnite/shale", "30 tfc_metallurgy:ore/rich_stibnite/shale"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/schist'], ["20 tfc_metallurgy:ore/poor_stibnite/schist", "50 tfc_metallurgy:ore/normal_stibnite/schist", "30 tfc_metallurgy:ore/rich_stibnite/schist"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/quartzite'], ["20 tfc_metallurgy:ore/poor_stibnite/quartzite", "50 tfc_metallurgy:ore/normal_stibnite/quartzite", "30 tfc_metallurgy:ore/rich_stibnite/quartzite"])
        ],
        60, // Rarity
        0.2, // Density
        0, // MinY
        75, // MaxY
        15, // Size
        
        vein => {
            vein.indicator(
                12, // Rarity
                35, // Depth
                1, // UndergroundRarity
                0, // UndergroundCount
                ["tfc_metallurgy:ore/small_stibnite"]
            )
        },
        placement => {}
    )
})
ServerEvents.tags('worldgen/placed_feature', event => {
    event.add('tfc:in_biome/veins', 'materialism:vein/normal_stibnite')
})