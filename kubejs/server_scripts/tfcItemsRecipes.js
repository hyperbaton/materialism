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

    // tfc_items ships its own double sheet item for these 5 metals, duplicating
    // tfc_metallurgy's -- drop its welding recipe.
    tfcMetallurgyMetals.forEach(metal => event.remove({ id: `tfc_items:welding/${metal}_double_sheet` }))

    function getBasePrefix(metal) {
        if (tfcMetallurgyMetals.includes(metal)) return 'tfc_metallurgy'
        if (firmalifeMetals.includes(metal)) return 'firmalife'
        return 'tfc'
    }

    const meltTemperatures = {
        bismuth: 270, bismuth_bronze: 985, black_bronze: 1070, black_steel: 1485,
        blue_steel: 1540, brass: 930, bronze: 950, cast_iron: 1535, copper: 1080,
        gold: 1060, nickel: 1453, red_steel: 1540, rose_gold: 960, silver: 961,
        sterling_silver: 950, steel: 1540, tin: 230, wrought_iron: 1535, zinc: 420,
        aluminum: 660, constantan: 1200, electrum: 1200, lead: 328, uranium: 1100,
        chromium: 1250, stainless_steel: 1540
    }

    // Woodencog-style metalworking helpers
    function heatedIngredient(item, minTemp, maxTemp) {
        if (maxTemp === undefined) maxTemp = 3000
        return { type: 'woodencog:heated', ingredient: { item: item }, min_temp: minTemp, max_temp: maxTemp }
    }
    function heatedResult(id) {
        return { type: 'heated', copy_heat: true, internal: { id: id } }
    }

    // tfc_items wires: prefer the wire textures already coming from vintageimprovements,
    // createaddition, or (for wrought iron) createaddition's iron_wire, over tfc_items' own,
    // for these metals. Metals with no counterpart yet (bismuth, bismuth_bronze,
    // black_bronze, black_steel, blue_steel, chromium, red_steel, stainless_steel,
    // sterling_silver) keep tfc_items' wire as normal.
    const tfcItemsWiresWithAlternative = [
        'aluminum', 'brass', 'bronze', 'cast_iron', 'constantan', 'copper', 'electrum',
        'gold', 'lead', 'nickel', 'rose_gold', 'silver', 'steel', 'tin', 'uranium',
        'wrought_iron', 'zinc'
    ]

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

        // Wire: rod → 2x wire (rolling) -- only for metals with no alternative wire item
        // elsewhere; tfc_items' own native anvil recipe for those is removed further down.
        if (!tfcItemsWiresWithAlternative.includes(metal)) {
            event.custom({
                type: 'createaddition:rolling',
                ingredients: [{item: rod}],
                results: [{id: `tfc_items:${metal}_wire`, count: 2}]
            })
        }

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

        // Heavy sheet: double_sheet + sheet welded → heavy_sheet, woodencog-style
        // heated_compacting (matches how double ingots/sheets are made now).
        let weldingTemperature = Math.round(meltTemperatures[metal] * 0.8)
        event.custom({
            type: 'woodencog:heated_compacting',
            heat_requirement: 0,
            ingredients: [
                heatedIngredient(doubleSheet, weldingTemperature),
                heatedIngredient(sheet, weldingTemperature),
                heatedIngredient('tfc:powder/flux', 0)
            ],
            results: [heatedResult(`tfc_items:${metal}_heavy_sheet`)]
        })
    }

    tfcMetals.forEach(metal => addTfcItemsRecipes(metal))
    tfcMetallurgyMetals.forEach(metal => addTfcItemsRecipes(metal))
    firmalifeMetals.forEach(metal => addTfcItemsRecipes(metal))

    tfcItemsWiresWithAlternative.forEach(metal => event.remove({ id: `tfc_items:anvil/${metal}_wire` }))

    // tfc_items ships its own tag-based (c:nuggets/<metal>) tfc:heating recipes for nuggets,
    // which duplicate the item-specific 10mB ones we added for our standardized nuggets.
    // Remove the overlapping ones so only our recipe applies (also fixes an inconsistency:
    // tfc_items' own zinc recipe only melts to 5mB, not the 10mB every other metal uses).
    event.remove({ id: 'tfc_items:heating/copper/nugget' })
    event.remove({ id: 'tfc_items:heating/zinc/nugget' })
    event.remove({ id: 'tfc_items:heating/cast_iron/nugget' })
    event.remove({ id: 'tfc_items:heating/nickel/nugget' })

    event.remove({ id: 'tfc_items:heating/electrum/nugget' })
    event.remove({ id: 'tfc_items:heating/lead/nugget' })

    // Remove washing (splashing) recipes of raw ore
    event.remove({ id: 'create:splashing/crushed_raw_copper' })
    event.remove({ id: 'create:splashing/crushed_raw_zinc' })
})
