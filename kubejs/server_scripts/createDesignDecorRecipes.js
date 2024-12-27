ServerEvents.recipes(event => {
    // Replace andesite alloy from compact tanks recipes
    event.replaceInput(
      { id: 'design_decor:crafting/gas_tank' }, // Arg 1: the filter
      'create:andesite_alloy',            // Arg 2: the item to replace
      'tfmg:steel_fluid_valve'         // Arg 3: the item to replace it with
    )
    event.replaceInput(
      { id: 'design_decor:crafting/copper_gas_tank' }, // Arg 1: the filter
      'create:andesite_alloy',            // Arg 2: the item to replace
      'create:fluid_valve'         // Arg 3: the item to replace it with
    )
  })