TFCEvents.worldgenData(event => {
    event.discVein(
        'materialism:vein/amethyst', // Name
        [ // Replacement of blocks
            event.blockToWeightedBlockState(['tfc:rock/raw/shale'], ["100 tfc:ore/amethyst/shale"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/claystone'], ["100 tfc:ore/amethyst/claystone"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/limestone'], ["100 tfc:ore/amethyst/limestone"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/conglomerate'], ["100 tfc:ore/amethyst/conglomerate"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/dolomite'], ["100 tfc:ore/amethyst/dolomite"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/chert'], ["100 tfc:ore/amethyst/chert"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/chalk'], ["100 tfc:ore/amethyst/chalk"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/quartzite'], ["100 tfc:ore/amethyst/quartzite"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/slate'], ["100 tfc:ore/amethyst/slate"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/phyllite'], ["100 tfc:ore/amethyst/phyllite"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/schist'], ["100 tfc:ore/amethyst/schist"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/gneiss'], ["100 tfc:ore/amethyst/gneiss"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/marble'], ["100 tfc:ore/amethyst/marble"])
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
    event.add('tfc:in_biome/veins', 'materialism:vein/amethyst')
})