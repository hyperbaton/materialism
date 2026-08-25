StartupEvents.registry('block', event => {
  // Surface indicator for the custom crude oil vein
  event.create('oil_seep')
    .displayName('Oil Seep')
    .gravelSoundType()
    .hardness(0.05)
    .resistance(0.05)
    .requiresTool(false)
    .notSolid()
    .fullBlock(false)
    .opaque(false)
    .noCollision()
    .box(6, 0, 5, 12, 2, 10)

  // Surface/underground indicators for veins that had none
  const smallOreIndicators = {
    graphite: 'Graphite',
    saltpeter: 'Saltpeter',
    sulfur: 'Sulfur',
    certus_quartz: 'Certus Quartz',
    cinnabar: 'Cinnabar',
    cryolite: 'Cryolite',
    halite: 'Halite'
  }
  Object.keys(smallOreIndicators).forEach(mineral => {
    event.create(`small_${mineral}`)
      .displayName(`Small ${smallOreIndicators[mineral]}`)
      .gravelSoundType()
      .hardness(0.05)
      .resistance(0.05)
      .requiresTool(false)
      .notSolid()
      .fullBlock(false)
      .opaque(false)
      .noCollision()
      .box(6, 0, 5, 12, 2, 10)
  })
})
