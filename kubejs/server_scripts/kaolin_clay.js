ServerEvents.recipes(event => {
    //event.remove({mod: 'tfc', type: 'tfc:heating', ingredient: 'tfc:kaolin_clay', temperature: 500})
    //event.remove({mod: 'tfc', type: 'tfc:heating', output: 'tfc:powder/kaolinite', temperature: 500})
    event.remove({id: 'tfc:heating/kaolin_clay'})
    event.recipes.tfc.heating('tfc:kaolin_clay', 500)
        .resultItem('tfc:powder/kaolinite')
        .chance(0.4)
})