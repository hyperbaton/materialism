TFCEvents.worldgenData(event => {
    event.clusterVein(
        'materialism:vein/deep_cobaltite', // Name
        [ // Replacement of blocks
            event.blockToWeightedBlockState(['tfc:rock/raw/gneiss'], ["5 tfc_metallurgy:ore/poor_cobaltite/gneiss", "15 tfc_metallurgy:ore/normal_cobaltite/gneiss", "80 tfc_metallurgy:ore/rich_cobaltite/gneiss"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/marble'], ["5 tfc_metallurgy:ore/poor_cobaltite/marble", "15 tfc_metallurgy:ore/normal_cobaltite/marble", "80 tfc_metallurgy:ore/rich_cobaltite/marble"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/schist'], ["5 tfc_metallurgy:ore/poor_cobaltite/schist", "15 tfc_metallurgy:ore/normal_cobaltite/schist", "80 tfc_metallurgy:ore/rich_cobaltite/schist"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/phyllite'], ["5 tfc_metallurgy:ore/poor_cobaltite/phyllite", "15 tfc_metallurgy:ore/normal_cobaltite/phyllite", "80 tfc_metallurgy:ore/rich_cobaltite/phyllite"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/quartzite'], ["5 tfc_metallurgy:ore/poor_cobaltite/quartzite", "15 tfc_metallurgy:ore/normal_cobaltite/quartzite", "80 tfc_metallurgy:ore/rich_cobaltite/quartzite"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/slate'], ["5 tfc_metallurgy:ore/poor_cobaltite/slate", "15 tfc_metallurgy:ore/normal_cobaltite/slate", "80 tfc_metallurgy:ore/rich_cobaltite/slate"])
        ],
        2000, // Rarity
        0.5, // Density
        -150, // MinY
        -60, // MaxY
        150, // Size
        
        vein => {
            vein.indicator(
                200, // Depth
                500, // Rarity
                1, // UndergroundRarity
                5, // UndergroundCount
                ["tfc_metallurgy:ore/small_cobaltite"]
            ).project(true).projectOffset(true)
        },
        placement => {}
    )
})
ServerEvents.tags('worldgen/placed_feature', event => {
    event.add('tfc:in_biome/veins', 'materialism:vein/deep_cobaltite')
})