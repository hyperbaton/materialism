Platform.mods.kubejs.name = 'Materialism'
StartupEvents.registry('item', event => {
    // Items for getting early game rose quartz
    event.create('certus_quartz_powder').maxStackSize(16)
    event.create('redstone_imbued_quartz_powder').maxStackSize(16)
    event.create('wire/tungsten_wire').maxStackSize(16)
    event.create('wire/tungsten_steel_wire').maxStackSize(16)
    event.create('alnico_core').maxStackSize(16)
    event.create('polarized_alnico_core').maxStackSize(16)
    event.create('powder/neodymium').maxStackSize(16)
    event.create('lithium_battery_core').maxStackSize(16)
    event.create('zinc_sulfate').maxStackSize(16).displayName('Zinc Sulfate')
    event.create('powder/zinc').maxStackSize(16)
    event.create('powder/monazite').maxStackSize(16)
    event.create('powder/uraninite').maxStackSize(16)
    event.create('wire/titanium_wire').maxStackSize(16)
    event.create('wire/stainless_steel_wire').maxStackSize(16)
    event.create('silicon_wafer').maxStackSize(16)
    event.create('wood_plating_blank').maxStackSize(1).displayName('Wood Plating in Progress')
    const dyeColors = [
      "white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray",
      "light_gray", "cyan", "purple", "blue", "brown", "green", "red", "black"
    ];
    dyeColors.forEach(color => {
      event.create(`plastic_sheet/${color}`).maxStackSize(16).displayName(`${color.charAt(0).toUpperCase() + color.slice(1)} Plastic Sheet`)
    });
    // Transitional item for the blast furnace reinforcement sequenced assembly
    event.create('incomplete_blast_furnace_reinforcement').maxStackSize(1).displayName('Blast Furnace Reinforcement in Progress')
    // Intermediate item for the steam engine mechanical crafting recipe
    event.create('unlubricated_steam_engine').maxStackSize(16).displayName('Unlubricated Steam Engine')
    // Circular saw blade, used to build the mechanical saw
    event.create('circular_saw').maxStackSize(16).displayName('Circular Saw Blade')
  })
  