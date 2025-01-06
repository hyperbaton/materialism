TFCEvents.worldgenData(event => {
    event.clusterVein(
        'materialism:vein/deep_rutile', // Name
        [ // Replacement of blocks
            event.blockToWeightedBlockState(['tfc:rock/raw/granite'], ["5 tfc_metallurgy:ore/poor_rutile/granite", "20 tfc_metallurgy:ore/normal_rutile/granite", "75 tfc_metallurgy:ore/rich_rutile/granite"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/schist'], ["5 tfc_metallurgy:ore/poor_rutile/schist", "20 tfc_metallurgy:ore/normal_rutile/schist", "75 tfc_metallurgy:ore/rich_rutile/schist"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/gneiss'], ["5 tfc_metallurgy:ore/poor_rutile/gneiss", "20 tfc_metallurgy:ore/normal_rutile/gneiss", "75 tfc_metallurgy:ore/rich_rutile/gneiss"])
        ],
        2000, // Rarity
        0.5, // Density
        -150, // MinY
        -50, // MaxY
        150, // Size
        
        vein => {
            vein.indicator(
                200, // Depth
                500, // Rarity
                1, // UndergroundRarity
                5, // UndergroundCount
                ["tfc_metallurgy:ore/small_rutile"]
            ).project(true).projectOffset(true)
        },
        placement => {}
    )
})
ServerEvents.tags('worldgen/placed_feature', event => {
    event.add('tfc:in_biome/veins', 'materialism:vein/deep_rutile')
})