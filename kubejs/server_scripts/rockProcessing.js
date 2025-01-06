ServerEvents.recipes(event => {
    const rocks = [
        'granite',
        'diorite',
        'gabbro',
        'dacite',
        'basalt',
        'rhyolite',
        'andesite',
        'schist',
        'gneiss',
        'phyllite',
        'quartzite',
        'marble',
        'slate',
        'shale',
        'limestone',
        'dolomite',
        'chalk',
        'conglomerate',
        'claystone',
        'chert'
    ]

    rocks.forEach(rock =>
        event.recipes.create.crushing(`tfc:rock/cobble/${rock}`, `tfc:rock/raw/${rock}`)
    )
    rocks.forEach(rock =>
        event.recipes.create.crushing(`tfc:rock/gravel/${rock}`, `tfc:rock/cobble/${rock}`)
    )

    // Sifting mesh recipes
    event.remove('createsifter:brass_mesh')
    event.recipes.create.sequenced_assembly([
        Item.of('createsifter:brass_mesh', 1)
    ], 'tfc:metal/rod/brass', [
        event.recipes.create.deploying('tfc:metal/rod/brass', ['tfc:metal/rod/brass', 'tfc:metal/rod/brass']),
        event.recipes.create.deploying('tfc:metal/rod/brass', ['tfc:metal/rod/brass', 'vintageimprovements:brass_wire']),
        event.recipes.create.deploying('tfc:metal/rod/brass', ['tfc:metal/rod/brass', 'vintageimprovements:brass_wire']),
        event.recipes.create.pressing('tfc:metal/rod/brass', 'tfc:metal/rod/brass'),
        event.recipes.vintageimprovements.polishing('tfc:metal/rod/brass', 'tfc:metal/rod/brass')
    ]).transitionalItem('tfc:metal/rod/brass').loops(3);
    // Stainless Steel mesh
    event.remove('createsifter:andesite_mesh')
    event.recipes.create.sequenced_assembly([
        Item.of('createsifter:andesite_mesh', 1)
    ], 'firmalife:metal/rod/stainless_steel', [
            event.recipes.create.deploying('firmalife:metal/rod/stainless_steel', ['firmalife:metal/rod/stainless_steel', 'firmalife:metal/rod/stainless_steel']),
            event.recipes.create.deploying('firmalife:metal/rod/stainless_steel', ['firmalife:metal/rod/stainless_steel', 'kubejs:wire/stainless_steel_wire']),
            event.recipes.create.deploying('firmalife:metal/rod/stainless_steel', ['firmalife:metal/rod/stainless_steel', 'kubejs:wire/stainless_steel_wire']),
            event.recipes.create.pressing('firmalife:metal/rod/stainless_steel', 'firmalife:metal/rod/stainless_steel'),
            event.recipes.vintageimprovements.polishing('firmalife:metal/rod/stainless_steel', 'firmalife:metal/rod/stainless_steel')
    ]).transitionalItem('firmalife:metal/rod/stainless_steel').loops(3)
    // Titanium mesh
    event.recipes.create.sequenced_assembly([
        Item.of('createsifter:custom_mesh', 1)
    ], 'tfc_metallurgy:metal/rod/titanium', [
        event.recipes.create.deploying('tfc_metallurgy:metal/rod/titanium', ['tfc_metallurgy:metal/rod/titanium', 'tfc_metallurgy:metal/rod/titanium']),
        event.recipes.create.deploying('tfc_metallurgy:metal/rod/titanium', ['tfc_metallurgy:metal/rod/titanium', 'kubejs:wire/titanium_wire']),
        event.recipes.create.deploying('tfc_metallurgy:metal/rod/titanium', ['tfc_metallurgy:metal/rod/titanium', 'kubejs:wire/titanium_wire']),
        event.recipes.create.pressing('tfc_metallurgy:metal/rod/titanium', 'tfc_metallurgy:metal/rod/titanium'),
        event.recipes.create.filling('tfc_metallurgy:metal/rod/titanium', [ 'tfc_metallurgy:metal/rod/titanium', Fluid.of('tfc:brine', 250) ]),
        event.custom({
            type: 'create_new_age:energising',
            energy_needed: 10000,
            ingredients: [
              { item: 'tfc_metallurgy:metal/rod/titanium'},
            ],
            results: [
              { item: 'tfc_metallurgy:metal/rod/titanium'},
            ]
          }),
        event.recipes.vintageimprovements.polishing('tfc_metallurgy:metal/rod/titanium', 'tfc_metallurgy:metal/rod/titanium')
    ]).transitionalItem('tfc_metallurgy:metal/rod/titanium').loops(3);
    

    // Sifting recipes
    /*event.recipes.remove('createsifter:sifting/sand_brass_mesh')
    event.recipes.remove('createsifter:sifting/soul_sand_brass_mesh')
    event.recipes.remove('createsifter:sifting/gravel_andesite_mesh')
    event.recipes.remove('createsifter:sifting/dirt_string_mesh_waterlogged')
    event.recipes.remove('createsifter:sifting/gravel_zinc_mesh')
    event.recipes.remove('createsifter:sifting/soul_sand_advanced_brass_mesh')
    event.recipes.remove('createsifter:sifting/sand_string_mesh')
    event.recipes.remove('createsifter:sifting/sand_zinc_mesh')
    event.recipes.remove('createsifter:sifting/sand_andesite_mesh')
    event.recipes.remove('createsifter:sifting/sand_zinc_mesh')
    event.recipes.remove('createsifter:sifting/sand_zinc_mesh')
    event.recipes.remove('createsifter:sifting/sand_zinc_mesh')
    event.recipes.remove('createsifter:sifting/sand_zinc_mesh')
    event.recipes.remove('createsifter:sifting/dirt_string_mesh_waterlogged')
    event.recipes.remove('createsifter:sifting/sand_string_mesh')*/
    event.remove(/createsifter.*brass_mesh.*/)
    event.remove({id: /createsifter.*string_mesh.*/})
    event.remove(/createsifter.*zinc_mesh.*/)
    event.remove(/createsifter.*andesite_mesh.*/)
    event.recipes.createsifterSifting([
        Item.of('tfc:rock/loose/granite').withChance(0.99),
        Item.of('tfc:ore/small_bismuthinite').withChance(0.0007),
        Item.of('tfc:ore/small_cassiterite').withChance(0.0007),
        Item.of('tfc:ore/small_native_gold').withChance(0.0007),
        Item.of('tfc:ore/small_native_silver').withChance(0.0007),
        Item.of('tfc:ore/small_sphalerite').withChance(0.0007),
        Item.of('tfc_metallurgy:ore/certus_quartz').withChance(0.0007),
        Item.of('tfc_metallurgy:ore/small_bauxite').withChance(0.0007),
        Item.of('tfc_metallurgy:ore/small_bertrandite').withChance(0.0007),
        Item.of('tfc_metallurgy:ore/small_monazite').withChance(0.0007),
        Item.of('tfc_metallurgy:ore/small_rutile').withChance(0.0007),
        Item.of('tfc_metallurgy:ore/small_spodumene').withChance(0.0007),
        Item.of('tfc_metallurgy:ore/small_uraninite').withChance(0.0007),
        Item.of('tfc_metallurgy:ore/small_wolframite').withChance(0.0007),
        Item.of('tfc_metallurgy:ore/small_zircon').withChance(0.0007),
    ], ['tfc:rock/gravel/granite','createsifter:andesite_mesh'])
    event.recipes.createsifterSifting([
        Item.of('tfc:rock/loose/gabbro').withChance(0.99),
        Item.of('tfc:ore/small_bismuthinite').withChance(0.001),
        Item.of('tfc:ore/small_cassiterite').withChance(0.001),
        Item.of('tfc:ore/small_garnierite').withChance(0.001),
        Item.of('tfc:ore/small_native_gold').withChance(0.001),
        Item.of('tfc:ore/small_sphalerite').withChance(0.001),
        Item.of('firmalife:ore/small_chromite').withChance(0.001),
        Item.of('tfc_metallurgy:ore/small_native_osmium').withChance(0.001),
        Item.of('tfc_metallurgy:ore/small_native_iridium').withChance(0.001),
        Item.of('tfc_metallurgy:ore/small_native_platinum').withChance(0.001),
    ], ['tfc:rock/gravel/gabbro','createsifter:andesite_mesh'])
    event.recipes.createsifterSifting([
        Item.of('tfc:rock/loose/diorite').withChance(0.99),
        Item.of('tfc:ore/small_bismuthinite').withChance(0.001),
        Item.of('tfc:ore/small_cassiterite').withChance(0.001),
        Item.of('tfc:ore/small_native_gold').withChance(0.001),
        Item.of('tfc:ore/small_sphalerite').withChance(0.001),
        Item.of('firmalife:ore/small_chromite').withChance(0.001),
        Item.of('tfc_metallurgy:ore/small_stibnite').withChance(0.001),
        Item.of('tfc_metallurgy:ore/small_uraninite').withChance(0.001),
        Item.of('tfc_metallurgy:ore/small_wolframite').withChance(0.001),
    ], ['tfc:rock/gravel/diorite','createsifter:andesite_mesh'])
    event.recipes.createsifterSifting([
        Item.of('tfc:rock/loose/rhyolite').withChance(0.99),
        Item.of('tfc:ore/small_hematite').withChance(0.003),
        Item.of('tfc:ore/small_native_copper').withChance(0.003),
        Item.of('tfc_metallurgy:ore/small_zircon').withChance(0.003),
    ], ['tfc:rock/gravel/rhyolite','createsifter:andesite_mesh'])
    event.recipes.createsifterSifting([
        Item.of('tfc:rock/loose/dacite').withChance(0.99),
        Item.of('tfc:ore/small_native_copper').withChance(0.003),
        Item.of('tfc:ore/small_cassiterite').withChance(0.003),
        Item.of('tfc_metallurgy:ore/small_zircon').withChance(0.003),
    ], ['tfc:rock/gravel/dacite','createsifter:andesite_mesh'])
    event.recipes.createsifterSifting([
        Item.of('tfc:rock/loose/basalt').withChance(0.99),
        Item.of('tfc:ore/small_hematite').withChance(0.001),
        Item.of('tfc:ore/small_native_copper').withChance(0.001),
        Item.of('firmalife:ore/small_chromite').withChance(0.001),
        Item.of('tfc_metallurgy:ore/small_bauxite').withChance(0.001),
        Item.of('tfc_metallurgy:ore/small_native_osmium').withChance(0.001),
        Item.of('tfc_metallurgy:ore/small_native_iridium').withChance(0.001),
        Item.of('tfc_metallurgy:ore/small_native_platinum').withChance(0.001),
    ], ['tfc:rock/gravel/basalt','createsifter:andesite_mesh'])
    event.recipes.createsifterSifting([
        Item.of('tfc:rock/loose/basalt').withChance(0.99),
        Item.of('tfc:ore/small_hematite').withChance(0.005),
        Item.of('tfc:ore/small_native_copper').withChance(0.005),
    ], ['tfc:rock/gravel/basalt','createsifter:andesite_mesh'])
    event.recipes.createsifterSifting([
        Item.of('tfc:rock/loose/gneiss').withChance(0.99),
        Item.of('tfc:ore/graphite').withChance(0.001),
        Item.of('tfc:ore/small_native_silver').withChance(0.001),
        Item.of('tfc:ore/small_tetrahedrite').withChance(0.001),
        Item.of('tfc_metallurgy:ore/small_bauxite').withChance(0.001),
        Item.of('tfc_metallurgy:ore/small_cobaltite').withChance(0.001),
        Item.of('tfc_metallurgy:ore/small_monazite').withChance(0.001),
        Item.of('tfc_metallurgy:ore/small_rutile').withChance(0.001),
        Item.of('tfc_metallurgy:ore/small_spodumene').withChance(0.001),
        Item.of('tfc_metallurgy:ore/small_uraninite').withChance(0.001),
        Item.of('tfc_metallurgy:ore/small_wolframite').withChance(0.001),
    ], ['tfc:rock/gravel/gneiss','createsifter:andesite_mesh'])
    event.recipes.createsifterSifting([
        Item.of('tfc:rock/loose/marble').withChance(0.99),
        Item.of('tfc:ore/graphite').withChance(0.002),
        Item.of('tfc:ore/small_malachite').withChance(0.002),
        Item.of('tfc:ore/small_tetrahedrite').withChance(0.002),
        Item.of('tfc_metallurgy:ore/small_cobaltite').withChance(0.002),
        Item.of('tfc_metallurgy:ore/small_magnesite').withChance(0.002),
    ], ['tfc:rock/gravel/marble','createsifter:andesite_mesh'])
    event.recipes.createsifterSifting([
        Item.of('tfc:rock/loose/phyllite').withChance(0.99),
        Item.of('tfc:ore/small_tetrahedrite').withChance(0.005),
        Item.of('tfc_metallurgy:ore/small_cobaltite').withChance(0.005),
    ], ['tfc:rock/gravel/phyllite','createsifter:andesite_mesh'])
    event.recipes.createsifterSifting([
        Item.of('tfc:rock/loose/quartzite').withChance(0.99),
        Item.of('tfc:ore/graphite').withChance(0.001),
        Item.of('tfc:ore/small_tetrahedrite').withChance(0.001),
        Item.of('tfc_metallurgy:ore/certus_quartz').withChance(0.001),
        Item.of('tfc_metallurgy:ore/small_cobaltite').withChance(0.001),
        Item.of('tfc_metallurgy:ore/small_pyrolusite').withChance(0.001),
        Item.of('tfc_metallurgy:ore/small_zircon').withChance(0.001),
        Item.of('tfc_metallurgy:ore/small_native_platinum').withChance(0.001),
    ], ['tfc:rock/gravel/quartzite','createsifter:andesite_mesh'])
    event.recipes.createsifterSifting([
        Item.of('tfc:rock/loose/schist').withChance(0.99),
        Item.of('tfc:ore/graphite').withChance(0.001),
        Item.of('tfc:ore/small_native_silver').withChance(0.001),
        Item.of('tfc:ore/small_tetrahedrite').withChance(0.001),
        Item.of('tfc_metallurgy:ore/small_cobaltite').withChance(0.001),
        Item.of('tfc_metallurgy:ore/small_monazite').withChance(0.001),
        Item.of('tfc_metallurgy:ore/small_rutile').withChance(0.001),
        Item.of('tfc_metallurgy:ore/small_spodumene').withChance(0.001),
    ], ['tfc:rock/gravel/schist','createsifter:andesite_mesh'])
    event.recipes.createsifterSifting([
        Item.of('tfc:rock/loose/slate').withChance(0.99),
        Item.of('tfc:ore/small_tetrahedrite').withChance(0.005),
        Item.of('tfc_metallurgy:ore/small_cobaltite').withChance(0.005),
    ], ['tfc:rock/gravel/slate','createsifter:andesite_mesh'])
    event.recipes.createsifterSifting([
        Item.of('tfc:rock/loose/dolomite').withChance(0.99),
        Item.of('tfc:ore/small_limonite').withChance(0.001),
        Item.of('tfc:ore/small_magnetite').withChance(0.001),
        Item.of('tfc:ore/small_malachite').withChance(0.001),
        Item.of('tfc_metallurgy:ore/small_galena').withChance(0.001),
        Item.of('tfc_metallurgy:ore/small_kernite').withChance(0.001),
        Item.of('tfc_metallurgy:ore/small_magnesite').withChance(0.001),
    ], ['tfc:rock/gravel/dolomite','createsifter:andesite_mesh'])
    event.recipes.createsifterSifting([
        Item.of('tfc:rock/loose/limestone').withChance(0.99),
        Item.of('tfc:ore/small_limonite').withChance(0.001),
        Item.of('tfc:ore/small_magnetite').withChance(0.001),
        Item.of('tfc:ore/small_malachite').withChance(0.001),
        Item.of('tfc_metallurgy:ore/small_galena').withChance(0.001),
        Item.of('tfc_metallurgy:ore/small_kernite').withChance(0.001),
        Item.of('tfc_metallurgy:ore/small_magnesite').withChance(0.001),
    ], ['tfc:rock/gravel/limestone','createsifter:andesite_mesh'])
    event.recipes.createsifterSifting([
        Item.of('tfc:rock/loose/chalk').withChance(0.99),
        Item.of('tfc:ore/small_limonite').withChance(0.002),
        Item.of('tfc:ore/small_magnetite').withChance(0.002),
        Item.of('tfc:ore/small_malachite').withChance(0.002),
        Item.of('tfc_metallurgy:ore/small_kernite').withChance(0.002),
        Item.of('tfc_metallurgy:ore/small_pyrolusite').withChance(0.002),
    ], ['tfc:rock/gravel/chalk','createsifter:andesite_mesh'])
    event.recipes.createsifterSifting([
        Item.of('tfc:rock/loose/chert').withChance(0.99),
        Item.of('tfc:ore/small_limonite').withChance(0.0025),
        Item.of('tfc:ore/small_magnetite').withChance(0.0025),
        Item.of('tfc_metallurgy:ore/small_galena').withChance(0.0025),
        Item.of('tfc_metallurgy:ore/small_pyrolusite').withChance(0.0025),
    ], ['tfc:rock/gravel/chert','createsifter:andesite_mesh'])
    event.recipes.createsifterSifting([
        Item.of('tfc:rock/loose/conglomerate').withChance(0.99),
        Item.of('tfc:ore/small_limonite').withChance(0.0025),
        Item.of('tfc:ore/small_magnetite').withChance(0.0025),
        Item.of('tfc_metallurgy:ore/small_zircon').withChance(0.0025),
        Item.of('tfc_metallurgy:ore/small_pyrolusite').withChance(0.0025),
    ], ['tfc:rock/gravel/conglomerate','createsifter:andesite_mesh'])
    event.recipes.createsifterSifting([
        Item.of('tfc:rock/loose/claystone').withChance(0.99),
        Item.of('tfc:ore/small_limonite').withChance(0.0025),
        Item.of('tfc:ore/small_magnetite').withChance(0.0025),
        Item.of('tfc_metallurgy:ore/small_bauxite').withChance(0.0025),
        Item.of('tfc_metallurgy:ore/small_pyrolusite').withChance(0.0025),
    ], ['tfc:rock/gravel/claystone','createsifter:andesite_mesh'])
    event.recipes.createsifterSifting([
        Item.of('tfc:rock/loose/shale').withChance(0.99),
        Item.of('tfc:ore/small_limonite').withChance(0.001),
        Item.of('tfc:ore/small_magnetite').withChance(0.001),
        Item.of('tfc_metallurgy:ore/certus_quartz').withChance(0.001),
        Item.of('tfc_metallurgy:ore/small_bauxite').withChance(0.001),
        Item.of('tfc_metallurgy:ore/small_galena').withChance(0.001),
        Item.of('tfc_metallurgy:ore/small_pyrolusite').withChance(0.001),
        Item.of('tfc_metallurgy:ore/small_stibnite').withChance(0.001),
    ], ['tfc:rock/gravel/shale','createsifter:andesite_mesh'])
})