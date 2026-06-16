TFCEvents.worldgenData(event => {
    event.clusterVein(
        'materialism:vein/fake_native_gold', // Name
        [ // Replacement of blocks
            event.blockToWeightedBlockState(['tfc:rock/raw/rhyolite'], ["100 tfc:ore/pyrite/rhyolite"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/basalt'], ["100 tfc:ore/pyrite/basalt"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/andesite'], ["100 tfc:ore/pyrite/andesite"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/dacite'], ["100 tfc:ore/pyrite/dacite"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/granite'], ["100 tfc:ore/pyrite/granite"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/diorite'], ["100 tfc:ore/pyrite/diorite"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/gabbro'], ["100 tfc:ore/pyrite/gabbro"])
        ],
        40, // Rarity
        0.35, // Density
        -50, // MinY
        70, // MaxY
        15, // Size
        
        vein => {},
        placement => {}
    )
})
ServerEvents.tags('worldgen/placed_feature', event => {
    event.add('tfc:in_biome/veins', 'materialism:vein/fake_native_gold')
})