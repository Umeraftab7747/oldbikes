import React from "react";
import "./Setting.css";
import Button from "../Button/Button";

const Setting = () => {
  return (
    <div className="settingscreen">
      <div className="SetingContainer">
        <div className="headerSettingcontainer">
          <p className="SettingText">Settings</p>
        </div>
        <form action="" className="Settingformdetails">
          <input
            type="text"
            name=""
            placeholder="EMAIL"
            className="SettingInput"
          />
          <input
            type="text"
            name=""
            placeholder="NAME"
            className="SettingInput"
          />
          <input
            type="text"
            name=""
            placeholder="PHONE NO"
            className="SettingInput"
          />
          <input
            type="text"
            name=""
            placeholder="ADDRESS 1"
            className="SettingInput"
          />
          <input
            type="text"
            name=""
            placeholder="ADDRESS 2"
            className="SettingInput"
          />
          <div className="space"></div>
          <Button text="SUBMIT" />
        </form>
      </div>
    </div>
  );
};

export default Setting;
