import React, { useEffect, useState } from "react";
import "./homepage.css";
import logo from "../assets/KudoLogo.png";
import logo_light from "../assets/light_mode.png";
import logo_dark from "../assets/dark_mode.png";
import location from "../assets/location.png";
import Signup from "./Signup.jsx";
import Login from "./Login.jsx";
import Footer from "./Footer.jsx";
// import "../style.css";

export default function Homepage() {
  const [openSignup, setOpenSignup] = useState(false);
  useEffect(() => {
    console.log(openSignup);
  }, [openSignup]);
  return (
    <>
      <div className="homepage bg-black">
        {/* LANDING PAGE */}
        <div id="landing" className="landing-page">
          <div className="navbar">
            <img src={logo} alt="" className="logo" />
            <ul>
              <li>
                <a href="#information">Visit Our Gym</a>
              </li>
              <li>
                <a href="#description">About</a>
              </li>
              <li>
                <a href="#plan">Plan</a>
              </li>
              <li>
                <a href="#landing">Login</a>
              </li>
            </ul>
            <img src={logo_light} alt="" className="toggle-icon" />
          </div>

          {/* HERO SECTION */}
          <div className="hero">
            <h1>
              KUDO <br /> FITNESS <br /> GYM
            </h1>
            <p>
              LET&apos;S GET <span className="highlight">FIT</span>, DON&apos;T{" "}
              <span className="highlight">QUIT</span>
            </p>
            <form className="email-form">
              <input type="email" placeholder="EMAIL" />
              <button
                type="submit"
                onClick={(e) => {
                  e.preventDe;
                  setOpenSignup(true);
                }}
              >
                Get Started
              </button>
            </form>
            <p className="subtext">
              Enter your email to create or register a new membership!
            </p>
          </div>
        </div>

        {/* DESCRIPTION PAGE */}
        <div id="description" className="description-page">
          <div className="description-content">
            <h2>
              Fitness Gym for <span className="men">Men</span> and{" "}
              <span className="women">Women</span>
            </h2>
            <p>
              Welcome to our fitness community where strength meets motivation.
              Whether you’re here to build muscle, improve endurance, or simply
              stay active, we provide the perfect space and guidance for your
              journey.
            </p>
          </div>
        </div>

        {/* PLAN PAGE */}
        <div id="plan" className="plan-page">
          <div className="plans-container">
            {/* Weekly Plan */}
            <div className="plan-card">
              <h3>Weekly Plan</h3>
              <p className="price">₱199.00</p>
              <ul>
                <li>Benefit 1</li>
                <li>Benefit 2</li>
                <li>Benefit 3</li>
                <li>Benefit 4</li>
              </ul>
              <button className="plan-btn">Get Started</button>
            </div>

            {/* Monthly Plan */}
            <div className="plan-card">
              <h3>Monthly Plan</h3>
              <p className="price">₱650.00</p>
              <ul>
                <li>Benefit 1</li>
                <li>Benefit 2</li>
                <li>Benefit 3</li>
                <li>Benefit 4</li>
              </ul>
              <button className="plan-btn">Get Started</button>
            </div>

            {/* Monthly Plan (Student) */}
            <div className="plan-card">
              <h3>
                Monthly Plan <br />
                <span className="student">student</span>
              </h3>
              <p className="price">₱550.00</p>
              <ul>
                <li>Benefit 1</li>
                <li>Benefit 2</li>
                <li>Benefit 3</li>
                <li>Benefit 4</li>
              </ul>
              <button className="plan-btn">Get Started</button>
            </div>
          </div>
        </div>

        {/* INFORMATION PAGE  */}
        <div id="information" className="information-page">
          <div className="info-card">
            <div className="info-text">
              <h2>Visit Our Gym</h2>
              <p>
                <strong>Location:</strong>
                <br />
                Barangay Uno Gasan Marinduque, Bonifacio Street Poblacion
              </p>

              <p>
                <strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM <br />
                <strong>Saturday - Sunday:</strong> 10:00 AM - 4:00 PM
              </p>

              <p>
                <strong>Email:</strong>{" "}
                <span className="highlight-box">kudofitnessgym@gmail.com</span>
              </p>
              <p>
                <strong>Phone:</strong>{" "}
                <span className="highlight-box">09672534800</span>
              </p>
            </div>

            <div className="info-map">
              <img src={location} alt="Gym Location Map" />
            </div>
          </div>
        </div>
      </div>
      <footer />
    </>
  );
}
