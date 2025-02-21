JEIEvents.hideItems(event => {
    // Hide unwanted metals
    // Hide all items, blocks, and fluids with "signalum" in their ID
    event.hide(/.*signalum.*/);
    event.hide(/.*blutonium.*/);
    event.hide(/.*enderium.*/);
    event.hide(/.*lumium.*/);
    event.hide(/.*mithril.*/);
    event.hide(/.*pink_slime.*/);
    event.hide(/.*refined_glowstone.*/);
    event.hide(/.*refined_obsidian.*/);
    // Hide Create items
    event.hide('create:cart_assembler');
    event.hide('create:empty_blaze_burner');
    event.hide('create:blaze_burner');
    event.hide('create:controller_rail');
    event.hide('vintageimprovements:andesite_rod')
    event.hide('vintageimprovements:blaze_rod')
    event.hide('vintageimprovements:netherite_rod')
    event.hide('vintageimprovements:nethersteel_rod')
    event.hide('vintageimprovements:andesite_wire')
    event.hide('vintageimprovements:netherite_wire')
    event.hide('vintageimprovements:nethersteel_wire')
    event.hide('vintageimprovements:andesite_spring')
    event.hide('vintageimprovements:blaze_spring')
    event.hide('vintageimprovements:netherite_spring')
    event.hide('vintageimprovements:nethersteel_spring')
    event.hide('vintageimprovements:small_andesite_spring')
    event.hide('vintageimprovements:small_netherite_spring')
    event.hide('vintageimprovements:small_nethersteel_spring')
    event.hide(/.*vintageimprovements.*sheet.*/);
    event.hide('create:copper_sheet');
    event.hide('create:brass_sheet');
    event.hide('createaddition:electrum_sheet');
    event.hide('createaddition:zinc_sheet');
    event.hide('createdeco:netherite_sheet');
    event.hide('tfmg:lead_ore');
    event.hide('tfmg:deepslate_lead_ore');
    event.hide('tfmg:nickel_ore');
    event.hide('tfmg:deepslate_nickel_ore');
    event.hide('tfmg:lithium_ore');
    event.hide('tfmg:deepslate_lithium_ore');
    event.hide('tfmg:sulfur');
    event.hide('tfmg:lignite');
    event.hide('tfmg:fireclay');
    event.hide('create_new_age:thorium_ore');
    event.hide('vintageimprovements:sulfur_block');
    event.hide('vintageimprovements:sulfur');
    event.hide('vintageimprovements:sulfur_chunk');
    event.hide(/vintageimprovements:(?!vanadium).*rod/);
    event.hide('tfmg:copper_wire');
    event.hide('tfmg:aluminum_wire');
    event.hide(/createaddition:.*rod/);
    event.hide('createaddition:diamond_grit_sandpaper')
    event.hide('createaddition:diamond_grit')
    event.hide('createaddition:electric_motor')
    event.hide('createaddition:alternator')
    event.hide('createaddition:capacitor')
    event.hide('tfmg:copper_sulfate')
    event.hide('tfmg:sulfur_dust')
    event.hide('vintageimprovements:sulfuric_acid_bucket')
    event.hide('tfmg:limesand')
    event.hide('createaddition:electrum_ingot')
    event.hide('tfc_metallurgy:metal/graphite')
    event.hide('tfc_metallurgy:bucket/metal/graphite')
    event.hide('createaddition:modular_accumulator')
    event.hide('createaddition:connector')
    event.hide('createaddition:small_light_connector')
    event.hide('createaddition:large_connector')
    event.hide('createaddition:redstone_relay')
    event.hide('create_new_age:electrical_connector')
    event.hide('create_new_age:copper_wire')
    event.hide(/create_new_age:overcharged.*/)
    event.hide('tfmg:fireclay_ball')
    event.hide('tfmg:fireproof_brick')
    event.hide(/create:crushed_raw.*/)
    event.hide('create_new_age:thorium')
    event.hide('create_optical:copper_coil')
    event.hide('create_optical:golden_coil')
    event.hide('create:zinc_ore')
    event.hide('create:deepslate_zinc_ore')
    event.hide('create:golden_sheet')

    // Hide Weather 2 items
    event.hide(/.*weather2.*/)

    // Hide boats (there are aleki ships)
    event.hide(/.*boat.*/)

    removeToolsAndArmor('thorium')
    removeToolsAndArmor('uranium')

    // Hide Minecraft unreachable items
    event.hide(/minecraft:(?!leather).*helm/);
    event.hide(/minecraft:(?!leather).*chestplate/);
    event.hide(/minecraft:(?!leather).*leggings/);
    event.hide(/minecraft:(?!leather).*boots/);
    event.hide('minecraft:enchanted_book');
    event.hide(/minecraft:.*ore.*/);
    event.hide(/minecraft:.*nylium.*/);
    event.hide(/minecraft:.*nether.*/);
    event.hide('minecraft:lantern');
    event.hide('minecraft:sea_lantern');
    event.hide('minecraft:soul_lantern');
    event.hide(/minecraft:.*raw.*/);
    event.hide(/minecraft:.*shovel.*/);
    event.hide(/minecraft:.*axe.*/);
    event.hide(/minecraft:.*hoe.*/);
    event.hide(/minecraft:.*sword.*/);
    event.hide('minecraft:barrel');
    event.hide(/minecraft:.*andesite.*/);
    event.hide(/minecraft:.*amethyst.*/);
    event.hide(/minecraft:.*spawn_egg.*/);
    event.hide('minecraft:bee_nest');
    event.hide('minecraft:beehive');
    event.hide(/minecraft:.*oak.*/);
    event.hide(/minecraft:.*spruce.*/);
    event.hide(/minecraft:.*birch.*/);
    event.hide(/minecraft:.*jungle.*/);
    event.hide(/minecraft:.*acacia.*/);
    event.hide(/minecraft:.*mangrove.*/);
    event.hide(/minecraft:.*cherry.*/);
    event.hide(/minecraft:.*crimson.*/);
    event.hide(/minecraft:.*warped.*/);
    event.hide(/minecraft:.*candle.*/);
    event.hide(/minecraft:.*quartz.*/);
    event.hide(/minecraft:.*prismarine.*/);
    event.hide(/minecraft:.*deepslate.*/);
    event.hide(/minecraft:.*blackstone.*/);
    event.hide(/minecraft:.*smooth_stone.*/);
    event.hide(/minecraft:.*basalt.*/);
    event.hide(/minecraft:.*granite.*/);
    event.hide(/minecraft:.*diorite.*/);
    event.hide('minecraft:tuff');
    event.hide(/minecraft:.*sand.*/);
    event.hide(/minecraft:.*concrete.*/);
    event.hide('minecraft:coal');
    event.hide('minecraft:coal_block');
    event.hide(/minecraft:.*end.*/);
    event.hide(/minecraft:.*pottery.*/);
    event.hide('minecraft:sugar_cane');
    event.hide(/minecraft:.*stone_brick.*/);
    event.hide(/minecraft:.*cobblestone.*/);
    event.hide(/minecraft:.*purpur.*/);
    event.hide('minecraft:ancient_debris');
    event.hide('minecraft:chain');
    event.hide(/minecraft:.*cook.*/);
    event.hide('minecraft:beef');
    event.hide('minecraft:porkchop');
    event.hide('minecraft:mutton');
    event.hide('minecraft:chicken');
    event.hide('minecraft:rabbit');
    event.hide('minecraft:cod');
    event.hide('minecraft:salmon');
    event.hide('minecraft:beacon');
    event.hide('minecraft:ghast_tear');
    event.hide(/minecraft:.*dragon.*/);
    event.hide(/minecraft:.*chorus.*/);
    event.hide('minecraft:trident');
    event.hide('minecraft:echo_shard');
    event.hide('minecraft:recovery_compass');
    event.hide(/minecraft:.*diamond.*/);
    event.hide('minecraft:torch');
    event.hide('minecraft:soul_torch');
    event.hide('minecraft:torchflower_seeds');
    event.hide('minecraft:torchflower');
    event.hide(/minecraft:.*azalea.*/);
    event.hide('minecraft:iron_bars');
    event.hide('minecraft:iron_block');
    event.hide('minecraft:iron_ingot');
    event.hide('minecraft:iron_nugget');
    event.hide('minecraft:iron_horse_armor');
    event.hide('minecraft:golden_horse_armor');
    event.hide(/minecraft:.*apple.*/);
    event.hide(/minecraft:.*carrot.*/);
    event.hide(/minecraft:.*potato.*/);
    event.hide(/minecraft:.*beet.*/);
    event.hide(/minecraft:.*melon.*/);
    event.hide('minecraft:conduit');
    event.hide('minecraft:lodestone');
    event.hide('minecraft:dandelion');
    event.hide('minecraft:dandelion');
    event.hide('minecraft:poppy');
    event.hide('minecraft:blue_orchid');
    event.hide('minecraft:allium');
    event.hide('minecraft:azure_bluet');
    event.hide('minecraft:red_tulip');
    event.hide('minecraft:orange_tulip');
    event.hide('minecraft:white_tulip');
    event.hide('minecraft:pink_tulip');
    event.hide('minecraft:oxeye_daisy');
    event.hide('minecraft:cornflower');
    event.hide('minecraft:lily_of_the_valley');
    event.hide('minecraft:wither_rose');
    event.hide('minecraft:lilac');
    event.hide('minecraft:rose_bush');
    event.hide('minecraft:peony');
    event.hide('minecraft:sunflower');
    event.hide('minecraft:grass');
    event.hide('minecraft:fern');
    event.hide('minecraft:tall_grass');
    event.hide('minecraft:big_fern');
    event.hide('minecraft:dead_bush');
    event.hide(/minecraft:.*drip.*/);
    event.hide(/minecraft:.*pitch.*/);
    event.hide('minecraft:heart_of_the_sea');
    event.hide(/minecraft:.*dirt.*/);
    event.hide('minecraft:podzol');
    event.hide('minecraft:mycelium');
    event.hide('minecraft:farmland');
    event.hide('minecraft:mud');
    event.hide('minecraft:grass_block');
    event.hide('minecraft:gravel');
    event.hide('minecraft:calcite');
    event.hide('minecraft:torch');
    event.hide(/minecraft:.*froglight.*/);
    event.hide(/minecraft:.*soul.*/);
    event.hide(/minecraft:.*shulker.*/);
    event.hide(/minecraft:.*vine.*/);
    event.hide('minecraft:redstone_lamp');
    event.hide(/minecraft:.*furnace.*/);
    event.hide('minecraft:composter');
    event.hide('minecraft:smoker');
    event.hide(/minecraft:.*bucket.*/);
    event.hide('minecraft:sniffer_egg');
    event.hide(/minecraft:.*emerald.*/);
    event.hide(/minecraft:.*rabbit.*/);
    event.hide(/minecraft:.*glowstone.*/);
    event.hide('minecraft:glow_berries');
    event.hide('minecraft:glow_lichen');
    event.hide('minecraft:bread');
    event.hide(/minecraft:.*stew.*/);

    // Hide the TFC ores, which just clutter JEI
    event.hide(/tfc:ore\/.*/);

    function removeToolsAndArmor(metal) {
        event.hide('tfc_metallurgy:metal/anvil/' + metal)
        event.hide('tfc_metallurgy:metal/chain/' + metal)
        event.hide('tfc_metallurgy:metal/lamp/' + metal)
        event.hide('tfc_metallurgy:metal/trapdoor/' + metal)
        event.hide('tfc_metallurgy:metal/tuyere/' + metal)
        event.hide('tfc_metallurgy:metal/fish_hook/' + metal)
        event.hide('tfc_metallurgy:metal/fishing_rod/' + metal)
        event.hide('tfc_metallurgy:metal/pickaxe/' + metal)
        event.hide('tfc_metallurgy:metal/pickaxe_head/' + metal)
        event.hide('tfc_metallurgy:metal/propick/' + metal)
        event.hide('tfc_metallurgy:metal/propick_head/' + metal)
        event.hide('tfc_metallurgy:metal/axe/' + metal)
        event.hide('tfc_metallurgy:metal/axe_head/' + metal)
        event.hide('tfc_metallurgy:metal/shovel/' + metal)
        event.hide('tfc_metallurgy:metal/shovel_head/' + metal)
        event.hide('tfc_metallurgy:metal/hoe/' + metal)
        event.hide('tfc_metallurgy:metal/hoe_head/' + metal)
        event.hide('tfc_metallurgy:metal/chisel/' + metal)
        event.hide('tfc_metallurgy:metal/chisel_head/' + metal)
        event.hide('tfc_metallurgy:metal/hammer/' + metal)
        event.hide('tfc_metallurgy:metal/hammer_head/' + metal)
        event.hide('tfc_metallurgy:metal/saw/' + metal)
        event.hide('tfc_metallurgy:metal/saw_blade/' + metal)
        event.hide('tfc_metallurgy:metal/javelin/' + metal)
        event.hide('tfc_metallurgy:metal/javelin_head/' + metal)
        event.hide('tfc_metallurgy:metal/sword/' + metal)
        event.hide('tfc_metallurgy:metal/sword_blade/' + metal)
        event.hide('tfc_metallurgy:metal/mace/' + metal)
        event.hide('tfc_metallurgy:metal/mace_head/' + metal)
        event.hide('tfc_metallurgy:metal/knife/' + metal)
        event.hide('tfc_metallurgy:metal/knife_blade/' + metal)
        event.hide('tfc_metallurgy:metal/scythe/' + metal)
        event.hide('tfc_metallurgy:metal/scythe_blade/' + metal)
        event.hide('tfc_metallurgy:metal/shears/' + metal)
        event.hide('tfc_metallurgy:metal/unfinished_helmet/' + metal)
        event.hide('tfc_metallurgy:metal/helmet/' + metal)
        event.hide('tfc_metallurgy:metal/unfinished_chestplate/' + metal)
        event.hide('tfc_metallurgy:metal/chestplate/' + metal)
        event.hide('tfc_metallurgy:metal/unfinished_greaves/' + metal)
        event.hide('tfc_metallurgy:metal/greaves/' + metal)
        event.hide('tfc_metallurgy:metal/unfinished_boots/' + metal)
        event.hide('tfc_metallurgy:metal/boots/' + metal)
        event.hide('tfc_metallurgy:metal/unfinished_lamp/' + metal)
        event.hide('tfc_metallurgy:metal/shield/' + metal)
    }
});

JEIEvents.hideFluids(event => {
    // Hide unwanted metals
    // Hide all fluids with "signalum" in their ID
    event.hide(/.*signalum.*/);
    event.hide(/.*blutonium.*/);
    event.hide(/.*enderium.*/);
    event.hide(/.*lumium.*/);
    event.hide(/.*mithril.*/);
    event.hide(/.*pink_slime.*/);
    event.hide(/.*refined_glowstone.*/);
    event.hide(/.*refined_obsidian.*/);
    event.hide('vintageimprovements:sulfuric_acid');
});