TFCEvents.worldgenData(event => {
    event.clusterVein(
        'materialism:vein/surface_bauxite', // Name
        [ // Replacement of blocks
            event.blockToWeightedBlockState(['tfc:rock/raw/claystone'], ["90 tfc_metallurgy:ore/poor_bauxite/claystone", "10 tfc_metallurgy:ore/normal_bauxite/claystone"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/limestone'], ["90 tfc_metallurgy:ore/poor_bauxite/limestone", "10 tfc_metallurgy:ore/normal_bauxite/limestone"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/dolomite'], ["90 tfc_metallurgy:ore/poor_bauxite/dolomite", "10 tfc_metallurgy:ore/normal_bauxite/dolomite"])
        ],
        27, // Rarity
        0.2, // Density
        55, // MinY
        90, // MaxY
        12, // Size
        
        vein => {
            vein.indicator(
                6, // Rarity
                35, // Depth
                1, // UndergroundRarity
                0, // UndergroundCount
                ["tfc_metallurgy:ore/small_bauxite"]
            )
        },
        placement => {}
    )
})
ServerEvents.tags('worldgen/placed_feature', event => {
    event.add('tfc:in_biome/veins', 'materialism:vein/surface_bauxite')
})