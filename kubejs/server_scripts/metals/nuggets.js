// Metal nuggets: solid 10 mB chunks cut from an ingot (dusts are pulverized metal, 5 mB, and live with extraction)
// The mods' 9-nugget compacting and uncrafting are removed: TFC ingots are 100 mB.

ServerEvents.recipes(event => {
  // Create
  event.remove({ id: 'create:crafting/materials/copper_nugget' })
  event.remove({ id: 'create:crafting/materials/copper_ingot' })
  addNuggets(event, 'create:copper_nugget', 'tfc:metal/ingot/copper', 'tfc:metal/copper', 1080)
  event.remove({ output: 'create:brass_nugget' })
  event.remove({ id: 'create:crafting/materials/brass_ingot_from_compacting' })
  addNuggets(event, 'create:brass_nugget', 'tfc:metal/ingot/brass', 'tfc:metal/brass', 930)
  event.remove({ id: 'create:crafting/materials/zinc_nugget_from_decompacting' })
  event.remove({ id: 'create:crafting/materials/zinc_ingot_from_compacting' })
  addNuggets(event, 'create:zinc_nugget', 'tfc:metal/ingot/zinc', 'tfc:metal/zinc', 420)

  // TFMG: its own ingots are removed, so its nuggets come from TFC and TFC Metallurgy ingots (Big Cannons' cast iron nugget is hidden)
  ;[
    ['aluminum', 'tfc_metallurgy:metal/ingot/aluminum', 'tfc_metallurgy:metal/aluminum', 660],
    ['lead', 'tfc_metallurgy:metal/ingot/lead', 'tfc_metallurgy:metal/lead', 328],
    ['lithium', 'tfc_metallurgy:metal/ingot/lithium', 'tfc_metallurgy:metal/lithium', 328],
    ['nickel', 'tfc:metal/ingot/nickel', 'tfc:metal/nickel', 1453],
    ['steel', 'tfc:metal/ingot/steel', 'tfc:metal/steel', 1535],
    ['cast_iron', 'tfc:metal/ingot/cast_iron', 'tfc:metal/cast_iron', 1535]
  ].forEach(([metal, ingot, fluid, temperature]) => {
    event.remove({ id: `tfmg:crafting/materials/${metal}_ingot_from_compacting` })
    event.remove({ id: `tfmg:crafting/materials/${metal}_nugget_from_decompacting` })
    addNuggets(event, `tfmg:${metal}_nugget`, ingot, fluid, temperature)
  })

  // Vanadium: the only vanadium ingots are TFC Metallurgy's, since the metal has no ore
  event.remove({ id: 'vintageimprovements:craft/vanadium_ingot_to_nuggets' })
  event.remove({ id: 'vintageimprovements:craft/vanadium_nuggets_to_ingot' })
  addNuggets(event, 'vintageimprovements:vanadium_nugget', 'tfc_metallurgy:metal/ingot/vanadium', 'tfc_metallurgy:metal/vanadium', 625)

  // Wrought iron and gold use the vanilla nuggets, silver, chromium and tin Chemica's. TFC Items melts gold, silver, chromium
  // and tin nuggets by tag; wrought iron melts into cast iron, as TFC's own wrought iron does.
  event.remove({ output: 'minecraft:iron_nugget' })
  addNuggets(event, 'minecraft:iron_nugget', 'tfc:metal/ingot/wrought_iron', 'tfc:metal/cast_iron', 1535)
  ;[
    ['minecraft:gold_nugget', 'tfc:metal/ingot/gold'],
    ['chemica:silver_nugget', 'tfc:metal/ingot/silver'],
    ['chemica:chromium_nugget', 'firmalife:metal/ingot/chromium'],
    ['chemica:tin_nugget', 'tfc:metal/ingot/tin']
  ].forEach(([nugget, ingot]) => {
    event.remove({ output: nugget })
    addNuggets(event, nugget, ingot)
  })

  // TFC Metallurgy metals use Chemica's nuggets, melting at the ingot's temperature (vanadium has Vintage Improvements' nugget; graphite doesn't melt)
  ;[['antimony', 630], ['cobalt', 1500], ['iridium', 1535], ['magnesium', 650], ['molybdenum', 1540], ['platinum', 1730], ['tantalum', 1540],
    ['titanium', 1535], ['tungsten', 3400]].forEach(([metal, temperature]) => {
    event.remove({ output: `chemica:${metal}_nugget` })
    addNuggets(event, `chemica:${metal}_nugget`, `tfc_metallurgy:metal/ingot/${metal}`, `tfc_metallurgy:metal/${metal}`, temperature)
  })
})
