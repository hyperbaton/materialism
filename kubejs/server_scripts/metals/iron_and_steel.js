// Iron and steel: coking, hot blast, industrial blasting, arc furnace, bloom hammering and welding
ServerEvents.recipes(event => {
  // Coking recipes

  // Allow for coking of TFC coal
  event.remove({id: 'tfmg:coking/coal'})
  event.custom({
    type: 'tfmg:coking',
    ingredients: [{item: 'tfc:ore/bituminous_coal'}],
    processing_time: 1200,
    results: [
      {id: 'tfmg:coal_coke'},
      {amount: 2, id: 'tfmg:creosote'},
      {amount: 30, id: 'tfmg:carbon_dioxide'}
    ]
  })
  // Charcoal → coal coke (slower, less creosote than coal path)
  event.remove({id: 'tfmg:coking/charcoal'})
  event.custom({
    type: 'tfmg:coking',
    ingredients: [{item: 'minecraft:charcoal'}],
    processing_time: 3000,
    results: [
      {id: 'tfmg:coal_coke'},
      {amount: 1, id: 'tfmg:creosote'},
      {amount: 50, id: 'tfmg:carbon_dioxide'}
    ]
  })

  // Blast stove burns creosote twice as fast, so creosote
  // consumption keeps pace with the coking process producing it
  event.remove({id: 'tfmg:hot_blast/hot_air'})
  event.custom({
    type: 'tfmg:hot_blast',
    ingredients: [
      fluidIn('tfmg:air', 25),
      {type: 'neoforge:tag', amount: 20, tag: 'tfmg:blast_stove_fuel'}
    ],
    processing_time: 200,
    results: [
      {amount: 25, id: 'tfmg:hot_air'},
      {amount: 25, id: 'tfmg:carbon_dioxide'}
    ]
  })

  // Industrial blasting for steel (iron powder + flux → molten steel)
  event.remove({id: 'tfmg:industrial_blasting/steel'})
  event.remove({id: 'tfmg:industrial_blasting/steel_from_dust'})
  event.remove({id: 'tfmg:industrial_blasting/steel_from_raw_iron'})
  event.custom({
    type: 'tfmg:industrial_blasting',
    hot_air_usage: 5,
    ingredients: [
      {tag: 'materialism:powders/iron'},
      {item: 'tfc:powder/flux'}
    ],
    processing_time: 4,
    results: [
      {amount: 5, id: 'tfc:metal/pig_iron'},
      {amount: 5, id: 'tfmg:molten_slag'},
      {amount: 10, id: 'tfmg:furnace_gas'}
    ]
  })

  // Arc furnace (vat): same idea and yield as the blast furnace recipe above, but electric. Pig iron
  // instead of TFMG's molten steel. It needs no hot air and gives no furnace gas, and it is faster
  // and easier to automate, not richer. Its three graphite electrodes need 2100 V, which is 44100 FE/t.
  event.remove({id: 'tfmg:vat/arc_furnace_steel'})
  event.custom({
    type: 'tfmg:vat',
    allowed_vat_types: ['tfmg:fireproof'],
    machines: ['tfmg:graphite_electrode', 'tfmg:graphite_electrode', 'tfmg:graphite_electrode'],
    min_size: 9,
    min_current: 7,
    ingredients: [
      {tag: 'materialism:powders/iron'},
      {tag: 'materialism:powders/iron'},
      {item: 'tfc:powder/flux'},
      {item: 'tfmg:coal_coke_dust'}
    ],
    processing_time: 4,
    results: [
      {amount: 10, id: 'tfc:metal/pig_iron'},
      {amount: 10, id: 'tfmg:molten_slag'},
      {chance: 0.9, id: 'tfmg:coal_coke_dust'}
    ]
  })
})

