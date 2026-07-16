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

      // Cast iron nugget: duplicates tfmg:cast_iron_nugget (which is kept as canonical).
      // Its own ingot/fluid are already dead above, so just drop its remaining recipes
      event.remove({ id: 'createbigcannons:cast_iron_ingot_from_nuggets' })
      event.remove({ id: 'createbigcannons:cast_iron_nugget' })
      event.remove({ id: 'createbigcannons:compacting/forge_cast_iron_nugget' })
      event.remove({ id: 'createbigcannons:melting/melt_cast_iron_nugget' })

      // Nethersteel nugget becomes the canonical tungsten steel nugget
      event.remove({ id: 'createbigcannons:nethersteel_ingot_from_nuggets' })
      event.remove({ id: 'createbigcannons:nethersteel_nugget' })
      event.remove({ id: 'createbigcannons:compacting/forge_nethersteel_nugget' })
      event.remove({ id: 'createbigcannons:melting/melt_nethersteel_nugget' })
      event.shapeless('10x createbigcannons:nethersteel_nugget', ['tfc_metallurgy:metal/ingot/tungsten_steel', '#tfc:chisels']).damageIngredient(Ingredient.of('#tfc:chisels'))
      event.custom({ type: 'tfc:heating', ingredient: { item: 'createbigcannons:nethersteel_nugget' }, result_fluid: { amount: 10, id: 'tfc_metallurgy:metal/tungsten_steel' }, temperature: 1535 })
      event.custom({ type: 'create:deploying', ingredients: [{ item: 'tfc_metallurgy:metal/ingot/tungsten_steel' }, { tag: 'tfc:chisels' }], results: [{ id: 'createbigcannons:nethersteel_nugget', count: 10 }] })

      // Bronze scrap becomes the canonical bronze nugget
      event.remove({ id: 'createbigcannons:bronze_ingot_from_nuggets' })
      event.remove({ id: 'createbigcannons:bronze_scrap' })
      event.shapeless('10x createbigcannons:bronze_scrap', ['tfc:metal/ingot/bronze', '#tfc:chisels']).damageIngredient(Ingredient.of('#tfc:chisels'))
      event.custom({ type: 'create:deploying', ingredients: [{ item: 'tfc:metal/ingot/bronze' }, { tag: 'tfc:chisels' }], results: [{ id: 'createbigcannons:bronze_scrap', count: 10 }] })
    }
)

// The 6 nethersteel casting recipes (unbored very_small/small/medium/large/very_large cannon
// layers + the screw breech) are NOT normal RecipeManager recipes -- they live in Big Cannons'
// own "block_recipes" registry (data/createbigcannons/createbigcannons/block_recipes/*.json,
// type "createbigcannons:cannon_casting"), which ServerEvents.recipes/event.custom cannot
// reach (that's why the event.custom attempt above did nothing). Each of those recipes takes
// its fluid as a TAG match: "fluid": { "tag": "c:molten_nethersteel" }. So instead of touching
// the recipes at all, we repoint that tag at tungsten steel.
ServerEvents.tags('fluid', event => {
    event.remove('c:molten_nethersteel', 'createbigcannons:molten_nethersteel')
    event.remove('c:molten_nethersteel', 'createbigcannons:flowing_molten_nethersteel')
    event.add('c:molten_nethersteel', 'tfc_metallurgy:metal/tungsten_steel')
    event.add('c:molten_nethersteel', 'tfc_metallurgy:metal/flowing_tungsten_steel')
})