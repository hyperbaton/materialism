TFCEvents.worldgenData(event => {
    event.discVein(
        'materialism:vein/gypsum', // Name
        [ // Replacement of blocks
            event.blockToWeightedBlockState(['tfc:rock/raw/shale'], ["100 tfc:ore/gypsum/shale"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/claystone'], ["100 tfc:ore/gypsum/claystone"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/limestone'], ["100 tfc:ore/gypsum/limestone"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/conglomerate'], ["100 tfc:ore/gypsum/conglomerate"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/dolomite'], ["100 tfc:ore/gypsum/dolomite"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/chert'], ["100 tfc:ore/gypsum/chert"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/chalk'], ["100 tfc:ore/gypsum/chalk"])
        ],
        70, // Rarity
        0.3, // Density
        40, // MinY
        100, // MaxY
        40, // Size
        5, // Height
        vein => {},
        placement => {}
    )
})
ServerEvents.tags('worldgen/placed_feature', event => {
    event.add('tfc:in_biome/veins', 'materialism:vein/gypsum')
})