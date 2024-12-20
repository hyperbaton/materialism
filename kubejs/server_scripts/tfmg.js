ServerEvents.recipes(event => {

  event.remove({id: /.*tfmg:.*axe.*/})
  event.remove({id: /.*tfmg:.*sword.*/})
  event.remove({id: /.*tfmg:.*hoe.*/})
  event.remove({id: /.*tfmg:.*shovel.*/})

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