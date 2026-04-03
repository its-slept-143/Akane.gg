import { Card } from '../types';

/* ======================
   RARITY CHANCES (OUT OF 100)
====================== */
export const RARITY_CHANCES = {
  godly: 0.001667,     // 1 in 60,000
  ultimate: 0.003333,  // 1 in 30,000
  celestial: 0.006667, // 1 in 15,000
  legendary: 0.033333, // 1 in 3,000
  epic: 14,
  rare: 85.955        // adjusted remainder
};
/* ======================
   RARITY EMOJIS
====================== */
export const RARITY_EMOJIS = {
  godly: "<:Godly:1481000421693849742>",
  ultimate: "<:Ultimate:1481006311436058766>",
  celestial: "<:Celestial:1481012572663709878>",
  legendary: "<:Legendary:1481060835865657435>",
  epic: "<:Epic:1481060765074067566>",
  rare: "<:Rare:1481060681930379366>"
};

/* ======================
   PITY VALUES
====================== */
export const PITY = {
  godly:     10000,
  ultimate:  5000,
  celestial:  2500,
  legendary:   250
};

export const TYPE_EMOJI = {
  "Exclusive": "<:Exclusive:1467424294836637778>",
  "Permanent Duo": "<:Permanent_Duo:1467838098909167650>",
  "Valentine": "<:Valentine:1467838202034258100>"
};

