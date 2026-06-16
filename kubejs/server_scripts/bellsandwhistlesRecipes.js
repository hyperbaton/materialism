ServerEvents.recipes(event => {
    event.replaceInput(
      { output: 'bellsandwhistles:andesite_bogie_steps' }, // Arg 1: the filter
      'create:andesite_alloy',            // Arg 2: the item to replace
      'tfc_metallurgy:metal/rod/aluminum'   // Arg 3: the item to replace it with
    )
    event.replaceInput(
      { output: 'bellsandwhistles:andesite_grab_rails' }, // Arg 1: the filter
      'create:andesite_alloy',            // Arg 2: the item to replace
      'tfc_metallurgy:metal/rod/aluminum'   // Arg 3: the item to replace it with
    )
    event.replaceInput(
      { output: 'bellsandwhistles:andesite_door_step' }, // Arg 1: the filter
      'create:andesite_alloy',            // Arg 2: the item to replace
      'tfc_metallurgy:metal/rod/aluminum'   // Arg 3: the item to replace it with
    )
    event.remove({output: 'bellsandwhistles:headlight'})
    event.replaceInput(
      { output: 'bellsandwhistles:station_platform' }, // Arg 1: the filter
      'minecraft:smooth_stone',            // Arg 2: the item to replace
      'tfmg:concrete'   // Arg 3: the item to replace it with
    )
    event.replaceInput(
      { output: 'bellsandwhistles:station_platform' }, // Arg 1: the filter
      'minecraft:smooth_stone_slab',            // Arg 2: the item to replace
      'tfmg:concrete_slab'   // Arg 3: the item to replace it with
    )
    event.replaceInput(
      { id: 'bellsandwhistles:pilots/andesite_pilot' }, // Arg 1: the filter
      'create:andesite_alloy',            // Arg 2: the item to replace
      'tfc_metallurgy:metal/sheet/aluminum'   // Arg 3: the item to replace it with
    )
    event.replaceInput(
      { id: 'bellsandwhistles:pilots/andesite_pilot' }, // Arg 1: the filter
      'minecraft:andesite',            // Arg 2: the item to replace
      'tfc_metallurgy:metal/rod/aluminum'   // Arg 3: the item to replace it with
    )
}
)