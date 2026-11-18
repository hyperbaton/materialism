// Create-family metal blocks follow the Big Cannons pattern (military/cannons.js): 9 TFC plated blocks or 900 mB
// compacted, melting back to 900 mB, never uncrafted into ingots
const METAL_BLOCKS = [
  ['create:brass_block', 'tfc', 'brass', 930],
  ['create:zinc_block', 'tfc', 'zinc', 420],
  ['createaddition:electrum_block', 'tfc_metallurgy', 'electrum', 700],
  ['tfmg:aluminum_block', 'tfc_metallurgy', 'aluminum', 660],
  ['tfmg:cast_iron_block', 'tfc', 'cast_iron', 1535],
  ['tfmg:lead_block', 'tfc_metallurgy', 'lead', 328],
  ['tfmg:lithium_block', 'tfc_metallurgy', 'lithium', 180],
  ['tfmg:nickel_block', 'tfc', 'nickel', 1453],
  ['tfmg:steel_block', 'tfc', 'steel', 1540],
  ['vintageimprovements:vanadium_block', 'tfc_metallurgy', 'vanadium', 1910]
]

ServerEvents.recipes(event => {
  METAL_BLOCKS.forEach(([block, ns, metal, temperature]) => {
    const fluid = `${ns}:metal/${metal}`
    const name = block.replace(':', '/')
    event.remove({ output: block })
    event.remove({ input: block, output: /(ingot|nugget)/ })
    event.shaped(block, ['###', '###', '###'], { '#': `${ns}:metal/block/${metal}` }).id(`kubejs:metal_blocks/${name}`)
    event.custom({
      type: 'create:compacting',
      ingredients: [fluidIn(fluid, 900)],
      results: [{ id: block }]
    }).id(`kubejs:metal_blocks/compacting/${name}`)
    event.custom({
      type: 'tfc:heating',
      ingredient: { item: block },
      result_fluid: { amount: 900, id: fluid },
      temperature: temperature
    }).id(`kubejs:metal_blocks/heating/${name}`)
  })
})

// Out of the c:storage_blocks tags, so they get neither TFC's 100 mB melt nor tag-based uncrafting
ServerEvents.tags('item', event => {
  METAL_BLOCKS.forEach(([block, ns, metal]) => event.remove(`c:storage_blocks/${metal}`, block))
})
