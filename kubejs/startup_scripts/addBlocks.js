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

  // Surface/underground indicators for veins that had none: same groundcover pebble geometry as
  // oil_seep, textured with each mineral's own real ore-item texture (already thematically
  // correct, no recoloring needed). Unlike oil_seep these drop themselves -- matching TFC's own
  // native small-ore indicators (e.g. tfc:ore/small_hematite), which give a tiny sample as a
  // prospecting reward. See kubejs/data/materialism/worldgen/configured_feature/vein/*.json for
  // where each is wired into its vein's "indicator" block.
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
