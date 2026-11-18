TFCEvents.worldgenData(event => {
    event.clusterVein(
        'materialism:vein/deep_pyrolusite', // Name
        [ // Replacement of blocks
            event.blockToWeightedBlockState(['tfc:rock/raw/shale'], ["5 tfc_metallurgy:ore/poor_pyrolusite/shale", "20 tfc_metallurgy:ore/normal_pyrolusite/shale", "75 tfc_metallurgy:ore/rich_pyrolusite/shale"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/claystone'], ["5 tfc_metallurgy:ore/poor_pyrolusite/claystone", "20 tfc_metallurgy:ore/normal_pyrolusite/claystone", "75 tfc_metallurgy:ore/rich_pyrolusite/claystone"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/conglomerate'], ["5 tfc_metallurgy:ore/poor_pyrolusite/conglomerate", "20 tfc_metallurgy:ore/normal_pyrolusite/conglomerate", "75 tfc_metallurgy:ore/rich_pyrolusite/conglomerate"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/chert'], ["5 tfc_metallurgy:ore/poor_pyrolusite/chert", "20 tfc_metallurgy:ore/normal_pyrolusite/chert", "75 tfc_metallurgy:ore/rich_pyrolusite/chert"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/chalk'], ["5 tfc_metallurgy:ore/poor_pyrolusite/chalk", "20 tfc_metallurgy:ore/normal_pyrolusite/chalk", "75 tfc_metallurgy:ore/rich_pyrolusite/chalk"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/quartzite'], ["5 tfc_metallurgy:ore/poor_pyrolusite/quartzite", "20 tfc_metallurgy:ore/normal_pyrolusite/quartzite", "75 tfc_metallurgy:ore/rich_pyrolusite/quartzite"])
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
                ["tfc_metallurgy:ore/small_pyrolusite"]
            ).project(true).projectOffset(true)
        },
        placement => {}
    )
})
ServerEvents.tags('worldgen/placed_feature', event => {
    event.add('tfc:in_biome/veins', 'materialism:vein/deep_pyrolusite')
})