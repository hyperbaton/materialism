TFCEvents.worldgenData(event => {
    event.discVein(
        'materialism:vein/opal', // Name
        [ // Replacement of blocks
            event.blockToWeightedBlockState(['tfc:rock/raw/shale'], ["100 tfc:ore/opal/shale"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/claystone'], ["100 tfc:ore/opal/claystone"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/limestone'], ["100 tfc:ore/opal/limestone"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/conglomerate'], ["100 tfc:ore/opal/conglomerate"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/dolomite'], ["100 tfc:ore/opal/dolomite"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/chert'], ["100 tfc:ore/opal/chert"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/chalk'], ["100 tfc:ore/opal/chalk"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/rhyolite'], ["100 tfc:ore/opal/rhyolite"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/basalt'], ["100 tfc:ore/opal/basalt"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/andesite'], ["100 tfc:ore/opal/andesite"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/dacite'], ["100 tfc:ore/opal/dacite"])
        ],
        25, // Rarity
        0.2, // Density
        40, // MinY
        60, // MaxY
        8, // Size
        4, // Height
        vein => {},
        placement => {}
    )
})
ServerEvents.tags('worldgen/placed_feature', event => {
    event.add('tfc:in_biome/veins', 'materialism:vein/opal')
})