ServerEvents.tags('item', event => {
      
    // Completely replace the tag with only tfc:sandpaper
    event.removeAll('create:sandpaper');         // Removes everything else
    event.add('create:sandpaper', 'tfc:sandpaper'); // Adds tfc:sandpaper to the tag
    // Access the tag content and log it
    const tagContent = event.get('create:sandpaper').getObjectIds();
    console.info('Contents of the create:sandpaper tag:' + tagContent);

    // It seems it's not possible to add a tag to another
    // event.add('vintageimprovements:custom_hammering_blocks', '#tfc:blocks/anvils')
    event.add('vintageimprovements:custom_hammering_blocks', 'tfc:metal/anvil/steel')
    console.info('Contents of the vintageimprovements:custom_hammering_blocks tag:' + event.get('vintageimprovements:custom_hammering_blocks').getObjectIds());


    // Remove after TFC Metallurgy is fixed
    event.add('forge:ores/magnesium', 'tfc_metallurgy:ore/normal_spodumene/granite')
    event.add('forge:ores/magnesium', 'tfc_metallurgy:ore/poor_spodumene/granite')
    event.add('forge:ores/magnesium', 'tfc_metallurgy:ore/rich_spodumene/granite')
    event.add('forge:ores/magnesium', 'tfc_metallurgy:ore/normal_spodumene/diorite')
    event.add('forge:ores/magnesium', 'tfc_metallurgy:ore/poor_spodumene/diorite')
    event.add('forge:ores/magnesium', 'tfc_metallurgy:ore/rich_spodumene/diorite')
    event.add('forge:ores/magnesium', 'tfc_metallurgy:ore/normal_spodumene/gabbro')
    event.add('forge:ores/magnesium', 'tfc_metallurgy:ore/poor_spodumene/gabbro')
    event.add('forge:ores/magnesium', 'tfc_metallurgy:ore/rich_spodumene/gabbro')
    event.add('forge:ores/magnesium', 'tfc_metallurgy:ore/normal_spodumene/shale')
    event.add('forge:ores/magnesium', 'tfc_metallurgy:ore/poor_spodumene/shale')
    event.add('forge:ores/magnesium', 'tfc_metallurgy:ore/rich_spodumene/shale')
    event.add('forge:ores/magnesium', 'tfc_metallurgy:ore/normal_spodumene/claystone')
    event.add('forge:ores/magnesium', 'tfc_metallurgy:ore/poor_spodumene/claystone')
    event.add('forge:ores/magnesium', 'tfc_metallurgy:ore/rich_spodumene/claystone')
    event.add('forge:ores/magnesium', 'tfc_metallurgy:ore/normal_spodumene/limestone')
    event.add('forge:ores/magnesium', 'tfc_metallurgy:ore/poor_spodumene/limestone')
    event.add('forge:ores/magnesium', 'tfc_metallurgy:ore/rich_spodumene/limestone')
    event.add('forge:ores/magnesium', 'tfc_metallurgy:ore/normal_spodumene/conglomerate')
    event.add('forge:ores/magnesium', 'tfc_metallurgy:ore/poor_spodumene/conglomerate')
    event.add('forge:ores/magnesium', 'tfc_metallurgy:ore/rich_spodumene/conglomerate')
    event.add('forge:ores/magnesium', 'tfc_metallurgy:ore/normal_spodumene/dolomite')
    event.add('forge:ores/magnesium', 'tfc_metallurgy:ore/poor_spodumene/dolomite')
    event.add('forge:ores/magnesium', 'tfc_metallurgy:ore/rich_spodumene/dolomite')
    event.add('forge:ores/magnesium', 'tfc_metallurgy:ore/normal_spodumene/chert')
    event.add('forge:ores/magnesium', 'tfc_metallurgy:ore/poor_spodumene/chert')
    event.add('forge:ores/magnesium', 'tfc_metallurgy:ore/rich_spodumene/chert')
    event.add('forge:ores/magnesium', 'tfc_metallurgy:ore/normal_spodumene/chalk')
    event.add('forge:ores/magnesium', 'tfc_metallurgy:ore/poor_spodumene/chalk')
    event.add('forge:ores/magnesium', 'tfc_metallurgy:ore/rich_spodumene/chalk')
    event.add('forge:ores/magnesium', 'tfc_metallurgy:ore/normal_spodumene/rhyolite')
    event.add('forge:ores/magnesium', 'tfc_metallurgy:ore/poor_spodumene/rhyolite')
    event.add('forge:ores/magnesium', 'tfc_metallurgy:ore/rich_spodumene/rhyolite')
    event.add('forge:ores/magnesium', 'tfc_metallurgy:ore/normal_spodumene/basalt')
    event.add('forge:ores/magnesium', 'tfc_metallurgy:ore/poor_spodumene/basalt')
    event.add('forge:ores/magnesium', 'tfc_metallurgy:ore/rich_spodumene/basalt')
    event.add('forge:ores/magnesium', 'tfc_metallurgy:ore/normal_spodumene/andesite')
    event.add('forge:ores/magnesium', 'tfc_metallurgy:ore/poor_spodumene/andesite')
    event.add('forge:ores/magnesium', 'tfc_metallurgy:ore/rich_spodumene/andesite')
    event.add('forge:ores/magnesium', 'tfc_metallurgy:ore/normal_spodumene/dacite')
    event.add('forge:ores/magnesium', 'tfc_metallurgy:ore/poor_spodumene/dacite')
    event.add('forge:ores/magnesium', 'tfc_metallurgy:ore/rich_spodumene/dacite')
    event.add('forge:ores/magnesium', 'tfc_metallurgy:ore/normal_spodumene/quartzite')
    event.add('forge:ores/magnesium', 'tfc_metallurgy:ore/poor_spodumene/quartzite')
    event.add('forge:ores/magnesium', 'tfc_metallurgy:ore/rich_spodumene/quartzite')
    event.add('forge:ores/magnesium', 'tfc_metallurgy:ore/normal_spodumene/slate')
    event.add('forge:ores/magnesium', 'tfc_metallurgy:ore/poor_spodumene/slate')
    event.add('forge:ores/magnesium', 'tfc_metallurgy:ore/rich_spodumene/slate')
    event.add('forge:ores/magnesium', 'tfc_metallurgy:ore/normal_spodumene/phyllite')
    event.add('forge:ores/magnesium', 'tfc_metallurgy:ore/poor_spodumene/phyllite')
    event.add('forge:ores/magnesium', 'tfc_metallurgy:ore/rich_spodumene/phyllite')
    event.add('forge:ores/magnesium', 'tfc_metallurgy:ore/normal_spodumene/schist')
    event.add('forge:ores/magnesium', 'tfc_metallurgy:ore/poor_spodumene/schist')
    event.add('forge:ores/magnesium', 'tfc_metallurgy:ore/rich_spodumene/schist')
    event.add('forge:ores/magnesium', 'tfc_metallurgy:ore/normal_spodumene/gneiss')
    event.add('forge:ores/magnesium', 'tfc_metallurgy:ore/poor_spodumene/gneiss')
    event.add('forge:ores/magnesium', 'tfc_metallurgy:ore/rich_spodumene/gneiss')
    event.add('forge:ores/magnesium', 'tfc_metallurgy:ore/normal_spodumene/marble')
    event.add('forge:ores/magnesium', 'tfc_metallurgy:ore/poor_spodumene/marble')
    event.add('forge:ores/magnesium', 'tfc_metallurgy:ore/rich_spodumene/marble')
  });