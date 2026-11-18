TFCEvents.worldgenData(event => {
    event.clusterVein(
        'materialism:vein/surface_rutile', // Name
        [ // Replacement of blocks
            event.blockToWeightedBlockState(['tfc:rock/raw/schist'], ["90 tfc_metallurgy:ore/poor_rutile/schist", "10 tfc_metallurgy:ore/normal_rutile/schist"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/gneiss'], ["90 tfc_metallurgy:ore/poor_rutile/gneiss", "10 tfc_metallurgy:ore/normal_rutile/gneiss"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/basalt'], ["90 tfc_metallurgy:ore/poor_rutile/basalt", "10 tfc_metallurgy:ore/normal_rutile/basalt"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/quartzite'], ["90 tfc_metallurgy:ore/poor_rutile/quartzite", "10 tfc_metallurgy:ore/normal_rutile/quartzite"])
        ],
        21, // Rarity
        0.3, // Density
        65, // MinY
        100, // MaxY
        10, // Size
        
        vein => {
            vein.indicator(
                6, // Rarity
                35, // Depth
                1, // UndergroundRarity
                0, // UndergroundCount
                ["tfc_metallurgy:ore/small_rutile"]
            )
        },
        placement => {}
    )
})
ServerEvents.tags('worldgen/placed_feature', event => {
    event.add('tfc:in_biome/veins', 'materialism:vein/surface_rutile')
})