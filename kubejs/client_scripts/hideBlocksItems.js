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