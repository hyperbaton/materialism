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
})