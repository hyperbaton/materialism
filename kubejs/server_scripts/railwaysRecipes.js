// Steam 'n' Rails (railways) recipe adjustments

ServerEvents.recipes(event => {

    // Handcar: aluminium-rod frame instead of andesite alloy.
    event.replaceInput({ id: 'railways:crafting/handcar' }, 'create:andesite_alloy',  'tfc_metallurgy:metal/rod/aluminum')

    // ============================================================
    // riveted_locometal — entry point for the whole locometal family
    // ============================================================
    // The base stonecut recipe used a vanilla iron block (unobtainable in TFC).
    // Give it a TFC wrought-iron block, and add a thematic riveted crafting recipe.
    event.remove({ id: 'railways:stonecutting/riveted_locometal' })
    event.shaped('8x railways:riveted_locometal', [
        'SRS',
        'RSR',
        'SRS'
    ], {
        S: 'tfc:metal/sheet/wrought_iron',
        R: 'tfc_items:wrought_iron_rivet'
    })

    // ============================================================
    // Tracks — fix recipes that used items unobtainable in this pack
    // ============================================================
    // Track coupler: #c:plates/iron only holds the hidden create:iron_sheet -> wrought-iron sheet
    event.replaceInput({ id: 'railways:crafting/track_coupler' }, '#c:plates/iron', 'tfc:metal/sheet/wrought_iron')

    // Monorail track: rebuilt because its deploying step used the hidden create:iron_sheet.
    // (nested create sequenced-assembly steps aren't reliably reached by replaceInput)
    event.remove({ id: 'railways:sequenced_assembly/track_monorail' })
    event.recipes.create.sequenced_assembly(
        [Item.of('railways:track_monorail', 12)],
        'create:metal_girder',
        [
            event.recipes.createDeploying('railways:track_incomplete_monorail', ['railways:track_incomplete_monorail', 'create:metal_bracket']),
            event.recipes.createDeploying('railways:track_incomplete_monorail', ['railways:track_incomplete_monorail', 'tfc:metal/sheet/steel']),
            event.recipes.createPressing('railways:track_incomplete_monorail', 'railways:track_incomplete_monorail')
        ]
    ).transitionalItem('railways:track_incomplete_monorail')

    // Tieless track (regular + narrow): steel rods instead of iron/zinc nuggets
    event.remove({ id: 'railways:sequenced_assembly/track_tieless' })
    event.recipes.create.sequenced_assembly(
        [Item.of('railways:track_tieless')],
        'minecraft:glass_pane',
        [
            event.recipes.createDeploying('railways:track_incomplete_tieless', ['railways:track_incomplete_tieless', 'tfc:metal/rod/steel']),
            event.recipes.createDeploying('railways:track_incomplete_tieless', ['railways:track_incomplete_tieless', 'tfc:metal/rod/steel']),
            event.recipes.createPressing('railways:track_incomplete_tieless', 'railways:track_incomplete_tieless')
        ]
    ).transitionalItem('railways:track_incomplete_tieless')

    event.remove({ id: 'railways:sequenced_assembly/track_tieless_narrow' })
    event.recipes.create.sequenced_assembly(
        [Item.of('railways:track_tieless_narrow')],
        'minecraft:glass_pane',
        [
            event.recipes.create.cutting('railways:track_incomplete_tieless_narrow', 'railways:track_incomplete_tieless_narrow'),
            event.recipes.createDeploying('railways:track_incomplete_tieless_narrow', ['railways:track_incomplete_tieless_narrow', 'tfc:metal/rod/steel']),
            event.recipes.createPressing('railways:track_incomplete_tieless_narrow', 'railways:track_incomplete_tieless_narrow')
        ]
    ).transitionalItem('railways:track_incomplete_tieless_narrow')

    // Andesite gauge tracks: TFC smooth stone slabs for the ties, steel rods for spikes
    // Wide: deploys sleepers (vanilla smooth stone) -> TFC smooth stone slabs
    event.remove({ id: 'railways:sequenced_assembly/track_create_andesite_wide' })
    event.recipes.create.sequenced_assembly(
        [Item.of('railways:track_create_andesite_wide')],
        'create:track',
        [
            event.recipes.create.cutting('railways:track_incomplete_create_andesite_wide', 'railways:track_incomplete_create_andesite_wide'),
            event.recipes.createDeploying('railways:track_incomplete_create_andesite_wide', ['railways:track_incomplete_create_andesite_wide', Ingredient.of('#c:stones/smooth_slabs')]),
            event.recipes.createPressing('railways:track_incomplete_create_andesite_wide', 'railways:track_incomplete_create_andesite_wide')
        ]
    ).transitionalItem('railways:track_incomplete_create_andesite_wide')

    // Narrow: base slabs (sleepers) -> TFC smooth stone slabs, spike nuggets -> steel rods
    event.remove({ id: 'railways:sequenced_assembly/track_create_andesite_narrow' })
    event.recipes.create.sequenced_assembly(
        [Item.of('railways:track_create_andesite_narrow')],
        '#c:stones/smooth_slabs',
        [
            event.recipes.create.cutting('railways:track_incomplete_create_andesite_narrow', 'railways:track_incomplete_create_andesite_narrow'),
            event.recipes.createDeploying('railways:track_incomplete_create_andesite_narrow', ['railways:track_incomplete_create_andesite_narrow', 'tfc:metal/rod/steel']),
            event.recipes.createPressing('railways:track_incomplete_create_andesite_narrow', 'railways:track_incomplete_create_andesite_narrow')
        ]
    ).transitionalItem('railways:track_incomplete_create_andesite_narrow')
})
