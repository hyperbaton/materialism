TFCEvents.worldgenData(event => {
    event.clusterVein(
        'materialism:vein/deep_tetrahedrite', // Name
        [ // Replacement of blocks
            event.blockToWeightedBlockState(['tfc:rock/raw/quartzite'], ["5 tfc:ore/poor_tetrahedrite/quartzite", "15 tfc:ore/normal_tetrahedrite/quartzite", "80 tfc:ore/rich_tetrahedrite/quartzite"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/slate'], ["5 tfc:ore/poor_tetrahedrite/slate", "15 tfc:ore/normal_tetrahedrite/slate", "80 tfc:ore/rich_tetrahedrite/slate"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/phyllite'], ["5 tfc:ore/poor_tetrahedrite/phyllite", "15 tfc:ore/normal_tetrahedrite/phyllite", "80 tfc:ore/rich_tetrahedrite/phyllite"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/schist'], ["5 tfc:ore/poor_tetrahedrite/schist", "15 tfc:ore/normal_tetrahedrite/schist", "80 tfc:ore/rich_tetrahedrite/schist"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/gneiss'], ["5 tfc:ore/poor_tetrahedrite/gneiss", "15 tfc:ore/normal_tetrahedrite/gneiss", "80 tfc:ore/rich_tetrahedrite/gneiss"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/marble'], ["5 tfc:ore/poor_tetrahedrite/marble", "15 tfc:ore/normal_tetrahedrite/marble", "80 tfc:ore/rich_tetrahedrite/marble"])
        ],
        2000, // Rarity
        0.5, // Density
        -150,// // MinY
        -60,// // MaxY
        100, // Size
        
        vein => {
            vein.indicator(
                25, // Rarity
                35, // Depth
                1, // UndergroundRarity
                0, // UndergroundCount
                ["tfc:ore/small_tetrahedrite"]
            ).project(true).projectOffset(true)
        },
        placement => {}
    )
})
ServerEvents.tags('worldgen/placed_feature', event => {
    event.add('tfc:in_biome/veins', 'materialism:vein/deep_tetrahedrite')
})