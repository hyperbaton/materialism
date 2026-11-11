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

  // Salt: TFC salt; 1 salt = 100 mB molten salt
  event.remove({ id: 'solarpunk:salt_from_salt_block' })
  event.shapeless('9x tfc:powder/salt', ['solarpunk:salt_block']).id('kubejs:solarpunk/salt_from_salt_block')

  event.remove({ id: 'solarpunk:salt_lamp' })
  event.shapeless('solarpunk:salt_lamp', ['solarpunk:salt_block', 'tfc:torch']).id('kubejs:solarpunk/salt_lamp')

  event.remove({ id: 'solarpunk:solar_heating/salt_to_molten_salt' })
  event.custom({
    type: 'solarpunk:solar_heating',
    ingredient: { tag: 'c:storage_blocks/salt' },
    result: { id: 'solarpunk:molten_salt', amount: 900 }
  }).id('kubejs:solarpunk/solar_heating/salt_block_to_molten_salt')

  event.remove({ id: 'solarpunk:crystallizing/molten_salt_to_salt' })
  event.custom({
    type: 'solarpunk:crystallizing',
    input_a: { id: 'solarpunk:molten_salt', amount: 100 },
    input_b: { id: 'minecraft:water', amount: 50 },
    byproduct: { id: 'solarpunk:steam', amount: 25 },
    processing_time: 100,
    result: { id: 'tfc:powder/salt', count: 1 }
  }).id('kubejs:solarpunk/crystallizing/molten_salt_to_salt')

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
      event.recipes.createDeploying('solarpunk:incomplete_solar_mirror', ['solarpunk:incomplete_solar_mirror', Ingredient.of('#c:glass_panes/colorless')]),
      event.recipes.createFilling('solarpunk:incomplete_solar_mirror', ['solarpunk:incomplete_solar_mirror', Fluid.of('tfc:metal/silver', 10)]),
      event.recipes.createDeploying('solarpunk:incomplete_solar_mirror', ['solarpunk:incomplete_solar_mirror', 'create:cogwheel']),
      event.recipes.createPressing('solarpunk:incomplete_solar_mirror', 'solarpunk:incomplete_solar_mirror')
    ]
  ).transitionalItem('solarpunk:incomplete_solar_mirror').loops(1).id('kubejs:solarpunk/sequenced_assembly/solar_mirror')

  // Electromagnet coil
  event.remove({ id: 'solarpunk:sequenced_assembly/electromagnet_coil' })
  event.recipes.create.sequenced_assembly(
    [Item.of('solarpunk:electromagnet_coil')],
    'minecraft:lightning_rod',
    [
      event.recipes.createDeploying('solarpunk:incomplete_electromagnet_coil', ['solarpunk:incomplete_electromagnet_coil', 'tfc:metal/sheet/copper']),
      event.recipes.createDeploying('solarpunk:incomplete_electromagnet_coil', ['solarpunk:incomplete_electromagnet_coil', 'tfc:metal/sheet/copper']),
      event.recipes.createPressing('solarpunk:incomplete_electromagnet_coil', 'solarpunk:incomplete_electromagnet_coil'),
      event.recipes.createDeploying('solarpunk:incomplete_electromagnet_coil', ['solarpunk:incomplete_electromagnet_coil', 'create:electron_tube'])
    ]
  ).transitionalItem('solarpunk:incomplete_electromagnet_coil').loops(3).id('kubejs:solarpunk/sequenced_assembly/electromagnet_coil')

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

  event.remove({ id: 'solarpunk:grow_lamp' })
  event.shaped('2x solarpunk:grow_lamp', [
    'SWS',
    'GAG'
  ], {
    S: 'tfc:metal/sheet/wrought_iron',
    W: '#c:wires/copper',
    G: '#c:glass_panes/colorless',
    A: 'tfc:gem/amethyst'
  }).id('kubejs:solarpunk/grow_lamp')

  event.remove({ id: 'solarpunk:solar_plant_bed' })
  event.shaped('solarpunk:solar_plant_bed', [
    ' P ',
    'CAC',
    'CDC'
  ], {
    P: 'solarpunk:photovoltaic_cell',
    C: 'tfc:metal/sheet/copper',
    A: 'tfc:gem/amethyst',
    D: '#tfc:dirt'
  }).id('kubejs:solarpunk/solar_plant_bed')

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
