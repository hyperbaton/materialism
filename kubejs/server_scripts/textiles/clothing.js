// Clothing: TFC Ambiental wool clothes
ServerEvents.recipes(event => {
  // TFC Ambiental's wool clothes ship sewing recipes that TFC refuses to load.
  const woolSquares = ['WWWWWWWW', 'WWWWWWWW', 'WWWWWWWW', 'WWWWWWWW']
  const woolClothes = {
      wool_sweater: ['   ###', '   ###', '', '##     ##', '##     ##'],
      wool_hat: ['', ' #######', ' #     #', ' #     #', ' #     #'],
      wool_pants: ['', '    #', '    #', '    #', '    #'],
      wool_boots: ['   #', '   #', '   #####', '        #', '']
  }
  Object.keys(woolClothes).forEach(name => {
      let stitches = woolClothes[name].map(row => (row + '         ').substring(0, 9))
      event.recipes.tfc.sewing(`tfcambiental:${name}`, stitches, woolSquares)
  })
})
