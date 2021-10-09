import React from "react";
import "./Products.css";
import Navbar from "../../Components/Navbar/Navbar";
import Item from "../../Components/Item/Item";

const Products = () => {
  return (
    <div className="ProductsSectioncontainer">
      <Navbar />
      <div className="girdporductslist">
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </div>
  );
};

export default Products;
