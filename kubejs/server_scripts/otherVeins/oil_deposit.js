TFCEvents.worldgenData(event => {
    event.discVein(
        'materialism:vein/oil_deposit', // Name
        [ // Replacement of blocks
            event.blockToWeightedBlockState(['minecraft:bedrock'], ["100 tfmg:oil_deposit"])
        ],
        20000, // Rarity
        0.04, // Density
        -62, // MinY
        -59, // MaxY
        50, // Size
        4, // Height
        vein => {},
        placement => {}
    )
})
ServerEvents.tags('worldgen/placed_feature', event => {
    event.add('tfc:in_biome/veins', 'materialism:vein/oil_deposit')
})