import React from "react";
import "../../styling/Homepage.scss";

//data
import categories from "../../data/categories.js";
import ActivityList from "./ActivityList.js";
import data from "../../data/extrahome";

import Footer from "./Footer";

const Homepage = () => {
  return (
    <div className="homepage">
      <ActivityList category={data.popular} />
      <ActivityList category={data.recommend} />

      {categories.map((category, i) => (
        <ActivityList category={category} key={i} />
      ))}

      {/* <Footer /> */}
    </div>
  );
};
export default Homepage;
