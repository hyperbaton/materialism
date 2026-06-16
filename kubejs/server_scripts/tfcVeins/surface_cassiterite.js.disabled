TFCEvents.worldgenData(event => {
    event.clusterVein(
        'materialism:vein/surface_cassiterite', // Name
        [ // Replacement of blocks
            event.blockToWeightedBlockState(['tfc:rock/raw/granite'], ["35 tfc:ore/poor_cassiterite/granite", "40 tfc:ore/normal_cassiterite/granite", "25 tfc:ore/rich_cassiterite/granite", "10 tfc:deposit/cassiterite/granite"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/diorite'], ["35 tfc:ore/poor_cassiterite/diorite", "40 tfc:ore/normal_cassiterite/diorite", "25 tfc:ore/rich_cassiterite/diorite", "10 tfc:deposit/cassiterite/diorite"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/gabbro'], ["35 tfc:ore/poor_cassiterite/gabbro", "40 tfc:ore/normal_cassiterite/gabbro", "25 tfc:ore/rich_cassiterite/gabbro", "10 tfc:deposit/cassiterite/gabbro"])
        ],
        5, // Rarity
        0.4, // Density
        80, // MinY
        180, // MaxY
        15, // Size
        
        vein => {
            vein.indicator(
                12, // Rarity
                35, // Depth
                1, // UndergroundRarity
                0, // UndergroundCount
                ["tfc:ore/small_cassiterite"]
            )
        },
        placement => {}
    )
})
ServerEvents.tags('worldgen/placed_feature', event => {
    event.add('tfc:in_biome/veins', 'materialism:vein/surface_cassiterite')
})