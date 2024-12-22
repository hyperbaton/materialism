ServerEvents.recipes(event => {
    event.replaceInput(
        {id: /mcw_tfc_aio:fences.*_wired_fence/},
        'minecraft:iron_bars',
        'createaddition:barbed_wire'
    )
})