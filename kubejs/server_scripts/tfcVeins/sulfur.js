TFCEvents.worldgenData(event => {
    event.discVein(
        'materialism:vein/sulfur', // Name
        [ // Replacement of blocks
            event.blockToWeightedBlockState(['tfc:rock/raw/granite'], ["100 tfc:ore/sulfur/granite"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/diorite'], ["100 tfc:ore/sulfur/diorite"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/gabbro'], ["100 tfc:ore/sulfur/gabbro"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/quartzite'], ["100 tfc:ore/sulfur/quartzite"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/slate'], ["100 tfc:ore/sulfur/slate"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/phyllite'], ["100 tfc:ore/sulfur/phyllite"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/schist'], ["100 tfc:ore/sulfur/schist"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/gneiss'], ["100 tfc:ore/sulfur/gneiss"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/marble'], ["100 tfc:ore/sulfur/marble"])
        ],
        4, // Rarity
        0.25, // Density
        -64, // MinY
        -45, // MaxY
        18, // Size
        5, // Height
        vein => {
            vein.nearLava(true)
        },
        placement => {}
    )
})
ServerEvents.tags('worldgen/placed_feature', event => {
    event.add('tfc:in_biome/veins', 'materialism:vein/sulfur')
})