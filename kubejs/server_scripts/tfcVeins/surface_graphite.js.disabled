TFCEvents.worldgenData(event => {
    event.clusterVein(
        'materialism:vein/surface_graphite', // Name
        [ // Replacement of blocks
            event.blockToWeightedBlockState(['tfc:rock/raw/gneiss'], ["100 tfc:ore/graphite/gneiss"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/marble'], ["100 tfc:ore/graphite/marble"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/quartzite'], ["100 tfc:ore/graphite/quartzite"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/schist'], ["100 tfc:ore/graphite/schist"])
        ],
        20, // Rarity
        0.4, // Density
        -30, // MinY
        60, // MaxY
        15, // Size
        
        vein => {},
        placement => {}
    )
})
ServerEvents.tags('worldgen/placed_feature', event => {
    event.add('tfc:in_biome/veins', 'materialism:vein/surface_graphite')
})