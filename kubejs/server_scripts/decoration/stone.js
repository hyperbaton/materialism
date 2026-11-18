// Decorative stone: Create's stone types from TFC rock
ServerEvents.recipes(event => {
  // Recipes for making the Create decorative blocks
  event.recipes.create.sequenced_assembly(
    'create:cut_granite',
    'tfc:rock/hardened/granite',
    [
      event.recipes.create.cutting('tfc:rock/hardened/granite','tfc:rock/hardened/granite'),
      event.recipes.vintageimprovements.polishing('tfc:rock/hardened/granite','tfc:rock/hardened/granite')
    ]
  ).transitionalItem('tfc:rock/hardened/granite').loops(6)
  event.recipes.create.sequenced_assembly(
    'create:cut_diorite',
    'tfc:rock/hardened/diorite',
    [
      event.recipes.create.cutting('tfc:rock/hardened/diorite','tfc:rock/hardened/diorite'),
      event.recipes.vintageimprovements.polishing('tfc:rock/hardened/diorite','tfc:rock/hardened/diorite')
    ]
  ).transitionalItem('tfc:rock/hardened/diorite').loops(6)
  event.recipes.create.sequenced_assembly(
    'create:cut_limestone',
    'tfc:rock/hardened/limestone',
    [
      event.recipes.create.cutting('tfc:rock/hardened/limestone','tfc:rock/hardened/limestone'),
      event.recipes.vintageimprovements.polishing('tfc:rock/hardened/limestone','tfc:rock/hardened/limestone')
    ]
  ).transitionalItem('tfc:rock/hardened/limestone').loops(6)
  event.recipes.create.sequenced_assembly(
    'create:cut_deepslate',
    'tfc:rock/hardened/slate',
    [
      event.recipes.create.cutting('tfc:rock/hardened/slate','tfc:rock/hardened/slate'),
      event.recipes.vintageimprovements.polishing('tfc:rock/hardened/slate','tfc:rock/hardened/slate')
    ]
  ).transitionalItem('tfc:rock/hardened/slate').loops(6)
  event.recipes.create.sequenced_assembly(
    'create:cut_deepslate',
    'tfc:rock/hardened/shale',
    [
      event.recipes.create.pressing('tfc:rock/hardened/shale','tfc:rock/hardened/shale'),
      event.recipes.create.cutting('tfc:rock/hardened/shale','tfc:rock/hardened/shale'),
      event.recipes.vintageimprovements.polishing('tfc:rock/hardened/shale','tfc:rock/hardened/shale')
    ]
  ).transitionalItem('tfc:rock/hardened/shale').loops(6)
  event.recipes.create.sequenced_assembly(
    'create:cut_dripstone',
    'tfc:rock/hardened/claystone',
    [
      event.recipes.create.cutting('tfc:rock/hardened/claystone','tfc:rock/hardened/claystone'),
      event.recipes.vintageimprovements.polishing('tfc:rock/hardened/claystone','tfc:rock/hardened/claystone')
    ]
  ).transitionalItem('tfc:rock/hardened/claystone').loops(6)
  event.recipes.create.sequenced_assembly(
    'create:cut_tuff',
    'tfc:rock/hardened/tuff',
    [
      event.recipes.create.cutting('tfc:rock/hardened/tuff','tfc:rock/hardened/tuff'),
      event.recipes.vintageimprovements.polishing('tfc:rock/hardened/tuff','tfc:rock/hardened/tuff')
    ]
  ).transitionalItem('tfc:rock/hardened/tuff').loops(6)
  event.recipes.create.sequenced_assembly(
    'create:cut_andesite',
    'tfc:rock/hardened/andesite',
    [
      event.recipes.create.cutting('tfc:rock/hardened/andesite','tfc:rock/hardened/andesite'),
      event.recipes.vintageimprovements.polishing('tfc:rock/hardened/andesite','tfc:rock/hardened/andesite')
    ]
  ).transitionalItem('tfc:rock/hardened/andesite').loops(6)
  event.recipes.create.sequenced_assembly(
    'create:cut_calcite',
    'tfc:rock/hardened/chalk',
    [
      event.recipes.create.cutting('tfc:rock/hardened/chalk','tfc:rock/hardened/chalk'),
      event.recipes.vintageimprovements.polishing('tfc:rock/hardened/chalk','tfc:rock/hardened/chalk')
    ]
  ).transitionalItem('tfc:rock/hardened/chalk').loops(6)
  // Advanced rocks:
  event.recipes.create.sequenced_assembly(
    'create:veridium',
    'tfc:rock/cobble/schist',
    [
      event.recipes.createDeploying('tfc:rock/cobble/schist', ['tfc:rock/cobble/schist', 'tfc:powder/emerald']),
      event.custom({type: 'vintageimprovements:pressurizing', ingredients: [{item: 'tfc:rock/cobble/schist'}, fluidIn('tfc:metal/bismuth_bronze', 100), fluidIn('tfc:green_dye', 250)], results: [{id: 'tfc:rock/cobble/schist'}], secondary_fluid_input: 1, heat_requirement: 'heated'}),
      event.recipes.vintageimprovements.polishing('tfc:rock/cobble/schist', 'tfc:rock/cobble/schist')
    ]
  ).transitionalItem('tfc:rock/cobble/schist').loops(1)
  event.recipes.create.sequenced_assembly(
    'create:crimsite',
    'tfc:rock/cobble/chert',
    [
      event.recipes.createDeploying('tfc:rock/cobble/chert', ['tfc:rock/cobble/chert', 'tfc:powder/ruby']),
      event.custom({type: 'vintageimprovements:pressurizing', ingredients: [{item: 'tfc:rock/cobble/chert'}, fluidIn('tfc_metallurgy:metal/beryllium_copper', 100), fluidIn('tfc:red_dye', 250)], results: [{id: 'tfc:rock/cobble/chert'}], secondary_fluid_input: 1, heat_requirement: 'heated'}),
      event.recipes.vintageimprovements.polishing('tfc:rock/cobble/chert', 'tfc:rock/cobble/chert')
    ]
  ).transitionalItem('tfc:rock/cobble/chert').loops(1)
  event.recipes.create.sequenced_assembly(
    'create:asurine',
    'tfc:rock/cobble/phyllite',
    [
      event.recipes.createDeploying('tfc:rock/cobble/phyllite', ['tfc:rock/cobble/phyllite', 'tfc:powder/lapis_lazuli']),
      event.custom({type: 'vintageimprovements:pressurizing', ingredients: [{item: 'tfc:rock/cobble/phyllite'}, fluidIn('tfc_metallurgy:metal/cobalt', 100), fluidIn('tfc:blue_dye', 250)], results: [{id: 'tfc:rock/cobble/phyllite'}], secondary_fluid_input: 1, heat_requirement: 'heated'}),
      event.recipes.vintageimprovements.polishing('tfc:rock/cobble/phyllite', 'tfc:rock/cobble/phyllite')
    ]
  ).transitionalItem('tfc:rock/cobble/phyllite').loops(1)
  event.recipes.create.sequenced_assembly(
    'create:ochrum',
    'tfc:rock/cobble/claystone',
    [
      event.recipes.createDeploying('tfc:rock/cobble/claystone', ['tfc:rock/cobble/claystone', 'tfc:powder/topaz']),
      event.custom({type: 'vintageimprovements:pressurizing', ingredients: [{item: 'tfc:rock/cobble/claystone'}, fluidIn('tfc_metallurgy:metal/constantan', 100), fluidIn('tfc:brown_dye', 250)], results: [{id: 'tfc:rock/cobble/claystone'}], secondary_fluid_input: 1, heat_requirement: 'heated'}),
      event.recipes.vintageimprovements.polishing('tfc:rock/cobble/claystone', 'tfc:rock/cobble/claystone')
    ]
  ).transitionalItem('tfc:rock/cobble/claystone').loops(1)
  event.remove('create:smelting/scoria')
  event.remove('create_mechanical_extruder:extruding/scoria')
  event.recipes.create.sequenced_assembly(
    'create:scoria',
    'tfc:rock/cobble/basalt',
    [
      event.recipes.create.filling('tfc:rock/cobble/basalt', ['tfc:rock/cobble/basalt', Fluid.of('tfmg:molten_slag', 100)]),
      event.custom({type: 'vintageimprovements:pressurizing', ingredients: [{item: 'tfc:rock/cobble/basalt'}, fluidIn('tfc:metal/cast_iron', 100)], results: [{id: 'tfc:rock/cobble/basalt'}], secondary_fluid_input: 1, heat_requirement: 'heated'}),
      event.recipes.vintageimprovements.vacuumizing('tfc:rock/cobble/basalt',
        ['tfc:rock/cobble/basalt']),
      event.recipes.vintageimprovements.polishing('tfc:rock/cobble/basalt', 'tfc:rock/cobble/basalt')
    ]
  ).transitionalItem('tfc:rock/cobble/basalt').loops(1)
  // TODO: Make recipes for schoria and schroria, using slag and mechanical extruder
})
