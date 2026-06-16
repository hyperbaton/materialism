TFCEvents.worldgenData(event => {
    event.clusterVein(
        'materialism:vein/normal_wolframite', // Name
        [ // Replacement of blocks
            event.blockToWeightedBlockState(['tfc:rock/raw/granite'], ["20 tfc_metallurgy:ore/poor_wolframite/granite", "50 tfc_metallurgy:ore/normal_wolframite/granite", "30 tfc_metallurgy:ore/rich_wolframite/granite"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/diorite'], ["20 tfc_metallurgy:ore/poor_wolframite/diorite", "50 tfc_metallurgy:ore/normal_wolframite/diorite", "30 tfc_metallurgy:ore/rich_wolframite/diorite"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/quartzite'], ["20 tfc_metallurgy:ore/poor_wolframite/quartzite", "50 tfc_metallurgy:ore/normal_wolframite/quartzite", "30 tfc_metallurgy:ore/rich_wolframite/quartzite"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/schist'], ["20 tfc_metallurgy:ore/poor_wolframite/schist", "50 tfc_metallurgy:ore/normal_wolframite/schist", "30 tfc_metallurgy:ore/rich_wolframite/schist"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/gneiss'], ["20 tfc_metallurgy:ore/poor_wolframite/gneiss", "50 tfc_metallurgy:ore/normal_wolframite/gneiss", "30 tfc_metallurgy:ore/rich_wolframite/gneiss"])
        ],
        50, // Rarity
        0.5, // Density
        0, // MinY
        47, // MaxY
        13, // Size
        
        vein => {
            vein.indicator(
                12, // Rarity
                35, // Depth
                1, // UndergroundRarity
                0, // UndergroundCount
                ["tfc_metallurgy:ore/small_wolframite"]
            )
        },
        placement => {}
    )
})
ServerEvents.tags('worldgen/placed_feature', event => {
    event.add('tfc:in_biome/veins', 'materialism:vein/normal_wolframite')
})