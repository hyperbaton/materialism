// Arsenic from cobaltite roasting: wood preservative and shot hardening (doping and glass fining live with their chains)
ServerEvents.recipes(event => {
  const id = name => 'kubejs:arsenic/' + name

  // Chromated copper arsenate: copper sulfate, chromium and arsenic dissolved in water
  event.custom({
    type: 'create:mixing',
    ingredients: [
      { item: 'vintageimprovements:copper_sulfate' },
      { item: 'chemica:chromium_dust' },
      { item: 'chemica:arsenic_dust' },
      fluidIn('minecraft:water', 1000)
    ],
    results: [{ id: 'kubejs:chromated_copper_arsenate', amount: 1000 }]
  }).id(id('mixing/chromated_copper_arsenate'))
  // Pressure-treated planks, the waterborne alternative to creosote
  event.custom({
    type: 'create:filling',
    ingredients: [{ tag: 'minecraft:planks' }, fluidIn('kubejs:chromated_copper_arsenate', 250)],
    results: [{ id: 'tfmg:hardened_planks' }]
  }).id(id('filling/hardened_planks'))

  // Sodium arsenite: arsenic dissolved in caustic soda, the sprinkler herbicide
  event.custom({
    type: 'create:mixing',
    ingredients: [
      { item: 'chemica:arsenic_dust' },
      fluidIn('chemica:caustic_soda', 250)
    ],
    results: [{ id: 'kubejs:sodium_arsenite', amount: 250 }]
  }).id(id('mixing/sodium_arsenite'))

  // Lead shot: a pinch of arsenic lets molten lead drops form round balls
  event.custom({
    type: 'create:mixing',
    ingredients: [
      { item: 'chemica:arsenic_dust' },
      fluidIn('tfc_metallurgy:metal/lead', 100)
    ],
    results: [{ id: 'createbigcannons:shot_balls', count: 2 }]
  }).id(id('mixing/lead_shot_balls'))
})
