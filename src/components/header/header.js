import React from "react";
import "./header.css";
import Logo from "../../images/logo.svg";

export default function header() {
  return (
    <header className="header-main">
      <img className="header-img" src={Logo} />
      <div className="header-navBar">
          <h2 className="h-h2">About</h2>
          <h2 className="h-h2">Services</h2>
          <h2 className="h-h2">Projects</h2>
          <button className="header-btn">CONTACT</button>
      </div>
      <h1 className="header-h1">We are creatives</h1>
    </header>
  );
}
