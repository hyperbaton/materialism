ServerEvents.recipes(event => {

    // AFC sap boiling: a stick or any twig, given back unchanged
    ;['maple', 'birch'].forEach(tree => {
        event.remove({ id: `afc:pot/${tree}_syrup` })
        event.custom({
            type: 'tfc:pot',
            ingredients: [[{ item: 'minecraft:stick' }, { tag: 'tfc:twigs' }]],
            item_output: [{ modifiers: [{ type: 'tfc:copy_input' }] }],
            fluid_ingredient: { fluid: `afc:${tree}_sap`, amount: 1000 },
            duration: 1500,
            temperature: 100,
            fluid_output: { id: `afc:${tree}_syrup`, amount: 50 }
        }).id(`afc:pot/${tree}_syrup`)
    })

    // Caramel apple: skewer a fresh apple, then dip it in caramel
    const caramelApple = 'kubejs:incomplete_caramel_apple'
    event.recipes.create.sequenced_assembly(
        ['firmalife:food/caramel_apple'],
        TFC.ingredient.and(Ingredient.of(['tfc:food/red_apple', 'tfc:food/green_apple']), TFC.ingredient.notRotten()),
        [
            event.recipes.create.deploying(caramelApple, [caramelApple, Ingredient.of('#c:rods/wooden')]),
            event.recipes.create.filling(caramelApple, [caramelApple, Fluid.of('firmalife:caramel', 100)])
        ]
    ).transitionalItem(caramelApple).loops(1)
    // Create's honeyed apple duplicates the caramel apple
    event.remove({ id: 'create:filling/honeyed_apple' })

    // Caramel: butter cooked into sugar water, as in Firmalife's pot and vat
    event.custom({
        type: 'create:mixing',
        ingredients: [
            { type: 'tfc:and', children: [{ item: 'firmalife:food/butter' }, { type: 'tfc:not_rotten' }] },
            fluidIn('firmalife:sugar_water', 1000)
        ],
        results: [{ id: 'firmalife:caramel', amount: 1000 }],
        heat_requirement: 'heated',
        processing_time: 600
    }).id('kubejs:sugar/mixing/caramel')

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
