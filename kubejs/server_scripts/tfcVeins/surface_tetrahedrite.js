TFCEvents.worldgenData(event => {
    event.clusterVein(
        'materialism:vein/surface_tetrahedrite', // Name
        [ // Replacement of blocks
            event.blockToWeightedBlockState(['tfc:rock/raw/quartzite'], ["80 tfc:ore/poor_tetrahedrite/quartzite", "15 tfc:ore/normal_tetrahedrite/quartzite", "5 tfc:ore/rich_tetrahedrite/quartzite"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/slate'], ["80 tfc:ore/poor_tetrahedrite/slate", "15 tfc:ore/normal_tetrahedrite/slate", "5 tfc:ore/rich_tetrahedrite/slate"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/phyllite'], ["80 tfc:ore/poor_tetrahedrite/phyllite", "15 tfc:ore/normal_tetrahedrite/phyllite", "5 tfc:ore/rich_tetrahedrite/phyllite"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/schist'], ["80 tfc:ore/poor_tetrahedrite/schist", "15 tfc:ore/normal_tetrahedrite/schist", "5 tfc:ore/rich_tetrahedrite/schist"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/gneiss'], ["80 tfc:ore/poor_tetrahedrite/gneiss", "15 tfc:ore/normal_tetrahedrite/gneiss", "5 tfc:ore/rich_tetrahedrite/gneiss"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/marble'], ["80 tfc:ore/poor_tetrahedrite/marble", "15 tfc:ore/normal_tetrahedrite/marble", "5 tfc:ore/rich_tetrahedrite/marble"])
        ],
        24, // Rarity
        0.2, // Density
        -40, // MinY
        5, // MaxY
        15, // Size
        
        vein => {
            vein.indicator(
                6, // Rarity
                50, // Depth
                1, // UndergroundRarity
                0, // UndergroundCount
                ["tfc:ore/small_tetrahedrite"]
            ).project(true).projectOffset(true)
        },
        placement => {}
    )
})
ServerEvents.tags('worldgen/placed_feature', event => {
    event.add('tfc:in_biome/veins', 'materialism:vein/surface_tetrahedrite')
})