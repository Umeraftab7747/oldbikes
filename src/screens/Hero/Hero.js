import React, { useState } from "react";
import "./Hero.css";
import Item from "../../Components/Item/Item";
import { Link } from "react-router-dom";

import { data } from "../../data";

const Hero = () => {
  const [datas, setDatas] = useState(data);

  return (
    <div className="heroSectioncontainer" id="hero">
      <h1 className="FHText">Featured Products</h1>

      <div className="FproductContainer">
        {datas.map((item) => {
          return <Item data={item} />;
        })}
      </div>
      {/* Products */}
      <Link to="/" className="seemorelink">
        Check More !
      </Link>
    </div>
  );
};

export default Hero;
