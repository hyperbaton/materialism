// Gem cutting
ServerEvents.recipes(event => {
  // Cut gems with vintageimprovements polishing
  const gemTypes = [
      'ruby',
      'sapphire',
      'emerald',
      'diamond',
      'topaz',
      'amethyst',
      'opal',
      'pyrite',
      'lapis_lazuli'
  ]
  addGemPolishingRecipes(event, gemTypes)
  function addGemPolishingRecipes(event, gems) {
      gems.forEach(gem => {
          event.recipes.vintageimprovements.polishing(
              `tfc:gem/${gem}`,
              `tfc:ore/${gem}`
          )
      })
  }
})
