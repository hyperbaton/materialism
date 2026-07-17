ServerEvents.recipes(event => {
    // Invar alloy used wrought iron, which can't be obtained. Changed it to cast iron instead.
    event.remove({ id: 'tfc_metallurgy:alloy/invar' })
    event.custom({
        type: 'tfc:alloy',
        result: 'tfc_metallurgy:metal/invar',
        contents: [
            { min: 0.6, max: 0.7, fluid: 'tfc:metal/cast_iron' },
            { min: 0.3, max: 0.4, fluid: 'tfc:metal/nickel' }
        ]
    })

    // TFC Metallum's own fishing rod recipes still key off #c:string (singular), unlike
    // base TFC's #c:strings (plural) -- TODO: transitional fix until the mod itself is updated.
    event.replaceInput({ id: /^tfc_metallurgy:crafting\/metal\/.*_fishing_rod$/ }, '#c:string', '#c:strings')

    // Remove graphite melting recipes
    event.remove({id: /tfc_metallurgy:heating.*graphite.*/})
    event.remove({id: 'tfc_metallurgy:casting/graphite_ingot'})
    event.remove({id: 'tfc_metallurgy:casting/graphite_fire_ingot'})
    // Add graphite conforming recipes
    event.recipes.create.compacting('tfc_metallurgy:metal/ingot/graphite', '20x tfc:powder/graphite')
    event.recipes.create.cutting('2x tfc_metallurgy:metal/rod/graphite', 'tfc_metallurgy:metal/ingot/graphite')

    // Zinc powder from sphalerite powder
    event.recipes.create.milling('kubejs:powder/zinc', 'tfc:powder/sphalerite')

    // Remove thorium recipes
    removeToolsAndArmor('thorium')
    removeToolsAndArmor('uranium')

    // Avoid monazite being melted into thorium (use bloomery instead)
    event.remove({id: /tfc_metallurgy:heating\/ore.*monazite/})
    event.recipes.create.crushing('2x kubejs:powder/monazite', 'tfc_metallurgy:ore/small_monazite')
    event.recipes.create.crushing('3x kubejs:powder/monazite', 'tfc_metallurgy:ore/poor_monazite')
    event.recipes.create.crushing('5x kubejs:powder/monazite', 'tfc_metallurgy:ore/normal_monazite')
    event.recipes.create.crushing('7x kubejs:powder/monazite', 'tfc_metallurgy:ore/rich_monazite')
    // It seems it's not possible to put more than 1 item quantity in the input. For now, let's just reduce how much we get.
    event.custom({type: 'tfmg:industrial_blasting',
      ingredients: [{item: 'kubejs:powder/monazite'}],
      results: [{id: 'tfc_metallurgy:metal/thorium', amount: 5}, {id: 'tfmg:molten_slag', amount: 1}],
      processing_time: 500
    })
    event.remove({id: /tfc_metallurgy:heating\/ore.*uraninite/})
    event.recipes.create.crushing('2x kubejs:powder/uraninite', 'tfc_metallurgy:ore/small_uraninite')
    event.recipes.create.crushing('3x kubejs:powder/uraninite', 'tfc_metallurgy:ore/poor_uraninite')
    event.recipes.create.crushing('5x kubejs:powder/uraninite', 'tfc_metallurgy:ore/normal_uraninite')
    event.recipes.create.crushing('7x kubejs:powder/uraninite', 'tfc_metallurgy:ore/rich_uraninite')
    event.custom({type: 'tfmg:industrial_blasting',
      ingredients: [{item: 'kubejs:powder/uraninite'}],
      results: [{id: 'tfc_metallurgy:metal/uranium', amount: 5}, {id: 'tfmg:molten_slag', amount: 1}],
      processing_time: 2000
    })
    
    // Crushing magnesite
    event.recipes.create.crushing('1x tfcvolcanoes:mineral/powder/magnesite', 'tfcvolcanoes:mineral/magnesite')
    event.recipes.create.crushing('2x tfcvolcanoes:mineral/powder/magnesite', 'tfc_metallurgy:ore/small_magnesite')
    event.recipes.create.crushing('3x tfcvolcanoes:mineral/powder/magnesite', 'tfc_metallurgy:ore/poor_magnesite')
    event.recipes.create.crushing('5x tfcvolcanoes:mineral/powder/magnesite', 'tfc_metallurgy:ore/normal_magnesite')
    event.recipes.create.crushing('7x tfcvolcanoes:mineral/powder/magnesite', 'tfc_metallurgy:ore/rich_magnesite')

    function removeToolsAndArmor(metal) {
        event.remove({output: 'tfc_metallurgy:metal/anvil/' + metal})
        event.remove({output: 'tfc_metallurgy:metal/chain/' + metal})
        event.remove({output: 'tfc_metallurgy:metal/lamp/' + metal})
        event.remove({output: 'tfc_metallurgy:metal/trapdoor/' + metal})
        event.remove({output: 'tfc_metallurgy:metal/tuyere/' + metal})
        event.remove({output: 'tfc_metallurgy:metal/fish_hook/' + metal})
        event.remove({output: 'tfc_metallurgy:metal/fishing_rod/' + metal})
        event.remove({output: 'tfc_metallurgy:metal/pickaxe/' + metal})
        event.remove({output: 'tfc_metallurgy:metal/pickaxe_head/' + metal})
        event.remove({output: 'tfc_metallurgy:metal/propick/' + metal})
        event.remove({output: 'tfc_metallurgy:metal/propick_head/' + metal})
        event.remove({output: 'tfc_metallurgy:metal/axe/' + metal})
        event.remove({output: 'tfc_metallurgy:metal/axe_head/' + metal})
        event.remove({output: 'tfc_metallurgy:metal/shovel/' + metal})
        event.remove({output: 'tfc_metallurgy:metal/shovel_head/' + metal})
        event.remove({output: 'tfc_metallurgy:metal/hoe/' + metal})
        event.remove({output: 'tfc_metallurgy:metal/hoe_head/' + metal})
        event.remove({output: 'tfc_metallurgy:metal/chisel/' + metal})
        event.remove({output: 'tfc_metallurgy:metal/chisel_head/' + metal})
        event.remove({output: 'tfc_metallurgy:metal/hammer/' + metal})
        event.remove({output: 'tfc_metallurgy:metal/hammer_head/' + metal})
        event.remove({output: 'tfc_metallurgy:metal/saw/' + metal})
        event.remove({output: 'tfc_metallurgy:metal/saw_blade/' + metal})
        event.remove({output: 'tfc_metallurgy:metal/javelin/' + metal})
        event.remove({output: 'tfc_metallurgy:metal/javelin_head/' + metal})
        event.remove({output: 'tfc_metallurgy:metal/sword/' + metal})
        event.remove({output: 'tfc_metallurgy:metal/sword_blade/' + metal})
        event.remove({output: 'tfc_metallurgy:metal/mace/' + metal})
        event.remove({output: 'tfc_metallurgy:metal/mace_head/' + metal})
        event.remove({output: 'tfc_metallurgy:metal/knife/' + metal})
        event.remove({output: 'tfc_metallurgy:metal/knife_blade/' + metal})
        event.remove({output: 'tfc_metallurgy:metal/scythe/' + metal})
        event.remove({output: 'tfc_metallurgy:metal/scythe_blade/' + metal})
        event.remove({output: 'tfc_metallurgy:metal/shears/' + metal})
        event.remove({output: 'tfc_metallurgy:metal/unfinished_helmet/' + metal})
        event.remove({output: 'tfc_metallurgy:metal/helmet/' + metal})
        event.remove({output: 'tfc_metallurgy:metal/unfinished_chestplate/' + metal})
        event.remove({output: 'tfc_metallurgy:metal/chestplate/' + metal})
        event.remove({output: 'tfc_metallurgy:metal/unfinished_greaves/' + metal})
        event.remove({output: 'tfc_metallurgy:metal/greaves/' + metal})
        event.remove({output: 'tfc_metallurgy:metal/unfinished_boots/' + metal})
        event.remove({output: 'tfc_metallurgy:metal/boots/' + metal})
        event.remove({output: 'tfc_metallurgy:metal/unfinished_lamp/' + metal})
        event.remove({output: 'tfc_metallurgy:metal/shield/' + metal})
    }
})