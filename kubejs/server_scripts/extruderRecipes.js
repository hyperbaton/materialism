// Create: Mechanical Extruder adjustments

ServerEvents.recipes(event => {

    // Remove every stock extruding recipe so the extruder can't generate infinite rock.
    // (Custom, block-consuming extruding recipes can be added here later.)
    event.remove({ type: 'create_mechanical_extruder:extruding' })

    // Disable the andesite Mechanical Extruder: only the brass one is kept, since it can be
    // set to consume the blocks it touches. Removing its recipe uncrafts it (also hidden in JEI).
    event.remove({ id: 'create_mechanical_extruder:crafting/mechanical_extruder' })
})
