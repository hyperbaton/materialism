// Decorative metalwork
ServerEvents.recipes(event => {
  // Filigree railings
  const railings = {
    andesite: 'tfc_metallurgy:metal/sheet/aluminum',
    iron: 'tfc:metal/sheet/wrought_iron',
    copper: 'tfc:metal/sheet/copper',
    brass: 'tfc:metal/sheet/brass'
  }
  Object.keys(railings).forEach(metal => {
    event.remove({ id: `solarpunk:${metal}_filigree_railing` })
    event.shaped(`8x solarpunk:${metal}_filigree_railing`, [
      'SSS',
      'SSS'
    ], {
      S: railings[metal]
    }).id(`kubejs:solarpunk/${metal}_filigree_railing`)
  })
})
