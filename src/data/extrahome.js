import soup from "../assets/soup.png";
import salad from "../assets/salad.png";
import meat from "../assets/meat.png";
import rice from "../assets/rice.png";

import p1 from "../assets/freepaint.png";
import p2 from "../assets/violin_home.png";
import p3 from "../assets/steak.png";
import p4 from "../assets/macandcheese.png";

const popular = {
  topic: "Popular",
  activities: [
    { title: "Try freestyle painting", thumbnail: p1 },
    { title: "You could be a violin genius", thumbnail: p2 },
    { title: "Steak makes you hungry?", thumbnail: p3 },
    { title: "Vegan Mac & Cheese", thumbnail: p4 },
  ],
};

const recommend = {
  topic: "Recommended",
  activities: [
    { title: "Tom Yam Gong Soup", thumbnail: soup },
    { title: "Salad dalada", thumbnail: salad },
    { title: "A mix for meat", thumbnail: meat },
    { title: "Pan fried rice makes difference", thumbnail: rice },
  ],
};
const extrahome = {
  recommend,
  popular,
};
export default extrahome;
