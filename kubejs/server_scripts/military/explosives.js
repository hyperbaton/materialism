// Explosives: thermite, grenades, bombs and gunpowder
ServerEvents.recipes(event => {
  // Thermite using TFC iron oxide and aluminum
  event.remove({id: 'tfmg:mixing/thermite'})
  event.custom({
    type: 'create:mixing',
    ingredients: [
      {item: 'tfc:powder/hematite'},
      {item: 'tfc:powder/hematite'},
      {item: 'tfc_metallurgy:metal/ingot/aluminum'},
      {item: 'tfc_metallurgy:metal/ingot/aluminum'}
    ],
    results: [{id: 'tfmg:thermite_powder'}],
    heat_requirement: 'heated'
  })

  // Weapon recipes — replace simple crafting with sequenced assembly
  event.remove({id: 'tfmg:crafting/materials/pipe_bomb'})
  event.remove({id: 'tfmg:crafting/materials/thermite_grenade'})
  event.remove({id: 'tfmg:crafting/materials/zinc_grenade'})
  event.remove({id: 'tfmg:crafting/materials/copper_grenade'})
  event.remove({id: 'tfmg:crafting/materials/napalm_bomb'})

  // Pipe bomb: steel pipe → deploy saltpeter + charcoal + screw → press
  event.recipes.create.sequenced_assembly([
    Item.of('tfmg:pipe_bomb', 2)
  ], 'tfmg:steel_pipe', [
    event.recipes.createDeploying('tfmg:steel_pipe', ['tfmg:steel_pipe', 'tfc:powder/saltpeter']),
    event.recipes.createDeploying('tfmg:steel_pipe', ['tfmg:steel_pipe', 'tfc:powder/charcoal']),
    event.recipes.createDeploying('tfmg:steel_pipe', ['tfmg:steel_pipe', 'tfc_items:steel_screw']),
    event.recipes.createPressing('tfmg:steel_pipe', 'tfmg:steel_pipe')
  ]).transitionalItem('tfmg:steel_pipe').loops(1)

  // Thermite grenade: aluminum sheet → deploy thermite + rivets → press + curving
  event.recipes.create.sequenced_assembly([
    Item.of('tfmg:thermite_grenade', 1)
  ], 'tfc_metallurgy:metal/sheet/aluminum', [
    event.recipes.createDeploying('tfc_metallurgy:metal/sheet/aluminum', ['tfc_metallurgy:metal/sheet/aluminum', 'tfmg:thermite_powder']),
    event.recipes.createDeploying('tfc_metallurgy:metal/sheet/aluminum', ['tfc_metallurgy:metal/sheet/aluminum', 'tfmg:thermite_powder']),
    event.recipes.createDeploying('tfc_metallurgy:metal/sheet/aluminum', ['tfc_metallurgy:metal/sheet/aluminum', 'tfc_items:aluminum_rivet']),
    event.recipes.createPressing('tfc_metallurgy:metal/sheet/aluminum', 'tfc_metallurgy:metal/sheet/aluminum'),
    event.custom({
      type: 'vintageimprovements:curving',
      ingredients: [{item: 'tfc_metallurgy:metal/sheet/aluminum'}],
      results: [{id: 'tfc_metallurgy:metal/sheet/aluminum'}],
      mode: 2
    })
  ]).transitionalItem('tfc_metallurgy:metal/sheet/aluminum').loops(1)

  // Zinc grenade: thermite grenade + zinc + sulfur → press
  event.recipes.create.sequenced_assembly([
    Item.of('tfmg:zinc_grenade', 1)
  ], 'tfmg:thermite_grenade', [
    event.recipes.createDeploying('tfmg:thermite_grenade', ['tfmg:thermite_grenade', 'tfc:metal/ingot/zinc']),
    event.recipes.createDeploying('tfmg:thermite_grenade', ['tfmg:thermite_grenade', 'tfc:powder/sulfur']),
    event.recipes.createPressing('tfmg:thermite_grenade', 'tfmg:thermite_grenade')
  ]).transitionalItem('tfmg:thermite_grenade').loops(1)

  // Copper grenade: thermite grenade + copper + sulfur → press
  event.recipes.create.sequenced_assembly([
    Item.of('tfmg:copper_grenade', 1)
  ], 'tfmg:thermite_grenade', [
    event.recipes.createDeploying('tfmg:thermite_grenade', ['tfmg:thermite_grenade', 'tfc:metal/ingot/copper']),
    event.recipes.createDeploying('tfmg:thermite_grenade', ['tfmg:thermite_grenade', 'tfc:powder/sulfur']),
    event.recipes.createPressing('tfmg:thermite_grenade', 'tfmg:thermite_grenade')
  ]).transitionalItem('tfmg:thermite_grenade').loops(1)

  // Napalm bomb: aluminium canister → fill napalm → seal with aluminium + rivets → press
  const napalmCase = 'tfc_metallurgy:metal/sheet/aluminum'
  event.recipes.create.sequenced_assembly([
    Item.of('tfmg:napalm_bomb', 1)
  ], napalmCase, [
    event.recipes.createFilling(napalmCase, [napalmCase, Fluid.of('tfmg:napalm', 1000)]),
    event.recipes.createDeploying(napalmCase, [napalmCase, napalmCase]),
    event.recipes.createDeploying(napalmCase, [napalmCase, 'tfc_items:steel_rivet']),
    event.recipes.createPressing(napalmCase, napalmCase),
    event.recipes.createPressing(napalmCase, napalmCase)
  ]).transitionalItem(napalmCase).loops(1)
})

ServerEvents.recipes(event => {
  // Gunpowder recipes
  event.remove("tfc:crafting/gunpowder")
  event.remove("tfc:crafting/gunpowder_with_graphite")
  event.remove("create:filling/gunpowder")
  event.recipes.createMixing(
    Item.of("minecraft:gunpowder", 4),
    [
      "tfc:powder/saltpeter",
      "tfc:powder/saltpeter",
      "tfc:powder/sulfur",
      "tfc:powder/charcoal",
    ]
  )
  event.recipes.createMixing(
    Item.of("minecraft:gunpowder", 12),
    [
      "tfc:powder/saltpeter",
      "tfc:powder/saltpeter",
      "tfc:powder/saltpeter",
      "tfc:powder/saltpeter",
      "tfc:powder/sulfur",
      "tfc:powder/sulfur",
      "tfc:powder/charcoal",
      "tfc:powder/charcoal",
      "tfc:powder/graphite",
    ]
  )
})
