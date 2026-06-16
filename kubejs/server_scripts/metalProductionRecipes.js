ServerEvents.recipes(event => {
    // List of metals
    const tfcMetallurgyMetals = [
        'aluminum',
        'alnico',
        'antimony',
        'boron',
        'beryllium',
        'beryllium_copper',
        'cobalt',
        'constantan',
        'electrum',
        'ferroboron',
        'florentine_bronze',
        'invar',
        'iridium',
        'lead',
        'lithium',
        'magnesium',
        'manganese',
        'nickel_silver',
        'osmium',
        'osmiridium',
        'pewter',
        'platinum',
        'solder',
        'thorium',
        'titanium',
        'tungsten',
        'tungsten_steel',
        'high_carbon_tungsten_steel',
        'uranium',
        'zircaloy',
        'zirconium'
    ];
    const tfcMetals = [
        'bismuth',
        'bismuth_bronze',
        'black_bronze',
        'brass',
        'bronze',
        'cast_iron',
        'copper',
        'gold',
        'nickel',
        'rose_gold',
        'silver',
        'sterling_silver',
        'tin',
        'steel',
        'black_steel',
        'blue_steel',
        'red_steel',
        'zinc',
        'unknown'
    ];
    const firmalifeMetals = [
        'chromium',
        'stainless_steel'
    ]
    const tfcIron = [
        'pig_iron',
        'wrought_iron'
    ]

    tfcMetals.forEach(metal =>
        event.custom({
            type: 'tfmg:casting',
            ingredients: [{ type: 'neoforge:single', amount: 100, fluid: `tfc:metal/${metal}` }],
            processing_time: 100,
            results: [{ id: `tfc:metal/ingot/${metal}` }]
        })
    )
    tfcMetallurgyMetals.forEach(metal =>
        event.custom({
            type: 'tfmg:casting',
            ingredients: [{ type: 'neoforge:single', amount: 100, fluid: `tfc_metallurgy:metal/${metal}` }],
            processing_time: 100,
            results: [{ id: `tfc_metallurgy:metal/ingot/${metal}` }]
        })
    )
    firmalifeMetals.forEach(metal =>
        event.custom({
            type: 'tfmg:casting',
            ingredients: [{ type: 'neoforge:single', amount: 100, fluid: `firmalife:metal/${metal}` }],
            processing_time: 100,
            results: [{ id: `firmalife:metal/ingot/${metal}` }]
        })
    )
    tfcIron.forEach(metal =>
        event.custom({
            type: 'tfmg:casting',
            ingredients: [{ type: 'neoforge:single', amount: 100, fluid: `tfc:metal/${metal}` }],
            processing_time: 100,
            results: [{ id: `tfc:metal/ingot/cast_iron` }]
        })
    )

    addMetalPartsRecipes('alnico', 900, 1200)
    addMetalPartsRecipes('aluminum', 396, 528)
    addMetalPartsRecipes('andesite_alloy', 312, 416)
    addMetalPartsRecipes('antimony', 378, 504)
    addMetalPartsRecipes('beryllium_copper', 900, 1200)
    addMetalPartsRecipes('beryllium', 720, 960)
    addMetalPartsRecipes('blutonium', 900, 1200)
    addMetalPartsRecipes('boron', 921, 1228)
    addMetalPartsRecipes('cobalt', 900, 1200)
    addMetalPartsRecipes('compressed_iron', 921, 1228)
    addMetalPartsRecipes('constantan', 720, 960)
    addMetalPartsRecipes('electrum', 720, 960)
    addMetalPartsRecipes('enderium', 1020, 1360)
    addMetalPartsRecipes('ferroboron', 921, 1228)
    addMetalPartsRecipes('florentine_bronze', 240, 320)
    addMetalPartsRecipes('graphite', 300, 400)
    addMetalPartsRecipes('invar', 870, 1160)
    addMetalPartsRecipes('iridium', 921, 1228)
    addMetalPartsRecipes('lead', 197, 262)
    addMetalPartsRecipes('lithium', 108, 144)
    addMetalPartsRecipes('lumium', 900, 1200)
    addMetalPartsRecipes('magnesium', 390, 520)
    addMetalPartsRecipes('manganese', 750, 1000)
    addMetalPartsRecipes('mithril', 564, 752)
    addMetalPartsRecipes('nickel_silver', 870, 1160)
    addMetalPartsRecipes('osmiridium', 900, 1200)
    addMetalPartsRecipes('osmium', 921, 1228)
    addMetalPartsRecipes('pewter', 900, 1200)
    addMetalPartsRecipes('pink_slime', 600, 800)
    addMetalPartsRecipes('platinum', 1038, 1384)
    addMetalPartsRecipes('refined_glowstone', 900, 1200)
    addMetalPartsRecipes('refined_obsidian', 900, 1200)
    addMetalPartsRecipes('signalum', 900, 1200)
    addMetalPartsRecipes('solder', 240, 320)
    addMetalPartsRecipes('thorium', 921, 1228)
    addMetalPartsRecipes('titanium', 921, 1228)
    addMetalPartsRecipes('tungsten', 921, 1228)
    addMetalPartsRecipes('tungsten_steel', 921, 1228)
    addMetalPartsRecipes('uranium', 660, 880)
    addMetalPartsRecipes('zircaloy', 1110, 1480)
    addMetalPartsRecipes('zirconium', 1110, 1480)

    function addMetalPartsRecipes(metalName, forgingTemperature, weldingTemperature) {
        // Double ingots
        event.recipes.create.sequenced_assembly(
            `tfc_metallurgy:metal/double_ingot/${metalName}`,
            TFC.ingredient.and(Ingredient.of(`tfc_metallurgy:metal/ingot/${metalName}`), TFC.ingredient.heat(weldingTemperature)),
            [
                event.recipes.create.pressing(`tfc_metallurgy:metal/ingot/${metalName}`, `tfc_metallurgy:metal/ingot/${metalName}`),
                event.recipes.create.deploying(`tfc_metallurgy:metal/ingot/${metalName}`, [`tfc_metallurgy:metal/ingot/${metalName}`, 'tfc:powder/flux']),
                event.recipes.create.deploying(`tfc_metallurgy:metal/ingot/${metalName}`, [`tfc_metallurgy:metal/ingot/${metalName}`, TFC.ingredient.and(Ingredient.of(`tfc_metallurgy:metal/ingot/${metalName}`), TFC.ingredient.heat(weldingTemperature))]),
                event.recipes.create.pressing(`tfc_metallurgy:metal/ingot/${metalName}`, `tfc_metallurgy:metal/ingot/${metalName}`),
                event.recipes.create.pressing(`tfc_metallurgy:metal/ingot/${metalName}`, `tfc_metallurgy:metal/ingot/${metalName}`)
            ]
        ).transitionalItem(`tfc_metallurgy:metal/ingot/${metalName}`).loops(1)
        // Sheets
        event.recipes.create.sequenced_assembly(
            `tfc_metallurgy:metal/sheet/${metalName}`,
            TFC.ingredient.and(Ingredient.of(`tfc_metallurgy:metal/ingot/${metalName}`), TFC.ingredient.heat(forgingTemperature)),
            [
                event.recipes.create.pressing(`tfc_metallurgy:metal/ingot/${metalName}`, `tfc_metallurgy:metal/ingot/${metalName}`),
                event.recipes.create.pressing(`tfc_metallurgy:metal/ingot/${metalName}`, `tfc_metallurgy:metal/ingot/${metalName}`),
                event.recipes.create.pressing(`tfc_metallurgy:metal/ingot/${metalName}`, `tfc_metallurgy:metal/ingot/${metalName}`),
                event.recipes.create.pressing(`tfc_metallurgy:metal/ingot/${metalName}`, `tfc_metallurgy:metal/ingot/${metalName}`),
                event.recipes.create.pressing(`tfc_metallurgy:metal/ingot/${metalName}`, `tfc_metallurgy:metal/ingot/${metalName}`)
            ]
        ).transitionalItem(`tfc_metallurgy:metal/ingot/${metalName}`).loops(1)
        // Double sheets
        event.recipes.create.sequenced_assembly(
            `tfc_metallurgy:metal/double_sheet/${metalName}`,
            TFC.ingredient.and(Ingredient.of(`tfc_metallurgy:metal/sheet/${metalName}`), TFC.ingredient.heat(weldingTemperature)),
            [
                event.recipes.create.pressing(`tfc_metallurgy:metal/sheet/${metalName}`, `tfc_metallurgy:metal/sheet/${metalName}`),
                event.recipes.create.deploying(`tfc_metallurgy:metal/sheet/${metalName}`, [`tfc_metallurgy:metal/sheet/${metalName}`, 'tfc:powder/flux']),
                event.recipes.create.deploying(`tfc_metallurgy:metal/sheet/${metalName}`, [`tfc_metallurgy:metal/sheet/${metalName}`, TFC.ingredient.and(Ingredient.of(`tfc_metallurgy:metal/sheet/${metalName}`), TFC.ingredient.heat(weldingTemperature))]),
                event.recipes.create.pressing(`tfc_metallurgy:metal/sheet/${metalName}`, `tfc_metallurgy:metal/sheet/${metalName}`),
                event.recipes.create.pressing(`tfc_metallurgy:metal/sheet/${metalName}`, `tfc_metallurgy:metal/sheet/${metalName}`)
            ]
        ).transitionalItem(`tfc_metallurgy:metal/sheet/${metalName}`).loops(1)
        // Rods
        event.custom({
            type: 'createaddition:rolling',
            ingredients: [
                { item: `tfc_metallurgy:metal/ingot/${metalName}` }
            ],
            results: [
                { id: `tfc_metallurgy:metal/rod/${metalName}`, count: 2 }
            ]
        })
    }
})