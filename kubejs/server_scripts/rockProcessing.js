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

    // TODO: vintageimprovements:brass_wire no longer exists in 1.21
    //event.remove('createsifter:brass_mesh')
    //event.recipes.create.sequenced_assembly([
    //    CreateItem.of('createsifter:brass_mesh', 1)
    //], 'tfc:metal/rod/brass', [
    //    event.recipes.create.deploying('tfc:metal/rod/brass', ['tfc:metal/rod/brass', 'tfc:metal/rod/brass']),
    //    event.recipes.create.deploying('tfc:metal/rod/brass', ['tfc:metal/rod/brass', 'createvintageneoforged:brass_wire']),
    //    event.recipes.create.deploying('tfc:metal/rod/brass', ['tfc:metal/rod/brass', 'createvintageneoforged:brass_wire']),
    //    event.recipes.create.pressing('tfc:metal/rod/brass', 'tfc:metal/rod/brass'),
    //    event.recipes.createvintageneoforged.polishing('tfc:metal/rod/brass', 'tfc:metal/rod/brass')
    //]).transitionalItem('tfc:metal/rod/brass').loops(3);
    // Stainless Steel mesh
    event.remove('createsifter:andesite_mesh')
    event.recipes.create.sequenced_assembly([
        Item.of('createsifter:andesite_mesh', 1)
    ], 'firmalife:metal/rod/stainless_steel', [
            event.recipes.create.deploying('firmalife:metal/rod/stainless_steel', ['firmalife:metal/rod/stainless_steel', 'firmalife:metal/rod/stainless_steel']),
            event.recipes.create.deploying('firmalife:metal/rod/stainless_steel', ['firmalife:metal/rod/stainless_steel', 'kubejs:wire/stainless_steel_wire']),
            event.recipes.create.deploying('firmalife:metal/rod/stainless_steel', ['firmalife:metal/rod/stainless_steel', 'kubejs:wire/stainless_steel_wire']),
            event.recipes.create.pressing('firmalife:metal/rod/stainless_steel', 'firmalife:metal/rod/stainless_steel'),
            event.recipes.createvintageneoforged.polishing('firmalife:metal/rod/stainless_steel', 'firmalife:metal/rod/stainless_steel')
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
              { id: 'tfc_metallurgy:metal/rod/titanium'},
            ]
          }),
        event.recipes.createvintageneoforged.polishing('tfc_metallurgy:metal/rod/titanium', 'tfc_metallurgy:metal/rod/titanium')
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
        CreateItem.of('tfc:rock/loose/granite', 0.99),
        CreateItem.of('tfc:ore/small_bismuthinite', 0.0007),
        CreateItem.of('tfc:ore/small_cassiterite', 0.0007),
        CreateItem.of('tfc:ore/small_native_gold', 0.0007),
        CreateItem.of('tfc:ore/small_native_silver', 0.0007),
        CreateItem.of('tfc:ore/small_sphalerite', 0.0007),
        CreateItem.of('tfc_metallurgy:ore/certus_quartz', 0.0007),
        CreateItem.of('tfc_metallurgy:ore/small_bauxite', 0.0007),
        CreateItem.of('tfc_metallurgy:ore/small_bertrandite', 0.0007),
        CreateItem.of('tfc_metallurgy:ore/small_monazite', 0.0007),
        CreateItem.of('tfc_metallurgy:ore/small_rutile', 0.0007),
        CreateItem.of('tfc_metallurgy:ore/small_spodumene', 0.0007),
        CreateItem.of('tfc_metallurgy:ore/small_uraninite', 0.0007),
        CreateItem.of('tfc_metallurgy:ore/small_wolframite', 0.0007),
        CreateItem.of('tfc_metallurgy:ore/small_zircon', 0.0007),
    ], 'tfc:rock/gravel/granite', 'createsifter:andesite_mesh')
    event.recipes.createsifterSifting([
        CreateItem.of('tfc:rock/loose/gabbro', 0.99),
        CreateItem.of('tfc:ore/small_bismuthinite', 0.001),
        CreateItem.of('tfc:ore/small_cassiterite', 0.001),
        CreateItem.of('tfc:ore/small_garnierite', 0.001),
        CreateItem.of('tfc:ore/small_native_gold', 0.001),
        CreateItem.of('tfc:ore/small_sphalerite', 0.001),
        CreateItem.of('firmalife:ore/small_chromite', 0.001),
        CreateItem.of('tfc_metallurgy:ore/small_native_osmium', 0.001),
        CreateItem.of('tfc_metallurgy:ore/small_native_iridium', 0.001),
        CreateItem.of('tfc_metallurgy:ore/small_native_platinum', 0.001),
    ], 'tfc:rock/gravel/gabbro', 'createsifter:andesite_mesh')
    event.recipes.createsifterSifting([
        CreateItem.of('tfc:rock/loose/diorite', 0.99),
        CreateItem.of('tfc:ore/small_bismuthinite', 0.001),
        CreateItem.of('tfc:ore/small_cassiterite', 0.001),
        CreateItem.of('tfc:ore/small_native_gold', 0.001),
        CreateItem.of('tfc:ore/small_sphalerite', 0.001),
        CreateItem.of('firmalife:ore/small_chromite', 0.001),
        CreateItem.of('tfc_metallurgy:ore/small_stibnite', 0.001),
        CreateItem.of('tfc_metallurgy:ore/small_uraninite', 0.001),
        CreateItem.of('tfc_metallurgy:ore/small_wolframite', 0.001),
    ], 'tfc:rock/gravel/diorite', 'createsifter:andesite_mesh')
    event.recipes.createsifterSifting([
        CreateItem.of('tfc:rock/loose/rhyolite', 0.99),
        CreateItem.of('tfc:ore/small_hematite', 0.003),
        CreateItem.of('tfc:ore/small_native_copper', 0.003),
        CreateItem.of('tfc_metallurgy:ore/small_zircon', 0.003),
    ], 'tfc:rock/gravel/rhyolite', 'createsifter:andesite_mesh')
    event.recipes.createsifterSifting([
        CreateItem.of('tfc:rock/loose/dacite', 0.99),
        CreateItem.of('tfc:ore/small_native_copper', 0.003),
        CreateItem.of('tfc:ore/small_cassiterite', 0.003),
        CreateItem.of('tfc_metallurgy:ore/small_zircon', 0.003),
    ], 'tfc:rock/gravel/dacite', 'createsifter:andesite_mesh')
    event.recipes.createsifterSifting([
        CreateItem.of('tfc:rock/loose/basalt', 0.99),
        CreateItem.of('tfc:ore/small_hematite', 0.001),
        CreateItem.of('tfc:ore/small_native_copper', 0.001),
        CreateItem.of('firmalife:ore/small_chromite', 0.001),
        CreateItem.of('tfc_metallurgy:ore/small_bauxite', 0.001),
        CreateItem.of('tfc_metallurgy:ore/small_native_osmium', 0.001),
        CreateItem.of('tfc_metallurgy:ore/small_native_iridium', 0.001),
        CreateItem.of('tfc_metallurgy:ore/small_native_platinum', 0.001),
    ], 'tfc:rock/gravel/basalt', 'createsifter:andesite_mesh')
    event.recipes.createsifterSifting([
        CreateItem.of('tfc:rock/loose/basalt', 0.99),
        CreateItem.of('tfc:ore/small_hematite', 0.005),
        CreateItem.of('tfc:ore/small_native_copper', 0.005),
    ], 'tfc:rock/gravel/basalt', 'createsifter:andesite_mesh')
    event.recipes.createsifterSifting([
        CreateItem.of('tfc:rock/loose/gneiss', 0.99),
        CreateItem.of('tfc:ore/graphite', 0.001),
        CreateItem.of('tfc:ore/small_native_silver', 0.001),
        CreateItem.of('tfc:ore/small_tetrahedrite', 0.001),
        CreateItem.of('tfc_metallurgy:ore/small_bauxite', 0.001),
        CreateItem.of('tfc_metallurgy:ore/small_cobaltite', 0.001),
        CreateItem.of('tfc_metallurgy:ore/small_monazite', 0.001),
        CreateItem.of('tfc_metallurgy:ore/small_rutile', 0.001),
        CreateItem.of('tfc_metallurgy:ore/small_spodumene', 0.001),
        CreateItem.of('tfc_metallurgy:ore/small_uraninite', 0.001),
        CreateItem.of('tfc_metallurgy:ore/small_wolframite', 0.001),
    ], 'tfc:rock/gravel/gneiss', 'createsifter:andesite_mesh')
    event.recipes.createsifterSifting([
        CreateItem.of('tfc:rock/loose/marble', 0.99),
        CreateItem.of('tfc:ore/graphite', 0.002),
        CreateItem.of('tfc:ore/small_malachite', 0.002),
        CreateItem.of('tfc:ore/small_tetrahedrite', 0.002),
        CreateItem.of('tfc_metallurgy:ore/small_cobaltite', 0.002),
        CreateItem.of('tfc_metallurgy:ore/small_magnesite', 0.002),
    ], 'tfc:rock/gravel/marble', 'createsifter:andesite_mesh')
    event.recipes.createsifterSifting([
        CreateItem.of('tfc:rock/loose/phyllite', 0.99),
        CreateItem.of('tfc:ore/small_tetrahedrite', 0.005),
        CreateItem.of('tfc_metallurgy:ore/small_cobaltite', 0.005),
    ], 'tfc:rock/gravel/phyllite', 'createsifter:andesite_mesh')
    event.recipes.createsifterSifting([
        CreateItem.of('tfc:rock/loose/quartzite', 0.99),
        CreateItem.of('tfc:ore/graphite', 0.001),
        CreateItem.of('tfc:ore/small_tetrahedrite', 0.001),
        CreateItem.of('tfc_metallurgy:ore/certus_quartz', 0.001),
        CreateItem.of('tfc_metallurgy:ore/small_cobaltite', 0.001),
        CreateItem.of('tfc_metallurgy:ore/small_pyrolusite', 0.001),
        CreateItem.of('tfc_metallurgy:ore/small_zircon', 0.001),
        CreateItem.of('tfc_metallurgy:ore/small_native_platinum', 0.001),
    ], 'tfc:rock/gravel/quartzite', 'createsifter:andesite_mesh')
    event.recipes.createsifterSifting([
        CreateItem.of('tfc:rock/loose/schist', 0.99),
        CreateItem.of('tfc:ore/graphite', 0.001),
        CreateItem.of('tfc:ore/small_native_silver', 0.001),
        CreateItem.of('tfc:ore/small_tetrahedrite', 0.001),
        CreateItem.of('tfc_metallurgy:ore/small_cobaltite', 0.001),
        CreateItem.of('tfc_metallurgy:ore/small_monazite', 0.001),
        CreateItem.of('tfc_metallurgy:ore/small_rutile', 0.001),
        CreateItem.of('tfc_metallurgy:ore/small_spodumene', 0.001),
    ], 'tfc:rock/gravel/schist', 'createsifter:andesite_mesh')
    event.recipes.createsifterSifting([
        CreateItem.of('tfc:rock/loose/slate', 0.99),
        CreateItem.of('tfc:ore/small_tetrahedrite', 0.005),
        CreateItem.of('tfc_metallurgy:ore/small_cobaltite', 0.005),
    ], 'tfc:rock/gravel/slate', 'createsifter:andesite_mesh')
    event.recipes.createsifterSifting([
        CreateItem.of('tfc:rock/loose/dolomite', 0.99),
        CreateItem.of('tfc:ore/small_limonite', 0.001),
        CreateItem.of('tfc:ore/small_magnetite', 0.001),
        CreateItem.of('tfc:ore/small_malachite', 0.001),
        CreateItem.of('tfc_metallurgy:ore/small_galena', 0.001),
        CreateItem.of('tfc_metallurgy:ore/small_kernite', 0.001),
        CreateItem.of('tfc_metallurgy:ore/small_magnesite', 0.001),
    ], 'tfc:rock/gravel/dolomite', 'createsifter:andesite_mesh')
    event.recipes.createsifterSifting([
        CreateItem.of('tfc:rock/loose/limestone', 0.99),
        CreateItem.of('tfc:ore/small_limonite', 0.001),
        CreateItem.of('tfc:ore/small_magnetite', 0.001),
        CreateItem.of('tfc:ore/small_malachite', 0.001),
        CreateItem.of('tfc_metallurgy:ore/small_galena', 0.001),
        CreateItem.of('tfc_metallurgy:ore/small_kernite', 0.001),
        CreateItem.of('tfc_metallurgy:ore/small_magnesite', 0.001),
    ], 'tfc:rock/gravel/limestone', 'createsifter:andesite_mesh')
    event.recipes.createsifterSifting([
        CreateItem.of('tfc:rock/loose/chalk', 0.99),
        CreateItem.of('tfc:ore/small_limonite', 0.002),
        CreateItem.of('tfc:ore/small_magnetite', 0.002),
        CreateItem.of('tfc:ore/small_malachite', 0.002),
        CreateItem.of('tfc_metallurgy:ore/small_kernite', 0.002),
        CreateItem.of('tfc_metallurgy:ore/small_pyrolusite', 0.002),
    ], 'tfc:rock/gravel/chalk', 'createsifter:andesite_mesh')
    event.recipes.createsifterSifting([
        CreateItem.of('tfc:rock/loose/chert', 0.99),
        CreateItem.of('tfc:ore/small_limonite', 0.0025),
        CreateItem.of('tfc:ore/small_magnetite', 0.0025),
        CreateItem.of('tfc_metallurgy:ore/small_galena', 0.0025),
        CreateItem.of('tfc_metallurgy:ore/small_pyrolusite', 0.0025),
    ], 'tfc:rock/gravel/chert', 'createsifter:andesite_mesh')
    event.recipes.createsifterSifting([
        CreateItem.of('tfc:rock/loose/conglomerate', 0.99),
        CreateItem.of('tfc:ore/small_limonite', 0.0025),
        CreateItem.of('tfc:ore/small_magnetite', 0.0025),
        CreateItem.of('tfc_metallurgy:ore/small_zircon', 0.0025),
        CreateItem.of('tfc_metallurgy:ore/small_pyrolusite', 0.0025),
    ], 'tfc:rock/gravel/conglomerate', 'createsifter:andesite_mesh')
    event.recipes.createsifterSifting([
        CreateItem.of('tfc:rock/loose/claystone', 0.99),
        CreateItem.of('tfc:ore/small_limonite', 0.0025),
        CreateItem.of('tfc:ore/small_magnetite', 0.0025),
        CreateItem.of('tfc_metallurgy:ore/small_bauxite', 0.0025),
        CreateItem.of('tfc_metallurgy:ore/small_pyrolusite', 0.0025),
    ], 'tfc:rock/gravel/claystone', 'createsifter:andesite_mesh')
    event.recipes.createsifterSifting([
        CreateItem.of('tfc:rock/loose/shale', 0.99),
        CreateItem.of('tfc:ore/small_limonite', 0.001),
        CreateItem.of('tfc:ore/small_magnetite', 0.001),
        CreateItem.of('tfc_metallurgy:ore/certus_quartz', 0.001),
        CreateItem.of('tfc_metallurgy:ore/small_bauxite', 0.001),
        CreateItem.of('tfc_metallurgy:ore/small_galena', 0.001),
        CreateItem.of('tfc_metallurgy:ore/small_pyrolusite', 0.001),
        CreateItem.of('tfc_metallurgy:ore/small_stibnite', 0.001),
    ], 'tfc:rock/gravel/shale', 'createsifter:andesite_mesh')
})