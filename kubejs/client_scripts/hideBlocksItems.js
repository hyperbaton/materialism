RecipeViewerEvents.removeEntries('item', event => {
    console.log('[hideBlocksItems] removeEntries item event fired!')

    // Helper: safely remove by exact ID using regex (won't error if item doesn't exist)
    function r(id) {
        event.remove(new RegExp('^' + id.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '$'))
    }

    // Hide unwanted metals
    event.remove(/.*signalum.*/);
    event.remove(/.*blutonium.*/);
    event.remove(/.*enderium.*/);
    event.remove(/.*lumium.*/);
    event.remove(/.*mithril.*/);
    event.remove(/.*pink_slime.*/);
    event.remove(/.*refined_glowstone.*/);
    event.remove(/.*refined_obsidian.*/);
    event.remove(/.*tfc_metallurgy.*andesite.*/);

    // Hide Create items
    r('create:cart_assembler');
    event.remove(/create:.*blaze.*/)
    r('create:controller_rail');

    // Hide createvintageneoforged rods, wires, springs, sheets
    event.remove(/createvintageneoforged:.*_rod/)
    event.remove(/createvintageneoforged:.*_wire/)
    event.remove(/createvintageneoforged:.*_spring/)
    event.remove(/createvintageneoforged:.*sheet/);
    r('create:copper_sheet');
    r('create:brass_sheet');
    r('createaddition:electrum_sheet');
    r('createaddition:zinc_sheet');
    event.remove(/createdeco:.*netherite.*/);
    r('createdeco:andesite_sheet');
    r('createdeco:zinc_sheet');

    // Hide ores and raw materials from mods
    r('tfmg:lead_ore');
    r('tfmg:deepslate_lead_ore');
    r('tfmg:nickel_ore');
    r('tfmg:deepslate_nickel_ore');
    r('tfmg:lithium_ore');
    r('tfmg:deepslate_lithium_ore');
    r('tfmg:sulfur');
    r('tfmg:lignite');
    r('tfmg:fireclay');
    r('create_new_age:thorium_ore');
    event.remove(/createvintageneoforged:sulfur.*/);
    r('tfmg:copper_wire');
    r('tfmg:aluminum_wire');
    event.remove(/createaddition:.*rod/);
    r('createaddition:diamond_grit_sandpaper')
    r('createaddition:diamond_grit')
    r('createaddition:electric_motor')
    r('createaddition:alternator')
    r('createaddition:capacitor')
    r('tfmg:copper_sulfate')
    r('tfmg:sulfur_dust')
    event.remove(/createvintageneoforged:sulfuric_acid_bucket/)
    r('tfmg:limesand')
    r('createaddition:electrum_ingot')
    r('tfc_metallurgy:metal/graphite')
    r('tfc_metallurgy:bucket/metal/graphite')
    r('createaddition:modular_accumulator')
    r('createaddition:connector')
    r('createaddition:small_light_connector')
    r('createaddition:large_connector')
    r('createaddition:redstone_relay')
    r('create_new_age:electrical_connector')
    r('create_new_age:copper_wire')
    event.remove(/create_new_age:overcharged.*/)
    r('tfmg:fireclay_ball')
    r('tfmg:fireproof_brick')
    event.remove(/create:crushed_raw.*/)
    r('create_new_age:thorium')
    r('create_optical:copper_coil')
    r('create_optical:golden_coil')
    r('create:zinc_ore')
    r('create:deepslate_zinc_ore')
    r('create:golden_sheet')
    event.remove(/tfmg:raw.*/)
    r('create:wheat_flour');
    r('create:dough');
    r('create:iron_sheet');
    r('create:raw_zinc');
    r('create:raw_zinc_block');
    r('create:zinc_ingot');
    r('create:brass_ingot');
    r('create:andesite_alloy_block');
    r('tfmg:aluminum_ingot');
    r('design_decor:netherite_large_chain');
    r('bellsandwhistles:headlight');
    r('design_decor:andesite_large_chain');
    r('design_decor:strong_bronze_large_chain');
    r('design_decor:nethersteel_large_chain');
    r('design_decor:manyullyn_large_chain');
    r('design_decor:hepatizon_large_chain');
    r('design_decor:knightslime_large_chain');
    r('design_decor:queens_lime_large_chain');

    // Hide TFMG tools/armor/ingots
    r('tfmg:lead_axe');
    r('tfmg:lead_hoe');
    r('tfmg:lead_shovel');
    r('tfmg:lead_pickaxe');
    r('tfmg:lead_sword');
    r('tfmg:lead_ingot');
    r('tfmg:steel_axe');
    r('tfmg:steel_hoe');
    r('tfmg:steel_shovel');
    r('tfmg:steel_pickaxe');
    r('tfmg:steel_sword');
    r('tfmg:steel_ingot');
    r('tfmg:steel_helmet');
    r('tfmg:steel_chestplate');
    r('tfmg:steel_leggings');
    r('tfmg:steel_boots');
    r('create:cinder_flour');
    r('tfmg:nickel_ingot');
    r('tfmg:lithium_ingot');
    r('tfmg:aluminum_axe');
    r('tfmg:aluminum_hoe');
    r('tfmg:aluminum_shovel');
    r('tfmg:aluminum_pickaxe');
    r('tfmg:aluminum_sword');
    r('design_decor:brass_light');
    r('design_decor:copper_light');
    r('design_decor:zinc_light');
    r('design_decor:brass_lamp');
    r('design_decor:copper_lamp');
    r('design_decor:zinc_lamp');

    // Hide Weather 2 items
    event.remove(/.*weather2.*/)

    // Hide boats (there are aleki ships)
    event.remove(/.*boat.*/)

    removeToolsAndArmor('thorium')
    removeToolsAndArmor('uranium')

    // Hide butcher strange stuff
    r('butcher:dragonscalearmor_helmet');
    r('butcher:dragonscalearmor_chestplate');
    r('butcher:dragonscalearmor_leggings');
    r('butcher:dragonscalearmor_boots');
    r('butcher:witcharmor_helmet');
    r('butcher:witcharmor_chestplate');
    r('butcher:sulfur');
    event.remove(/butcher:.*salt.*/);
    r('butcher:witheredheart');
    event.remove(/butcher:.*dragon.*/);
    event.remove(/butcher:.*elder.*/);
    event.remove(/butcher:.*illager.*/);
    event.remove(/butcher:.*end.*/);
    event.remove(/butcher:.*shulker.*/);
    event.remove(/butcher:.*slime.*/);
    event.remove(/butcher:.*sniffer.*/);
    event.remove(/butcher:.*strider.*/);
    event.remove(/butcher:.*piglin.*/);
    event.remove(/butcher:.*evoker.*/);
    event.remove(/butcher:.*hoglin.*/);
    event.remove(/butcher:.*guardian.*/);

    // Hide Minecraft unreachable items
    event.remove(/minecraft:(?!leather).*helm/);
    event.remove(/minecraft:(?!leather).*chestplate/);
    event.remove(/minecraft:(?!leather).*leggings/);
    event.remove(/minecraft:(?!leather).*boots/);
    r('minecraft:enchanted_book');
    event.remove(/minecraft:.*ore.*/);
    event.remove(/minecraft:.*nylium.*/);
    event.remove(/minecraft:.*nether.*/);
    r('minecraft:lantern');
    r('minecraft:sea_lantern');
    r('minecraft:soul_lantern');
    event.remove(/minecraft:.*raw.*/);
    event.remove(/minecraft:.*shovel.*/);
    event.remove(/minecraft:.*axe.*/);
    event.remove(/minecraft:.*hoe.*/);
    event.remove(/minecraft:.*sword.*/);
    r('minecraft:barrel');
    event.remove(/minecraft:.*andesite.*/);
    event.remove(/minecraft:.*amethyst.*/);
    event.remove(/minecraft:.*spawn_egg.*/);
    r('minecraft:bee_nest');
    r('minecraft:beehive');
    event.remove(/minecraft:.*oak.*/);
    event.remove(/minecraft:.*spruce.*/);
    event.remove(/minecraft:.*birch.*/);
    event.remove(/minecraft:.*jungle.*/);
    event.remove(/minecraft:.*acacia.*/);
    event.remove(/minecraft:.*mangrove.*/);
    event.remove(/minecraft:.*cherry.*/);
    event.remove(/minecraft:.*crimson.*/);
    event.remove(/minecraft:.*warped.*/);
    event.remove(/minecraft:.*candle.*/);
    event.remove(/minecraft:.*quartz.*/);
    event.remove(/minecraft:.*prismarine.*/);
    event.remove(/minecraft:.*deepslate.*/);
    event.remove(/minecraft:.*blackstone.*/);
    event.remove(/minecraft:.*smooth_stone.*/);
    event.remove(/minecraft:.*basalt.*/);
    event.remove(/minecraft:.*granite.*/);
    event.remove(/minecraft:.*diorite.*/);
    r('minecraft:tuff');
    event.remove(/minecraft:.*sand.*/);
    event.remove(/minecraft:.*concrete.*/);
    r('minecraft:coal');
    r('minecraft:coal_block');
    event.remove(/minecraft:.*end.*/);
    event.remove(/minecraft:.*pottery.*/);
    r('minecraft:sugar_cane');
    event.remove(/minecraft:.*stone_brick.*/);
    event.remove(/minecraft:.*cobblestone.*/);
    event.remove(/minecraft:.*purpur.*/);
    r('minecraft:ancient_debris');
    r('minecraft:chain');
    event.remove(/minecraft:.*cook.*/);
    r('minecraft:beef');
    r('minecraft:porkchop');
    r('minecraft:mutton');
    r('minecraft:chicken');
    r('minecraft:rabbit');
    r('minecraft:cod');
    r('minecraft:salmon');
    r('minecraft:beacon');
    r('minecraft:ghast_tear');
    event.remove(/minecraft:.*dragon.*/);
    event.remove(/minecraft:.*chorus.*/);
    r('minecraft:trident');
    r('minecraft:echo_shard');
    r('minecraft:recovery_compass');
    event.remove(/minecraft:.*diamond.*/);
    r('minecraft:torch');
    r('minecraft:soul_torch');
    r('minecraft:torchflower_seeds');
    r('minecraft:torchflower');
    event.remove(/minecraft:.*azalea.*/);
    r('minecraft:iron_bars');
    r('minecraft:iron_block');
    r('minecraft:iron_ingot');
    r('minecraft:iron_nugget');
    r('minecraft:iron_horse_armor');
    r('minecraft:golden_horse_armor');
    event.remove(/minecraft:.*apple.*/);
    event.remove(/minecraft:.*carrot.*/);
    event.remove(/minecraft:.*potato.*/);
    event.remove(/minecraft:.*beet.*/);
    event.remove(/minecraft:.*melon.*/);
    r('minecraft:conduit');
    r('minecraft:lodestone');
    r('minecraft:dandelion');
    r('minecraft:poppy');
    r('minecraft:blue_orchid');
    r('minecraft:allium');
    r('minecraft:azure_bluet');
    r('minecraft:red_tulip');
    r('minecraft:orange_tulip');
    r('minecraft:white_tulip');
    r('minecraft:pink_tulip');
    r('minecraft:oxeye_daisy');
    r('minecraft:cornflower');
    r('minecraft:lily_of_the_valley');
    r('minecraft:wither_rose');
    r('minecraft:lilac');
    r('minecraft:rose_bush');
    r('minecraft:peony');
    r('minecraft:sunflower');
    r('minecraft:grass');
    r('minecraft:fern');
    r('minecraft:tall_grass');
    r('minecraft:large_fern');
    r('minecraft:dead_bush');
    event.remove(/minecraft:.*drip.*/);
    event.remove(/minecraft:.*pitch.*/);
    r('minecraft:heart_of_the_sea');
    event.remove(/minecraft:.*dirt.*/);
    r('minecraft:podzol');
    r('minecraft:mycelium');
    r('minecraft:farmland');
    event.remove(/minecraft:.*mud.*/);
    r('minecraft:grass_block');
    r('minecraft:gravel');
    r('minecraft:calcite');
    event.remove(/minecraft:.*froglight.*/);
    event.remove(/minecraft:.*soul.*/);
    event.remove(/minecraft:.*shulker.*/);
    event.remove(/minecraft:.*vine.*/);
    r('minecraft:redstone_lamp');
    event.remove(/minecraft:.*furnace.*/);
    r('minecraft:composter');
    r('minecraft:smoker');
    event.remove(/minecraft:.*bucket.*/);
    r('minecraft:sniffer_egg');
    event.remove(/minecraft:.*emerald.*/);
    event.remove(/minecraft:.*rabbit.*/);
    event.remove(/minecraft:.*glowstone.*/);
    r('minecraft:glow_berries');
    r('minecraft:glow_lichen');
    r('minecraft:bread');
    event.remove(/minecraft:.*stew.*/);
    event.remove(/minecraft:(?!red).*stone/);
    event.remove(/minecraft:.*seed.*/);
    r('minecraft:pink_petals');
    event.remove(/minecraft:.*sculk.*/);
    event.remove(/minecraft:.*_raft.*/);
    r('minecraft:gold_block');
    event.remove(/minecraft:.*moss.*/);
    r('minecraft:cocoa_beans');
    r('minecraft:pumpkin');
    event.remove(/minecraft:.*honey.*/);
    r('minecraft:enchanting_table');
    r('minecraft:suspicious_gravel');
    r('minecraft:bookshelf');
    r('minecraft:chest');
    r('minecraft:trapped_chest');
    r('minecraft:respawn_anchor');
    event.remove(/minecraft:.*fish.*/);
    r('minecraft:shears');
    r('minecraft:gold_ingot');
    r('minecraft:gold_nugget');
    r('minecraft:copper_ingot');
    event.remove(/.*obsidian.*/);
    r('minecraft:magma_block');
    event.remove(/minecraft:.*mushroom.*/);
    event.remove(/minecraft:.*blaze.*/);
    r('minecraft:magma_cream');
    r('minecraft:phantom_membrane');
    r('minecraft:fletching_table');
    r('minecraft:campfire');
    r('minecraft:iron_trapdoor');
    r('minecraft:copper_block');
    r('minecraft:shroomlight');
    r('minecraft:sweet_berries');
    r('minecraft:bamboo_hanging_sign');
    r('minecraft:powered_rail');
    r('minecraft:tnt');
    r('minecraft:elytra');
    r('minecraft:totem_of_undying');
    r('minecraft:spawner');
    r('minecraft:frogspawn');
    event.remove(/minecraft:.*coral.*(?!block)/);
    event.remove(/minecraft:.*tuff.*/);
    event.remove(/minecraft:.*tuff.*/);
    event.remove(/minecraft:.*potion.*/);
    r('minecraft:ominous_bottle');
    r('minecraft:cobweb');
    r('minecraft:wind_charge');
    r('minecraft:breeze_rod');
    event.remove('minecraft:anvil');
    event.remove('minecraft:chipped_anvil');
    event.remove('minecraft:damaged_anvil');

    event.remove(/afc:.*leaves.*/);
    event.remove(/tfc:.*leaves.*/);

    // Hide the TFC ores, which just clutter JEI
    event.remove(/tfc:ore\/.*\/.*/);
    event.remove(/tfc_metallurgy:ore\/.*\/.*/);
    event.remove(/tfc:deposit\/.*/);

    // Hide the wild crops, which are unobtainable
    event.remove(/.*wild_crop.*/);

    // Hide the spawn eggs, only obtainable in creative
    event.remove(/.*spawn_egg.*/);

    function removeToolsAndArmor(metal) {
        r('tfc_metallurgy:metal/anvil/' + metal)
        r('tfc_metallurgy:metal/chain/' + metal)
        r('tfc_metallurgy:metal/lamp/' + metal)
        r('tfc_metallurgy:metal/trapdoor/' + metal)
        r('tfc_metallurgy:metal/tuyere/' + metal)
        r('tfc_metallurgy:metal/fish_hook/' + metal)
        r('tfc_metallurgy:metal/fishing_rod/' + metal)
        r('tfc_metallurgy:metal/pickaxe/' + metal)
        r('tfc_metallurgy:metal/pickaxe_head/' + metal)
        r('tfc_metallurgy:metal/propick/' + metal)
        r('tfc_metallurgy:metal/propick_head/' + metal)
        r('tfc_metallurgy:metal/axe/' + metal)
        r('tfc_metallurgy:metal/axe_head/' + metal)
        r('tfc_metallurgy:metal/shovel/' + metal)
        r('tfc_metallurgy:metal/shovel_head/' + metal)
        r('tfc_metallurgy:metal/hoe/' + metal)
        r('tfc_metallurgy:metal/hoe_head/' + metal)
        r('tfc_metallurgy:metal/chisel/' + metal)
        r('tfc_metallurgy:metal/chisel_head/' + metal)
        r('tfc_metallurgy:metal/hammer/' + metal)
        r('tfc_metallurgy:metal/hammer_head/' + metal)
        r('tfc_metallurgy:metal/saw/' + metal)
        r('tfc_metallurgy:metal/saw_blade/' + metal)
        r('tfc_metallurgy:metal/javelin/' + metal)
        r('tfc_metallurgy:metal/javelin_head/' + metal)
        r('tfc_metallurgy:metal/sword/' + metal)
        r('tfc_metallurgy:metal/sword_blade/' + metal)
        r('tfc_metallurgy:metal/mace/' + metal)
        r('tfc_metallurgy:metal/mace_head/' + metal)
        r('tfc_metallurgy:metal/knife/' + metal)
        r('tfc_metallurgy:metal/knife_blade/' + metal)
        r('tfc_metallurgy:metal/scythe/' + metal)
        r('tfc_metallurgy:metal/scythe_blade/' + metal)
        r('tfc_metallurgy:metal/shears/' + metal)
        r('tfc_metallurgy:metal/unfinished_helmet/' + metal)
        r('tfc_metallurgy:metal/helmet/' + metal)
        r('tfc_metallurgy:metal/unfinished_chestplate/' + metal)
        r('tfc_metallurgy:metal/chestplate/' + metal)
        r('tfc_metallurgy:metal/unfinished_greaves/' + metal)
        r('tfc_metallurgy:metal/greaves/' + metal)
        r('tfc_metallurgy:metal/unfinished_boots/' + metal)
        r('tfc_metallurgy:metal/boots/' + metal)
        r('tfc_metallurgy:metal/unfinished_lamp/' + metal)
        r('tfc_metallurgy:metal/shield/' + metal)
    }
});

RecipeViewerEvents.removeEntries('fluid', event => {
    event.remove(/.*signalum.*/);
    event.remove(/.*blutonium.*/);
    event.remove(/.*enderium.*/);
    event.remove(/.*lumium.*/);
    event.remove(/.*mithril.*/);
    event.remove(/.*pink_slime.*/);
    event.remove(/.*refined_glowstone.*/);
    event.remove(/.*refined_obsidian.*/);
    event.remove(/createvintageneoforged:sulfuric_acid/);
});
