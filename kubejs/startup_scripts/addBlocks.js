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
})
