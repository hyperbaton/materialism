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
  });