import React from "react";
import "./Navbar.css";
import Button from "../Button/Button";
import { Link } from "react-scroll";
import { Link as Linked } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setdata, removeitem } from "../../redux/features/Cart";

const Navbar = ({ links }) => {
  const data = useSelector((state) => state.cart.value);
  return (
    <div className="NavbarContainer">
      <div className="logo">OLDCYCLES</div>

      <ul>
        {links ? (
          <>
            <li>
              <Link to="home" duration={1000}>
                HOME
              </Link>
            </li>
            <li>
              <Link to="hero" duration={1000}>
                Featured
              </Link>
            </li>
            <li>
              <Link to="about" duration={1000}>
                ABOUT
              </Link>
            </li>

            <li>
              <Link to="contactus" duration={1000}>
                CONTCT US
              </Link>
            </li>
          </>
        ) : null}
      </ul>

      <div className="cartandlogin">
        {links ? (
          <Linked to="Cart" className="Linkedc">
            {data.length > 0 && <div className="CartNumber">{data.length}</div>}

            <div className="CartImage"></div>
          </Linked>
        ) : (
          <Linked to="Cart" className="Linkedc">
            <div className="CartImage2"></div>
          </Linked>
        )}
      </div>
    </div>
  );
};

export default Navbar;
