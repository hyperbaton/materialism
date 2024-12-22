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
    event.hide(/.vintageimprovements:(?!vanadium).*rod/);
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

    // Hide Minecraft unreachable items
    event.hide(/minecraft:(?!leather).*helm/);
    event.hide(/minecraft:(?!leather).*chestplate/);
    event.hide(/minecraft:(?!leather).*leggings/);
    event.hide(/minecraft:(?!leather).*boots/);
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