ServerEvents.recipes(event => {
    event.remove({id: 'createbb:phase2/zinc_crushing'})
    event.recipes.create.crushing('4x createbb:crushed_zinc', 'tfc:metal/ingot/zinc')
})