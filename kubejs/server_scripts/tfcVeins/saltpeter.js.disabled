TFCEvents.worldgenData(event => {
    event.discVein(
        'materialism:vein/saltpeter', // Name
        [ // Replacement of blocks
            event.blockToWeightedBlockState(['tfc:rock/raw/shale'], ["100 tfc:ore/saltpeter/shale"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/claystone'], ["100 tfc:ore/saltpeter/claystone"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/limestone'], ["100 tfc:ore/saltpeter/limestone"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/conglomerate'], ["100 tfc:ore/saltpeter/conglomerate"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/dolomite'], ["100 tfc:ore/saltpeter/dolomite"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/chert'], ["100 tfc:ore/saltpeter/chert"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/chalk'], ["100 tfc:ore/saltpeter/chalk"])
        ],
        200, // Rarity
        0.4, // Density
        40, // MinY
        100, // MaxY
        50, // Size
        5, // Height
        vein => {},
        placement => {}
    )
})
ServerEvents.tags('worldgen/placed_feature', event => {
    event.add('tfc:in_biome/veins', 'materialism:vein/saltpeter')
})