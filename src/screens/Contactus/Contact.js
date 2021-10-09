import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="ContactUsPage" id="contactus">
      <h1 className="CText">Contact us</h1>
      <div className="contactform">
        <form action="/" method="post">
          <input type="text" className="input" />
          <input type="text" className="input" />
          <input type="text" className="input2" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
