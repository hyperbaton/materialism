// Electronic components: resistors, capacitors, transistors and light bulbs
ServerEvents.recipes(event => {
  // Electrical components
  // Resistor item
  event.remove({output: 'tfmg:unfinished_resistor'})
  event.recipes.create.sequenced_assembly([
    CreateItem.of('tfmg:unfinished_resistor', 0.9),
    CreateItem.of('createaddition:copper_wire', 0.05),
    CreateItem.of('createaddition:gold_wire', 0.05)
  ], 'createaddition:copper_wire', [ // input
    // the transitional item set by `transitionalItem('create:incomplete_large_cogwheel')` is the item used during the intermediate stages of the assembly
    event.recipes.createDeploying('createaddition:copper_wire', ['createaddition:copper_wire', 'tfc:glue']),
    event.recipes.createDeploying('createaddition:copper_wire', ['createaddition:copper_wire', 'createaddition:gold_wire']),
    event.recipes.createDeploying('createaddition:copper_wire', ['createaddition:copper_wire', 'createaddition:gold_wire']),
    event.recipes.createFilling(
      'createaddition:copper_wire',
      ['createaddition:copper_wire', Fluid.of('chemica:epoxy_resin', 100)]
    ),
    event.recipes.createPressing('createaddition:copper_wire', 'createaddition:copper_wire'),
    event.custom({
      type: 'create_new_age:energising',
      energy_needed: 500,
      ingredients: [
        { item: 'createaddition:copper_wire'},
      ],
      results: [
        { id: 'createaddition:copper_wire'},
      ]
    })
  ]).transitionalItem('createaddition:copper_wire').loops(1)
  // Capacitor item
  event.remove({id: 'tfmg:sequenced_assembly/capacitor'})
  event.recipes.create.sequenced_assembly([
    CreateItem.of(Item.of('tfmg:capacitor_item', 2), 0.9),
    CreateItem.of('tfc_metallurgy:metal/sheet/aluminum', 0.05),
    CreateItem.of('minecraft:paper', 0.05)
  ], 'tfc_metallurgy:metal/sheet/aluminum', [ // input
    // the transitional item set by `transitionalItem('create:incomplete_large_cogwheel')` is the item used during the intermediate stages of the assembly
    event.recipes.createDeploying('tfc_metallurgy:metal/sheet/aluminum', ['tfc_metallurgy:metal/sheet/aluminum', 'minecraft:paper']),
    event.recipes.createDeploying('tfc_metallurgy:metal/sheet/aluminum', ['tfc_metallurgy:metal/sheet/aluminum', 'tfc_metallurgy:metal/sheet/aluminum']),
    event.recipes.createDeploying('tfc_metallurgy:metal/sheet/aluminum', ['tfc_metallurgy:metal/sheet/aluminum', 'createaddition:copper_wire']),
    event.recipes.createFilling(
      'tfc_metallurgy:metal/sheet/aluminum',
      ['tfc_metallurgy:metal/sheet/aluminum', Fluid.of('chemica:polyethylene', 100)]
    ),
    event.recipes.createPressing('tfc_metallurgy:metal/sheet/aluminum', 'tfc_metallurgy:metal/sheet/aluminum'),
    event.custom({
      type: 'create_new_age:energising',
      energy_needed: 500,
      ingredients: [
        { item: 'tfc_metallurgy:metal/sheet/aluminum'},
      ],
      results: [
        { id: 'tfc_metallurgy:metal/sheet/aluminum'},
      ]
    })
  ]).transitionalItem('tfc_metallurgy:metal/sheet/aluminum').loops(1)
  // Transistor on a polyethylene base
  event.remove({id: 'tfmg:sequenced_assembly/transistor'})
  event.recipes.create.sequenced_assembly([
    CreateItem.of(Item.of('tfmg:transistor', 4), 0.85),
    CreateItem.of('tfmg:silicon_ingot', 0.05),
    CreateItem.of('tfmg:p_semiconductor', 0.05),
    CreateItem.of('tfmg:n_semiconductor', 0.05)
  ], 'chemica:polyethylene_sheet', [
    event.recipes.createDeploying('tfmg:unfinished_transistor', ['tfmg:unfinished_transistor', Ingredient.of('#c:wires/copper')]),
    event.recipes.createDeploying('tfmg:unfinished_transistor', ['tfmg:unfinished_transistor', 'tfmg:n_semiconductor']),
    event.recipes.createDeploying('tfmg:unfinished_transistor', ['tfmg:unfinished_transistor', 'tfmg:p_semiconductor']),
    event.recipes.createDeploying('tfmg:unfinished_transistor', ['tfmg:unfinished_transistor', 'tfmg:n_semiconductor'])
  ]).transitionalItem('tfmg:unfinished_transistor').loops(1)

  // Lightbulb
  event.remove({id: 'tfmg:crafting/materials/light_bulb'})
  event.recipes.create.sequenced_assembly([
    Item.of('tfmg:light_bulb', 4)
  ], 'tfc_metallurgy:metal/sheet/nickel_silver', [ // input
    event.recipes.createDeploying('tfc_metallurgy:metal/sheet/nickel_silver', ['tfc_metallurgy:metal/sheet/nickel_silver', 'kubejs:wire/tungsten_wire']),
    event.recipes.createFilling(
      'tfc_metallurgy:metal/sheet/nickel_silver',
      ['tfc_metallurgy:metal/sheet/nickel_silver', Fluid.of('tfc_metallurgy:metal/solder', 20)]
    ),
    event.recipes.createDeploying('tfc_metallurgy:metal/sheet/nickel_silver', ['tfc_metallurgy:metal/sheet/nickel_silver', 'tfc:lamp_glass']),
    event.recipes.vintageimprovements.vacuumizing('tfc_metallurgy:metal/sheet/nickel_silver', ['tfc_metallurgy:metal/sheet/nickel_silver']),
    event.custom({
      type: 'create_new_age:energising',
      energy_needed: 500,
      ingredients: [
        { item: 'tfc_metallurgy:metal/sheet/nickel_silver'},
      ],
      results: [
        { id: 'tfc_metallurgy:metal/sheet/nickel_silver'},
      ]
    })
  ]).transitionalItem('tfc_metallurgy:metal/sheet/nickel_silver').loops(1)
})
