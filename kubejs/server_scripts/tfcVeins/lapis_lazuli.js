TFCEvents.worldgenData(event => {
    event.clusterVein(
        'materialism:vein/lapis_lazuli', // Name
        [ // Replacement of blocks
            event.blockToWeightedBlockState(['tfc:rock/raw/limestone'], ["100 tfc:ore/lapis_lazuli/limestone"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/marble'], ["100 tfc:ore/lapis_lazuli/marble"])
        ],
        30, // Rarity
        0.12, // Density
        -20, // MinY
        80, // MaxY
        30, // Size
        
        vein => {},
        placement => {}
    )
})
ServerEvents.tags('worldgen/placed_feature', event => {
    event.add('tfc:in_biome/veins', 'materialism:vein/lapis_lazuli')
})