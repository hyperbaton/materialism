// The world's ore veins: the pack's own (materialism-core) plus TFC's dikes, gem veins and geodes; every other mod vein is dropped
ServerEvents.tags('worldgen/placed_feature', event => {
  event.removeAll('tfc:in_biome/veins')
  event.add('tfc:in_biome/veins', ['tfc:vein/granite_dike', 'tfc:vein/diorite_dike', 'tfc:vein/gabbro_dike', 'tfc:vein/diamond', 'tfc:vein/emerald',
    'tfc:vein/deep_ruby', 'tfc:geode'])
  event.add('tfc:in_biome/veins', [
    'surface_native_copper', 'surface_malachite', 'surface_cassiterite', 'surface_bismuthinite', 'surface_tetrahedrite',
    'surface_sphalerite', 'surface_hematite', 'surface_limonite', 'surface_magnetite', 'surface_native_silver',
    'surface_graphite', 'deep_hematite', 'deep_magnetite', 'deep_limonite', 'deep_native_copper', 'deep_malachite',
    'deep_cassiterite', 'deep_tetrahedrite', 'deep_bismuthinite', 'deep_sphalerite', 'deep_native_gold', 'deep_native_silver',
    'deep_garnierite', 'deep_graphite', 'cinnabar', 'cryolite', 'lapis_lazuli', 'fake_native_gold', 'bituminous_coal', 'lignite',
    'halite', 'saltpeter', 'sylvite', 'borax', 'sulfur', 'gypsum', 'amethyst', 'opal', 'gravel', 'deep_bauxite',
    'deep_bertrandite', 'deep_native_platinum', 'deep_rutile', 'deep_stibnite', 'deep_wolframite', 'deep_uraninite',
    'deep_monazite', 'deep_magnesite', 'deep_pyrolusite', 'deep_spodumene', 'deep_zircon', 'deep_kernite', 'deep_galena',
    'deep_cobaltite', 'deep_native_osmium', 'certus_quartz', 'deep_chromite', 'oil_deposit', 'deep_coltan', 'deep_molybdenite',
    'fluorite', 'phosphorite'
  ].map(vein => 'materialism:vein/' + vein))
})
