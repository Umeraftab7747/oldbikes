import React from "react";
import "./Header.css";
import Navbar from "../../Components/Navbar/Navbar";
import Button from "../../Components/Button/Button";
import { Link as Linked } from "react-router-dom";

const Header = () => {
  return (
    <div className="HeaderContainer" id="home">
      <div className="shadow">
        <Navbar links />

        <div className="maincbox">
          <h1 className="headerText">Perfection</h1>
          <h1 className="subtext">In Every Shape</h1>
          <p className="discription">
            Our brand new Fishbite Superbike Express 2021 with perfection in
            every detail and would blow your mind INSTANTLY!!
          </p>
          <div className="BtnBox">
            <Linked to="Products" className="Linkedc">
              {/* <Button text="BUY NOW" /> */}
            </Linked>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
