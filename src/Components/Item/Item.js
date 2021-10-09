import React from "react";
import "./Item.css";
import Rating from "@mui/material/Rating";
import Button from "../Button/Button";

import { useSelector, useDispatch } from "react-redux";

import { setdata } from "../../redux/features/Cart";

const Item = ({ itembuy, data }) => {
  const d = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();
  const id = d.id;

  const newdata = d.filter((item) => {
    return item.id === id;
  });

  return (
    <div className="itemContainer">
      <div className="imgcontainer"></div>
      <p className="BikeHeader">{data.productname}</p>
      <Rating
        name="customized-color"
        value={data.star}
        color={"#ff7000"}
        readOnly
      />
      <div className="lowerContainrforBtn">
        <div className="leftContainerforprice">
          <p className="PriceTag">${data.Price}</p>
        </div>
        <div className="leftContainerforprice2">
          <Button
            onclick={() => {
              dispatch(setdata(data));
            }}
            text="BUY"
          />
        </div>
      </div>
    </div>
  );
};

export default Item;
