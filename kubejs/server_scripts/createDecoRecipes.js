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
})