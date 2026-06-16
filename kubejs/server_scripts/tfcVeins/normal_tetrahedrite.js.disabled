TFCEvents.worldgenData(event => {
    event.clusterVein(
        'materialism:vein/normal_tetrahedrite', // Name
        [ // Replacement of blocks
            event.blockToWeightedBlockState(['tfc:rock/raw/quartzite'], ["35 tfc:ore/poor_tetrahedrite/quartzite", "40 tfc:ore/normal_tetrahedrite/quartzite", "25 tfc:ore/rich_tetrahedrite/quartzite"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/slate'], ["35 tfc:ore/poor_tetrahedrite/slate", "40 tfc:ore/normal_tetrahedrite/slate", "25 tfc:ore/rich_tetrahedrite/slate"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/phyllite'], ["35 tfc:ore/poor_tetrahedrite/phyllite", "40 tfc:ore/normal_tetrahedrite/phyllite", "25 tfc:ore/rich_tetrahedrite/phyllite"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/schist'], ["35 tfc:ore/poor_tetrahedrite/schist", "40 tfc:ore/normal_tetrahedrite/schist", "25 tfc:ore/rich_tetrahedrite/schist"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/gneiss'], ["35 tfc:ore/poor_tetrahedrite/gneiss", "40 tfc:ore/normal_tetrahedrite/gneiss", "25 tfc:ore/rich_tetrahedrite/gneiss"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/marble'], ["35 tfc:ore/poor_tetrahedrite/marble", "40 tfc:ore/normal_tetrahedrite/marble", "25 tfc:ore/rich_tetrahedrite/marble"])
        ],
        90, // Rarity
        0.25, // Density
        0, // MinY
        60, // MaxY
        30, // Size
        
        vein => {
            vein.indicator(
                25, // Rarity
                35, // Depth
                1, // UndergroundRarity
                0, // UndergroundCount
                ["tfc:ore/small_tetrahedrite"]
            )
        },
        placement => {}
    )
})
ServerEvents.tags('worldgen/placed_feature', event => {
    event.add('tfc:in_biome/veins', 'materialism:vein/normal_tetrahedrite')
})