ServerEvents.recipes(event => {
    event.remove('computercraft:computer_normal')
    event.recipes.create.mechanical_crafting(
        Item.of('computercraft:computer_normal', 1), // arg 1: output
        [
          ' CHC ',
          'BEGEB', // arg 2: the shape (array of strings)
          'BAAAB',
          'BEFEB',
          ' CDC '
        ],
        {
          A: 'create_new_age:copper_circuit',
          B: 'tfc_metallurgy:metal/sheet/aluminum',
          C: 'tfmg:plastic_sheet',
          D: 'railways:smokestack_diesel',
          E: 'tfmg:cable_tube',
          // TODO: Find replacement for missing item
          //E: 'tfmg:electric_casing',
          F: 'tfmg:electrical_switch',
          G: 'create_optical:optical_source',
          H: 'firmalife:reinforced_glass'
        }
    )
    event.remove({output: 'computercraft:computer_advanced'})
    event.recipes.create.mechanical_crafting(
      Item.of('computercraft:computer_advanced', 1), // arg 1: output
      [
        ' CHHHC ',
        'BIEGEIB', // arg 2: the shape (array of strings)
        'BAAAAAB',
        'BIEFEIB',
        ' CDDDC ' 
      ],
      {
        A: 'create_new_age:copper_circuit',
        B: 'tfc_metallurgy:metal/sheet/aluminum',
        C: 'tfmg:plastic_sheet',
        D: 'railways:smokestack_diesel',
        E: 'tfmg:cable_tube',
        // TODO: Find replacement for missing item
        //E: 'tfmg:electric_casing',
        F: 'tfmg:electrical_switch',
        G: 'create_optical:optical_source',
        H: 'firmalife:reinforced_glass',
        I: 'createaddition:electrum_wire'
      }
    )
    event.recipes.create.mechanical_crafting(
      Item.of('computercraft:pocket_computer_normal', 1), // arg 1: output
      [
        ' A ',
        ' B ', // arg 2: the shape (array of strings)
        '   '
      ],
      {
        A: 'computercraft:computer_normal',
        B: 'tfmg:accumulator'
      }
    )
    event.remove('computercraft:pocket_computer_advanced_upgrade')
    event.recipes.create.mechanical_crafting(
      Item.of('computercraft:pocket_computer_advanced', 1), // arg 1: output
      [
        ' A ',
        ' B ', // arg 2: the shape (array of strings)
        '   '
      ],
      {
        A: 'computercraft:computer_advanced',
        B: 'tfmg:accumulator'
      }
    )
    event.remove('computercraft:turtle_normal')
    event.recipes.create.mechanical_crafting(
      Item.of('computercraft:turtle_normal', 1), // arg 1: output
      [
        'IJKJI',
        'IFADI', // arg 2: the shape (array of strings)
        'IBCBI',
        'EHLHE'
      ],
      {
        A: 'computercraft:computer_normal',
        B: 'tfmg:accumulator',
        C: 'create:item_vault',
        D: 'create:mechanical_arm',
        E: 'tfmg:steel_cogwheel',
        F: 'tfmg:steel_casing_cable_hub',
        H: 'vintageimprovements:constantan_spring',
        I: 'tfc_metallurgy:metal/sheet/titanium',
        J: 'minecraft:daylight_detector',
        K: 'create:content_observer',
        L: 'create_new_age:basic_motor'
      }
    )
    event.remove('computercraft:turtle_advanced')
    event.remove('computercraft:turtle_advanced_upgrade')
    event.recipes.create.mechanical_crafting(
      Item.of('computercraft:turtle_advanced', 1), // arg 1: output
      [
        'IJKJI',
        'IFADI', // arg 2: the shape (array of strings)
        'IBCBI',
        'EHLHE'
      ],
      {
        A: 'computercraft:computer_advanced',
        B: 'tfmg:accumulator',
        C: 'create:item_vault',
        D: 'create:mechanical_arm',
        E: 'tfmg:steel_cogwheel',
        F: 'tfmg:steel_casing_cable_hub',
        H: 'vintageimprovements:constantan_spring',
        I: 'tfc_metallurgy:metal/sheet/titanium',
        J: 'minecraft:daylight_detector',
        K: 'create:content_observer',
        L: 'create_new_age:advanced_motor'
      }
    )
    // TODO: This doesn't work. I must find a way of applying upgrades to turtles
    event.replaceInput(
      { id: 'computercraft:turtle_upgrade' }, // Arg 1: the filter
      'minecraft:diamond_shovel',            // Arg 2: the item to replace
      'tfc_metallurgy:metal/shovel/tungsten_steel'         // Arg 3: the item to replace it with
    )
    event.remove('computercraft:wired_modem')
    event.recipes.create.mechanical_crafting(
      Item.of('computercraft:wired_modem', 1),
      [
        'ACA',
        'CDC',
        'ABA'
      ],
      {
        A: 'tfmg:plastic_sheet',
        B: 'computercraft:cable',
        C: 'tfc_metallurgy:metal/sheet/aluminum',
        D: 'create_new_age:copper_circuit'
      }
    )
    event.remove('computercraft:wireless_modem_normal')
    event.recipes.create.mechanical_crafting(
    Item.of('computercraft:wireless_modem_normal', 1),
    [
      'AEA',
      'CFC',
      'CDC',
      'ABA'
    ],
    {
      A: 'tfmg:plastic_sheet',
      B: 'computercraft:cable',
      C: 'tfc_metallurgy:metal/sheet/aluminum',
      D: 'create_new_age:copper_circuit',
      E: 'create:electron_tube',
      F: 'minecraft:lightning_rod'
    }
  )
    event.remove('computercraft:wireless_modem_advanced')
    event.recipes.create.mechanical_crafting(
    Item.of('computercraft:wireless_modem_advanced', 1),
    [
      ' AEA ',
      'CGFGC',
      'CPDPC',
      ' ABA '
    ],
    {
      A: 'tfmg:plastic_sheet',
      B: 'computercraft:cable',
      C: 'tfc_metallurgy:metal/sheet/aluminum',
      D: 'create_new_age:copper_circuit',
      E: 'create:electron_tube',
      F: 'minecraft:lightning_rod',
      P: 'tfc_metallurgy:metal/double_sheet/platinum',
      G: 'tfmg:large_coil'
    }
  )
  event.remove('computercraft:cable')
  event.shapeless('6x computercraft:cable',[
    'tfmg:cable_tube',
    'tfmg:cable_tube'
  ])
  event.remove('computercraft:monitor_normal')
  event.recipes.create.mechanical_crafting(
    Item.of('computercraft:monitor_normal', 1),
    [
      'GGG',
      'ALA',
      'AOA',
      'PAP'
    ],
    {
      P: 'tfmg:plastic_sheet',
      G: 'firmalife:reinforced_glass',
      L: 'create:display_board',
      A: 'tfc_metallurgy:metal/sheet/aluminum',
      O: 'create_optical:optical_source'
    }
  )
  event.remove('computercraft:monitor_advanced')
  event.recipes.create.mechanical_crafting(
    Item.of('computercraft:monitor_advanced', 1),
    [
      ' GGG ',
      'ALLLA',
      'AEOEA',
      ' PAP '
    ],
    {
      P: 'tfmg:plastic_sheet',
      G: 'firmalife:reinforced_glass',
      L: 'tfmg:light_bulb',
      A: 'tfc_metallurgy:metal/sheet/aluminum',
      E: 'create:electron_tube',
      O: 'create_optical:optical_source'
    }
  )
  event.remove('computercraft:printer')
  event.recipes.create.mechanical_crafting(
      Item.of('computercraft:printer', 1),
      [
        ' PPP ',
        'ARCGA',
        'ABEKA',
        ' APA '
      ],
      {
        P: 'tfmg:plastic_sheet',
        C: 'create:mechanical_press',
        A: 'tfc_metallurgy:metal/sheet/aluminum',
        // TODO: Find replacement for missing item
        //E: 'tfmg:electric_casing',
        E: 'tfmg:electrical_switch',
        R: 'minecraft:red_dye',
        G: 'minecraft:green_dye',
        B: 'minecraft:blue_dye',
        K: 'minecraft:black_dye'
      }
    )
  event.remove('computercraft:disk_drive')
  event.recipes.create.mechanical_crafting(
      Item.of('computercraft:disk_drive', 1),
      [
        ' PPP ',
        'ADCDA',
        ' AEA ',
        ' APA '
      ],
      {
        P: 'tfmg:plastic_sheet',
        C: 'create:turntable',
        D: 'create:precision_mechanism',
        A: 'tfc_metallurgy:metal/sheet/aluminum',
        // TODO: Find replacement for missing item
        //E: 'tfmg:electric_casing',
        E: 'tfmg:electrical_switch',
      }
    )
  event.remove('computercraft:speaker')
  event.recipes.create.mechanical_crafting(
      Item.of('computercraft:speaker', 1),
      [
        ' PPP ',
        ' ACA ',
        'ACECA',
        ' APA '
      ],
      {
        P: 'tfmg:plastic_sheet',
        C: 'minecraft:note_block',
        A: 'tfc_metallurgy:metal/sheet/aluminum',
        // TODO: Find replacement for missing item
        //E: 'tfmg:electric_casing',
        E: 'tfmg:electrical_switch',
      }
    )

const dyeColors = [
  "white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray",
  "light_gray", "cyan", "purple", "blue", "brown", "green", "red", "black"
];

const dyeItems = color => `minecraft:${color}_dye`;
const colorIds = {
  white: 15790320, orange: 15905331, magenta: 15040472, light_blue: 10072818, yellow: 14605932, lime: 8375321, pink: 15905484, gray: 5000268,
  light_gray: 10066329, cyan: 5020082, purple: 11691749, blue: 3368652, brown: 8349260, green: 5744206, red: 13388876, black: 1118481
};

event.remove({ output: 'computercraft:disk' });

  dyeColors.forEach(color => {
    event.recipes.create.sequenced_assembly(
      Item.of(`computercraft:disk[dyed_color={rgb:${colorIds[color]},show_in_tooltip:false}]`),
      'tfmg:plastic_sheet',
      [
        event.recipes.create.deploying(`kubejs:plastic_sheet/${color}`, ['tfmg:plastic_sheet', dyeItems(color)]),
        event.recipes.create.pressing(`kubejs:plastic_sheet/${color}`, `kubejs:plastic_sheet/${color}`),
        event.recipes.create.deploying(`kubejs:plastic_sheet/${color}`, [`kubejs:plastic_sheet/${color}`, 'tfc:powder/magnetite']),
        event.recipes.create.pressing(`kubejs:plastic_sheet/${color}`, `kubejs:plastic_sheet/${color}`),
        //event.recipes.tfmg.polarizing(`kubejs:plastic_sheet/${color}`, `kubejs:plastic_sheet/${color}`, 500),
        event.recipes.create.deploying(`kubejs:plastic_sheet/${color}`, [`kubejs:plastic_sheet/${color}`, 'minecraft:paper'])
      ]
    ).transitionalItem(`kubejs:plastic_sheet/${color}`).loops(1);
  });
})