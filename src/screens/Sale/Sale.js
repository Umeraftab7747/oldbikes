import React from "react";
import "./Sale.css";
import Button from "../../Components/Button/Button";
import Count from "../../Components/CountDown/Count";
import Rating from "@mui/material/Rating";
import { Saledata } from "../../Saledata";

import { useSelector, useDispatch } from "react-redux";
import { setdata } from "../../redux/features/Cart";

const Sale = () => {
  const d = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();
  const id = d.id;
  const newdata = d.filter((item) => {
    return item.id === id;
  });

  const [value, setValue] = React.useState(4);
  const [sale, setsale] = React.useState(Saledata[0]);

  return (
    <div className="SaleSectionContainer" id="sale">
      {/* img container */}
      <div className="imageSaleContainer">
        <div className="shadowc">
          {/* left */}
          <div className="shadowboxwhitecontainer">
            <h1 className="FlashsaleLogo">
              Flash <span>Sale</span>
            </h1>
            <p className="SubSaleText">Fishbite Superbike Express 2018</p>
            <div className="btncontaienrs">
              <Button text="BUY NOW!" />

              <p className="unitText">10 units</p>
            </div>
          </div>
          {/* left */}

          {/* right */}
          <Count />
        </div>
      </div>
      {/* bike Container */}
      <div className="bikecontainerforsale" data-aos="fade-up">
        <div className="saleImgContainer"></div>
        <div className="leftcontainer">
          <div className="salecontainerText">
            <h3>{sale.productname}</h3>
            <Rating
              name="customized-color"
              value={sale.star}
              color={"#ff7000"}
              readOnly
            />
          </div>
          <div className="saleconBtntainer">
            <div className="leftContainerforprice">
              <p className="PriceTag">${sale.Price}</p>
            </div>
            <div className="leftContainerforprice2">
              <Button
                onclick={() => {
                  dispatch(setdata(sale));
                }}
                text="BUY"
              />
            </div>
          </div>
        </div>
      </div>
      {/* bike Container */}
    </div>
  );
};

export default Sale;