/* ======================
   CARD POOL
====================== */
export const ALL_CARDS: Card[] = [
{
  id: "1",
  name: "Shadow #1",
  series: "Sonic The Hedgehog",
  rarity: "celestial",   // ✅ comma-separated string
  type: "Permanent",
  source: "Official Art|Made By ➺ ecstasy_not_found",
  imageUrl: "https://cdn.jsdelivr.net/gh/its-slept/Err-idk-@main/Picsart_26-02-16_11-12-31-328_waifu2x_art_scan_noise3_scale.webp"
},
   {
  id: "2",
  name: "Satoru Gojo #1",
  series: "Jujutsu Kaisen",
  rarity: "celestial",
  type: "Permanent",
  source: "Official Art|Made By ➺ its_slept",
  imageUrl: "https://cdn.jsdelivr.net/gh/its-slept/Err-idk-@main/3D/Card-1.webp"
   },{
  id: "3",
  name: "Inori Yuzuriha #1",
  series: "Guilty Crown",
  rarity: "celestial",
  type: "Permanent",
  source: "Official Art|Made By ➺ its_slept",
  imageUrl: "https://cdn.jsdelivr.net/gh/its-slept/Err-idk-@main/3D/inori1.webp"
   },
   {
  id: "4",
  name: "Tsunade Senju #1",
  series: "Naruto & Boruto Series",
  rarity: "ultimate",
  type: "Permanent",
  source: "Official Art|Made By ➺ its_slept",
  imageUrl: "https://cdn.jsdelivr.net/gh/its-slept/Err-idk-@main/3D-2/tsunade1.webp"
   },{
  id: "5",
  name: "Georgia #1",
  series: "Azur Lane",
  rarity: "ultimate",
  type: "Permanent",
  source: "Official Art|Made By ➺ its_slept",
  imageUrl: "https://cdn.jsdelivr.net/gh/its-slept/Err-idk-@main/3D-2/georgia1.webp"
   },{
  id: "6",
  name: "Uchiha Madara #1",
  series: "Naruto & Boruto Series",
  rarity: "ultimate",
  type: "Permanent",
  source: "Official Art|Made by ➺ its_slept",
  imageUrl: "https://cdn.jsdelivr.net/gh/its-slept/Err-idk-@main/3D-2/madara1.webp"
},
{
  id: "7",
  name: "Rengoku Kyojuro",
  series: "Demon Slayer",
  rarity: "celestial",
  type: "Permanent",
  source: "Official Art|Made By ➺its_slept",
  imageUrl: "https://cdn.jsdelivr.net/gh/its-slept/Err-idk-@main/3D/rengoku-1.webp"
},{
  id: "8",
  name: "Castorice #1",
  series: "Honkai Verse",
  rarity: "celestial",
  type: "Permanent",
  source: "Official Art|Made By ➺ ecstasy_not_found",
  imageUrl: "https://cdn.jsdelivr.net/gh/its-slept/Err-idk-@main/image-Photoroom_2-1%20(1).png"
},{
  id: "9",
  name: "Mitsuri Kanroji #1",
  series: "Demon Slayer",
  rarity: "celestial",
  type: "Permanent",
  source: "Official Art|Made By ➺ mollysdouble",
  imageUrl: "https://cdn.jsdelivr.net/gh/its-slept/Err-idk-@main/image-Photoroom-1%20(1).png"
},{
  id: "10",
  name: "Saber #1",
  series: "Fate/Stay Night",
  rarity: "celestial",
  type: "Permanent",
  source: "Official Art|Made By ➺ its_slept",
  imageUrl: "https://cdn.jsdelivr.net/gh/its-slept/Err-idk-@main/3D/saber1.webp"
},{
  id: "11",
  name: "Rias Gremory #1",
  series: "High School DxD",
  rarity: "celestial",
  type: "Permanent",
  source: "Official Art|Made By ➺ im_down_bad",
  imageUrl: "https://cdn.jsdelivr.net/gh/its-slept/Err-idk-@main/rias-3D.webp"
},
{
  id: "12",
  name: "Aqua #1",
  series: "KonoSuba: God's Blessing on This Wonderful World!",
  rarity: "celestial",
  type: "Permanent",
  source: "Official Art|Made By ➺ its_slept",
  imageUrl: "https://cdn.jsdelivr.net/gh/its-slept/Err-idk-@main/3D/Aqua-1.webp"
},
{
  id: "13",
  name: "Alisa Mikhailovna Kujou #1",
  series: "Alya Sometimes Hides Her Feelings In Russian",
  rarity: "celestial",
  type: "Valentine",
  source: "Official Art|Made By ➺ its_slept",
  imageUrl: "https://cdn.jsdelivr.net/gh/its-slept/Err-idk-@main/3D/alya1.webp"
},
{
  id: "14",
  name: "Gyutaro #1",
  series: "Demon Slayer",
  rarity: "celestial",
  type: "Permanent",
  source: "Official Art|Made By ➺ mollysdouble",
  imageUrl: "https://cdn.jsdelivr.net/gh/its-slept/Err-idk-@main/Picsart_26-01-24_15-49-41-977.jpg"
},
{
  id: "15",
  name: "Nami #1",
  series: "One Piece",
  rarity: "celestial",
  type: "Permanent",
  source: "Official Art|Made By ➺ its_slept",
  imageUrl: "https://cdn.jsdelivr.net/gh/its-slept/Err-idk-@main/3D/nami-3D.webp"
},{
  id: "16",
  name: "Vegito #1",
  series: "Dragon Ball Z",
  rarity: "celestial",
  type: "Permanent",
  source: "Official Art|Made By ➺ its_slept ",
  imageUrl: "https://cdn.jsdelivr.net/gh/its-slept/Err-idk-@main/3D/vegito-1.webp"
},{
  id: "17",
  name: "Mahiru Shiina #1",
  series: "The Angel Next Door Spoils Me Rotten",
  rarity: "ultimate",
  type: "Permanent",
  source: "Official Art|Made By ➺ its_slept",
  imageUrl: "https://cdn.jsdelivr.net/gh/its-slept/Err-idk-@main/3D/mahirushiina1.webp"
},{
  id: "18",
  name: "Sung Jin Woo #1",
  series: "Solo Leveling",
  rarity: "celestial",
  type: "Permanent",
  source: "Official Art|Made By ➺ its_slept",
  imageUrl: "https://cdn.jsdelivr.net/gh/its-slept/Err-idk-@main/Picsart_26-01-06_15-57-35-568.png"
},{
  id: "19",
  name: "Rio Futaba #1",
  series: "Rascal Does Not Dream Of Bunny Girl Senpai",
  rarity: "celestial",
  type: "Permanent",
  source: "Official Art|Made By ➺ its_slept",
  imageUrl: "https://cdn.jsdelivr.net/gh/its-slept/Err-idk-@main/Picsart_26-01-07_15-48-51-333.png"
},{
  id: "20",
  name: "Shorekeeper #1",
  series: "Wuthering Waves",
  rarity: "ultimate",
  type: "Permanent",
  source: "Official Art|Made By ➺ its_slept",
  imageUrl: "https://cdn.jsdelivr.net/gh/its-slept/Err-idk-@main/3D/shorekeeper-1.webp"
},{
  id: "21",
  name: "Kafka #1",
  series: "Honkai Verse",
  rarity: "celestial",
  type: "Permanent",
  source: "Official Art|Made By ➺ im_down_bad",
  imageUrl: "https://cdn.jsdelivr.net/gh/its-slept/Err-idk-@main/3D/kafka1.webp"
},{
  id: "22",
  name: "Columbina #1",
  series: "Genshin Impact",
  rarity: "ultimate",
  type: "Permanent",
  source: "Official Art|Made By ➺ Slept & Mid",
  imageUrl: "https://cdn.jsdelivr.net/gh/its-slept/Err-idk-@main/columbina-1.webp"
},{
  id: "23",
  name: "Iuno #1",
  series: "Wuthering Waves",
  rarity: "godly",
  type: "Permanent",
  source: "Official Art|Made By ➺ im_down_bad",
  imageUrl: "https://cdn.jsdelivr.net/gh/its-slept/Err-idk-@main/3D-2/iuno1.webp"
},
{
  id: "24",
  name: "Qiuyuan #1",
  series: "Wuthering Waves",
  rarity: "ultimate",
  type: "Permanent",
  source: "Official Art|Made By ➺ im_down_bad",
  imageUrl: "https://cdn.jsdelivr.net/gh/its-slept/Err-idk-@main/Untitled159_20260124171751%20(1).png"
},{
  "id": "25",
  "name": "Hanying #1",
  "series": "Punishing: Gray Raven",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Picsart_26-01-26_15-36-51-163.png"
},{
  "id": "26",
  "name": "Aventurine #1",
  "series": "Honkai Verse",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Picsart_26-01-26_16-42-34-145.png"
},{
  "id": "27",
  "name": "Aventurine #2",
  "series": "Honkai Verse",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Picsart_26-01-26_16-42-48-447.png"
},{
  "id": "28",
  "name": "Aventurine #3",
  "series": "Honkai Verse",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Picsart_26-01-26_16-43-43-988.png"
},{
  "id": "29",
  "name": "Acheron #1",
  "series": "Honkai Verse",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Picsart_26-01-26_17-05-15-928.png"
},{
  "id": "30",
  "name": "Acheron #2",
  "series": "Honkai Verse",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Picsart_26-01-26_17-06-23-052.png"
},{
  "id": "31",
  "name": "Acheron #3",
  "series": "Honkai Verse",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Picsart_26-01-26_17-07-41-166.png"
},{
  "id": "32",
  "name": "Acheron #4",
  "series": "Honkai Verse",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Picsart_26-01-26_17-12-22-569.png"
},{
  "id": "33",
  "name": "Cyrene #1",
  "series": "Honkai Verse",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Picsart_26-01-27_02-38-27-527.png"
},{
  "id": "34",
  "name": "Cyrene #2",
  "series": "Honkai Verse",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Picsart_26-01-27_02-40-04-502.png"
},{
  "id": "35",
  "name": "Cyrene #3",
  "series": "Honkai Verse",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Picsart_26-01-27_02-40-25-635.png"
},{
  "id": "36",
  "name": "Cyrene #4",
  "series": "Honkai Verse",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Picsart_26-01-27_02-41-54-354.png"
},{
  "id": "37",
  "name": "Cyrene #5",
  "series": "Honkai Verse",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Picsart_26-01-27_02-45-31-422.png"
},{
  "id": "38",
  "name": "Sunday #1",
  "series": "Honkai Verse",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Picsart_26-01-27_02-51-08-012.png"
},{
  "id": "39",
  "name": "Sunday #2",
  "series": "Honkai Verse",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Picsart_26-01-27_02-53-52-562.png"
},{
  "id": "40",
  "name": "Sunday #3",
  "series": "Honkai Verse",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Picsart_26-01-27_02-54-59-839.png"
},{
  "id": "41",
  "name": "Sunday #4",
  "series": "Honkai Verse",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Picsart_26-01-27_02-56-38-845.png"
},{
  "id": "42",
  "name": "Sunday #5",
  "series": "Honkai Verse",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Picsart_26-01-27_02-56-55-557.png"
},{
  "id": "43",
  "name": "Jade #1",
  "series": "Honkai Verse",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Picsart_26-01-27_04-20-41-231.png"
},
{
  "id": "44",
  "name": "Jade #2",
  "series": "Honkai Verse",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Picsart_26-01-27_04-21-47-888.png"
},
{
  "id": "45",
  "name": "Jade #3",
  "series": "Honkai Verse",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Picsart_26-01-27_04-24-29-271.png"
},
{
  "id": "46",
  "name": "Jade #4",
  "series": "Honkai Verse",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Picsart_26-01-27_04-24-52-112.png"
},
{
  "id": "47",
  "name": "Jade #5",
  "series": "Honkai Verse",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Picsart_26-01-27_04-25-11-446.png"
},{
  "id": "48",
  "name": "Robin #1",
  "series": "Honkai Verse",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base/Picsart_26-01-27_06-31-43-852.png"
},
{
  "id": "49",
  "name": "Robin #2",
  "series": "Honkai Verse",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base/Picsart_26-01-27_06-31-57-054.png"
},
{
  "id": "50",
  "name": "Robin #3",
  "series": "Honkai Verse",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base/Picsart_26-01-27_06-37-38-199.png"
},
{
  "id": "51",
  "name": "Robin #4",
  "series": "Honkai Verse",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base/Picsart_26-01-27_06-38-07-766.png"
},
{
  "id": "52",
  "name": "Robin #5",
  "series": "Honkai Verse",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base/Picsart_26-01-27_06-39-26-616.png"
},{
  "id": "53",
  "name": "Kafka #6",
  "series": "Honkai Verse",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base/Picsart_26-01-27_06-32-29-477.png"
},
{
  "id": "54",
  "name": "Kafka #2",
  "series": "Honkai Verse",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base/Picsart_26-01-27_06-32-44-148.png"
},
{
  "id": "55",
  "name": "Kafka #3",
  "series": "Honkai Verse",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base/Picsart_26-01-27_06-33-41-250.png"
},
{
  "id": "56",
  "name": "Kafka #4",
  "series": "Honkai Verse",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base/Picsart_26-01-27_06-33-59-860.png"
},
{
  "id": "57",
  "name": "Kafka #5",
  "series": "Honkai Verse",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base/Picsart_26-01-27_06-34-34-893.png"
},{
  "id": "58",
  "name": "Phainon #1",
  "series": "Honkai Verse",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base/Picsart_26-01-27_06-42-19-672.png"
},
{
  "id": "59",
  "name": "Phainon #2",
  "series": "Honkai Verse",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base/Picsart_26-01-27_06-42-35-075.png"
},
{
  "id": "60",
  "name": "Phainon #3",
  "series": "Honkai Verse",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base/Picsart_26-01-27_06-44-55-916.png"
},
{
  "id": "61",
  "name": "Phainon #4",
  "series": "Honkai Verse",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base/Picsart_26-01-27_07-08-03-806.png"
},
{
  "id": "62",
  "name": "Phainon #5",
  "series": "Honkai Verse",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base/Picsart_26-01-27_07-08-16-928.png"
},{
  "id": "63",
  "name": "Seele #1",
  "series": "Honkai Verse",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base/Picsart_26-01-27_06-51-04-187.png"
},
{
  "id": "64",
  "name": "Seele #2",
  "series": "Honkai Verse",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base/Picsart_26-01-27_06-51-23-007.png"
},
{
  "id": "65",
  "name": "Seele #3",
  "series": "Honkai Verse",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base/Picsart_26-01-27_07-06-15-949.png"
},{
  "id": "66",
  "name": "Castorice #5",
  "series": "Honkai Verse",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base/Picsart_26-01-27_09-10-54-195.png"
},
{
  "id": "67",
  "name": "Castorice #2",
  "series": "Honkai Verse",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base/Picsart_26-01-27_09-11-11-434.png"
},
{
  "id": "68",
  "name": "Castorice #3",
  "series": "Honkai Verse",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base/Picsart_26-01-27_09-11-29-537.png"
},
{
  "id": "69",
  "name": "Castorice #4",
  "series": "Honkai Verse",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base/Picsart_26-01-27_09-11-45-680.png"
},{
  "id": "70",
  "name": "Castorice x Polyxia #1",
  "series": "Honkai Verse",
  "rarity": "rare,epic,legendary",
  "type": "Permanent Duo",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base/Picsart_26-01-27_09-15-52-352.png"
},
  {
  "id": "71",
  "name": "Naruto Uzumaki #1",
  "series": "Naruto & Boruto Series",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base/Picsart_26-01-27_14-51-32-176.png"
},
{
  "id": "72",
  "name": "Naruto Uzumaki #2",
  "series": "Naruto & Boruto Series",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base/Picsart_26-01-27_14-51-48-904.png"
},
{
  "id": "73",
  "name": "Naruto Uzumaki #3",
  "series": "Naruto & Boruto Series",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base/Picsart_26-01-27_14-52-05-136.png"
},
{
  "id": "74",
  "name": "Naruto & Sasuke #1",
  "series": "Naruto & Boruto Series",
  "rarity": "rare,epic,legendary",
  "type": "Permanent Duo",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base/Picsart_26-01-27_14-52-58-015.png"
},{
  "id": "75",
  "name": "Blade #1",
  "series": "Honkai Verse",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base/Picsart_26-01-28_00-55-19-832.png"
},
{
  "id": "76",
  "name": "Blade #2",
  "series": "Honkai Verse",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base/Picsart_26-01-28_00-55-36-230.png"
},
{
  "id": "77",
  "name": "Blade #3",
  "series": "Honkai Verse",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base/Picsart_26-01-28_00-55-54-516.png"
},
{
  "id": "78",
  "name": "Blade #4",
  "series": "Honkai Verse",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base/Picsart_26-01-28_00-56-07-905.png"
},{
  "id": "79",
  "name": "Firefly #1",
  "series": "Honkai Verse",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base/Picsart_26-01-28_00-57-12-650.png"
},
{
  "id": "80",
  "name": "Firefly #2",
  "series": "Honkai Verse",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base/Picsart_26-01-28_00-57-28-868.png"
},
{
  "id": "81",
  "name": "Firefly #3",
  "series": "Honkai Verse",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base/Picsart_26-01-28_00-57-45-461.png"
},
{
  "id": "82",
  "name": "Firefly #4",
  "series": "Honkai Verse",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base/Picsart_26-01-28_00-58-07-021.png"
},
{
  "id": "83",
  "name": "Firefly #5",
  "series": "Honkai Verse",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base/Picsart_26-01-28_00-58-24-748.png"
},
{
  "id": "84",
  "name": "Firefly #6",
  "series": "Honkai Verse",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base/Picsart_26-01-28_00-58-40-001.png"
},{
  "id": "85",
  "name": "Mydei #1",
  "series": "Honkai Verse",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base/Picsart_26-01-28_01-00-29-568.png"
},
{
  "id": "86",
  "name": "Mydei #2",
  "series": "Honkai Verse",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base/Picsart_26-01-28_01-00-47-154.png"
},
{
  "id": "87",
  "name": "Mydei #3",
  "series": "Honkai Verse",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base/Picsart_26-01-28_01-01-03-678.png"
},{
  "id": "88",
  "name": "Furina #1",
  "series": "Genshin Impact",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base/Picsart_26-01-28_01-02-52-296.png"
},
{
  "id": "89",
  "name": "Furina #2",
  "series": "Genshin Impact",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base/Picsart_26-01-28_01-03-13-559.png"
},
{
  "id": "90",
  "name": "Furina #3",
  "series": "Genshin Impact",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base/Picsart_26-01-28_01-03-27-487.png"
},{
  "id": "91",
  "name": "Rangiku Matsumoto #1",
  "series": "Bleach Series",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base/Picsart_26-01-28_14-35-02-217.png"
},
{
  "id": "92",
  "name": "Rangiku Matsumoto #2",
  "series": "Bleach Series",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base/Picsart_26-01-28_14-35-18-546.png"
},
{
  "id": "93",
  "name": "Toushirou & Rangiku #1",
  "series": "Bleach Series",
  "rarity": "rare,epic,legendary",
  "type": "Permanent Duo",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base/Picsart_26-01-28_14-36-18-306.png"
},{
  "id": "94",
  "name": "Cinderella #1",
  "series": "Goddess of Victory: Nikke",
  "rarity": "ultimate",
  "type": "Permanent",
  "source": "Official Art|Made By ➺ im_down_bad",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Err-idk-@main/3D/Cinderella1.webp"
},
  {
  "id": "95",
  "name": "Akane #1",
  "series": "Akane Special",
  "rarity": "celestial",
  "type": "Exclusive",
  "source": "Official Art|Made By ➺ its_slept",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Err-idk-@main/3D/akane1-oc.webp"
},{
  "id": "96",
  "name": "Orihime Inoue #1",
  "series": "Bleach Series",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base/Picsart_26-01-28_01-06-52-962.png"
},
{
  "id": "97",
  "name": "Orihime Inoue #2",
  "series": "Bleach Series",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base/Picsart_26-01-28_01-07-08-109.png"
},
{
  "id": "98",
  "name": "Orihime Inoue #3",
  "series": "Bleach Series",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base/Picsart_26-01-28_01-07-23-441.png"
},{
  "id": "99",
  "name": "Ichigo Kurosaki #1",
  "series": "Bleach Series",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base/Picsart_26-01-28_01-09-59-767.png"
},
{
  "id": "100",
  "name": "Ichigo Kurosaki #2",
  "series": "Bleach Series",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base/Picsart_26-01-28_01-10-14-136.png"
},{
  "id": "101",
  "name": "Maria Mikhailova Kujou #5",
  "series": "Alya Sometimes Hides Her Feelings In Russian",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Part%202/Picsart_26-02-22_11-57-19-448.webp"
},
{
  "id": "102",
  "name": "Yoruichi Shihouin #1",
  "series": "Bleach Series",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base/Picsart_26-01-28_14-33-09-886.png"
},
{
  "id": "103",
  "name": "Yoruichi Shihouin #2",
  "series": "Bleach Series",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base/Picsart_26-01-28_14-33-24-313.png"
},{
  "id": "104",
  "name": "Saber (Kurohime) #1",
  "series": "Fate Series",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base/Picsart_26-01-28_14-50-06-132.png"
},
{
  "id": "105",
  "name": "Saber (Kurohime) #2",
  "series": "Fate Series",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base/Picsart_26-01-28_14-50-18-981.png"
},
{
  "id": "106",
  "name": "Saber (Kurohime) #3",
  "series": "Fate Series",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base/Picsart_26-01-28_14-50-33-957.png"
},{
  "id": "107",
  "name": "Rukia Kuchiki #1",
  "series": "Bleach Series",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base/Picsart_26-01-28_14-55-11-332.png"
},
{
  "id": "108",
  "name": "Rukia Kuchiki #2",
  "series": "Bleach Series",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base/Picsart_26-01-28_14-54-56-553.png"
},
{
  "id": "109",
  "name": "Rukia Kuchiki #3",
  "series": "Bleach Series",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base/Picsart_26-01-28_14-55-27-336.png"
},
{
  "id": "110",
  "name": "Rukia Kuchiki #4",
  "series": "Bleach Series",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base/Picsart_26-01-28_14-55-40-785.png"
},{
  "id": "111",
  "name": "Levi Ackerman #1",
  "series": "Attack on Titan",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base%20-%202/Picsart_26-01-31_01-03-57-442_1.png"
},
{
  "id": "112",
  "name": "Levi Ackerman #2",
  "series": "Attack on Titan",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base%20-%202/Picsart_26-01-31_08-37-36-624.png"
},
{
  "id": "113",
  "name": "Levi Ackerman #3",
  "series": "Attack on Titan",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base%20-%202/Picsart_26-01-31_01-03-37-807_1.png"
},{
  "id": "114",
  "name": "Eren Yeager #1",
  "series": "Attack on Titan",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base%20-%202/Picsart_26-01-31_01-12-26-235_1.png"
},
{
  "id": "115",
  "name": "Eren Yeager #2",
  "series": "Attack on Titan",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base%20-%202/Picsart_26-01-31_01-12-03-507_1.png"
},
{
  "id": "116",
  "name": "Eren Yeager #3",
  "series": "Attack on Titan",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base%20-%202/Picsart_26-01-31_01-11-33-508_1.png"
},{
  "id": "117",
  "name": "Alisa Mikhailovna Kujou #2",
  "series": "Alya Sometimes Hides Her Feelings In Russian",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base%20-%202/Picsart_26-01-31_03-19-21-071_1.png"
},
{
  "id": "118",
  "name": "Alisa Mikhailovna Kujou #3",
  "series": "Alya Sometimes Hides Her Feelings In Russian",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base%20-%202/Picsart_26-01-31_03-19-03-410_1.png"
},
{
  "id": "119",
  "name": "Alisa Mikhailovna Kujou #4",
  "series": "Alya Sometimes Hides Her Feelings In Russian",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base%20-%202/Picsart_26-01-31_03-18-44-284_1.png"
},
{
  "id": "120",
  "name": "Alisa Mikhailovna Kujou #5",
  "series": "Alya Sometimes Hides Her Feelings In Russian",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base%20-%202/Picsart_26-01-31_03-19-39-315_1.png"
},
{
  "id": "121",
  "name": "Alisa Mikhailovna Kujou #6",
  "series": "Alya Sometimes Hides Her Feelings In Russian",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base%20-%202/Picsart_26-01-31_03-19-56-433_1.png"
},{
  "id": "122",
  "name": "Maria Mikhailovna Kujou #1",
  "series": "Alya Sometimes Hides Her Feelings In Russian",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base%20-%202/Picsart_26-01-31_03-23-58-459_1.png"
},
{
  "id": "123",
  "name": "Maria Mikhailovna Kujou #2",
  "series": "Alya Sometimes Hides Her Feelings In Russian",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base%20-%202/Picsart_26-01-31_03-23-24-375_1.png"
},
{
  "id": "124",
  "name": "Maria Mikhailovna Kujou #3",
  "series": "Alya Sometimes Hides Her Feelings In Russian",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base%20-%202/Picsart_26-01-31_03-23-07-520_1.png"
},
{
  "id": "125",
  "name": "Maria Mikhailovna Kujou #4",
  "series": "Alya Sometimes Hides Her Feelings In Russian",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base%20-%202/Picsart_26-01-31_03-22-51-509_1.png"
},{
  "id": "126",
  "name": "Yuki Suou #1",
  "series": "Alya Sometimes Hides Her Feelings In Russian",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base%20-%202/Picsart_26-01-31_03-26-27-257_1.png"
},
{
  "id": "127",
  "name": "Yuki Suou #2",
  "series": "Alya Sometimes Hides Her Feelings In Russian",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base%20-%202/Picsart_26-01-31_03-26-08-706_1.png"
},
{
  "id": "128",
  "name": "Yuki Suou #3",
  "series": "Alya Sometimes Hides Her Feelings In Russian",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base%20-%202/Picsart_26-01-31_03-25-51-725_1.png"
},{
  "id": "129",
  "name": "Ai Hoshino #1",
  "series": "Oshi no Ko",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base%20-%202/Picsart_26-01-31_03-31-45-207_1.png"
},
{
  "id": "130",
  "name": "Ai Hoshino #2",
  "series": "Oshi no Ko",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base%20-%202/Picsart_26-01-31_03-32-35-927_1.png"
},
{
  "id": "131",
  "name": "Ai Hoshino #3",
  "series": "Oshi no Ko",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base%20-%202/Picsart_26-01-31_03-32-08-194_1.png"
},
{
  "id": "132",
  "name": "Ai Hoshino #4",
  "series": "Oshi no Ko",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base%20-%202/Picsart_26-01-31_03-33-19-140_1.png"
},
{
  "id": "133",
  "name": "Ai Hoshino #5",
  "series": "Oshi no Ko",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base%20-%202/Picsart_26-01-31_03-32-35-927_1.png"
},{
  "id": "134",
  "name": "Ruby Hoshino #1",
  "series": "Oshi no Ko",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base%20-%202/Picsart_26-01-31_03-36-50-234_1.png"
},
{
  "id": "135",
  "name": "Ruby Hoshino #2",
  "series": "Oshi no Ko",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base%20-%202/Picsart_26-01-31_03-36-33-137_1.png"
},
{
  "id": "136",
  "name": "Ruby Hoshino #3",
  "series": "Oshi no Ko",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base%20-%202/Picsart_26-01-31_03-36-16-278_1.png"
},
{
  "id": "137",
  "name": "Ruby Hoshino #4",
  "series": "Oshi no Ko",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base%20-%202/Picsart_26-01-31_03-37-56-370_1.png"
},
{
  "id": "138",
  "name": "Ruby Hoshino #5",
  "series": "Oshi no Ko",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base%20-%202/Picsart_26-01-31_03-37-40-332_1.png"
},
{
  "id": "139",
  "name": "Ruby Hoshino #6",
  "series": "Oshi no Ko",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base%20-%202/Picsart_26-01-31_03-37-17-925_1.png"
},{
  "id": "140",
  "name": "Aquamarine Hoshino #1",
  "series": "Oshi no Ko",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base%20-%202/Picsart_26-01-31_03-42-27-920_1.png"
},
{
  "id": "141",
  "name": "Aquamarine Hoshino #2",
  "series": "Oshi no Ko",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base%20-%202/Picsart_26-01-31_03-43-21-043_1.png"
},
{
  "id": "142",
  "name": "Aquamarine Hoshino #3",
  "series": "Oshi no Ko",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base%20-%202/Picsart_26-01-31_03-42-45-547_1.png"
},
{
  "id": "143",
  "name": "Aquamarine Hoshino #4",
  "series": "Oshi no Ko",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base%20-%202/Picsart_26-01-31_03-44-56-042_1.png"
},
{
  "id": "144",
  "name": "Aquamarine Hoshino #5",
  "series": "Oshi no Ko",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base%20-%202/Picsart_26-01-31_03-44-34-086_1.png"
},
{
  "id": "145",
  "name": "Aquamarine Hoshino #6",
  "series": "Oshi no Ko",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base%20-%202/Picsart_26-01-31_03-43-50-378_1.png"
},{
  "id": "146",
  "name": "Marin Kitagawa #1",
  "series": "My Dress-Up Darling",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base%20-%202/Picsart_26-01-31_03-51-05-429_1.png"
},
{
  "id": "147",
  "name": "Marin Kitagawa #2",
  "series": "My Dress-Up Darling",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base%20-%202/Picsart_26-01-31_03-50-04-709_1.png"
},
{
  "id": "148",
  "name": "Marin Kitagawa #3",
  "series": "My Dress-Up Darling",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base%20-%202/Picsart_26-01-31_03-49-47-713_1.png"
},
{
  "id": "149",
  "name": "Marin Kitagawa #4",
  "series": "My Dress-Up Darling",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base%20-%202/Picsart_26-01-31_03-49-31-433_1.png"
},{
  "id": "150",
  "name": "Maomao #1",
  "series": "The Apothecary Diaries",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base%20-%202/Picsart_26-01-31_03-56-46-582_1.png"
},
{
  "id": "151",
  "name": "Maomao #2",
  "series": "The Apothecary Diaries",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base%20-%202/Picsart_26-01-31_03-56-18-052_1.png"
},
{
  "id": "152",
  "name": "Maomao #3",
  "series": "The Apothecary Diaries",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base%20-%202/Picsart_26-01-31_03-55-49-978_1.png"
},
{
  "id": "153",
  "name": "Maomao #4",
  "series": "The Apothecary Diaries",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base%20-%202/Picsart_26-01-31_03-58-31-770_1.png"
},
{
  "id": "154",
  "name": "Maomao #5",
  "series": "The Apothecary Diaries",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base%20-%202/Picsart_26-01-31_03-58-01-227_1.png"
},
{
  "id": "155",
  "name": "Maomao #6",
  "series": "The Apothecary Diaries",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base%20-%202/Picsart_26-01-31_03-57-05-468_1.png"
},
{
  "id": "156",
  "name": "Saber #2",
  "series": "Fate Series",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base%20-%202/Picsart_26-01-31_04-33-00-283_1.png"
},
{
  "id": "157",
  "name": "Saber #3",
  "series": "Fate Series",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base%20-%202/Picsart_26-01-31_04-32-39-859_1.png"
},
{
  "id": "158",
  "name": "Saber #4",
  "series": "Fate Series",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base%20-%202/Picsart_26-01-31_04-32-25-816_2.png"
},
{
  "id": "159",
  "name": "Delta #1",
  "series": "The Eminence in Shadow",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base%20-%202/Picsart_26-01-31_04-42-06-213_1.png"
},
{
  "id": "160",
  "name": "Delta #2",
  "series": "The Eminence in Shadow",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base%20-%202/Picsart_26-01-31_04-41-42-095_1.png"
},
{
  "id": "161",
  "name": "Delta #3",
  "series": "The Eminence in Shadow",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base%20-%202/Picsart_26-01-31_04-41-26-839_1.png"
},
{
  "id": "162",
  "name": "Delta #4",
  "series": "The Eminence in Shadow",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base%20-%202/Picsart_26-01-31_04-42-25-949_1.png"
},{
  "id": "163",
  "name": "Alpha #1",
  "series": "The Eminence in Shadow",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base%20-%202/Picsart_26-01-31_04-45-29-783_1.png"
},
{
  "id": "164",
  "name": "Alpha #2",
  "series": "The Eminence in Shadow",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base%20-%202/Picsart_26-01-31_04-45-44-118_1.png"
},
{
  "id": "165",
  "name": "Alpha #3",
  "series": "The Eminence in Shadow",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base%20-%202/Picsart_26-01-31_04-46-00-118_1.png"
},
{
  "id": "166",
  "name": "Alpha #4",
  "series": "The Eminence in Shadow",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base%20-%202/Picsart_26-01-31_04-46-14-361_1.png"
},
{
  "id": "167",
  "name": "Alpha #5",
  "series": "The Eminence in Shadow",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base%20-%202/Picsart_26-01-31_04-47-04-868_1-1.png"
},
{
  "id": "168",
  "name": "Alpha #6",
  "series": "The Eminence in Shadow",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base%20-%202/Picsart_26-01-31_04-46-48-899_1.png"
},
{
  "id": "169",
  "name": "Alpha #7",
  "series": "The Eminence in Shadow",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base%20-%202/Picsart_26-01-31_04-46-30-376_1.png"
},{
  "id": "170",
  "name": "Aurora #1",
  "series": "The Eminence in Shadow",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base%20-%202/Picsart_26-01-31_04-50-39-019_1.png"
},
{
  "id": "171",
  "name": "Aurora #2",
  "series": "The Eminence in Shadow",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base%20-%202/Picsart_26-01-31_04-50-21-742_1.png"
},
{
  "id": "172",
  "name": "Aurora #3",
  "series": "The Eminence in Shadow",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base%20-%202/Picsart_26-01-31_04-50-07-982_1.png"
},
{
  "id": "173",
  "name": "Augusta #1",
  "series": "Wuthering Waves",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base%20-%202/Picsart_26-01-31_04-52-49-289_1.png"
},
{
  "id": "174",
  "name": "Augusta #2",
  "series": "Wuthering Waves",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base%20-%202/Picsart_26-01-31_04-53-30-942_1.png"
},
{
  "id": "175",
  "name": "Augusta #3",
  "series": "Wuthering Waves",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base%20-%202/Picsart_26-01-31_04-53-17-243_1.png"
},
{
  "id": "176",
  "name": "Mornye #1",
  "series": "Wuthering Waves",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base%20-%202/Picsart_26-01-31_04-56-44-408_1.png"
},
{
  "id": "177",
  "name": "Mornye #2",
  "series": "Wuthering Waves",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base%20-%202/Picsart_26-01-31_04-57-00-811_1.png"
},
{
  "id": "178",
  "name": "Mornye #3",
  "series": "Wuthering Waves",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base%20-%202/Picsart_26-01-31_04-57-15-568_1.png"
},
{
  "id": "179",
  "name": "Mornye #4",
  "series": "Wuthering Waves",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base%20-%202/Picsart_26-01-31_04-57-52-168_1.png"
},
{
  "id": "180",
  "name": "Mornye #5",
  "series": "Wuthering Waves",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base%20-%202/Picsart_26-01-31_04-58-11-740_1.png"
},
  {
  "id": "181",
  "name": "Galbrena #1",
  "series": "Wuthering Waves",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base%20-%202/Picsart_26-01-31_05-00-48-486_1.png"
},
{
  "id": "182",
  "name": "Galbrena #2",
  "series": "Wuthering Waves",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base%20-%202/Picsart_26-01-31_05-00-33-919_1.png"
},
{
  "id": "183",
  "name": "Galbrena #3",
  "series": "Wuthering Waves",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base%20-%202/Picsart_26-01-31_05-00-17-723_1.png"
},
{
  "id": "184",
  "name": "Galbrena #4",
  "series": "Wuthering Waves",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base%20-%202/Picsart_26-01-31_05-00-02-527_1.png"
},{
  "id": "185",
  "name": "Gojou & Marin #1",
  "series": "My Dress-Up Darling",
  "rarity": "rare,epic,legendary",
  "type": "Permanent Duo",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Permanent%20duo/Picsart_26-02-07_14-03-08-844.webp"
},
{
  "id": "186",
  "name": "Gojou & Marin #2",
  "series": "My Dress-Up Darling",
  "rarity": "rare,epic,legendary",
  "type": "Permanent Duo",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Permanent%20duo/Picsart_26-02-07_14-00-32-978.webp"
},
  {
  "id": "187",
  "name": "Maomao & Jinshi #1",
  "series": "The Apothecary Diaries",
  "rarity": "rare,epic,legendary",
  "type": "Permanent Duo",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Permanent%20duo/Picsart_26-02-07_14-07-30-015.webp"
},
{
  "id": "188",
  "name": "Maomao & Jinshi #2",
  "series": "The Apothecary Diaries",
  "rarity": "rare,epic,legendary",
  "type": "Permanent Duo",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Permanent%20duo/Picsart_26-02-07_14-06-25-202.webp"
},
{
  "id": "189",
  "name": "Maomao & Jinshi #3",
  "series": "The Apothecary Diaries",
  "rarity": "rare,epic,legendary",
  "type": "Permanent Duo",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Permanent%20duo/Picsart_26-02-07_14-05-32-519.webp"
},{
  "id": "190",
  "name": "Sakura & Saber #1",
  "series": "Fate Series",
  "rarity": "rare,epic,legendary",
  "type": "Permanent Duo",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Permanent%20duo/Picsart_26-02-08_00-48-13-193.webp"
},{
  "id": "191",
  "name": "Mornye & Rover #1",
  "series": "Wuthering Waves",
  "rarity": "rare,epic,legendary",
  "type": "Permanent Duo",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Permanent%20duo/Picsart_26-02-08_00-50-33-094.webp"
},
{
  "id": "192",
  "name": "Mornye & Cartethiya #1",
  "series": "Wuthering Waves",
  "rarity": "rare,epic,legendary",
  "type": "Permanent Duo",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Permanent%20duo/Picsart_26-02-08_00-53-46-821.webp"
},{
  "id": "193",
  "name": "Delta & Zeta #1",
  "series": "The Eminence in Shadow",
  "rarity": "rare,epic,legendary",
  "type": "Permanent Duo",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Permanent%20duo/Picsart_26-02-08_00-54-41-646.webp"
},{
  "id": "194",
  "name": "Miku & Miku #1",
  "series": "Vocaloid",
  "rarity": "rare,epic,legendary",
  "type": "Permanent Duo",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Permanent%20duo/Picsart_26-02-08_00-56-17-099.webp"
},{
  "id": "195",
  "name": "Tanjiro & Nezuko #1",
  "series": "Demon Slayer",
  "rarity": "rare,epic,legendary",
  "type": "Permanent Duo",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Permanent%20duo/Picsart_26-02-08_00-58-13-106.webp"
},
{
  "id": "196",
  "name": "Nezuko & Shinobu #1",
  "series": "Demon Slayer",
  "rarity": "rare,epic,legendary",
  "type": "Permanent Duo",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Permanent%20duo/Picsart_26-02-08_01-01-19-867.webp"
},
{
  "id": "197",
  "name": "Tengen & Rengoku #1",
  "series": "Demon Slayer",
  "rarity": "rare,epic,legendary",
  "type": "Permanent Duo",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Permanent%20duo/Picsart_26-02-08_01-02-39-858.webp"
},{
  "id": "198",
  "name": "Shio & Shirotae #1",
  "series": "It's a Secret, Shirotae-sama",
  "rarity": "rare,epic,legendary",
  "type": "Permanent Duo",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Permanent%20duo/Picsart_26-02-08_02-50-18-981.webp"
},{
  "id": "199",
  "name": "Aiona & Lamia #1",
  "series": "Silver and Blood",
  "rarity": "rare,epic,legendary",
  "type": "Permanent Duo",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Permanent%20duo/Picsart_26-02-08_03-12-40-966.webp"
},{
  "id": "200",
  "name": "Reze & Makima #1",
  "series": "Chainsaw Man",
  "rarity": "rare,epic,legendary",
  "type": "Permanent Duo",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Permanent%20duo/Picsart_26-02-08_03-13-52-893.webp"
},{
  "id": "201",
  "name": "Chisato & Takina #1",
  "series": "Lycoris Recoil",
  "rarity": "rare,epic,legendary",
  "type": "Permanent Duo",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Permanent%20duo/Picsart_26-02-08_03-17-15-549.webp"
},{
  "id": "202",
  "name": "Shen & Luo #1",
  "series": "The Scum Villain's Self-Saving System",
  "rarity": "rare,epic,legendary",
  "type": "Permanent Duo",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Permanent%20duo/Picsart_26-02-09_15-12-47-262.webp"
},
{
  "id": "203",
  "name": "Shen & Luo #2",
  "series": "The Scum Villain's Self-Saving System",
  "rarity": "rare,epic,legendary",
  "type": "Permanent Duo",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Permanent%20duo/Picsart_26-02-09_15-13-17-647.webp"
},{
  "id": "204",
  "name": "Lan & Wei #1",
  "series": "Grandmaster of Demonic Cultivation",
  "rarity": "rare,epic,legendary",
  "type": "Permanent Duo",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Permanent%20duo/Picsart_26-02-09_15-48-48-945.webp"
},
{
  "id": "205",
  "name": "Lan & Wei #2",
  "series": "Grandmaster of Demonic Cultivation",
  "rarity": "rare,epic,legendary",
  "type": "Permanent Duo",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Permanent%20duo/Picsart_26-02-09_15-27-40-155.webp"
},
{
  "id": "206",
  "name": "Lan & Wei #3",
  "series": "Grandmaster of Demonic Cultivation",
  "rarity": "rare,epic,legendary",
  "type": "Permanent Duo",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Permanent%20duo/Picsart_26-02-09_15-27-59-422.webp"
},{
  "id": "207",
  "name": "Yuki & Momo #1",
  "series": "Re:vale",
  "rarity": "rare,epic,legendary",
  "type": "Permanent Duo",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Permanent%20duo/Picsart_26-02-09_15-46-05-223.webp"
},{
  "id": "208",
  "name": "Hikaru & Yoshiki #1",
  "series": "The Summer Hikaru Died",
  "rarity": "rare,epic,legendary",
  "type": "Permanent Duo",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Permanent%20duo/Picsart_26-02-10_23-33-59-569.webp"
},{
  "id": "209",
  "name": "Hua & Xie #1",
  "series": "Heaven Official's Blessing",
  "rarity": "rare,epic,legendary",
  "type": "Permanent Duo",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Permanent%20duo/Picsart_26-02-10_23-36-00-025.webp"
},
{
  "id": "210",
  "name": "Hua & Xie #2",
  "series": "Heaven Official's Blessing",
  "rarity": "rare,epic,legendary",
  "type": "Permanent Duo",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Permanent%20duo/Picsart_26-02-10_23-34-57-915.webp"
},{
  "id": "211",
  "name": "Shiraori & Ariel #1",
  "series": "So I'm A Spider, So What?",
  "rarity": "rare,epic,legendary",
  "type": "Permanent Duo",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Permanent%20duo/Picsart_26-02-11_00-23-55-105.webp"
},
{
  "id": "212",
  "name": "Kurumi & Hibiki #1",
  "series": "Date A Live",
  "rarity": "rare,epic,legendary",
  "type": "Permanent Duo",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Permanent%20duo/Picsart_26-02-11_00-23-06-322.webp"
},{
  "id": "213",
  "name": "Kim Dokja #1",
  "series": "Omniscient Reader's Viewpoint",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base%20-%202/Picsart_26-02-11_14-12-55-933.webp"
},
{
  "id": "214",
  "name": "Kim Dokja #2",
  "series": "Omniscient Reader's Viewpoint",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base%20-%202/Picsart_26-02-11_14-13-45-233.webp"
},
{
  "id": "215",
  "name": "Grimnir #1",
  "series": "Granblue Fantasy",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Part%202/Picsart_26-02-22_12-01-49-227.webp"
},
{
  "id": "216",
  "name": "Yuki Suou #4",
  "series": "Alya Sometimes Hides Her Feelings In Russian",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Part%202/Picsart_26-02-22_12-03-19-396.webp"
},
{
  "id": "217",
  "name": "Kim Dokja #5",
  "series": "Omniscient Reader's Viewpoint",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base%20-%202/Picsart_26-02-11_14-20-58-758.webp"
},
  {
  "id": "218",
  "name": "Cid Kagenou #1",
  "series": "The Eminence in Shadow",
  "rarity": "ultimate",
  "type": "Permanent",
  "source": "Official Art|Made By ➺ Mid & Slept",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Err-idk-@main/3D/cid1.webp"
},{
  "id": "219",
  "name": "Alpha #8",
  "series": "The Eminence in Shadow",
  "rarity": "ultimate",
  "type": "Valentine",
  "source": "Official Art|Made By ➺ im_down_bad",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Err-idk-@main/Valentine/alpha8.webp"
},
  {
  "id": "220",
  "name": "Aventurine #4",
  "series": "Honkai Verse",
  "rarity": "celestial",
  "type": "Permanent",
  "source": "Official Art|Made By ➺ im_down_bad",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Err-idk-/3D/project_2.webp"
},{
  "id": "221",
  "name": "Yae Sakura #1",
  "series": "Honkai Verse",
  "rarity": "celestial",
  "type": "Valentine",
  "source": "Official Art|Made By ➺ im_down_bad",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Err-idk-@main/Valentine/yaesakura1.webp"
},{
  "id": "222",
  "name": "Sagiri Yamada Asaemon #1",
  "series": "Hell's Paradise",
  "rarity": "celestial",
  "type": "Valentine",
  "source": "Official Art|Made By ➺ soldier_of_christt",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Err-idk-/Valentine/IMG_2227_waifu2x_art_scan_noise3_scale.webp"
},
{
  "id": "223",
  "name": "Marin Kitagawa #5",
  "series": "My Dress-Up Darling",
  "rarity": "celestial",
  "type": "Valentine",
  "source": "Official Art|Made By ➺ its_slept",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Err-idk-@main/Valentine/marin5-val.webp"
},
{
  "id": "224",
  "name": "Mai Sakurajima #2",
  "series": "Rascal Does Not Dream Of Bunny Girl Senpai",
  "rarity": "celestial",
  "type": "Valentine",
  "source": "Official Art|Made By ➺ its_slept",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Err-idk-@main/Valentine/maisakurajima2.webp"
},{
  "id": "225",
  "name": "Zero Two #1",
  "series": "Darling in the FranXX",
  "rarity": "celestial",
  "type": "Valentine",
  "source": "Official Art|Made By ➺ its_slept",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Err-idk-@main/Valentine/zerotwo1.webp"
},
{
  "id": "226",
  "name": "Levi Ackerman #4",
  "series": "Attack on Titan",
  "rarity": "celestial",
  "type": "Valentine",
  "source": "Official Art|Made By ➺ its_slept",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Err-idk-@main/Valentine/levi3.webp"
},
{
  "id": "227",
  "name": "Micchon Shikimori #1",
  "series": "Shikimori's Not Just a Cutie",
  "rarity": "celestial",
  "type": "Valentine",
  "source": "Official Art|Made By ➺ its_slept",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Err-idk-@main/Valentine/shikimori1-val.webp"
},{
  "id": "228",
  "name": "Kotori Itsuka #1",
  "series": "Date A Live",
  "rarity": "ultimate",
  "type": "Valentine",
  "source": "Official Art|Made By ➺ its_slept",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Err-idk-@main/Valentine/kotori-1.webp"
},
{
  "id": "229",
  "name": "Yoshino Himekawa #1",
  "series": "Date A Live",
  "rarity": "ultimate",
  "type": "Valentine",
  "source": "Official Art|Made By ➺ its_slept",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Err-idk-@main/Valentine/yoshino1.webp"
},
{
  "id": "230",
  "name": "Kurumi Tokisaki #8",
  "series": "Date A Live",
  "rarity": "celestial",
  "type": "Valentine",
  "source": "Official Art|Made By ➺ its_slept",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Err-idk-@main/Valentine/kurumi8.webp"
},{
  "id": "231",
  "name": "Acheron #5",
  "series": "Honkai Verse",
  "rarity": "ultimate",
  "type": "Valentine",
  "source": "Official Art|Made By ➺ its_slept",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Err-idk-@main/Valentine/acheron5.webp"
},
{
  "id": "232",
  "name": "Yelan #1",
  "series": "Genshin Impact",
  "rarity": "godly",
  "type": "Valentine",
  "source": "Official Art|Made By ➺ im_down_bad",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Err-idk-/Valentine/Untitled270_20260209192307.webp"
},{
  "id": "233",
  "name": "Mikasa Ackerman #1",
  "series": "Attack on Titan",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Part%202/Picsart_26-02-22_14-38-54-955.webp"
}
,{
  "id": "234",
  "name": "Hu Tao #1",
  "series": "Genshin Impact",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base%20-%202/Picsart_26-02-11_15-25-55-127.webp"
},
{
  "id": "235",
  "name": "Hu Tao #2",
  "series": "Genshin Impact",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base%20-%202/Picsart_26-02-11_15-26-18-970.webp"
},
{
  "id": "236",
  "name": "Hu Tao #3",
  "series": "Genshin Impact",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base%20-%202/Picsart_26-02-11_15-26-41-546.webp"
},
{
  "id": "237",
  "name": "Hu Tao #4",
  "series": "Genshin Impact",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base%20-%202/Picsart_26-02-11_15-27-03-140.webp"
},
{
  "id": "238",
  "name": "Hu Tao #5",
  "series": "Genshin Impact",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base%20-%202/Picsart_26-02-11_15-27-36-427.webp"
},{
  "id": "239",
  "name": "Kurumi Tokisaki #2",
  "series": "Date A Live",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base%20-%202/Picsart_26-02-11_15-32-10-993.webp"
},
{
  "id": "240",
  "name": "Kurumi Tokisaki #3",
  "series": "Date A Live",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base%20-%202/Picsart_26-02-11_15-33-15-754.webp"
},
{
  "id": "241",
  "name": "Kurumi Tokisaki #4",
  "series": "Date A Live",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base%20-%202/Picsart_26-02-11_15-37-43-280.webp"
},
{
  "id": "242",
  "name": "Kurumi Tokisaki #5",
  "series": "Date A Live",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base%20-%202/Picsart_26-02-11_15-42-35-975.webp"
},
{
  "id": "243",
  "name": "Kurumi Tokisaki #6",
  "series": "Date A Live",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base%20-%202/Picsart_26-02-11_15-41-44-166.webp"
},
{
  "id": "244",
  "name": "Kurumi Tokisaki #7",
  "series": "Date A Live",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base%20-%202/Picsart_26-02-11_15-39-00-800.webp"
},{
  "id": "245",
  "name": "Itsuki #1",
  "series": "For Whom the Alchemist Exists",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Picsart_26-02-13_00-28-38-111.webp"
},{
  "id": "246",
  "name": "Ruby & Aqua #1",
  "series": "Oshi no Ko",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Picsart_26-02-13_00-30-47-369.webp"
},
{
  "id": "247",
  "name": "Rosa & Kei #1",
  "series": "Tears Of Themis",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Picsart_26-02-13_00-31-40-897.webp"
},
{
  "id": "248",
  "name": "Gilbert Bougainvillea #1",
  "series": "Violet Evergarden",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Picsart_26-02-13_00-33-03-896.webp"
},
{
  "id": "249",
  "name": "Violet Evergarden #1",
  "series": "Violet Evergarden",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Picsart_26-02-13_00-35-42-378.webp"
},
{
  "id": "250",
  "name": "Alice Zuberg #1",
  "series": "Sword Art Online",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Picsart_26-02-13_00-38-31-574.webp"
},
{
  "id": "251",
  "name": "Alice Zuberg #2",
  "series": "Sword Art Online",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Picsart_26-02-13_00-39-12-999.webp"
},
{
  "id": "252",
  "name": "Graypnir #1",
  "series": "Phantom of Kill",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Picsart_26-02-13_01-30-24-723.webp"
},
{
  "id": "253",
  "name": "Mitsuba Sousuke #1",
  "series": "Toilet-Bound Hanako-kun",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Picsart_26-02-13_01-34-57-626.webp"
},
{
  "id": "254",
  "name": "Lan & Wei #4",
  "series": "Grandmaster of Demonic Cultivation",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Picsart_26-02-13_01-48-03-640.webp"
},
{
  "id": "255",
  "name": "Hua & Xie #3",
  "series": "Heaven Official's Blessing",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Picsart_26-02-13_01-49-17-439.webp"
},
  {
  "id": "256",
  "name": "Lilith #1",
  "series": "The Maid I Hired Recently Is Mysterious",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Picsart_26-02-13_13-38-12-973.webp"
},
{
  "id": "257",
  "name": "Ganyu #1",
  "series": "Genshin Impact",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Picsart_26-02-13_13-40-19-809.webp"
},
{
  "id": "258",
  "name": "Valentine Astral #1",
  "series": "Valkyrie Crusade",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Picsart_26-02-13_13-35-02-806.webp"
},
{
  "id": "259",
  "name": "Mafuyu Asahina #1",
  "series": "Project SEKAI Colorful Stage!",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Picsart_26-02-13_13-56-26-155.webp"
},
{
  "id": "260",
  "name": "Cid Kagenou #2",
  "series": "The Eminence in Shadow",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Picsart_26-02-13_13-47-06-255.webp"
},
{
  "id": "261",
  "name": "Claire Kagenou #1",
  "series": "The Eminence in Shadow",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Picsart_26-02-13_13-42-20-690.webp"
},
{
  "id": "262",
  "name": "Mizuki Akiyama #1",
  "series": "Project SEKAI Colorful Stage!",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Picsart_26-02-13_14-02-37-371.webp"
},{
  "id": "263",
  "name": "Alisa Mikhailovna Kujou #7",
  "series": "Alya Sometimes Hides Her Feelings In Russian",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Picsart_26-02-11_02-45-41-679.webp"
},
{
  "id": "264",
  "name": "Delta #5",
  "series": "The Eminence in Shadow",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Picsart_26-02-11_02-32-49-947.webp"
},{
  "id": "265",
  "name": "Miku & Kaito #1",
  "series": "Vocaloid",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Picsart_26-02-14_16-21-07-535.webp"
},
{
  "id": "266",
  "name": "Hatsune Miku #1",
  "series": "Vocaloid",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Picsart_26-02-14_16-14-29-778.webp"
},
{
  "id": "267",
  "name": "Hatsune Miku #2",
  "series": "Vocaloid",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Picsart_26-02-14_16-18-24-274.webp"
},
{
  "id": "268",
  "name": "Charlotte Chloe #1",
  "series": "Chain Paradox",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Picsart_26-02-14_16-15-47-489.webp"
},
{
  "id": "269",
  "name": "Albedo #1",
  "series": "Overlord",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Picsart_26-02-14_16-42-15-820.webp"
},
{
  "id": "270",
  "name": "Alpha #9",
  "series": "The Eminence in Shadow",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Picsart_26-02-14_16-41-14-571.webp"
},
{
  "id": "271",
  "name": "Mita #1",
  "series": "MiSide",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Picsart_26-02-14_16-26-18-076.webp"
},
{
  "id": "272",
  "name": "Minato Aqua #1",
  "series": "Hololive",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Picsart_26-02-14_16-56-30-924.webp"
},
{
  "id": "273",
  "name": "Fuyuki Minami #1",
  "series": "Hokkaido Gals Are Super Adorable!",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Picsart_26-02-14_16-53-14-785.webp"
},
{
  "id": "274",
  "name": "Lucia #1",
  "series": "Punishing: Gray Raven",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Picsart_26-02-14_16-57-19-137.webp"
},{
  "id": "275",
  "name": "Lyney #1",
  "series": "Genshin Impact",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Picsart_26-02-14_16-51-39-160.webp"
},
{
  "id": "276",
  "name": "Kamisato Ayaka #1",
  "series": "Genshin Impact",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Picsart_26-02-14_16-48-46-672.webp"
},
{
  "id": "277",
  "name": "Misa Amane #1",
  "series": "Death Note",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Picsart_26-02-14_17-19-27-863.webp"
},
{
  "id": "278",
  "name": "Jean #1",
  "series": "Genshin Impact",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Picsart_26-02-14_17-17-54-008.webp"
},
{
  "id": "279",
  "name": "Himari Uehara #1",
  "series": "BanG Dream!",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Picsart_26-02-14_16-58-58-978.webp"
},
{
  "id": "280",
  "name": "YangYang #1",
  "series": "Wuthering Waves",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Picsart_26-02-14_17-22-31-457.webp"
},
{
  "id": "281",
  "name": "Kanade Yoisaki #1",
  "series": "Project SEKAI Colorful Stage!",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Picsart_26-02-14_17-21-19-296.webp"
},
{
  "id": "282",
  "name": "Holo #1",
  "series": "Spice and Wolf",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Picsart_26-02-14_17-26-20-314.webp"
},
{
  "id": "283",
  "name": "Ena Shinonome #1",
  "series": "Project SEKAI Colorful Stage!",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Picsart_26-02-14_17-25-42-267.webp"
},{
  "id": "284",
  "name": "Selina x Lanbird #1",
  "series": "I Will Seduce the Northern Duke",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Picsart_26-02-14_17-23-33-706.webp"
},
{
  "id": "285",
  "name": "Chixia #1",
  "series": "Wuthering Waves",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Picsart_26-02-14_17-32-12-765.webp"
},
{
  "id": "286",
  "name": "Miroku #1",
  "series": "Even If You Slit My Mouth",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Picsart_26-02-14_17-30-17-897.webp"
},
{
  "id": "287",
  "name": "Shino x Ren #1",
  "series": "Shino To Ren",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Picsart_26-02-14_17-28-06-599.webp"
},
{
  "id": "288",
  "name": "Mochizuki Honami #1",
  "series": "Project SEKAI Colorful Stage!",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Picsart_26-02-14_17-27-19-286.webp"
},
{
  "id": "289",
  "name": "Akane x Akito 21",
  "series": "My Love Story with Yamada-kun at Lv999",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
"source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Picsart_26-02-14_17-37-04-314.webp"
},
{
  "id": "290",
  "name": "Kirito & Asuna #1",
  "series": "Sword Art Online",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Picsart_26-02-14_17-36-19-489.webp"
},
{
  "id": "291",
  "name": "Boa Hancock #1",
  "series": "One Piece",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Picsart_26-02-14_17-35-32-259.webp"
},
{
  "id": "292",
  "name": "Ayn Alwyn x Heroine #1",
  "series": "Lovebrush Chronicles",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Picsart_26-02-14_17-34-12-379.webp"
},
{
  "id": "293",
  "name": "Rias Gremory #2",
  "series": "High School DxD",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Picsart_26-02-14_17-32-54-668.webp"
},
{
  "id": "294",
  "name": "Sylus #1",
  "series": "Love And DeepSpace",
  "rarity": "celestial",
  "type": "Permanent",
  "source": "Official Art|Made By » im_down_bad",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Err-idk-@main/3D/godly%20sylus%20-%201.webp"
},{
  "id": "295",
  "name": "Astolfo #1",
  "series": "Fate Series",
  "rarity": "celestial",
  "type": "Permanent",
  "source": "Official Art |Made By » its_slept",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Err-idk-@main/Picsart_26-02-17_14-27-32-310.webp"
},
{
  "id": "296",
  "name": "Till #1",
  "series": "Alien Stage",
  "rarity": "celestial",
  "type": "Permanent",
  "source": "Official Art |Made By » its_slept",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Err-idk-@main/Picsart_26-02-17_14-48-16-228_waifu2x_art_scan_noise3_scale.webp"
},{
  "id": "297",
  "name": "Lupa #1",
  "series": "Wuthering Waves",
  "rarity": "godly",
  "type": "Permanent",
  "source": "Official Art |Made By » im_down_bad",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Err-idk-@main/3D-2/lupa1.webp"
},{
  "id": "298",
  "name": "Acheron #6",
  "series": "Honkai Verse",
  "rarity": "godly",
  "type":"Permanent",
  "source": "Official Art |Made By » Slept & Mid",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/3D/acheron6.webp"
},{
  "id": "299",
  "name": "Ivan & Till #1",
  "series": "Alien Stage",
  "rarity": "celestial",
  "type": "Valentine",
  "source": "Official Art |Made By » im_down_bad",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Err-idk-@main/Valentine/Untitled285_20260217223504_waifu2x_art_scan_noise3_scale.webp"
},{
  "id": "300",
  "name": "Ivan & Till #2",
  "series": "Alien Stage",
  "rarity": "ultimate",
  "type": "Valentine",
  "source": "Official Art |Made By » im_down_bad",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Err-idk-@main/Valentine/Untitled285_20260217220238_waifu2x_art_scan_noise3_scale.webp"
},{
  "id": "301",
  "name": "Furina #4",
  "series": "Genshin Impact",
  "rarity": "celestial",
  "type": "Permanent",
  "source": "Official Art |Made By » its_slept",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Err-idk-@main/3D/furina4.webp"
},{
  "id": "302",
  "name": "Gabimaru #1",
  "series": "Hell's Paradise",
  "rarity": "celestial",
  "type": "Valentine",
  "source": "Official Art |Made By » soldier_of_christt",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Err-idk-@main/3D/IMG_2236_waifu2x_art_scan_noise3_scale_waifu2x_art_scan_noise3_scale.webp"
},{
  "id": "303",
  "name": "Yoichi Nagumo #1",
  "series": "Sakamoto Days",
  "rarity": "celestial",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Err-idk-@main/3D/IMG_9482-removebg-preview_1.webp"
},{
  "id": "304",
  "name": "Kokuyou #1",
  "series": "Blackstar -Theater Starless-",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Part%202/Picsart_26-02-22_14-43-28-270.webp"
},{
  "id": "305",
  "name": "Aventurine #5",
  "series": "Honkai Verse",
  "rarity": "celestial",
  "type": "Permanent",
  "source": "Official Art |Made By » its_slept",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Err-idk-@main/3D/Picsart_26-02-22_08-01-01-953.webp"
},{
  "id": "307",
  "name": "Alisa Mikhailovna Kujou #8",
  "series": "Alya Sometimes Hides Her Feelings In Russian",
  "rarity": "godly",
  "type": "Permanent",
  "source": "Official Art |Made By » im_down_bad",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Err-idk-@main/3D/alisa8.webp"
},{
  "id": "308",
  "name": "Vira #1",
  "series": "Granblue Fantasy",
  "rarity": "ultimate",
  "type": "Permanent",
  "source": "Official Art |Made By » im_down_bad",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Err-idk-@main/3D/Picsart_26-02-22_13-03-17-329.webp"
}
,
{
  "id": "309",
  "name": "Ayano Kimishima #1",
  "series": "Alya Sometimes Hides Her Feelings In Russian",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Part%202/Picsart_26-02-22_12-04-14-335.webp"
},
{
  "id": "310",
  "name": "Kafka #7",
  "series": "Honkai Verse",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Part%202/Picsart_26-02-22_12-05-31-372.webp"
},
{
  "id": "311",
  "name": "Alisa Mikhailovna Kujou #9",
  "series": "Alya Sometimes Hides Her Feelings In Russian",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Part%202/Picsart_26-02-22_12-06-23-823.webp"
},
{
  "id": "312",
  "name": "The Dahlia #1",
  "series": "Honkai Verse",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Part%202/Picsart_26-02-22_12-07-51-058.webp"
},
{
  "id": "313",
  "name": "Kana Sukoya #1",
  "series": "Nijisanji",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Part%202/Picsart_26-02-22_12-08-55-595.webp"
},
{
  "id": "314",
  "name": "Emu Ootori #1",
  "series": "Project SEKAI Colorful Stage!",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Part%202/Picsart_26-02-22_12-09-51-274.webp"
},
{
  "id": "315",
  "name": "Nqrse #1",
  "series": "Utaite",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Part%202/Picsart_26-02-22_12-14-51-853.webp"
},
{
  "id": "316",
  "name": "KAngel #1",
  "series": "Needy Streamer Overload",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Part%202/Picsart_26-02-22_12-16-22-203.webp"
},
{
  "id": "317",
  "name": "Kriemhild #1",
  "series": "Fate Series",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Part%202/Picsart_26-02-22_12-30-39-442.webp"
},
{
  "id": "318",
  "name": "Katsuragi #1",
  "series": "Senran Kagura",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Part%202/Picsart_26-02-22_12-32-06-204.webp"
},
{
  "id": "319",
  "name": "Ikaruga #1",
  "series": "Senran Kagura",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Part%202/Picsart_26-02-22_12-33-48-067.webp"
},
{
  "id": "320",
  "name": "Mochizuki Honami #2",
  "series": "Project SEKAI Colorful Stage!",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Part%202/Picsart_26-02-22_12-36-06-924.webp"
},
{
  "id": "321",
  "name": "Shadow Milk Cookie #1",
  "series": "Cookie Run",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card-2/Card-1.webp"
},
{
  "id": "322",
  "name": "Jacqueline #1",
  "series": "Eversoul",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Part%202/Picsart_26-02-22_12-39-12-571.webp"
},
{
  "id": "323",
  "name": "Rebecca #1",
  "series": "Eversoul",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Part%202/Picsart_26-02-22_12-41-30-218.webp"
},
{
  "id": "324",
  "name": "Ichika Hoshino #1",
  "series": "Project SEKAI Colorful Stage!",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Part%202/Picsart_26-02-22_12-44-34-474.webp"
},
{
  "id": "325",
  "name": "Akane Koumoto #1",
  "series": "My Monster Secret",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Part%202/Picsart_26-02-22_12-46-02-034.webp"
},
{
  "id": "326",
  "name": "Darkness #1",
  "series": "KonoSuba: God's Blessing on This Wonderful World!",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Part%202/Picsart_26-02-22_12-47-31-585.webp"
},
{
  "id": "327",
  "name": "Firefly #7",
  "series": "Honkai Verse",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Part%202/Picsart_26-02-22_12-54-01-716.webp"
},
{
  "id": "328",
  "name": "Rappa #1",
  "series": "Honkai Verse",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Part%202/Picsart_26-02-22_12-56-16-307.webp"
},
{
  "id": "329",
  "name": "Castorice #6",
  "series": "Honkai Verse",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Part%202/Picsart_26-02-22_12-57-06-654.webp"
},
{
  "id": "330",
  "name": "Sharkry #1",
  "series": "Girls' Frontline",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Part%202/Picsart_26-02-22_12-58-40-743.webp"
},
{
  "id": "331",
  "name": "Helm #1",
  "series": "Goddess of Victory: Nikke",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Part%202/Picsart_26-02-22_13-02-06-964.webp"
},
{
  "id": "332",
  "name": "Scarlet #1",
  "series": "Goddess of Victory: Nikke",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Part%202/Picsart_26-02-22_13-03-08-557.webp"
},
{
  "id": "333",
  "name": "Crown & Modernia #1",
  "series": "Goddess of Victory: Nikke",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Part%202/Picsart_26-02-22_13-04-42-695.webp"
},
{
  "id": "334",
  "name": "Blanc #1",
  "series": "Goddess of Victory: Nikke",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Part%202/Picsart_26-02-22_13-05-53-554.webp"
},
{
  "id": "335",
  "name": "Cid Highwind #1",
  "series": "Final Fantasy",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Part%202/Picsart_26-02-22_13-08-31-709.webp"
},
{
  "id": "336",
  "name": "Cloud Strife #1",
  "series": "Final Fantasy",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Part%202/Picsart_26-02-22_13-09-38-524.webp"
},
{
  "id": "337",
  "name": "Aerith Gainsborough #1",
  "series": "Final Fantasy",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Part%202/Picsart_26-02-22_13-12-35-519.webp"
},
{
  "id": "338",
  "name": "Kanade Yoisaki #2",
  "series": "Project SEKAI Colorful Stage!",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Part%202/Picsart_26-02-22_13-16-25-897.webp"
},
{
  "id": "339",
  "name": "Ichika Hoshino #2",
  "series": "Project SEKAI Colorful Stage!",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Part%202/Picsart_26-02-22_13-16-53-897.webp"
},
{
  "id": "340",
  "name": "Tifa Lockhart #1",
  "series": "Final Fantasy",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Part%202/Picsart_26-02-22_13-21-47-490.webp"
},
{
  "id": "341",
  "name": "Wolfa Amadea #1",
  "series": "Dolphin Wave",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Part%202/Picsart_26-02-22_13-25-22-827.webp"
},
{
  "id": "342",
  "name": "Taiki Shuttle #1",
  "series": "Umamusume: Pretty Derby",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Part%202/Picsart_26-02-22_13-29-44-025.webp"
},
{
  "id": "343",
  "name": "Jacqueline #2",
  "series": "Eversoul",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Part%202/Picsart_26-02-22_13-35-22-829.webp"
},
{
  "id": "344",
  "name": "Mami Nanami #1",
  "series": "Rent a Girlfriend",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Part%202/Picsart_26-02-22_13-49-08-873.webp"
},
{
  "id": "345",
  "name": "Misaki Ayuzawa & Takumi Usui #1",
  "series": "Maid Sama!",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Part%202/Picsart_26-02-22_13-51-05-981.webp"
},
{
  "id": "346",
  "name": "Toma & MC #1",
  "series": "Amnesia",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Part%202/Picsart_26-02-22_13-52-10-058.webp"
},
{
  "id": "347",
  "name": "Shin #1",
  "series": "Amnesia",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Part%202/Picsart_26-02-22_13-52-46-667.webp"
},
{
  "id": "348",
  "name": "Asahi Shiki #1",
  "series": "R.G.B!",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Part%202/Picsart_26-02-22_14-09-15-613.webp"
},
{
  "id": "349",
  "name": "Ashe Heartseeker #1",
  "series": "League of Legends",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Part%202/Picsart_26-02-22_14-11-35-728.webp"
},
{
  "id": "350",
  "name": "Momo Hinamori #1",
  "series": "Bleach Series",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Part%202/Picsart_26-02-22_14-12-45-692.webp"
},
{
  "id": "351",
  "name": "Yachiru Kusajishi #1",
  "series": "Bleach Series",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Part%202/Picsart_26-02-22_14-14-20-066.webp"
},
{
  "id": "352",
  "name": "Sweetheart Sona #1",
  "series": "League of Legends",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Part%202/Picsart_26-02-22_14-15-00-600.webp"
},
{
  "id": "353",
  "name": "Medicia #1",
  "series": "Sid Story",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Part%202/Picsart_26-02-22_14-17-11-777.webp"
},
{
  "id": "354",
  "name": "Nelliel Tu Odelschwanck #1",
  "series": "Bleach Series",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Part%202/Picsart_26-02-22_14-18-10-519.webp"
},
{
  "id": "355",
  "name": "Miwoki Wasurena #1",
  "series": "Psychic Hearts",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Part%202/Picsart_26-02-22_14-24-19-622.webp"
},
{
  "id": "356",
  "name": "Nilou #1",
  "series": "Genshin Impact",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Part%202/Picsart_26-02-22_14-24-49-693.webp"
},
{
  "id": "357",
  "name": "Shenhe #1",
  "series": "Genshin Impact",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Part%202/Picsart_26-02-22_14-25-38-714.webp"
},
{
  "id": "358",
  "name": "Keqing #1",
  "series": "Genshin Impact",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Part%202/Picsart_26-02-22_14-26-39-938.webp"
},
{
  "id": "359",
  "name": "Itsuki Nakano #1",
  "series": "The Quintessential Quintuplets",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Part%202/Picsart_26-02-22_14-27-53-307.webp"
},
{
  "id": "360",
  "name": "Miku Nakano #1",
  "series": "The Quintessential Quintuplets",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Part%202/Picsart_26-02-22_14-30-46-278.webp"
},
{
  "id": "361",
  "name": "Nino Nakano #1",
  "series": "The Quintessential Quintuplets",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Part%202/Picsart_26-02-22_14-32-27-107.webp"
},
{
  "id": "362",
  "name": "Sakura Nanamine #1",
  "series": "Toilet-Bound Hanako-kun",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Part%202/Picsart_26-02-22_14-33-28-823.webp"
},
{
  "id": "363",
  "name": "Annie Leonhardt #1",
  "series": "Attack on Titan",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Part%202/Picsart_26-02-22_14-35-15-912.webp"
},
{
  "id": "364",
  "name": "Asuka #1",
  "series": "Senran Kagura",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Part%202/Picsart_26-02-22_13-00-29-756.webp"
}

,{
  "id": "365",
  "name": "Sotetsu #1",
  "series": "Blackstar -Theater Starless-",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Part%202/Picsart_26-02-22_14-49-43-060.webp"
}
,{
  "id": "366",
  "name": "Qu #1",
  "series": "Blackstar -Theater Starless-",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Part%202/Picsart_26-02-22_14-50-42-860.webp"
}
,{
  "id": "367",
  "name": "Takami #1",
  "series": "Blackstar -Theater Starless-",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Part%202/Picsart_26-02-22_14-51-52-630.webp"
}
,{
  "id": "368",
  "name": "Takami #2",
  "series": "Blackstar -Theater Starless-",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Part%202/Picsart_26-02-22_14-52-02-996.webp"
}
,{
  "id": "369",
  "name": "Akira #1",
  "series": "Blackstar -Theater Starless-",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Part%202/Picsart_26-02-22_14-53-09-311.webp"
}
,{
  "id": "370",
  "name": "Shin #1",
  "series": "Blackstar -Theater Starless-",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Part%202/Picsart_26-02-22_14-53-53-689.webp"
}
,{
  "id": "371",
  "name": "Taiga #1",
  "series": "Blackstar -Theater Starless-",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Part%202/Picsart_26-02-22_14-54-53-137.webp"
}
,{
  "id": "372",
  "name": "Mokuren #1",
  "series": "Blackstar -Theater Starless-",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Part%202/Picsart_26-02-22_14-56-04-262.webp"
}
,{
  "id": "373",
  "name": "Zakuro #1",
  "series": "Blackstar -Theater Starless-",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Part%202/Picsart_26-02-22_14-56-22-939.webp"
}
,{
  "id": "374",
  "name": "Hari #1",
  "series": "Blackstar -Theater Starless-",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Part%202/Picsart_26-02-22_14-57-55-713.webp"
}
,{
  "id": "375",
  "name": "Kasumi #1",
  "series": "Blackstar -Theater Starless-",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Part%202/Picsart_26-02-22_14-59-35-563.webp"
}
,{
  "id": "376",
  "name": "Yae Miko #1",
  "series": "Genshin Impact",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Part%202/Picsart_26-02-22_15-01-15-061.webp"
}
,{
  "id": "377",
  "name": "Mai Sakurajima #1",
  "series": "Rascal Does Not Dream Of Bunny Girl Senpai",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Part%202/Picsart_26-02-22_15-03-35-549.webp"
}
,{
  "id": "378",
  "name": "Ruby Hoshino #7",
  "series": "Oshi no Ko",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Part%202/Picsart_26-02-22_15-04-36-427.webp"
}
,{
  "id": "379",
  "name": "Cheng Xiaoshi #1",
  "series": "Link Click",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Part%202/Picsart_26-02-22_15-05-39-359.webp"
}
,{
  "id": "380",
  "name": "Navia Casper #1",
  "series": "Genshin Impact",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Part%202/Picsart_26-02-22_15-17-28-793.webp"
}
,{
  "id": "381",
  "name": "Oliver #1",
  "series": "Purrfect Tale",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Part%202/Picsart_26-02-22_15-18-34-352.webp"
}
,{
  "id": "382",
  "name": "Mahiru Shiina #2",
  "series": "The Angel Next Door Spoils Me Rotten",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Part%202/Picsart_26-02-22_15-19-40-267.webp"
}
,{
  "id": "383",
  "name": "Shion #1",
  "series": "DARK MOON: THE BLOOD ALTAR",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Part%202/Picsart_26-02-22_15-20-19-285.webp"
}
,{
  "id": "384",
  "name": "Lu Guang #1",
  "series": "Link Click",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Part%202/Picsart_26-02-22_15-22-05-651.webp"
}
,{
  "id": "385",
  "name": "Qiao Ling #1",
  "series": "Link Click",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Part%202/Picsart_26-02-22_15-23-25-473.webp"
}
,{
  "id": "386",
  "name": "Asmodeus #1",
  "series": "Obey Me",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Part%202/Picsart_26-02-22_15-33-25-535.webp"
}
,{
  "id": "387",
  "name": "Satan #1",
  "series": "Obey Me",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Part%202/Picsart_26-02-22_15-52-53-982.webp"
}
,{
  "id": "388",
  "name": "Asmodeus #2",
  "series": "Obey Me",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Part%202/Picsart_26-02-22_15-53-41-903.webp"
}
,{
  "id": "389",
  "name": "Mammon #1",
  "series": "Obey Me",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Part%202/Picsart_26-02-22_16-02-16-416.webp"
}
,{
  "id": "390",
  "name": "Solomon #1",
  "series": "Obey Me",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Part%202/Picsart_26-02-22_16-05-34-698.webp"
}
,{
  "id": "391",
  "name": "Asmodeus #3",
  "series": "Obey Me",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Part%202/Picsart_26-02-22_16-06-36-898.webp"
}
,{
  "id": "392",
  "name": "Satan #2",
  "series": "Obey Me",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Part%202/Picsart_26-02-22_16-07-31-302.webp"
}
,{
  "id": "393",
  "name": "Leviathan #1",
  "series": "Obey Me",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Part%202/Picsart_26-02-22_16-08-20-850.webp"
}
,{
  "id": "394",
  "name": "Beelzebub #1",
  "series": "Obey Me",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Part%202/Picsart_26-02-22_16-11-01-552.webp"
}
,{
  "id": "395",
  "name": "Lucifer #1",
  "series": "Obey Me",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Part%202/Picsart_26-02-22_16-12-24-860.webp"
}
,{
  "id": "396",
  "name": "Belphagor #1",
  "series": "Obey Me",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Part%202/Picsart_26-02-22_16-23-27-315.webp"
}
,{
  "id": "397",
  "name": "Lu Feng #1",
  "series": "Little Mushroom",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Part%202/Picsart_26-02-22_19-48-39-876.webp"
}
,{
  "id": "398",
  "name": "An Zhe #1",
  "series": "Little Mushroom",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Part%202/Picsart_26-02-22_19-51-06-451.webp"
}
,{
  "id": "399",
  "name": "Siesta #1",
  "series": "The Detective Is Already Dead",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Part%202/Picsart_26-02-23_09-54-26-734.webp"
}
,{
  "id": "400",
  "name": "Asuna #1",
  "series": "Sword Art Online",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Part%202/Picsart_26-02-23_09-58-31-433.webp"
}
,{
  "id": "401",
  "name": "Privaty #1",
  "series": "Goddess of Victory: Nikke",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Part%202/Picsart_26-02-23_10-03-27-718.webp"
}
,{
  "id": "402",
  "name": "Aquamarine Hoshino #7",
  "series": "Oshi no Ko",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Part%202/Picsart_26-02-23_10-05-09-517.webp"
}
,{
  "id": "403",
  "name": "Akane Kurokawa #1",
  "series": "Oshi no Ko",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Part%202/Picsart_26-02-23_10-09-57-836.webp"
}
,{
  "id": "404",
  "name": "Tsukasa Tenma #1",
  "series": "Project SEKAI Colorful Stage!",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Part%202/Picsart_26-02-23_10-12-06-236.webp"
}
,{
  "id": "405",
  "name": "Sion Eltnam #1",
  "series": "Melty Blood",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Part%202/Picsart_26-02-23_10-14-47-039.webp"
}
,{
  "id": "406",
  "name": "Akito Shinonome #1",
  "series": "Project SEKAI Colorful Stage!",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Part%202/Picsart_26-02-23_10-16-57-040.webp"
}
,{
  "id": "407",
  "name": "Nene Yashiro #1",
  "series": "Toilet-Bound Hanako-kun",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Part%202/Picsart_26-02-23_10-24-32-815.webp"
}
,{
  "id": "408",
  "name": "Hanako-Kun #1",
  "series": "Toilet-Bound Hanako-kun",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Part%202/Picsart_26-02-23_10-26-31-338.webp"
}
,{
  "id": "409",
  "name": "Tsukasa Yugi #1",
  "series": "Toilet-Bound Hanako-kun",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Part%202/Picsart_26-02-23_10-29-11-694.webp"
}
,{
  "id": "410",
  "name": "Kou Minamoto #1",
  "series": "Toilet-Bound Hanako-kun",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Part%202/Picsart_26-02-23_10-36-26-481.webp"
}
,{
  "id": "411",
  "name": "Ichika Nakano #1",
  "series": "The Quintessential Quintuplets",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Part%202/Picsart_26-02-23_10-51-28-416.webp"
}
,{
  "id": "412",
  "name": "Saki Tenma #1",
  "series": "Project SEKAI Colorful Stage!",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Part%202/Picsart_26-02-23_10-53-15-726.webp"
}
,{
  "id": "413",
  "name": "Kohane Azusawa #1",
  "series": "Project SEKAI Colorful Stage!",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Part%202/Picsart_26-02-23_10-56-26-254.webp"
}
,{
  "id": "414",
  "name": "Kana Arima #1",
  "series": "Oshi no Ko",
  "rarity": "rare,epic,legendary",
  "type": "Valentine",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Valentine/Part%202/Picsart_26-02-23_09-56-35-052.webp"
}

,{
  "id": "415",
  "name": "Mahiru Shiina & Amane Fujimiya #1",
  "series": "The Angel Next Door Spoils Me Rotten",
  "rarity": "rare,epic,legendary",
  "type": "Permanent Duo",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Permanent%20duo/Patch%202/Picsart_26-02-23_13-23-49-771.webp"
}
,{
  "id": "416",
  "name": "Mahiru Shiina & Amane Fujimiya #2",
  "series": "The Angel Next Door Spoils Me Rotten",
  "rarity": "rare,epic,legendary",
  "type": "Permanent Duo",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Permanent%20duo/Patch%202/Picsart_26-02-23_13-26-40-511.webp"
}
,{
  "id": "417",
  "name": "Yoo Joonghyuk x Kim Dokja #1",
  "series": "Omniscient Reader's Viewpoint",
  "rarity": "rare,epic,legendary",
  "type": "Permanent Duo",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Permanent%20duo/Patch%202/Picsart_26-02-23_13-32-29-617.webp"
}
,{
  "id": "418",
  "name": "Yoo Joonghyuk x Kim Dokja #2",
  "series": "Omniscient Reader's Viewpoint",
  "rarity": "rare,epic,legendary",
  "type": "Permanent Duo",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Permanent%20duo/Patch%202/Picsart_26-02-23_13-32-39-883.webp"
}
,{
  "id": "419",
  "name": "Yoo Joonghyuk x Kim Dokja #3",
  "series": "Omniscient Reader's Viewpoint",
  "rarity": "rare,epic,legendary",
  "type": "Permanent Duo",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Permanent%20duo/Patch%202/Picsart_26-02-23_13-33-03-442.webp"
}
,{
  "id": "420",
  "name": "Yoo Joonghyuk x Kim Dokja #4",
  "series": "Omniscient Reader's Viewpoint",
  "rarity": "rare,epic,legendary",
  "type": "Permanent Duo",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Permanent%20duo/Patch%202/Picsart_26-02-23_13-34-35-220.webp"
}
,{
  "id": "421",
  "name": "Yoo Joonghyuk x Kim Dokja #5",
  "series": "Omniscient Reader's Viewpoint",
  "rarity": "rare,epic,legendary",
  "type": "Permanent Duo",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Permanent%20duo/Patch%202/Picsart_26-02-23_13-34-53-944.webp"
}

,{
  "id": "422",
  "name": "Ilay Riegrow #1",
  "series": "Passion (Kangjak)",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base/Base/Picsart_26-02-23_13-19-00-762.webp"
}
,{
  "id": "423",
  "name": "Ilay Riegrow #2",
  "series": "Passion (Kangjak)",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base/Base/Picsart_26-02-23_13-19-18-340.webp"
}
,{
  "id": "424",
  "name": "Ilay Riegrow #3",
  "series": "Passion (Kangjak)",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base/Base/Picsart_26-02-23_13-19-38-586.webp"
}
,{
  "id": "425",
  "name": "Ilay Riegrow #4",
  "series": "Passion (Kangjak)",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base/Base/Picsart_26-02-23_13-20-13-366.webp"
}
,{
  "id": "426",
  "name": "Mahiru Shiina #3",
  "series": "The Angel Next Door Spoils Me Rotten",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base/Base/Picsart_26-02-23_13-30-09-584.webp"
}
,{
  "id": "427",
  "name": "Sua #1",
  "series": "Alien Stage",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base/Base/Picsart_26-02-23_13-48-34-043.webp"
}
,{
  "id": "428",
  "name": "Sua #2",
  "series": "Alien Stage",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base/Base/Picsart_26-02-23_13-48-42-874.webp"
}
,{
  "id": "429",
  "name": "Sua #3",
  "series": "Alien Stage",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base/Base/Picsart_26-02-23_13-48-50-000.webp"
}
,{
  "id": "430",
  "name": "Sua #4",
  "series": "Alien Stage",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base/Base/Picsart_26-02-23_14-04-11-883.webp"
}
,{
  "id": "431",
  "name": "Mizi #1",
  "series": "Alien Stage",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base%20-%202/Picsart_26-02-23_13-54-21-758.webp"
}
,{
  "id": "432",
  "name": "Mizi #2",
  "series": "Alien Stage",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base/Base/Picsart_26-02-23_13-54-27-809.webp"
}
,{
  "id": "433",
  "name": "Mizi #3",
  "series": "Alien Stage",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base/Base/Picsart_26-02-23_13-54-35-538.webp"
}
,{
  "id": "434",
  "name": "Mizi #4",
  "series": "Alien Stage",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base/Base/Picsart_26-02-23_14-03-20-525.webp"
}
,{
  "id": "435",
  "name": "Ivan #1",
  "series": "Alien Stage",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base/Base/Picsart_26-02-23_14-15-42-476.webp"
}
,{
  "id": "436",
  "name": "Ivan #2",
  "series": "Alien Stage",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base/Base/Picsart_26-02-23_14-16-23-411.webp"
}
,{
  "id": "437",
  "name": "Ivan #3",
  "series": "Alien Stage",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base/Base/Picsart_26-02-23_14-16-40-489.webp"
}
,{
  "id": "438",
  "name": "Ivan #4",
  "series": "Alien Stage",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base/Base/Picsart_26-02-23_14-20-20-464.webp"
}
,{
  "id": "439",
  "name": "Till #2",
  "series": "Alien Stage",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base/Base/Picsart_26-02-23_14-24-30-039.webp"
}
,{
  "id": "440",
  "name": "Till #3",
  "series": "Alien Stage",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base/Base/Picsart_26-02-23_14-25-01-180.webp"
}
,{
  "id": "441",
  "name": "Till #4",
  "series": "Alien Stage",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base/Base/Picsart_26-02-23_14-25-12-156.webp"
}
,{
  "id": "442",
  "name": "Till #5",
  "series": "Alien Stage",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base/Base/Picsart_26-02-23_14-25-49-717.webp"
}
,{
  "id": "443",
  "name": "Hyuna #1",
  "series": "Alien Stage",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base/Base/Picsart_26-02-23_14-56-32-919.webp"
}
,{
  "id": "444",
  "name": "Hyuna #2",
  "series": "Alien Stage",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base/Base/Picsart_26-02-23_14-56-43-265.webp"
}
,{
  "id": "445",
  "name": "Hyuna #3",
  "series": "Alien Stage",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base/Base/Picsart_26-02-23_15-04-48-064.webp"
}
,{
  "id": "446",
  "name": "Hyuna #4",
  "series": "Alien Stage",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base/Base/Picsart_26-02-23_15-06-21-779.webp"
}
,{
  "id": "447",
  "name": "Luka #1",
  "series": "Alien Stage",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base/Base/Picsart_26-02-23_15-46-44-263.webp"
}
,{
  "id": "448",
  "name": "Luka #2",
  "series": "Alien Stage",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base/Base/Picsart_26-02-23_15-46-52-132.webp"
},{
  "id": "449",
  "name": "Shiki #1",
  "series": "Blood of the Reprimanded Dog",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base/Base/Picsart_26-02-23_19-39-19-682-1.webp"
},{
  "id": "450",
  "name": "Shino Saotome #1",
  "series": "Shino To Ren",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base/Base/Picsart_26-02-23_21-32-32-431.webp"
},
{
  "id": "451",
  "name": "Shino Saotome #2",
  "series": "Shino To Ren",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base/Base/Picsart_26-02-23_21-32-52-913.webp"
},
{
  "id": "452",
  "name": "Isaac Foster #1",
  "series": "Angels of Death",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Base/Base/Picsart_26-02-23_21-35-21-075.webp"
},{
  "id": "453",
  "name": "Akira #1",
  "series": "Blood of the Reprimanded Dog",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Permanent/Picsart_26-02-23_22-39-42-021.webp"
},
{
  "id": "454",
  "name": "Shirayuki Ren #1",
  "series": "Shino To Ren",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Permanent/Picsart_26-02-23_22-42-30-833.webp"
},
{
  "id": "455",
  "name": "Ado #1",
  "series": "Utaite",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Permanent/Picsart_26-02-24_00-23-13-692.webp"
},{
  "id": "456",
  "name": "Johan Liebert #1",
  "series": "Monster",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Permanent/Picsart_26-02-24_12-51-48-593.webp"
},
{
  "id": "457",
  "name": "Kokomi #1",
  "series": "Genshin Impact",
  "rarity": "celestial",
  "type": "Permanent",
  "source": "Official Art|Made By ➺ im_down_bad",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Err-idk-@main/3D/Untitled244_20260301131503_waifu2x_art_scan_noise3_scale_waifu2x_art_scan_noise3_scale.webp"
},
{
  "id": "458",
  "name": "Hyuna & Luka #1",
  "series": "Alien Stage",
  "rarity": "celestial",
  "type": "Valentine",
  "source": "Official Art|Made By ➺ im_down_bad",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Err-idk-@main/3D/Untitled285_20260223124355-1.webp"
},
{
  "id": "459",
  "name": "Mizi & Sua #1",
  "series": "Alien Stage",
  "rarity": "celestial",
  "type": "Exclusive",
  "source": "Official Art|Made By ➺ im_down_bad",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Err-idk-@main/3D/Untitled285_20260223125649-1.webp"
},
{
  "id": "460",
  "name": "Psylocke #1",
  "series": "Marvel Rivals",
  "rarity": "ultimate",
  "type": "Permanent",
  "source": "Official Art|Made By ➺ im_down_bad",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Err-idk-@main/3D/Untitled288_20260301153852_waifu2x_art_scan_noise3_scale.webp"
},
{
  "id": "461",
  "name": "Kim Dokja #3",
  "series": "Omniscient Reader's Viewpoint",
  "rarity": "ultimate",
  "type": "Permanent",
  "source": "Official Art|Made By ➺ its_slept",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Err-idk-@main/3D/Untitled292_20260220134953-1_1.webp"
},
{
  "id": "462",
  "name": "Anaxa #1",
  "series": "Honkai Verse",
  "rarity": "celestial",
  "type": "Permanent",
  "source": "Official Art|Made By ➺ im_down_bad",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Err-idk-@main/3D/Untitled304_20260227222546_waifu2x_art_scan_noise3_scale.webp"
}
,{
  "id": "463",
  "name": "Ciaccona #1",
  "series": "Wuthering Waves",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card/Card-1.webp"
},{
  "id": "464",
  "name": "Ado #2",
  "series": "Utaite",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card/Card-10.webp"
},{
  "id": "465",
  "name": "Emilia #1",
  "series": "Re:Zero",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card/Card-11.webp"
},{
  "id": "466",
  "name": "Isolde #1",
  "series": "Reverse:1999",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card/Card-12.webp"
},{
  "id": "467",
  "name": "Yae Miko #3",
  "series": "Genshin Impact",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card/Card-13.webp"
},{
  "id": "468",
  "name": "Yelan #3",
  "series": "Genshin Impact",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card/Card-14.webp"
},{
  "id": "469",
  "name": "Prometheus #1",
  "series": "Honkai Verse",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card/Card-15.webp"
},{
  "id": "470",
  "name": "Seele Vollerei #1",
  "series": "Honkai Verse",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card/Card-16.webp"
},{
  "id": "471",
  "name": "Eishin Flash #1",
  "series": "Umamusume: Pretty Derby",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card/Card-17.webp"
},{
  "id": "472",
  "name": "Yelan #2",
  "series": "Genshin Impact",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card/Card-18.webp"
},{
  "id": "473",
  "name": "Pardofelis #1",
  "series": "Honkai Verse",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card/Card-19.webp"
},{
  "id": "474",
  "name": "Lupa #2",
  "series": "Wuthering Waves",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card/Card-2.webp"
},{
  "id": "475",
  "name": "Seele Vollerei #2",
  "series": "Honkai Verse",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card/Card-20.webp"
},{
  "id": "476",
  "name": "El Condor Pasa #2",
  "series": "Umamusume: Pretty Derby",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card/Card-21.webp"
},{
  "id": "477",
  "name": "Admire Groove #1",
  "series": "Umamusume: Pretty Derby",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card/Card-22.webp"
},{
  "id": "478",
  "name": "Zhuge Kongming #1",
  "series": "Honkai Verse",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card/Card-23.webp"
},{
  "id": "479",
  "name": "Eula #1",
  "series": "Genshin Impact",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card/Card-24.webp"
},{
  "id": "480",
  "name": "El Condor Pasa #1",
  "series": "Umamusume: Pretty Derby",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card/Card-25.webp"
},{
  "id": "481",
  "name": "Misteln Schariac #1",
  "series": "Honkai Verse",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card/Card-26.webp"
},{
  "id": "482",
  "name": "Rita Rossweisse #2",
  "series": "Honkai Verse",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card/Card-27.webp"
},{
  "id": "483",
  "name": "Raiden Shogun #1",
  "series": "Genshin Impact",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card/Card-28.webp"
},{
  "id": "484",
  "name": "Kobo Kanaeru #1",
  "series": "Hololive",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card/Card-29.webp"
},{
  "id": "485",
  "name": "Qiuyuan #2",
  "series": "Wuthering Waves",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card/Card-3.webp"
},{
  "id": "486",
  "name": "Rita Rossweisse #1",
  "series": "Honkai Verse",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card/Card-30.webp"
},{
  "id": "487",
  "name": "Eishin Flash #2",
  "series": "Umamusume: Pretty Derby",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card/Card-31.webp"
},{
  "id": "488",
  "name": "Mona #2",
  "series": "Genshin Impact",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card/Card-32.webp"
},{
  "id": "489",
  "name": "Espoir City #1",
  "series": "Umamusume: Pretty Derby",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card/Card-33.webp"
},{
  "id": "490",
  "name": "Xianyun #2",
  "series": "Genshin Impact",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card/Card-35.webp"
},{
  "id": "491",
  "name": "Xie Lian #1",
  "series": "Heaven Official's Blessing",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card/Card-34.webp"
},{
  "id": "492",
  "name": "Hua Cheng #1",
  "series": "Heaven Official's Blessing",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card/Card-36.webp"
},{
  "id": "493",
  "name": "Xianyun #1",
  "series": "Genshin Impact",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card/Card-37.webp"
},{
  "id": "494",
  "name": "Fenomeno #1",
  "series": "Umamusume: Pretty Derby",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card/Card-38.webp"
},{
  "id": "495",
  "name": "Emilia #2",
  "series": "Re:Zero",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card/Card-39.webp"
},{
  "id": "496",
  "name": "Mornye #6",
  "series": "Wuthering Waves",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card/Card-4.webp"
},{
  "id": "497",
  "name": "Mona #1",
  "series": "Genshin Impact",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card/Card-40.webp"
},{
  "id": "498",
  "name": "El Condor Pasa #3",
  "series": "Umamusume: Pretty Derby",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card/Card-41.webp"
},{
  "id": "499",
  "name": "Raven #1",
  "series": "Honkai Verse",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card/Card-42.webp"
},{
  "id": "500",
  "name": "Emilia #3",
  "series": "Re:Zero",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card/Card-43.webp"
},{
  "id": "501",
  "name": "Yae Miko #2",
  "series": "Genshin Impact",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card/Card-44.webp"
},{
  "id": "502",
  "name": "Sirin #1",
  "series": "Honkai Verse",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card/Card-45.webp"
},{
  "id": "503",
  "name": "Yae Sakura #2",
  "series": "Honkai Verse",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card/Card-46.webp"
},{
  "id": "504",
  "name": "Rin Kagamine #1",
  "series": "Vocaloid",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card/Card-47.webp"
},{
  "id": "505",
  "name": "Susannah Manatt #1",
  "series": "Honkai Verse",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card/Card-48.webp"
},{
  "id": "506",
  "name": "Eternity #1",
  "series": "Reverse:1999",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card/Card-49.webp"
},{
  "id": "507",
  "name": "Aemeath #1",
  "series": "Wuthering Waves",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card/Card-5.webp"
},{
  "id": "508",
  "name": "Kakania #1",
  "series": "Reverse:1999",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card/Card-50.webp"
},{
  "id": "509",
  "name": "Luuk #1",
  "series": "Wuthering Waves",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card/Card-6.webp"
},{
  "id": "510",
  "name": "Veliona #1",
  "series": "Honkai Verse",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card/Card-7.webp"
},{
  "id": "511",
  "name": "Himeko Murata #1",
  "series": "Honkai Verse",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card/Card-8.webp"
},{
  "id": "512",
  "name": "Kevin Kaslana #1",
  "series": "Honkai Verse",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card/Card-9.webp"
},{
  "id": "513",
  "name": "Nami #1",
  "series": "One Piece",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card-2/Card-101.webp"
},{
  "id": "514",
  "name": "Dark Sakura #1",
  "series": "Fate Series",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card-2/Card-102.webp"
},{
  "id": "515",
  "name": "Uruha Ichinose #1",
  "series": "Virtual eSports Project!",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card-2/Card-109.webp"
},{
  "id": "516",
  "name": "Loki #1",
  "series": "Marvel Rivals",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card-2/Card-11.webp"
},{
  "id": "517",
  "name": "Tanya Von Degurechaff #1",
  "series": "Youjo Senki",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card-2/Card-111.webp"
},{
  "id": "518",
  "name": "Aemeath #2",
  "series": "Wuthering Waves",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card-2/Card-112.webp"
},{
  "id": "519",
  "name": "Yumi Shiina #1",
  "series": "Persona 5: The Phantom X",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card-2/Card-114.webp"
},{
  "id": "520",
  "name": "Sakamata Chloe #1",
  "series": "Hololive",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card-2/Card-115.webp"
},{
  "id": "521",
  "name": "Hua Cheng #2",
  "series": "Heaven Official's Blessing",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card-2/Card-116.webp"
},{
  "id": "522",
  "name": "Trigger #1",
  "series": "Zenless Zone Zero",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card-2/Card-117.webp"
},{
  "id": "523",
  "name": "Juufuutei Raden #1",
  "series": "Hololive",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card-2/Card-119.webp"
},{
  "id": "524",
  "name": "Enkidu #1",
  "series": "Fate Series",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card-2/Card-120.webp"
},{
  "id": "525",
  "name": "Petra Gurin #1",
  "series": "Nijisanji",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card-2/Card-121.webp"
},{
  "id": "526",
  "name": "Luuk #2",
  "series": "Wuthering Waves",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card-2/Card-123.webp"
},{
  "id": "527",
  "name": "Avywenna #1",
  "series": "Arknights: Endfield",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card-2/Card-125.webp"
},{
  "id": "528",
  "name": "Mochizuki Honami #3",
  "series": "Project SEKAI Colorful Stage!",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card-2/Card-126.webp"
},{
  "id": "529",
  "name": "Lady Avalon #1",
  "series": "Fate Series",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card-2/Card-127.webp"
},{
  "id": "530",
  "name": "Psylocke #2",
  "series": "Marvel Rivals",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card-2/Card-131.webp"
},{
  "id": "531",
  "name": "Kikirara Vivi #1",
  "series": "Hololive",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card-2/Card-133.webp"
},{
  "id": "532",
  "name": "Inori Yuzuriha #1",
  "series": "Guilty Crown",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card-2/Card-134.webp"
},{
  "id": "533",
  "name": "Nakiri Ayame #1",
  "series": "Hololive",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card-2/Card-135.webp"
},{
  "id": "534",
  "name": "Lucy Heartfilia #1",
  "series": "Fairy Tail",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card-2/Card-136.webp"
},{
  "id": "535",
  "name": "Isaki Riona #1",
  "series": "Hololive",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card-2/Card-137.webp"
},{
  "id": "536",
  "name": "Scarlet #1",
  "series": "I'm The Grim Reaper",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card-2/Card-14.webp"
},{
  "id": "537",
  "name": "Vladilena Milizé #1",
  "series": "86 Eighty-Six",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card-2/Card-18.webp"
},{
  "id": "538",
  "name": "Snake Fruit Cookie #1",
  "series": "Cookie Run",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card-2/Card-19.webp"
},{
  "id": "539",
  "name": "An Shiraishi #1",
  "series": "Project SEKAI Colorful Stage!",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card-2/Card-2.webp"
},{
  "id": "540",
  "name": "Camellya #1",
  "series": "Wuthering Waves",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card-2/Card-22.webp"
},{
  "id": "541",
  "name": "Lyseria Christaria #1",
  "series": "The Demon Sword Master of Excalibur Academy",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card-2/Card-23.webp"
}
,{
  "id": "542",
  "name": "Rem #1",
  "series": "Re:Zero",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card-2/Card-24.webp"
}
,{
  "id": "543",
  "name": "Zeta #1",
  "series": "The Eminence in Shadow",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card-2/Card-27.webp"
}
,{
  "id": "544",
  "name": "Xie Lian #2",
  "series": "Heaven Official's Blessing",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card-2/Card-28.webp"
}
,{
  "id": "545",
  "name": "Crown #1",
  "series": "Goddess of Victory: Nikke",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card-2/Card-31.webp"
}
,{
  "id": "546",
  "name": "The Dahlia #2",
  "series": "Honkai Verse",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card-2/Card-33.webp"
}
,{
  "id": "547",
  "name": "Phrolova #1",
  "series": "Wuthering Waves",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card-2/Card-36.webp"
}
,{
  "id": "548",
  "name": "Rowena #1",
  "series": "Lost Sword: Tales of Britannia",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card-2/Card-38.webp"
}
,{
  "id": "549",
  "name": "Rem #2",
  "series": "Re:Zero",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card-2/Card-4.webp"
}
,{
  "id": "550",
  "name": "Anby #1",
  "series": "Zenless Zone Zero",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card-2/Card-40.webp"
}
,{
  "id": "551",
  "name": "Hatsune Miku #3",
  "series": "Vocaloid",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card-2/Card-41.webp"
}
,{
  "id": "552",
  "name": "Malleus Draconia #1",
  "series": "Twisted Wonderland",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card-2/Card-43.webp"
}
,{
  "id": "553",
  "name": "Noah Kurumi #1",
  "series": "Virtual eSports Project!",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card-2/Card-46.webp"
}
,{
  "id": "554",
  "name": "Pure Vanilla Cookie #1",
  "series": "Cookie Run",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card-2/Card-47.webp"
}
,{
  "id": "555",
  "name": "Pardofelis #2",
  "series": "Honkai Verse",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card-2/Card-48.webp"
}
,{
  "id": "556",
  "name": "Akaza #1",
  "series": "Demon Slayer",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card-2/Card-58.webp"
}
,{
  "id": "557",
  "name": "Mikasa Ackerman #2",
  "series": "Attack on Titan",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card-2/Card-6.webp"
}
,{
  "id": "558",
  "name": "Touya Aoyagi #1",
  "series": "Project SEKAI Colorful Stage!",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card-2/Card-63.webp"
}
,{
  "id": "559",
  "name": "Mimi Tosaki #1",
  "series": "Virtual eSports Project!",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card-2/Card-64.webp"
}
,{
  "id": "560",
  "name": "Hua Cheng #3",
  "series": "Heaven Official's Blessing",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card-2/Card-65.webp"
}
,{
  "id": "561",
  "name": "Oriana Rose #1",
  "series": "The Eminence in Shadow",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card-2/Card-67.webp"
}
,{
  "id": "562",
  "name": "Nakime #1",
  "series": "Demon Slayer",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card-2/Card-70.webp"
}
,{
  "id": "563",
  "name": "Miku Nakano #2",
  "series": "The Quintessential Quintuplets",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card-2/Card-71.webp"
}
,{
  "id": "564",
  "name": "Yinlin #1",
  "series": "Wuthering Waves",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card-2/Card-77.webp"
}
,{
  "id": "565",
  "name": "Mimi Tosaki #2",
  "series": "Virtual eSports Project!",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card-2/Card-79.webp"
}
,{
  "id": "566",
  "name": "Fine Motion #1",
  "series": "Umamusume: Pretty Derby",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card-2/Card-8.webp"
}
,{
  "id": "567",
  "name": "Itsuki Nakano #2",
  "series": "The Quintessential Quintuplets",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card-2/Card-80.webp"
}
,{
  "id": "568",
  "name": "Alkaid McGrath #1",
  "series": "For All Time",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card-2/Card-84.webp"
}
,{
  "id": "569",
  "name": "Mahiru Shiina #4",
  "series": "The Angel Next Door Spoils Me Rotten",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card-2/Card-90.webp"
}
,{
  "id": "570",
  "name": "Malleus Draconia #2",
  "series": "Twisted Wonderland",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card-2/Card-92.webp"
}
,{
  "id": "571",
  "name": "An Shiraishi #2",
  "series": "Project SEKAI Colorful Stage!",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card-2/Card-93.webp"
}
,{
  "id": "572",
  "name": "Ye Shunguang #1",
  "series": "Zenless Zone Zero",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card-2/Card-94.webp"
}
,{
  "id": "573",
  "name": "Rias Gremory #3",
  "series": "High School DxD",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card-2/Card-96.webp"
}
,{
  "id": "574",
  "name": "Zenitsu Agatsuma #1",
  "series": "Demon Slayer",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card-2/Card-98.webp"
}
,{
  "id": "575",
  "name": "Mahiru Shiina #5",
  "series": "The Angel Next Door Spoils Me Rotten",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card-2/Card-99.webp"
},{
  "id": "576",
  "name": "Luke Davis #1",
  "series": "Nerd Project",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card-3/Card-10.webp"
}
,{
  "id": "577",
  "name": "Ren Amamiya #1",
  "series": "Persona 5",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card-3/Card-100.webp"
}
,{
  "id": "578",
  "name": "Aemeath #3",
  "series": "Wuthering Waves",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card-3/Card-103.webp"
}
,{
  "id": "579",
  "name": "Rin Tohsaka #1",
  "series": "Fate Series",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card-3/Card-104.webp"
}
,{
  "id": "580",
  "name": "Sumire Kaga #1",
  "series": "Virtual eSports Project!",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card-3/Card-105.webp"
}
,{
  "id": "581",
  "name": "Columbina #2",
  "series": "Genshin Impact",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card-3/Card-106.webp"
}
,{
  "id": "582",
  "name": "Childe #1",
  "series": "Genshin Impact",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card-3/Card-107.webp"
}
,{
  "id": "583",
  "name": "Uruha Ichinose #2",
  "series": "Virtual eSports Project!",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card-3/Card-108.webp"
}
,{
  "id": "584",
  "name": "Columbina #3",
  "series": "Genshin Impact",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card-3/Card-110.webp"
}
,{
  "id": "585",
  "name": "Denji #1",
  "series": "Chainsaw Man",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card-3/Card-113.webp"
}
,{
  "id": "586",
  "name": "Yor Briar #1",
  "series": "Spy x Family",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card-3/Card-118.webp"
}
,{
  "id": "587",
  "name": "Erza Scarlet #1",
  "series": "Fairy Tail",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card-3/Card-12.webp"
}
,{
  "id": "588",
  "name": "Giyu Tomioka #1",
  "series": "Demon Slayer",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card-3/Card-124.webp"
}
,{
  "id": "589",
  "name": "Yuki Cross #1",
  "series": "Vampire Knight",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card-3/Card-129.webp"
}
,{
  "id": "590",
  "name": "Muichiro Tokito #1",
  "series": "Demon Slayer",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card-3/Card-13.webp"
}
,{
  "id": "591",
  "name": "Psylocke #3",
  "series": "Marvel Rivals",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card-3/Card-132.webp"
}
,{
  "id": "592",
  "name": "Cana Alberona #1",
  "series": "Fairy Tail",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card-3/Card-15.webp"
}
,{
  "id": "593",
  "name": "Juvia Lockser #1",
  "series": "Fairy Tail",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card-3/Card-16.webp"
}
,{
  "id": "594",
  "name": "Satoru Gojo #2",
  "series": "Jujutsu Kaisen",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card-3/Card-17.webp"
}
,{
  "id": "595",
  "name": "Iguro Obanai #1",
  "series": "Demon Slayer",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card-3/Card-20.webp"
}
,{
  "id": "596",
  "name": "Phrolova #2",
  "series": "Wuthering Waves",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card-3/Card-21.webp"
}
,{
  "id": "597",
  "name": "Nazuna Kaga #1",
  "series": "Virtual eSports Project!",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card-3/Card-25.webp"
}
,{
  "id": "598",
  "name": "Nazuna Kaga #2",
  "series": "Virtual eSports Project!",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card-3/Card-26.webp"
}
,{
  "id": "599",
  "name": "Sanemi Shinazugawa #1",
  "series": "Demon Slayer",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card-3/Card-29.webp"
}
,{
  "id": "600",
  "name": "Carlotta #1",
  "series": "Wuthering Waves",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card-3/Card-3.webp"
}
,{
  "id": "601",
  "name": "Gyomei Himejima #1",
  "series": "Demon Slayer",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card-3/Card-30.webp"
}
,{
  "id": "602",
  "name": "Frieren #1",
  "series": "Frieren: Beyond Journey's End",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card-3/Card-32.webp"
}
,{
  "id": "603",
  "name": "Emma #1",
  "series": "Goddess of Victory: Nikke",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card-3/Card-35.webp"
}
,{
  "id": "604",
  "name": "Yu Narukami #1",
  "series": "Persona 4",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card-3/Card-37.webp"
}
,{
  "id": "605",
  "name": "Fenrys #1",
  "series": "Chillin' in Another World With Level 2 Super Cheat Powers",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card-3/Card-39.webp"
}
,{
  "id": "606",
  "name": "Kaoruko Waguri #1",
  "series": "The Fragrant Flower Blooms with Dignity",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card-3/Card-44.webp"
},{
  "id": "607",
  "name": "Kanade Yoisaki #3",
  "series": "Project SEKAI Colorful Stage!",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card-3/Card-45.webp"
}
,{
  "id": "608",
  "name": "Little Mermaid #1",
  "series": "Goddess of Victory: Nikke",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card-3/Card-49.webp"
}
,{
  "id": "609",
  "name": "Galahad #1",
  "series": "Lost Sword: Tales of Britannia",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card-3/Card-5.webp"
}
,{
  "id": "610",
  "name": "Moona Hoshinova #1",
  "series": "Hololive",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card-3/Card-50.webp"
}
,{
  "id": "611",
  "name": "Shinobu Kocho #1",
  "series": "Demon Slayer",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card-3/Card-51.webp"
}
,{
  "id": "612",
  "name": "Weiss Schnee #1",
  "series": "RWBY",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card-3/Card-52.webp"
}
,{
  "id": "613",
  "name": "Makima #1",
  "series": "Chainsaw Man",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card-3/Card-53.webp"
}
,{
  "id": "614",
  "name": "Mizuki Akiyama #2",
  "series": "Project SEKAI Colorful Stage!",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card-3/Card-54.webp"
}
,{
  "id": "615",
  "name": "Hatsune Miku #4",
  "series": "Vocaloid",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card-3/Card-55.webp"
}
,{
  "id": "616",
  "name": "Sakura Matou #1",
  "series": "Fate Series",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card-3/Card-56.webp"
}
,{
  "id": "617",
  "name": "Kaoruko Waguri #2",
  "series": "The Fragrant Flower Blooms with Dignity",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card-3/Card-57.webp"
}
,{
  "id": "618",
  "name": "Merlin #1",
  "series": "Fate Series",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card-3/Card-59.webp"
}
,{
  "id": "619",
  "name": "Mami Nanami #2",
  "series": "Rent a Girlfriend",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card-3/Card-60.webp"
}
,{
  "id": "620",
  "name": "Mitsuri Kanroji #2",
  "series": "Demon Slayer",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card-3/Card-61.webp"
}
,{
  "id": "621",
  "name": "Lohengrin #1",
  "series": "Lost Sword: Tales of Britannia",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card-3/Card-62.webp"
}
,{
  "id": "622",
  "name": "Sumire Kaga #2",
  "series": "Virtual eSports Project!",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card-3/Card-66.webp"
}
,{
  "id": "623",
  "name": "Yuji Itadori #1",
  "series": "Jujutsu Kaisen",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card-3/Card-68.webp"
}
,{
  "id": "624",
  "name": "Merlin #2",
  "series": "Lost Sword: Tales of Britannia",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card-3/Card-69.webp"
}
,{
  "id": "625",
  "name": "Necrologist #1",
  "series": "Reverse:1999",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card-3/Card-7.webp"
}
,{
  "id": "626",
  "name": "Lauma #1",
  "series": "Genshin Impact",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card-3/Card-72.webp"
}
,{
  "id": "627",
  "name": "Carlotta #2",
  "series": "Wuthering Waves",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card-3/Card-73.webp"
}
,{
  "id": "628",
  "name": "Elaina #1",
  "series": "Wandering Witch: The Journey of Elaina",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card-3/Card-74.webp"
}
,{
  "id": "629",
  "name": "Tsukasa Tenma #2",
  "series": "Project SEKAI Colorful Stage!",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card-3/Card-75.webp"
}
,{
  "id": "630",
  "name": "Lauma #2",
  "series": "Genshin Impact",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card-3/Card-76.webp"
}
,{
  "id": "631",
  "name": "Mami Nanami #3",
  "series": "Rent a Girlfriend",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card-3/Card-78.webp"
}
,{
  "id": "632",
  "name": "Beatrice #1",
  "series": "Re:Zero",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card-3/Card-81.webp"
}
,{
  "id": "633",
  "name": "Neuvillette #1",
  "series": "Genshin Impact",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card-3/Card-82.webp"
}
,{
  "id": "634",
  "name": "Albedo #2",
  "series": "Overlord",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card-3/Card-83.webp"
}
,{
  "id": "635",
  "name": "Mizuki Akiyama #3",
  "series": "Project SEKAI Colorful Stage!",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card-3/Card-86.webp"
}
,{
  "id": "636",
  "name": "Mitsuri Kanroji #3",
  "series": "Demon Slayer",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card-3/Card-87.webp"
}
,{
  "id": "637",
  "name": "An Shiraishi #3",
  "series": "Project SEKAI Colorful Stage!",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card-3/Card-88.webp"
}
,{
  "id": "638",
  "name": "Hatsune Miku #5",
  "series": "Vocaloid",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card-3/Card-89.webp"
}
,{
  "id": "639",
  "name": "Kaoruko Waguri #3",
  "series": "The Fragrant Flower Blooms with Dignity",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card-3/Card-9.webp"
}
,{
  "id": "640",
  "name": "Gilgamesh #1",
  "series": "Fate Series",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card-3/Card-91.webp"
}
,{
  "id": "641",
  "name": "Mash Kyrielight #1",
  "series": "Fate Series",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card-3/Card-95.webp"
}
,{
  "id": "642",
  "name": "Psylocke #4",
  "series": "Marvel Rivals",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Card-3/Card-97.webp"
},{
  "id": "643",
  "name": "Alisa Mikhailovna Kujou #10",
  "series": "Alya Sometimes Hides Her Feelings In Russian",
  "rarity": "rare,epic,legendary",
  "type": "Lunar Festival",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Lunar%20festival/Alisa-Mikhailovna-Kujou10.webp"
}
,{
  "id": "644",
  "name": "Alma #1",
  "series": "Gokurakugai",
  "rarity": "rare,epic,legendary",
  "type": "Lunar Festival",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Lunar%20festival/Alma1.webp"
}
,{
  "id": "645",
  "name": "Alpha #1",
  "series": "Punishing: Gray Raven",
  "rarity": "rare,epic,legendary",
  "type": "Lunar Festival",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Lunar%20festival/Alpha1.webp"
}
,{
  "id": "646",
  "name": "Aqua #2",
  "series": "KonoSuba: God's Blessing on This Wonderful World!",
  "rarity": "rare,epic,legendary",
  "type": "Lunar Festival",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Lunar%20festival/Aqua2.webp"
}
,{
  "id": "647",
  "name": "Artoria Pendragon #1",
  "series": "Fate Series",
  "rarity": "rare,epic,legendary",
  "type": "Lunar Festival",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Lunar%20festival/Artoria-Pendragon1.webp"
}
,{
  "id": "648",
  "name": "Bailu #1",
  "series": "Honkai Verse",
  "rarity": "rare,epic,legendary",
  "type": "Lunar Festival",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Lunar%20festival/Bailu1.webp"
}
,{
  "id": "649",
  "name": "Bambinata #1",
  "series": "Punishing: Gray Raven",
  "rarity": "rare,epic,legendary",
  "type": "Lunar Festival",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Lunar%20festival/Bambinata1-1.webp"
}
,{
  "id": "650",
  "name": "Bronya Zaychik #1",
  "series": "Honkai Verse",
  "rarity": "rare,epic,legendary",
  "type": "Lunar Festival",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Lunar%20festival/BronyaZ1.webp"
}
,{
  "id": "651",
  "name": "Chisa #1",
  "series": "Wuthering Waves",
  "rarity": "rare,epic,legendary",
  "type": "Lunar Festival",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Lunar%20festival/Chisa2.webp"
}
,{
  "id": "652",
  "name": "Cielle #1",
  "series": "Strinova",
  "rarity": "rare,epic,legendary",
  "type": "Lunar Festival",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Lunar%20festival/Cielle1.webp"
}
,{
  "id": "653",
  "name": "Dan Heng #1",
  "series": "Honkai Verse",
  "rarity": "rare,epic,legendary",
  "type": "Lunar Festival",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Lunar%20festival/DanHeng1.webp"
}
,{
  "id": "654",
  "name": "Dian Wenren #1",
  "series": "Nikki Series",
  "rarity": "rare,epic,legendary",
  "type": "Lunar Festival",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Lunar%20festival/Dian-Wenren1.webp"
}
,{
  "id": "655",
  "name": "Eileen #1",
  "series": "A-Soul",
  "rarity": "rare,epic,legendary",
  "type": "Lunar Festival",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Lunar%20festival/Eileen1.webp"
}
,{
  "id": "656",
  "name": "Emilia #4",
  "series": "Re:Zero",
  "rarity": "rare,epic,legendary",
  "type": "Lunar Festival",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Lunar%20festival/Emilia4.webp"
}
,{
  "id": "657",
  "name": "Flavia #1",
  "series": "Strinova",
  "rarity": "rare,epic,legendary",
  "type": "Lunar Festival",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Lunar%20festival/Flavia1_1.webp"
}
,{
  "id": "658",
  "name": "Frieren #2",
  "series": "Frieren: Beyond Journey's End",
  "rarity": "rare,epic,legendary",
  "type": "Lunar Festival",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Lunar%20festival/Frieren2.webp"
}
,{
  "id": "659",
  "name": "Haruka Kiritani #1",
  "series": "Project SEKAI Colorful Stage!",
  "rarity": "rare,epic,legendary",
  "type": "Lunar Festival",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Lunar%20festival/HaruKiri1.webp"
}
,{
  "id": "660",
  "name": "Hatsune Miku #6",
  "series": "Vocaloid",
  "rarity": "rare,epic,legendary",
  "type": "Lunar Festival",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Lunar%20festival/HatsuneMiku4.webp"
}
,{
  "id": "661",
  "name": "Hestia #1",
  "series": "Is It Wrong to Try to Pick Up Girls in a Dungeon?",
  "rarity": "rare,epic,legendary",
  "type": "Lunar Festival",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Lunar%20festival/Hestia1.webp"
}
,{
  "id": "662",
  "name": "Holo #2",
  "series": "Spice and Wolf",
  "rarity": "rare,epic,legendary",
  "type": "Lunar Festival",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Lunar%20festival/Holo2.webp"
}
,{
  "id": "663",
  "name": "Hotori #1",
  "series": "Neverness To Everness",
  "rarity": "rare,epic,legendary",
  "type": "Lunar Festival",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Lunar%20festival/Hotori1.webp"
}
,{
  "id": "664",
  "name": "Hu Tao #6",
  "series": "Genshin Impact",
  "rarity": "rare,epic,legendary",
  "type": "Lunar Festival",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Lunar%20festival/Hu-Tao6.webp"
}
,{
  "id": "665",
  "name": "Hua & Xie #4",
  "series": "Heaven Official's Blessing",
  "rarity": "rare,epic,legendary",
  "type": "Lunar Festival",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Lunar%20festival/Hua-X-Xie4.webp"
}
,{
  "id": "666",
  "name": "Hua & Xie #5",
  "series": "Heaven Official's Blessing",
  "rarity": "rare,epic,legendary",
  "type": "Lunar Festival",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Lunar%20festival/HuaXXie4.webp"
}
,{
  "id": "667",
  "name": "Jeanne D'arc Alter #1",
  "series": "Fate Series",
  "rarity": "rare,epic,legendary",
  "type": "Lunar Festival",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Lunar%20festival/Jeanne-Darc-Alter1.webp"
}
,{
  "id": "668",
  "name": "Jing Yuan #1",
  "series": "Honkai Verse",
  "rarity": "rare,epic,legendary",
  "type": "Lunar Festival",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Lunar%20festival/JingYuan1.webp"
},{
  "id": "669",
  "name": "Justia #1",
  "series": "Brown Dust",
  "rarity": "rare,epic,legendary",
  "type": "Lunar Festival",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Lunar%20festival/Justia1.webp"
}
,{
  "id": "670",
  "name": "Kadoc Zemlupus #1",
  "series": "Fate Series",
  "rarity": "rare,epic,legendary",
  "type": "Lunar Festival",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Lunar%20festival/Kadoc-Zemlupus1.webp"
}
,{
  "id": "671",
  "name": "Ke #1",
  "series": "Xinyue Tongxing",
  "rarity": "rare,epic,legendary",
  "type": "Lunar Festival",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Lunar%20festival/Ke1.webp"
}
,{
  "id": "672",
  "name": "Kiana Kaslana #1",
  "series": "Honkai Verse",
  "rarity": "rare,epic,legendary",
  "type": "Lunar Festival",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Lunar%20festival/KianaKaslana1.webp"
}
,{
  "id": "673",
  "name": "Klein Moretti #1",
  "series": "Lord of Mysteries",
  "rarity": "rare,epic,legendary",
  "type": "Lunar Festival",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Lunar%20festival/Klein-Moretti1.webp"
}
,{
  "id": "674",
  "name": "Lan Wangji #1",
  "series": "Grandmaster of Demonic Cultivation",
  "rarity": "rare,epic,legendary",
  "type": "Lunar Festival",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Lunar%20festival/Lan-Wangji1.webp"
}
,{
  "id": "675",
  "name": "Lucia #2",
  "series": "Punishing: Gray Raven",
  "rarity": "rare,epic,legendary",
  "type": "Lunar Festival",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Lunar%20festival/Lucia2.webp"
}
,{
  "id": "676",
  "name": "Luming #1",
  "series": "Nikki Series",
  "rarity": "rare,epic,legendary",
  "type": "Lunar Festival",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Lunar%20festival/Luming1.webp"
}
,{
  "id": "677",
  "name": "Luna #1",
  "series": "Punishing: Gray Raven",
  "rarity": "rare,epic,legendary",
  "type": "Lunar Festival",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Lunar%20festival/Luna1.webp"
}
,{
  "id": "678",
  "name": "Mahiru Shiina #6",
  "series": "The Angel Next Door Spoils Me Rotten",
  "rarity": "rare,epic,legendary",
  "type": "Lunar Festival",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Lunar%20festival/Mahiru-Shiina4.webp"
}
,{
  "id": "679",
  "name": "Maria Mikhailova Kujou #6",
  "series": "Alya Sometimes Hides Her Feelings In Russian",
  "rarity": "rare,epic,legendary",
  "type": "Lunar Festival",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Lunar%20festival/Maria-Mikhailova-Kujou6.webp"
}
,{
  "id": "680",
  "name": "Nagisa Kamishiro #1",
  "series": "Persona Series",
  "rarity": "rare,epic,legendary",
  "type": "Lunar Festival",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Lunar%20festival/Nagisa1_1.webp"
}
,{
  "id": "681",
  "name": "Natalia #1",
  "series": "Shine Post",
  "rarity": "rare,epic,legendary",
  "type": "Lunar Festival",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Lunar%20festival/Natalia1.webp"
}
,{
  "id": "682",
  "name": "Nebris #1",
  "series": "Brown Dust",
  "rarity": "rare,epic,legendary",
  "type": "Lunar Festival",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Lunar%20festival/Nebris1.webp"
}
,{
  "id": "683",
  "name": "Nene Yashiro #2",
  "series": "Toilet-Bound Hanako-kun",
  "rarity": "rare,epic,legendary",
  "type": "Lunar Festival",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Lunar%20festival/Nene-Yashiro_2.webp"
}
,{
  "id": "684",
  "name": "Nikki #1",
  "series": "Nikki Series",
  "rarity": "rare,epic,legendary",
  "type": "Lunar Festival",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Lunar%20festival/Nikki1.webp"
}
,{
  "id": "685",
  "name": "Osamu Dazai #1",
  "series": "Bungo Stray Dogs",
  "rarity": "rare,epic,legendary",
  "type": "Lunar Festival",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Lunar%20festival/Osamu-Dazai1.webp"
}
,{
  "id": "686",
  "name": "Raiden Mei #1",
  "series": "Honkai Verse",
  "rarity": "rare,epic,legendary",
  "type": "Lunar Festival",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Lunar%20festival/RaidenM1.webp"
}
,{
  "id": "687",
  "name": "Ram #1",
  "series": "Re:Zero",
  "rarity": "rare,epic,legendary",
  "type": "Lunar Festival",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Lunar%20festival/Ram1.webp"
}
,{
  "id": "688",
  "name": "Ram #2",
  "series": "Re:Zero",
  "rarity": "rare,epic,legendary",
  "type": "Lunar Festival",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Lunar%20festival/Ram2.webp"
}
,{
  "id": "689",
  "name": "Rem #3",
  "series": "Re:Zero",
  "rarity": "rare,epic,legendary",
  "type": "Lunar Festival",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Lunar%20festival/Rem1.webp"
}
,{
  "id": "690",
  "name": "Reshra Hanamaki #1",
  "series": "Vtubers & Youtubers",
  "rarity": "rare,epic,legendary",
  "type": "Lunar Festival",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Lunar%20festival/ReshraHana1.webp"
}
,{
  "id": "691",
  "name": "Shen Qiao #1",
  "series": "Thousand Autumns",
  "rarity": "rare,epic,legendary",
  "type": "Lunar Festival",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Lunar%20festival/Shen-Qiao1.webp"
}
,{
  "id": "692",
  "name": "Shenhe #2",
  "series": "Genshin Impact",
  "rarity": "rare,epic,legendary",
  "type": "Lunar Festival",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Lunar%20festival/Shenhe2.webp"
}
,{
  "id": "693",
  "name": "Shion Suminoe #1",
  "series": "Dolphin Wave",
  "rarity": "rare,epic,legendary",
  "type": "Lunar Festival",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Lunar%20festival/Shion-Suminoe1.webp"
}
,{
  "id": "694",
  "name": "Tao #1",
  "series": "Gokurakugai",
  "rarity": "rare,epic,legendary",
  "type": "Lunar Festival",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Lunar%20festival/Tao1.webp"
}
,{
  "id": "695",
  "name": "Wei Wuxian #1",
  "series": "Grandmaster of Demonic Cultivation",
  "rarity": "rare,epic,legendary",
  "type": "Lunar Festival",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Lunar%20festival/Wei-Wuxian1.webp"
}
,{
  "id": "696",
  "name": "Yae Sakura #3",
  "series": "Honkai Verse",
  "rarity": "rare,epic,legendary",
  "type": "Lunar Festival",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Lunar%20festival/YaeSakura3.webp"
}
,{
  "id": "697",
  "name": "Yan Wushi #1",
  "series": "Thousand Autumns",
  "rarity": "rare,epic,legendary",
  "type": "Lunar Festival",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Lunar%20festival/Yan-Wushi1.webp"
}
,{
  "id": "698",
  "name": "Yoimiya #1",
  "series": "Genshin Impact",
  "rarity": "rare,epic,legendary",
  "type": "Lunar Festival",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Lunar%20festival/-Yoimiya-1.webp"
}
,{
  "id": "699",
  "name": "Tohka Yatogami #1",
  "series": "Date A Live",
  "rarity": "celestial",
  "type": "Lunar Festival",
  "source": "Official Art |Made By » its_slept",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Err-idk-@main/Lunar%20festival/Tohka-lunar.webp"
}
,{
  "id": "700",
  "name": "Ai & Ruby & Aqua #1",
  "series": "Oshi no Ko",
  "rarity": "celestial",
  "type": "Lunar Festival",
  "source": "Official Art |Made By » im_down_bad",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Err-idk-@main/Lunar%20festival/ai%26ruby%26aqua-lunar.webp"
}
,{
  "id": "701",
  "name": "Alisa Mikhailovna Kujou #11",
  "series": "Alya Sometimes Hides Her Feelings In Russian",
  "rarity": "ultimate",
  "type": "Lunar Festival",
  "source": "Official Art |Made By » its_slept",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Err-idk-@main/Lunar%20festival/alya-lunar.webp"
}
,{
  "id": "702",
  "name": "Chuuya Nakahara #1",
  "series": "Bungo Stray Dogs",
  "rarity": "celestial",
  "type": "Lunar Festival",
  "source": "Official Art |Made By » im_down_bad",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Err-idk-@main/Lunar%20festival/chuuya-lunar.webp"
}
,{
  "id": "703",
  "name": "Osamu Dazai #2",
  "series": "Bungo Stray Dogs",
  "rarity": "ultimate",
  "type": "Lunar Festival",
  "source": "Official Art |Made By » its_slept",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Err-idk-@main/Lunar%20festival/dazai-lunar.webp"
}
,{
  "id": "704",
  "name": "Edgar Allan Poe #1",
  "series": "Bungo Stray Dogs",
  "rarity": "celestial",
  "type": "Lunar Festival",
  "source": "Official Art |Made By » im_down_bad",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Err-idk-@main/Lunar%20festival/edgar-lunar.webp"
}
,{
  "id": "705",
  "name": "Kiana Kaslana #2",
  "series": "Honkai Verse",
  "rarity": "celestial",
  "type": "Lunar Festival",
  "source": "Official Art |Made By » im_down_bad",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Err-idk-@main/Lunar%20festival/kiana-lunar.webp"
}
,{
  "id": "706",
  "name": "Maomao #7",
  "series": "The Apothecary Diaries",
  "rarity": "godly",
  "type": "Lunar Festival",
  "source": "Official Art |Made By » its_slept",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Err-idk-@main/Lunar%20festival/maomao7.webp"
},{
  "id": "707",
  "name": "Ada Wong #1",
  "series": "Resident Evil Franchise",
  "rarity": "ultimate",
  "type": "Permanent",
  "source": "Official Art |Made By » its_slept",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Idk@main/Permanent/AdaWong%20-%201.webp"
},
  {
  "id": "708",
  "name": "Shiho Hinomori #1",
  "series": "Project SEKAI Colorful Stage!",
  "rarity": "celestial",
  "type": "Permanent",
  "source": "Official Art|Made By » kronell",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/3D/shiho1.webp"
},{
  "id": "709",
  "name": "Elysia #1",
  "series": "Honkai Verse",
  "rarity": "celestial",
  "type": "Permanent",
  "source": "Official Art|Made By » .luckysoul",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/3D/elysia1.webp"
},{
  "id": "710",
  "name": "Esdeath #1",
  "series": "Akame Ga Kill",
  "rarity": "celestial",
  "type": "Permanent",
  "source": "Official Art|Made By » its_slept",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/3D/esdeath1.webp"
},{
  "id": "711",
  "name": "Nene Kusanagi #1",
  "series": "Project SEKAI Colorful Stage!",
  "rarity": "celestial",
  "type": "Permanent",
  "source": "Official Art|Made By » kronell",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/3D/nenekusnagi1.webp"
},{
  "id": "712",
  "name": "Kana & Melody #1",
  "series": "Oshi no Ko",
  "rarity": "ultimate",
  "type": "Permanent Duo",
  "source": "Official Art|Made By » its_slept",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/3D/kanaoshi2.webp"
},
{
  "id": "713",
  "name": "Yae & Raiden #1",
  "series": "Genshin Impact",
  "rarity": "ultimate",
  "type": "Permanent Duo",
  "source": "Official Art|Made By ➺ im_down_bad",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/3D/yae%26ei1.webp"
}
,{
  "id": "714",
  "name": "Jellal Fernandes #1",
  "series": "Fairy Tail",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-4/Jellal-Fernandes1.webp"
},{
  "id": "715",
  "name": "Venti #1",
  "series": "Genshin Impact",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-4/venti1.webp"
},{
  "id": "716",
  "name": "Lucy Heartfilia #2",
  "series": "Fairy Tail",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-4/Lucy-Heartfilia2.webp"
},{
  "id": "717",
  "name": "Mirajane Strauss #1",
  "series": "Fairy Tail",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-4/Mirajane-Strauss1.webp"
},{
  "id": "718",
  "name": "Yor Briar #2",
  "series": "Spy x Family",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-4/yorbriar2.webp"
},{
  "id": "719",
  "name": "Wendy Marvell #1",
  "series": "Fairy Tail",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-4/Wendy-Marvell1.webp"
},{
  "id": "720",
  "name": "Mavis Vermillion #1",
  "series": "Fairy Tail",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-4/Mavis-Vermillion1.webp"
},{
  "id": "721",
  "name": "Natsu Dragneel #1",
  "series": "Fairy Tail",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-4/Natsu-Dragneel1.webp"
},{
  "id": "722",
  "name": "Rem #4",
  "series": "Re:Zero",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-4/Rem4.webp"
},{
  "id": "723",
  "name": "Laxus Dreyar #1",
  "series": "Fairy Tail",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-4/Laxus-Dreyar1.webp"
},{
  "id": "724",
  "name": "Power #1",
  "series": "Chainsaw Man",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-4/power.webp"
},{
  "id": "725",
  "name": "Yumemi Yumemite #1",
  "series": "Kakegurui",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-4/Yumemi_Yumemite.webp"
},{
  "id": "726",
  "name": "Hanabusa Lisa #1",
  "series": "Virtual eSports Project!",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-4/Hanabusa-Lisa1.webp"
},{
  "id": "727",
  "name": "Hanabusa Lisa #2",
  "series": "Virtual eSports Project!",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-4/Hanabusa-Lisa2.webp"
},{
  "id": "728",
  "name": "Kaminari Qp #1",
  "series": "Virtual eSports Project!",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-4/KaminariQp1.webp"
},{
  "id": "729",
  "name": "Noah Kurumi #2",
  "series": "Virtual eSports Project!",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-4/NoahKurumi2.webp"
},{
  "id": "730",
  "name": "Zhongli #1",
  "series": "Genshin Impact",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-4/zhongli1.webp"
},{
  "id": "731",
  "name": "The Herta #1",
  "series": "Honkai Verse",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-4/TheHerta1.webp"
},{
  "id": "732",
  "name": "Herta #1",
  "series": "Honkai Verse",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-4/Herta1.webp"
},{
  "id": "733",
  "name": "Raiden Shogun #2",
  "series": "Genshin Impact",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-4/RaidenShogun1.webp"
},{
  "id": "734",
  "name": "Reze #1",
  "series": "Chainsaw Man",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-4/reze1.webp"
},{
  "id": "735",
  "name": "Nahida #1",
  "series": "Genshin Impact",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-4/Nahida2-1.webp"
},{
  "id": "736",
  "name": "Moona Hoshinova #2",
  "series": "Hololive",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-4/MoonaHoshinova2.webp"
},{
  "id": "737",
  "name": "Ikari Shinji #1",
  "series": "Neon Genesis Evangelion",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-4/IkariShinji1.webp"
},{
  "id": "738",
  "name": "Amane Suzuha #1",
  "series": "Steins;Gate",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-4/AmaneSuzuha1.webp"
},{
  "id": "739",
  "name": "Yumeko Jabami #1",
  "series": "Kakegurui",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-4/yumekoJabami1.webp"
},{
  "id": "740",
  "name": "Noelle #1",
  "series": "Genshin Impact",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-4/Noelle1.webp"
},{
  "id": "741",
  "name": "Mavuika #1",
  "series": "Genshin Impact",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-4/mavuika1_1.webp"
},{
  "id": "742",
  "name": "Cheval Grand #1",
  "series": "Umamusume: Pretty Derby",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-4/ChevalGrand1.webp"
},{
  "id": "743",
  "name": "Himmel #1",
  "series": "Frieren: Beyond Journey's End",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-4/Himmel1.webp"
},{
  "id": "744",
  "name": "Shinomiya Runa #1",
  "series": "Virtual eSports Project!",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-4/ShinomiyaRuna2.webp"
},{
  "id": "745",
  "name": "Yakumo Beni #1",
  "series": "Virtual eSports Project!",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-4/YakumoBeni1.webp"
},{
  "id": "746",
  "name": "Kaminari Qpi #1",
  "series": "Virtual eSports Project!",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-4/Kaminari-Qpi1.webp"
},{
  "id": "747",
  "name": "Tachibana Hinano #1",
  "series": "Virtual eSports Project!",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-4/Tachibana-Hinano1.webp"
},{
  "id": "748",
  "name": "Kisaragi Ren #1",
  "series": "Virtual eSports Project!",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-4/Kisaragi-Ren1.webp"
},{
  "id": "749",
  "name": "Asumi Sena #1",
  "series": "Virtual eSports Project!",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-4/Asumi-Sena1.webp"
},{
  "id": "750",
  "name": "Tachibana Hinano #2",
  "series": "Virtual eSports Project!",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-4/Tachibana-Hinano2.webp"
},{
  "id": "751",
  "name": "Cerydra #1",
  "series": "Honkai Verse",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-4/Cerydra1.webp"
},{
  "id": "752",
  "name": "Light Yagami #1",
  "series": "Death Note",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-4/Light-Yagami1.webp"
},{
  "id": "753",
  "name": "Asumi Sena #2",
  "series": "Virtual eSports Project!",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-4/Asumi-Sena2.webp"
},{
  "id": "754",
  "name": "Hanamiya Rica #1",
  "series": "Utaite",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-4/Hanamiya-Rica1.webp"
},{
  "id": "755",
  "name": "Akuma Nihmune #1",
  "series": "Vtubers & Youtubers",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-4/Akuma-Nihmune1.webp"
},{
  "id": "756",
  "name": "Akuma Nihmune #2",
  "series": "Vtubers & Youtubers",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-4/Akuma-Nihmune2.webp"
},{
  "id": "757",
  "name": "Camila #1",
  "series": "Vtubers & Youtubers",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-4/Camila1.webp"
},{
  "id": "758",
  "name": "Kisaragi Ren #2",
  "series": "Virtual eSports Project!",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-4/KisaragiRen2.webp"
},{
  "id": "759",
  "name": "Cantarella #1",
  "series": "Wuthering Waves",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-4/Cantarella1.webp"
},{
  "id": "760",
  "name": "Qiao Ling #2",
  "series": "Link Click",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-4/QiaoLing2.webp"
},{
  "id": "761",
  "name": "Sung Jin Woo #2",
  "series": "Solo Leveling",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-4/SunJin-Woo2.webp"
},{
  "id": "762",
  "name": "Sunday #6",
  "series": "Honkai Verse",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-4/Sunday6.webp"
}
,{
  "id": "763",
  "name": "Endministrator #1",
  "series": "Arknights: Endfield",
  "rarity": "ultimate",
  "type": "Permanent",
  "source": "Official Art|Made By ➺ kronell",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/3D/Endminstrator1.webp"
}
,{
  "id": "306",
  "name": "Raiden Mei #2",
  "series": "Honkai Verse",
  "rarity": "ultimate",
  "type": "Permanent",
  "source": "Official Art|Made By ➺ .luckysoul",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/3D/raidenmei2.webp"
},{
  "id": "765",
  "name": "Michi Mochievee #1",
  "series": "Vtubers & Youtubers",
  "rarity": "celestial",
  "type": "Permanent",
  "source": "Official Art|Made By ➺ Slept & Mid",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/3D/michi1.webp"
},{
  "id": "766",
  "name": "Isaki Riona #2",
  "series": "Hololive",
  "rarity": "ultimate",
  "type": "Permanent",
  "source": "Official Art|Made By ➺ its_slept",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/3D/isaki1.webp"
},{
  "id": "767",
  "name": "Ochako Uraraka #1",
  "series": "My Hero Academia",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "obtainedBy": "roll,item",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-5/OchakoUraraka1.webp"
}
,{
  "id": "768",
  "name": "Ochako Uraraka #2",
  "series": "My Hero Academia",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "obtainedBy": "roll,item",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-5/OchakoUraraka2.webp"
}
,{
  "id": "769",
  "name": "Ochako Uraraka #3",
  "series": "My Hero Academia",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "obtainedBy": "roll,item",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-5/OchakoUraraka3.webp"
}
,{
  "id": "770",
  "name": "Katsuki Bakugou #1",
  "series": "My Hero Academia",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "obtainedBy": "roll,item",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-5/KatsukiBakugou1.webp"
}
,{
  "id": "771",
  "name": "Katsuki Bakugou #2",
  "series": "My Hero Academia",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "obtainedBy": "roll,item",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-5/KatsukiBakugou2.webp"
}
,{
  "id": "772",
  "name": "Kyoka Jiro #1",
  "series": "My Hero Academia",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "obtainedBy": "roll,item",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-5/KyokaJiro1_1.webp"
}
,{
  "id": "773",
  "name": "Endeavor #1",
  "series": "My Hero Academia",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "obtainedBy": "roll,item",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-5/Endeavor1.webp"
}
,{
  "id": "774",
  "name": "Shinsou Hitoshi #1",
  "series": "My Hero Academia",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "obtainedBy": "roll,item",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-5/ShinsouHitoshi1.webp"
}
,{
  "id": "775",
  "name": "Levi Ackerman #5",
  "series": "Attack on Titan",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "obtainedBy": "roll,item",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-5/LeviAckerman1.webp"
}
,{
  "id": "776",
  "name": "Armin Arlert #1",
  "series": "Attack on Titan",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "obtainedBy": "roll,item",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-5/ArminArlert1.webp"
}
,{
  "id": "777",
  "name": "Eren Yeager #4",
  "series": "Attack on Titan",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "obtainedBy": "roll,item",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-5/ErenYeager4.webp"
}
,{
  "id": "778",
  "name": "Megumi Fushiguro #1",
  "series": "Jujutsu Kaisen",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "obtainedBy": "roll,item",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-5/MegumiFushiguro1.webp"
}
,{
  "id": "779",
  "name": "Yuji Itadori #2",
  "series": "Jujutsu Kaisen",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "obtainedBy": "roll,item",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-5/YuujiItadori1.webp"
}
,{
  "id": "780",
  "name": "Shinobu Kocho #2",
  "series": "Demon Slayer",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "obtainedBy": "roll,item",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-5/ShinobuKochou2.webp"
}
,{
  "id": "781",
  "name": "Rengoku Kyojuro #1",
  "series": "Demon Slayer",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "obtainedBy": "roll,item",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-5/RengokuKyojuro2.webp"
}
,{
  "id": "782",
  "name": "Makima #2",
  "series": "Chainsaw Man",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "obtainedBy": "roll,item",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-5/Makima2.webp"
}
,{
  "id": "783",
  "name": "Fubuki #1",
  "series": "One Punch Man",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "obtainedBy": "roll,item",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-5/fubuki1.webp"
}
,{
  "id": "784",
  "name": "Fubuki #2",
  "series": "One Punch Man",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "obtainedBy": "roll,item",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-5/Fubuki2.webp"
}
,{
  "id": "785",
  "name": "Shishiro Botan #1",
  "series": "Hololive",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "obtainedBy": "roll,item",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-5/shishirobotan1.webp"
}
,{
  "id": "786",
  "name": "Amane Kanata #1",
  "series": "Hololive",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "obtainedBy": "roll,item",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-5/Amane-Kanata1.webp"
}
,{
  "id": "787",
  "name": "Ironmouse #1",
  "series": "Vtubers & Youtubers",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "obtainedBy": "roll,item",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-5/Ironmouse1.webp"
}
,{
  "id": "788",
  "name": "Zentreya #1",
  "series": "Vtubers & Youtubers",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "obtainedBy": "roll,item",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-5/Zentreya1.webp"
}
,{
  "id": "789",
  "name": "Projekt Melody #1",
  "series": "Vtubers & Youtubers",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "obtainedBy": "roll,item",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-5/Projekt-Melody1.webp"
}
,{
  "id": "790",
  "name": "Nyanners #1",
  "series": "Vtubers & Youtubers",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "obtainedBy": "roll,item",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-5/Nyanners1.webp"
}
,{
  "id": "791",
  "name": "Nyanners #2",
  "series": "Vtubers & Youtubers",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "obtainedBy": "roll,item",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-5/Nyanners2.webp"
}
,{
  "id": "792",
  "name": "Froot #1",
  "series": "Vtubers & Youtubers",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "obtainedBy": "roll,item",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-5/Froot1.webp"
}
,{
  "id": "793",
  "name": "Silvervale #1",
  "series": "Vtubers & Youtubers",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "obtainedBy": "roll,item",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-5/Silvervale1.webp"
}
,{
  "id": "794",
  "name": "Pipkin Pippa #2",
  "series": "Vtubers & Youtubers",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "obtainedBy": "roll,item",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-5/Pipkin-Pippa2.webp"
}
,{
  "id": "795",
  "name": "Hysilens #1",
  "series": "Honkai Verse",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "obtainedBy": "roll,item",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-5/Hysilens1.webp"
}
,{
  "id": "796",
  "name": "Hysilens #2",
  "series": "Honkai Verse",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "obtainedBy": "roll,item",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-5/Hysilens2.webp"
}
,{
  "id": "797",
  "name": "Shylily #1",
  "series": "Vtubers & Youtubers",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "obtainedBy": "roll,item",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-5/Shylily1.webp"
}
,{
  "id": "798",
  "name": "Bao #1",
  "series": "Vtubers & Youtubers",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "obtainedBy": "roll,item",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-5/Bao2.webp"
}
,{
  "id": "799",
  "name": "Tenma Maemi #1",
  "series": "Vtubers & Youtubers",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "obtainedBy": "roll,item",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-5/Tenma_Maemi1.webp"
}
,{
  "id": "800",
  "name": "Laimu #1",
  "series": "Vtubers & Youtubers",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "obtainedBy": "roll,item",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-5/Laimu1.webp"
}
,{
  "id": "801",
  "name": "Laimu #2",
  "series": "Vtubers & Youtubers",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "obtainedBy": "roll,item",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-5/Laimu2.webp"
}
,{
  "id": "802",
  "name": "Sameko Saba #1",
  "series": "Vtubers & Youtubers",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "obtainedBy": "roll,item",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-5/Sameko-Saba1.webp"
}
,{
  "id": "803",
  "name": "Dokibird #1",
  "series": "Vtubers & Youtubers",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "obtainedBy": "roll,item",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-5/Dokibird1.webp"
}
,{
  "id": "804",
  "name": "Dokibird #2",
  "series": "Vtubers & Youtubers",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "obtainedBy": "roll,item",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-5/Dokibird2.webp"
}
,{
  "id": "805",
  "name": "Henya the Genius #1",
  "series": "Vtubers & Youtubers",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "obtainedBy": "roll,item",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-5/Henya-the-Genius1.webp"
}
,{
  "id": "806",
  "name": "Henya the Genius #2",
  "series": "Vtubers & Youtubers",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "obtainedBy": "roll,item",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-5/Henya-the-Genius2.webp"
}
,{
  "id": "807",
  "name": "Camila #2",
  "series": "Vtubers & Youtubers",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "obtainedBy": "roll,item",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-5/Camila2.webp"
}
,{
  "id": "808",
  "name": "Amalee #1",
  "series": "Vtubers & Youtubers",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "obtainedBy": "roll,item",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-5/Amalee1.webp"
}
,{
  "id": "809",
  "name": "Jill Valentine #1",
  "series": "Resident Evil Franchise",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "obtainedBy": "roll,item",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-5/JillValentine1.webp"
}
,{
  "id": "810",
  "name": "Chris Redfield #1",
  "series": "Resident Evil Franchise",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "obtainedBy": "roll,item",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-5/ChrisRedfield1.webp"
}
,{
  "id": "811",
  "name": "Leon S. Kennedy #1",
  "series": "Resident Evil Franchise",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "obtainedBy": "roll,item",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-5/leons.kennedy2.webp"
}
,{
  "id": "812",
  "name": "Claire Redfield #1",
  "series": "Resident Evil Franchise",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "obtainedBy": "roll,item",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-5/ClaireRedfield1.webp"
}
,{
  "id": "813",
  "name": "Ada Wong #2",
  "series": "Resident Evil Franchise",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "obtainedBy": "roll,item",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-5/AdaWong2.webp"
}
,{
  "id": "814",
  "name": "Ada Wong #3",
  "series": "Resident Evil Franchise",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "obtainedBy": "roll,item",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-5/AdaWong3.webp"
}
,{
  "id": "815",
  "name": "Ada Wong #4",
  "series": "Resident Evil Franchise",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "obtainedBy": "roll,item",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-5/AdaWong4.webp"
}
,{
  "id": "816",
  "name": "Grace Ashcroft #1",
  "series": "Resident Evil Franchise",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "obtainedBy": "roll,item",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-5/GraceAshcroft1.webp"
}
,{
  "id": "817",
  "name": "Raiden Mei #3",
  "series": "Honkai Verse",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "obtainedBy": "roll,item",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-5/RaidenMei2-1.webp"
}
,{
  "id": "818",
  "name": "Raiden Mei #4",
  "series": "Honkai Verse",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "obtainedBy": "roll,item",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-5/RaidenMei3.webp"
}
,{
  "id": "819",
  "name": "Bronya Zaychik #2",
  "series": "Honkai Verse",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "obtainedBy": "roll,item",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-5/Bronya-Zaychik1.webp"
}
,{
  "id": "820",
  "name": "Keqing #2",
  "series": "Genshin Impact",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "obtainedBy": "roll,item",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-5/Keqing2.webp"
}
,{
  "id": "821",
  "name": "Burnice #1",
  "series": "Zenless Zone Zero",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "obtainedBy": "roll,item",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-5/Burnice1.webp"
}
,{
  "id": "822",
  "name": "Sunna #1",
  "series": "Zenless Zone Zero",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "obtainedBy": "roll,item",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-5/Sunna1.webp"
}
,{
  "id": "823",
  "name": "Lilia Vanrouge #1",
  "series": "Twisted Wonderland",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "obtainedBy": "roll,item",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-5/LiliaVanrouge1.webp"
}
,{
  "id": "824",
  "name": "Ortho Shroud #1",
  "series": "Twisted Wonderland",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "obtainedBy": "roll,item",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-5/OrthoShroud1.webp"
}
,{
  "id": "825",
  "name": "Dire Crowley #1",
  "series": "Twisted Wonderland",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "obtainedBy": "roll,item",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-5/DireCrowley1.webp"
}
,{
  "id": "826",
  "name": "Fyodor Dostoyevsky #1",
  "series": "Bungo Stray Dogs",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "obtainedBy": "roll,item",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-5/Fyodor-Dostoyevsky1.webp"
}
,{
  "id": "827",
  "name": "Lu Guang #2",
  "series": "Link Click",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "obtainedBy": "roll,item",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-5/LuGuang2.webp"
}
,{
  "id": "828",
  "name": "Cheng Xiaoshi #2",
  "series": "Link Click",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "obtainedBy": "roll,item",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-5/ChengXiaoshi2.webp"
}
,{
  "id": "829",
  "name": "Yoru #1",
  "series": "Valorant",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "obtainedBy": "roll,item",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-5/Yoru1.webp"
}
,{
  "id": "830",
  "name": "Monika #1",
  "series": "Doki Doki Literature Club",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "obtainedBy": "roll,item",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-5/Monika1.webp"
}
,{
  "id": "831",
  "name": "Alice #1",
  "series": "Sword Art Online",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "obtainedBy": "roll,item",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-5/Alice1.webp"
}
,{
  "id": "832",
  "name": "Sakura Haruno #1",
  "series": "Naruto & Boruto Series",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "obtainedBy": "roll,item",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-5/SakuraHaruno1.webp"
}
,{
  "id": "833",
  "name": "Marin Kitagawa #6",
  "series": "My Dress-Up Darling",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "obtainedBy": "roll,item",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-5/MarinKitagawa7.webp"
}
,{
  "id": "834",
  "name": "Chizuru Mizuhara #1",
  "series": "Rent a Girlfriend",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "obtainedBy": "roll,item",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-5/Chizuru-Mizuhara1.webp"
}
,{
  "id": "835",
  "name": "Chizuru Mizuhara #2",
  "series": "Rent a Girlfriend",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "obtainedBy": "roll,item",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-5/Chizuru-Mizuhara3.webp"
}
,{
  "id": "836",
  "name": "Kurumi Tokisaki #9",
  "series": "Date A Live",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "obtainedBy": "roll,item",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-5/KurumiTokisaki8.webp"
}
,{
  "id": "837",
  "name": "Nene Yashiro #3",
  "series": "Toilet-Bound Hanako-kun",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "obtainedBy": "roll,item",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-5/Nene_-Yashiro3.webp"
}
,{
  "id": "838",
  "name": "Alisa Mikhailovna Kujou #12",
  "series": "Alya Sometimes Hides Her Feelings In Russian",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "obtainedBy": "roll,item",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-5/Alya14.webp"
}
,{
  "id": "839",
  "name": "Ena Shinonome #2",
  "series": "Project SEKAI Colorful Stage!",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "obtainedBy": "roll,item",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-5/EnaShinonome2.webp"
}
,{
  "id": "840",
  "name": "Minori Hanasato #1",
  "series": "Project SEKAI Colorful Stage!",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "obtainedBy": "roll,item",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-5/MinoriHanasato1.webp"
}
,{
  "id": "841",
  "name": "Saki Tenma #2",
  "series": "Project SEKAI Colorful Stage!",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "obtainedBy": "roll,item",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-5/SakiTenma2.webp"
}
,{
  "id": "842",
  "name": "Cha Hae-In #1",
  "series": "Solo Leveling",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "obtainedBy": "roll,item",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-5/ChaHae-In1.webp"
}
,{
  "id": "843",
  "name": "Cid Kagenou #3",
  "series": "The Eminence in Shadow",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "obtainedBy": "roll,item",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-5/CidKagenou4.webp"
}
,{
  "id": "844",
  "name": "Amada Ken #1",
  "series": "Persona Series",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "obtainedBy": "roll,item",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-5/Amada-Ken1.webp"
}
,{
  "id": "845",
  "name": "Minerva Orland #1",
  "series": "Re:Zero",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "obtainedBy": "roll,item",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-5/MinervaOrland1.webp"
}
,{
  "id": "846",
  "name": "Mahiru Shiina #7",
  "series": "The Angel Next Door Spoils Me Rotten",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "obtainedBy": "roll,item",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-5/MahiruShiina1.webp"
}
,{
  "id": "847",
  "name": "Rubuska #1",
  "series": "Reverse:1999",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "obtainedBy": "roll,item",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-5/Rubuska1.webp"
}
,{
  "id": "848",
  "name": "Vonnegut #1",
  "series": "Reverse:1999",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "obtainedBy": "roll,item",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-5/Vonnegut1.webp"
}
,{
  "id": "849",
  "name": "Martha Behamfil #1",
  "series": "Identity Franchise",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "obtainedBy": "roll,item",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-5/MarthaBehamfil1.webp"
}
,{
  "id": "850",
  "name": "Olivia Berry #1",
  "series": "Cyanotype Daydream",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "obtainedBy": "roll,item",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-5/OliviaBerry1.webp"
}
,{
  "id": "851",
  "name": "Olivia Lanze #1",
  "series": "The Demon Prince Goes to the Academy",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "obtainedBy": "roll,item",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-5/OliviaLanze1.webp"
}
,{
  "id": "852",
  "name": "Shimizu Hinako #1",
  "series": "Silent Hill f",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "obtainedBy": "roll,item",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-5/ShimizuHinako1.webp"
}
,{
  "id": "853",
  "name": "Tendo Hoshine #1",
  "series": "After I Was Confessed To, The Young Lady Looked Strange",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "obtainedBy": "roll,item",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-5/TendoHoshine1.webp"
}
,{
  "id": "854",
  "name": "Female Endministrator #1",
  "series": "Arknights: Endfield",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "obtainedBy": "roll,item",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-5/Female-Endministrator1.webp"
}
,{
  "id": "855",
  "name": "Valier Junior #1",
  "series": "The Demon Prince Goes To The Academy",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "obtainedBy": "roll,item",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-5/Valier-Junior1.webp"
}
,{
  "id": "856",
  "name": "Quincy #1",
  "series": "NU: Carnival",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "obtainedBy": "roll,item",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-5/Quincy1.webp"
}
,{
  "id": "857",
  "name": "Quincy #2",
  "series": "NU: Carnival",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "obtainedBy": "roll,item",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-5/Quincy2.webp"
}
,{
  "id": "858",
  "name": "Kagura #1",
  "series": "KaguRai: Kagura & Raito",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "obtainedBy": "roll,item",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-5/Kagura1.webp"
}
,{
  "id": "859",
  "name": "Lilith #2",
  "series": "Punishing: Gray Raven",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "obtainedBy": "roll,item",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-5/Lilith1.webp"
}
,{
  "id": "860",
  "name": "Megurine Luka #1",
  "series": "Vocaloid",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "obtainedBy": "roll,item",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-5/megurineluka1.webp"
}
,{
  "id": "861",
  "name": "Ado #3",
  "series": "Utaite",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "obtainedBy": "roll,item",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-5/Ado3.webp"
}
,{
  "id": "862",
  "name": "Ado #4",
  "series": "Utaite",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "obtainedBy": "roll,item",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-5/Ado4.webp"
}
,{
  "id": "863",
  "name": "Ado #5",
  "series": "Utaite",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "obtainedBy": "roll,item",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-5/Ado5.webp"
}
,{
  "id": "864",
  "name": "Ado #6",
  "series": "Utaite",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "obtainedBy": "roll,item",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-5/Ado6.webp"
}
,{
  "id": "865",
  "name": "Beelzebub #3",
  "series": "Obey Me",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "obtainedBy": "roll,item",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-5/Beelzebub3.webp"
}
,{
  "id": "866",
  "name": "Lu Guang #3",
  "series": "Link Click",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "obtainedBy": "roll,item",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-5/LuGuang3.webp"
}
,{
  "id": "867",
  "name": "Medea Solon #1",
  "series": "Your Throne",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "obtainedBy": "roll,item",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-5/MedeaSolon1.webp"
}
,{
  "id": "868",
  "name": "Himeno #1",
  "series": "Chainsaw Man",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "obtainedBy": "roll,item",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-5/Himeno1.webp"
}
,{
  "id": "869",
  "name": "Undertaker #1",
  "series": "Black Butler",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "obtainedBy": "roll,item",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-5/Undertaker1.webp"
}
,{
  "id": "870",
  "name": "Ryomen Sukuna #1",
  "series": "Jujutsu Kaisen",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "obtainedBy": "roll,item",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-5/SukunaRyomen1.webp"
}
,{
  "id": "871",
  "name": "Yakumo #1",
  "series": "NU: Carnival",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "obtainedBy": "roll,item",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-5/Yakumo1.webp"
}
,{
  "id": "872",
  "name": "Aster #1",
  "series": "NU: Carnival",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "obtainedBy": "roll,item",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-5/Aster1.webp"
}
,{
  "id": "873",
  "name": "Rei #1",
  "series": "NU: Carnival",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "obtainedBy": "roll,item",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-5/Rei1.webp"
}
,{
  "id": "874",
  "name": "Dante #1",
  "series": "NU: Carnival",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "obtainedBy": "roll,item",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-5/Dante1_1.webp"
}
,{
  "id": "875",
  "name": "Blade #1",
  "series": "NU: Carnival",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "obtainedBy": "roll,item",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-5/Blade1.webp"
}
,{
  "id": "876",
  "name": "Kuya #1",
  "series": "NU: Carnival",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "obtainedBy": "roll,item",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-5/Kuya1.webp"
}
,{
  "id": "877",
  "name": "Olivine #1",
  "series": "NU: Carnival",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "obtainedBy": "roll,item",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-5/Olivine1.webp"
}
,{
  "id": "878",
  "name": "Garu #1",
  "series": "NU: Carnival",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "obtainedBy": "roll,item",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-5/Garu1.webp"
}
,{
  "id": "879",
  "name": "Ishmael #1",
  "series": "Limbus Company",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "obtainedBy": "roll,item",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-5/Ishmael1.webp"
}
,{
  "id": "880",
  "name": "Ishmael #2",
  "series": "Limbus Company",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "obtainedBy": "roll,item",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-5/Ishmael2.webp"
}
,{
  "id": "881",
  "name": "Klein Moretti #2",
  "series": "Lord of Mysteries",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "obtainedBy": "roll,item",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-5/KleinMoretti2.webp"
}
,{
  "id": "882",
  "name": "Klein Moretti #3",
  "series": "Lord of Mysteries",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "obtainedBy": "roll,item",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-5/KleinMoretti3.webp"
}
,{
  "id": "883",
  "name": "Klein Moretti #4",
  "series": "Lord of Mysteries",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "obtainedBy": "roll,item",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-5/KleinMoretti4.webp"
}
,{
  "id": "884",
  "name": "Klein Moretti #5",
  "series": "Lord of Mysteries",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "obtainedBy": "roll,item",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-5/KleinMoretti6.webp"
}
,{
  "id": "885",
  "name": "Denia #1",
  "series": "Wuthering Waves",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "obtainedBy": "roll,item",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-5/denia1.webp"
}
,{
  "id": "886",
  "name": "Ashveil #1",
  "series": "Honkai Verse",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "obtainedBy": "roll,item",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-5/ashveil1.webp"
}
,{
  "id": "887",
  "name": "Saitou #1",
  "series": "Seraph of the End",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "obtainedBy": "roll,item",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-5/Saitou1.webp"
}
,{
  "id": "888",
  "name": "Han Maru #1",
  "series": "Special Civil Servant",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "obtainedBy": "roll,item",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-5/hanmaru1.webp"
}
,{
  "id": "889",
  "name": "Touya Aoyagi #1",
  "series": "Project SEKAI Colorful Stage!",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "obtainedBy": "roll,item",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-5/TouyaAoyagi1.webp"
}
,{
  "id": "890",
  "name": "Ren Amamiya #2",
  "series": "Persona 5",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "obtainedBy": "roll,item",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-5/Ren-Amamiya2.webp"
}
,{
  "id": "891",
  "name": "Ryūji Sakamoto #1",
  "series": "Persona 5",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "obtainedBy": "roll,item",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-5/Ryuji-Sakamoto1.webp"
}
,{
  "id": "892",
  "name": "Sakura Futaba #1",
  "series": "Persona 5",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "obtainedBy": "roll,item",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-5/Sakura-Futaba1.webp"
}
,{
  "id": "893",
  "name": "Frieren #3",
  "series": "Frieren: Beyond Journey's End",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "obtainedBy": "roll,item",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-5/Frieren3.webp"
}
,{
  "id": "894",
  "name": "Apollonia #1",
  "series": "Granblue Fantasy",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "obtainedBy": "roll,item",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-5/Apollonia1.webp"
}
,{
  "id": "895",
  "name": "Leon S. Kennedy #1",
  "series": "Resident Evil Franchise",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "obtainedBy": "roll,item",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-5/Leon-S_1.webp"
}
,{
  "id": "896",
  "name": "Leon S. Kennedy #3",
  "series": "Resident Evil Franchise",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "obtainedBy": "roll,item",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-5/Leon-S_2.webp"
}
,{
  "id": "897",
  "name": "Cerydra #2",
  "series": "Honkai Verse",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "obtainedBy": "roll,item",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-5/Cerydra2.webp"
}
,{
  "id": "898",
  "name": "Ruan Mei #1",
  "series": "Honkai Verse",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "obtainedBy": "roll,item",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-5/Ruan-Mei1.webp"
}
,{
  "id": "899",
  "name": "Pipkin Pippa #1",
  "series": "Vtubers & Youtubers",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "obtainedBy": "roll,item",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-5/Pipkin-Pippa1.webp"
}
,{
  "id": "900",
  "name": "Vivian Banshee #1",
  "series": "Zenless Zone Zero",
  "rarity": "rare,epic,legendary",
  "type": "Permanent",
  "source": "Official Art",
  "obtainedBy": "roll,item",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-5/Vivian-Banshee1.webp"
}
,{
  "id": "901",
  "name": "Medea & Psyche #1",
  "series": "Your Throne",
  "rarity": "rare,epic,legendary",
  "type": "Permanent Duo",
  "source": "Official Art",
  "obtainedBy": "roll,item",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-5/MedeaXPsyche.webp"
}
,{
  "id": "902",
  "name": "Shigaraki X Izuku #1",
  "series": "My Hero Academia",
  "rarity": "rare,epic,legendary",
  "type": "Permanent Duo",
  "source": "Official Art",
  "obtainedBy": "roll,item",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-5/shigaraki&izuku.webp"
}
,{
  "id": "903",
  "name": "Mitsuki Koga X Aya Osawa #1",
  "series": "The Guy She Was Interested in Wasn't a Guy at All",
  "rarity": "rare,epic,legendary",
  "type": "Permanent Duo",
  "source": "Official Art",
  "obtainedBy": "roll,item",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-5/MitsukiXAya1.webp"
}
,{
  "id": "904",
  "name": "Fern X Frieren #1",
  "series": "Frieren: Beyond Journey's End",
  "rarity": "rare,epic,legendary",
  "type": "Permanent Duo",
  "source": "Official Art",
  "obtainedBy": "roll,item",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-5/FernXFrieren1.webp"
}
,{
  "id": "905",
  "name": "Wei X Lan #6",
  "series": "Grandmaster of Demonic Cultivation",
  "rarity": "rare,epic,legendary",
  "type": "Permanent Duo",
  "source": "Official Art",
  "obtainedBy": "roll,item",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-5/WeiXLan6.webp"
}
,{
  "id": "906",
  "name": "Neuro X Evil #1",
  "series": "Vtubers & Youtubers",
  "rarity": "rare,epic,legendary",
  "type": "Permanent Duo",
  "source": "Official Art",
  "obtainedBy": "roll,item",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-5/NeuroXEvil1.webp"
}
,{
  "id": "907",
  "name": "Leon S. Kennedy X Chris Redfield #1",
  "series": "Resident Evil Franchise",
  "rarity": "rare,epic,legendary",
  "type": "Permanent Duo",
  "source": "Official Art",
  "obtainedBy": "roll,item",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-5/LeonXChris1.webp"
}
,{
  "id": "908",
  "name": "Mami X Chizuru #1",
  "series": "Rent a Girlfriend",
  "rarity": "rare,epic,legendary",
  "type": "Permanent Duo",
  "source": "Official Art",
  "obtainedBy": "roll,item",
  "imageUrl": "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/Permanent-5/MamiXChizuru1.webp"
},
  {
  "id": "909",
  "name": "Six Seven #1",
  "series": "Brainrot",
  "rarity": "celestial",
  "type": "Exclusive",
  "source": "Official Art|Made By ➺ its_slept",
"imageUrl":
  "https://cdn.jsdelivr.net/gh/its-slept/Card-bot@main/3D/sixseven-1.webp"
  },
  {
  "id": "910",
  "name": "Sung Jin Woo #3",
  "series": "Solo Leveling",
  "rarity": "ultimate",
  "type": "Permanent",
  "source": "Official Art|Made By ➺ its_slept",
"imageUrl":
  "https://cdn.jsdelivr.net/gh/its-slept/Err-idk-@main/3D-2/sungjinwoo-3.webp"
  },
  {
  "id": "911",
  "name": "Camellya #2",
  "series": "Wuthering Waves",
  "rarity": "celestial",
  "type": "Permanent",
  "source": "Official Art|Made By ➺ im_down_bad",
"imageUrl":
  "https://cdn.jsdelivr.net/gh/its-slept/Err-idk-@main/3D-2/camellya-2.webp"
  },
  {
  "id": "912",
  "name": "Goku & Vegeta #1",
  "series": "Dragon Ball",
  "rarity": "ultimate",
  "type": "Permanent Duo",
  "source": "Official Art|Made By ➺ its_slept",
"imageUrl":
  "https://cdn.jsdelivr.net/gh/its-slept/Err-idk-@main/3D-2/goku%26vegeta-1.webp"
  }
];
