// TerraFirmaCraft: fixes and automation of its own recipes
ServerEvents.recipes(event => {
   // TFC composter: re-registered explicitly. It wasn't showing in-game even given it wasn't removed
   event.remove({ id: 'tfc:crafting/composter' })
   event.shaped('tfc:composter', [
       'L L',
       'LDL',
       'LLL'
   ], {
       L: '#tfc:lumber',
       D: '#minecraft:dirt'
   })

   // Automate twig -> stick
   event.custom({
       type: 'vintageimprovements:polishing',
       ingredients: [{ tag: 'tfc:twigs' }],
       results: [{ count: 1, id: 'minecraft:stick' }],
       processing_time: 20,
       speed_limits: 1
   })

   // minecraft:string is superseded by #c:strings (wool yarn, plant/bamboo string, etc.; swapped in unify.js)
   event.remove({ output: 'minecraft:string' })

   // Remove unwanted recipes introduced by TFC
   event.remove({id: 'tfc:crafting/vanilla/redstone/powered_rail'})

   // Remove vanilla recipes with TFC alternative
   event.remove('minecraft:minecart')

   event.remove({id: 'minecraft:lightning_rod'})
   event.remove({id: 'tfc:crafting/vanilla/lightning_rod'})
   // Add a custom recipe for lightning rods
   event.recipes.create.sequenced_assembly(
       [
           Item.of('minecraft:lightning_rod', 1)
       ],
       // Input item: Smooth stone slab
       'tfc:metal/rod/copper',
       // Sequence of assembly steps
       [
           event.recipes.createFilling(
               'tfc:metal/rod/copper',
               ['tfc:metal/rod/copper', Fluid.of('tfc_metallurgy:metal/solder', 10)]
           ),
           event.recipes.createDeploying('tfc:metal/rod/copper', ['tfc:metal/rod/copper', 'tfc:metal/rod/copper']),
           event.recipes.createPressing('tfc:metal/rod/copper', 'tfc:metal/rod/copper')
       ]
   ).transitionalItem('tfc:metal/rod/copper')
   .loops(2);

   // Small ore vein indicators can be quern-ground too
   event.recipes.tfc.quern('tfc:powder/graphite', 'kubejs:small_graphite')
   event.recipes.tfc.quern('tfc:powder/saltpeter', 'kubejs:small_saltpeter')
   event.recipes.tfc.quern('tfc:powder/sulfur', 'kubejs:small_sulfur')
   event.recipes.tfc.quern('kubejs:certus_quartz_powder', 'kubejs:small_certus_quartz')
   event.recipes.tfc.quern('tfc:powder/salt', 'kubejs:small_halite')
   event.custom({
     type: 'tfc:quern',
     ingredient: [{item: 'kubejs:small_cinnabar'}, {item: 'kubejs:small_cryolite'}],
     result: {count: 1, id: 'minecraft:redstone'}
   })

   // Early game rose quartz recipes
   event.recipes.tfc.quern('kubejs:certus_quartz_powder', 'tfc_metallurgy:ore/certus_quartz')
   event.shapeless('1x kubejs:redstone_imbued_quartz_powder',[
       'kubejs:certus_quartz_powder',
       'minecraft:redstone',
       'minecraft:redstone',
       'minecraft:redstone',
       'minecraft:redstone',
       'minecraft:redstone',
       'minecraft:redstone',
       'firmalife:beeswax'
     ])
   // Consider replacing this with a compressor recipe
   event.custom({
       type: 'tfc:heating',
       ingredient: { item: 'kubejs:redstone_imbued_quartz_powder' },
       temperature: 1800,
       result_item: {
           stack: { id: 'create:rose_quartz' },
           modifiers: [{ type: 'tfc:chance', chance: 0.4 }]
       }
   })

   event.remove('tfc:crafting/powderkeg_from_barrel')
   swapInputs(event, [
     ['tfc:crafting/powderkeg', '#tfc:lumber', 'tfmg:hardened_planks']
   ])
})
