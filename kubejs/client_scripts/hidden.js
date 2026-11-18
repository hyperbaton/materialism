// JEI hiding for the lists in startup_scripts/disabled.js; plain ids are matched exactly, so a missing item doesn't error

RecipeViewerEvents.removeEntries('item', event => {
  const exact = id => new RegExp('^' + id.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '$')
  global.DISABLED.items.concat(global.DISABLED.hidden).forEach(entry => event.remove(typeof entry == 'string' ? exact(entry) : entry))
})

RecipeViewerEvents.removeEntries('fluid', event => {
  global.DISABLED.fluids.forEach(entry => event.remove(entry))
})

// Aeronautics' blend-to-levitite conversions in Create's mystery category
RecipeViewerEvents.removeRecipes(event => {
  event.removeFromCategory('create:mystery_conversion', ['aeronautics:conversion_levitite', 'aeronautics:conversion_pearlescent_levitite'])
})
