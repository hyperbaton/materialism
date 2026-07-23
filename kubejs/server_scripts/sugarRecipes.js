ServerEvents.recipes(event => {

    // Automated sugar production, mirroring the manual AFC/Firmalife processes with

    event.recipes.create.mixing(
        [Fluid.of('afc:maple_syrup', 50)],
        [Fluid.of('afc:maple_sap', 1000)]
    ).processingTime(1500).heated()

    event.recipes.create.mixing(
        [Fluid.of('afc:birch_syrup', 50)],
        [Fluid.of('afc:birch_sap', 1000)]
    ).processingTime(1500).heated()

    event.recipes.create.compacting('10x afc:maple_sugar', [Fluid.of('afc:maple_syrup', 1000)]).processingTime(200)
    event.recipes.create.compacting('10x afc:birch_sugar', [Fluid.of('afc:birch_syrup', 1000)]).processingTime(200)

    event.recipes.create.mixing(
        ['3x minecraft:sugar'],
        [
            TFC.ingredient.and(Ingredient.of('tfc:food/beet'), TFC.ingredient.notRotten()),
            TFC.ingredient.and(Ingredient.of('tfc:food/beet'), TFC.ingredient.notRotten()),
            TFC.ingredient.and(Ingredient.of('tfc:food/beet'), TFC.ingredient.notRotten()),
            TFC.ingredient.and(Ingredient.of('tfc:food/beet'), TFC.ingredient.notRotten()),
            TFC.ingredient.and(Ingredient.of('tfc:food/beet'), TFC.ingredient.notRotten()),
            Fluid.of('tfc:salt_water', 1000)
        ]
    ).processingTime(600).heated()

    event.recipes.create.mixing(
        [Fluid.of('firmalife:sugar_water', 500)],
        [
            Ingredient.of('#tfc:foods/sweeteners'),
            Fluid.of('minecraft:water', 1000)
        ]
    ).processingTime(600).heated()
})
