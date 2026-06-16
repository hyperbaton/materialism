TFCEvents.worldgenData(event => {
    event.clusterVein(
        'materialism:vein/kaolin', // Name
        [ // Replacement of blocks
            
        ],
        40, // Rarity
        1.0, // Density
        75, // MinY
        110, // MaxY
        18, // Size
        
        vein => {
            vein.indicator(
                10, // Rarity
                35, // Depth
                1, // UndergroundRarity
                0, // UndergroundCount
                ["tfc:plant/blood_lily"]
            )
        },
        placement => {}
    )
})
ServerEvents.tags('worldgen/placed_feature', event => {
    //event.add('tfc:in_biome/veins', 'materialism:vein/kaolin')
})