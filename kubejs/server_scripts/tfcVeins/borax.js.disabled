TFCEvents.worldgenData(event => {
    event.discVein(
        'materialism:vein/borax', // Name
        [ // Replacement of blocks
            event.blockToWeightedBlockState(['tfc:rock/raw/claystone'], ["100 tfc:ore/borax/claystone"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/limestone'], ["100 tfc:ore/borax/limestone"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/shale'], ["100 tfc:ore/borax/shale"])
        ],
        40, // Rarity
        0.2, // Density
        40, // MinY
        100, // MaxY
        23, // Size
        3, // Height
        vein => {},
        placement => {}
    )
})
ServerEvents.tags('worldgen/placed_feature', event => {
    event.add('tfc:in_biome/veins', 'materialism:vein/borax')
})