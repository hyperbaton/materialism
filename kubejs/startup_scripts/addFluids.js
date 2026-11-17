StartupEvents.registry('fluid', event => {
    // Air separation chain. Gases like TFMG's: no placeable
    // block, a "Tank" item, and TFMG's shared tintable gas texture.
    function addGas(id, name, tint) {
        let fluid = event.create(id)
            .noBlock()
            .tint(tint)
            .stillTexture('tfmg:fluid/gas_texture')
            .flowingTexture('tfmg:fluid/gas_texture')
        fluid.displayName(name)
        fluid.bucketItem.displayName(name + ' Tank')
    }
    addGas('liquid_air', 'Liquid Air', '#9FE8E0')
    addGas('nitrogen', 'Nitrogen', '#A8D8F0')
    addGas('oxygen', 'Oxygen', '#6FB4E8')
    // Polysilicon precursor
    addGas('trichlorosilane', 'Trichlorosilane', '#D6DCD8')
    // Arc-quenching gas for high-voltage breakers
    addGas('sulfur_hexafluoride', 'Sulfur Hexafluoride', '#E4ECE6')
    // Bayer liquor and Kroll by-product
    event.create('sodium_aluminate')
        .tint('#D8D2B8')
        .stillTexture('minecraft:block/water_still')
        .flowingTexture('minecraft:block/water_flow')
        .displayName('Sodium Aluminate Solution')
    event.create('magnesium_chloride')
        .tint('#E8E2D6')
        .stillTexture('tfc:block/molten_still')
        .flowingTexture('tfc:block/molten_flow')
        .displayName('Molten Magnesium Chloride')
    event.create('sodium_tungstate')
        .tint('#E6E8D0')
        .stillTexture('minecraft:block/water_still')
        .flowingTexture('minecraft:block/water_flow')
        .displayName('Sodium Tungstate Solution')
    event.create('chloroplatinic_acid')
        .tint('#E8A030')
        .stillTexture('minecraft:block/water_still')
        .flowingTexture('minecraft:block/water_flow')
        .displayName('Chloroplatinic Acid')
    event.create('iridium_chloride')
        .tint('#5A3A2A')
        .stillTexture('minecraft:block/water_still')
        .flowingTexture('minecraft:block/water_flow')
        .displayName('Iridium Chloride Solution')
    event.create('thorium_nitrate')
        .tint('#E8ECF0')
        .stillTexture('minecraft:block/water_still')
        .flowingTexture('minecraft:block/water_flow')
        .displayName('Thorium Nitrate Solution')
    // Aqueous solutions: leach liquors of the extraction lines and the CCA wood preservative
    ;[
        ['lithium_sulfate', 'Lithium Sulfate Solution', '#E4E8EC'],
        ['lithium_chloride', 'Lithium Chloride Solution', '#ECECE4'],
        ['beryllium_sulfate', 'Beryllium Sulfate Solution', '#E0ECE4'],
        ['uranyl_sulfate', 'Uranyl Sulfate Solution', '#D8E040'],
        ['chromated_copper_arsenate', 'Chromated Copper Arsenate', '#5E8A4A'],
        ['fluoroniobic_acid', 'Fluoroniobic Acid', '#DCE4E8'],
        ['fluorotantalic_acid', 'Fluorotantalic Acid', '#E4E0EC']
    ].forEach(([id, name, tint]) => event.create(id)
        .tint(tint)
        .stillTexture('minecraft:block/water_still')
        .flowingTexture('minecraft:block/water_flow')
        .displayName(name))
    addGas('zirconium_tetrachloride', 'Zirconium Tetrachloride', '#ECE8E0')
    // Volatile osmium oxide, distilled off the leach
    addGas('osmium_tetroxide', 'Osmium Tetroxide', '#E6E0A0')
})
