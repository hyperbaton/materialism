TFCEvents.worldgenData(event => {
    event.discVein(
        'materialism:vein/lignite', // Name
        [ // Replacement of blocks
            event.blockToWeightedBlockState(['tfc:rock/raw/shale'], ["100 tfc:ore/lignite/shale"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/claystone'], ["100 tfc:ore/lignite/claystone"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/limestone'], ["100 tfc:ore/lignite/limestone"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/conglomerate'], ["100 tfc:ore/lignite/conglomerate"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/dolomite'], ["100 tfc:ore/lignite/dolomite"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/chert'], ["100 tfc:ore/lignite/chert"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/chalk'], ["100 tfc:ore/lignite/chalk"])
        ],
        1000, // Rarity
        0.85, // Density
        -80, // MinY
        -8, // MaxY
        80, // Size
        6, // Height
        vein => {},
        placement => {}
    )
})
ServerEvents.tags('worldgen/placed_feature', event => {
    event.add('tfc:in_biome/veins', 'materialism:vein/lignite')
})