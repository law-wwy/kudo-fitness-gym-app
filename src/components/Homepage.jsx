import React from "react";
import "./homepage.css";
import logo from "../assets/KudoLogo.png";
import logo_light from "../assets/light_mode.png";
import logo_dark from "../assets/dark_mode.png";

export default function Homepage() {
  return (
    <>
      <div className="homepage">
        {/* LANDING PAGE */}
        <div className="landing-page">
          <div className="navbar">
            <img src={logo} alt="" className="logo" />
            <ul>
              <li>Visit Our Gym</li>
              <li>About</li>
              <li>Plan</li>
              <li>Login</li>
            </ul>

            <img src={logo_light} alt="" className="toggle-icon" />
          </div>
        </div>
        {/* DESCRIPTION PAGE */}
        <div className="description-page">description</div>
        {/* INFORMATION PAGE */}
        <div className="information-page">information</div>
        {/* PLAN PAGE */}
        <div className="plan-page">plan</div>
      </div>
    </>
  );
}
