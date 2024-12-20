TFCEvents.worldgenData(event => {
    event.clusterVein(
        'materialism:vein/normal_rutile', // Name
        [ // Replacement of blocks
            event.blockToWeightedBlockState(['tfc:rock/raw/limestone'], ["40 tfc_metallurgy:ore/poor_rutile/limestone", "50 tfc_metallurgy:ore/normal_rutile/limestone", "10 tfc_metallurgy:ore/rich_rutile/limestone"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/dolomite'], ["40 tfc_metallurgy:ore/poor_rutile/dolomite", "50 tfc_metallurgy:ore/normal_rutile/dolomite", "10 tfc_metallurgy:ore/rich_rutile/dolomite"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/schist'], ["40 tfc_metallurgy:ore/poor_rutile/schist", "50 tfc_metallurgy:ore/normal_rutile/schist", "10 tfc_metallurgy:ore/rich_rutile/schist"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/gneiss'], ["40 tfc_metallurgy:ore/poor_rutile/gneiss", "50 tfc_metallurgy:ore/normal_rutile/gneiss", "10 tfc_metallurgy:ore/rich_rutile/gneiss"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/marble'], ["40 tfc_metallurgy:ore/poor_rutile/marble", "50 tfc_metallurgy:ore/normal_rutile/marble", "10 tfc_metallurgy:ore/rich_rutile/marble"])
        ],
        90, // Rarity
        0.2, // Density
        0, // MinY
        55, // MaxY
        15, // Size
        
        vein => {
            vein.indicator(
                12, // Rarity
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
    event.add('tfc:in_biome/veins', 'materialism:vein/normal_rutile')
})