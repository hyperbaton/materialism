ServerEvents.recipes(event => {
    swapInputs(event, [
      [{ output: 'bellsandwhistles:andesite_bogie_steps' }, 'create:andesite_alloy', 'tfc_metallurgy:metal/rod/aluminum'],
      [{ output: 'bellsandwhistles:andesite_grab_rails' }, 'create:andesite_alloy', 'tfc_metallurgy:metal/rod/aluminum'],
      [{ output: 'bellsandwhistles:andesite_door_step' }, 'create:andesite_alloy', 'tfc_metallurgy:metal/rod/aluminum']
    ])
    event.remove({output: 'bellsandwhistles:headlight'})
    swapInputs(event, [
      [{ output: 'bellsandwhistles:station_platform' }, 'minecraft:smooth_stone', 'tfmg:concrete'],
      [{ output: 'bellsandwhistles:station_platform' }, 'minecraft:smooth_stone_slab', 'tfmg:concrete_slab'],
      ['bellsandwhistles:pilots/andesite_pilot', 'create:andesite_alloy', 'tfc_metallurgy:metal/sheet/aluminum'],
      ['bellsandwhistles:pilots/andesite_pilot', 'minecraft:andesite', 'tfc_metallurgy:metal/rod/aluminum']
    ])
}
)