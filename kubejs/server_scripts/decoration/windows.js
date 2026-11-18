// Windows
ServerEvents.recipes(event => {
  // Recipes with glass
  swapInputs(event, [
    ['create:crafting/kinetics/goggles', '#c:glass_blocks', 'tfc:lens']
  ])
  // Windows
  const woodPairs = [
      ['oak', 'tfc:wood/lumber/oak'],
      ['spruce', 'tfc:wood/lumber/spruce'],
      ['birch', 'tfc:wood/lumber/birch'],
      ['acacia', 'tfc:wood/lumber/acacia'],
      ['mangrove', 'tfc:wood/lumber/mangrove'],
      ['jungle', 'afc:wood/lumber/teak'],
      ['crimson', 'afc:wood/lumber/mahogany'],
      ['warped', 'afc:wood/lumber/hevea'],
      ['dark_oak', 'tfc:wood/lumber/hickory'],
      ['ornate_iron', 'tfc:metal/rod/wrought_iron']
  ];
  addWindowRecipes(event, 'create', woodPairs);
})
