ServerEvents.recipes(event => {
    // Substitute super glue recipe with TFC materials
    event.remove({id: 'cft:leader_staff'})
    event.shaped(
        Item.of('cft:leader_staff', 1), // arg 1: output
        [
          ' A ',
          ' B ', // arg 2: the shape (array of strings)
          'CBC'
        ],
        {
          A: 'tfc:metal/ingot/gold',
          B: 'tfc:metal/rod/silver',  //arg 3: the mapping object
          C: 'tfc:metal/ingot/gold'
        }
      )
    }
)