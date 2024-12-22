ServerEvents.recipes(event => {

    // List of metals
    const tfcMetallurgyMetals = [
        'aluminum',
        'cobalt',
        'constantan',
        'invar',
        'lead',
        'osmium',
        'platinum',
        'uranium'
    ];
    const tfcMetals = [
        'brass',
        'bronze',
        'cast_iron',
        'nickel',
        'pig_iron',
        'rose_gold',
        'silver',
        'tin',
        'steel',
        'zinc'
    ];

    // Remove recipes for crafting the C&A rods (we use TFC ones)
    event.remove({output: /createaddition:.*rod/})
    // Remove recipes for diamond grit and diamond sandpaper
    event.remove({output: 'createaddition:diamond_grit_sandpaper'})
    event.remove({output: 'createaddition:diamond_grit'})
    // Remove recipes for motor and alternator (use the ones from New Age and TFMG)
    event.remove({output: 'createaddition:electric_motor'})
    event.remove({output: 'createaddition:alternator'})

    // Improve recipe for rolling mill
    event.replaceInput(
        {id: 'createaddition:crafting/rolling_mill'},
        'create:andesite_alloy',
        'tfc:metal/rod/steel'
    )

    // Remove C&A capacitors
    event.remove({output: 'createaddition:capacitor'})
    event.replaceInput(
        {input: 'createaddition:capacitor'},
        'createaddition:capacitor',
        'tfmg:capacitor_'
    )

    event.remove({id: /createaddition:pressing\/\w+_ingot/})
    event.remove({id: 'createaddition:rolling/gold_plate'})
    event.custom({
      type: 'createaddition:rolling',
      ingredients: [
        { item: 'tfc:metal/rod/gold' }
      ],
      results: [
        { item: 'createaddition:gold_wire' },
      ],
    })
    event.remove({id: /createaddition:rolling\/\w+_plate/})
    event.remove({id: /vintageimprovements:rolling\/\w+_plate/})
    event.custom({
      type: 'createaddition:rolling',
      ingredients: [
        { item: 'tfc:metal/rod/copper' }
      ],
      results: [
        { item: 'createaddition:copper_wire', count: 2 },
      ],
    })
    event.custom({
      type: 'createaddition:rolling',
      ingredients: [
        { item: 'tfc:metal/rod/wrought_iron' }
      ],
      results: [
        { item: 'createaddition:iron_wire', count: 2 },
      ],
    })
    event.custom({
      type: 'createaddition:rolling',
      ingredients: [
        { item: 'tfc_metallurgy:metal/rod/electrum' }
      ],
      results: [
        { item: 'createaddition:electrum_wire', count: 2
         }
      ],
    })

    // Generate rolling wires recipes for all metals
    tfcMetallurgyMetals.forEach(metal => {
        event.custom({
            type: 'createaddition:rolling',
            ingredients: [
                { item: `tfc_metallurgy:metal/rod/${metal}` }
            ],
            results: [
                { item: `vintageimprovements:${metal}_wire`, count: 2 }
            ],
        });
    });
    tfcMetals.forEach(metal => {
        event.custom({
            type: 'createaddition:rolling',
            ingredients: [
                { item: `tfc:metal/rod/${metal}` }
            ],
            results: [
                { item: `vintageimprovements:${metal}_wire`, count: 2 }
            ],
        });
    });

    event.remove('create:crafting/kinetics/belt_connector')
    event.custom({
        type: 'createaddition:rolling',
        ingredients: [
            { item: `afc:rubber_bar` }
        ],
        results: [
            { item: `create:belt_connector`, count: 1 }
        ],
    });
})