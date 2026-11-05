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
    // Minerals dropped by the fluorite and phosphorite ores (see addBlocks.js)
    event.create('ore/fluorite').displayName('Fluorite')
    event.create('ore/phosphorite').displayName('Phosphorite')
    event.create('lithium_battery_core').maxStackSize(16)
    event.create('zinc_sulfate').maxStackSize(16).displayName('Zinc Sulfate')
    // TFC Metallurgy only adds dusts for its own metals; these fill the gap for the base TFC metals
    const baseMetalDusts = [
      'bismuth', 'bismuth_bronze', 'black_bronze', 'black_steel', 'blue_steel', 'brass', 'bronze',
      'cast_iron', 'copper', 'gold', 'iron', 'nickel', 'red_steel', 'rose_gold', 'silver',
      'sterling_silver', 'steel', 'tin', 'zinc'
    ]
    baseMetalDusts.forEach(metal => {
      const name = metal.split('_').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
      event.create(`metal/dust/${metal}`).displayName(`${name} Dust`)
    })
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
    // Drill bit, used to build the mechanical drill
    event.create('drill_bit').maxStackSize(16).displayName('Drill Bit')
  })
  