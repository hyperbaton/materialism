ServerEvents.recipes(event => {
    // Regular (non-jam) bread sandwiches can't be crafted for some unknown reason, so they are added manually again.
    const breads = ['tfc:food/wheat_bread',
        'tfc:food/barley_bread',
        'tfc:food/maize_bread',
        'tfc:food/oat_bread',
        'tfc:food/rice_bread',
        'tfc:food/rye_bread',
        'firmalife:food/wheat_flatbread',
        'firmalife:food/barley_flatbread',
        'firmalife:food/maize_flatbread',
        'firmalife:food/oat_flatbread',
        'firmalife:food/rice_flatbread',
        'firmalife:food/rye_flatbread',
        'firmalife:food/wheat_slice',
        'firmalife:food/barley_slice',
        'firmalife:food/maize_slice',
        'firmalife:food/oat_slice',
        'firmalife:food/rice_slice',
        'firmalife:food/rye_slice'
    ]

    const patterns = {
        sss: ['KB ', 'SSS', ' B '],
        ssx: ['KB ', 'SS ', ' B '],
        xss: ['KB ', ' SS', ' B '],
        sxs: ['KB ', 'S S', ' B '],
        xxs: ['KB ', '  S', ' B '],
        sxx: ['KB ', 'S  ', ' B '],
        xsx: ['KB ', ' S ', ' B ']
    }

    breads.forEach(bread => {
        const grainMatch = /^(?:tfc|firmalife):food\/([a-z]+)_(?:bread|flatbread|slice)$/.exec(bread)
        if (!grainMatch) throw new Error(`sandwichRecipes: couldn't extract grain from ${bread}`)
        const grain = grainMatch[1]

        const breadId = bread
        const sandwichId = `tfc:food/${grain}_bread_sandwich`
        const breadSlug = bread.replace(/[:/]/g, '_')
        const filling = TFC.ingredient.and(Ingredient.of('#tfc:usable_in_sandwich'), TFC.ingredient.notRotten())
        const breadIngredient = TFC.ingredient.and(Ingredient.of(breadId), TFC.ingredient.notRotten())

        Object.keys(patterns).forEach(suffix => {
            event.custom({
                type: 'tfc:advanced_shaped_crafting',
                key: {
                    B: breadIngredient,
                    K: { tag: 'c:tools/knife' },
                    S: filling
                },
                pattern: patterns[suffix],
                remainder: { modifiers: [{ type: 'tfc:damage_crafting_remainder' }] },
                result: {
                    modifiers: [{
                        type: 'tfc:meal',
                        food: { decay_modifier: 4.5, hunger: 4, saturation: 1.0, water: 0.5 },
                        portions: [
                            { ingredient: { item: breadId }, nutrient_modifier: 0.675, saturation_modifier: 0.5, water_modifier: 0.5 },
                            { nutrient_modifier: 0.8, saturation_modifier: 0.8, water_modifier: 0.8 }
                        ]
                    }],
                    stack: { count: 1, id: sandwichId }
                }
            }).id(`materialism:crafting/food/${breadSlug}_sandwich_${suffix}`)
        })
    })
})
