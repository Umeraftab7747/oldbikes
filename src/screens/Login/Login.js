import React from "react";
import "./Login.css";
import Button from "../../Components/Button/Button";

const Login = () => {
  return (
    <div className="LoginContainer">
      <div className="logincontainermiddleSection">
        <div className="leftloginContainer">
          <div className="loginsectionheader">
            <h1>LOGIN</h1>
          </div>
          <form className="Loginsignupform">
            <input
              type="text"
              placeholder="EMAIL/USERNAME"
              className="InputLogin"
            />
            <input type="text" placeholder="PASSWORD" className="InputLogin" />
            <div className="buttoncontainersloginsigup">
              <Button text="LOGIN" />
              <div className="forgotpasswordbutton">
                <p>FORGOT PASSWORD</p>
              </div>
            </div>
          </form>
        </div>
        <div className="rightloginContainer">
          <div className="loginsectionheader">
            <h1>SIGNUP</h1>
          </div>
          <form className="Loginsignupform">
            <input
              type="text"
              placeholder="EMAIL/USERNAME"
              className="InputLogin"
            />
            <input type="text" placeholder="PHONE NO" className="InputLogin" />
            <input type="text" placeholder="PASSWORD" className="InputLogin" />
            <input
              type="text"
              placeholder="CONFIRM PASSWORD"
              className="InputLogin"
            />
            <div className="buttoncontainersloginsigup">
              <Button text="SIGNUP" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
