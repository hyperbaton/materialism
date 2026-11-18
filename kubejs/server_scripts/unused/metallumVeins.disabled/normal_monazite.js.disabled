TFCEvents.worldgenData(event => {
    event.clusterVein(
        'materialism:vein/normal_monazite', // Name
        [ // Replacement of blocks
            event.blockToWeightedBlockState(['tfc:rock/raw/quartzite'], ["80 tfc_metallurgy:ore/poor_monazite/quartzite", "15 tfc_metallurgy:ore/normal_monazite/quartzite", "5 tfc_metallurgy:ore/rich_monazite/quartzite"]),
        ],
        21, // Rarity
        0.2, // Density
        -50, // MinY
        40, // MaxY
        10, // Size
        
        vein => {
            vein.indicator(
                12, // Rarity
                35, // Depth
                1, // UndergroundRarity
                0, // UndergroundCount
                ["tfc_metallurgy:ore/small_monazite"]
            )
        },
        placement => {}
    )
})
ServerEvents.tags('worldgen/placed_feature', event => {
    event.add('tfc:in_biome/veins', 'materialism:vein/normal_monazite')
})