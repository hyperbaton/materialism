// Create: Solarpunk integration

ServerEvents.recipes(event => {
  // Removals
  event.remove({ type: 'solarpunk:particle_accelerator' })
  event.remove({ id: 'solarpunk:mixing/gunpowder' })
  event.remove({ id: 'solarpunk:mixing/salt_brine_to_lithium' })
  event.remove({ id: 'solarpunk:crushing/raw_lithium_to_dust' })
  event.remove({ output: /^solarpunk:(lithium|beryllium)_(ingot|nugget|block)$/ })
  event.remove({ output: /^solarpunk:.*_(wire|spool)$/ })
  event.remove({ output: 'solarpunk:wire_connector' })
  event.remove({ output: /^solarpunk:.*greenhouse.*/ })
  event.remove({ output: /^solarpunk:.*rammed_earth.*/ })
  event.remove({ output: 'solarpunk:andesite_solar_panel' })
  event.remove({ output: 'solarpunk:firebox_boiler' })
  event.remove({ output: 'solarpunk:geyser_cap' })
  event.remove({ output: 'solarpunk:kinetic_sprinkler' })
  // Sprinkler: copper casing with a nozzle pipe at each corner, spring-loaded and riveted, fed from a copper tank below
  event.recipes.create.mechanical_crafting('solarpunk:kinetic_sprinkler', [
    'PRP',
    'SCS',
    'PRP',
    ' T '
  ], {
    P: 'create:fluid_pipe',
    R: 'tfc_items:copper_rivet',
    S: 'vintageimprovements:brass_spring',
    C: 'create:copper_casing',
    T: 'create:fluid_tank'
  }).id('kubejs:solarpunk/mechanical_crafting/kinetic_sprinkler')
  event.remove({ output: /^solarpunk:moss_(slab|stairs)$/ })
  event.remove({ output: /^solarpunk:(ash_block|(chiseled_)?(ash|salt)_brick.*|polished_(ash|salt).*|salt_(slab|stairs))$/ })
  event.remove({ id: 'solarpunk:ash_from_ash_block' })
  event.remove({ output: /^solarpunk:(grow_lamp|solar_plant_bed|salt_lamp|charred_timber.*|ruined_dirt)$/ })
  event.remove({ input: /^solarpunk:(ruined_dirt|charred_timber.*)$/ })

  // Solar mirror
  event.remove({ id: 'solarpunk:sequenced_assembly/solar_mirror' })
  event.recipes.create.sequenced_assembly(
    [Item.of('solarpunk:solar_mirror')],
    'tfc:metal/sheet/steel',
    [
      event.recipes.createDeploying('solarpunk:incomplete_solar_mirror', ['solarpunk:incomplete_solar_mirror', 'create_optical:mirror']),
      event.recipes.createDeploying('solarpunk:incomplete_solar_mirror', ['solarpunk:incomplete_solar_mirror', 'create:cogwheel']),
      event.recipes.createPressing('solarpunk:incomplete_solar_mirror', 'solarpunk:incomplete_solar_mirror')
    ]
  ).transitionalItem('solarpunk:incomplete_solar_mirror').loops(1).id('kubejs:solarpunk/sequenced_assembly/solar_mirror')

  // Electromagnet coil: TFMG's electromagnetic coil covers it
  event.remove({ output: 'solarpunk:electromagnet_coil' })

  // Solar power tower
  event.remove({ id: 'solarpunk:mechanical_crafting/solar_power_tower' })
  event.recipes.create.mechanical_crafting('2x solarpunk:solar_power_tower', [
    'QIQ',
    'IPI',
    'QIQ'
  ], {
    Q: 'tfc:fire_bricks',
    I: 'firmalife:metal/sheet/stainless_steel',
    P: 'create:precision_mechanism'
  }).id('kubejs:solarpunk/mechanical_crafting/solar_power_tower')

  // Photovoltaic solar panel (module lamination)
  const panel = 'kubejs:incomplete_photovoltaic_panel'
  event.remove({ id: 'solarpunk:mechanical_crafting/brass_solar_panel' })
  event.recipes.create.sequenced_assembly(
    [Item.of('solarpunk:brass_solar_panel')],
    'create:brass_casing',
    [
      event.recipes.createDeploying(panel, [panel, 'chemica:polytetrafluoroethylene_sheet']),
      event.recipes.createFilling(panel, [panel, Fluid.of('chemica:polyethylene', 100)]),
      event.recipes.createDeploying(panel, [panel, 'solarpunk:photovoltaic_cell']),
      event.recipes.createDeploying(panel, [panel, 'solarpunk:photovoltaic_cell']),
      event.recipes.createDeploying(panel, [panel, 'solarpunk:photovoltaic_cell']),
      event.recipes.createDeploying(panel, [panel, 'solarpunk:photovoltaic_cell']),
      event.recipes.createFilling(panel, [panel, Fluid.of('tfc_metallurgy:metal/solder', 10)]),
      event.recipes.createFilling(panel, [panel, Fluid.of('chemica:polyethylene', 100)]),
      event.recipes.createDeploying(panel, [panel, Ingredient.of('#c:glass_panes/colorless')]),
      event.custom({
        type: 'vintageimprovements:vacuumizing',
        ingredients: [{ item: panel }],
        results: [{ id: panel }],
        heat_requirement: 'heated'
      }),
      event.recipes.createDeploying(panel, [panel, 'tfmg:transistor'])
    ]
  ).transitionalItem(panel).loops(1).id('kubejs:solarpunk/sequenced_assembly/photovoltaic_panel')

  // Solar shingles
  event.remove({ id: 'solarpunk:solar_shingles' })
  event.shaped('6x solarpunk:solar_shingles', [
    'P  ',
    'AP ',
    'AAP'
  ], {
    P: 'solarpunk:solar_glass_pane',
    A: 'tfc_metallurgy:metal/sheet/aluminum'
  }).id('kubejs:solarpunk/solar_shingles')

  // Solar heater
  event.remove({ id: 'solarpunk:solar_heater' })
  event.shaped('solarpunk:solar_heater', [
    'GGG',
    'C C',
    'AAA'
  ], {
    G: '#c:glass_panes/colorless',
    C: 'tfc:metal/sheet/copper',
    A: 'tfc_metallurgy:metal/sheet/aluminum'
  }).id('kubejs:solarpunk/solar_heater')

  // Heat battery
  event.remove({ id: 'solarpunk:heat_battery' })
  event.shaped('solarpunk:heat_battery', [
    'DDD',
    'BSB',
    'DDD'
  ], {
    D: 'tfc:fire_bricks',
    B: 'firmalife:metal/sheet/stainless_steel',
    S: 'solarpunk:salt_block'
  }).id('kubejs:solarpunk/heat_battery')

  // Crystallizer
  event.remove({ id: 'solarpunk:crystallizer' })
  event.shaped('solarpunk:crystallizer', [
    'BGB',
    'CIC',
    'BGB'
  ], {
    B: 'tfc:metal/sheet/brass',
    G: '#c:glass_panes/colorless',
    C: 'create:brass_casing',
    I: 'create:fluid_tank'
  }).id('kubejs:solarpunk/crystallizer')

  // Fermentation vat
  event.remove({ id: 'solarpunk:fermentation_vat' })
  event.shaped('2x solarpunk:fermentation_vat', [
    'RSR',
    'S S',
    'RSR'
  ], {
    S: 'firmalife:metal/sheet/stainless_steel',
    R: 'tfc_items:stainless_steel_rivet'
  }).id('kubejs:solarpunk/fermentation_vat')

  // Kinetic battery
  event.remove({ id: 'solarpunk:kinetic_battery' })
  event.shaped('solarpunk:kinetic_battery', [
    'AAA',
    'AFA',
    'AAA'
  ], {
    A: 'tfc_metallurgy:metal/sheet/aluminum',
    F: 'tfmg:steel_flywheel'
  }).id('kubejs:solarpunk/kinetic_battery')

  // Turbine casing: Cr-Mo-V steel shell, slag wool lagging, bolted flange
  const casing = 'create:industrial_iron_block'
  event.remove({ id: 'solarpunk:item_application/turbine_casing' })
  event.recipes.create.sequenced_assembly(
    [Item.of('solarpunk:turbine_casing', 2)],
    casing,
    [
      event.recipes.createDeploying(casing, [casing, 'tfc_metallurgy:metal/sheet/high_alloy_steel']),
      event.recipes.createFilling(casing, [casing, Fluid.of('tfmg:molten_slag', 100)]),
      event.recipes.vintageimprovements.vibrating(casing, casing),
      event.recipes.createDeploying(casing, [casing, 'tfc_items:steel_rivet']),
      event.recipes.createPressing(casing, casing)
    ]
  ).transitionalItem(casing).loops(1).id('kubejs:solarpunk/sequenced_assembly/turbine_casing')

  // Turbine casing glass: reinforced sight glass
  event.remove({ id: 'solarpunk:item_application/turbine_casing_glass' })
  event.custom({
    type: 'create:item_application',
    ingredients: [{ item: 'solarpunk:turbine_casing' }, { item: 'firmalife:reinforced_glass' }],
    results: [{ id: 'solarpunk:turbine_casing_glass' }]
  }).id('kubejs:solarpunk/item_application/turbine_casing_glass')

  // Turbine blades: 12% Cr-Mo stainless and Ti-6Al-4V with a stellite erosion shield
  const bladeCurving = item => event.custom({
    type: 'vintageimprovements:curving',
    ingredients: [{ item: item }],
    results: [{ id: item }],
    mode: 2
  })
  const stainless = 'firmalife:metal/double_sheet/stainless_steel'
  event.remove({ id: 'solarpunk:mechanical_crafting/andesite_turbine_blade' })
  event.recipes.create.sequenced_assembly(
    [Item.of('solarpunk:andesite_turbine_blade', 2)],
    stainless,
    [
      event.recipes.createFilling(stainless, [stainless, Fluid.of('tfc_metallurgy:metal/molybdenum', 10)]),
      bladeCurving(stainless),
      event.recipes.vintageimprovements.polishing(stainless, stainless)
    ]
  ).transitionalItem(stainless).loops(1).id('kubejs:solarpunk/sequenced_assembly/stainless_turbine_blade')

  const titanium = 'tfc_metallurgy:metal/double_sheet/titanium'
  event.remove({ id: 'solarpunk:mechanical_crafting/brass_turbine_blade' })
  event.recipes.create.sequenced_assembly(
    [Item.of('solarpunk:brass_turbine_blade', 2)],
    titanium,
    [
      event.recipes.createFilling(titanium, [titanium, Fluid.of('tfc_metallurgy:metal/vanadium', 10)]),
      bladeCurving(titanium),
      event.recipes.createDeploying(titanium, [titanium, 'tfc_metallurgy:metal/sheet/cobalt']),
      event.recipes.vintageimprovements.polishing(titanium, titanium)
    ]
  ).transitionalItem(titanium).loops(1).id('kubejs:solarpunk/sequenced_assembly/titanium_turbine_blade')

  // Fusion reactor casing
  const vessel = 'tfmg:heavy_machinery_casing'
  event.remove({ id: 'solarpunk:item_application/fusion_reactor_casing' })
  event.recipes.create.sequenced_assembly(
    [Item.of('solarpunk:fusion_reactor_casing', 2)],
    vessel,
    [
      // Double-walled vacuum vessel
      event.recipes.createDeploying(vessel, [vessel, 'firmalife:metal/double_sheet/stainless_steel']),
      // Borated neutron shielding
      event.recipes.createFilling(vessel, [vessel, Fluid.of('tfc_metallurgy:metal/boron', 25)]),
      // Plasma-facing tungsten armour
      event.recipes.createDeploying(vessel, [vessel, 'tfc_metallurgy:metal/sheet/tungsten']),
      // Superconducting magnet winding
      event.recipes.createDeploying(vessel, [vessel, 'tfc_metallurgy:metal/rod/niobium']),
      // Liquid helium magnet cooling
      event.recipes.createFilling(vessel, [vessel, Fluid.of('chemica:helium', 5)]),
      // Vessel pump-down
      event.recipes.vintageimprovements.vacuumizing(vessel, [vessel])
    ]
  ).transitionalItem(vessel).loops(1).id('kubejs:solarpunk/sequenced_assembly/fusion_reactor_casing')

  // Superconducting coil (Nb3Sn cable-in-conduit)
  const coil = 'solarpunk:incomplete_superconducting_coil'
  event.remove({ id: 'solarpunk:sequenced_assembly/superconducting_coil' })
  event.recipes.create.sequenced_assembly(
    [Item.of('solarpunk:superconducting_coil')],
    'tfc_metallurgy:metal/rod/niobium',
    [
      // Tin for the Nb3Sn compound
      event.recipes.createFilling(coil, [coil, Fluid.of('tfc:metal/tin', 25)]),
      // Copper stabiliser matrix
      event.recipes.createDeploying(coil, [coil, 'createaddition:copper_wire']),
      // Stainless steel conduit jacket
      event.recipes.createDeploying(coil, [coil, 'firmalife:metal/sheet/stainless_steel']),
      // Reaction heat treatment
      event.custom({ type: 'vintageimprovements:pressurizing', ingredients: [{ item: coil }], results: [{ id: coil }], heat_requirement: 'heated' }),
      // Epoxy vacuum impregnation
      event.recipes.createFilling(coil, [coil, Fluid.of('chemica:epoxy_resin', 50)])
    ]
  ).transitionalItem(coil).loops(2).id('kubejs:solarpunk/sequenced_assembly/superconducting_coil')

  // Particle accelerator pipe (beam line with dipole magnets)
  event.remove({ id: 'solarpunk:mechanical_crafting/particle_accelerator_pipe' })
  event.recipes.create.mechanical_crafting('8x solarpunk:particle_accelerator_pipe', [
    'GRRRG',
    'RMCMR',
    'RSPSR',
    'RMCMR',
    'GRRRG'
  ], {
    // Support girders
    G: 'create:metal_girder',
    // Reinforced glass shell
    R: 'firmalife:reinforced_glass',
    // Neodymium focusing magnets
    M: 'create_new_age:netherite_magnet',
    // Superconducting dipole magnets
    S: 'solarpunk:superconducting_coil',
    // Beam pipe
    P: 'tfmg:steel_pipe',
    // Stainless steel casing
    C: 'firmalife:metal/sheet/stainless_steel'
  }).id('kubejs:solarpunk/mechanical_crafting/particle_accelerator_pipe')

  // Particle accelerator input (injector and RF station)
  event.remove({ id: 'solarpunk:mechanical_crafting/particle_accelerator_input' })
  event.recipes.create.mechanical_crafting('solarpunk:particle_accelerator_input', [
    'SRS',
    'FAC',
    'EHE'
  ], {
    // Superconducting focusing magnets
    S: 'solarpunk:superconducting_coil',
    // Niobium RF cavity
    R: 'tfc_metallurgy:metal/double_sheet/niobium',
    // Item feed
    F: 'create:brass_funnel',
    // Beam line
    A: 'solarpunk:particle_accelerator_pipe',
    // Housing
    C: 'create:brass_casing',
    // Klystron RF power
    E: 'create:electron_tube',
    // Drive shaft
    H: 'create:shaft'
  }).id('kubejs:solarpunk/mechanical_crafting/particle_accelerator_input')

  // Fusion reactor core
  event.remove({ id: 'solarpunk:mechanical_crafting/fusion_reactor_core' })
  event.recipes.create.mechanical_crafting('solarpunk:fusion_reactor_core', [
    ' FTF ',
    'FSGSF',
    'TGCGT',
    'FSGSF',
    ' FTF '
  ], {
    // Vacuum vessel
    F: 'solarpunk:fusion_reactor_casing',
    // Tungsten divertor
    T: 'tfc_metallurgy:metal/sheet/tungsten',
    // Central solenoid
    S: 'solarpunk:superconducting_coil',
    // Gyrotron plasma heating
    G: 'create:electron_tube',
    // Plasma control system
    C: 'computercraft:computer_advanced'
  }).id('kubejs:solarpunk/mechanical_crafting/fusion_reactor_core')

  // Blanket modules
  const blanket = 'tfc_metallurgy:metal/double_sheet/high_alloy_steel'
  event.remove({ id: 'solarpunk:mechanical_crafting/beryllium_reflector_module' })
  event.recipes.create.sequenced_assembly(
    [Item.of('solarpunk:beryllium_reflector_module', 2)],
    blanket,
    [
      // Beryllium copper heat sink
      event.recipes.createDeploying(blanket, [blanket, 'tfc_metallurgy:metal/sheet/beryllium_copper']),
      // Beryllium neutron multiplier pebbles
      event.recipes.createFilling(blanket, [blanket, Fluid.of('tfc_metallurgy:metal/beryllium', 50)]),
      // Beryllium first wall armour
      event.recipes.createDeploying(blanket, [blanket, 'tfc_metallurgy:metal/sheet/beryllium']),
      // Helium coolant
      event.recipes.createFilling(blanket, [blanket, Fluid.of('chemica:helium', 5)]),
      // Seal the module box
      event.recipes.createPressing(blanket, blanket)
    ]
  ).transitionalItem(blanket).loops(1).id('kubejs:solarpunk/sequenced_assembly/beryllium_reflector_module')

  event.remove({ id: 'solarpunk:mechanical_crafting/lithium_breeder_module' })
  event.recipes.create.sequenced_assembly(
    [Item.of('solarpunk:lithium_breeder_module', 2)],
    blanket,
    [
      // Water cooling tubes
      event.recipes.createDeploying(blanket, [blanket, 'tfmg:steel_pipe']),
      // Lead-lithium breeder: lead
      event.recipes.createFilling(blanket, [blanket, Fluid.of('tfc_metallurgy:metal/lead', 85)]),
      // Lead-lithium breeder: lithium
      event.recipes.createFilling(blanket, [blanket, Fluid.of('tfc_metallurgy:metal/lithium', 15)]),
      // Seal the module box
      event.recipes.createPressing(blanket, blanket)
    ]
  ).transitionalItem(blanket).loops(1).id('kubejs:solarpunk/sequenced_assembly/lithium_breeder_module')

  // Empty fuel capsule
  const capsule = 'firmalife:metal/sheet/stainless_steel'
  event.remove({ id: 'solarpunk:empty_fuel_capsule' })
  event.recipes.create.sequenced_assembly(
    [Item.of('solarpunk:empty_fuel_capsule', 2)],
    capsule,
    [
      // Form the stainless steel container
      event.custom({ type: 'vintageimprovements:curving', ingredients: [{ item: capsule }], results: [{ id: capsule }], mode: 1 }),
      // Zirconium-cobalt getter bed: zirconium
      event.recipes.createDeploying(capsule, [capsule, 'tfc_metallurgy:metal/dust/zirconium']),
      // Zirconium-cobalt getter bed: cobalt
      event.recipes.createDeploying(capsule, [capsule, 'tfc_metallurgy:metal/dust/cobalt']),
      // Evacuate the container
      event.recipes.vintageimprovements.vacuumizing(capsule, [capsule]),
      // Seal the lid
      event.recipes.createPressing(capsule, capsule)
    ]
  ).transitionalItem(capsule).loops(1).id('kubejs:solarpunk/sequenced_assembly/empty_fuel_capsule')

  // Fusion reactor casing glass
  const viewport = 'solarpunk:fusion_reactor_casing'
  event.remove({ id: 'solarpunk:item_application/fusion_reactor_casing_glass' })
  event.recipes.create.sequenced_assembly(
    [Item.of('solarpunk:fusion_reactor_casing_glass')],
    viewport,
    [
      // Radiation-hard sapphire inner window
      event.recipes.createDeploying(viewport, [viewport, 'tfc:gem/sapphire']),
      // Silica glass outer window
      event.recipes.createDeploying(viewport, [viewport, Ingredient.of('#c:glass_blocks/colorless')]),
      // Stainless steel port flange
      event.recipes.createDeploying(viewport, [viewport, 'firmalife:metal/sheet/stainless_steel']),
      // Leak test under vacuum
      event.recipes.vintageimprovements.vacuumizing(viewport, [viewport])
    ]
  ).transitionalItem(viewport).loops(1).id('kubejs:solarpunk/sequenced_assembly/fusion_reactor_casing_glass')

  // Steam condenser: refrigerated steel vat, at least 4 tanks
  event.custom({
    type: 'tfmg:vat',
    allowed_vat_types: ['tfmg:steel'],
    machines: ['tfmg:freezer'],
    min_size: 4,
    ingredients: [fluidIn('chemica:steam', 1000)],
    processing_time: 20,
    results: [{ id: 'minecraft:water', amount: 1000 }]
  }).id('kubejs:solarpunk/vat/steam_condensing')

  // Turbine rotor
  event.remove({ id: 'solarpunk:turbine_rotor' })
  event.shaped('solarpunk:turbine_rotor', [
    ' S ',
    'CRC',
    ' S '
  ], {
    S: 'create:shaft',
    C: 'solarpunk:turbine_casing',
    R: 'tfc:metal/rod/steel'
  }).id('kubejs:solarpunk/turbine_rotor')
})
