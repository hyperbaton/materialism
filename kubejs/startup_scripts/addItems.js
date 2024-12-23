Platform.mods.kubejs.name = 'Materialism'
StartupEvents.registry('item', event => {
    // Items for getting early game rose quartz
    event.create('certus_quartz_powder').maxStackSize(16)
    event.create('redstone_imbued_quartz_powder').maxStackSize(16)
    event.create('tungsten_wire').maxStackSize(16)
    event.create('tungsten_steel_wire').maxStackSize(16)
    event.create('alnico_core').maxStackSize(16)
    event.create('polarized_alnico_core').maxStackSize(16)
    event.create('powder/neodymium').maxStackSize(16)
    event.create('lithium_battery_core').maxStackSize(16)
  })
  