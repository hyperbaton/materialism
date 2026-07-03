ServerEvents.recipes(event => {
    event.remove('butchery:jarrecipe')
    event.remove('butchery:pliers_recipe')
    event.remove('butchery:skinning_knife_recipe')

    // Remove all existing butchery tool recipes
    event.remove({output: /butchery:.*_cleaver/})
    event.remove({output: /butchery:.*_hacksaw/})
    event.remove({output: /butchery:.*_hammer/})
    event.remove({output: /butchery:.*_skinning_knife/})

    // TFC butchery tool recipes
    const butcheryMetals = [
        { id: 'copper',   tfc: 'copper',         base: 'tfc',            parts: 'copper' },
        { id: 'iron',     tfc: 'wrought_iron',   base: 'tfc',            parts: 'wrought_iron' },
        { id: 'gold',     tfc: 'copper',          base: 'tfc',            parts: 'gold',   sheetMetal: 'gold',   sheetBase: 'tfc' },
        { id: 'netherite', tfc: 'tungsten_steel', base: 'tfc_metallurgy', parts: 'steel' },
    ]

    butcheryMetals.forEach(m => {
        let toolBase = m.base
        let sBase = m.sheetBase || m.base
        let sMetal = m.sheetMetal || m.tfc
        let axe = `${toolBase}:metal/axe/${m.tfc}`
        let knife = `${toolBase}:metal/knife/${m.tfc}`
        let hammerHead = `${toolBase}:metal/hammer_head/${m.tfc}`
        let sheet = `${sBase}:metal/sheet/${sMetal}`
        let nail = `tfc_items:${m.parts}_nail`
        let wire = `tfc_items:${m.parts}_wire`
        let rivet = `tfc_items:${m.parts}_rivet`
        let stamen = `tfc_items:${m.parts}_stamen`

        // Cleaver: axe + sheet + 2 nails
        event.shaped(`butchery:${m.id}_cleaver`,
            ['SN', 'A '],
            { S: sheet, N: nail, A: axe }
        )

        // Skinning knife: knife + 2 leather strips
        event.shaped(`butchery:${m.id}_skinning_knife`,
            ['LK', ' L'],
            { L: 'tfc_items:leather_strip', K: knife }
        )

        // Hammer: 2 hammer heads + nail + stick
        event.shaped(`butchery:${m.id}_hammer`,
            ['NNN', 'HSH', ' S '],
            { H: hammerHead, N: nail, S: '#tfc:can_be_lit_on_torch' }
        )

        // Hacksaw: 2 wires + rivet + stamen
        event.shaped(`butchery:${m.id}_hacksaw`,
            [' RS',
             ' WT',
             'RH '],
            { W: wire, R: rivet, S: stamen, T: '#tfc:can_be_lit_on_torch', H: 'tfc_items:saw_wooden_handle' }
        )
    // Bone tools: made via bone knapping (see data/materialism/recipe/knapping/bone/)
    })

    // Nether/End mobs
    event.remove(/butchery:.*dragon.*/)
    event.remove(/butchery:.*end.*/)
    event.remove(/butchery:.*shulker.*/)
    event.remove(/butchery:.*strider.*/)
    event.remove(/butchery:.*piglin.*/)
    event.remove(/butchery:.*hoglin.*/)
    event.remove(/butchery:.*zoglin.*/)
    event.remove(/butchery:.*wither.*/)
    event.remove(/butchery:.*magma.*/)
    event.remove(/butchery:.*sculk.*/)
    // Hostile/fantasy mobs
    event.remove(/butchery:.*creeper.*/)
    event.remove(/butchery:.*spider.*/)
    event.remove(/butchery:.*slime.*/)
    event.remove(/butchery:.*phantom.*/)
    event.remove(/butchery:.*silverfish.*/)
    event.remove(/butchery:.*guardian.*/)
    event.remove(/butchery:.*elder.*/)
    event.remove(/butchery:.*ravager.*/)
    event.remove(/butchery:.*warden.*/)
    event.remove(/butchery:.*illager.*/)
    event.remove(/butchery:.*evoker.*/)
    event.remove(/butchery:.*vindicator.*/)
    event.remove(/butchery:.*witch.*/)
    event.remove(/butchery:.*sniffer.*/)
    // Undead mobs
    event.remove(/butchery:.*zombie.*/)
    event.remove(/butchery:.*drowned.*/)
    event.remove(/butchery:.*husk.*/)
    event.remove(/butchery:.*stray.*/)
    event.remove(/butchery:skeleton.*/)
    event.remove(/butchery:.*iron.?golem.*/)
    // Passive mobs not in TFC
    event.remove(/butchery:.*axolotl.*/)
    event.remove(/butchery:.*bat.*/)
    event.remove(/butchery:.*bee.*/)
    event.remove(/butchery:.*camel.*/)
    event.remove(/butchery:.*dolphin.*/)
    event.remove(/butchery:.*goat.*/)
    event.remove(/butchery:.*glow_squid.*/)
    event.remove(/butchery:.*llama.*/)
    event.remove(/butchery:.*mooshroom.*/)
    event.remove(/butchery:.*ocelot.*/)
    event.remove(/butchery:.*panda.*/)
    event.remove(/butchery:.*polar.?bear.*/)
    event.remove(/butchery:.*pufferfish.*/)
    event.remove(/butchery:.*villager.*/)
    // Misc
    event.remove(/butchery:.*humanmeat.*/)
    event.remove(/butchery:.*playercorpse.*/)
    event.remove(/butchery:.*sulfur.*/)
    event.remove(/butchery:.*salt.*/)

    // Rennet from stomach: stomach + knife → rennet
    event.shapeless('4x firmalife:rennet', [
        'butchery:stomach',
        '#butchery:knives'
    ]).damageIngredient(Ingredient.of('#butchery:knives'))

    // Tallow from animal fat: pot recipe (like blubber → tallow)
    event.custom({
        type: 'tfc:pot',
        ingredients: [
            { item: 'butchery:animal_fat' },
            { item: 'butchery:animal_fat' },
            { item: 'butchery:animal_fat' },
            { item: 'butchery:animal_fat' },
            { item: 'butchery:animal_fat' }
        ],
        fluid_ingredient: {
            amount: 1000,
            fluid: 'minecraft:water'
        },
        temperature: 600.0,
        duration: 2400,
        fluid_output: {
            id: 'tfc:tallow',
            amount: 1000
        }
    })

    // --- Sponge: wool cloth + knife (damaged) --- Is vanilla sponge obtainable in tfc?
    // event.remove('butchery:spongerecipe')
    // event.remove('butchery:wetspongerecipe')
    // event.shapeless('butchery:sponge', [
    //     'minecraft:sponge',
    //     '#butchery:knives'
    // ]).damageIngredient(Ingredient.of('#butchery:knives'))

    // --- Rag: burlap cloth ---
    event.remove('butchery:ragrecipe')
    event.shapeless('butchery:rag', ['#tfc:high_quality_cloth', '#tfc:high_quality_cloth', '#tfc:high_quality_cloth', '#tfc:high_quality_cloth'])

    // --- Rope: tfc lumber + rope ---
    event.remove('butchery:roperecipe')
    event.shaped('butchery:rope', [
        'LLL',
        'R R',
        ' R '
    ], {
        L: '#tfc:lumber',
        R: 'tfc:rope'
    })

    // --- Hook: TFC anvil recipe ---
    event.remove('butchery:hookrecipe')
    event.recipes.tfc.anvil('butchery:hook', 'tfc:metal/ingot/wrought_iron', ['punch_last', 'draw_not_last']).tier(3)

    // --- Blood grate: steel ---
    event.remove('butchery:bloodgraterecipe')
    event.shaped('butchery:blood_grate', [
        'STS',
        'SBS',
        'SSS'
    ], {
        S: 'tfc:metal/ingot/steel',
        T: 'tfc:metal/trapdoor/steel',
        B: '#tfc:barrels'
    })

    // --- Basin: cast iron ---
    event.remove('butchery:basinrecipe')
    event.shaped('butchery:basin', [
        'N N',
        'III'
    ], {
        N: 'tfc_items:cast_iron_nail',
        I: 'tfc:metal/sheet/cast_iron'
    })

    // --- Meat grinder: steel gear + wrought iron sheets ---
    event.remove('butchery:meatgrinderrecipe')
    event.shaped('butchery:meat_grinder', [
        ' B ',
        'GSH',
        ' S '
    ], {
        B: 'butchery:basin',
        G: 'tfc_items:steel_gear',
        S: 'firmalife:metal/sheet/stainless_steel',
        H: 'create:hand_crank'
    })

    // --- Butchers tables: remove vanilla wood + Nether variants ---
    event.remove('butchery:oakbutcherstablerecipe')
    event.remove('butchery:birchbutcherstablerecipe')
    event.remove('butchery:sprucebutcherstablerecipe')
    event.remove('butchery:acaciabutcherstablerecipe')
    event.remove('butchery:darkoakbutcherstablerecipe')
    event.remove('butchery:junglebutcherstablerecipe')
    event.remove('butchery:mangrovebutcherstablerecipe')
    event.remove('butchery:crimsonbutcherstablerecipe')
    event.remove('butchery:warpedbutcherstablerecipe')
    event.remove('butchery:metalbutcherstablerecipe')

    const tableWoods = [
        { butchery: 'oak',      tfc: 'oak' },
        { butchery: 'birch',    tfc: 'birch' },
        { butchery: 'spruce',   tfc: 'spruce' },
        { butchery: 'acacia',   tfc: 'acacia' },
        { butchery: 'dark_oak', tfc: 'hickory' },
        { butchery: 'jungle',   tfc: 'kapok' },
        { butchery: 'mangrove', tfc: 'palm' },
    ]

    tableWoods.forEach(w => {
        event.shaped(`butchery:${w.butchery}_butchers_table`, [
            'WWW',
            'P P',
            'P P'
        ], {
            W: `tfc:wood/stripped_log/${w.tfc}`,
            P: `tfc:wood/planks/${w.tfc}`
        })
    })

    // Metal butchers table: steel
    event.shaped('butchery:metal_butchers_table', [
        'TTT',
        'R R',
        'RSR'
    ], {
        T: 'tfc:metal/trapdoor/steel',
        R: 'tfc:metal/rod/steel',
        S: 'tfc:metal/sheet/steel'
    })

    // --- Metal tray: press a stainless steel sheet ---
    event.remove('butchery:metaltrayrecipe')
    event.recipes.create.pressing('butchery:metal_tray', 'firmalife:metal/sheet/stainless_steel')

    // --- Freezer: removed (doesn't fit TFC preservation); also hidden in JEI ---
    event.remove('butchery:freezercrafting')

    // --- Skin rack: removed (TFC leather process is used instead); also hidden in JEI ---
    event.remove('butchery:skinrackrecipe')

    // --- Pestle and mortar: turn (lathe) a piece of raw stone ---
    event.remove('butchery:pestle_and_mortar_recipe')
    event.custom({
        type: 'vintageimprovements:turning',
        ingredients: [{ tag: 'c:stones/raw' }],
        results: [{ id: 'butchery:pestle_and_mortar', count: 1 }]
    })

    // --- Taxidermy table: tfc lumber + candles + jar + skinning knife ---
    event.remove('butchery:taxidermystationrecipe')
    event.shaped('butchery:taxidermy_table', [
        'CJC',
        'LKL',
        'LLL'
    ], {
        C: 'tfc:candle',
        J: 'butchery:jar',
        L: '#tfc:lumber',
        K: '#butchery:knives'
    })

    // --- Barrels of bones/cod/salmon: use TFC barrels instead of the vanilla one ---
    event.replaceInput({ mod: 'butchery' }, 'minecraft:barrel', '#tfc:barrels')

    // --- Head mounts: vanilla gold → TFC gold ---
    event.replaceInput({ mod: 'butchery' }, 'minecraft:gold_ingot', 'tfc:metal/ingot/gold')

    // --- Canopies: vanilla iron ingot → aluminum rods ---
    event.replaceInput({ output: /^butchery:canopy_/ }, 'minecraft:iron_ingot', 'tfc_metallurgy:metal/rod/aluminum')

    // --- Butcher statue: vanilla smooth stone slab → TFC stone slabs ---
    event.replaceInput({ id: 'butchery:butcherstatuerecipe' }, 'minecraft:smooth_stone_slab', '#c:stones/smooth_slabs')

    // --- Spike trap: sequenced assembly — smooth stone slab + black steel spikes (rods) ---
    event.remove('butchery:spiketraprecipe')
    event.recipes.create.sequenced_assembly(
        [Item.of('butchery:spike_trap')],
        '#c:stones/smooth_slabs',
        [
            event.recipes.createDeploying('tfc:rock/smooth/granite_slab', ['tfc:rock/smooth/granite_slab', 'tfc:metal/rod/black_steel']),
            event.recipes.createDeploying('tfc:rock/smooth/granite_slab', ['tfc:rock/smooth/granite_slab', 'tfc:metal/rod/black_steel']),
            event.recipes.createDeploying('tfc:rock/smooth/granite_slab', ['tfc:rock/smooth/granite_slab', 'tfc:metal/rod/black_steel']),
            event.recipes.createDeploying('tfc:rock/smooth/granite_slab', ['tfc:rock/smooth/granite_slab', 'tfc:metal/rod/black_steel'])
        ]
    ).transitionalItem('tfc:rock/smooth/granite_slab').loops(2)

    // --- Floorstanding sign: TFC lumber + twigs (keep the wool sign face) ---
    event.remove('butchery:butchersfloorsign')
    event.shaped('butchery:floorstanding_sign', [
        'LLL',
        'PCP',
        'T T'
    ], {
        L: '#tfc:lumber',
        P: '#tfc:lumber',
        C: 'minecraft:black_wool',
        T: '#tfc:twigs'
    })

    // --- Plastic sheet: roll TFMG plastic; corner from two sheets ---
    event.custom({
        type: 'createaddition:rolling',
        ingredients: [{ item: 'tfmg:plastic_sheet' }],
        results: [{ id: 'butchery:plastic_sheet', count: 1 }]
    })
    event.shapeless('butchery:plastic_sheet_corner', [
        'butchery:plastic_sheet',
        'butchery:plastic_sheet'
    ])

    // --- Sausage attachment: turn (lathe) a stainless steel ingot ---
    event.remove('butchery:sausageattachmentrecipe')
    event.custom({
        type: 'vintageimprovements:turning',
        ingredients: [{ item: 'firmalife:metal/ingot/stainless_steel' }],
        results: [{ id: 'butchery:sausage_attachment', count: 1 }]
    })

    // --- Coin & deep smithing template: removed (also hidden in JEI) ---
    event.remove('butchery:deepsmithingtemplaterecipe')

    // --- Jar: hand-blown TFC glass (silica glass bottle) ---
    // (original vanilla glass + water bucket recipe removed at top of file)
    event.shapeless('butchery:jar', ['tfc:silica_glass_bottle'])

    // --- Cash register: brass mechanism + gears + copper sheets + glass pane ---
    event.remove('butchery:cashregisterrecipe')
    event.shaped('butchery:cash_register', [
        'CGC',
        'RMR',
        'CKC'
    ], {
        C: 'tfc:metal/sheet/copper',
        G: 'minecraft:glass_pane',
        R: 'tfc_items:brass_gear',
        M: 'create:precision_mechanism',
        K: 'vintageimprovements:brass_spring'
    })

    // --- Counters & butcher displays: TFC woods + stainless steel sheets ---
    // Remove vanilla-wood and Nether-wood variants
    ;['oak', 'birch', 'spruce', 'acacia', 'darkoak', 'jungle', 'crimson', 'warped'].forEach(w => {
        event.remove(`butchery:${w}counterrecipe`)
        event.remove(`butchery:${w}displayrecipe`)
    })

    const displayWoods = [
        { butchery: 'oak',      tfc: 'oak' },
        { butchery: 'birch',    tfc: 'birch' },
        { butchery: 'spruce',   tfc: 'spruce' },
        { butchery: 'acacia',   tfc: 'acacia' },
        { butchery: 'dark_oak', tfc: 'hickory' },
        { butchery: 'jungle',   tfc: 'kapok' },
    ]

    displayWoods.forEach(w => {
        // Counter: 2 stainless steel sheets over 2 planks
        event.shaped(`butchery:${w.butchery}_counter`, [
            'SS',
            'PP'
        ], {
            S: 'firmalife:metal/sheet/stainless_steel',
            P: `tfc:wood/planks/${w.tfc}`
        })

        // Butcher display: steel frame + glass + raw meat over planks
        event.shaped(`butchery:${w.butchery}_butcher_display`, [
            'SGS',
            'SMS',
            'PPP'
        ], {
            S: 'firmalife:metal/sheet/stainless_steel',
            G: 'minecraft:glass_pane',
            M: '#butchery:raw_meat',
            P: `tfc:wood/planks/${w.tfc}`
        })
    })
})

// Suppress normal TFC entity drops when killed with a Butchery tool
// The Butchery carcass is placed via LivingDeathEvent (separate from drops),
// so clearing LivingDropsEvent only removes the duplicate TFC loot
EntityEvents.drops(event => {
    if (!event.source) return
    let killer = event.source.player
    if (!killer) return
    let weapon = killer.mainHandItem
    if (weapon.isEmpty()) return
    if (!weapon.hasTag('butchery:knives')) return

    let typeId = event.entity.type.builtInRegistryHolder().key().location()
    if (typeId.getNamespace() === 'tfc') {
        event.drops.clear()
    }
})