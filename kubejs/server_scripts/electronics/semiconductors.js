// Semiconductors: silicon refining, wafers, doping and devices
ServerEvents.recipes(event => {
  // Semiconductor recipes using TFC materials
  event.remove({id: 'tfmg:mixing/n_semiconductor'})
  event.remove({id: 'tfmg:mixing/p_semiconductor'})
  event.recipes.create.mixing(
    'tfmg:n_semiconductor',
    ['kubejs:polysilicon', 'chemica:phosphorus_dust']
  )
  event.custom({
    type: 'create:mixing',
    ingredients: [
      {item: 'kubejs:polysilicon'},
      fluidIn('tfc_metallurgy:metal/boron', 50)
    ],
    results: [{id: 'tfmg:p_semiconductor'}],
    heat_requirement: 'heated'
  })

  // Daylight sensor: a p-n photodiode in a wooden housing behind a lens
  event.remove({id: 'minecraft:daylight_detector'})
  const photodiode = 'kubejs:incomplete_daylight_detector'
  event.recipes.create.sequenced_assembly(
    ['minecraft:daylight_detector'],
    Ingredient.of('#minecraft:wooden_slabs'),
    [
      event.recipes.create.deploying(photodiode, [photodiode, 'tfmg:p_semiconductor']),
      event.recipes.create.deploying(photodiode, [photodiode, 'tfmg:n_semiconductor']),
      event.recipes.create.deploying(photodiode, [photodiode, Ingredient.of('#c:wires/copper')]),
      event.recipes.create.filling(photodiode, [photodiode, Fluid.of('tfc_metallurgy:metal/solder', 10)]),
      event.recipes.create.deploying(photodiode, [photodiode, 'tfc:lens']),
      event.recipes.create.pressing(photodiode, photodiode)
    ]
  ).transitionalItem(photodiode).loops(1)

  //Blasting recipes

  // Replace silicon industrial blasting input with silica sand
  event.remove({id: 'tfmg:industrial_blasting/silicon'})
  event.custom({
    type: 'tfmg:industrial_blasting',
    ingredients: [{tag: 'c:sands/silica'}],
    processing_time: 5,
    results: [{amount: 40, id: 'tfmg:liquid_silicon'}]
  })
})

ServerEvents.recipes(event => {
  // Polysilicon (Siemens process)
  event.custom({
    type: 'create:mixing',
    ingredients: [
      { item: 'tfmg:silicon_ingot' },
      fluidIn('chemica:hydrochloric_acid', 300)
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
      fluidIn('kubejs:trichlorosilane', 250),
      fluidIn('tfmg:hydrogen', 50)
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
      fluidIn('kubejs:trichlorosilane', 1000),
      fluidIn('tfmg:hydrogen', 200)
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
      fluidIn('chemica:argon', 25)
    ],
    processing_time: 800,
    energy: 800 * 30000,
    results: [{ id: 'kubejs:monocrystalline_silicon' }]
  }).id('kubejs:solarpunk/vat/monocrystalline_silicon')

  // Wafers (wire saw)
  event.recipes.create.cutting('8x kubejs:silicon_wafer', 'kubejs:monocrystalline_silicon').id('kubejs:solarpunk/cutting/silicon_wafer')

  // Ion implantation: a low-energy beam of boron, phosphorus or arsenic ions dopes monocrystalline wafers
  ;[['boron', 'tfc_metallurgy:metal/dust/boron', 'tfmg:p_semiconductor'],
    ['phosphorus', 'chemica:phosphorus_dust', 'tfmg:n_semiconductor'],
    ['arsenic', 'chemica:arsenic_dust', 'tfmg:n_semiconductor']].forEach(([dopant, dust, result]) => event.custom({
    type: 'solarpunk:particle_accelerator',
    ingredients: [{ item: 'kubejs:silicon_wafer', count: 4 }, { item: dust, count: 1 }],
    min_diameter: 9,
    min_speed: 64,
    processing_time: 400,
    stress: 8192.0,
    result: { id: result, count: 4 }
  }).id('kubejs:solarpunk/particle_accelerator/' + dopant + '_implantation'))
})
