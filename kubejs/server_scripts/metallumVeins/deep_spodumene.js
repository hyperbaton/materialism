TFCEvents.worldgenData(event => {
    event.clusterVein(
        'materialism:vein/deep_spodumene', // Name
        [ // Replacement of blocks
            event.blockToWeightedBlockState(['tfc:rock/raw/granite'], ["5 tfc_metallurgy:ore/poor_spodumene/granite", "20 tfc_metallurgy:ore/normal_spodumene/granite", "75 tfc_metallurgy:ore/rich_spodumene/granite"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/schist'], ["5 tfc_metallurgy:ore/poor_spodumene/schist", "20 tfc_metallurgy:ore/normal_spodumene/schist", "75 tfc_metallurgy:ore/rich_spodumene/schist"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/gneiss'], ["5 tfc_metallurgy:ore/poor_spodumene/gneiss", "20 tfc_metallurgy:ore/normal_spodumene/gneiss", "75 tfc_metallurgy:ore/rich_spodumene/gneiss"])
        ],
        2000, // Rarity
        0.5, // Density
        -150, // MinY
        -50, // MaxY
        110, // Size
        
        vein => {
            vein.indicator(
                12, // Rarity
                150, // Depth
                1, // UndergroundRarity
                0, // UndergroundCount
                ["tfc_metallurgy:ore/small_spodumene"]
            ).project(true).projectOffset(true)
        },
        placement => {}
    )
})
ServerEvents.tags('worldgen/placed_feature', event => {
    event.add('tfc:in_biome/veins', 'materialism:vein/deep_spodumene')
})