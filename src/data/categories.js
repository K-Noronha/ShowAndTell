import cooking from "../assets/cooking.png";
import poetry from "../assets/poetry.png";
import music from "../assets/music.png";
import visual from "../assets/visual.png";
import arts from "../assets/arts.png";

import soup from "../assets/soup.png";
import salad from "../assets/salad.png";
import meat from "../assets/meat.png";
import rice from "../assets/rice.png";

import poem1 from "../assets/Poem&Plant_home.png";
import poem2 from "../assets/poem2.png";
import poem3 from "../assets/poem3.png";
import poem4 from "../assets/poemandcoffee.png";

import music1 from "../assets/Drum_home.png";
import music2 from "../assets/Guitar_home.png";
import music3 from "../assets/keyboard.png";
import music4 from "../assets/violin_home.png";

import arts1 from "../assets/Poem&Plant_home.png";
import arts2 from "../assets/poem2.png";
import arts3 from "../assets/poem3.png";
import arts4 from "../assets/poemandcoffee.png";

import va1 from "../assets/Poem&Plant_home.png";
import va2 from "../assets/poem2.png";
import va3 from "../assets/poem3.png";
import va4 from "../assets/poemandcoffee.png";

const categories = [
  {
    topic: "Cooking",
    icon: cooking,
    activities: [
      { title: "Tom Yam Gong Soup", thumbnail: soup },
      { title: "Salad dalada", thumbnail: salad },
      { title: "A mix for meat", thumbnail: meat },
      { title: "Pan fried rice makes difference", thumbnail: rice },
    ],
  },
  {
    topic: "Poetry",
    icon: poetry,
    activities: [
      { title: "Read a poetry by Mary Oliver", thumbnail: poem1 },
      { title: "Learn to write poetry", thumbnail: poem2 },
      { title: "Read a poetry by Andy", thumbnail: poem3 },
      { title: "Memorize a poetry by Lydia", thumbnail: poem4 },
    ],
  },
  {
    topic: "Music",
    icon: music,
    activities: [
      { title: "Tom Yam Gong Soup", thumbnail: music1 },
      { title: "Salad dalada", thumbnail: music2 },
      { title: "A mix for meat", thumbnail: music3 },
      { title: "Pan fried rice makes difference", thumbnail: music4 },
    ],
  },
  {
    topic: "Visual Arts",
    icon: visual,
    activities: [
      { title: "Tom Yam Gong Soup", thumbnail: va1 },
      { title: "Salad dalada", thumbnail: va2 },
      { title: "A mix for meat", thumbnail: va3 },
      { title: "Pan fried rice makes difference", thumbnail: va4 },
    ],
  },
  {
    topic: "Arts & Crafts",
    icon: arts,
    activities: [
      { title: "Tom Yam Gong Soup", thumbnail: arts1 },
      { title: "Salad dalada", thumbnail: arts2 },
      { title: "A mix for meat", thumbnail: arts3 },
      { title: "Pan fried rice makes difference", thumbnail: arts4 },
    ],
  },
];

export default categories;
