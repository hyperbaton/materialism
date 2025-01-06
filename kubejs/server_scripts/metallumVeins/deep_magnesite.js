TFCEvents.worldgenData(event => {
    event.clusterVein(
        'materialism:vein/deep_magnesite', // Name
        [ // Replacement of blocks
            event.blockToWeightedBlockState(['tfc:rock/raw/marble'], ["5 tfc_metallurgy:ore/poor_magnesite/marble", "20 tfc_metallurgy:ore/normal_magnesite/marble", "75 tfc_metallurgy:ore/rich_magnesite/marble"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/dolomite'], ["5 tfc_metallurgy:ore/poor_magnesite/dolomite", "20 tfc_metallurgy:ore/normal_magnesite/dolomite", "75 tfc_metallurgy:ore/rich_magnesite/dolomite"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/limestone'], ["5 tfc_metallurgy:ore/poor_magnesite/limestone", "20 tfc_metallurgy:ore/normal_magnesite/limestone", "75 tfc_metallurgy:ore/rich_magnesite/limestone"])
        ],
        2000, // Rarity
        0.5, // Density
        -120, // MinY
        -30, // MaxY
        110, // Size
        
        vein => {
            vein.indicator(
                200, // Depth
                500, // Rarity
                1, // UndergroundRarity
                5, // UndergroundCount
                ["tfc_metallurgy:ore/small_magnesite"]
            ).project(true).projectOffset(true)
        },
        placement => {}
    )
})
ServerEvents.tags('worldgen/placed_feature', event => {
    event.add('tfc:in_biome/veins', 'materialism:vein/deep_magnesite')
})