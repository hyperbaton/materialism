TFCEvents.worldgenData(event => {
    event.clusterVein(
        'materialism:vein/deep_bismuthinite', // Name
        [ // Replacement of blocks
            event.blockToWeightedBlockState(['tfc:rock/raw/granite'], ['15 tfc:ore/poor_bismuthinite/granite', '25 tfc:ore/normal_bismuthinite/granite', '60 tfc:ore/rich_bismuthinite/granite']),
            event.blockToWeightedBlockState(['tfc:rock/raw/diorite'], ['15 tfc:ore/poor_bismuthinite/diorite', '25 tfc:ore/normal_bismuthinite/diorite', '60 tfc:ore/rich_bismuthinite/diorite']),
            event.blockToWeightedBlockState(['tfc:rock/raw/gabbro'], ['15 tfc:ore/poor_bismuthinite/gabbro', '25 tfc:ore/normal_bismuthinite/gabbro', '60 tfc:ore/rich_bismuthinite/gabbro'])
        ],
        2000, // Rarity
        0.5, // Density
        -200, // MinY
        -64, // MaxY
        90, // Size
        
        vein => {
            vein.indicator(
                6, // Rarity
                35, // Depth
                1, // UndergroundRarity
                0, // UndergroundCount
                ["tfc:ore/small_bismuthinite"]
            ).project(true).projectOffset(true)
        },
        placement => {}
    )
})
ServerEvents.tags('worldgen/placed_feature', event => {
    event.add('tfc:in_biome/veins', 'materialism:vein/deep_bismuthinite')
})