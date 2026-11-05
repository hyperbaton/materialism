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
    halite: 'Halite',
    fluorite: 'Fluorite',
    phosphorite: 'Phosphorite'
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

  // Minor ores that spawn in specific rocks, like TFC's gems and minerals (one grade only)
  const rockOres = {
    fluorite: {
      name: 'Fluorite',
      rocks: ['granite', 'rhyolite', 'gneiss', 'quartzite', 'schist', 'marble', 'limestone', 'dolomite', 'slate', 'phyllite']
    },
    phosphorite: {
      name: 'Phosphorite',
      rocks: ['limestone', 'chalk', 'shale', 'claystone', 'chert', 'dolomite', 'conglomerate']
    }
  }
  Object.keys(rockOres).forEach(mineral => {
    rockOres[mineral].rocks.forEach(rock => {
      event.create(`ore/${mineral}/${rock}`)
        .displayName(`${rockOres[mineral].name} (${rock.charAt(0).toUpperCase() + rock.slice(1)})`)
        .soundType('stone')
        .hardness(6)
        .resistance(10)
        .requiresTool(true)
        // The overlay face is transparent, so the block must not use the default solid render layer
        .renderType('cutout')
        .tagBlock('minecraft:mineable/pickaxe')
        .tagBlock('minecraft:needs_stone_tool')
    })
  })
})
