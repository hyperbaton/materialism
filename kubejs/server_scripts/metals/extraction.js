// Industrial extraction of metals (design: docs/metallurgy/EXTRACTION_REDESIGN.md)
// Each powder, salt, oxide or sponge holds 5-10 mB of metal; ore grades crush into 2/3/5/7 powders.
TFCEvents.data(event => {
  ;['aluminum_hydroxide', 'ammonium_paratungstate', 'boric_acid', 'ammonium_chloroplatinate', 'spodumene',
    'ammonium_fluoroberyllate', 'niobium_hydroxide'].forEach(item =>
    event.heat({ ingredient: { item: 'kubejs:powder/' + item }, heat_capacity: 1.0 }))
  event.heat({ ingredient: { item: 'tfcvolcanoes:mineral/powder/magnesite' }, heat_capacity: 1.0 })
  event.heat({ ingredient: { item: 'kubejs:zirconium_sponge' }, heat_capacity: 0.5 })
  event.heat({ ingredient: { item: 'kubejs:platinum_sponge' }, heat_capacity: 0.5 })
})

ServerEvents.recipes(event => {
  const id = name => 'kubejs:extraction/' + name
  const grades = [['small', 2], ['poor', 3], ['normal', 5], ['rich', 7]]
  const power = 30000

  // Bauxite and rutile no longer reduce by plain heat; the bloomery keeps reading rutile's melt
  grades.forEach(([grade, powder]) => {
    event.remove({ id: `tfc_metallurgy:heating/ore/${grade}_bauxite` })
    event.custom({
      type: 'tfc:heating',
      ingredient: { item: `tfc_metallurgy:ore/${grade}_bauxite` },
      result_fluid: { id: 'tfc_metallurgy:metal/aluminum', amount: powder },
      temperature: 1600
    }).id(id(`heating/${grade}_bauxite`))
    event.remove({ id: `tfc_metallurgy:heating/ore/${grade}_rutile` })
    event.custom({
      type: 'tfc:heating',
      ingredient: { item: `tfc_metallurgy:ore/${grade}_rutile` },
      result_fluid: { id: 'tfc_metallurgy:metal/titanium', amount: { small: 10, poor: 15, normal: 25, rich: 35 }[grade] },
      temperature: 2500
    }).id(id(`heating/${grade}_rutile`))
    event.recipes.create.crushing([`${powder}x kubejs:powder/bauxite`], `tfc_metallurgy:ore/${grade}_bauxite`).id(id(`crushing/${grade}_bauxite`))
    event.recipes.create.crushing([`${powder}x chemica:rutile_dust`], `tfc_metallurgy:ore/${grade}_rutile`).id(id(`crushing/${grade}_rutile`))
  })
  event.recipes.create.crushing(['20x kubejs:powder/bauxite'], 'tfmg:bauxite').id(id('crushing/bauxite_block'))

  // Old shortcuts: raw bauxite electrolysis and Chemica's titanium chain
  event.remove({ id: 'tfmg:vat/aluminum' })
  event.remove({ id: /^(chemica:|kubejs:chemica\/)vat_machine_recipe\/(vat_reaction\/titanium_(tetrachloride.*|dust)|arc_furnace_titanium)$/ })

  // Bayer digestion: bauxite dissolved in hot caustic soda, iron oxides left as red mud
  event.custom({
    type: 'vintageimprovements:pressurizing',
    ingredients: [
      { item: 'kubejs:powder/bauxite' }, { item: 'kubejs:powder/bauxite' },
      { item: 'kubejs:powder/bauxite' }, { item: 'kubejs:powder/bauxite' },
      fluidIn('chemica:caustic_soda', 500)
    ],
    results: [{ id: 'kubejs:sodium_aluminate', amount: 500 }, { id: 'tfc:mud/oxisol' }],
    heat_requirement: 'heated',
    processing_time: 200
  }).id(id('pressurizing/bayer_digestion'))
  // Cooled liquor precipitates the hydroxide and gives most of the caustic soda back
  event.custom({
    type: 'tfmg:vat',
    allowed_vat_types: ['tfmg:steel', 'tfmg:fireproof'],
    machines: ['tfmg:freezer'],
    min_size: 1,
    ingredients: [fluidIn('kubejs:sodium_aluminate', 500)],
    processing_time: 200,
    results: [
      { id: 'kubejs:powder/aluminum_hydroxide', count: 4 },
      { id: 'chemica:caustic_soda', amount: 475 }
    ]
  }).id(id('vat/aluminum_hydroxide'))
  // Calcination: 2 Al(OH)3 -> Al2O3 + 3 H2O
  event.custom({
    type: 'tfc:heating',
    ingredient: { item: 'kubejs:powder/aluminum_hydroxide' },
    result_item: { id: 'kubejs:powder/alumina', count: 1 },
    temperature: 1100
  }).id(id('heating/alumina'))
  // Hall–Héroult cell: alumina in a cryolite bath, carbon anodes burn away as CO2
  event.custom({
    type: 'tfmg:vat',
    allowed_vat_types: ['tfmg:fireproof'],
    machines: ['tfmg:graphite_electrode', 'tfmg:graphite_electrode'],
    min_size: 4,
    temperature: 960,
    min_current: 6,
    energy: 150 * power,
    electrode_wear: 3,
    ingredients: [
      { item: 'kubejs:powder/alumina' }, { item: 'kubejs:powder/alumina' },
      { item: 'kubejs:powder/alumina' }, { item: 'tfc:ore/cryolite' }
    ],
    processing_time: 150,
    results: [
      { id: 'tfc_metallurgy:metal/aluminum', amount: 15 },
      { id: 'tfc:ore/cryolite', chance: 0.95 },
      { id: 'tfmg:carbon_dioxide', amount: 25 }
    ]
  }).id(id('vat/hall_heroult'))

  // Carbochlorination: TiO2 + 2 Cl2 + C -> TiCl4 + CO2; tantalum-lined steel resists chlorine
  event.custom({
    type: 'tfmg:vat',
    allowed_vat_types: ['tfmg:steel', 'tfmg:fireproof'],
    machines: ['tfmg:mixer'],
    min_size: 1,
    temperature: 900,
    ingredients: [
      { item: 'chemica:rutile_dust' }, { item: 'chemica:rutile_dust' },
      { item: 'tfmg:coal_coke_dust' },
      fluidIn('chemica:chlorine', 500)
    ],
    processing_time: 200,
    results: [
      { id: 'chemica:titanium_tetrachloride', amount: 250 },
      { id: 'tfmg:carbon_dioxide', amount: 50 }
    ]
  }).id(id('vat/carbochlorination'))
  // Kroll reduction under argon: TiCl4 + 2 Mg -> Ti + 2 MgCl2
  event.custom({
    type: 'tfmg:vat',
    allowed_vat_types: ['tfmg:steel', 'tfmg:fireproof'],
    min_size: 1,
    temperature: 850,
    ingredients: [
      fluidIn('chemica:titanium_tetrachloride', 500),
      fluidIn('tfc_metallurgy:metal/magnesium', 20),
      fluidIn('chemica:argon', 50)
    ],
    processing_time: 400,
    results: [
      { id: 'kubejs:crude_titanium_sponge', count: 2 },
      { id: 'kubejs:magnesium_chloride', amount: 500 }
    ]
  }).id(id('vat/kroll'))
  // Molten salt electrolysis returns the magnesium and chlorine to the loop
  event.custom({
    type: 'tfmg:vat',
    allowed_vat_types: ['tfmg:fireproof'],
    machines: ['tfmg:graphite_electrode', 'tfmg:graphite_electrode'],
    min_size: 1,
    temperature: 750,
    min_current: 6,
    energy: 200 * power,
    electrode_wear: 1,
    ingredients: [fluidIn('kubejs:magnesium_chloride', 500)],
    processing_time: 200,
    results: [
      { id: 'tfc_metallurgy:metal/magnesium', amount: 20 },
      { id: 'chemica:chlorine', amount: 1000 }
    ]
  }).id(id('vat/magnesium_chloride_electrolysis'))
  // Vacuum distillation strips the salt left in the sponge
  event.recipes.vintageimprovements.vacuumizing('kubejs:titanium_sponge', ['kubejs:crude_titanium_sponge']).id(id('vacuumizing/titanium_sponge'))
  // Sponge pressed into a consumable electrode, then vacuum arc remelted under argon
  event.recipes.create.compacting('kubejs:titanium_electrode', [Ingredient.of('kubejs:titanium_sponge', 10)]).id(id('compacting/titanium_electrode'))
  event.custom({
    type: 'tfmg:vat',
    allowed_vat_types: ['tfmg:fireproof'],
    machines: ['tfmg:graphite_electrode', 'tfmg:graphite_electrode', 'tfmg:graphite_electrode'],
    min_size: 6,
    temperature: 1700,
    min_current: 7,
    energy: 100 * power,
    ingredients: [{ item: 'kubejs:titanium_electrode' }, fluidIn('chemica:argon', 150)],
    processing_time: 100,
    results: [{ id: 'tfc_metallurgy:metal/titanium', amount: 100 }]
  }).id(id('vat/titanium_remelting'))

  // Ore crushing for the tungsten, boron and cobalt lines
  grades.forEach(([grade, powder]) => {
    event.recipes.create.crushing([`${powder}x kubejs:powder/wolframite`], `tfc_metallurgy:ore/${grade}_wolframite`).id(id(`crushing/${grade}_wolframite`))
    event.recipes.create.crushing([`${powder}x kubejs:powder/kernite`], `tfc_metallurgy:ore/${grade}_kernite`).id(id(`crushing/${grade}_kernite`))
    event.recipes.create.crushing([`${powder}x chemica:crushed_raw_cobalt`], `tfc_metallurgy:ore/${grade}_cobaltite`).id(id(`crushing/${grade}_cobaltite`))
  })

  // Tungsten: wolframite (FeWO4) dissolved in hot caustic soda, its iron left behind as oxide
  event.custom({
    type: 'vintageimprovements:pressurizing',
    ingredients: [
      { item: 'kubejs:powder/wolframite' }, { item: 'kubejs:powder/wolframite' },
      { item: 'kubejs:powder/wolframite' }, { item: 'kubejs:powder/wolframite' },
      fluidIn('chemica:caustic_soda', 500)
    ],
    results: [{ id: 'kubejs:sodium_tungstate', amount: 500 }, { id: 'tfc:powder/hematite', count: 2 }],
    heat_requirement: 'heated',
    processing_time: 200
  }).id(id('pressurizing/tungstate_digestion'))
  // Ammonium paratungstate crystallised from the acidified, ammoniated liquor
  event.custom({
    type: 'tfmg:vat',
    allowed_vat_types: ['tfmg:steel', 'tfmg:fireproof'],
    machines: ['tfmg:mixer'],
    min_size: 1,
    ingredients: [
      fluidIn('kubejs:sodium_tungstate', 500),
      fluidIn('chemica:ammonia', 125),
      fluidIn('chemica:hydrochloric_acid', 125)
    ],
    processing_time: 200,
    results: [
      { id: 'kubejs:powder/ammonium_paratungstate', count: 4 },
      { id: 'tfc:salt_water', amount: 500 }
    ]
  }).id(id('vat/ammonium_paratungstate'))
  // Calcination drives off ammonia and water, leaving the yellow oxide
  event.custom({
    type: 'tfc:heating',
    ingredient: { item: 'kubejs:powder/ammonium_paratungstate' },
    result_item: { id: 'kubejs:powder/tungsten_trioxide', count: 1 },
    temperature: 600
  }).id(id('heating/tungsten_trioxide'))
  // Hydrogen reduction: WO3 + 3 H2 -> W + 3 H2O
  event.custom({
    type: 'tfmg:vat',
    allowed_vat_types: ['tfmg:steel', 'tfmg:fireproof'],
    min_size: 1,
    temperature: 800,
    ingredients: [
      { item: 'kubejs:powder/tungsten_trioxide' }, { item: 'kubejs:powder/tungsten_trioxide' },
      { item: 'kubejs:powder/tungsten_trioxide' }, { item: 'kubejs:powder/tungsten_trioxide' },
      fluidIn('tfmg:hydrogen', 300)
    ],
    processing_time: 200,
    results: [
      { id: 'tfc_metallurgy:metal/dust/tungsten', count: 4 },
      { id: 'chemica:steam', amount: 300 }
    ]
  }).id(id('vat/tungsten_reduction'))
  // Powder metallurgy: pressed bar sintered by current through it under hydrogen; tungsten is never cast
  event.recipes.create.compacting('kubejs:tungsten_green_bar', [Ingredient.of('tfc_metallurgy:metal/dust/tungsten', 20)]).id(id('compacting/tungsten_green_bar'))
  event.custom({
    type: 'tfmg:vat',
    allowed_vat_types: ['tfmg:fireproof'],
    machines: ['tfmg:graphite_electrode', 'tfmg:graphite_electrode'],
    min_size: 1,
    temperature: 1200,
    min_current: 8,
    energy: 200 * power,
    ingredients: [{ item: 'kubejs:tungsten_green_bar' }, fluidIn('tfmg:hydrogen', 100)],
    processing_time: 200,
    results: [{ id: 'tfc_metallurgy:metal/ingot/tungsten' }]
  }).id(id('vat/tungsten_sintering'))

  // Boron: kernite + sulfuric acid -> boric acid (sodium sulfate stays in solution)
  event.custom({
    type: 'tfmg:vat',
    allowed_vat_types: ['tfmg:steel', 'tfmg:fireproof'],
    machines: ['tfmg:mixer'],
    min_size: 1,
    temperature: 90,
    ingredients: [
      { item: 'kubejs:powder/kernite' }, { item: 'kubejs:powder/kernite' },
      { item: 'kubejs:powder/kernite' }, { item: 'kubejs:powder/kernite' },
      fluidIn('minecraft:water', 500),
      fluidIn('tfmg:sulfuric_acid', 125)
    ],
    processing_time: 200,
    results: [{ id: 'kubejs:powder/boric_acid', count: 4 }]
  }).id(id('vat/boric_acid'))
  // Dehydration: 2 H3BO3 -> B2O3 + 3 H2O
  event.custom({
    type: 'tfc:heating',
    ingredient: { item: 'kubejs:powder/boric_acid' },
    result_item: { id: 'kubejs:powder/boron_trioxide', count: 1 },
    temperature: 300
  }).id(id('heating/boron_trioxide'))
  // Moissan reduction: B2O3 + 3 Mg -> 2 B + 3 MgO
  event.custom({
    type: 'tfmg:vat',
    allowed_vat_types: ['tfmg:fireproof'],
    min_size: 1,
    temperature: 1000,
    ingredients: [
      { item: 'kubejs:powder/boron_trioxide' }, { item: 'kubejs:powder/boron_trioxide' },
      { item: 'tfc_metallurgy:metal/dust/magnesium' }, { item: 'tfc_metallurgy:metal/dust/magnesium' }
    ],
    processing_time: 200,
    results: [
      { id: 'tfc_metallurgy:metal/dust/boron', count: 2 },
      { id: 'kubejs:powder/magnesia', count: 2 }
    ]
  }).id(id('vat/boron_reduction'))
  // Boron melts above any forge, so the arc furnace does it under argon
  event.custom({
    type: 'tfmg:vat',
    allowed_vat_types: ['tfmg:fireproof'],
    machines: ['tfmg:graphite_electrode', 'tfmg:graphite_electrode', 'tfmg:graphite_electrode'],
    min_size: 6,
    temperature: 1700,
    min_current: 7,
    energy: 50 * power,
    ingredients: [
      { item: 'tfc_metallurgy:metal/dust/boron' }, { item: 'tfc_metallurgy:metal/dust/boron' },
      { item: 'tfc_metallurgy:metal/dust/boron' }, { item: 'tfc_metallurgy:metal/dust/boron' },
      fluidIn('chemica:argon', 50)
    ],
    processing_time: 50,
    results: [{ id: 'tfc_metallurgy:metal/boron', amount: 20 }]
  }).id(id('vat/boron_melting'))

  // Cobalt: roasting cobaltite (CoAsS) drives off sulfur as SO2 and arsenic as white arsenic fume, then sulfuric acid leaches the calcine
  event.remove({ id: 'chemica:blasting/crushed_raw_cobalt' })
  event.custom({
    type: 'vintageimprovements:pressurizing',
    ingredients: [{ item: 'chemica:crushed_raw_cobalt' }, fluidIn('kubejs:oxygen', 100)],
    results: [{ id: 'kubejs:powder/roasted_cobaltite' }, { id: 'chemica:arsenic_dust', chance: 0.5 },
      { id: 'vintageimprovements:sulfur_dioxide', amount: 100 }],
    heat_requirement: 'heated',
    processing_time: 100
  }).id(id('pressurizing/cobaltite_roasting'))
  event.custom({
    type: 'tfmg:vat',
    allowed_vat_types: ['tfmg:steel', 'tfmg:fireproof'],
    machines: ['tfmg:mixer'],
    min_size: 1,
    ingredients: [
      { item: 'kubejs:powder/roasted_cobaltite' }, { item: 'kubejs:powder/roasted_cobaltite' },
      { item: 'kubejs:powder/roasted_cobaltite' }, { item: 'kubejs:powder/roasted_cobaltite' },
      fluidIn('tfmg:sulfuric_acid', 300)
    ],
    processing_time: 200,
    results: [{ id: 'tfc_metallurgy:metal/dust/cobalt', count: 4 }]
  }).id(id('vat/cobalt_leaching'))

  // Platinum: aqua regia dissolves it; osmiridium stays behind as a residue
  const aquaRegia = { small: 150, poor: 250, normal: 400, rich: 550 }
  grades.forEach(([grade, units]) => {
    event.custom({
      type: 'tfmg:vat',
      allowed_vat_types: ['tfmg:steel', 'tfmg:fireproof'],
      machines: ['tfmg:mixer'],
      min_size: 1,
      temperature: 80,
      ingredients: [
        { item: `tfc_metallurgy:ore/${grade}_native_platinum` },
        fluidIn('chemica:nitric_acid', aquaRegia[grade]),
        fluidIn('chemica:hydrochloric_acid', aquaRegia[grade])
      ],
      processing_time: 100 + 20 * units,
      results: [
        { id: 'kubejs:chloroplatinic_acid', amount: 125 * units },
        { id: 'kubejs:powder/native_iridium', chance: 0.25 }
      ]
    }).id(id(`vat/${grade}_platinum_leaching`))
  })
  // Ammonia precipitates the platinum as its yellow ammonium salt
  event.custom({
    type: 'tfmg:vat',
    allowed_vat_types: ['tfmg:steel', 'tfmg:fireproof'],
    machines: ['tfmg:mixer'],
    min_size: 1,
    ingredients: [fluidIn('kubejs:chloroplatinic_acid', 500), fluidIn('chemica:ammonia', 100)],
    processing_time: 200,
    results: [{ id: 'kubejs:powder/ammonium_chloroplatinate', count: 4 }]
  }).id(id('vat/ammonium_chloroplatinate'))
  // Calcining the salt leaves platinum sponge, which the forge can melt
  event.custom({
    type: 'tfc:heating',
    ingredient: { item: 'kubejs:powder/ammonium_chloroplatinate' },
    result_item: { id: 'kubejs:platinum_sponge', count: 1 },
    temperature: 900
  }).id(id('heating/platinum_sponge'))
  event.custom({
    type: 'tfc:heating',
    ingredient: { item: 'kubejs:platinum_sponge' },
    result_fluid: { id: 'tfc_metallurgy:metal/platinum', amount: 5 },
    temperature: 1770
  }).id(id('heating/platinum_sponge_melting'))

  // Iridium and osmium: native osmiridium resists aqua regia
  event.remove({ id: 'chemica:blasting/iridium_dust' })
  grades.forEach(([grade, powder]) => {
    event.recipes.create.crushing([`${powder}x kubejs:powder/native_iridium`], `tfc_metallurgy:ore/${grade}_native_iridium`).id(id(`crushing/${grade}_native_iridium`))
    event.recipes.create.crushing([`${powder}x kubejs:powder/native_osmium`], `tfc_metallurgy:ore/${grade}_native_osmium`).id(id(`crushing/${grade}_native_osmium`))
  })
  // Oxidising alkaline fusion, then chlorine: osmium leaves as volatile OsO4, iridium stays as chloride
  ;[['native_iridium', 200, 100], ['native_osmium', 100, 200]].forEach(([ore, iridium, osmium]) => {
    event.custom({
      type: 'tfmg:vat',
      allowed_vat_types: ['tfmg:fireproof'],
      machines: ['tfmg:mixer'],
      min_size: 1,
      temperature: 700,
      ingredients: [
        { item: `kubejs:powder/${ore}` }, { item: `kubejs:powder/${ore}` }, { item: `kubejs:powder/${ore}` },
        { item: 'tfc:powder/saltpeter' },
        fluidIn('chemica:caustic_soda', 300),
        fluidIn('chemica:chlorine', 300)
      ],
      processing_time: 300,
      results: [
        { id: 'kubejs:iridium_chloride', amount: iridium },
        { id: 'kubejs:osmium_tetroxide', amount: osmium }
      ]
    }).id(id(`vat/${ore}_fusion`))
  })
  // OsO4 + 4 H2 -> Os + 4 H2O
  event.custom({
    type: 'tfmg:vat',
    allowed_vat_types: ['tfmg:steel', 'tfmg:fireproof'],
    min_size: 1,
    temperature: 400,
    ingredients: [fluidIn('kubejs:osmium_tetroxide', 400), fluidIn('tfmg:hydrogen', 400)],
    processing_time: 200,
    results: [
      { id: 'tfc_metallurgy:metal/dust/osmium', count: 4 },
      { id: 'chemica:steam', amount: 400 }
    ]
  }).id(id('vat/osmium_reduction'))
  // Iridium precipitated as its ammonium salt, then reduced by hydrogen
  event.custom({
    type: 'tfmg:vat',
    allowed_vat_types: ['tfmg:steel', 'tfmg:fireproof'],
    machines: ['tfmg:mixer'],
    min_size: 1,
    ingredients: [fluidIn('kubejs:iridium_chloride', 400), fluidIn('chemica:ammonia', 100)],
    processing_time: 200,
    results: [{ id: 'kubejs:powder/ammonium_hexachloroiridate', count: 4 }]
  }).id(id('vat/ammonium_hexachloroiridate'))
  event.custom({
    type: 'tfmg:vat',
    allowed_vat_types: ['tfmg:steel', 'tfmg:fireproof'],
    min_size: 1,
    temperature: 800,
    ingredients: [
      { item: 'kubejs:powder/ammonium_hexachloroiridate' }, { item: 'kubejs:powder/ammonium_hexachloroiridate' },
      { item: 'kubejs:powder/ammonium_hexachloroiridate' }, { item: 'kubejs:powder/ammonium_hexachloroiridate' },
      fluidIn('tfmg:hydrogen', 200)
    ],
    processing_time: 200,
    results: [
      { id: 'tfc_metallurgy:metal/dust/iridium', count: 4 },
      { id: 'chemica:hydrochloric_acid', amount: 200 }
    ]
  }).id(id('vat/iridium_reduction'))
  // These melt far above any forge: arc furnace under argon
  ;['iridium', 'osmium', 'niobium', 'tantalum'].forEach(metal => {
    const dust = { item: `tfc_metallurgy:metal/dust/${metal}` }
    event.custom({
      type: 'tfmg:vat',
      allowed_vat_types: ['tfmg:fireproof'],
      machines: ['tfmg:graphite_electrode', 'tfmg:graphite_electrode', 'tfmg:graphite_electrode'],
      min_size: 6,
      temperature: 1700,
      min_current: 7,
      energy: 60 * power,
      ingredients: [dust, dust, dust, dust, fluidIn('chemica:argon', 50)],
      processing_time: 60,
      results: [{ id: `tfc_metallurgy:metal/${metal}`, amount: 20 }]
    }).id(id(`vat/${metal}_melting`))
  })

  // Thorium: monazite digested in hot caustic soda; the phosphate crystallises from the liquor as trisodium phosphate
  event.custom({
    type: 'vintageimprovements:pressurizing',
    ingredients: [
      { item: 'kubejs:powder/monazite' }, { item: 'kubejs:powder/monazite' },
      { item: 'kubejs:powder/monazite' }, { item: 'kubejs:powder/monazite' },
      fluidIn('chemica:caustic_soda', 500)
    ],
    results: [
      { id: 'kubejs:powder/rare_earth_hydroxide', count: 4 },
      { id: 'kubejs:powder/trisodium_phosphate', count: 2 }
    ],
    heat_requirement: 'heated',
    processing_time: 200
  }).id(id('pressurizing/monazite_digestion'))
  // Sulfuric acid frees phosphoric acid from the phosphate, for fertilizers and the rest of the chemistry
  event.custom({
    type: 'tfmg:vat',
    allowed_vat_types: ['tfmg:cast_iron', 'tfmg:steel', 'tfmg:fireproof'],
    machines: ['tfmg:mixer'],
    min_size: 1,
    ingredients: [
      { item: 'kubejs:powder/trisodium_phosphate' }, { item: 'kubejs:powder/trisodium_phosphate' },
      { item: 'kubejs:powder/trisodium_phosphate' }, { item: 'kubejs:powder/trisodium_phosphate' },
      fluidIn('tfmg:sulfuric_acid', 300),
      fluidIn('minecraft:water', 200)
    ],
    processing_time: 200,
    results: [{ id: 'chemica:phosphoric_acid', amount: 500 }]
  }).id(id('vat/phosphoric_acid_from_phosphate'))
  // Nitric acid dissolves the hydroxides; separation splits thorium from the rare earths
  event.custom({
    type: 'tfmg:vat',
    allowed_vat_types: ['tfmg:steel', 'tfmg:fireproof'],
    machines: ['tfmg:centrifuge'],
    min_size: 1,
    ingredients: [
      { item: 'kubejs:powder/rare_earth_hydroxide' }, { item: 'kubejs:powder/rare_earth_hydroxide' },
      { item: 'kubejs:powder/rare_earth_hydroxide' }, { item: 'kubejs:powder/rare_earth_hydroxide' },
      fluidIn('chemica:nitric_acid', 400)
    ],
    processing_time: 300,
    results: [
      { id: 'kubejs:thorium_nitrate', amount: 400 },
      { id: 'kubejs:powder/neodymium' },
      { id: 'kubejs:powder/neodymium', chance: 0.5 }
    ]
  }).id(id('vat/thorium_separation'))
  // Thermal denitration: the nitrate decomposes to thoria, releasing NO2
  event.custom({
    type: 'tfmg:vat',
    allowed_vat_types: ['tfmg:steel', 'tfmg:fireproof'],
    min_size: 1,
    temperature: 500,
    ingredients: [fluidIn('kubejs:thorium_nitrate', 400)],
    processing_time: 200,
    results: [
      { id: 'kubejs:powder/thoria', count: 4 },
      { id: 'chemica:nitrogen_dioxide', amount: 200 }
    ]
  }).id(id('vat/thoria'))
  // Hydrofluorination: ThO2 + 4 HF -> ThF4 + 2 H2O
  event.custom({
    type: 'tfmg:vat',
    allowed_vat_types: ['tfmg:fireproof'],
    min_size: 1,
    temperature: 500,
    ingredients: [
      { item: 'kubejs:powder/thoria' }, { item: 'kubejs:powder/thoria' },
      { item: 'kubejs:powder/thoria' }, { item: 'kubejs:powder/thoria' },
      fluidIn('chemica:hydrofluoric_acid', 400)
    ],
    processing_time: 200,
    results: [
      { id: 'kubejs:powder/thorium_tetrafluoride', count: 4 },
      { id: 'chemica:steam', amount: 200 }
    ]
  }).id(id('vat/thorium_tetrafluoride'))
  // Metallothermic reduction; the fluoride slag is discarded and the dust melts in a forge
  event.custom({
    type: 'tfmg:vat',
    allowed_vat_types: ['tfmg:fireproof'],
    min_size: 1,
    temperature: 900,
    ingredients: [
      { item: 'kubejs:powder/thorium_tetrafluoride' }, { item: 'kubejs:powder/thorium_tetrafluoride' },
      { item: 'tfc_metallurgy:metal/dust/magnesium' }, { item: 'tfc_metallurgy:metal/dust/magnesium' }
    ],
    processing_time: 200,
    results: [
      { id: 'tfc_metallurgy:metal/dust/thorium', count: 2 },
      { id: 'tfmg:slag' }
    ]
  }).id(id('vat/thorium_reduction'))

  // Second pass: magnesite and bertrandite smelt hot and poorly; spodumene and zircon don't smelt
  grades.forEach(([grade, powder]) => {
    ;[['magnesite', 'magnesium'], ['bertrandite', 'beryllium']].forEach(([ore, metal]) => {
      event.remove({ id: `tfc_metallurgy:heating/ore/${grade}_${ore}` })
      event.custom({
        type: 'tfc:heating',
        ingredient: { item: `tfc_metallurgy:ore/${grade}_${ore}` },
        result_fluid: { id: `tfc_metallurgy:metal/${metal}`, amount: powder },
        temperature: 1600
      }).id(id(`heating/${grade}_${ore}`))
    })
    ;['spodumene', 'bertrandite', 'zircon'].forEach(ore =>
      event.recipes.create.crushing([`${powder}x kubejs:powder/${ore}`], `tfc_metallurgy:ore/${grade}_${ore}`).id(id(`crushing/${grade}_${ore}`)))
  })
  event.remove({ id: /^tfc_metallurgy:heating\/ore\/(small|poor|normal|rich)_(spodumene|lithium|zircon)$/ })

  // Magnesium: calcine magnesite, chlorinate the magnesia, feed the molten salt to the electrolysis cell
  event.custom({
    type: 'tfc:heating',
    ingredient: { item: 'tfcvolcanoes:mineral/powder/magnesite' },
    result_item: { id: 'kubejs:powder/magnesia', count: 1 },
    temperature: 900
  }).id(id('heating/magnesia'))
  // MgO + C + Cl2 -> MgCl2 + CO
  event.custom({
    type: 'tfmg:vat',
    allowed_vat_types: ['tfmg:fireproof'],
    machines: ['tfmg:mixer'],
    min_size: 1,
    temperature: 800,
    ingredients: [
      { item: 'kubejs:powder/magnesia' }, { item: 'kubejs:powder/magnesia' },
      { item: 'kubejs:powder/magnesia' }, { item: 'kubejs:powder/magnesia' },
      fluidIn('chemica:chlorine', 1000)
    ],
    processing_time: 200,
    results: [
      { id: 'kubejs:magnesium_chloride', amount: 500 },
      { id: 'tfmg:carbon_dioxide', amount: 100 }
    ]
  }).id(id('vat/magnesia_chlorination'))

  // Lithium: decrepitate spodumene, acid roast, precipitate the carbonate, electrolyse the chloride
  event.custom({
    type: 'tfc:heating',
    ingredient: { item: 'kubejs:powder/spodumene' },
    result_item: { id: 'kubejs:powder/beta_spodumene', count: 1 },
    temperature: 1050
  }).id(id('heating/beta_spodumene'))
  event.custom({
    type: 'tfmg:vat',
    allowed_vat_types: ['tfmg:steel', 'tfmg:fireproof'],
    machines: ['tfmg:mixer'],
    min_size: 1,
    temperature: 250,
    ingredients: [
      { item: 'kubejs:powder/beta_spodumene' }, { item: 'kubejs:powder/beta_spodumene' },
      { item: 'kubejs:powder/beta_spodumene' }, { item: 'kubejs:powder/beta_spodumene' },
      fluidIn('tfmg:sulfuric_acid', 250),
      fluidIn('minecraft:water', 500)
    ],
    processing_time: 200,
    results: [
      { id: 'kubejs:lithium_sulfate', amount: 500 },
      { id: 'tfmg:slag' }
    ]
  }).id(id('vat/lithium_sulfate'))
  // Li2SO4 + Na2CO3 -> Li2CO3 + Na2SO4
  event.custom({
    type: 'tfmg:vat',
    allowed_vat_types: ['tfmg:steel', 'tfmg:fireproof'],
    machines: ['tfmg:mixer'],
    min_size: 1,
    temperature: 90,
    ingredients: [
      fluidIn('kubejs:lithium_sulfate', 500),
      { item: 'tfc:powder/soda_ash' }, { item: 'tfc:powder/soda_ash' }
    ],
    processing_time: 200,
    results: [{ id: 'kubejs:powder/lithium_carbonate', count: 4 }]
  }).id(id('vat/lithium_carbonate'))
  event.custom({
    type: 'tfmg:vat',
    allowed_vat_types: ['tfmg:steel', 'tfmg:fireproof'],
    machines: ['tfmg:mixer'],
    min_size: 1,
    ingredients: [
      { item: 'kubejs:powder/lithium_carbonate' }, { item: 'kubejs:powder/lithium_carbonate' },
      { item: 'kubejs:powder/lithium_carbonate' }, { item: 'kubejs:powder/lithium_carbonate' },
      fluidIn('chemica:hydrochloric_acid', 500)
    ],
    processing_time: 200,
    results: [
      { id: 'kubejs:lithium_chloride', amount: 500 },
      { id: 'tfmg:carbon_dioxide', amount: 100 }
    ]
  }).id(id('vat/lithium_chloride'))
  // Molten LiCl-KCl eutectic: sylvite lowers the melting point and is mostly kept
  event.custom({
    type: 'tfmg:vat',
    allowed_vat_types: ['tfmg:fireproof'],
    machines: ['tfmg:graphite_electrode', 'tfmg:graphite_electrode'],
    min_size: 1,
    temperature: 450,
    min_current: 6,
    energy: 200 * power,
    electrode_wear: 1,
    ingredients: [fluidIn('kubejs:lithium_chloride', 500), { item: 'tfc:powder/sylvite' }],
    processing_time: 200,
    results: [
      { id: 'tfc_metallurgy:metal/lithium', amount: 20 },
      { id: 'chemica:chlorine', amount: 250 },
      { id: 'tfc:powder/sylvite', chance: 0.95 }
    ]
  }).id(id('vat/lithium_electrolysis'))

  // Beryllium: sulfate leach, fluoroberyllate salt, BeF2 reduced by magnesium
  event.custom({
    type: 'tfmg:vat',
    allowed_vat_types: ['tfmg:steel', 'tfmg:fireproof'],
    machines: ['tfmg:mixer'],
    min_size: 1,
    temperature: 90,
    ingredients: [
      { item: 'kubejs:powder/bertrandite' }, { item: 'kubejs:powder/bertrandite' },
      { item: 'kubejs:powder/bertrandite' }, { item: 'kubejs:powder/bertrandite' },
      fluidIn('tfmg:sulfuric_acid', 400)
    ],
    processing_time: 200,
    results: [{ id: 'kubejs:beryllium_sulfate', amount: 400 }]
  }).id(id('vat/beryllium_sulfate'))
  event.custom({
    type: 'tfmg:vat',
    allowed_vat_types: ['tfmg:steel', 'tfmg:fireproof'],
    machines: ['tfmg:mixer'],
    min_size: 1,
    ingredients: [
      fluidIn('kubejs:beryllium_sulfate', 400),
      fluidIn('chemica:ammonia', 100),
      fluidIn('chemica:hydrofluoric_acid', 200)
    ],
    processing_time: 200,
    results: [{ id: 'kubejs:powder/ammonium_fluoroberyllate', count: 4 }]
  }).id(id('vat/ammonium_fluoroberyllate'))
  event.custom({
    type: 'tfc:heating',
    ingredient: { item: 'kubejs:powder/ammonium_fluoroberyllate' },
    result_item: { id: 'kubejs:powder/beryllium_fluoride', count: 1 },
    temperature: 1000
  }).id(id('heating/beryllium_fluoride'))
  event.custom({
    type: 'tfmg:vat',
    allowed_vat_types: ['tfmg:fireproof'],
    min_size: 1,
    temperature: 1300,
    ingredients: [
      { item: 'kubejs:powder/beryllium_fluoride' }, { item: 'kubejs:powder/beryllium_fluoride' },
      { item: 'tfc_metallurgy:metal/dust/magnesium' }, { item: 'tfc_metallurgy:metal/dust/magnesium' }
    ],
    processing_time: 200,
    results: [
      { id: 'tfc_metallurgy:metal/dust/beryllium', count: 2 },
      { id: 'tfmg:slag' }
    ]
  }).id(id('vat/beryllium_reduction'))

  // Zirconium: the titanium line again, carbochlorination then Kroll
  // ZrSiO4 + 4 C + 4 Cl2 -> ZrCl4 + SiCl4 + 4 CO: the silicon comes off as its chloride
  event.custom({
    type: 'tfmg:vat',
    allowed_vat_types: ['tfmg:steel', 'tfmg:fireproof'],
    machines: ['tfmg:mixer'],
    min_size: 1,
    temperature: 900,
    ingredients: [
      { item: 'kubejs:powder/zircon' }, { item: 'kubejs:powder/zircon' },
      { item: 'tfmg:coal_coke_dust' }, { item: 'tfmg:coal_coke_dust' },
      fluidIn('chemica:chlorine', 1000)
    ],
    processing_time: 200,
    results: [
      { id: 'kubejs:zirconium_tetrachloride', amount: 250 },
      { id: 'kubejs:silicon_tetrachloride', amount: 250 },
      { id: 'tfmg:carbon_dioxide', amount: 100 }
    ]
  }).id(id('vat/zircon_carbochlorination'))
  // Hydrogenation: SiCl4 + H2 -> HSiCl3 + HCl, feeding the polysilicon reactor
  event.custom({
    type: 'tfmg:vat',
    allowed_vat_types: ['tfmg:steel', 'tfmg:fireproof'],
    min_size: 1,
    temperature: 600,
    ingredients: [fluidIn('kubejs:silicon_tetrachloride', 500), fluidIn('tfmg:hydrogen', 250)],
    processing_time: 200,
    results: [
      { id: 'kubejs:trichlorosilane', amount: 500 },
      { id: 'chemica:hydrochloric_acid', amount: 250 }
    ]
  }).id(id('vat/silicon_tetrachloride_hydrogenation'))
  event.custom({
    type: 'tfmg:vat',
    allowed_vat_types: ['tfmg:steel', 'tfmg:fireproof'],
    min_size: 1,
    temperature: 850,
    ingredients: [
      fluidIn('kubejs:zirconium_tetrachloride', 500),
      fluidIn('tfc_metallurgy:metal/magnesium', 20),
      fluidIn('chemica:argon', 50)
    ],
    processing_time: 400,
    results: [
      { id: 'kubejs:crude_zirconium_sponge', count: 2 },
      { id: 'kubejs:magnesium_chloride', amount: 500 }
    ]
  }).id(id('vat/zirconium_kroll'))
  event.recipes.vintageimprovements.vacuumizing('kubejs:zirconium_sponge', ['kubejs:crude_zirconium_sponge']).id(id('vacuumizing/zirconium_sponge'))
  // Zirconium melts within reach of a forge with bellows
  event.custom({
    type: 'tfc:heating',
    ingredient: { item: 'kubejs:zirconium_sponge' },
    result_fluid: { id: 'tfc_metallurgy:metal/zirconium', amount: 10 },
    temperature: 1850
  }).id(id('heating/zirconium_sponge'))

  // Uranium: oxidising acid leach, yellowcake, UF4, magnesium reduction
  event.custom({
    type: 'tfmg:vat',
    allowed_vat_types: ['tfmg:steel', 'tfmg:fireproof'],
    machines: ['tfmg:mixer'],
    min_size: 1,
    temperature: 60,
    ingredients: [
      { item: 'kubejs:powder/uraninite' }, { item: 'kubejs:powder/uraninite' },
      { item: 'kubejs:powder/uraninite' }, { item: 'kubejs:powder/uraninite' },
      fluidIn('tfmg:sulfuric_acid', 300),
      fluidIn('kubejs:oxygen', 100)
    ],
    processing_time: 200,
    results: [{ id: 'kubejs:uranyl_sulfate', amount: 400 }]
  }).id(id('vat/uranium_leaching'))
  // Ammonia precipitates ammonium diuranate
  event.custom({
    type: 'tfmg:vat',
    allowed_vat_types: ['tfmg:steel', 'tfmg:fireproof'],
    machines: ['tfmg:mixer'],
    min_size: 1,
    ingredients: [fluidIn('kubejs:uranyl_sulfate', 400), fluidIn('chemica:ammonia', 100)],
    processing_time: 200,
    results: [{ id: 'kubejs:powder/yellowcake', count: 4 }]
  }).id(id('vat/yellowcake'))
  // Hydrogen reduction to UO2 and hydrofluorination to UF4 in one hot vat
  event.custom({
    type: 'tfmg:vat',
    allowed_vat_types: ['tfmg:fireproof'],
    min_size: 1,
    temperature: 600,
    ingredients: [
      { item: 'kubejs:powder/yellowcake' }, { item: 'kubejs:powder/yellowcake' },
      { item: 'kubejs:powder/yellowcake' }, { item: 'kubejs:powder/yellowcake' },
      fluidIn('tfmg:hydrogen', 200),
      fluidIn('chemica:hydrofluoric_acid', 400)
    ],
    processing_time: 300,
    results: [
      { id: 'kubejs:powder/uranium_tetrafluoride', count: 4 },
      { id: 'chemica:steam', amount: 400 }
    ]
  }).id(id('vat/uranium_tetrafluoride'))
  event.custom({
    type: 'tfmg:vat',
    allowed_vat_types: ['tfmg:fireproof'],
    min_size: 1,
    temperature: 900,
    ingredients: [
      { item: 'kubejs:powder/uranium_tetrafluoride' }, { item: 'kubejs:powder/uranium_tetrafluoride' },
      { item: 'tfc_metallurgy:metal/dust/magnesium' }, { item: 'tfc_metallurgy:metal/dust/magnesium' }
    ],
    processing_time: 200,
    results: [
      { id: 'tfc_metallurgy:metal/dust/uranium', count: 2 },
      { id: 'tfmg:slag' }
    ]
  }).id(id('vat/uranium_reduction'))
  // Enrichment: fluorine turns UF4 into UF6 gas (100 mB per powder), a gas centrifuge splits off a tenth as enriched UF6
  event.custom({
    type: 'tfmg:vat',
    allowed_vat_types: ['tfmg:fireproof'],
    min_size: 1,
    temperature: 400,
    ingredients: [
      { item: 'kubejs:powder/uranium_tetrafluoride' }, { item: 'kubejs:powder/uranium_tetrafluoride' },
      { item: 'kubejs:powder/uranium_tetrafluoride' }, { item: 'kubejs:powder/uranium_tetrafluoride' },
      fluidIn('chemica:fluorine', 200)
    ],
    processing_time: 200,
    results: [{ id: 'kubejs:uranium_hexafluoride', amount: 400 }]
  }).id(id('vat/uranium_fluorination'))
  event.custom({
    type: 'vintageimprovements:centrifugation',
    ingredients: [fluidIn('kubejs:uranium_hexafluoride', 1000)],
    results: [{ id: 'kubejs:enriched_uranium_hexafluoride', amount: 100 }, { id: 'kubejs:depleted_uranium_hexafluoride', amount: 900 }],
    processing_time: 1200,
    minimal_rpm: 256
  }).id(id('centrifugation/uranium_enrichment'))
  // Enriched UF6 is hydrolysed and reduced to UO2 fuel powder, giving its fluorine back as HF
  event.custom({
    type: 'tfmg:vat',
    allowed_vat_types: ['tfmg:fireproof'],
    min_size: 1,
    temperature: 700,
    ingredients: [fluidIn('kubejs:enriched_uranium_hexafluoride', 100), fluidIn('minecraft:water', 100), fluidIn('tfmg:hydrogen', 50)],
    processing_time: 200,
    results: [{ id: 'kubejs:powder/enriched_uranium_dioxide' }, { id: 'chemica:hydrofluoric_acid', amount: 100 }]
  }).id(id('vat/enriched_uranium_dioxide'))
  // Sintered fuel pellets, four powders each
  event.recipes.create.compacting('kubejs:uranium_fuel_pellet', '4x kubejs:powder/enriched_uranium_dioxide')
    .superheated().id(id('compacting/uranium_fuel_pellet'))
  // Depleted tails become ordinary uranium metal: hydrogen back to UF4, then magnesium as above
  event.custom({
    type: 'tfmg:vat',
    allowed_vat_types: ['tfmg:fireproof'],
    min_size: 1,
    temperature: 900,
    ingredients: [
      fluidIn('kubejs:depleted_uranium_hexafluoride', 200), fluidIn('tfmg:hydrogen', 100),
      { item: 'tfc_metallurgy:metal/dust/magnesium' }, { item: 'tfc_metallurgy:metal/dust/magnesium' }
    ],
    processing_time: 200,
    results: [
      { id: 'tfc_metallurgy:metal/dust/uranium', count: 2 },
      { id: 'chemica:hydrofluoric_acid', amount: 200 },
      { id: 'tfmg:slag' }
    ]
  }).id(id('vat/depleted_uranium_reduction'))

  // Niobium and tantalum: columbite and tantalite don't smelt; tantalum lines the steel vat, so its whole line runs in cast iron vats
  const anyVat = ['tfmg:cast_iron', 'tfmg:steel', 'tfmg:fireproof']
  event.remove({ id: /^tfc_metallurgy:heating\/ore\/(small|poor|normal|rich)_(columbite|tantalite)$/ })
  grades.forEach(([grade, powder]) => {
    ;['columbite', 'tantalite'].forEach(ore =>
      event.recipes.create.crushing([`${powder}x kubejs:powder/${ore}`], `tfc_metallurgy:ore/${grade}_${ore}`).id(id(`crushing/${grade}_${ore}`)))
  })
  // Hot HF with sulfuric acid dissolves each as its fluoro-complex in a lead-lined vat; the iron (one Fe per two Nb or Ta) stays as oxide
  ;[['columbite', 'fluoroniobic_acid'], ['tantalite', 'fluorotantalic_acid']].forEach(([ore, acid]) => {
    const dust = { item: `kubejs:powder/${ore}` }
    event.custom({
      type: 'tfmg:vat',
      allowed_vat_types: anyVat,
      machines: ['tfmg:mixer'],
      min_size: 1,
      temperature: 90,
      ingredients: [dust, dust, dust, dust, fluidIn('chemica:hydrofluoric_acid', 400), fluidIn('tfmg:sulfuric_acid', 100)],
      processing_time: 300,
      results: [{ id: `kubejs:${acid}`, amount: 400 }, { id: 'tfc:powder/hematite' }]
    }).id(id(`vat/${ore}_digestion`))
  })
  // H2TaF7 + 2 KCl -> K2TaF7 + 2 HCl, crystallised on cooling
  event.custom({
    type: 'tfmg:vat',
    allowed_vat_types: anyVat,
    machines: ['tfmg:freezer'],
    min_size: 1,
    ingredients: [fluidIn('kubejs:fluorotantalic_acid', 400), { item: 'tfc:powder/sylvite' }, { item: 'tfc:powder/sylvite' }],
    processing_time: 200,
    results: [
      { id: 'kubejs:powder/potassium_fluorotantalate', count: 4 },
      { id: 'chemica:hydrochloric_acid', amount: 100 }
    ]
  }).id(id('vat/potassium_fluorotantalate'))
  // Sodium reduction under argon: K2TaF7 + 5 Na -> Ta + 2 KF + 5 NaF; the dust melts in a forge
  event.custom({
    type: 'tfmg:vat',
    allowed_vat_types: anyVat,
    min_size: 1,
    temperature: 850,
    ingredients: [
      { item: 'kubejs:powder/potassium_fluorotantalate' }, { item: 'kubejs:powder/potassium_fluorotantalate' },
      { item: 'chemica:sodium_dust' }, { item: 'chemica:sodium_dust' },
      fluidIn('chemica:argon', 50)
    ],
    processing_time: 200,
    results: [
      { id: 'tfc_metallurgy:metal/dust/tantalum', count: 2 },
      { id: 'tfmg:slag' }
    ]
  }).id(id('vat/tantalum_reduction'))
  // Ammonia precipitates niobium hydroxide, calcined to the pentoxide
  event.custom({
    type: 'tfmg:vat',
    allowed_vat_types: anyVat,
    machines: ['tfmg:mixer'],
    min_size: 1,
    ingredients: [fluidIn('kubejs:fluoroniobic_acid', 400), fluidIn('chemica:ammonia', 200)],
    processing_time: 200,
    results: [
      { id: 'kubejs:powder/niobium_hydroxide', count: 4 },
      { id: 'chemica:waste_slurry', amount: 200 }
    ]
  }).id(id('vat/niobium_hydroxide'))
  event.custom({
    type: 'tfc:heating',
    ingredient: { item: 'kubejs:powder/niobium_hydroxide' },
    result_item: { id: 'kubejs:powder/niobium_pentoxide', count: 1 },
    temperature: 900
  }).id(id('heating/niobium_pentoxide'))
  // Aluminothermic reduction: 3 Nb2O5 + 10 Al -> 6 Nb + 5 Al2O3; the alumina goes back to the Hall–Héroult cell
  event.custom({
    type: 'tfmg:vat',
    allowed_vat_types: ['tfmg:fireproof'],
    min_size: 1,
    temperature: 1000,
    ingredients: [
      { item: 'kubejs:powder/niobium_pentoxide' }, { item: 'kubejs:powder/niobium_pentoxide' },
      { item: 'tfc_metallurgy:metal/dust/aluminum' }, { item: 'tfc_metallurgy:metal/dust/aluminum' }
    ],
    processing_time: 200,
    results: [
      { id: 'tfc_metallurgy:metal/dust/niobium', count: 2 },
      { id: 'kubejs:powder/alumina' }
    ]
  }).id(id('vat/niobium_aluminothermy'))

  // Sulfide ores are roasted in air before leaching; the SO2 goes to the acid plant and pays for the leach
  // [ore namespace, ore, metal dust, leaching acid, mB SO2 per powder]
  const sulfides = [
    ['tfc_metallurgy', 'galena', 'tfc_metallurgy:metal/dust/lead', 'tfmg:sulfuric_acid', 100],
    ['tfc', 'sphalerite', 'kubejs:metal/dust/zinc', 'tfmg:sulfuric_acid', 100],
    ['tfc_metallurgy', 'molybdenite', 'tfc_metallurgy:metal/dust/molybdenum', 'tfmg:sulfuric_acid', 140],
    ['tfc_metallurgy', 'stibnite', 'tfc_metallurgy:metal/dust/antimony', 'chemica:hydrochloric_acid', 100],
    ['tfc', 'tetrahedrite', 'kubejs:metal/dust/copper', 'tfmg:sulfuric_acid', 100]
  ]
  // Expected count as a sure count plus a chance for the rest
  const expected = (item, amount) => {
    const whole = Math.floor(amount + 1e-6)
    const rest = Math.round((amount - whole) * 100) / 100
    const out = whole > 0 ? [{ id: item, count: whole }] : []
    return rest > 0 ? out.concat([{ id: item, chance: rest }]) : out
  }
  sulfides.forEach(([namespace, ore, dust, acid, so2]) => {
    const calcine = `kubejs:powder/roasted_${ore}`
    grades.forEach(([grade, powder]) => {
      // Tetrahedrite (Cu12Sb4S13) gives off its antimony as oxide fume, one part per three of copper
      const fume = ore === 'tetrahedrite' ? expected('tfc_metallurgy:metal/dust/antimony', powder / 3) : []
      event.custom({
        type: 'vintageimprovements:pressurizing',
        ingredients: [{ item: `${namespace}:ore/${grade}_${ore}` }],
        results: [{ id: calcine, count: powder }].concat(fume, [{ id: 'vintageimprovements:sulfur_dioxide', amount: so2 * powder }]),
        heat_requirement: 'heated',
        processing_time: 60 + 20 * powder
      }).id(id(`pressurizing/${grade}_${ore}_roasting`))
    })
    event.custom({
      type: 'tfmg:vat',
      allowed_vat_types: anyVat,
      machines: ['tfmg:mixer'],
      min_size: 1,
      ingredients: [{ item: calcine }, { item: calcine }, { item: calcine }, { item: calcine }, fluidIn(acid, 300)],
      processing_time: 200,
      results: [{ id: dust, count: 4 }]
    }).id(id(`vat/${ore}_calcine_leaching`))
  })
})
