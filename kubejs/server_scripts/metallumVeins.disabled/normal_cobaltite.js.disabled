TFCEvents.worldgenData(event => {
    event.clusterVein(
        'materialism:vein/normal_cobaltite', // Name
        [ // Replacement of blocks
            event.blockToWeightedBlockState(['tfc:rock/raw/gneiss'], ["80 tfc_metallurgy:ore/poor_cobaltite/gneiss", "15 tfc_metallurgy:ore/normal_cobaltite/gneiss", "5 tfc_metallurgy:ore/rich_cobaltite/gneiss"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/marble'], ["80 tfc_metallurgy:ore/poor_cobaltite/marble", "15 tfc_metallurgy:ore/normal_cobaltite/marble", "5 tfc_metallurgy:ore/rich_cobaltite/marble"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/schist'], ["80 tfc_metallurgy:ore/poor_cobaltite/schist", "15 tfc_metallurgy:ore/normal_cobaltite/schist", "5 tfc_metallurgy:ore/rich_cobaltite/schist"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/phyllite'], ["80 tfc_metallurgy:ore/poor_cobaltite/phyllite", "15 tfc_metallurgy:ore/normal_cobaltite/phyllite", "5 tfc_metallurgy:ore/rich_cobaltite/phyllite"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/quartzite'], ["80 tfc_metallurgy:ore/poor_cobaltite/quartzite", "15 tfc_metallurgy:ore/normal_cobaltite/quartzite", "5 tfc_metallurgy:ore/rich_cobaltite/quartzite"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/slate'], ["80 tfc_metallurgy:ore/poor_cobaltite/slate", "15 tfc_metallurgy:ore/normal_cobaltite/slate", "5 tfc_metallurgy:ore/rich_cobaltite/slate"])
        ],
        90, // Rarity
        0.2, // Density
        0, // MinY
        60, // MaxY
        10, // Size
        
        vein => {
            vein.indicator(
                12, // Rarity
                35, // Depth
                1, // UndergroundRarity
                0, // UndergroundCount
                ["tfc_metallurgy:ore/small_cobaltite"]
            )
        },
        placement => {}
    )
})
ServerEvents.tags('worldgen/placed_feature', event => {
    event.add('tfc:in_biome/veins', 'materialism:vein/normal_cobaltite')
})