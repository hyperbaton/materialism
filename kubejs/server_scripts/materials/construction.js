// Concrete
ServerEvents.recipes(event => {
  // Use TFC gravel for concrete
  swapInputs(event, [
    ['tfmg:mixing/concrete_mixture', 'minecraft:gravel', '#c:gravels'],
    ['tfmg:mixing/concrete_mixture', 'minecraft:sand', '#c:sands/silica'],
    ['tfmg:mixing/concrete_mixture_from_slag', 'minecraft:gravel', '#c:gravels']
  ])
  // Vat concrete, keeping the proportions of the mixing chain (a mixture batch is 250 mB water -> 1000 mB)
  const vatConcrete = (ingredients, water, result, minSize) => {
    event.custom({
      type: 'tfmg:vat',
      ingredients: ingredients.concat([fluidIn('minecraft:water', water)]),
      machines: ['tfmg:mixer'],
      min_size: minSize,
      results: [{amount: result, id: 'tfmg:liquid_concrete'}]
    })
  }
  event.remove({id: 'tfmg:vat/concrete'})
  // From ready-made mixture
  vatConcrete([{item: 'tfmg:concrete_mixture'}], 250, 1000, 1)
  // From base inputs: 1 sand + 1 gravel + 1 cement = 16 mixture
  vatConcrete([{tag: 'c:sands/silica'}, {tag: 'c:gravels'}, {item: 'tfmg:cement'}], 4000, 16000, 2)
  // From slag: 1 slag + 1 cement + 1 gravel = 32 mixture
  vatConcrete([{item: 'tfmg:slag'}, {tag: 'c:gravels'}, {item: 'tfmg:cement'}], 8000, 32000, 4)
})
