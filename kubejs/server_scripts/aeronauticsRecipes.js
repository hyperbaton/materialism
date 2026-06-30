ServerEvents.recipes(event => {

    // ========================================
    // AERONAUTICS recipes
    // ========================================

    // Remove original aeronautics recipes that need TFC adaptation
    event.remove({id: 'aeronautics:adjustable_burner'})
    event.remove({id: 'aeronautics:steam_vent'})
    event.remove({id: 'aeronautics:propeller_bearing'})
    event.remove({id: 'aeronautics:gyroscopic_propeller_bearing'})
    event.remove({id: 'aeronautics:andesite_propeller'})

    // Adjustable Burner
    event.shaped('aeronautics:adjustable_burner',
        ['S S', 'SFS', 'ARA'],
        {
            S: 'tfc_metallurgy:titanium_bars',
            F: 'tfmg:flarestack',
            A: 'tfc_metallurgy:metal/sheet/titanium',
            R: 'create:redstone_contact'
        }
    )

    // Steam Vent: sequenced assembly — copper block → pipe → 2 brass sheets → 4 steel screws
    event.recipes.create.sequenced_assembly(
        [Item.of('aeronautics:steam_vent', 1)],
        'tfc:metal/block/copper',
        [
            event.recipes.createDeploying(
                'tfc:metal/block/copper',
                ['tfc:metal/block/copper', 'create:fluid_pipe']
            ),
            event.recipes.createDeploying(
                'tfc:metal/block/copper',
                ['tfc:metal/block/copper', 'tfc:metal/sheet/brass']
            ),
            event.recipes.createDeploying(
                'tfc:metal/block/copper',
                ['tfc:metal/block/copper', 'tfc:metal/sheet/brass']
            ),
            event.recipes.createDeploying(
                'tfc:metal/block/copper',
                ['tfc:metal/block/copper', 'tfc_items:steel_screw']
            ),
            event.recipes.createDeploying(
                'tfc:metal/block/copper',
                ['tfc:metal/block/copper', 'tfc_items:steel_screw']
            ),
            event.recipes.createDeploying(
                'tfc:metal/block/copper',
                ['tfc:metal/block/copper', 'tfc_items:steel_screw']
            ),
            event.recipes.createDeploying(
                'tfc:metal/block/copper',
                ['tfc:metal/block/copper', 'tfc_items:steel_screw']
            )
        ]
    ).transitionalItem('tfc:metal/block/copper').loops(1)

    // Propeller Bearings
    event.shaped('aeronautics:propeller_bearing',
        [' A ', ' T ', 'SBS'],
        {
            A: '#minecraft:wooden_slabs',
            T: 'tfc_metallurgy:metal/sheet/titanium',
            B: 'create:brass_casing',
            S: 'vintageimprovements:steel_spring'
        }
    )
    event.shaped('aeronautics:gyroscopic_propeller_bearing',
        [' A ', 'TGT', 'SBS'],
        {
            A: '#minecraft:wooden_slabs',
            T: 'tfc_metallurgy:metal/sheet/titanium',
            B: 'create:brass_casing',
            S: 'vintageimprovements:steel_spring',
            G: 'simulated:gyroscopic_mechanism'
        }
    )

    // Andesite Propeller -> Steel Propeller
    event.shaped('aeronautics:andesite_propeller',
        [' P ', 'RCR', 'GSG'],
        {
            P: 'create:propeller',
            C: '#minecraft:wooden_slabs',
            S: 'create:shaft',
            G: 'vintageimprovements:steel_spring',
            R: 'tfc_items:steel_screw'
        }
    )
    event.shaped('aeronautics:andesite_propeller',
        [' P ', 'RCR', 'GSG'],
        {
            P: 'create:propeller',
            C: 'simulated:gyroscopic_mechanism',
            S: 'create:shaft',
            G: 'vintageimprovements:steel_spring',
            R: 'tfc_items:steel_screw'
        }
    )

    // Envelope recipes: replace minecraft:stick with magnesium rod
    const envelopeColors = [
        'white', 'orange', 'magenta', 'light_blue', 'yellow', 'lime',
        'pink', 'gray', 'light_gray', 'cyan', 'purple', 'blue',
        'brown', 'green', 'red', 'black'
    ]
    envelopeColors.forEach(color => {
        event.remove({id: `aeronautics:${color}_envelope`})
        event.shaped(`4x aeronautics:${color}_envelope`,
            ['WL', 'LW'],
            {
                W: `minecraft:${color}_wool`,
                L: 'tfc_metallurgy:metal/rod/magnesium'
            }
        )
        event.remove({id: `aeronautics:deploying/deploying_envelope_${color}`})
        event.recipes.create.deploying(
            [Item.of(`aeronautics:${color}_envelope`, 2)],
            [`minecraft:${color}_wool`, 'tfc_metallurgy:metal/rod/magnesium']
        )
    })

    // Mounted Potato Cannon: replace dried_kelp_block with rubber
    event.remove({id: 'aeronautics:mechanical_crafting/mounted_potato_cannon'})
    event.recipes.create.mechanical_crafting(
        'aeronautics:mounted_potato_cannon',
        ['SR  ', 'KCPP', 'SR  '],
        {
            S: 'tfc:metal/sheet/copper',
            R: 'minecraft:redstone',
            K: 'afc:rubber_bar',
            C: 'create:cogwheel',
            P: 'create:fluid_pipe'
        }
    )

    // Levitite: hydrogen-based sequenced assembly with magnesium sheets
    // Replaces the entire end_stone → end_stone_powder → levitite_blend chain
    event.remove({id: 'aeronautics:crushing/end_stone_powder'})
    event.remove({id: 'aeronautics:mixing/levitite_blend'})
    event.recipes.create.sequenced_assembly(
        [Item.of('aeronautics:levitite', 1)],
        'tfc_metallurgy:metal/sheet/magnesium',
        [
            event.recipes.createFilling(
                'tfc_metallurgy:metal/sheet/magnesium',
                ['tfc_metallurgy:metal/sheet/magnesium', Fluid.of('tfmg:hydrogen', 125)]
            ),
            event.recipes.createDeploying(
                'tfc_metallurgy:metal/sheet/magnesium',
                ['tfc_metallurgy:metal/sheet/magnesium', 'tfc_metallurgy:metal/sheet/magnesium']
            ),
            event.recipes.createPressing(
                'tfc_metallurgy:metal/sheet/magnesium',
                'tfc_metallurgy:metal/sheet/magnesium'
            ),
            event.recipes.createFilling(
                'tfc_metallurgy:metal/sheet/magnesium',
                ['tfc_metallurgy:metal/sheet/magnesium', Fluid.of('tfmg:hydrogen', 125)]
            ),
            event.recipes.createDeploying(
                'tfc_metallurgy:metal/sheet/magnesium',
                ['tfc_metallurgy:metal/sheet/magnesium', 'tfc_items:aluminum_screw']
            )
        ]
    ).transitionalItem('tfc_metallurgy:metal/sheet/magnesium').loops(4)

    // ========================================
    // OFFROAD recipes
    // ========================================

    // Tires: rubber + aluminum/magnesium rods
    event.remove({id: 'offroad:small_tire'})
    event.shapeless('offroad:small_tire', [
        'create:shaft',
        'afc:rubber_bar',
        'tfc_metallurgy:metal/rod/aluminum'
    ])

    event.remove({id: 'offroad:tire'})
    event.shaped('offroad:tire',
        [' RA', 'RSR', 'AR '],
        {
            R: 'afc:rubber_bar',
            A: 'tfc_metallurgy:metal/rod/aluminum',
            S: 'create:shaft'
        }
    )

    event.remove({id: 'offroad:large_tire'})
    event.shaped('offroad:large_tire',
        ['ARA', 'RSR', 'ARA'],
        {
            R: 'afc:rubber_bar',
            A: 'tfc_metallurgy:metal/rod/magnesium',
            S: 'create:shaft'
        }
    )

    event.remove({id: 'offroad:monstrous_tire'})
    event.shaped('offroad:monstrous_tire',
        ['RRR', 'RAS', 'RRR'],
        {
            R: 'afc:rubber_bar',
            A: 'tfc_metallurgy:metal/rod/magnesium',
            S: 'create:shaft'
        }
    )

    // Rockcutting Wheel: add tungsten steel sheets (inspired by drill recipe)
    event.remove({id: 'offroad:rockcutting_wheel'})
    event.shaped('offroad:rockcutting_wheel',
        [' T ', 'TCT', ' G '],
        {
            T: 'tfc_metallurgy:metal/sheet/tungsten_steel',
            C: 'create:crushing_wheel',
            G: 'create:industrial_iron_block'
        }
    )

    // Wheel Mount: uses simulated:spring — replace with VI spring
    event.remove({id: 'offroad:wheel_mount'})
    event.shaped('offroad:wheel_mount',
        ['C', 'S', 'P'],
        {
            C: 'create:andesite_casing',
            S: 'vintageimprovements:steel_spring',
            P: 'tfc:metal/sheet/steel'
        }
    )

    // ========================================
    // SIMULATED recipes
    // ========================================

    // Replace simulated:spring globally with VI steel spring
    event.remove({id: 'simulated:spring'})
    event.replaceInput(
        {input: 'simulated:spring'},
        'simulated:spring',
        'vintageimprovements:steel_spring'
    )

    // Iron Handle
    event.remove({id: 'simulated:iron_handle'})
    event.shaped('simulated:iron_handle',
        ['SNS', 'R R'],
        {
            N: 'tfc:metal/rod/wrought_iron',
            S: 'tfc_items:steel_screw',
            R: 'tfc_items:wrought_iron_ring'
        }
    )
    event.replaceInput({id: 'simulated:copper_handle'},
        'create:copper_nugget',
        'tfc_items:copper_foil'
    )

    // Throttle Lever
    event.remove({id: 'simulated:throttle_lever'})
    event.shaped('simulated:throttle_lever',
        ['S', 'B'],
        {
            S: '#tfc:can_be_lit_on_torch',
            B: 'create:brass_casing'
        }
    )

    // White Nameplate
    event.remove({id: 'simulated:white_nameplate'})
    event.shapeless('4x simulated:white_nameplate', [
        'minecraft:paper',
        '#tfc:can_be_lit_on_torch',
        'tfc:metal/sheet/steel'
    ])

    // Velocity Sensor
    event.remove({id: 'simulated:velocity_sensor'})
    event.shaped('simulated:velocity_sensor',
        ['P', 'B', 'A'],
        {
            P: 'create:propeller',
            B: '#tfc:barrels',
            A: 'create:andesite_casing'
        }
    )

    // Rope Coupling
    event.remove({id: 'simulated:rope_coupling'})
    event.shaped('simulated:rope_coupling',
        [' S ', 'NSN', ' S '],
        {
            N: 'tfc_items:steel_ring',
            S: 'tfc:rope'
        }
    )

    // Rope Winch: add tfc:rope
    event.remove({id: 'simulated:rope_winch'})
    event.shaped('simulated:rope_winch',
        ['I', 'R', 'S'],
        {
            I: 'tfc:metal/sheet/steel',
            R: 'tfc:rope',
            S: 'create:industrial_iron_block'
        }
    )

    // Rope Connector: more complex recipe (inspired by iron handle)
    event.remove({id: 'simulated:rope_connector'})
    event.shaped('simulated:rope_connector',
        ['SIS', ' R ', 'SIS'],
        {
            I: 'tfc:metal/sheet/steel',
            S: 'tfc_items:steel_screw',
            R: 'tfc_items:steel_ring'
        }
    )

    // Physics Assembler: expensive — circuit board + tungsten steel, no andesite alloy
    event.remove({id: 'simulated:physics_assembler'})
    event.shaped('simulated:physics_assembler',
        [' N ', ' C ', 'TST'],
        {
            N: 'minecraft:lever',
            C: 'tfmg:circuit_board',
            T: 'tfc_metallurgy:metal/sheet/tungsten_steel',
            S: 'tfmg:heavy_machinery_casing'
        }
    )

    // Swivel Bearing: use TFMG steel cog
    event.remove({id: 'simulated:swivel_bearing'})
    event.shaped('simulated:swivel_bearing',
        [' A ', ' B ', ' C '],
        {
            A: 'tfc:metal/sheet/steel',
            B: 'create:industrial_iron_block',
            C: 'tfmg:steel_cogwheel'
        }
    )

    // Red Portable Engine: TODO - use TFMG engine elements
    event.remove({id: 'simulated:red_portable_engine'})
    event.shaped('simulated:red_portable_engine',
        ['G', 'E', 'B'],
        {
            G: 'tfc:metal/sheet/steel',
            E: 'simulated:engine_assembly',
            B: 'tfc:blast_furnace'
        }
    )

    // Laser Pointer/Sensor: replace amethyst lens tag with VI laser item
    event.remove({id: 'simulated:laser_pointer'})
    event.shaped('simulated:laser_pointer',
        ['A', 'T', 'C'],
        {
            A: 'vintageimprovements:laser_item',
            T: 'minecraft:redstone_torch',
            C: 'create:andesite_casing'
        }
    )
    event.remove({id: 'simulated:laser_sensor'})
    event.shaped('simulated:laser_sensor',
        ['G', 'A', 'C'],
        {
            G: 'minecraft:tinted_glass',
            A: 'vintageimprovements:laser_item',
            C: 'create:andesite_casing'
        }
    )

    // Redstone Magnet: tiered recipes based on New Age magnet tiers
    // Better magnets = fewer blocks needed, more output
    event.remove({id: 'simulated:redstone_magnet'})

    // Tier 1: Redstone Magnet (basic) — 4 magnets + copper sheet + redstone
    event.shaped('simulated:redstone_magnet',
        ['MRM', 'MCM', ' R '],
        {
            M: 'create_new_age:redstone_magnet',
            R: 'minecraft:redstone',
            C: 'tfc_items:copper_heavy_sheet'
        }
    )

    // Tier 3: Layered Magnet — 2 magnets, 2x output
    event.shaped('2x simulated:redstone_magnet',
        [' R ', 'MCM', ' R '],
        {
            M: 'create_new_age:layered_magnet',
            R: 'minecraft:redstone',
            C: 'tfc_items:copper_heavy_sheet'
        }
    )

    // Tier 4: Fluxuated Magnetite — 1 magnet, 4x output
    event.shaped('4x simulated:redstone_magnet',
        [' R ', ' MC'],
        {
            M: 'create_new_age:fluxuated_magnetite',
            R: 'minecraft:redstone',
            C: 'tfc_items:copper_heavy_sheet'
        }
    )

    // Tier 5: Neodymium Magnet — 1 magnet, 8x output
    event.shaped('8x simulated:redstone_magnet',
        [' R ', ' MC'],
        {
            M: 'create_new_age:netherite_magnet',
            R: 'minecraft:redstone',
            C: 'tfc_items:copper_heavy_sheet'
        }
    )

    // Gyroscopic Mechanism: complex sequenced assembly with brass and invar
    event.remove({id: 'simulated:sequenced_assembly/gyroscopic_mechanism'})
    event.recipes.create.sequenced_assembly(
        [
            Item.of('simulated:gyroscopic_mechanism', 1),
            Item.of('tfc:metal/sheet/brass', 0.08),
            Item.of('tfc_metallurgy:metal/sheet/invar', 0.05),
            Item.of('create:brass_nugget', 0.03)
        ],
        'tfc:metal/sheet/brass',
        [
            event.recipes.createDeploying(
                'simulated:incomplete_gyroscopic_mechanism',
                ['simulated:incomplete_gyroscopic_mechanism', 'tfc_metallurgy:metal/sheet/invar']
            ),
            event.recipes.createDeploying(
                'simulated:incomplete_gyroscopic_mechanism',
                ['simulated:incomplete_gyroscopic_mechanism', 'create:cogwheel']
            ),
            event.recipes.createDeploying(
                'simulated:incomplete_gyroscopic_mechanism',
                ['simulated:incomplete_gyroscopic_mechanism', 'create:shaft']
            ),
            event.recipes.createPressing(
                'simulated:incomplete_gyroscopic_mechanism',
                'simulated:incomplete_gyroscopic_mechanism'
            ),
            event.recipes.createDeploying(
                'simulated:incomplete_gyroscopic_mechanism',
                ['simulated:incomplete_gyroscopic_mechanism', 'tfc_items:brass_rivet']
            ),
            event.recipes.vintageimprovements.turning('simulated:incomplete_gyroscopic_mechanism', 'simulated:incomplete_gyroscopic_mechanism'
        ]
    ).transitionalItem('simulated:incomplete_gyroscopic_mechanism').loops(5)

})
