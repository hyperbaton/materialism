TFCEvents.worldgenData(event => {
    event.clusterVein(
        'materialism:vein/cinnabar', // Name
        [ // Replacement of blocks
            event.blockToWeightedBlockState(['tfc:rock/raw/quartzite'], ["100 tfc:ore/cinnabar/quartzite"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/phyllite'], ["100 tfc:ore/cinnabar/phyllite"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/gneiss'], ["100 tfc:ore/cinnabar/gneiss"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/schist'], ["100 tfc:ore/cinnabar/schist"])
        ],
        2000, // Rarity
        0.6, // Density
        -70, // MinY
        10, // MaxY
        80, // Size
        
        vein => {},
        placement => {}
    )
})
ServerEvents.tags('worldgen/placed_feature', event => {
    event.add('tfc:in_biome/veins', 'materialism:vein/cinnabar')
})