TFCEvents.worldgenData(event => {
    event.clusterVein(
        'materialism:vein/deep_galena', // Name
        [ // Replacement of blocks
            event.blockToWeightedBlockState(['tfc:rock/raw/shale'], ["30 tfc:ore/normal_sphalerite/shale", "20 tfc_metallurgy:ore/normal_galena/shale", "50 tfc_metallurgy:ore/rich_galena/shale"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/limestone'], ["30 tfc:ore/normal_sphalerite/limestone", "20 tfc_metallurgy:ore/normal_galena/limestone", "50 tfc_metallurgy:ore/rich_galena/limestone"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/dolomite'], ["30 tfc:ore/normal_sphalerite/dolomite", "20 tfc_metallurgy:ore/normal_galena/dolomite", "50 tfc_metallurgy:ore/rich_galena/dolomite"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/chert'], ["30 tfc:ore/normal_sphalerite/chert", "20 tfc_metallurgy:ore/normal_galena/chert", "50 tfc_metallurgy:ore/rich_galena/chert"])
        ],
        2000, // Rarity
        0.5, // Density
        -150, // MinY
        -30, // MaxY
        80, // Size
        
        vein => {
            vein.indicator(
                200, // Depth
                500, // Rarity
                1, // UndergroundRarity
                5, // UndergroundCount
                ["tfc_metallurgy:ore/small_galena"]
            ).project(true).projectOffset(true)
        },
        placement => {}
    )
})
ServerEvents.tags('worldgen/placed_feature', event => {
    event.add('tfc:in_biome/veins', 'materialism:vein/deep_galena')
})