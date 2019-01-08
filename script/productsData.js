const productsData = [
  {
    title: 'Musketeer Hat with Feather',
    description: 'One size fits most adult. Made of felt, includes feather',
    price: 2500,
    category: 'hats',
    color: 'black'
  },
  {
    title: 'Blue Feather',
    description: 'Beautiful, blue feather',
    price: 200,
    category: 'accessories'
  },
  {
    title: 'Musketeer Boots - Black',
    description:
      'The Musketeer Boots are a soft,stylish all-purpose period boot made from durable synthetic leather. These boots have an 11-inch fold-over cuff that can be worn up or down. The Musketeer Boots offer synthetic soles and a 1.5 inch heel. The Musketeer Boots would make a great addition your Medieval, Cavalier, or Pirate ensemble.',
    price: 8000,
    category: 'boots',
    size: 'S'
  },
  {
    title: 'Whetstone Cutlery Musketeer Rapier',
    description:
      '44 inches Rapier Sword. Steel wire with leather wrap handle, includes hard leather wrap scabbard. 44-Inch rapier sword. Steel wire handle. Leather wrapped handle. Includes hard leather wrap scabbard.',
    price: '5000',
    category: 'weapons'
  },
  {
    title: 'Christus Imperat Rapier',
    description:
      'The flamboyantly formed hilt is both beautiful and functional. Its forward plates are pierced and show a lavish birds among foliage design, while the bars of the guard are slender, both defending the hand and having an upward loop to catch an opponents blade. The heavy pommel allows for a more balanced feel for fighting.',
    price: 7500,
    category: 'weapons'
  },
  {
    title: 'Ancient Musketeer Sword',
    description:
      'Ancient art figures and swirled cut-outs embellish this cup hilt sword. This Italian made full size decorator sword features cast metal handle and an antique brass finish. The 0.75 inch wide mild steel blade has intricate engraved designs stamped into it.',
    price: 9000,
    category: 'weapons'
  },
  {
    title: 'Silver Musketeer Rapier',
    description:
      'The musket, though the prime weapon of the French Musketeers, was a cumbersome firearm, both to load and fire, so a good rapier was a necessary second weapon. The basket of this rapiers hilt is ambidextrous (can be used for left and right hand fighting) and a very effective mix of both the cup-hilt and swept-hilt styles. The grip is wood wrapped with twisted wire and the parts of the hilt are plated with gleaming nickel silver. The main gauche dagger is purchased separately.Due to the design and blade geometry of this rapier, it is recommended that owners do not attempt to sharpen the blade.',
    price: 10000,
    category: 'weapons'
  },
  {
    title: 'Musketeer Baldric',
    description:
      'Perhaps your belt is already full or perhaps your look will not support a belt. Either way makes carrying a sword difficult. At least it would if you did not add this Musketeer Baldric to your attire to keep your sword safe and secure at your side! Crafted entirely from fine leather, this baldric evokes the look of the same sword baldrics that swordsmen would have favored in old France and Spain, especially for those who served the crown. It is highly adjustable and can be made to fit almost any height, while providing a good way of supporting your sword at your hip. It can be worn on either side. If you are completing your ideal musketeer look, this Leather Musketeer Baldric is a must. If you just want a good way to secure your sword while adorning your look, this is also a perfect piece to wear.',
    price: 5500,
    category: 'accessories'
  },
  {
    title: 'Musketeer Tabard',
    description:
      'The Musketeer was a personal guard King Louis XIII of France & were known for the finest qualities in all men; Gallant, brave, chivalrous, and debonair. Our Musketeer Tabard is a red, 100 percent cotton velvet top, fully lined with a matching satin gold cross and fleur-de-lis of the Musketeers emblazoned on the front. With matching silver trim on edges, the tabard is a must have for any Musketeer costume.',
    price: 10000,
    category: 'clothing'
  },
  {
    title: 'Musketeer Larp Small Sword',
    description:
      'Elegantly curved quillons and a leather wrapping enhance the grip of the hilt. Golden floral patterns accent the guard. From the double-edge blade to its beautiful pommel, this historical fantasy rapier features stunning hand painted detail. Crafted from closed cell foam around a solid fiberglass core, this LARP sword is finished with a strong latex coating.The sword is approximately 33.5 Inches in overall length. This measurement will vary as each LARP sword is a handmade item.',
    price: 8500,
    category: 'weapons'
  },
  {
    title: 'The Three Musketters Letter Opener Set',
    description:
      'The Three Musketeers is a timeless classic, written by Alexandre Dumas and told time and again in story and cinema. And now, with The Three Musketeers Letter Opener Set, you can own the rapiers of these three legendary warriors, all in miniature. Athos, Porthos, and Aramis are three titular musketeers, and all three possess a bond of friendship that surpasses all other loyalties. This can be seen in their motto, All for one and one for all. The three rapiers featured in this collection are each masterfully designed and hand crafted, each one with a form unique and distinct from the others. One is a classic swept hilt rapier with silver detailing and a white handle. Another features a swept hilt design but instead has bronze detailing. The final has a more straightforward yet highly effective design with a rounded hand guard and a straight crossbar, again rendered in bronze. The trio comes complete with black base that accommodates all three swords and lets you remove and use them individually as practical letter openers.',
    price: 9000,
    category: 'accessories'
  },
  {
    title: 'Musketeer Shirt',
    description:
      'This simple yet stylish shirt is light, breathable, and soft, all thanks to it being made of lightweight batiste fabric. The shirt has a wide, flat collar decorated with lace. The shoulders of the shirt are also laden with lace decoration. The full-length sleeves are loose-fitted from shoulder to wrist, where they are gathered in a small band decorated with more lace. When worn properly, the Musketeer Shirt should be between waist and hip length. It is also only available in white, although it comes in sizes small, medium, large, and x-large.',
    price: 4500,
    category: 'clothing'
  },
  {
    title: 'Royal Musketeer Tabard',
    description:
      'Influenced by Alexandre Dumas The Man in the Iron Mask, this Royal Musketeer Tabard is made of rich black cotton velvet with a deep gold rayon lining. Embroidered crosses with fleur-de-lis are on both the chest and sleeves. An adjustable high collar completes this stunning look. The Royal Musketeer Tabard is one size fits most and is dry clean only. Take your Musketeer costume or historical reenactment look to the next level with this high quality tabard.',
    price: 7700,
    category: 'clothing'
  },
  {
    title: 'High Musketeer Boots',
    description:
      'They come in brown or black with a variety of sizes which up the ante the next time you are donning a historical get-up. The adjustable leather straps at the ankle of these boots make for a stylish accent and will have you feeling confident the next time you strut down the street. Our high quality leather boots fit up to the calf and are hand-made for a traditional look and feel. ',
    price: 7700,
    category: 'boots'
  },
  {
    title: 'Miniature Silver Three Muskateers Rapier',
    description:
      'The Miniature Silver Three Musketeers Rapier, by Marto, is a French-styled rapier, the type of which would have been wielded by any musketeer but is most famous for being wielded with skill by the famous Three Musketeers. The rapier is of typical make and style, with an elaborate cup-styled guard, with thin cross-bars and a rounded knuckle-guard, with simple, flowing designs that stretch across the hilts surface.',
    price: 5500,
    category: 'weapons'
  }
  // {
  //   title: '',
  //   description: '',
  //   price: ,
  //   category: ''
  // },
  // {
  //   title: '',
  //   description: '',
  //   price: ,
  //   category: ''
  // },
  // {
  //   title: '',
  //   description: '',
  //   price: ,
  //   category: ''
  // },
  // {
  //   title: '',
  //   description: '',
  //   price: ,
  //   category: ''
  // },
  // {
  //   title: '',
  //   description: '',
  //   price: ,
  //   category: ''
  // },
  // {
  //   title: '',
  //   description: '',
  //   price: ,
  //   category: ''
  // },
  // {
  //   title: '',
  //   description: '',
  //   price: ,
  //   category: ''
  // },
  // {
  //   title: '',
  //   description: '',
  //   price: ,
  //   category: ''
  // },
  // {
  //   title: '',
  //   description: '',
  //   price: ,
  //   category: ''
  // },
  // {
  //   title: '',
  //   description: '',
  //   price: ,
  //   category: ''
  // },
  // {
  //   title: '',
  //   description: '',
  //   price: ,
  //   category: ''
  // },
  // {
  //   title: '',
  //   description: '',
  //   price: ,
  //   category: ''
  // },
  // {
  //   title: '',
  //   description: '',
  //   price: ,
  //   category: ''
  // },
  // {
  //   title: '',
  //   description: '',
  //   price: ,
  //   category: ''
  // },
  // {
  //   title: '',
  //   description: '',
  //   price: ,
  //   category: ''
  // },
  // {
  //   title: '',
  //   description: '',
  //   price: ,
  //   category: ''
  // },
  // {
  //   title: '',
  //   description: '',
  //   price: ,
  //   category: ''
  // },
  // {
  //   title: '',
  //   description: '',
  //   price: ,
  //   category: ''
  // },
  // {
  //   title: '',
  //   description: '',
  //   price: ,
  //   category: ''
  // },
  // {
  //   title: '',
  //   description: '',
  //   price: ,
  //   category: ''
  // },
  // {
  //   title: '',
  //   description: '',
  //   price: ,
  //   category: ''
  // },
  // {
  //   title: '',
  //   description: '',
  //   price: ,
  //   category: ''
  // },
  // {
  //   title: '',
  //   description: '',
  //   price: ,
  //   category: ''
  // },
  // {
  //   title: '',
  //   description: '',
  //   price: ,
  //   category: ''
  // },
  // {
  //   title: '',
  //   description: '',
  //   price: ,
  //   category: ''
  // },
]

module.exports = productsData
