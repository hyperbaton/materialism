// Industrial gases: air separation, water electrolysis and deuterium
ServerEvents.recipes(event => {
  // Air separation: compress and cool air into liquid air, then split it in a distillation tower.
  event.custom({
    type: 'vintageimprovements:pressurizing',
    ingredients: [
      fluidIn('tfmg:air', 1000)
    ],
    secondary_fluid_input: {id: 'tfmg:cooling_fluid', amount: 100},
    results: [{id: 'kubejs:liquid_air', amount: 200}],
    processing_time: 400
  })
  // Linde cycle alternative: a compressor and four freezers under a big steel vat, no coolant but a lot of power (75 ohm each, 10 A = 7.5 kW)
  event.custom({
    type: 'tfmg:vat',
    allowed_vat_types: ['tfmg:steel'],
    machines: ['tfmg:compressor', 'tfmg:freezer', 'tfmg:freezer', 'tfmg:freezer', 'tfmg:freezer'],
    min_size: 27,
    heat_level: -4,
    pressure: 1,
    min_current: 10,
    energy: 1200 * 30000,
    ingredients: [
      fluidIn('tfmg:air', 2000)
    ],
    processing_time: 600,
    results: [{id: 'kubejs:liquid_air', amount: 400}]
  }).id('kubejs:vat/liquid_air_refrigerated')
  // Layers fill bottom to top, from the highest to the lowest boiling point
  event.custom({
    type: 'tfmg:distillation',
    ingredients: [
      fluidIn('kubejs:liquid_air', 200)
    ],
    results: [
      {amount: 6, id: 'tfmg:carbon_dioxide'},
      {amount: 44, id: 'kubejs:oxygen'},
      {amount: 4, id: 'chemica:argon'},
      {amount: 142, id: 'kubejs:nitrogen'},
      {amount: 2, id: 'tfmg:neon'},
      {amount: 2, id: 'chemica:helium'}
    ]
  })

  // Water electrolysis in a vat: 2 H2O -> 2 H2 + O2 (hydrogen volume is twice the oxygen's).
  // Pure water barely conducts, so the plain recipe is very slow; an electrolyte or a catalyst speeds it up.
  // Corrosive salt water wears the electrodes and yields less, and the acid is partly consumed.
  // Graphite electrodes are 300 ohm, so current is voltage / 300 and each draws voltage^2 / 300 FE/t. The
  // 5 A floor (electrolysisMinimumCurrent) means 1500 V, which runs at half speed: full speed takes
  // electrolysisPower, about 2100 V across the two electrodes.
  const electrolysisPower = 30000
  const electrolysis = (ingredients, time, hydrogen, oxygen, options) => {
    options = options || {}
    event.custom({
      type: 'tfmg:vat',
      allowed_vat_types: ['tfmg:steel', 'tfmg:fireproof'],
      machines: ['tfmg:graphite_electrode', 'tfmg:graphite_electrode'],
      min_size: 1,
      ingredients: ingredients,
      processing_time: time,
      min_current: options.minCurrent || 5,
      energy: time * electrolysisPower,
      electrode_wear: options.wear || 0,
      results: [
        {amount: hydrogen, id: 'tfmg:hydrogen'},
        {amount: oxygen, id: 'kubejs:oxygen'}
      ].concat(options.extraResults || [])
    })
  }
  const water300 = fluidIn('minecraft:water', 300)

  // Pure water: very slow, and it takes the highest voltage to drive current through it
  electrolysis([water300], 1200, 200, 100, {minCurrent: 7})

  // Salt water: the dissolved sodium ions make it much faster, but the electrodes corrode, so less gas is collected
  electrolysis([fluidIn('tfc:salt_water', 300)], 300, 150, 75, {wear: 5})

  // Sulfuric acid: even faster at full yield, but a little acid is lost as mist
  electrolysis([water300, fluidIn('tfmg:sulfuric_acid', 20)], 150, 200, 100,
    {extraResults: [{amount: 16, id: 'tfmg:sulfuric_acid'}]})

  // Metal dust catalysts: the cheaper the metal, the slower it is, the more current it needs and
  // the likelier it is to be used up
  const electrolysisCatalysts = [
    {dust: 'kubejs:metal/dust/iron', time: 500, keep: 0.85, minCurrent: 6},
    {dust: 'kubejs:metal/dust/nickel', time: 350, keep: 0.92, minCurrent: 5},
    {dust: 'tfc_metallurgy:metal/dust/platinum', time: 200, keep: 0.98, minCurrent: 5}
  ]
  electrolysisCatalysts.forEach(catalyst => {
    electrolysis([water300, {item: catalyst.dust}], catalyst.time, 200, 100,
      {minCurrent: catalyst.minCurrent, extraResults: [{chance: catalyst.keep, id: catalyst.dust}]})
  })
})

ServerEvents.recipes(event => {
  // Deuterium: cryogenic distillation of liquid hydrogen
  event.remove({ id: 'solarpunk:mixing/water_to_deuterium' })
  event.custom({
    type: 'tfmg:distillation',
    ingredients: [fluidIn('chemica:liquid_hydrogen', 1000)],
    results: [
      { id: 'tfmg:hydrogen', amount: 975 },
      { id: 'solarpunk:deuterium', amount: 25 }
    ]
  }).id('kubejs:solarpunk/distillation/deuterium')
})
