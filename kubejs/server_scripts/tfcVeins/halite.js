TFCEvents.worldgenData(event => {
    event.discVein(
        'materialism:vein/halite', // Name
        [ // Replacement of blocks
            event.blockToWeightedBlockState(['tfc:rock/raw/shale'], ["100 tfc:ore/halite/shale"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/claystone'], ["100 tfc:ore/halite/claystone"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/limestone'], ["100 tfc:ore/halite/limestone"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/conglomerate'], ["100 tfc:ore/halite/conglomerate"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/dolomite'], ["100 tfc:ore/halite/dolomite"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/chert'], ["100 tfc:ore/halite/chert"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/chalk'], ["100 tfc:ore/halite/chalk"])
        ],
        150, // Rarity
        0.85, // Density
        -45, // MinY
        -12, // MaxY
        50, // Size
        5, // Height
        vein => {
            vein.project(true).projectOffset(true)
        },
        placement => {}
    )
})
ServerEvents.tags('worldgen/placed_feature', event => {
    event.add('tfc:in_biome/veins', 'materialism:vein/halite')
})