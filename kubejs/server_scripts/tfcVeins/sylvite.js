TFCEvents.worldgenData(event => {
    event.discVein(
        'materialism:vein/sylvite', // Name
        [ // Replacement of blocks
            event.blockToWeightedBlockState(['tfc:rock/raw/shale'], ["100 tfc:ore/sylvite/shale"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/claystone'], ["100 tfc:ore/sylvite/claystone"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/chert'], ["100 tfc:ore/sylvite/chert"])
        ],
        80, // Rarity
        0.35, // Density
        40, // MinY
        100, // MaxY
        50, // Size
        5, // Height
        vein => {},
        placement => {}
    )
})
ServerEvents.tags('worldgen/placed_feature', event => {
    event.add('tfc:in_biome/veins', 'materialism:vein/sylvite')
})