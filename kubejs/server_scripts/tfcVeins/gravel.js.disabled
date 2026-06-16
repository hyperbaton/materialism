TFCEvents.worldgenData(event => {
    event.discVein(
        'materialism:vein/gravel', // Name
        [ // Replacement of blocks
            event.blockToWeightedBlockState(['tfc:rock/raw/granite'], ["100 tfc:rock/gravel/granite"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/diorite'], ["100 tfc:rock/gravel/diorite"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/gabbro'], ["100 tfc:rock/gravel/gabbro"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/shale'], ["100 tfc:rock/gravel/shale"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/claystone'], ["100 tfc:rock/gravel/claystone"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/limestone'], ["100 tfc:rock/gravel/limestone"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/conglomerate'], ["100 tfc:rock/gravel/conglomerate"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/dolomite'], ["100 tfc:rock/gravel/dolomite"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/chert'], ["100 tfc:rock/gravel/chert"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/chalk'], ["100 tfc:rock/gravel/chalk"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/rhyolite'], ["100 tfc:rock/gravel/rhyolite"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/basalt'], ["100 tfc:rock/gravel/basalt"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/andesite'], ["100 tfc:rock/gravel/andesite"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/dacite'], ["100 tfc:rock/gravel/dacite"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/quartzite'], ["100 tfc:rock/gravel/quartzite"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/slate'], ["100 tfc:rock/gravel/slate"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/phyllite'], ["100 tfc:rock/gravel/phyllite"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/schist'], ["100 tfc:rock/gravel/schist"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/gneiss'], ["100 tfc:rock/gravel/gneiss"]),
            event.blockToWeightedBlockState(['tfc:rock/raw/marble'], ["100 tfc:rock/gravel/marble"])
        ],
        30, // Rarity
        0.98, // Density
        -64, // MinY
        100, // MaxY
        44, // Size
        2, // Height
        vein => {},
        placement => {}
    )
})
ServerEvents.tags('worldgen/placed_feature', event => {
    event.add('tfc:in_biome/veins', 'materialism:vein/gravel')
})