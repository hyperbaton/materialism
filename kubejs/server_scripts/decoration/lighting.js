// Lighting
ServerEvents.recipes(event => {
  // Lighting
  event.remove({ id: 'solarpunk:streetlamp' })
  event.shaped('solarpunk:streetlamp', [
    'SGS',
    ' W ',
    ' I '
  ], {
    S: 'tfc:metal/sheet/wrought_iron',
    G: 'tfc:lamp_glass',
    W: '#c:wires/copper',
    I: 'tfc:metal/ingot/wrought_iron'
  }).id('kubejs:solarpunk/streetlamp')

  event.remove({ id: 'solarpunk:garden_light' })
  event.shaped('2x solarpunk:garden_light', [
    'P',
    'G',
    'A'
  ], {
    P: 'solarpunk:photovoltaic_cell',
    G: 'tfc:lamp_glass',
    A: 'tfc_metallurgy:metal/rod/aluminum'
  }).id('kubejs:solarpunk/garden_light')
})
