ServerEvents.recipes(event => {
    event.remove({id: 'createbigcannons:mixing/alloy_nethersteel_steel'})
    event.remove({output: 'createbigcannons:cast_iron_ingot'})
    event.remove({output: 'createbigcannons:bronze_ingot'})
    event.remove({output: 'createbigcannons:steel_ingot'})
    event.remove({output: 'createbigcannons:nethersteel_ingot'})

    // Remove molten metals
    event.remove({output: 'createbigcannons:molten_cast_iron'})
    event.remove({output: 'createbigcannons:molten_bronze'})
    event.remove({output: 'createbigcannons:molten_steel'})
    event.remove({output: 'createbigcannons:molten_nethersteel'})

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
      event.replaceInput(
        { input: 'createbigcannons:recoil_spring' }, // Arg 1: the filter
        'createbigcannons:recoil_spring',            // Arg 2: the item to replace
        'vintageimprovements:steel_spring'         // Arg 3: the item to replace it with
      )

      // Basin foundry lid: steel sheets instead of andesite alloy
      event.replaceInput(
        { id: 'createbigcannons:basin_foundry_lid' },
        'create:andesite_alloy',
        'tfc:metal/sheet/steel'
      )
      event.replaceInput(
        { id: 'createbigcannons:bronze_block' }, // Arg 1: the filter
        'createbigcannons:bronze_ingot',            // Arg 2: the item to replace
        'tfc:metal/ingot/bronze'         // Arg 3: the item to replace it with
      )

      event.replaceInput(
        { input: 'createbigcannons:nethersteel_ingot' },
        'createbigcannons:nethersteel_ingot',
        'tfc_metallurgy:metal/ingot/tungsten_steel'
      )
      // TODO: Make proper recipes for casting cannons with tungsten steel
      // Replace nethersteel with tungsten steel
      // event.replaceInput(
      //   { input: 'createbigcannons:molten_nethersteel' },
      //   'createbigcannons:molten_nethersteel',
      //   'tfc_metallurgy:metal/tungsten_steel'
      // )
      // event.custom({
      //     type: "createbigcannons:cannon_casting",
      //     ingredients: [
      //         {
      //             fluid: "tfc_metallurgy:metal/tungsten_steel", // Target liquid
      //             amount: 1000 // Fluid amount in mB
      //         },
      //         {
      //             item: "createbigcannons:very_large_cast_mould" // The mold used
      //         }
      //     ],
      //     results: [
      //         {
      //             item: "createbigcannons:unbored_very_large_nethersteel_cannon_layers", // The resulting casted part
      //             count: 1
      //         }
      //     ],
      //     processingTime: 300
      // })


    }
)