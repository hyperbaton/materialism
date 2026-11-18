// TFMG: its machines and parts made from pack materials, and its recipes fitted to the pack
ServerEvents.recipes(event => {
  // Raw lithium is cut from the pack: drop every recipe that makes or uses it.
  event.remove({ output: 'tfmg:raw_lithium' })
  event.remove({ input: 'tfmg:raw_lithium' })
  event.remove({ input: 'tfmg:crushed_raw_lithium' })
  event.remove({ input: 'tfmg:crushed_raw_lithium' })

  // Aluminium sheet: standardise on tfc_metallurgy's. Stop TFMG from producing its own,
  // and swap it for the tfc_metallurgy sheet wherever it's used as an input.
  event.remove({ output: 'tfmg:aluminum_sheet' })

  event.remove({id: /.*tfmg:.*axe.*/})
  event.remove({id: /.*tfmg:.*sword.*/})
  event.remove({id: /.*tfmg:.*hoe.*/})
  event.remove({id: /.*tfmg:.*shovel.*/})
  event.remove({output: 'tfmg:aluminum_ingot'})

  // Remove iron and steel ingots
  event.remove({ output: 'tfmg:cast_iron_ingot' })
  event.remove({ output: 'tfmg:steel_ingot' })
  event.remove({ output: 'tfmg:cast_iron_sheet' })


  // Remove wires, using vintageimprovement or carfts and additions ones
  event.remove('tfmg:stonecutting/aluminum_wire')
  event.remove('tfmg:stonecutting/copper_wire')
  event.remove('tfmg:stonecutting/constantan_wire')

  // Remove vat recipes for deleted outputs
  event.remove({id: 'tfmg:vat/nethersteel'})
  event.remove({id: 'tfmg:vat/sulfuric_acid'})

  // Fluid tanks: metal frame with glass sides
  const tfmgTanks = [
    ['cast_iron', 'tfc:metal/sheet/cast_iron'],
    ['aluminum', 'tfc_metallurgy:metal/sheet/aluminum'],
    ['steel', 'tfc:metal/sheet/steel']
  ]
  tfmgTanks.forEach(([metal, sheet]) => {
    event.remove({id: `tfmg:crafting/materials/${metal}_fluid_tank`})
    event.shaped(`tfmg:${metal}_fluid_tank`, [
        'B',
        'C',
        'B'
    ], {
        B: sheet,
        C: 'minecraft:glass_pane'
    })
  })

  // Electric gauge (voltmeter): two variants so a polarizer can be built
  event.remove({id: 'tfmg:crafting/materials/voltmeter'})
  const voltmeterMagnets = {
    magnet: 'tfmg:magnet',
    magnetite_block: 'create_new_age:redstone_magnet'
  }
  Object.keys(voltmeterMagnets).forEach(name => {
    event.shaped('tfmg:voltmeter', [
        'SCS',
        'RMR',
        'SAS'
    ], {
        S: 'tfc_items:steel_screw',
        C: 'minecraft:compass',
        R: 'tfc_metallurgy:metal/rod/aluminum',
        M: voltmeterMagnets[name],
        A: 'tfc_metallurgy:metal/sheet/aluminum'
    }).id(`kubejs:voltmeter_${name}`)
  })

  // Trusses: a lattice of rods held together by rivets
  const tfmgTrusses = [
    ['aluminum', 'tfc_metallurgy'], ['brass', 'tfc'], ['cast_iron', 'tfc'],
    ['constantan', 'tfc_metallurgy'], ['copper', 'tfc'], ['lead', 'tfc_metallurgy'],
    ['nickel', 'tfc'], ['steel', 'tfc'], ['zinc', 'tfc']
  ]
  tfmgTrusses.forEach(([metal, namespace]) => {
    event.remove({id: `tfmg:crafting/materials/${metal}_truss`})
    event.shaped(Item.of(`tfmg:${metal}_truss`, 4), [
        'RNR',
        'NRN',
        'RNR'
    ], {
        R: `${namespace}:metal/rod/${metal}`,
        N: `tfc_items:${metal}_rivet`
    })
    // Frames: a truss of the same metal braced with extra rods and rivets
    event.remove({id: `tfmg:crafting/materials/${metal}_frame`})
    event.shaped(Item.of(`tfmg:${metal}_frame`, 4), [
        'RNR',
        'NTN',
        'RNR'
    ], {
        R: `${namespace}:metal/rod/${metal}`,
        N: `tfc_items:${metal}_rivet`,
        T: `tfmg:${metal}_truss`
    })
  })

  // Metal blocks (aluminium and the rest): see metals/blocks.js

  // Change sulfuric acid recipes for vintageimprovements ones:
  event.remove('tfmg:mixing/copper_sulfate')
  event.remove('tfmg:mixing/zinc_sulfate')
  // Remove parts cutting (done with lathe)
  event.remove('tfmg:stonecutting/screw')
  event.remove('tfmg:stonecutting/rebar')
  // Remove fire clay from TFMG
  event.remove({input: 'tfmg:fireclay_ball'})

  event.custom({
    type: 'create:item_application',
    ingredients: [
      { tag: 'c:stripped_logs' },
      { item: 'tfc:metal/sheet/steel' },
    ],
    results: [
      { id: 'tfmg:steel_casing' },
    ],
  })
  event.custom({
    type: 'create:item_application',
    ingredients: [
      { tag: 'c:stripped_logs' },
      { item: 'tfc:metal/sheet/black_steel' },
    ],
    results: [
      { id: 'tfmg:heavy_machinery_casing' },
    ],
  })
  // VI sulfur items are retired for TFC sulfur powder (unify.js)
  event.remove({id: 'tfmg:crushing/sulfur'})
  event.remove({output: 'vintageimprovements:sulfur'})
  event.remove({output: 'vintageimprovements:sulfur_chunk'})
  // Replace TFMG constantan with TFC Metallurgy constantan
  event.remove({id: 'tfmg:mixing/constantan'})
  event.remove({output: 'tfmg:constantan_ingot'})
  event.remove({output: 'tfmg:constantan_nugget'})
  event.remove({output: 'tfmg:constantan_block'})
  // Replace vanilla copper ingot in remaining TFMG recipes
  swapInputs(event, [
    ['tfmg:crafting/materials/cable_connector', 'minecraft:copper_ingot', 'tfc:metal/ingot/copper'],
    // Replace steel nuggets with tfc_items steel rivets
    ['tfmg:crafting/materials/cable_connector', '#c:nuggets/steel', 'tfc_items:steel_rivet'],
    ['tfmg:crafting/materials/cable_tube', '#c:nuggets/steel', 'tfc_items:steel_rivet'],
    ['tfmg:crafting/materials/fire_extinguisher', '#c:nuggets/steel', 'tfc_items:steel_rivet'],
    ['tfmg:crafting/materials/glass_insulator_segment', '#c:nuggets/steel', 'tfc_items:steel_rivet'],
    ['tfmg:crafting/materials/oil_can', '#c:nuggets/steel', 'tfc_items:steel_rivet'],
    ['tfmg:crafting/materials/unfinished_electromagnetic_coil', '#c:nuggets/steel', 'tfc_items:steel_ring'],
    [{ id: /tfmg.*/ }, '#c:nuggets/steel', 'tfc_items:steel_rivet'],
    // Replace kelp in concrete hose with rubber
    ['tfmg:crafting/materials/concrete_hose', 'minecraft:dried_kelp_block', 'afc:rubber_bar']
  ])
  // Remove TFMG gunpowder recipe (replaced elsewhere)
  event.remove({id: 'tfmg:mixing/gunpowder'})

  // Remove bauxite powder recipe and replace usage with bauxite block
  event.remove({id: 'create:crushing/bauxite'})

  // Replace gravel and sand in asphalt mixture recipes with TFC tags
  swapInputs(event, [
    ['tfmg:mixing/asphalt_mixture', 'minecraft:gravel', '#c:gravels'],
    ['tfmg:mixing/asphalt_mixture', 'minecraft:sand', '#c:sands/silica'],
    ['tfmg:mixing/asphalt_mixture_from_slag', 'minecraft:gravel', '#c:gravels']
  ])

  // Replace tfmg:aluminum_bars with create:andesite_bars (renamed to "Aluminum Bars")
  event.remove({id: 'tfmg:aluminum_bars_from_ingots_aluminum_stonecutting'})

  // Replace tfmg:steel_bars with tfc:metal/bars/steel
  event.remove({id: 'tfmg:steel_bars_from_ingots_steel_stonecutting'})

  // Replace tfmg:nickel_sheet with tfc:metal/sheet/nickel
  event.remove({id: 'tfmg:pressing/nickel_ingot'})

  // Remove create_new_age blank and copper circuit items/recipes
  event.remove({output: 'create_new_age:blank_circuit'})
  event.remove({output: 'create_new_age:copper_circuit'})

  // Replace vanilla string requirements
  swapInputs(event, [
    ['tfmg:crafting/materials/pumpjack_crank', 'minecraft:string', 'tfc:rope'],
    ['tfmg:crafting/materials/pumpjack_base', 'minecraft:string', 'tfc:rope']
  ])
  // Use TFC steel as product of TFMG blast furnace and casting
  event.remove({id: 'tfmg:casting/amogus'})
  // Casting basin: TFMG's own ingot recipes take 90 mB and its slag block takes 20 mB. Use 100 mB
  // everywhere, so they line up with the 100 mB ingots of TFC
  event.forEachRecipe({id: /^tfmg:casting\/.*/}, recipe => {
    recipe.json.get('ingredients').forEach(ingredient => {
      let amount = ingredient.getAsJsonObject().get('amount')
      if (amount && (amount.getAsInt() == 90 || amount.getAsInt() == 20)) {
        ingredient.getAsJsonObject().addProperty('amount', 100)
        recipe.save()
      }
    })
  })

  // TFMG wiring retired: Electro Energetics carries the power
  const retiredElectrics = ['aluminum_cable_hub', 'brass_cable_hub', 'copper_cable_hub', 'heavy_cable_hub', 'steel_cable_hub',
    'steel_casing_cable_hub', 'cable_connector', 'cable_tube', 'concrete_encased_cable_tube', 'copycat_cable_base',
    'copycat_cable_block', 'diagonal_cable_block', 'electric_post', 'concrete_encased_electric_post', 'glass_cable_insulator',
    'large_switch', 'electric_motor', 'heavy_electric_motor', 'potentiometer', 'encased_potentiometer', 'rotor', 'stator', 'multimeter']
  ;['white', 'orange', 'magenta', 'light_blue', 'yellow', 'lime', 'pink', 'gray', 'light_gray', 'cyan', 'purple', 'blue',
    'brown', 'green', 'red', 'black'].forEach(c => retiredElectrics.push(c + '_multimeter'))
  // Electrical switch: insulated leads and silver contacts
  swapInputs(event, [
    ['tfmg:crafting/materials/electrical_switch', 'tfmg:electric_post', 'electroenergetics:heavily_insulated_wire'],
    ['tfmg:crafting/materials/electrical_switch', '#c:dusts/redstone', 'tfc_items:silver_rivet']
  ])
  retiredElectrics.forEach(i => event.remove({output: 'tfmg:' + i}))
  // Diodes come from Electro Energetics
  event.remove({output: 'tfmg:electric_diode'})
  event.remove({id: 'chemica:cutting/rubber_strip'})
  event.recipes.create.cutting('2x chemica:rubber_strip', 'afc:rubber_bar').id('kubejs:cutting/rubber_strip')
  // Use TFC gravel and sand for asphalt
  // Use TFC cast iron
  event.remove({id: 'tfmg:mixing/cast_iron_ingot'})
  // Bauxite and galena compacting recipes
  event.recipes.create.compacting('tfmg:bauxite', Ingredient.of('tfc_metallurgy:ore/rich_bauxite', 3))
  event.recipes.create.compacting('tfmg:bauxite', Ingredient.of('tfc_metallurgy:ore/normal_bauxite', 4))
  event.recipes.create.compacting('tfmg:bauxite', Ingredient.of('tfc_metallurgy:ore/poor_bauxite', 7))
  event.recipes.create.compacting('tfmg:bauxite', Ingredient.of('tfc_metallurgy:ore/small_bauxite', 10))
  event.recipes.create.compacting('tfmg:galena', Ingredient.of('tfc_metallurgy:ore/rich_galena', 3))
  event.recipes.create.compacting('tfmg:galena', Ingredient.of('tfc_metallurgy:ore/normal_galena', 4))
  event.recipes.create.compacting('tfmg:galena', Ingredient.of('tfc_metallurgy:ore/poor_galena', 7))
  event.recipes.create.compacting('tfmg:galena', Ingredient.of('tfc_metallurgy:ore/small_galena', 10))
  event.recipes.tfc.heating('tfmg:bauxite', 1600)
    .resultFluid(Fluid.of('tfc_metallurgy:metal/aluminum', 20))
  event.recipes.tfc.heating('tfmg:galena', 328)
    .resultFluid(Fluid.of('tfc_metallurgy:metal/lead', 100))

  // Freezer: vapour-compression unit on the compressor, charged with propane (LPG)
  event.remove({id: 'tfmg:crafting/materials/freezer'})
  const freezer = 'tfmg:compressor'
  event.recipes.create.sequenced_assembly([
    'tfmg:freezer'
  ], freezer, [
    event.recipes.createDeploying(freezer, [freezer, 'create:fluid_pipe']),
    event.recipes.createDeploying(freezer, [freezer, 'tfc_metallurgy:metal/sheet/aluminum']),
    event.recipes.createPressing(freezer, freezer),
    event.recipes.createDeploying(freezer, [freezer, 'create:fluid_valve']),
    event.recipes.createDeploying(freezer, [freezer, 'create:fluid_pipe']),
    event.recipes.createFilling(freezer, [freezer, Fluid.of('tfc_metallurgy:metal/solder', 20)]),
    event.recipes.createDeploying(freezer, [freezer, 'tfmg:electromagnetic_coil']),
    event.recipes.createDeploying(freezer, [freezer, 'electroenergetics:connector']),
    event.recipes.vintageimprovements.vacuumizing(freezer, [freezer]),
    event.recipes.createFilling(freezer, [freezer, Fluid.of('tfmg:lpg', 1000)])
  ]).transitionalItem(freezer).loops(2).id('kubejs:tfmg/sequenced_assembly/freezer')

  event.remove({id: 'tfmg:turbine_blade'})
  event.recipes.create.sequenced_assembly([
    Item.of('tfmg:turbine_blade', 1)
  ], 'create:propeller', [ // input
    event.recipes.createDeploying('create:propeller', ['create:propeller', 'create:propeller']),
    event.recipes.createFilling(
      'create:propeller',
      ['create:propeller', Fluid.of('tfc_metallurgy:metal/solder', 20)]
    ),
    event.recipes.create.pressing('create:propeller', 'create:propeller')
  ]).transitionalItem('create:propeller').loops(1)

  event.remove({id: 'tfmg:sequenced_assembly/steel_mechanism'})
  event.recipes.create.sequenced_assembly(
   [
     CreateItem.of('tfmg:steel_mechanism', 0.85),
     CreateItem.of('tfc:metal/sheet/steel', 0.05),
     CreateItem.of('vintageimprovements:invar_wire', 0.05),
     CreateItem.of('tfmg:steel_cogwheel', 0.03),
     CreateItem.of('create:shaft', 0.02)
   ],
   'tfc:metal/sheet/steel',
   [
     event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'tfmg:steel_cogwheel']),
     event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'tfmg:large_steel_cogwheel']),
     event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'vintageimprovements:small_invar_spring']),
     event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'tfc_metallurgy:metal/rod/constantan'])
   ]
  ).transitionalItem('create:incomplete_precision_mechanism').loops(5)

  // Generation is New Age's: TFMG generators disabled
  event.remove({output: 'tfmg:generator'})

  // Make cinder blocks from red concrete
  event.remove({id: 'tfmg:compacting/cinderflourblock'})
  event.recipes.create.cutting(
    'tfmg:cinderflourblock',
    'tfmg:red_concrete'
  )
  swapInputs(event, [
    ['tfmg:crafting/materials/cinderflour_block', 'minecraft:nether_wart_block', 'tfmg:liquid_concrete_bucket'],
    ['tfmg:crafting/materials/lithium_blade', 'tfmg:steel_sword', 'tfc:metal/sword/steel']
  ])

  event.shaped('tfmg:lead_flywheel', 
    [ 'III',
      'ISI',
      'III'
    ], 
    {I: 'tfc_metallurgy:metal/ingot/lead', S: 'create:shaft'}
  )

  event.shaped('tfmg:nickel_flywheel',
    [ 'III',
      'ISI',
      'III'
    ],
    {I: 'tfc:metal/ingot/nickel', S: 'create:shaft'}
  )

  // TFMG items that used generic plastic
  swapInputs(event, [
    ['tfmg:crafting/materials/empty_circuit_board', 'tfmg:plastic_sheet', 'chemica:cured_epoxy_sheet'],
    ['tfmg:crafting/materials/cooling_fluid_bottle', 'tfmg:plastic_sheet', 'chemica:polyethylene_sheet'],
    ['tfmg:crafting/materials/lithium_charge', 'tfmg:plastic_sheet', 'chemica:polyethylene_sheet']
  ])
  // Generic plastic production (replaced by Chemica plastics)
  ;['tfmg:casting/plastic_sheet', 'tfmg:crafting/materials/plastic_block', 'tfmg:crafting/materials/plastic_sheet',
    'tfmg:melting/melt_plastic_ingot', 'tfmg:vat/plastic_from_ethylene', 'tfmg:vat/plastic_from_propylene']
    .forEach(id => event.remove({ id: id }))

  event.remove({id: 'tfmg:crafting/materials/coke_oven'})
  event.recipes.shaped('9x tfmg:coke_oven', [
    'RRR',
    'RIR',
    'RRR'
  ], {
    R: 'tfc_items:stainless_steel_rivet',
    I: 'create:industrial_iron_block'
  })
  event.replaceInput('tfmg:crafting/materials/air_intake', 'create:industrial_iron_block', 'createdeco:industrial_iron_sheet')

  // Blast furnace reinforcement
  event.remove({id: 'tfmg:crafting/materials/blast_furnace_reinforcement'})
  const reinforcementTransitional = 'kubejs:incomplete_blast_furnace_reinforcement'
  event.recipes.create.sequenced_assembly(
    ['2x tfmg:blast_furnace_reinforcement'],
    'tfmg:fireproof_bricks',
    [
      event.recipes.createDeploying(reinforcementTransitional, [reinforcementTransitional, 'tfc_items:steel_heavy_sheet']),
      event.recipes.createDeploying(reinforcementTransitional, [reinforcementTransitional, 'tfc_items:steel_rivet']),
      event.recipes.createDeploying(reinforcementTransitional, [reinforcementTransitional, 'tfc_items:steel_rivet']),
      event.recipes.createDeploying(reinforcementTransitional, [reinforcementTransitional, 'tfc_items:steel_rivet']),
      event.recipes.createDeploying(reinforcementTransitional, [reinforcementTransitional, 'tfc_items:steel_rivet']),
      event.recipes.createPressing(reinforcementTransitional, reinforcementTransitional),
      event.recipes.createFilling(reinforcementTransitional, [reinforcementTransitional, Fluid.of('tfmg:creosote', 1000)])
    ]
  ).transitionalItem(reinforcementTransitional)

  // Chemical vats: riveted frame with a corrosion-resistant lining
  event.remove({id: 'tfmg:crafting/materials/cast_iron_chemical_vat'})
  event.remove({id: 'tfmg:crafting/materials/steel_chemical_vat'})
  // Cast iron: lined with pewter (hard lead)
  event.recipes.create.mechanical_crafting(
    'tfmg:cast_iron_chemical_vat',
    [' RCR ', 'RL LR', 'C T C', 'RL LR', ' RCR '],
    {
      C: 'tfc:metal/sheet/cast_iron',
      R: 'tfc_items:cast_iron_rivet',
      L: 'tfc_metallurgy:metal/sheet/pewter',
      T: 'tfmg:cast_iron_fluid_tank'
    }
  )
  // Steel: stainless steel shell, lined with molybdenum and tantalum
  event.recipes.create.mechanical_crafting(
    '2x tfmg:steel_chemical_vat',
    [' RSR ', 'RM MR', 'S T S', 'RA AR', ' RSR '],
    {
      S: 'firmalife:metal/sheet/stainless_steel',
      R: 'tfc_items:stainless_steel_rivet',
      M: 'tfc_metallurgy:metal/sheet/molybdenum',
      A: 'tfc_metallurgy:metal/sheet/tantalum',
      T: 'tfmg:steel_fluid_tank'
    }
  )
})
