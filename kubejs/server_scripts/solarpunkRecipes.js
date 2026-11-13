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
  event.remove({ output: /^solarpunk:moss_(slab|stairs)$/ })
  event.remove({ output: /^solarpunk:(ash_block|(chiseled_)?(ash|salt)_brick.*|polished_(ash|salt).*|salt_(slab|stairs))$/ })
  event.remove({ id: 'solarpunk:ash_from_ash_block' })
  event.remove({ output: /^solarpunk:(grow_lamp|solar_plant_bed|salt_lamp|charred_timber.*|ruined_dirt)$/ })
  event.remove({ input: /^solarpunk:(ruined_dirt|charred_timber.*)$/ })

  // Molten salt is nitrate salt: 1 saltpeter = 100 mB
  event.remove({ output: 'solarpunk:salt_block' })
  event.remove({ id: 'solarpunk:salt_from_salt_block' })
  event.recipes.create.compacting('solarpunk:salt_block', '20x tfc:powder/saltpeter').id('kubejs:solarpunk/compacting/salt_block')
  event.remove({ id: 'solarpunk:solar_heating/salt_to_molten_salt' })
  event.remove({ id: 'solarpunk:solar_heating/salt_item_to_molten_salt' })
  event.custom({
    type: 'solarpunk:solar_heating',
    ingredient: { item: 'tfc:powder/saltpeter' },
    result: { id: 'solarpunk:molten_salt', amount: 100 }
  }).id('kubejs:solarpunk/solar_heating/saltpeter_to_molten_salt')

  event.remove({ id: 'solarpunk:crystallizing/molten_salt_to_salt' })
  event.custom({
    type: 'solarpunk:crystallizing',
    input_a: { id: 'solarpunk:molten_salt', amount: 100 },
    input_b: { id: 'minecraft:water', amount: 50 },
    byproduct: { id: 'solarpunk:steam', amount: 25 },
    processing_time: 100,
    result: { id: 'tfc:powder/saltpeter', count: 1 }
  }).id('kubejs:solarpunk/crystallizing/molten_salt_to_saltpeter')

  // Solar heater: rock to lava, reduced yield
  const LAVA_FROM_RAW_ROCK = 250
  const LAVA_FROM_COBBLE = 100
  event.remove({ id: 'solarpunk:solar_heating/stone_to_lava' })
  event.remove({ id: 'solarpunk:solar_heating/cobblestone_to_lava' })
  event.custom({
    type: 'solarpunk:solar_heating',
    ingredient: { tag: 'c:stones' },
    result: { id: 'minecraft:lava', amount: LAVA_FROM_RAW_ROCK }
  }).id('kubejs:solarpunk/solar_heating/rock_to_lava')
  event.custom({
    type: 'solarpunk:solar_heating',
    ingredient: { tag: 'c:cobblestones' },
    result: { id: 'minecraft:lava', amount: LAVA_FROM_COBBLE }
  }).id('kubejs:solarpunk/solar_heating/cobble_to_lava')

  // Polysilicon (Siemens process)
  event.custom({
    type: 'create:mixing',
    ingredients: [
      { item: 'tfmg:silicon_ingot' },
      { type: 'neoforge:single', fluid: 'chemica:hydrochloric_acid', amount: 300 }
    ],
    results: [
      { id: 'kubejs:trichlorosilane', amount: 250 },
      { id: 'tfmg:hydrogen', amount: 50 }
    ],
    heat_requirement: 'heated'
  }).id('kubejs:solarpunk/mixing/trichlorosilane')
  // Resistively heated rods in a Siemens reactor
  event.custom({
    type: 'tfmg:vat',
    allowed_vat_types: ['tfmg:fireproof'],
    machines: ['tfmg:graphite_electrode', 'tfmg:graphite_electrode'],
    min_size: 1,
    min_current: 6,
    temperature: 1100,
    ingredients: [
      { type: 'neoforge:single', fluid: 'kubejs:trichlorosilane', amount: 250 },
      { type: 'neoforge:single', fluid: 'tfmg:hydrogen', amount: 50 }
    ],
    processing_time: 400,
    energy: 400 * 30000,
    results: [
      { id: 'kubejs:polysilicon' },
      { id: 'chemica:hydrochloric_acid', amount: 200 }
    ]
  }).id('kubejs:solarpunk/vat/polysilicon')
  // Low-yield Siemens reactor in a steel vat, to make the first polysilicon
  event.custom({
    type: 'tfmg:vat',
    allowed_vat_types: ['tfmg:steel'],
    machines: ['tfmg:graphite_electrode', 'tfmg:graphite_electrode'],
    min_size: 1,
    min_current: 6,
    temperature: 1100,
    ingredients: [
      { type: 'neoforge:single', fluid: 'kubejs:trichlorosilane', amount: 1000 },
      { type: 'neoforge:single', fluid: 'tfmg:hydrogen', amount: 200 }
    ],
    processing_time: 1200,
    energy: 1200 * 30000,
    results: [
      { id: 'kubejs:polysilicon' },
      { id: 'chemica:hydrochloric_acid', amount: 200 }
    ]
  }).id('kubejs:solarpunk/vat/polysilicon_steel')

  // Monocrystalline silicon (Czochralski pulling under argon)
  event.custom({
    type: 'tfmg:vat',
    allowed_vat_types: ['tfmg:fireproof'],
    machines: ['tfmg:graphite_electrode', 'tfmg:graphite_electrode'],
    min_size: 1,
    min_current: 6,
    temperature: 1450,
    ingredients: [
      { item: 'kubejs:polysilicon' },
      { item: 'kubejs:polysilicon' },
      { item: 'kubejs:polysilicon' },
      { item: 'kubejs:polysilicon' },
      { type: 'neoforge:single', fluid: 'chemica:argon', amount: 25 }
    ],
    processing_time: 800,
    energy: 800 * 30000,
    results: [{ id: 'kubejs:monocrystalline_silicon' }]
  }).id('kubejs:solarpunk/vat/monocrystalline_silicon')

  // Wafers (wire saw)
  event.recipes.create.cutting('8x kubejs:silicon_wafer', 'kubejs:monocrystalline_silicon').id('kubejs:solarpunk/cutting/silicon_wafer')

  // Photovoltaic cells (multicrystalline, from polysilicon)
  const cell = 'solarpunk:incomplete_photovoltaic_cell'
  const heatedPressurizing = () => event.custom({
    type: 'vintageimprovements:pressurizing',
    ingredients: [{ item: cell }],
    results: [{ id: cell }],
    heat_requirement: 'heated'
  })
  event.remove({ id: 'solarpunk:sequenced_assembly/photovoltaic_cell' })
  event.recipes.create.sequenced_assembly(
    [Item.of('solarpunk:photovoltaic_cell', 4)],
    'kubejs:polysilicon',
    [
      event.recipes.createFilling(cell, [cell, Fluid.of('tfc_metallurgy:metal/boron', 10)]),
      event.recipes.createCutting(cell, cell),
      event.recipes.createFilling(cell, [cell, Fluid.of('chemica:caustic_soda', 100)]),
      event.recipes.createDeploying(cell, [cell, 'chemica:phosphorus_dust']),
      heatedPressurizing(),
      event.recipes.createFilling(cell, [cell, Fluid.of('chemica:hydrofluoric_acid', 100)]),
      event.recipes.createFilling(cell, [cell, Fluid.of('chemica:ammonia', 100)]),
      event.recipes.createFilling(cell, [cell, Fluid.of('tfc:metal/silver', 20)]),
      event.recipes.createFilling(cell, [cell, Fluid.of('tfc_metallurgy:metal/aluminum', 40)]),
      heatedPressurizing()
    ]
  ).transitionalItem(cell).loops(1).id('kubejs:solarpunk/sequenced_assembly/photovoltaic_cell')

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

  // Particle accelerator: spallation neutrons breed tritium from lithium, beryllium multiplies them
  event.custom({
    type: 'solarpunk:particle_accelerator',
    ingredients: [
      { item: 'tfc_metallurgy:metal/dust/lithium', count: 32 },
      { item: 'tfc_metallurgy:metal/ingot/beryllium', count: 4 },
      { item: 'solarpunk:empty_fuel_capsule', count: 1 }
    ],
    min_diameter: 9,
    min_speed: 128,
    processing_time: 600,
    stress: 16384.0,
    result: { id: 'solarpunk:tritium_capsule', count: 1 }
  }).id('kubejs:solarpunk/particle_accelerator/tritium_capsule')

  // Particle accelerator: accelerator-driven thorium breeding into fissile fuel
  event.custom({
    type: 'solarpunk:particle_accelerator',
    ingredients: [
      { item: 'tfc_metallurgy:metal/ingot/thorium', count: 4 }
    ],
    min_diameter: 15,
    min_speed: 192,
    processing_time: 800,
    stress: 24576.0,
    result: { id: 'create_new_age:radioactive_thorium', count: 4 }
  }).id('kubejs:solarpunk/particle_accelerator/radioactive_thorium')

  // Deuterium: cryogenic distillation of liquid hydrogen
  event.remove({ id: 'solarpunk:mixing/water_to_deuterium' })
  event.custom({
    type: 'tfmg:distillation',
    ingredients: [{ type: 'neoforge:single', fluid: 'chemica:liquid_hydrogen', amount: 1000 }],
    results: [
      { id: 'tfmg:hydrogen', amount: 975 },
      { id: 'solarpunk:deuterium', amount: 25 }
    ]
  }).id('kubejs:solarpunk/distillation/deuterium')

  // Particle accelerator: transmutation and neutron doping
  const accelerate = (name, input, count, output, outCount, diameter, speed, stress, time) => event.custom({
    type: 'solarpunk:particle_accelerator',
    ingredients: [{ item: input, count: count }],
    min_diameter: diameter,
    min_speed: speed,
    processing_time: time,
    stress: stress,
    result: { id: output, count: outCount }
  }).id('kubejs:solarpunk/particle_accelerator/' + name)
  accelerate('bismuth_to_gold', 'kubejs:metal/dust/bismuth', 16, 'kubejs:metal/dust/gold', 1, 21, 256, 32768.0, 2400)
  accelerate('lead_to_gold', 'tfc_metallurgy:metal/dust/lead', 32, 'kubejs:metal/dust/gold', 1, 21, 256, 32768.0, 3600)
  accelerate('platinum_to_gold', 'tfc_metallurgy:metal/dust/platinum', 8, 'kubejs:metal/dust/gold', 1, 15, 192, 24576.0, 1600)
  accelerate('osmium_to_iridium', 'tfc_metallurgy:metal/dust/osmium', 8, 'tfc_metallurgy:metal/dust/iridium', 1, 15, 192, 24576.0, 1600)
  accelerate('neutron_doped_silicon', 'kubejs:monocrystalline_silicon', 1, 'tfmg:n_semiconductor', 4, 9, 128, 16384.0, 600)

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
    ingredients: [{ type: 'neoforge:single', fluid: 'chemica:steam', amount: 1000 }],
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

  // Lighting
  event.remove({ id: 'solarpunk:streetlamp' })
  event.shaped('solarpunk:streetlamp', [
    'SGS',
    ' W ',
    ' I '
  ], {
    S: 'tfc:metal/sheet/wrought_iron',
    G: 'tfc:lamp_glass',
    W: '#c:wires/copper',
    I: 'tfc:metal/ingot/wrought_iron'
  }).id('kubejs:solarpunk/streetlamp')

  event.remove({ id: 'solarpunk:garden_light' })
  event.shaped('2x solarpunk:garden_light', [
    'P',
    'G',
    'A'
  ], {
    P: 'solarpunk:photovoltaic_cell',
    G: 'tfc:lamp_glass',
    A: 'tfc_metallurgy:metal/rod/aluminum'
  }).id('kubejs:solarpunk/garden_light')

  // Filigree railings
  const railings = {
    andesite: 'tfc_metallurgy:metal/sheet/aluminum',
    iron: 'tfc:metal/sheet/wrought_iron',
    copper: 'tfc:metal/sheet/copper',
    brass: 'tfc:metal/sheet/brass'
  }
  Object.keys(railings).forEach(metal => {
    event.remove({ id: `solarpunk:${metal}_filigree_railing` })
    event.shaped(`8x solarpunk:${metal}_filigree_railing`, [
      'SSS',
      'SSS'
    ], {
      S: railings[metal]
    }).id(`kubejs:solarpunk/${metal}_filigree_railing`)
  })
})

// Remove hidden duplicates from shared tags
ServerEvents.tags('item', event => {
  const duplicates = [
    'salt',
    'lithium_ore', 'deepslate_lithium_ore', 'raw_lithium',
    'lithium_dust', 'lithium_ingot', 'lithium_nugget', 'lithium_block',
    'beryllium_dust', 'beryllium_ingot', 'beryllium_nugget', 'beryllium_block',
    'copper_wire', 'iron_wire', 'gold_wire'
  ]
  duplicates.forEach(item => event.removeAllTagsFrom('solarpunk:' + item))
})
