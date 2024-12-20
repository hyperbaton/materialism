ServerEvents.recipes(event => {

  // Support wedges are made with the curving press
  event.remove({id: 'createdeco:zinc_support_wedge'})
  event.remove({id: 'createdeco:andesite_support_wedge'})
  event.remove({id: 'createdeco:brass_support_wedge'})
  event.remove({id: 'createdeco:iron_support_wedge'})
  event.remove({id: 'createdeco:copper_support_wedge'})
  event.remove({id: 'createdeco:industrial_iron_support_wedge'})
  event.remove({id: 'createdeco:zinc_support_wedge_from_stonecutting'})
  event.remove({id: 'createdeco:andesite_support_wedge_from_stonecutting'})
  event.remove({id: 'createdeco:brass_support_wedge_from_stonecutting'})
  event.remove({id: 'createdeco:iron_support_wedge_from_stonecutting'})
  event.remove({id: 'createdeco:copper_support_wedge_from_stonecutting'})
  event.remove({id: 'createdeco:industrial_iron_support_wedge_from_stonecutting'})
  event.remove({id: "createdeco:pressing/zinc_sheet"})
  event.remove({id: "createdeco:pressing/coins/netherite_coin"})
  event.replaceInput(
      { id: 'createdeco:umber_bricks' }, // Arg 1: the filter
      'minecraft:brick',            // Arg 2: the item to replace
      '#tfc:rock/chiseled_bricks'         // Arg 3: the item to replace it with
    )
  
  }
)