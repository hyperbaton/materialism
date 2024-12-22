ServerEvents.recipes(event => {
    // TODO: Improve this
    event.recipes.create.crushing(
        'tfcthermaldeposits:mineral/powder/magnesite',
        '#tfc_metallurgy:ore/magnesite'
    )
})