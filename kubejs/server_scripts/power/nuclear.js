// Nuclear: fuel, and particle accelerator breeding and transmutation
ServerEvents.recipes(event => {
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
})

ServerEvents.recipes(event => {
  event.remove('create_new_age:thorium/radioactive_thorium')
  event.custom({type: 'create_optical:focusing',
    ingredients: [{item: 'tfc_metallurgy:metal/ingot/thorium'}],
    results: [{id: 'create_new_age:radioactive_thorium'}],
    processing_time: 100,
    mode: 3
  })
  // Fuel rods take irradiated thorium or enriched uranium pellets (metals/extraction.js)
  event.remove('create_new_age:sequenced_assembly/nuclear_fuel')
  ;['create_new_age:radioactive_thorium', 'kubejs:uranium_fuel_pellet'].forEach(fissile => event.recipes.create.sequenced_assembly(
    [
        Item.of('create_new_age:nuclear_fuel', 1)
    ],
    'tfc_metallurgy:metal/double_sheet/zircaloy',
    [
        event.recipes.createDeploying(
          'tfc_metallurgy:metal/double_sheet/zircaloy',
          ['tfc_metallurgy:metal/double_sheet/zircaloy', fissile]
        ),
        event.recipes.create.pressing('tfc_metallurgy:metal/double_sheet/zircaloy', 'tfc_metallurgy:metal/double_sheet/zircaloy'),
        event.recipes.createDeploying(
            'tfc_metallurgy:metal/double_sheet/zircaloy',
            ['tfc_metallurgy:metal/double_sheet/zircaloy', 'tfc_metallurgy:metal/double_sheet/zircaloy']
        ),
        event.custom({type: 'vintageimprovements:curving', ingredients: [{item: 'tfc_metallurgy:metal/double_sheet/zircaloy'}], results: [{id: 'tfc_metallurgy:metal/double_sheet/zircaloy'}], mode: 3})
    ]
  ).transitionalItem('tfc_metallurgy:metal/double_sheet/zircaloy')
  .loops(1).id('kubejs:new_age/sequenced_assembly/nuclear_fuel_' + fissile.split(':')[1]))
})
