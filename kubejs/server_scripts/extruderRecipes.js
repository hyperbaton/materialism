// Create: Mechanical Extruder adjustments

ServerEvents.recipes(event => {

    // Remove every stock extruding recipe so the extruder can't generate infinite rock.
    // (Custom, block-consuming extruding recipes can be added here later.)
    event.remove({ type: 'create_mechanical_extruder:extruding' })

    // Disable the andesite Mechanical Extruder: only the brass one is kept, since it can be
    // set to consume the blocks it touches. Removing its recipe uncrafts it (also hidden in JEI).
    event.remove({ id: 'create_mechanical_extruder:crafting/mechanical_extruder' })

    // Electrodes for the TFMG vat.
    event.remove({ id: 'tfmg:copper_electrode_from_storage_blocks_copper_stonecutting' })
    event.remove({ id: 'tfmg:zinc_electrode_from_storage_blocks_zinc_stonecutting' })
    event.remove({ id: 'tfmg:graphite_electrode_from_storage_blocks_coal_coke_stonecutting' })
    event.remove({ id: 'chemica:cutting/platinum_electrode' })

    function extrudeElectrode(name, first, second, consume, electrode) {
        event.custom({
            type: 'create_mechanical_extruder:extruding',
            advanced: true,
            blockIngredients: { first: { blocks: first }, second: { blocks: second } },
            consumeBlocks: consume,
            result: { id: electrode }
        }).id('kubejs:extruding/' + name + '_electrode')
    }
    extrudeElectrode('copper', 'tfc:fluid/metal/copper', 'minecraft:water', { first: true, second: false }, 'tfmg:copper_electrode')
    extrudeElectrode('zinc', 'tfc:fluid/metal/zinc', 'minecraft:water', { first: true, second: false }, 'tfmg:zinc_electrode')
    extrudeElectrode('graphite', 'tfc_metallurgy:metal/block/graphite', 'tfmg:creosote', { first: true, second: true }, 'tfmg:graphite_electrode')

    // Platinum electrodes are copper electrodes plated with platinum
    event.recipes.create.sequenced_assembly(
        ['chemica:platinum_electrode'],
        'tfmg:copper_electrode',
        [
            event.recipes.createFilling('tfmg:copper_electrode', ['tfmg:copper_electrode', Fluid.of('tfc_metallurgy:metal/platinum', 100)]),
            event.recipes.createDeploying('tfmg:copper_electrode', ['tfmg:copper_electrode', 'tfc_metallurgy:metal/sheet/platinum']),
            event.recipes.createPressing('tfmg:copper_electrode', 'tfmg:copper_electrode')
        ]
    ).transitionalItem('tfmg:copper_electrode').loops(3)
})
