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

    // Steam Vent: copper block + gold plate
    // copper_block already globally replaced; c:plates/gold needs TFC gold sheet in tag (see tags.js)
    event.shaped('aeronautics:steam_vent',
        ['G', 'C'],
        {
            G: 'tfc:metal/sheet/gold',
            C: 'tfc:metal/block/copper'
        }
    )

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
        [' A ', 'TGT', ' B '],
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

    // Mounted Potato Cannon: mechanical crafting
    // Uses copper_sheet (globally replaced) + redstone + cogwheel + fluid_pipe + dried_kelp_block
    // dried_kelp_block exists in vanilla/TFC — should be fine
    // No changes needed if copper_sheet global replacement covers mechanical crafting

    // Levitite chain: end_stone doesn't exist in TFC
    // Use hydrogen for levitite.
    event.remove({id: 'aeronautics:crushing/end_stone_powder'})

    // ========================================
    // SIMULATED recipes
    // ========================================

    // Iron Handle
    event.remove({id: 'simulated:iron_handle'})
    event.shaped('simulated:iron_handle',
        ['SNS', '  '],
        {
            N: 'tfc:metal/rod/wrought_iron',
            S: 'tfc_items:steel_screw',
            R: 'tfc_items:wrought_iron_ring'
        }
    )
    event.replaceInput('simulated:copper_handle',
        'create:copper_nugget',
        'tfc_items:copper_foil'
    )

    // Spring: use VI springs instead
    event.remove({id: 'simulated:spring'})

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

    // Velocity Sensor: uses minecraft:barrel — replace with TFC barrel
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

    // Red Portable Engine: uses minecraft:blast_furnace — replace with TFC equivalent
    event.remove({id: 'simulated:red_portable_engine'})
    event.shaped('simulated:red_portable_engine',
        ['G', 'E', 'B'],
        {
            G: 'tfc:metal/sheet/steel',
            E: 'simulated:engine_assembly',
            B: 'tfc:blast_furnace'
        }
    )

    // Sequenced assembly junk outputs: replace vanilla iron items with TFC equivalents
    // Engine Assembly junk outputs include iron_nugget, iron_bars, iron_helmet
    // Gyroscopic Mechanism junk outputs include iron_nugget, compass
    // These are handled by the global iron_sheet input replacement; junk outputs are cosmetic

    // Steering Wheel: large_cogwheel + andesite_casing + shaft — all Create, no changes needed
    // Altitude Sensor: paper + iron_sheet + andesite_casing — iron_sheet globally replaced
    // Gimbal Sensor: gyroscopic_mechanism + brass_casing + cogwheel — all Create/simulated
    // Auger Shaft: chute + shaft + iron_sheet — iron_sheet globally replaced
    // Analog Transmission: brass_casing + shaft + cogwheel + electron_tube — all Create
    // Torsion Spring: shaft + spring + andesite_casing — all Create/simulated
    // Rope Connector/Winch: iron_sheet + industrial_iron_block + shaft — iron_sheet globally replaced
    // Physics Assembler: andesite_alloy + lever + andesite_casing — all fine
    // Laser Pointer/Sensor: laser_point_lens + andesite_casing + redstone_torch/tinted_glass — fine
    // Redstone Accumulator/Inductor/Magnet: brass_sheet + rose_quartz + redstone + stone — fine
    // Handles: iron_handle + dye — fine (iron_handle fixed above)
    // Sails: create:white_sail conversions — fine
    // Nameplates: white_nameplate + dye conversions — fine (base fixed above)
    // Portable engine dyeing: red_portable_engine + dye — fine (base fixed above)
})
