import React from "react";
import "./Dashbord.css";
import Setting from "../../Components/Setting/Setting";
import Orders from "../../Components/Orders/Orders";

const Dashbord = () => {
  return (
    <div className="dashbordscreencontainer">
      <div className="leftshippingdetailsbord">
        {/* USERDETAILS */}
        <div className="usercard">
          <p className="Nameofuser">UmerAftab</p>
          <button className="newbuttonfordashbord">
            <p className="newbuttontext">SETTING</p>
          </button>
          <button className="newbuttonfordashbord">
            <p className="newbuttontext">ORDERS</p>
          </button>
        </div>
        {/* USERDETAILS */}
      </div>
      <div className="rightshippingdetailsbord">
        {/* <Setting /> */}
        <Orders />
      </div>
    </div>
  );
};

export default Dashbord;
