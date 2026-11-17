// TFC Metal Things
ServerEvents.recipes(event => {
  const metals = ['bismuth_bronze', 'black_bronze', 'black_steel', 'blue_steel', 'bronze', 'copper', 'red_steel', 'steel', 'wrought_iron']
  const support = 'kubejs:incomplete_metal_support'

  // Supports: a riveted rod truss, expensive because a support holds a wide span
  metals.forEach(metal => {
    const rod = Ingredient.of(`#c:rods/${metal}`)
    const ring = `tfc_items:${metal}_ring`
    const rivet = `tfc_items:${metal}_rivet`
    event.remove({id: `tfc_metal_things:crafting/metal/support/${metal}`})
    event.recipes.create.sequenced_assembly([`8x tfc_metal_things:metal/support/${metal}`], rod, [
      event.recipes.create.deploying(support, [support, rod]),
      event.recipes.create.deploying(support, [support, ring]),
      event.recipes.create.deploying(support, [support, rivet]),
      event.recipes.create.pressing(support, support),
      event.recipes.create.deploying(support, [support, ring]),
      event.recipes.create.deploying(support, [support, rivet]),
      event.recipes.create.pressing(support, support)
    ]).transitionalItem(support).loops(4).id(`kubejs:metal_things/support/${metal}`)
  })
})
