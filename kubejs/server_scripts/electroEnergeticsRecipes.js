// Create Electro Energetics: the pack's electrical grid
ServerEvents.recipes(event => {
  const EE = 'electroenergetics:'
  const id = name => 'kubejs:electroenergetics/' + name
  const C = EE + 'connector'
  const lamination = EE + 'transformer_core_lamination'
  const copperSpool = EE + 'copper_wire_spool'
  const ceramic = 'tfc:ceramic/fire_brick'
  const brassSheet = 'tfc:metal/sheet/brass'
  const steelSheet = 'tfc:metal/sheet/steel'
  const steelRod = 'tfc:metal/rod/steel'
  const aluminumSheet = 'tfc_metallurgy:metal/sheet/aluminum'
  const aluminumRod = 'tfc_metallurgy:metal/rod/aluminum'
  const copperRod = 'tfc:metal/rod/copper'
  const colors = ['white', 'orange', 'magenta', 'light_blue', 'yellow', 'lime', 'pink', 'gray',
    'light_gray', 'cyan', 'purple', 'blue', 'brown', 'green', 'red', 'black']

  // Every default recipe uses andesite alloy, vanilla plates or other removed items
  event.remove({ mod: 'electroenergetics' })

  // Fluids: mineral transformer oil (hydrotreated heavy oil) or natural ester (soybean)
  event.recipes.create.mixing(Fluid.of(EE + 'transformer_oil', 1000),
    [Fluid.of('tfmg:heavy_oil', 1000), Fluid.of('tfmg:hydrogen', 50)]).heated().id(id('mixing/transformer_oil'))
  event.recipes.create.mixing(Fluid.of(EE + 'transformer_oil', 1000),
    [Fluid.of('firmalife:soybean_oil', 1000)]).heated().id(id('mixing/transformer_oil_ester'))
  // S + 3 F2 -> SF6, the breaker's arc-quenching gas
  event.recipes.create.mixing(Fluid.of('kubejs:sulfur_hexafluoride', 100),
    ['tfc:powder/sulfur', Fluid.of('chemica:fluorine', 300)]).heated().id(id('mixing/sulfur_hexafluoride'))

  // Spools: lumber turned on the lathe
  event.recipes.vintageimprovements.turning('4x ' + EE + 'empty_spool', Ingredient.of('#tfc:lumber')).processingTime(150).id(id('turning/empty_spool'))
  // Wire wound onto an empty spool, four lengths each
  const emptySpool = EE + 'empty_spool'
  const spool = (output, wire) => event.recipes.create.sequenced_assembly([EE + output], emptySpool, [
    event.recipes.createDeploying(emptySpool, [emptySpool, Ingredient.of(wire)]),
    event.recipes.createDeploying(emptySpool, [emptySpool, Ingredient.of(wire)])
  ]).transitionalItem(emptySpool).loops(4).id(id('sequenced_assembly/' + output))
  spool('copper_wire_spool', '#c:wires/copper')
  spool('electrum_wire_spool', '#c:wires/electrum')
  spool('wire_spool', EE + 'insulated_wire')
  spool('heavily_insulated_wire_spool', EE + 'heavily_insulated_wire')
  spool('iron_wire_spool', EE + 'iron_wire_strand')
  spool('iron_bus_spool', 'tfc_items:steel_stamen')
  spool('iron_rail_spool', '#electroenergetics:iron_rail_component')
  spool('glass_insulator_spool', EE + 'glass_insulator_segment')
  // ACSR overhead conductor: aluminum strands laid around a steel core
  const steelWire = 'vintageimprovements:steel_wire'
  event.recipes.create.sequenced_assembly([EE + 'iron_wire_strand'], steelWire, [
    event.recipes.createDeploying(steelWire, [steelWire, Ingredient.of('#c:wires/aluminum')]),
    event.recipes.createDeploying(steelWire, [steelWire, Ingredient.of('#c:wires/aluminum')]),
    event.recipes.createDeploying(steelWire, [steelWire, Ingredient.of('#c:wires/aluminum')])
  ]).transitionalItem(steelWire).loops(1).id(id('sequenced_assembly/iron_wire_strand'))
  // Copper wire wrapped in a rubber strip
  const copperWire = 'createaddition:copper_wire'
  event.recipes.create.sequenced_assembly([EE + 'insulated_wire'], copperWire, [
    event.recipes.createDeploying(copperWire, [copperWire, 'chemica:rubber_strip']),
    event.custom({ type: 'vintageimprovements:curving', ingredients: [{ item: copperWire }], results: [{ id: copperWire }], mode: 2 })
  ]).transitionalItem(copperWire).loops(1).id(id('sequenced_assembly/insulated_wire'))
  // Paper-insulated lead-covered cable: oil-impregnated paper under a lead sheath
  event.recipes.create.sequenced_assembly([EE + 'heavily_insulated_wire'], copperWire, [
    event.recipes.createDeploying(copperWire, [copperWire, 'minecraft:paper']),
    event.recipes.createFilling(copperWire, [copperWire, Fluid.of(EE + 'transformer_oil', 50)]),
    event.recipes.createDeploying(copperWire, [copperWire, 'tfc_metallurgy:metal/sheet/lead']),
    event.custom({ type: 'vintageimprovements:curving', ingredients: [{ item: copperWire }], results: [{ id: copperWire }], mode: 2 })
  ]).transitionalItem(copperWire).loops(1).id(id('sequenced_assembly/heavily_insulated_wire'))

  // Connectors and line hardware
  // Clay body shaped by the W-shaped head, fired, fitted with a copper terminal
  const unfired = 'tfmg:unfired_insulator'
  event.recipes.create.sequenced_assembly(['4x ' + C], 'minecraft:clay', [
    event.custom({ type: 'vintageimprovements:curving', ingredients: [{ item: unfired }], results: [{ id: unfired }], mode: 3 }),
    event.custom({ type: 'vintageimprovements:curving', ingredients: [{ item: unfired }], results: [{ id: unfired }], mode: 3 }),
    event.recipes.vintageimprovements.pressurizing(unfired, unfired).heated(),
    event.recipes.createDeploying(unfired, [unfired, copperRod]),
    event.recipes.createPressing(unfired, unfired)
  ]).transitionalItem(unfired).loops(1).id(id('sequenced_assembly/connector'))
  event.shapeless(EE + 'double_connector', [C, C]).id(id('double_connector'))
  event.shapeless(EE + 'triple_connector', [C, C, C]).id(id('triple_connector'))
  event.shapeless(EE + 'quad_connector', [C, C, C, C]).id(id('quad_connector'))
  event.shapeless(EE + 'quad_connector', [EE + 'double_connector', EE + 'double_connector']).id(id('quad_connector_from_double'))
  event.shapeless('2x ' + C, [EE + 'double_connector']).id(id('connector_from_double'))
  event.shapeless('3x ' + C, [EE + 'triple_connector']).id(id('connector_from_triple'))
  event.shapeless('4x ' + C, [EE + 'quad_connector']).id(id('connector_from_quad'))
  // Porcelain discs pressed and fired onto a stainless rod, four sheds
  const insRod = 'firmalife:metal/rod/stainless_steel'
  event.recipes.create.sequenced_assembly([EE + 'insulator'], insRod, [
    event.recipes.createDeploying(insRod, [insRod, 'minecraft:clay_ball']),
    event.custom({ type: 'vintageimprovements:curving', ingredients: [{ item: insRod }], results: [{ id: insRod }], mode: 3 }),
    event.recipes.vintageimprovements.pressurizing(insRod, insRod).heated()
  ]).transitionalItem(insRod).loops(4).id(id('sequenced_assembly/insulator'))
  // Glass discs strung on a steel rod with wire ties
  event.recipes.create.sequenced_assembly(['4x ' + EE + 'glass_insulator_segment'], steelRod, [
    event.recipes.createDeploying(steelRod, [steelRod, 'tfmg:glass_insulator_segment']),
    event.recipes.createDeploying(steelRod, [steelRod, Ingredient.of('#c:wires/steel')])
  ]).transitionalItem(steelRod).loops(4).id(id('sequenced_assembly/glass_insulator_segment'))
  event.shaped(EE + 'hanging_glass_insulator', ['SS', 'SS'], { S: EE + 'glass_insulator_segment' }).id(id('hanging_glass_insulator'))
  event.shaped('3x ' + EE + 'pole_mount', [' SS', 'RRR', 'R  '], { S: steelSheet, R: steelRod }).id(id('pole_mount'))
  event.shaped('8x ' + EE + 'concrete_pole', ['CCC', 'CWC', 'CCC'], {
    C: 'tfmg:rebar_concrete', W: EE + 'wire_spool'
  }).id(id('concrete_pole'))
  event.shaped('4x ' + EE + 'catenary_holder', ['RRR', ' S ', 'RRR'], { R: steelRod, S: steelSheet }).id(id('catenary_holder'))
  // Earthing rod: copper rods soldered onto a connector
  event.recipes.create.sequenced_assembly([EE + 'ground_rod'], C, [
    event.recipes.createFilling(C, [C, Fluid.of('tfc_metallurgy:metal/solder', 10)]),
    event.recipes.createDeploying(C, [C, copperRod]),
    event.recipes.createPressing(C, C)
  ]).transitionalItem(C).loops(2).id(id('sequenced_assembly/ground_rod'))
  event.shaped(EE + 'wire_damper', [' S ', ' H ', 'R R'], { S: steelSheet, H: '#c:chains', R: steelRod }).id(id('wire_damper'))
  for (const sign of ['electric_shock_sign', 'grounding_sign', 'high_voltage_sign']) {
    event.stonecutting('2x ' + EE + sign, steelSheet).id(id(sign))
  }

  // Passive components
  // TFMG resistor coated in clay, fired, with terminal contacts
  const res = 'tfmg:resistor'
  event.recipes.create.sequenced_assembly([EE + 'resistor'], res, [
    event.recipes.createDeploying(res, [res, 'minecraft:clay_ball']),
    event.recipes.vintageimprovements.pressurizing(res, res).heated(),
    event.recipes.createDeploying(res, [res, C]),
    event.recipes.createDeploying(res, [res, C]),
    event.recipes.createPressing(res, res)
  ]).transitionalItem(res).loops(1).id(id('sequenced_assembly/resistor'))
  // Paper capacitor: tin foil, waxed paper
  event.shaped(EE + 'capacitor', ['SPS', 'PWP', 'C C'], {
    S: 'tfc:metal/sheet/tin', P: 'minecraft:paper', W: 'firmalife:beeswax', C: C
  }).id(id('capacitor'))
  event.shaped(EE + 'high_voltage_capacitor', ['CSC', 'KKK', 'KKK'], {
    C: C, S: steelSheet, K: EE + 'capacitor'
  }).id(id('high_voltage_capacitor'))
  event.shaped(EE + 'inductor', [' L ', 'CWC', ' L '], { L: lamination, C: C, W: copperSpool }).id(id('inductor'))
  // P-N junction with leads, epoxy case folded shut
  const dieCase = 'chemica:cured_epoxy_sheet'
  event.recipes.create.sequenced_assembly([EE + 'diode'], dieCase, [
    event.recipes.createDeploying(dieCase, [dieCase, 'tfmg:p_semiconductor']),
    event.recipes.createDeploying(dieCase, [dieCase, 'tfmg:n_semiconductor']),
    event.recipes.createDeploying(dieCase, [dieCase, C]),
    event.recipes.createDeploying(dieCase, [dieCase, C]),
    event.custom({ type: 'vintageimprovements:curving', ingredients: [{ item: dieCase }], results: [{ id: dieCase }], mode: 2 })
  ]).transitionalItem(dieCase).loops(1).id(id('sequenced_assembly/diode'))
  event.shaped(EE + 'potentiometer', [' S ', 'FWF', 'C C'], {
    S: 'create:shaft', F: ceramic, W: 'tfmg:resistor', C: C
  }).id(id('potentiometer'))
  // Autotransformer with a graphite brush
  event.shaped(EE + 'variac', [' S ', 'WLW', 'CGC'], {
    S: 'create:shaft', W: copperSpool, L: lamination, C: C, G: 'tfc:powder/graphite'
  }).id(id('variac'))
  event.shaped(EE + 'redstone_potentiometer', ['P', 'R'], { P: EE + 'potentiometer', R: 'minecraft:redstone_torch' }).id(id('redstone_potentiometer'))
  event.shaped(EE + 'redstone_variac', ['V', 'R'], { V: EE + 'variac', R: 'minecraft:redstone_torch' }).id(id('redstone_variac'))

  // Lamps and signals
  // Light bulb in a brass socket
  event.recipes.create.mechanical_crafting(EE + 'bulb', [' L ', 'CBC'], {
    L: 'tfmg:light_bulb', C: C, B: brassSheet
  }).id(id('mechanical_crafting/bulb'))
  event.recipes.create.mechanical_crafting(EE + 'indicator_bulb', ['CEC'], {
    C: C, E: 'create:electron_tube'
  }).id(id('mechanical_crafting/indicator_bulb'))
  event.shaped(EE + 'buzzer', [' S ', 'CWC', ' B '], { S: steelSheet, C: C, W: copperSpool, B: brassSheet }).id(id('buzzer'))

  // Protection and switching
  // Cartridge fuses: silver element in a glass tube with brass caps
  event.shaped('2x ' + EE + 'fuse', [' B ', 'GWG', ' B '], {
    B: 'tfc:metal/rod/brass', G: 'minecraft:glass_pane', W: 'vintageimprovements:silver_wire'
  }).id(id('fuse'))
  event.shaped(EE + 'fuse_holder', ['C C', 'FSF', 'C C'], { C: C, F: ceramic, S: brassSheet }).id(id('fuse_holder'))
  // Thermoset housing, bimetal thermal trip, magnetic trip coil
  const mcb = EE + 'incomplete_miniature_circuit_breaker'
  event.recipes.create.sequenced_assembly([EE + 'miniature_circuit_breaker'], 'chemica:cured_epoxy_sheet', [
    event.recipes.createDeploying(mcb, [mcb, 'tfc_metallurgy:metal/sheet/invar']),
    event.recipes.createDeploying(mcb, [mcb, 'vintageimprovements:copper_spring']),
    event.recipes.createDeploying(mcb, [mcb, copperSpool]),
    event.recipes.createPressing(mcb, mcb)
  ]).transitionalItem(mcb).loops(1).id(id('sequenced_assembly/miniature_circuit_breaker'))
  // Knife switch on a ceramic base
  event.shaped(EE + 'cut_off_switch', [' H ', ' B ', 'CFC'], {
    H: '#c:rods/wooden', B: 'tfc:metal/sheet/copper', C: C, F: ceramic
  }).id(id('cut_off_switch'))
  event.shaped(EE + 'double_switch', ['SFS'], { S: EE + 'cut_off_switch', F: ceramic }).id(id('double_switch'))
  event.shaped(EE + 'momentary_switch', [' R ', ' B ', 'CFC'], {
    R: 'afc:rubber_bar', B: '#minecraft:buttons', C: C, F: ceramic
  }).id(id('momentary_switch'))
  event.shaped(EE + 'emergency_stop_button', [' D ', ' B ', 'CFC'], {
    D: 'minecraft:red_dye', B: '#minecraft:buttons', C: C, F: ceramic
  }).id(id('emergency_stop_button'))
  event.shaped(EE + 'relay', [' W ', 'LSL'], { W: copperSpool, L: lamination, S: EE + 'cut_off_switch' }).id(id('relay'))
  event.shaped(EE + 'redstone_relay', [' R ', 'FSF'], {
    R: 'minecraft:redstone_torch', F: ceramic, S: EE + 'cut_off_switch'
  }).id(id('redstone_relay'))
  event.shaped(EE + 'high_voltage_switch', [' SR', 'CIS', 'CC '], {
    S: 'create:shaft', R: copperRod, C: C, I: EE + 'insulator'
  }).id(id('high_voltage_switch'))
  // Puffer breaker: evacuated stainless tank filled with SF6
  const breaker = EE + 'high_voltage_switch'
  event.recipes.create.sequenced_assembly([EE + 'sulfur_hexafluoride_breaker'], breaker, [
    event.recipes.createDeploying(breaker, [breaker, EE + 'insulator']),
    event.recipes.createDeploying(breaker, [breaker, 'create:precision_mechanism']),
    event.recipes.createDeploying(breaker, [breaker, 'firmalife:metal/sheet/stainless_steel']),
    event.recipes.vintageimprovements.vacuumizing(breaker, [breaker]),
    event.recipes.createFilling(breaker, [breaker, Fluid.of('kubejs:sulfur_hexafluoride', 100)])
  ]).transitionalItem(breaker).loops(1).id(id('sequenced_assembly/sulfur_hexafluoride_breaker'))

  // Magnetic cores and transformers
  // Plain iron laminations
  event.recipes.create.cutting('2x ' + lamination, 'tfc:metal/sheet/wrought_iron').id(id('cutting/transformer_core_lamination'))
  // Silicon steel laminations: alloyed, annealed, slit
  event.recipes.create.sequenced_assembly(['6x ' + lamination], steelSheet, [
    event.recipes.createDeploying(steelSheet, [steelSheet, 'chemica:silicon_dust']),
    event.recipes.vintageimprovements.pressurizing(steelSheet, steelSheet).heated(),
    event.recipes.create.cutting(steelSheet, steelSheet)
  ]).transitionalItem(steelSheet).loops(1).id(id('sequenced_assembly/silicon_steel_lamination'))
  const core = EE + 'incomplete_transformer_core'
  event.recipes.create.sequenced_assembly([EE + 'transformer_core'], lamination, [
    event.recipes.createDeploying(core, [core, lamination]),
    event.recipes.createDeploying(core, [core, lamination]),
    event.recipes.createDeploying(core, [core, lamination]),
    event.recipes.createPressing(core, core),
    event.recipes.createDeploying(core, [core, 'minecraft:paper']),
    event.recipes.createDeploying(core, [core, 'tfmg:large_coil']),
    event.recipes.createDeploying(core, [core, 'tfmg:large_coil'])
  ]).transitionalItem(core).loops(1).id(id('sequenced_assembly/transformer_core'))
  // Oil-filled transformer on a wound core
  event.recipes.create.sequenced_assembly([EE + 'transformer'], EE + 'transformer_core', [
    event.recipes.createDeploying(core, [core, EE + 'double_connector']),
    event.recipes.createDeploying(core, [core, EE + 'double_connector']),
    event.recipes.createDeploying(core, [core, steelSheet]),
    event.recipes.createFilling(core, [core, Fluid.of(EE + 'transformer_oil', 250)]),
    event.recipes.createPressing(core, core)
  ]).transitionalItem(core).loops(1).id(id('sequenced_assembly/transformer'))
  // Tap-changing regulator
  event.recipes.create.sequenced_assembly([EE + 'voltage_regulator'], EE + 'transformer_core', [
    event.recipes.createDeploying(core, [core, copperSpool]),
    event.recipes.createDeploying(core, [core, 'create:precision_mechanism']),
    event.recipes.createDeploying(core, [core, steelSheet]),
    event.recipes.createFilling(core, [core, Fluid.of(EE + 'transformer_oil', 250)]),
    event.recipes.createPressing(core, core)
  ]).transitionalItem(core).loops(1).id(id('sequenced_assembly/voltage_regulator'))
  event.shaped(EE + 'current_transformer', ['CRC', 'LWL', 'CSC'], {
    C: C, R: copperRod, L: lamination, W: copperSpool, S: EE + 'wire_spool'
  }).id(id('current_transformer'))
  // Bridge to Forge Energy machines (TFMG, New Age)
  event.shaped(EE + 'converter', ['CEC', 'WLW', 'CEC'], {
    C: C, E: 'create:electron_tube', W: copperSpool, L: lamination
  }).id(id('converter'))

  // Instruments
  event.shaped(EE + 'ammeter', [' G ', 'BMB', 'CRC'], {
    G: 'minecraft:glass_pane', B: brassSheet, M: 'create:precision_mechanism', C: C,
    R: 'tfc_metallurgy:metal/rod/constantan'
  }).id(id('ammeter'))
  event.shaped(EE + 'voltmeter', [' G ', 'BMB', 'CRC'], {
    G: 'minecraft:glass_pane', B: brassSheet, M: 'create:precision_mechanism', C: C,
    R: EE + 'resistor'
  }).id(id('voltmeter'))
  event.shaped(EE + 'energy_meter', ['C C', 'VPA', ' S '], {
    C: EE + 'double_connector', V: EE + 'voltmeter', P: 'create:precision_mechanism', A: EE + 'ammeter', S: brassSheet
  }).id(id('energy_meter'))
  event.shaped(EE + 'tri_polar_energy_meter', ['C C', 'VPA', ' S '], {
    C: EE + 'triple_connector', V: EE + 'voltmeter', P: 'create:precision_mechanism', A: EE + 'ammeter', S: brassSheet
  }).id(id('tri_polar_energy_meter'))
  // Split-core jaws around a meter movement
  event.shaped(EE + 'clamp_meter', [' LL', 'RPR', ' W '], {
    L: lamination, R: 'afc:rubber_bar', P: 'create:precision_mechanism', W: copperSpool
  }).id(id('clamp_meter'))
  event.recipes.create.mechanical_crafting(EE + 'linemans_stick', ['NPH', ' S ', ' S ', ' S ', ' D '], {
    N: steelRod, P: 'create:precision_mechanism', H: 'create:brass_hand', S: '#c:rods/wooden', D: 'afc:rubber_bar'
  }).id(id('linemans_stick'))

  // Panels and cooling
  event.shaped('2x ' + EE + 'electrical_panel', ['R R', 'RSR', 'R R'], { R: aluminumRod, S: aluminumSheet }).id(id('electrical_panel'))
  event.shaped('4x ' + EE + 'radiator_panel', ['RSR', 'RSR', 'RSR'], { R: aluminumRod, S: aluminumSheet }).id(id('radiator_panel'))
  event.shapeless(EE + 'electrical_panel', ['#electroenergetics:dyed_electrical_panels']).id(id('electrical_panel_undye'))
  for (const color of colors) {
    event.shapeless(EE + color + '_electrical_panel', [EE + 'electrical_panel', 'minecraft:' + color + '_dye']).id(id(color + '_electrical_panel'))
  }

  // Storage: nickel-iron (Edison) cell in an aluminum case
  const cell = 'create:andesite_casing'
  event.recipes.create.sequenced_assembly([EE + 'accumulator'], cell, [
    event.recipes.createDeploying(cell, [cell, 'tfc:metal/sheet/nickel']),
    event.recipes.createDeploying(cell, [cell, steelSheet]),
    event.recipes.createFilling(cell, [cell, Fluid.of('tfc:lye', 250)]),
    event.recipes.createDeploying(cell, [cell, C]),
    event.recipes.createDeploying(cell, [cell, C])
  ]).transitionalItem(cell).loops(1).id(id('sequenced_assembly/accumulator'))

  // Rotating machines
  // Alternators stay uncraftable: New Age generator coils feed the grid through a converter
  // Copper segments insulated with paper
  event.shaped(EE + 'commutator', ['PCP', 'CSC', 'PCP'], {
    P: 'minecraft:paper', C: 'tfc:metal/sheet/copper', S: 'create:shaft'
  }).id(id('commutator'))
  // Traction motor: titanium housing, magnesium end shields, field coils, commutator, graphite brushes, pinion; red is the plain finish
  for (const color of colors) {
    event.recipes.create.mechanical_crafting(EE + color + '_electric_motor', [
      ' TXT ',
      'LWWWL',
      'GMAAP',
      'LWWWL',
      'SKDKS'
    ], {
      T: 'tfc_metallurgy:metal/sheet/titanium', X: EE + 'double_connector', L: lamination, W: copperSpool,
      G: 'tfc_metallurgy:metal/rod/graphite', M: EE + 'commutator', A: 'create:shaft', P: 'tfmg:steel_cogwheel',
      S: 'tfc_items:stainless_steel_screw', K: 'tfc_metallurgy:metal/sheet/magnesium', D: 'minecraft:' + color + '_dye'
    }).id(id('mechanical_crafting/' + color + '_electric_motor'))
  }
  // Pump with a small built-in motor
  const pump = 'create:mechanical_pump'
  event.recipes.create.sequenced_assembly([EE + 'electric_pump'], pump, [
    event.recipes.createDeploying(pump, [pump, lamination]),
    event.recipes.createDeploying(pump, [pump, copperSpool]),
    event.recipes.createDeploying(pump, [pump, EE + 'commutator']),
    event.recipes.createDeploying(pump, [pump, 'tfc_metallurgy:metal/rod/graphite']),
    event.recipes.createDeploying(pump, [pump, EE + 'double_connector'])
  ]).transitionalItem(pump).loops(1).id(id('sequenced_assembly/electric_pump'))
  // Sheathed element: resistance coil packed in magnesia, swaged, bent into a horseshoe, mounted on a casing
  const sheath = 'tfmg:steel_pipe'
  event.recipes.create.sequenced_assembly([EE + 'resistive_heater'], sheath, [
    event.recipes.createDeploying(sheath, [sheath, 'vintageimprovements:constantan_wire']),
    event.recipes.createDeploying(sheath, [sheath, 'tfcvolcanoes:mineral/powder/magnesite']),
    event.recipes.vintageimprovements.pressurizing(sheath, sheath).heated(),
    event.recipes.createPressing(sheath, sheath),
    event.custom({ type: 'vintageimprovements:curving', ingredients: [{ item: sheath }], results: [{ id: sheath }], mode: 2 }),
    event.recipes.createDeploying(sheath, [sheath, 'tfc:metal/double_sheet/steel']),
    event.recipes.createDeploying(sheath, [sheath, C]),
    event.recipes.createDeploying(sheath, [sheath, C])
  ]).transitionalItem(sheath).loops(1).id(id('sequenced_assembly/resistive_heater'))

  // Railway electrification
  // Carbon contact strip
  event.shaped(EE + 'pantograph', [' GG', 'CAS', 'CC '], {
    G: 'tfc_metallurgy:metal/rod/graphite', C: C, A: steelSheet, S: 'create:shaft'
  }).id(id('pantograph'))
  event.shaped(EE + 'rail_contact_shoe', ['CGR', 'RSR'], {
    C: C, G: 'tfc:metal/sheet/cast_iron', R: steelRod, S: 'create:shaft'
  }).id(id('rail_contact_shoe'))
})

ServerEvents.tags('item', event => {
  // Thin bus conductors from wire, conductor rails from steel rod
  event.removeAll('electroenergetics:iron_bus_component')
  event.removeAll('electroenergetics:iron_rail_component')
  event.add('electroenergetics:iron_rail_component', 'tfc:metal/rod/steel')
  // Bulbs are repaired with a new tungsten filament
  event.removeAll('electroenergetics:bulb_repair_item')
  event.add('electroenergetics:bulb_repair_item', 'kubejs:wire/tungsten_wire')
  // Its bare wires duplicate the rolling mill ones
  ;['copper_wire', 'electrum_wire', 'iron_wire'].forEach(wire => event.removeAllTagsFrom('electroenergetics:' + wire))
})
