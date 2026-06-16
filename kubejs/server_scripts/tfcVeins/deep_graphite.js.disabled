TFCEvents.worldgenData(event => {
    event.clusterVein(
        'materialism:vein/deep_graphite', // Name
        [ // Replacement of blocks
            event.blockToWeightedBlockState(['tfc:rock/raw/gneiss'], ["100 tfc:ore/graphite/gneiss"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/marble'], ["100 tfc:ore/graphite/marble"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/quartzite'], ["100 tfc:ore/graphite/quartzite"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/schist'], ["100 tfc:ore/graphite/schist"])
        ],
        2000, // Rarity
        0.4, // Density
        -150, // MinY
        -64, // MaxY
        100, // Size
        
        vein => {
            vein.project(true).projectOffset(true)
        },
        placement => {}
    )
})
ServerEvents.tags('worldgen/placed_feature', event => {
    event.add('tfc:in_biome/veins', 'materialism:vein/deep_graphite')
})