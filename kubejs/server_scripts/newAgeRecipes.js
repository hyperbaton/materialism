ServerEvents.recipes(event => {


    event.remove({id: 'create_new_age:shapeless/energiser_t1'})
    event.custom({
        type: 'create:item_application',
        ingredients: [
          { item: 'create:andesite_casing' },
          { item: 'minecraft:lightning_rod' },
        ],
        results: [
          { item: 'create_new_age:energiser_t1' },
        ],
      })
}
)