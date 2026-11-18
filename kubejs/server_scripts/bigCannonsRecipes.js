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

    swapInputs(event, [
      ['createbigcannons:wrought_iron_cannon_end', 'minecraft:iron_ingot', 'tfc:metal/rod/wrought_iron']
    ])
      swapInputs(event, [
        ['createbigcannons:wrought_iron_drop_mortar_end', 'minecraft:iron_bars', 'tfc:metal/bars/wrought_iron'],
        ['createbigcannons:worm_head', 'minecraft:iron_bars', 'tfc:metal/bars/steel'],
        ['createbigcannons:solid_shot', 'minecraft:iron_nugget', 'tfc:metal/rod/wrought_iron'],
        ['createbigcannons:empty_powder_charge', 'minecraft:string', 'tfc:wool_yarn'],
        ['createbigcannons:mixing/congealed_nitro_no_nether', 'minecraft:slime_ball', 'tfc:glue'],
        ['createbigcannons:proximity_fuze', 'minecraft:quartz', 'create:electron_tube'],
        ['createbigcannons:proximity_fuze', 'minecraft:iron_bars', 'tfc:metal/bars/steel'],
        ['createbigcannons:proximity_fuze', 'minecraft:iron_ingot', 'tfc:metal/sheet/steel'],
        ['createbigcannons:cannon_welder', 'create:blaze_burner', 'tfc:powder/sulfur'],
        ['minecraft:cannon_welder_mirrored', 'create:blaze_burner', 'tfc:powder/sulfur'],
        ['createbigcannons:cannon_drill', 'minecraft:iron_ingot', 'tfc_metallurgy:metal/double_sheet/titanium'],
        // Basin foundry lid: steel sheets instead of andesite alloy
        ['createbigcannons:basin_foundry_lid', 'create:andesite_alloy', 'tfc:metal/sheet/steel']
      ])

      // Replace the metal block recipes with TFC's plated blocks, and add a dedicated 900mB heating recipe for each
      ;[
        {metal: 'bronze', block: 'createbigcannons:bronze_block', plated: 'tfc:metal/block/bronze', fluid: 'tfc:metal/bronze', temperature: 950},
        {metal: 'cast_iron', block: 'createbigcannons:cast_iron_block', plated: 'tfc:metal/block/cast_iron', fluid: 'tfc:metal/cast_iron', temperature: 1535},
        {metal: 'steel', block: 'createbigcannons:steel_block', plated: 'tfc:metal/block/steel', fluid: 'tfc:metal/steel', temperature: 1540},
        {metal: 'nethersteel', block: 'createbigcannons:nethersteel_block', plated: 'tfc_metallurgy:metal/block/tungsten_steel', fluid: 'tfc_metallurgy:metal/tungsten_steel', temperature: 3000}
      ].forEach(entry => {
        const block = entry.block
        const plated = entry.plated
        const fluid = entry.fluid
        const temperature = entry.temperature
        event.remove({id: block})
        event.shaped(block, [
          '###',
          '###',
          '###'
        ], {'#': plated})
        event.remove({id: `createbigcannons:compacting/forge_${block.split(':')[1]}`})
        event.custom({
          type: 'create:compacting',
          ingredients: [fluidIn(fluid, 900)],
          results: [{id: block}]
        })
        event.custom({
          type: 'tfc:heating',
          ingredient: {item: block},
          result_fluid: {amount: 900, id: fluid},
          temperature: temperature
        })
      })

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

// Detach metal block from the shared c:storage_blocks/<metal> tags so they don't get a
// standard 100 mB heating recipe
ServerEvents.tags('item', event => {
    event.remove('c:storage_blocks/bronze', 'createbigcannons:bronze_block')
    event.remove('c:storage_blocks/cast_iron', 'createbigcannons:cast_iron_block')
    event.remove('c:storage_blocks/steel', 'createbigcannons:steel_block')
    event.remove('c:storage_blocks/nethersteel', 'createbigcannons:nethersteel_block')
})