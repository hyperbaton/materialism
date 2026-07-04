// Steam 'n' Rails (railways) recipe adjustments

ServerEvents.recipes(event => {

    // Handcar: aluminium-rod frame instead of andesite alloy.
    event.replaceInput({ id: 'railways:crafting/handcar' }, 'create:andesite_alloy',  'tfc_metallurgy:metal/rod/aluminum')
})
