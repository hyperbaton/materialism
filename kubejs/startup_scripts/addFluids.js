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
})
