ServerEvents.recipes(event => {
    event.remove({id: 'createbigcannons:mixing/alloy_nethersteel_steel'})

    event.replaceInput(
        { id: 'createbigcannons:wrought_iron_cannon_end' }, // Arg 1: the filter
        'minecraft:iron_ingot',            // Arg 2: the item to replace
        'tfc:metal/rod/wrought_iron'         // Arg 3: the item to replace it with
      )
      event.replaceInput(
        { id: 'createbigcannons:wrought_iron_drop_mortar_end_mirrored' }, // Arg 1: the filter
        'minecraft:iron_bars',            // Arg 2: the item to replace
        'tfc:metal/bars/wrought_iron'         // Arg 3: the item to replace it with
      )
      event.replaceInput(
        { id: 'createbigcannons:wrought_iron_drop_mortar_end' }, // Arg 1: the filter
        'minecraft:iron_bars',            // Arg 2: the item to replace
        'tfc:metal/bars/wrought_iron'         // Arg 3: the item to replace it with
      )
      event.replaceInput(
        { id: 'createbigcannons:worm_head' }, // Arg 1: the filter
        'minecraft:iron_bars',            // Arg 2: the item to replace
        'tfc:metal/bars/steel'         // Arg 3: the item to replace it with
      )
      event.replaceInput(
        { id: 'createbigcannons:solid_shot' }, // Arg 1: the filter
        'minecraft:iron_nugget',            // Arg 2: the item to replace
        'tfc:metal/rod/wrought_iron'         // Arg 3: the item to replace it with
      )
      event.replaceInput(
        { id: 'createbigcannons:empty_powder_charge' }, // Arg 1: the filter
        'minecraft:string',            // Arg 2: the item to replace
        'tfc:wool_yarn'         // Arg 3: the item to replace it with
      )
      event.replaceInput(
        { id: 'createbigcannons:mixing/congealed_nitro_no_nether' }, // Arg 1: the filter
        'minecraft:slime_ball',            // Arg 2: the item to replace
        'tfc:glue'         // Arg 3: the item to replace it with
      )
      event.replaceInput(
        { id: 'createbigcannons:proximity_fuze' }, // Arg 1: the filter
        'minecraft:quartz',            // Arg 2: the item to replace
        'create:electron_tube'         // Arg 3: the item to replace it with
      )
      event.replaceInput(
        { id: 'createbigcannons:proximity_fuze' }, // Arg 1: the filter
        'minecraft:iron_bars',            // Arg 2: the item to replace
        'tfc:metal/bars/steel'         // Arg 3: the item to replace it with
      )
      event.replaceInput(
        { id: 'createbigcannons:proximity_fuze' }, // Arg 1: the filter
        'minecraft:iron_ingot',            // Arg 2: the item to replace
        'tfc:metal/sheet/steel'         // Arg 3: the item to replace it with
      )
      event.replaceInput(
        { id: 'createbigcannons:cannon_welder' }, // Arg 1: the filter
        'create:blaze_burner',            // Arg 2: the item to replace
        'tfc:powder/sulfur'         // Arg 3: the item to replace it with
      )
      event.replaceInput(
        { id: 'createbigcannons:cannon_welder_mirrored' }, // Arg 1: the filter
        'create:blaze_burner',            // Arg 2: the item to replace
        'tfc:powder/sulfur'         // Arg 3: the item to replace it with
      )
      event.replaceInput(
        { id: 'createbigcannons:cannon_drill' }, // Arg 1: the filter
        'minecraft:iron_ingot',            // Arg 2: the item to replace
        'tfc_metallurgy:metal/double_sheet/titanium'         // Arg 3: the item to replace it with
      )
      
    }
)