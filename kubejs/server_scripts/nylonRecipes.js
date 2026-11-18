// Nylon fiber: melt spinning, drawing and twisting, then weaving
ServerEvents.recipes(event => {
  const id = name => 'kubejs:nylon/' + name

  // Spinneret: a molten nylon source extruded over a water quench, 1000 mB into ten filaments (100 mB each, as the ingot)
  event.custom({
    type: 'create_mechanical_extruder:extruding',
    advanced: true,
    blockIngredients: { first: { blocks: 'chemica:molten_nylon' }, second: { blocks: 'minecraft:water' } },
    consumeBlocks: { first: true, second: false },
    result: { id: 'kubejs:nylon_filament', count: 10 }
  }).id(id('extruding/nylon_filament'))

  // Drawing between rollers aligns the chains and gives the fiber its strength
  event.custom({
    type: 'createaddition:rolling',
    ingredients: [{ item: 'kubejs:nylon_filament' }],
    results: [{ id: 'kubejs:drawn_nylon_filament' }]
  }).id(id('rolling/drawn_nylon_filament'))

  // Twisting into thread, by coiling machine or spindle
  event.custom({
    type: 'vintageimprovements:coiling',
    spring_color: 'eef0f4',
    ingredients: [{ item: 'kubejs:drawn_nylon_filament' }],
    results: [{ id: 'kubejs:nylon_thread', count: 4 }],
    processing_time: 60
  }).id(id('coiling/nylon_thread'))
  event.custom({
    type: 'tfc:advanced_shapeless_crafting',
    ingredients: [{ item: 'tfc:spindle' }, { item: 'kubejs:drawn_nylon_filament' }],
    primary_ingredient: { item: 'tfc:spindle' },
    remainder: { modifiers: [{ type: 'tfc:damage_crafting_remainder' }] },
    result: { id: 'kubejs:nylon_thread', count: 4 }
  }).id(id('crafting/nylon_thread'))

  // Weaving, like wool cloth from yarn
  event.custom({
    type: 'tfc:loom',
    ingredient: { item: 'kubejs:nylon_thread', count: 16 },
    result: { id: 'kubejs:nylon_cloth' },
    steps: 16,
    texture: 'minecraft:block/white_wool'
  }).id(id('loom/nylon_cloth'))

  // Silk cloth keeps its strings but not nylon thread, so the two loom recipes don't overlap
  event.remove({ id: 'tfc:loom/silk_cloth' })
  event.custom({
    type: 'tfc:loom',
    ingredient: { tag: 'kubejs:silk_cloth_strings', count: 24 },
    result: { id: 'tfc:silk_cloth' },
    steps: 24,
    texture: 'minecraft:block/white_wool'
  }).id(id('loom/silk_cloth'))
})
