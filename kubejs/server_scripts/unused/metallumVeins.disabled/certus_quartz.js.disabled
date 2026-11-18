TFCEvents.worldgenData(event => {
    event.clusterVein(
        'materialism:vein/certus_quartz', // Name
        [ // Replacement of blocks
            event.blockToWeightedBlockState(['tfc:rock/raw/granite'], ["100 tfc_metallurgy:ore/certus_quartz/granite"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/shale'], ["100 tfc_metallurgy:ore/certus_quartz/shale"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/quartzite'], ["100 tfc_metallurgy:ore/certus_quartz/quartzite"])
        ],
        1000, // Rarity
        0.4, // Density
        -20, // MinY
        100, // MaxY
        80, // Size
        
        vein => {},
        placement => {}
    )
})
ServerEvents.tags('worldgen/placed_feature', event => {
    event.add('tfc:in_biome/veins', 'materialism:vein/certus_quartz')
})