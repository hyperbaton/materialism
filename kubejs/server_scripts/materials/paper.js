// Paper, cardboard and sandpaper
ServerEvents.recipes(event => {
      // Cardboard chain: explicit pulp recipe (4x straw + water in a Mixer) so it's always
      // craftable and JEI-visible, independent of the #create:pulpifiable tag (which the
      // vanilla create:pulp recipe relies on, and which only updates on a full relog).
      event.custom({
          type: 'create:mixing',
          ingredients: [
              { item: 'tfc:straw' }, { item: 'tfc:straw' },
              { item: 'tfc:straw' }, { item: 'tfc:straw' },
              fluidIn('minecraft:water', 250)
          ],
          results: [{ id: 'create:pulp' }]
      })
      // Flexible version: any #create:pulpifiable fibre (straw/papyrus/jute/thatch/...).
      // Re-added here because the jar's own create:pulp recipe isn't loading in-pack.
      event.custom({
          type: 'create:mixing',
          ingredients: [
              { tag: 'create:pulpifiable' }, { tag: 'create:pulpifiable' },
              { tag: 'create:pulpifiable' }, { tag: 'create:pulpifiable' },
              fluidIn('minecraft:water', 250)
          ],
          results: [{ id: 'create:pulp' }]
      })

      event.custom({
          type: 'createaddition:rolling',
          ingredients: [{ item: 'create:pulp' }],
          results: [{ id: 'tfc:unrefined_paper' }]
      })

      // Add a custom recipe for sandpaper
      event.remove({id: 'tfc:crafting/sandpaper'})

      // Sandpaper seq assembly recipe requires deployers, which require sandpaper.
      // So we need a regular crafting recipe, but more expensive
      event.shapeless('tfc:sandpaper', [
          'minecraft:paper',
          'tfc:powder/flux',
          'tfc:glue',
          'tfc:glue',
          '#c:sands',
          '#tfc:gem_powders',
          '#tfc:gem_powders'
      ])
  event.recipes.create.sequenced_assembly([
      CreateItem.of('tfc:sandpaper', 0.95),
      CreateItem.of('minecraft:paper', 0.05)
  ], 'minecraft:paper', [ 
      event.recipes.createDeploying('minecraft:paper', ['minecraft:paper', 'tfc:glue']),
      event.recipes.createDeploying('minecraft:paper', ['minecraft:paper', 'tfc:powder/flux']),
      // Wrap the tags here:
      event.recipes.createDeploying('minecraft:paper', ['minecraft:paper', Ingredient.of('#c:sands/volcanic')]),
      event.recipes.createDeploying('minecraft:paper', ['minecraft:paper', Ingredient.of('#tfc:gem_powders')]),
      event.recipes.createPressing('minecraft:paper', 'minecraft:paper')
  ]).transitionalItem('minecraft:paper').loops(1)
})
