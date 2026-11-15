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
    // Extractive metallurgy intermediates (metalExtractionRecipes.js)
    event.create('powder/bauxite').displayName('Bauxite Powder')
    event.create('powder/aluminum_hydroxide').displayName('Aluminum Hydroxide')
    event.create('powder/alumina').displayName('Alumina')
    event.create('crude_titanium_sponge').displayName('Crude Titanium Sponge')
    event.create('titanium_sponge').displayName('Titanium Sponge')
    event.create('titanium_electrode').maxStackSize(16).displayName('Titanium Sponge Electrode').texture('tfc_metallurgy:item/metal/double_ingot/titanium')
    event.create('powder/wolframite').displayName('Wolframite Powder')
    event.create('powder/ammonium_paratungstate').displayName('Ammonium Paratungstate')
    event.create('powder/tungsten_trioxide').displayName('Tungsten Trioxide')
    event.create('tungsten_green_bar').maxStackSize(16).displayName('Pressed Tungsten Bar')
    event.create('powder/kernite').displayName('Kernite Powder')
    event.create('powder/boric_acid').displayName('Boric Acid')
    event.create('powder/boron_trioxide').displayName('Boron Trioxide')
    event.create('powder/magnesia').displayName('Magnesia')
    event.create('powder/roasted_cobaltite').displayName('Roasted Cobaltite')
    event.create('powder/ammonium_chloroplatinate').displayName('Ammonium Chloroplatinate')
    event.create('platinum_sponge').displayName('Platinum Sponge')
    event.create('powder/native_iridium').displayName('Native Iridium Powder')
    event.create('powder/native_osmium').displayName('Native Osmium Powder')
    event.create('powder/ammonium_hexachloroiridate').displayName('Ammonium Hexachloroiridate')
    event.create('powder/rare_earth_hydroxide').displayName('Rare Earth Hydroxides')
    event.create('powder/thoria').displayName('Thoria')
    event.create('powder/thorium_tetrafluoride').displayName('Thorium Tetrafluoride')
    event.create('powder/spodumene').displayName('Spodumene Powder')
    event.create('powder/beta_spodumene').displayName('Beta Spodumene')
    event.create('powder/lithium_carbonate').displayName('Lithium Carbonate')
    event.create('powder/bertrandite').displayName('Bertrandite Powder')
    event.create('powder/ammonium_fluoroberyllate').displayName('Ammonium Fluoroberyllate')
    event.create('powder/beryllium_fluoride').displayName('Beryllium Fluoride')
    event.create('powder/zircon').displayName('Zircon Powder')
    event.create('crude_zirconium_sponge').displayName('Crude Zirconium Sponge')
    event.create('zirconium_sponge').displayName('Zirconium Sponge')
    event.create('powder/yellowcake').displayName('Yellowcake')
    event.create('powder/uranium_tetrafluoride').displayName('Uranium Tetrafluoride')
    event.create('powder/columbite').displayName('Columbite Powder')
    event.create('powder/tantalite').displayName('Tantalite Powder')
    event.create('powder/potassium_fluorotantalate').displayName('Potassium Fluorotantalate')
    event.create('powder/niobium_hydroxide').displayName('Niobium Hydroxide')
    event.create('powder/niobium_pentoxide').displayName('Niobium Pentoxide')
    event.create('wire/titanium_wire').maxStackSize(16)
    event.create('wire/stainless_steel_wire').maxStackSize(16)
    event.create('silicon_wafer').maxStackSize(16)
    event.create('polysilicon').maxStackSize(16).displayName('Polysilicon')
    event.create('monocrystalline_silicon').maxStackSize(16).displayName('Monocrystalline Silicon Ingot')
    event.create('incomplete_photovoltaic_panel').maxStackSize(1).displayName('Photovoltaic Panel in Progress')
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
  