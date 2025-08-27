/*ServerEvents.loaded(event => {
    let itemList = [];

    // Iterate through all registered items
    Item.getList().forEach(item => {
        itemList.push(item.id);
        console.info(`Item number ${itemList.length}: ${item.id}`);
    });

    // Write to file
    let filePath = 'kubejs/exported_items.txt';
    JsonIO.write(filePath, itemList.join('\n'));

    console.info(`Exported ${itemList.length} items to ${filePath}`);
});*/
