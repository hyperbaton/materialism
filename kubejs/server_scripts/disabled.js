// Recipe removal for the disabled items in startup_scripts/disabled.js, plus mod recipes that use content the pack removes

ServerEvents.tags('item', event => {
  event.add('kubejs:disabled', global.DISABLED.items)
})

ServerEvents.recipes(event => {
  // Every mod recipe making a disabled item
  event.remove({ output: '#kubejs:disabled' })
  // Recipes using vanilla content TFC replaces
  ;[
    { input: 'minecraft:quartz', id: /minecraft:.*/ }, { input: 'minecraft:sugar_cane' }, { input: 'minecraft:ancient_debris' },
    { input: /minecraft:.*chorus.*/ }, { input: /minecraft:.*azalea.*/ }, { input: 'minecraft:iron_horse_armor' }, { input: /minecraft:.*dirt.*/ },
    { input: 'minecraft:calcite' }, { input: /minecraft:.*emerald.*/ }, { input: /minecraft:.*glowstone.*/ }, { input: 'minecraft:glow_berries' },
    { input: 'minecraft:pink_petals' }, { input: 'create:dough' },
    { id: /minecraft:.*apple.*/ }, { id: /minecraft:.*carrot.*/ }, { id: /minecraft:.*potato.*/ }, { id: /minecraft:.*beet.*/ }, { id: /minecraft:.*melon.*/ },
    { id: 'minecraft:leather' }, { id: 'minecraft:white_wool_from_string' }, { id: /.*weather2.*/ }
  ].forEach(filter => event.remove(filter))
})
