import React from "react";
import "./Order.css";

const Orders = () => {
  return (
    <div className="settingscreen">
      <div className="SetingContainer">
        <div className="headerSettingcontainer">
          <p className="SettingText">ORDERS</p>
        </div>
        {/* order */}
        <div className="ordercontainer">
          <div className="leftoder">
            <div className="imgordercontainer"></div>
          </div>
          <div className="middleoder">
            <p className="BikeHeader">Super Bike Alvador 2018</p>
          </div>
          <div className="Rightoder">
            <p className="BikeHeader">TOTAL: $2050</p>
          </div>
        </div>
        {/* order */}
        {/* order */}
        <div className="ordercontainer">
          <div className="leftoder">
            <div className="imgordercontainer"></div>
          </div>
          <div className="middleoder">
            <p className="BikeHeader">Super Bike Alvador 2018</p>
          </div>
          <div className="Rightoder">
            <p className="BikeHeader">TOTAL: $2050</p>
          </div>
        </div>
        {/* order */}
        {/* order */}
        <div className="ordercontainer">
          <div className="leftoder">
            <div className="imgordercontainer"></div>
          </div>
          <div className="middleoder">
            <p className="BikeHeader">Super Bike Alvador 2018</p>
          </div>
          <div className="Rightoder">
            <p className="BikeHeader">TOTAL: $2050</p>
          </div>
        </div>
        {/* order */}
      </div>
    </div>
  );
};

export default Orders;
