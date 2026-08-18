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
        'neodymium',
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
        'vanadium',
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
    event.custom({
        type: 'tfmg:casting',
        ingredients: [{ type: 'neoforge:single', amount: 100, fluid: `tfc:metal/pig_iron` }],
        processing_time: 100,
        results: [{ id: `tfc:metal/ingot/pig_iron` }]
    })

    addMetalPartsRecipes('alnico', 900, 1200)
    addMetalPartsRecipes('aluminum', 396, 528)
    addMetalPartsRecipes('antimony', 378, 504)
    addMetalPartsRecipes('beryllium_copper', 900, 1200)
    addMetalPartsRecipes('beryllium', 720, 960)
    addMetalPartsRecipes('boron', 921, 1228)
    addMetalPartsRecipes('cobalt', 900, 1200)
    addMetalPartsRecipes('constantan', 720, 960)
    addMetalPartsRecipes('electrum', 720, 960)
    addMetalPartsRecipes('ferroboron', 921, 1228)
    addMetalPartsRecipes('florentine_bronze', 240, 320)
    addMetalPartsRecipes('graphite', 300, 400)
    addMetalPartsRecipes('invar', 870, 1160)
    addMetalPartsRecipes('iridium', 921, 1228)
    addMetalPartsRecipes('lead', 197, 262)
    addMetalPartsRecipes('lithium', 108, 144)
    addMetalPartsRecipes('magnesium', 390, 520)
    addMetalPartsRecipes('manganese', 750, 1000)
    addMetalPartsRecipes('neodymium', 614, 819)
    addMetalPartsRecipes('nickel_silver', 870, 1160)
    addMetalPartsRecipes('osmiridium', 900, 1200)
    addMetalPartsRecipes('osmium', 921, 1228)
    addMetalPartsRecipes('pewter', 900, 1200)
    addMetalPartsRecipes('platinum', 1038, 1384)
    addMetalPartsRecipes('solder', 240, 320)
    addMetalPartsRecipes('thorium', 921, 1228)
    addMetalPartsRecipes('titanium', 921, 1228)
    addMetalPartsRecipes('tungsten', 921, 1228)
    addMetalPartsRecipes('tungsten_steel', 921, 1228)
    addMetalPartsRecipes('uranium', 660, 880)
    addMetalPartsRecipes('vanadium', 750, 1000)
    addMetalPartsRecipes('zircaloy', 1110, 1480)
    addMetalPartsRecipes('zirconium', 1110, 1480)

    // Woodencog-style metalworking
    function heatedIngredient(item, minTemp, maxTemp) {
        if (maxTemp === undefined) maxTemp = 3000
        return { type: 'woodencog:heated', ingredient: { item: item }, min_temp: minTemp, max_temp: maxTemp }
    }
    function heatedResult(id) {
        return { type: 'heated', copy_heat: true, internal: { id: id } }
    }
    function addDoubleIngot(namespace, metalName, weldingTemperature) {
        event.custom({
            type: 'woodencog:heated_compacting',
            heat_requirement: 0,
            ingredients: [
                heatedIngredient(`${namespace}:metal/ingot/${metalName}`, weldingTemperature),
                heatedIngredient(`${namespace}:metal/ingot/${metalName}`, weldingTemperature),
                heatedIngredient('tfc:powder/flux', 0)
            ],
            results: [heatedResult(`${namespace}:metal/double_ingot/${metalName}`)]
        })
    }
    function addSheet(namespace, metalName, forgingTemperature) {
        event.custom({
            type: 'woodencog:heated_pressing',
            heat_requirement: 0,
            ingredients: [heatedIngredient(`${namespace}:metal/double_ingot/${metalName}`, forgingTemperature)],
            results: [heatedResult(`${namespace}:metal/sheet/${metalName}`)]
        })
    }
    function addDoubleSheet(namespace, metalName, weldingTemperature) {
        event.custom({
            type: 'woodencog:heated_compacting',
            heat_requirement: 0,
            ingredients: [
                heatedIngredient(`${namespace}:metal/sheet/${metalName}`, weldingTemperature),
                heatedIngredient(`${namespace}:metal/sheet/${metalName}`, weldingTemperature),
                heatedIngredient('tfc:powder/flux', 0)
            ],
            results: [heatedResult(`${namespace}:metal/double_sheet/${metalName}`)]
        })
    }

    function addMetalPartsRecipes(metalName, forgingTemperature, weldingTemperature) {
        addDoubleIngot('tfc_metallurgy', metalName, weldingTemperature)
        addSheet('tfc_metallurgy', metalName, forgingTemperature)
        addDoubleSheet('tfc_metallurgy', metalName, weldingTemperature)
        // Rods
        event.custom({
            type: 'createaddition:rolling',
            ingredients: [
                TFC.ingredient.and(Ingredient.of(`tfc_metallurgy:metal/ingot/${metalName}`), TFC.ingredient.heat(forgingTemperature))
            ],
            results: [
                { id: `tfc_metallurgy:metal/rod/${metalName}`, count: 2 }
            ]
        })
    }

    // Automated rod rolling (Create Additions' rolling mill) for base TFC and Firmalife
    // metals -- tfc_metallurgy metals already get this above via addMetalPartsRecipes.
    function addRodRolling(namespace, metalName, meltTemperature) {
        let forgingTemperature = Math.round(meltTemperature * 0.6)
        event.custom({
            type: 'createaddition:rolling',
            ingredients: [
                TFC.ingredient.and(Ingredient.of(`${namespace}:metal/ingot/${metalName}`), TFC.ingredient.heat(forgingTemperature))
            ],
            results: [
                { id: `${namespace}:metal/rod/${metalName}`, count: 2 }
            ]
        })
    }

    // Base TFC metals (melting point in degC, from TFC's own ingot heating recipes).
    const tfcBaseMetals = [
        ['bismuth', 270], ['bismuth_bronze', 985], ['black_bronze', 1070], ['black_steel', 1485],
        ['blue_steel', 1540], ['brass', 930], ['bronze', 950], ['cast_iron', 1535],
        ['copper', 1080], ['gold', 1060], ['nickel', 1453], ['red_steel', 1540],
        ['rose_gold', 960], ['silver', 961], ['steel', 1540], ['sterling_silver', 950],
        ['tin', 230], ['wrought_iron', 1535], ['zinc', 420]
    ]
    tfcBaseMetals.forEach(([metalName, meltTemperature]) => {
        addRodRolling('tfc', metalName, meltTemperature)
        addDoubleSheet('tfc', metalName, Math.round(meltTemperature * 0.8))
    })

    // Firmalife metals: full set (double ingot, sheet, double sheet, rod)
    const firmalifeMeltTemps = [['chromium', 1250], ['stainless_steel', 1540]]
    firmalifeMeltTemps.forEach(([metalName, meltTemperature]) => {
        let forgingTemperature = Math.round(meltTemperature * 0.6)
        let weldingTemperature = Math.round(meltTemperature * 0.8)
        addDoubleIngot('firmalife', metalName, weldingTemperature)
        addSheet('firmalife', metalName, forgingTemperature)
        addDoubleSheet('firmalife', metalName, weldingTemperature)
        addRodRolling('firmalife', metalName, meltTemperature)
    })

    // Plated block recipes:
    function addMetalPlatedBlockRecipes(base, metal, sheetIngredient) {
        const transitional = 'kubejs:wood_plating_blank'
        event.recipes.create.sequenced_assembly(
            [`8x ${base}:metal/block/${metal}`],
            Ingredient.of('#minecraft:planks'),
            [
                event.recipes.createDeploying(transitional, [transitional, sheetIngredient]),
                event.recipes.createPressing(transitional, transitional)
            ]
        ).transitionalItem(transitional).loops(4)
    }
    const tfcBlockMetallurgyMetals = [
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
        'neodymium',
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
        'uranium',
        'vanadium',
        'zircaloy',
        'zirconium'
    ];
    const tfcBlockMetals = [
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
        'zinc'
    ];
    
    tfcBlockMetals.forEach(metal => addMetalPlatedBlockRecipes('tfc', metal, { tag: `c:sheets/${metal}` }))
    tfcBlockMetallurgyMetals.forEach(metal => addMetalPlatedBlockRecipes('tfc_metallurgy', metal, { tag: `c:sheets/${metal}` }))
    firmalifeMetals.forEach(metal => addMetalPlatedBlockRecipes('firmalife', metal, { item: `firmalife:metal/sheet/${metal}` }))
    
    // Smelting of ores into metal. Woodencog only adds these recipes for vanilla TFC
    const GRADE_AMOUNTS = { small: 10, poor: 15, normal: 25, rich: 35 }

    function addOreSmelting(namespace, ore, metal, temperature) {
        Object.keys(GRADE_AMOUNTS).forEach(grade => {
            event.custom({
                type: 'woodencog:heated_mixing',
                heat_requirement: temperature,
                ingredients: [
                    {
                        type: 'woodencog:heated',
                        ingredient: { item: `${namespace}:ore/${grade}_${ore}` },
                        max_temp: 3000,
                        min_temp: temperature
                    }
                ],
                results: [{ amount: GRADE_AMOUNTS[grade], id: `${namespace}:metal/${metal}` }]
            }).id(`kubejs:heated_mixing/ore/${grade}_${ore}_to_liquid`)
        })
    }

    addOreSmelting('tfc_metallurgy', 'bauxite', 'aluminum', 660)
    addOreSmelting('tfc_metallurgy', 'bertrandite', 'beryllium', 1200)
    addOreSmelting('tfc_metallurgy', 'cobaltite', 'cobalt', 1500)
    addOreSmelting('tfc_metallurgy', 'galena', 'lead', 328)
    addOreSmelting('tfc_metallurgy', 'kernite', 'boron', 2070)
    addOreSmelting('tfc_metallurgy', 'magnesite', 'magnesium', 650)
    addOreSmelting('tfc_metallurgy', 'native_iridium', 'iridium', 2490)
    addOreSmelting('tfc_metallurgy', 'native_osmium', 'osmium', 3025)
    addOreSmelting('tfc_metallurgy', 'native_platinum', 'platinum', 1730)
    addOreSmelting('tfc_metallurgy', 'pyrolusite', 'manganese', 1250)
    addOreSmelting('tfc_metallurgy', 'rutile', 'titanium', 1700)
    addOreSmelting('tfc_metallurgy', 'spodumene', 'lithium', 328)
    addOreSmelting('tfc_metallurgy', 'stibnite', 'antimony', 630)
    addOreSmelting('tfc_metallurgy', 'wolframite', 'tungsten', 3400)
    addOreSmelting('tfc_metallurgy', 'zircon', 'zirconium', 1850)

    // Firmalife ores.
    addOreSmelting('firmalife', 'chromite', 'chromium', 1250)
})