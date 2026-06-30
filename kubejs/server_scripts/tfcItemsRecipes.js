ServerEvents.recipes(event => {

    const tfcMetals = [
        'bismuth', 'bismuth_bronze', 'black_bronze', 'black_steel', 'blue_steel',
        'brass', 'bronze', 'cast_iron', 'copper', 'gold', 'nickel', 'red_steel',
        'rose_gold', 'silver', 'sterling_silver', 'steel', 'tin', 'wrought_iron', 'zinc'
    ]
    const tfcMetallurgyMetals = [
        'aluminum', 'constantan', 'electrum', 'lead', 'uranium'
    ]
    const firmalifeMetals = [
        'chromium', 'stainless_steel'
    ]

    function getBasePrefix(metal) {
        if (tfcMetallurgyMetals.includes(metal)) return 'tfc_metallurgy'
        if (firmalifeMetals.includes(metal)) return 'firmalife'
        return 'tfc'
    }

    function addTfcItemsRecipes(metal) {
        let base = getBasePrefix(metal)
        let ingot = `${base}:metal/ingot/${metal}`
        let sheet = `${base}:metal/sheet/${metal}`
        let doubleSheet = `${base}:metal/double_sheet/${metal}`
        let rod = `${base}:metal/rod/${metal}`

        // Stamen: rod → 2x stamen (lathe)
        event.recipes.vintageimprovements.turning(`2x tfc_items:${metal}_stamen`, rod).processingTime(200)

        // Nail: stamen → 5x nail (cutting)
        event.recipes.create.cutting(`5x tfc_items:${metal}_nail`, `tfc_items:${metal}_stamen`)

        // Screw: stamen → 5x screw (lathe)
        event.recipes.vintageimprovements.turning(`5x tfc_items:${metal}_screw`, `tfc_items:${metal}_stamen`).processingTime(200)

        // Rivet: stamen → 5x rivet (pressing)
        event.recipes.create.pressing(`5x tfc_items:${metal}_rivet`, `tfc_items:${metal}_stamen`)

        // Ring: stamen → 2x ring (curving concave)
        event.custom({
            type: 'vintageimprovements:curving',
            ingredients: [{item: `tfc_items:${metal}_stamen`}],
            results: [{id: `tfc_items:${metal}_ring`, count: 2}],
            mode: 2
        })

        // Wire: rod → 2x wire (rolling)
        event.custom({
            type: 'createaddition:rolling',
            ingredients: [{item: rod}],
            results: [{id: `tfc_items:${metal}_wire`, count: 2}]
        })

        // Foil: sheet → 2x foil (rolling)
        event.custom({
            type: 'createaddition:rolling',
            ingredients: [{item: sheet}],
            results: [{id: `tfc_items:${metal}_foil`, count: 2}]
        })

        // Gear: double_sheet → gear (cutting + pressing sequenced assembly)
        event.recipes.create.sequenced_assembly(
            `tfc_items:${metal}_gear`,
            doubleSheet,
            [
                event.recipes.create.cutting(doubleSheet, doubleSheet),
                event.recipes.create.pressing(doubleSheet, doubleSheet)
            ]
        ).transitionalItem(doubleSheet).loops(1)

        // Heavy sheet: double_sheet + sheet welded → heavy_sheet (sequenced assembly simulating welding)
        event.recipes.create.sequenced_assembly(
            `tfc_items:${metal}_heavy_sheet`,
            doubleSheet,
            [
                event.recipes.create.deploying(doubleSheet, [doubleSheet, 'tfc:powder/flux']),
                event.recipes.create.deploying(doubleSheet, [doubleSheet, sheet]),
                event.recipes.create.pressing(doubleSheet, doubleSheet),
                event.recipes.create.pressing(doubleSheet, doubleSheet)
            ]
        ).transitionalItem(doubleSheet).loops(1)
    }

    tfcMetals.forEach(metal => addTfcItemsRecipes(metal))
    tfcMetallurgyMetals.forEach(metal => addTfcItemsRecipes(metal))
    firmalifeMetals.forEach(metal => addTfcItemsRecipes(metal))
})
