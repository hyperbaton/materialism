ServerEvents.recipes(event => {
    event.remove('create_optical:sequenced_assembly/optical_device')
    event.remove('create_optical:sequenced_assembly/optical_device_focusing')
    event.recipes.create.sequenced_assembly(
        [
            Item.of('create_optical:optical_device', 1)
        ],
        // Input item
        'tfc_metallurgy:metal/sheet/invar',
        [
            event.recipes.createDeploying(
              'tfc_metallurgy:metal/sheet/invar',
              ['tfc_metallurgy:metal/sheet/invar', 'tfc:lens']
            ),
            event.recipes.createDeploying(
              'tfc_metallurgy:metal/sheet/invar',
              ['tfc_metallurgy:metal/sheet/invar', 'tfc:lens']
            ),
            event.recipes.createDeploying(
                'tfc_metallurgy:metal/sheet/invar',
                ['tfc_metallurgy:metal/sheet/invar', 'tfc_metallurgy:metal/sheet/invar']
            ),
            event.recipes.vintageimprovements.curving('tfc_metallurgy:metal/sheet/invar', 'tfc_metallurgy:metal/sheet/invar').head('vintageimprovements:w_shaped_curving_head'),
            event.recipes.vintageimprovements.vacuumizing(
                'tfc_metallurgy:metal/sheet/invar',
                ['tfc_metallurgy:metal/sheet/invar', Fluid.of('minecraft:water', 500)]
            ).secondaryFluidInput(0)
        ]
      ).transitionalItem('create_optical:incomplete_optical_device')
      .loops(1);
    event.remove('create_optical:sequenced_assembly/polarizing_filter')
    event.recipes.create.sequenced_assembly(
        [
            Item.of('create_optical:polarizing_filter', 1)
        ],
        // Input item
        'minecraft:tinted_glass',
        [
            event.recipes.createDeploying(
            'minecraft:tinted_glass',
            ['minecraft:tinted_glass', 'tfc:powder/charcoal']
            ),
            event.recipes.vintageimprovements.vibrating('minecraft:tinted_glass', 'minecraft:tinted_glass'),
            event.recipes.createDeploying(
                'minecraft:tinted_glass',
                ['minecraft:tinted_glass', 'minecraft:tinted_glass']
            ),
            event.recipes.vintageimprovements.polishing('minecraft:tinted_glass', 'minecraft:tinted_glass'),
            event.recipes.createDeploying(
            'minecraft:tinted_glass',
            ['minecraft:tinted_glass', 'tfc_metallurgy:metal/rod/aluminum']
            ),
            event.recipes.createDeploying(
            'minecraft:tinted_glass',
            ['minecraft:tinted_glass', 'tfc_metallurgy:metal/rod/aluminum']
            ),
        ]
    ).transitionalItem('create_optical:incomplete_polarizing_filter')
    .loops(1);
    // Replace Optical coil with TFMG one.
    event.replaceInput(
        { input: 'create_optical:copper_coil' }, // Arg 1: the filter
        'create_optical:copper_coil',            // Arg 2: the item to replace
        'tfmg:copper_coil'         // Arg 3: the item to replace it with
        )
    event.shaped(
        Item.of('create_optical:zinc_coil', 1),
        [
            'BAB',
            'BAB',
            'BAB'
        ],
        {
          A: 'tfc:metal/rod/wrought_iron',
          B: 'vintageimprovements:zinc_wire'
        }
    )
    // Replace usage of golden coil with something else
    event.remove('create_optical:sequenced_assembly/golden_coil')
    event.remove('create_optical:heavy_optical_receptor')
    event.shaped(
        Item.of('create_optical:heavy_optical_receptor', 1),
        [
            'EAE',
            'BCB',
            'EDE'
        ],
        {
          A: 'create_optical:optical_device',
          B: 'create:shaft',
          C: 'create_optical:optical_receptor',
          D: 'tfmg:heavy_machinery_casing',
          E: 'createaddition:golden_wire'
        }
    )
    event.remove('create_optical:sequenced_assembly/mirror_item')
    event.remove('create_optical:focusing/mirror')
    event.recipes.create.sequenced_assembly(
        [
            Item.of('create_optical:mirror', 1)
        ],
        // Input item
        'tfc:metal/sheet/silver',
        [
            event.recipes.createFilling(
            'tfc:metal/sheet/silver',
            ['tfc:metal/sheet/silver', Fluid.of('firmalife:metal/chromium', 100)]
            ),
            event.recipes.vintageimprovements.vibrating('tfc:metal/sheet/silver', 'tfc:metal/sheet/silver'),
            event.recipes.createDeploying(
                'tfc:metal/sheet/silver',
                ['tfc:metal/sheet/silver', 'minecraft:glass_pane']
            ),
            event.recipes.vintageimprovements.polishing('tfc:metal/sheet/silver', 'tfc:metal/sheet/silver'),
            event.recipes.createDeploying(
            'tfc:metal/sheet/silver',
            ['tfc:metal/sheet/silver', 'tfc_metallurgy:metal/rod/aluminum']
            ),
            event.recipes.createDeploying(
            'tfc:metal/sheet/silver',
            ['tfc:metal/sheet/silver', 'tfc_metallurgy:metal/rod/aluminum']
            ),
        ]
    ).transitionalItem('create_optical:incomplete_mirror_item')
    .loops(1);
    event.replaceInput(
        { id: 'create_optical:optical_sensor' }, // Arg 1: the filter
        '#forge:stone',            // Arg 2: the item to replace
        'tfc:metal/sheet/steel'         // Arg 3: the item to replace it with
        )
    // Add recipe for quartz coil
    event.shaped(
        Item.of('create_optical:rose_quartz_catalyst_coil', 1),
        [
            'ABA',
            'ABA',
            'ABA'
        ],
        {
            A: 'vintageimprovements:rose_gold_wire',
            B: 'create:polished_rose_quartz'
        }
    )
})