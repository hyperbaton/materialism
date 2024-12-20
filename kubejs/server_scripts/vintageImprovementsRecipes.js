ServerEvents.recipes(event => {

    // Remove unwanted recipes
    event.remove({id: 'vintageimprovements:coiling/andesite_rod'})
    event.remove({id: 'vintageimprovements:coiling/blaze_rod'})
    event.remove({id: 'vintageimprovements:coiling/netherite_rod'})
    event.remove({id: 'vintageimprovements:coiling/nethersteel_rod'})
    event.remove({id: 'vintageimprovements:coiling/andesite_wire'})
    event.remove({id: 'vintageimprovements:coiling/netherite_wire'})
    event.remove({id: 'vintageimprovements:coiling/nethersteel_wire'})

    
    event.remove({id: 'vintageimprovements:pressing/andesite_alloy'})
    event.remove({id: 'vintageimprovements:hammering/netherite_ingot'})
    event.remove({id: 'vintageimprovements:hammering/nethersteel_ingot'})
    event.remove({id: 'vintageimprovements:rolling/andesite_alloy'})
    event.remove({id: 'vintageimprovements:rolling/netherite_plate'})
    event.remove({id: 'vintageimprovements:rolling/nethersteel_plate'})
    event.remove({id: 'vintageimprovements:rolling/andesite_plate'})
    event.remove({id: 'vintageimprovements:rolling/netherite_rod'})
    event.remove({id: 'vintageimprovements:rolling/nethersteel_rod'})
    event.remove({id: 'vintageimprovements:coiling/nethersteel_wire'})
    event.remove({id: 'vintageimprovements:coiling/nethersteel_wire'})
    event.remove({id: 'vintageimprovements:coiling/nethersteel_wire'})
    event.remove({id: 'tfc_metal_items:seq_pressing/sheets/pig_iron'})

    event.remove({id: /vintageimprovements:pressing\/\w+_ingot/})

    // Lathe recipes
    event.remove({id: 'tfc_metal_items:crafting/steel_pressing_head'})
    event.recipes.vintageimprovements.turning('tfc_metal_items:steel_pressing_head', 'tfc:metal/block/steel').processingTime(300)
    event.recipes.vintageimprovements.turning('vintageimprovements:w_shaped_curving_head', 'tfc:metal/block/steel').processingTime(300)
    event.recipes.vintageimprovements.turning('vintageimprovements:v_shaped_curving_head', 'tfc:metal/block/steel').processingTime(300)

    // Curving recipes
    event.remove({id: 'vintageimprovements:curving/iron_sheet'})
    event.remove({id: 'vintageimprovements:curving/diamond'})
    event.recipes.vintageimprovements.curving('createdeco:zinc_support_wedge', 'tfc:metal/sheet/zinc').head("vintageimprovements:v_shaped_curving_head")
    event.recipes.vintageimprovements.curving('createdeco:brass_support_wedge', 'tfc:metal/sheet/brass').head("vintageimprovements:v_shaped_curving_head")
    event.recipes.vintageimprovements.curving('createdeco:copper_support_wedge', 'tfc:metal/sheet/copper').head("vintageimprovements:v_shaped_curving_head")
    event.recipes.vintageimprovements.curving('createdeco:iron_support_wedge', 'tfc:metal/sheet/wrought_iron').head("vintageimprovements:v_shaped_curving_head")
    event.recipes.vintageimprovements.curving('createdeco:andesite_support_wedge', 'tfc_metallurgy:metal/sheet/aluminum').head("vintageimprovements:v_shaped_curving_head")

    event.replaceInput(
      { id: 'vintageimprovements:turning/convex_curving_head' }, // Arg 1: the filter
      'minecraft:iron_block',            // Arg 2: the item to replace
      'tfc:metal/block/steel'         // Arg 3: the item to replace it with
    )
    event.replaceInput(
      { id: 'vintageimprovements:turning/concave_curving_head' }, // Arg 1: the filter
      'minecraft:iron_block',            // Arg 2: the item to replace
      'tfc:metal/block/steel'         // Arg 3: the item to replace it with
    )
    event.replaceInput(
      { id: 'createdeco:zinc_support_wedge' }, // Arg 1: the filter
      'createdeco:zinc_sheet',            // Arg 2: the item to replace
      'tfc:metal/sheet/zinc'         // Arg 3: the item to replace it with
    )
  })