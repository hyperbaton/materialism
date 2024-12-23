ServerEvents.recipes(event => {
    // Remove graphite melting recipes
    event.remove({id: /tfc_metallurgy:heating.*graphite.*/})
    event.remove({id: 'tfc_metallurgy:casting/graphite_ingot'})
    event.remove({id: 'tfc_metallurgy:casting/graphite_fire_ingot'})
    // Add graphite conforming recipes
    event.recipes.create.compacting('tfc_metallurgy:metal/ingot/graphite', '20x tfc:powder/graphite')
    event.recipes.create.cutting('2x tfc_metallurgy:metal/rod/graphite', 'tfc_metallurgy:metal/ingot/graphite')
})