ServerEvents.recipes(event => {
  // Bloom processing with the helve hammer: raw bloom -> refined bloom -> ingot. Same 3 hits
  // as TFC's anvil recipes, at the bloom's forging temperature.
  const blooms = [
      { name: 'iron', raw: 'tfc:raw_iron_bloom', refined: 'tfc:refined_iron_bloom', ingot: 'tfc:metal/ingot/wrought_iron', forgingTemp: 922 }
  ]
  const metallurgyBlooms = [
      ['boron', 921], ['cobalt', 900], ['iridium', 921], ['osmium', 921],
      ['platinum', 1038], ['thorium', 921], ['titanium', 921], ['tungsten', 921]
  ]
  metallurgyBlooms.forEach(([metal, forgingTemp]) => blooms.push({
      name: metal,
      raw: `tfc_metallurgy:raw_${metal}_bloom`,
      refined: `tfc_metallurgy:refined_${metal}_bloom`,
      ingot: `tfc_metallurgy:metal/ingot/${metal}`,
      forgingTemp: forgingTemp
  }))
  blooms.forEach(bloom => {
      event.custom({
          type: 'vintageimprovements:hammering',
          hammer_blows: 3,
          ingredients: [TFC.ingredient.and(Ingredient.of(bloom.raw), TFC.ingredient.heat(bloom.forgingTemp))],
          results: [{ id: bloom.refined }]
      }).id(`kubejs:hammering/bloom/refine_${bloom.name}`)
      event.custom({
          type: 'vintageimprovements:hammering',
          hammer_blows: 3,
          ingredients: [TFC.ingredient.and(Ingredient.of(bloom.refined), TFC.ingredient.heat(bloom.forgingTemp))],
          results: [{ id: bloom.ingot }]
      }).id(`kubejs:hammering/bloom/ingot_${bloom.name}`)
  })
})

ServerEvents.recipes(event => {
  // Automated welding for the high-carbon steels
  const steelWelds = [
      { first: 'tfc:metal/ingot/weak_steel', second: 'tfc:metal/ingot/pig_iron', result: 'tfc:metal/ingot/high_carbon_black_steel', meltTemp: 1540 },
      { first: 'tfc:metal/ingot/weak_blue_steel', second: 'tfc:metal/ingot/black_steel', result: 'tfc:metal/ingot/high_carbon_blue_steel', meltTemp: 1540 },
      { first: 'tfc:metal/ingot/weak_red_steel', second: 'tfc:metal/ingot/black_steel', result: 'tfc:metal/ingot/high_carbon_red_steel', meltTemp: 1540 }
  ]
  steelWelds.forEach(weld => {
      let weldingTemperature = Math.round(weld.meltTemp * 0.8)
      event.custom({
          type: 'woodencog:heated_compacting',
          heat_requirement: 0,
          ingredients: [
              heatedIngredient(weld.first, weldingTemperature),
              heatedIngredient(weld.second, weldingTemperature),
              heatedIngredient('tfc:powder/flux', 0)
          ],
          results: [heatedResult(weld.result)]
      })
  })

  // Automate the anvil "upgrade" step of the steel chain
  const steelUpgrades = [
      ['tfc:metal/ingot/pig_iron', 'tfc:metal/ingot/high_carbon_steel'],
      ['tfc:metal/ingot/high_carbon_steel', 'tfc:metal/ingot/steel'],
      ['tfc:metal/ingot/high_carbon_black_steel', 'tfc:metal/ingot/black_steel'],
      ['tfc:metal/ingot/high_carbon_blue_steel', 'tfc:metal/ingot/blue_steel'],
      ['tfc:metal/ingot/high_carbon_red_steel', 'tfc:metal/ingot/red_steel']
  ]
  let steelForgingTemperature = Math.round(1540 * 0.6)
  steelUpgrades.forEach(([input, output]) => {
      event.custom({
          type: 'vintageimprovements:hammering',
          hammer_blows: 3,
          ingredients: [TFC.ingredient.and(Ingredient.of(input), TFC.ingredient.heat(steelForgingTemperature))],
          results: [{ id: output }]
      })
  })
})
