ServerEvents.recipes(event => {

  event.remove({id: /.*tfmg:.*axe.*/})
  event.remove({id: /.*tfmg:.*sword.*/})
  event.remove({id: /.*tfmg:.*hoe.*/})
  event.remove({id: /.*tfmg:.*shovel.*/})
  // Remove wires, using vintageimprovement or carfts and additions ones
  event.remove('tfmg:stonecutting/aluminum_wire')
  event.remove('tfmg:stonecutting/copper_wire')

  // Change sulfuric acid recipes for vintageimprovements ones:
  event.remove('tfmg:mixing/copper_sulfate')
  event.remove('tfmg:mixing/zinc_sulfate')
  // Remove parts cutting (done with lathe)
  event.remove('tfmg:stonecutting/screw')
  event.remove('tfmg:stonecutting/rebar')

  event.custom({
    type: 'create:item_application',
    ingredients: [
      { tag: 'forge:stripped_logs' },
      { item: 'tfc:metal/sheet/steel' },
    ],
    results: [
      { item: 'tfmg:steel_casing' },
    ],
  })
  event.custom({
    type: 'create:item_application',
    ingredients: [
      { tag: 'forge:stripped_logs' },
      { item: 'tfc:metal/sheet/black_steel' },
    ],
    results: [
      { item: 'tfmg:heavy_machinery_casing' },
    ],
  })
  // Replace tfmg steel ingot for tfc steel ingot
  event.replaceInput(
    { input: 'tfmg:steel_ingot' }, // Arg 1: the filter
    'tfmg:steel_ingot',            // Arg 2: the item to replace
    'tfc:metal/ingot/steel'         // Arg 3: the item to replace it with
  )
  // Replace tfmg sulfur dust for tfc sulfur powder
  event.replaceInput(
    { id: 'tfmg:crafting/zinc_grenade' }, // Arg 1: the filter
    'tfmg:sulfur_dust',            // Arg 2: the item to replace
    'tfc:powder/sulfur'         // Arg 3: the item to replace it with
  )
  event.replaceInput(
    { id: 'tfmg:mixing/sulfuric_acid' }, // Arg 1: the filter
    'tfmg:sulfur_dust',            // Arg 2: the item to replace
    'tfc:powder/sulfur'         // Arg 3: the item to replace it with
  )
  event.replaceOutput(
    { id: 'tfmg:compacting/bitumen' }, // Arg 1: the filter
    'tfmg:sulfur_dust',            // Arg 2: the item to replace
    'tfc:powder/sulfur'         // Arg 3: the item to replace it with
  )
  // Replace TFMG copper sulfate for vintageimprovements' (has more uses)
  event.replaceInput(
    { id: 'tfmg:crafting/galvanic_cell' }, // Arg 1: the filter
    'tfmg:copper_sulfate',            // Arg 2: the item to replace
    'vintageimprovements:copper_sulfate'         // Arg 3: the item to replace it with
  )
  // Replace all wires with C&A or vintage ones
  event.replaceInput(
    { input: 'tfmg:copper_wire' }, // Arg 1: the filter
    'tfmg:copper_wire',            // Arg 2: the item to replace
    'createaddition:copper_wire'         // Arg 3: the item to replace it with
  )
  // Improve cable recipes
  event.replaceInput(
    { output: 'tfmg:copper_cable' }, // Arg 1: the filter
    'minecraft:stick',            // Arg 2: the item to replace
    'createaddition:spool'         // Arg 3: the item to replace it with
  )
  event.replaceInput(
    { id: 'tfmg:crafting/copper_wire' }, // Arg 1: the filter
    'minecraft:leather',            // Arg 2: the item to replace
    'afc:rubber_bar'         // Arg 3: the item to replace it with
  )
  // Make heavy plates out of tungsten steel (heavily used on TFMG recipes)
  // TODO: Consider adding heating requisite to make it harder :P
  event.replaceInput(
    { id: 'tfmg:sequenced_assembly/heavy_plate' }, // Arg 1: the filter
    '#createbigcannons:ingot_steel',            // Arg 2: the item to replace
    'tfc_metallurgy:metal/ingot/tungsten_steel'         // Arg 3: the item to replace it with
  )
  // Allow for coking of TFC coal
  event.replaceInput(
    { id: 'tfmg:coking/coal_coke' }, // Arg 1: the filter
    'minecraft:coal',            // Arg 2: the item to replace
    'tfc:ore/bituminous_coal'         // Arg 3: the item to replace it with
  )
  // Use TFC firebricks instead of TFMG ones
  event.replaceInput(
    { input: 'tfmg:fireproof_brick' }, // Arg 1: the filter
    'tfmg:fireproof_brick',            // Arg 2: the item to replace
    'tfc:fire_bricks'         // Arg 3: the item to replace it with
  )
  // Add recipe for rolling aluminum wires
  // TODO: Doesn't work!!
  event.custom({
    type: 'createaddition:rolling',
    ingredients: [
      { item: 'tfc:metal/sheet/aluminum' },
    ],
    results: [
      { item: 'tfmg:aluminum_wire' },
    ],
  })
    /*event.custom({
        type: 'tfmg:casting',
        ingredients: [
          { Fluid.of('tfc_metallurgy:metal/solder', 10)},
          { item: 'minecraft:lightning_rod' },
        ],
        results: [
          { item: 'create_new_age:energiser_t1' },
        ],
      })*/

    //event.recipes.tfmg.casting(Fluid.of("tfc_metallurgy:metal/solder", 1), ["tfc_metallurgy:metal/ingot/solder"], 100)

    //event.recipes.createMechanicalExtruderExtruding(Item.of('minecraft:obsidian'),[Fluid.of('minecraft:water'),Fluid.of('minecraft:lava')]).withCatalyst('minecraft:obsidian')
    //event.recipes.createMechanicalExtruderExtruding(Item.of('minecraft:dirt'),[Fluid.of('minecraft:lava'),Item.of('minecraft:stone')]).withCatalyst('minecraft:clay').requiredBonks(10)

}
)