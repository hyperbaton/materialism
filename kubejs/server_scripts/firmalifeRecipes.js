ServerEvents.recipes(event => {
    event.remove({id: 'firmalife:barrel/cork'})
    event.recipes.tfc.barrel_sealed(8000)
    .outputItem('firmalife:cork')
    .inputs('#forge:bark', TFC.fluidStackIngredient('tfc:limewater', 200))
})