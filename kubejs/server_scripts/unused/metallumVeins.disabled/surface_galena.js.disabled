TFCEvents.worldgenData(event => {
    event.clusterVein(
        'materialism:vein/surface_galena', // Name
        [ // Replacement of blocks
            event.blockToWeightedBlockState(['tfc:rock/raw/shale'], ["10 tfc:ore/poor_native_silver/shale", "90 tfc_metallurgy:ore/poor_galena/shale"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/claystone'], ["10 tfc:ore/poor_native_silver/claystone", "90 tfc_metallurgy:ore/poor_galena/claystone"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/limestone'], ["10 tfc:ore/poor_native_silver/limestone", "90 tfc_metallurgy:ore/poor_galena/limestone"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/conglomerate'], ["10 tfc:ore/poor_native_silver/conglomerate", "90 tfc_metallurgy:ore/poor_galena/conglomerate"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/dolomite'], ["10 tfc:ore/poor_native_silver/dolomite", "90 tfc_metallurgy:ore/poor_galena/dolomite"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/chert'], ["10 tfc:ore/poor_native_silver/chert", "90 tfc_metallurgy:ore/poor_galena/chert"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/chalk'], ["10 tfc:ore/poor_native_silver/chalk", "90 tfc_metallurgy:ore/poor_galena/chalk"])
        ],
        40, // Rarity
        0.2, // Density
        70, // MinY
        90, // MaxY
        12, // Size
        
        vein => {
            vein.indicator(
                6, // Rarity
                35, // Depth
                1, // UndergroundRarity
                0, // UndergroundCount
                ["tfc_metallurgy:ore/small_galena"]
            )
        },
        placement => {}
    )
})
ServerEvents.tags('worldgen/placed_feature', event => {
    event.add('tfc:in_biome/veins', 'materialism:vein/surface_galena')
})