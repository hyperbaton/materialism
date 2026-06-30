ServerEvents.recipes(event => {
    // Remove all recipes that output items with "signalum" in their ID
    event.remove({ output: /.*signalum.*/ });
    event.remove({ output: /.*blutonium.*/ });
    event.remove({ output: /.*enderium.*/ });
    event.remove({ output: /.*lumium.*/ });
    event.remove({ output: /.*mithril.*/ });
    event.remove({ output: /.*pink_slime.*/ });
    event.remove({ output: /.*refined_glowstone.*/ });
    event.remove({ output: /.*refined_obsidian.*/ });

    // Disable Vanilla recipes
    event.remove('minecraft:leather')
    event.remove('minecraft:beehive')
    event.remove({ output: /minecraft:.*oak.*/ });
    event.remove({ output: /minecraft:.*spruce.*/ });
    event.remove({ output: /minecraft:.*birch.*/ });
    event.remove({ output: /minecraft:.*jungle.*/ });
    event.remove({ output: /minecraft:.*acacia.*/ });
    event.remove({ output: /minecraft:.*mangrove.*/ });
    event.remove({ output: /minecraft:.*cherry.*/ });
    event.remove({ output: /minecraft:.*crimson.*/ });
    event.remove({ output: /minecraft:.*warped.*/ });
    event.remove({ output: /minecraft:.*candle.*/ });
    event.remove({ output: /minecraft:.*quartz.*/ });
    event.remove({ input: 'minecraft:quartz', id: /minecraft:.*/});
    event.remove({ output: /minecraft:.*granite.*/ });
    event.remove({ output: /minecraft:.*diorite.*/ });
    event.remove({ output: /minecraft:.*prismarine.*/ });
    event.remove({ output: /minecraft:.*deepslate.*/ });
    event.remove({ output: /minecraft:.*blackstone.*/ });
    event.remove({ output: /minecraft:.*smooth_stone.*/ });
    event.remove({ output: /minecraft:.*basalt.*/ });
    event.remove({ output: /minecraft:.*sand.*/ });
    event.remove({ output: /minecraft:.*concrete.*/ });
    event.remove({ output: 'minecraft:coal' });
    event.remove({ output: 'minecraft:coal_block' });
    event.remove({ output: /minecraft:.*end.*/ });
    event.remove({ input: 'minecraft:sugar_cane'});
    event.remove({ output: /minecraft:.*stone_brick.*/ });
    event.remove({ output: /minecraft:.*cobblestone.*/ });
    event.remove({ output: /minecraft:.*purpur.*/ });
    event.remove({ input: 'minecraft:ancient_debris'});
    event.remove({ output: 'minecraft:chain'});
    event.remove({ output: /minecraft:.*cook.*/ });
    event.remove({ output: /minecraft:.*chorus.*/ });
    event.remove({ input: /minecraft:.*chorus.*/ });
    event.remove({ output: 'minecraft:recovery_compass'});
    event.remove({ output: /minecraft:.*diamond.*/ });
    event.remove({ output: 'minecraft:soul_torch'});
    event.remove({ input: /minecraft:.*azalea.*/ });
    event.remove({ output: 'minecraft:iron_bars'});
    event.remove({ output: 'minecraft:iron_block'});
    event.remove({ output: 'minecraft:iron_ingot'});
    event.remove({ output: 'minecraft:iron_nugget'});
    event.remove({ input: 'minecraft:iron_horse_armor'});
    event.remove({ input: /minecraft:.*apple.*/ });
    event.remove({ output: /minecraft:.*apple.*/ });
    event.remove({ input: /minecraft:.*carrot.*/ });
    event.remove({ output: /minecraft:.*carrot.*/ });
    event.remove({ input: /minecraft:.*potato.*/ });
    event.remove({ output: /minecraft:.*potato.*/ });
    event.remove({ input: /minecraft:.*beet.*/ });
    event.remove({ input: /minecraft:.*melon.*/ });
    event.remove({ output: 'minecraft:conduit'});
    event.remove({ output: 'minecraft:lodestone'});
    event.remove({ input: /minecraft:.*dirt.*/ });
    event.remove({ output: /minecraft:.*dirt.*/ });
    event.remove({ output: 'minecraft:calcite'});
    event.remove({ input: 'minecraft:calcite'});
    event.remove({ output: /minecraft:.*shulker.*/ });
    event.remove({ output: 'minecraft:redstone_lamp'});
    event.remove({ output: /minecraft:.*furnace.*/ });
    event.remove({ input: /minecraft:.*emerald.*/ });
    event.remove({ output: /minecraft:.*emerald.*/ });
    event.remove({ input: /minecraft:.*glowstone.*/ });
    event.remove({ output: /minecraft:.*glowstone.*/ });
    event.remove({ input: 'minecraft:glow_berries'});
    event.remove({ output: 'minecraft:bread'});
    event.remove({ output: /minecraft:(?!red).*stone*/ });
    event.remove({ output: /minecraft:.*seed.*/ });
    event.remove({ input: 'minecraft:pink_petals'});
    event.remove({ output: 'minecraft:shears'});
    event.remove({ output: 'minecraft:gold_ingot'});
    event.remove({ output: 'minecraft:gold_nugget'});
    event.remove({ output: 'minecraft:copper_ingot'});
    event.remove({ output: /minecraft:.*obsidian.*/ });
    event.remove({ output: 'minecraft:blaze_powder'});
    event.remove({ output: /minecraft:.*mud.*/ });
    // TODO: tfmg:steel_armor no longer exists in TFMG 1.21
    //event.remove({ output: 'tfmg:steel_helmet'});
    //event.remove({ output: 'tfmg:steel_chestplate'});
    //event.remove({ output: 'tfmg:steel_leggings'});
    //event.remove({ output: 'tfmg:steel_boots'});
    event.remove({ output: 'tfmg:nickel_ingot'});
    event.remove({ output: 'minecraft:bamboo_hanging_sign'});
    event.remove({ output: 'minecraft:tnt'});
    event.remove({output: 'minecraft:anvil'});
    event.remove({output: 'minecraft:chipped_anvil'});
    event.remove({output: 'minecraft:damaged_anvil'});

    // Disable Weather 2 recipes
    event.remove(/.*weather2.*/)

    // Disable boat recipes (there are aleki ships)
    event.remove(/.*boat.*/)

    // Disable Create recipes
    event.remove({ output: 'create:andesite_alloy'});
    event.remove({ output: 'create:zinc_ingot'});
    event.remove({ output: 'create:brass_ingot'});
    event.remove({ output: 'create:dough'});
    event.remove({ input: 'create:dough'});
    event.remove({ output: 'create:raw_zinc'});
    event.remove({ output: 'create:raw_zinc_block'});
    event.remove({ output: /create:.*blaze.*/ });
    event.remove({ output: 'create:cinder_flour'});

    // TODO: butcher mod items no longer exist
    //event.remove({ output: 'butcher:sulfur'});
    //event.remove({ input: 'butcher:sulfur'});
    //event.remove({ input: 'butcher:salt'});
});
