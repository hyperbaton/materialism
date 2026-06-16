TFCEvents.worldgenData(event => {
    event.clusterVein(
        'materialism:vein/cryolite', // Name
        [ // Replacement of blocks
            event.blockToWeightedBlockState(['tfc:rock/raw/granite'], ["100 tfc:ore/cryolite/granite"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/diorite'], ["100 tfc:ore/cryolite/diorite"])
        ],
        2000, // Rarity
        0.7, // Density
        -70, // MinY
        -10, // MaxY
        70, // Size
        
        vein => {},
        placement => {}
    )
})
ServerEvents.tags('worldgen/placed_feature', event => {
    event.add('tfc:in_biome/veins', 'materialism:vein/cryolite')
})