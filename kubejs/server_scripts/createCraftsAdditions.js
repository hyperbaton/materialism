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
        //'pig_iron', // Doesn't have rods
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
    // Remove recipes for accumulator (use TFMG batteries)
    event.remove({output: 'createaddition:modular_accumulator'})
    
    // Modify Tesla coil recipe
    event.replaceInput(
      {id: 'createaddition:mechanical_crafting/tesla_coil'},
      'create:andesite_alloy',
      'tfc_metallurgy:metal/rod/aluminum'
    )
    // TODO: tfmg:copper_coil and tfmg:copper_cable no longer exist in TFMG 1.21
    //event.replaceInput(
    //  {id: 'createaddition:mechanical_crafting/tesla_coil'},
    //  'createaddition:copper_spool',
    //  'tfmg:copper_coil'
    //)
    //event.replaceInput(
    //  {id: 'createaddition:crafting/portable_energy_interface'},
    //  'createaddition:copper_spool',
    //  'tfmg:copper_cable'
    //)

    // Remove recipes for connectors
    event.remove({output: 'createaddition:connector'})
    event.remove({output: 'createaddition:small_light_connector'})
    event.remove({output: 'createaddition:large_connector'})
    event.remove({output: 'createaddition:redstone_relay'})

    // Improve recipe for rolling mill
    event.replaceInput(
        {id: 'createaddition:crafting/rolling_mill'},
        'create:andesite_alloy',
        'tfc:metal/rod/steel'
    )

    // Remove C&A capacitors
    event.remove({output: 'createaddition:capacitor'})
    // TODO: tfmg:capacitor item name may have changed in 1.21
    //event.replaceInput(
    //    {input: 'createaddition:capacitor'},
    //    'createaddition:capacitor',
    //    'tfmg:capacitor_'
    //)

    // Remove C&A electrum
    event.remove({id: 'createaddition:mixing/electrum'})
    event.remove({id: 'createaddition:crafting/electrum_ingot'})
    // Change electrum nugget recipe
    event.remove({output: 'createaddition:electrum_nugget'})
    event.shapeless('9x createaddition:electrum_nugget',[
      'tfc_metallurgy:metal/ingot/electrum',
      '#tfc:chisels'
    ]).damageIngredient(Ingredient.of('#tfc:chisels'))

    event.remove({id: /createaddition:pressing\/\w+_ingot/})
    event.remove({id: 'createaddition:rolling/gold_plate'})
    event.custom({
      type: 'createaddition:rolling',
      ingredients: [
        { item: 'tfc:metal/rod/gold' }
      ],
      results: [
        { id: 'createaddition:gold_wire' },
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
        { id: 'createaddition:copper_wire', count: 2 },
      ],
    })
    event.custom({
      type: 'createaddition:rolling',
      ingredients: [
        { item: 'tfc:metal/rod/wrought_iron' }
      ],
      results: [
        { id: 'createaddition:iron_wire', count: 2 },
      ],
    })
    event.custom({
      type: 'createaddition:rolling',
      ingredients: [
        { item: 'tfc_metallurgy:metal/rod/electrum' }
      ],
      results: [
        { id: 'createaddition:electrum_wire', count: 2 }
      ],
    })
    event.custom({
      type: 'createaddition:rolling',
      ingredients: [
        { item: 'tfc_metallurgy:metal/rod/tungsten' }
      ],
      results: [
        { id: 'kubejs:wire/tungsten_wire' },
      ],
    })
    event.custom({
      type: 'createaddition:rolling',
      ingredients: [
        { item: 'tfc_metallurgy:metal/rod/tungsten_steel' }
      ],
      results: [
        { id: 'kubejs:wire/tungsten_steel_wire' },
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
                { id: `vintageimprovements:${metal}_wire`, count: 2 }
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
                { id: `vintageimprovements:${metal}_wire`, count: 2 }
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
            { id: `create:belt_connector`, count: 1 }
        ],
    });
})