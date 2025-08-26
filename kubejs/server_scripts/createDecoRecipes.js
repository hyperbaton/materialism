ServerEvents.recipes(event => {

  // Support wedges are made with the curving press
  event.remove({id: 'createdeco:zinc_support_wedge'})
  event.remove({id: 'createdeco:andesite_support_wedge'})
  event.remove({id: 'createdeco:brass_support_wedge'})
  event.remove({id: 'createdeco:iron_support_wedge'})
  event.remove({id: 'createdeco:copper_support_wedge'})
  event.remove({id: 'createdeco:industrial_iron_support_wedge'})
  event.remove({id: 'createdeco:zinc_support_wedge_from_stonecutting'})
  event.remove({id: 'createdeco:andesite_support_wedge_from_stonecutting'})
  event.remove({id: 'createdeco:brass_support_wedge_from_stonecutting'})
  event.remove({id: 'createdeco:iron_support_wedge_from_stonecutting'})
  event.remove({id: 'createdeco:copper_support_wedge_from_stonecutting'})
  event.remove({id: 'createdeco:industrial_iron_support_wedge_from_stonecutting'})
  event.remove({id: "createdeco:pressing/zinc_sheet"})
  event.remove({id: "createdeco:pressing/andesite_sheet"})
  event.remove({id: "createdeco:pressing/coins/netherite_coin"})
  event.replaceInput(
      { id: 'createdeco:umber_bricks' }, // Arg 1: the filter
      'minecraft:brick',            // Arg 2: the item to replace
      '#tfc:rock/chiseled_bricks'         // Arg 3: the item to replace it with
    )
  
  // A recipe for producing industrial iron
  event.remove({id: 'createdeco:compacting/industrial_iron_ingot'})
  event.remove({id: 'create:industrial_iron_block_from_ingots_iron_stonecutting'})
  event.remove({id: 'create:industrial_iron_block_from_iron_ingots_stonecutting'})
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": {
      "type": "tfc:heatable",
      "min_temp": 950,
      "ingredient": {
        "item": "tfc:metal/ingot/high_carbon_steel"
      }
    },
    "transitionalItem": {
      "item": "tfc:metal/ingot/unknown"
    },
    "sequence": [
    {
      "type": "create:filling",
      "results": [
        {
          "item": "tfc:metal/ingot/unknown",
          "count": 1
        }
      ],
      "ingredients": [
        {
          "item": "tfc:metal/ingot/unknown"
        },
        {
          "fluid": "tfc_metallurgy:metal/manganese",
          "nbt": {},
          "amount": 25
        }
      ]
    },
    {
      "type": "create:filling",
      "results": [
        {
          "item": "tfc:metal/ingot/unknown",
          "count": 1
        }
      ],
      "ingredients": [
        {
          "item": "tfc:metal/ingot/unknown"
        },
        {
          "fluid": "tfc:metal/zinc",
          "nbt": {},
          "amount": 25
        }
      ]
    },
      {
        "type": "create:pressing",
        "ingredients": [
          {
            "item": "tfc:metal/ingot/unknown"
          }
        ],
        "results": [
          {
            "item": "tfc:metal/ingot/unknown"
          }
        ]
      },
      {
        "type": "create:pressing",
        "ingredients": [
          {
            "item": "tfc:metal/ingot/unknown"
          }
        ],
        "results": [
          {
            "item": "tfc:metal/ingot/unknown"
          }
        ]
      }
    ],
    "results": [
      {
        "item": "createdeco:industrial_iron_ingot"
      }
    ],
    "loops": 2
  })
  // Take industrial iron nuggets with chisel
  event.remove({id: 'createdeco:industrial_iron_nugget_from_industrial_iron_ingot'})
  event.shapeless('9x createdeco:industrial_iron_nugget',[
    'createdeco:industrial_iron_ingot',
    '#tfc:chisels'
  ]).damageIngredient(Ingredient.of('#tfc:chisels'))
  
    // Windows
    const woodPairs = [
        ['copper', 'tfc:metal/rod/copper'],
        ['andesite', 'tfc_metallurgy:metal/rod/aluminum'],
        ['brass', 'tfc:metal/rod/brass'],
        ['zinc', 'tfc:metal/rod/zinc'],
        ['iron', 'firmalife:metal/rod/stainless_steel'],
        ['industrial_iron', 'createdeco:industrial_iron_sheet']
    ];
    addWindowRecipes(event, woodPairs);
    function addWindowRecipes(event, woodPairs) {
        woodPairs.forEach(([windowName, lumberName]) => {
            event.remove({id: `createdeco:${windowName}_window`});
            event.recipes.create.sequenced_assembly(
                Item.of(`createdeco:${windowName}_window`, 2),
                '#forge:glass/colorless',
                [
                    event.recipes.create.cutting('minecraft:glass', 'minecraft:glass'),
                    event.recipes.createDeploying(
                        'minecraft:glass',
                        ['minecraft:glass', `${lumberName}`]
                    ),
                    event.recipes.createDeploying(
                        'minecraft:glass',
                        ['minecraft:glass', `${lumberName}`]
                    ),
                    event.recipes.createDeploying(
                        'minecraft:glass',
                        ['minecraft:glass', `${lumberName}`]
                    ),
                    event.recipes.createDeploying(
                        'minecraft:glass',
                        ['minecraft:glass', `${lumberName}`]
                    ),
                    event.recipes.createPressing('minecraft:glass', 'minecraft:glass')
                ]
            ).transitionalItem('minecraft:glass')
            .loops(2);
        });
    }

    // Replace metal inputs
    event.replaceInput(
      { input: 'createdeco:andesite_sheet' }, // Arg 1: the filter
      'createdeco:andesite_sheet',            // Arg 2: the item to replace
      'tfc_metallurgy:metal/sheet/aluminum'   // Arg 3: the item to replace it with
    )
    event.replaceInput(
      { input: 'createdeco:zinc_sheet' }, // Arg 1: the filter
      'createdeco:zinc_sheet',            // Arg 2: the item to replace
      'tfc:metal/sheet/zinc'   // Arg 3: the item to replace it with
    )
    event.replaceInput(
      { id: 'createdeco:iron_hull' }, // Arg 1: the filter
      'minecraft:iron_block',            // Arg 2: the item to replace
      'tfc:metal/block/wrought_iron'   // Arg 3: the item to replace it with
    )
    event.replaceInput(
      { id: 'createdeco:copper_hull' }, // Arg 1: the filter
      'minecraft:copper_block',            // Arg 2: the item to replace
      'tfc:metal/block/copper'   // Arg 3: the item to replace it with
    )
    event.replaceInput(
      { id: 'createdeco:brass_hull' }, // Arg 1: the filter
      'create:brass_block',            // Arg 2: the item to replace
      'tfc:metal/block/brass'   // Arg 3: the item to replace it with
    )
    event.replaceInput(
      { id: 'createdeco:zinc_hull' }, // Arg 1: the filter
      'create:zinc_block',            // Arg 2: the item to replace
      'tfc:metal/block/zinc'   // Arg 3: the item to replace it with
    )
    event.replaceInput(
      { id: 'createdeco:brass_support' }, // Arg 1: the filter
      'create:brass_ingot',            // Arg 2: the item to replace
      'tfc:metal/rod/brass'   // Arg 3: the item to replace it with
    )
    event.replaceInput(
      { id: 'createdeco:iron_support' }, // Arg 1: the filter
      'minecraft:iron_ingot',            // Arg 2: the item to replace
      'tfc:metal/rod/wrought_iron'   // Arg 3: the item to replace it with
    )
    event.replaceInput(
      { id: 'createdeco:copper_support' }, // Arg 1: the filter
      'minecraft:copper_ingot',            // Arg 2: the item to replace
      'tfc:metal/rod/copper'   // Arg 3: the item to replace it with
    )
    event.replaceInput(
      { id: 'createdeco:brass_door' }, // Arg 1: the filter
      'create:brass_ingot',            // Arg 2: the item to replace
      'tfc:metal/sheet/brass'   // Arg 3: the item to replace it with
    )
    event.replaceInput(
      { id: 'createdeco:copper_door' }, // Arg 1: the filter
      'minecraft:copper_ingot',            // Arg 2: the item to replace
      'tfc:metal/sheet/copper'   // Arg 3: the item to replace it with
    )
    event.replaceInput(
      { id: 'createdeco:zinc_door' }, // Arg 1: the filter
      'create:zinc_ingot',            // Arg 2: the item to replace
      'tfc:metal/sheet/zinc'   // Arg 3: the item to replace it with
    )
    event.replaceInput(
      { id: 'createdeco:brass_bars' }, // Arg 1: the filter
      'create:brass_ingot',            // Arg 2: the item to replace
      'tfc:metal/ingot/brass'   // Arg 3: the item to replace it with
    )
    replaceAndesiteAlloyWith('createdeco:andesite_door', 'tfc_metallurgy:metal/sheet/aluminum')
    replaceAndesiteAlloyWith('createdeco:andesite_trapdoor', 'tfc_metallurgy:metal/sheet/aluminum')
    replaceAndesiteAlloyWith('createdeco:red_andesite_lamp', 'tfcmg:aluminum_bars')
    replaceAndesiteAlloyWith('createdeco:andesite_bars', 'tfc_metallurgy:metal/ingot/aluminum')
    replaceAndesiteAlloyWith('createdeco:andesite_support', 'tfc_metallurgy:metal/rod/aluminum')
    replaceAndesiteAlloyWith('createdeco:red_andesite_lamp', 'tfcmg:aluminum_bars')
    replaceAndesiteAlloyWith('createdeco:green_andesite_lamp', 'tfcmg:aluminum_bars')
    replaceAndesiteAlloyWith('createdeco:blue_andesite_lamp', 'tfcmg:aluminum_bars')
    replaceAndesiteAlloyWith('createdeco:yellow_andesite_lamp', 'tfcmg:aluminum_bars')

    function replaceAndesiteAlloyWith(recipeId, replacer){
        event.replaceInput(
            { id: recipeId }, // Arg 1: the filter
            'create:andesite_alloy',            // Arg 2: the item to replace
            replacer         // Arg 3: the item to replace it with
          )
    }
})