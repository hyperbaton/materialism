// Special alloys: high alloy steel and tungsten carbide
ServerEvents.recipes(event => {
  // High alloy steel
  event.custom({
    type: 'tfmg:vat',
    allowed_vat_types: ['tfmg:fireproof'],
    machines: ['tfmg:graphite_electrode', 'tfmg:graphite_electrode', 'tfmg:graphite_electrode'],
    min_size: 9,
    min_current: 7,
    temperature: 1300,
    ingredients: [
      fluidIn('tfc:metal/weak_steel', 200),
      fluidIn('firmalife:metal/chromium', 40),
      fluidIn('tfc_metallurgy:metal/molybdenum', 40),
      fluidIn('kubejs:nitrogen', 20),
      {item: 'tfc_metallurgy:metal/dust/vanadium'},
      {item: 'tfc_metallurgy:metal/dust/manganese'},
      {item: 'tfc_metallurgy:metal/dust/cobalt'},
      {item: 'tfc_metallurgy:metal/dust/niobium'}
    ],
    processing_time: 600,
    results: [{amount: 300, id: 'tfc_metallurgy:metal/high_alloy_steel'}]
  })

  // Tungsten carbide
  event.custom({
    type: 'tfmg:vat',
    allowed_vat_types: ['tfmg:fireproof'],
    temperature: 1200,
    ingredients: [
      {item: 'tfc_metallurgy:metal/dust/tungsten'},
      {item: 'tfc_metallurgy:metal/dust/tungsten'},
      {item: 'tfc:powder/graphite'},
      {item: 'tfc_metallurgy:metal/dust/cobalt'}
    ],
    processing_time: 400,
    results: [{count: 2, id: 'chemica:tungsten_carbide_dust'}]
  })
})
