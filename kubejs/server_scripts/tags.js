ServerEvents.tags('block', event => {
    // materialism:* block tags (class woods, furniture, roofs, wattle...) are generated into materialism-core

    // Aeronautics levitite catalyzers: add TFC heat sources as substitutes for Nether blocks
    // levitite_catalyzer (block): campfire, magma_block, torch, fire, lit_blaze_burner
    // The originals include campfire/torch/fire which exist in TFC, but magma_block doesn't
    // levitite_adjacent_catalyzer (block): netherrack, c:storage_blocks/coal — coal blocks exist
    // levitite_soul_catalyzer/adjacent: soul_fire_base_blocks — doesn't exist in TFC
    // Add TFC charcoal forge as alternative catalyzer
    event.add('aeronautics:levitite_catalyzer', 'tfc:charcoal_forge')
    event.add('aeronautics:levitite_adjacent_catalyzer', '#c:storage_blocks/coal')
})

ServerEvents.tags('item', event => {
    event.add('materialism:powders/copper', 'tfc:powder/native_copper')
    event.add('materialism:powders/copper', 'tfc:powder/malachite')
    event.add('materialism:powders/copper', 'tfc:powder/tetrahedrite')
    event.add('materialism:powders/iron', 'tfc:powder/hematite')
    event.add('materialism:powders/iron', 'tfc:powder/magnetite')
    event.add('materialism:powders/iron', 'tfc:powder/limonite')
    // TFMG's blast furnace routes items into its ore vs. flux hopper by checking membership in
    // tfmg:flux    
    event.add('tfmg:flux', 'tfc:powder/flux')
    // Add TFC sheets to c:plates tags so TFMG recipes using tags pick them up
    event.add('c:plates/nickel', 'tfc:metal/sheet/nickel')
    event.add('c:plates/lead', 'tfc_metallurgy:metal/sheet/lead')
    event.add('c:plates/cast_iron', 'tfc:metal/sheet/cast_iron')
    event.add('c:plates/gold', 'tfc:metal/sheet/gold')
    event.add('materialism:rubber', 'afc:rubber_bar')
    event.add('materialism:rubber', 'tfmg:rubber_sheet')
    // DynamicLights: light up TFC's torch and jack o'lantern when held/worn or dropped
    event.add('dynamiclights:self', 'tfc:torch')
    event.add('dynamiclights:dropped', 'tfc:torch')
    event.add('dynamiclights:self', 'tfc:jack_o_lantern')
    event.add('dynamiclights:dropped', 'tfc:jack_o_lantern')
    // VI's helve hammer tag to include TFC anvils
    const tfcMetalAnvils = [
        'bismuth_bronze', 'black_bronze', 'black_steel', 'blue_steel', 'bronze', 'copper',
        'red_steel', 'steel', 'wrought_iron'
    ]
    const tfcMetallurgyMetalAnvils = [
        'aluminum', 'beryllium_copper', 'boron', 'cobalt', 'compressed_iron', 'enderium',
        'ferroboron', 'florentine_bronze', 'invar', 'lumium', 'mithril', 'nickel_silver',
        'osmiridium', 'osmium', 'pewter', 'refined_glowstone', 'refined_obsidian', 'signalum',
        'thorium', 'titanium', 'tungsten', 'tungsten_steel', 'uranium'
    ]
    tfcMetalAnvils.forEach(metal => event.add('vintageimprovements:anvils', `tfc:metal/anvil/${metal}`))
    tfcMetallurgyMetalAnvils.forEach(metal => event.add('vintageimprovements:anvils', `tfc_metallurgy:metal/anvil/${metal}`))
})

ServerEvents.tags('entity_type', event => {
    // Butchery mod compatibility: add TFC animals to c: entity type tags
    // so they drop the correct carcasses when killed with butchery knives

    // Direct equivalents
    event.add('c:cow', 'tfc:cow')
    event.add('c:pig', 'tfc:pig')
    event.add('c:chicken', 'tfc:chicken')
    event.add('c:sheep', 'tfc:sheep')
    event.add('c:goat', 'tfc:goat')
    event.add('c:rabbit', 'tfc:rabbit')
    event.add('c:horse', 'tfc:horse')
    event.add('c:donkey', 'tfc:donkey')
    event.add('c:mule', 'tfc:mule')
    event.add('c:cat', 'tfc:cat')
    event.add('c:wolf', 'tfc:wolf')
    event.add('c:fox', 'tfc:fox')
    event.add('c:ocelot', 'tfc:ocelot')
    event.add('c:frog', 'tfc:frog')
    event.add('c:turtle', 'tfc:turtle')
    event.add('c:squid', 'tfc:squid')
    event.add('c:dolphin', 'tfc:dolphin')
    event.add('c:pufferfish', 'tfc:pufferfish')
    event.add('c:cod', 'tfc:cod')
    event.add('c:salmon', 'tfc:salmon')
    event.add('c:panda', 'tfc:panda')
    event.add('c:polarbear', 'tfc:polar_bear')

    // TFC-unique animals mapped to closest Butchery equivalent
    // event.add('c:cow', 'tfc:bison')
    // event.add('c:cow', 'tfc:musk_ox')
    // event.add('c:cow', 'tfc:yak')
    // event.add('c:pig', 'tfc:boar')
    // event.add('c:chicken', 'tfc:duck')
    // event.add('c:chicken', 'tfc:quail')
    // event.add('c:chicken', 'tfc:grouse')
    // event.add('c:chicken', 'tfc:pheasant')
    // event.add('c:chicken', 'tfc:turkey')
    // event.add('c:chicken', 'tfc:peafowl')
    // event.add('c:goat', 'tfc:deer')
    // event.add('c:goat', 'tfc:gazelle')
    // event.add('c:goat', 'tfc:bongo')
    // event.add('c:goat', 'tfc:wildebeest')
    // event.add('c:llama', 'tfc:alpaca')
    // event.add('c:horse', 'tfc:moose')
    // event.add('c:horse', 'tfc:caribou')
    // event.add('c:polarbear', 'tfc:grizzly_bear')
    // event.add('c:polarbear', 'tfc:black_bear')
    // event.add('c:wolf', 'tfc:dog')
    // event.add('c:wolf', 'tfc:direwolf')
    // event.add('c:wolf', 'tfc:hyena')
    // event.add('c:wolf', 'tfc:mongoose')

    // Large predators → wolf carcass (closest available)
    // event.add('c:wolf', 'tfc:cougar')
    // event.add('c:wolf', 'tfc:panther')
    // event.add('c:wolf', 'tfc:lion')
    // event.add('c:wolf', 'tfc:tiger')
    // event.add('c:wolf', 'tfc:sabertooth')
    // event.add('c:wolf', 'tfc:leopard_seal')
    // event.add('c:wolf', 'tfc:crocodile')
})

ServerEvents.tags('enchantment', event => {
    event.removeAll('minecraft:in_enchanting_table')
    event.removeAll('minecraft:tradeable')
    event.removeAll('minecraft:on_random_loot')
})