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
})