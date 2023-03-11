import React from "react";
import hero from "./images/hero.svg";
import phone from "./images/phone.svg";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-center">
        <div className="hero-info">
          <h1>
            Payments infrastructure <br />
            for the internet
          </h1>
          <p>
            Millions of companies of all sizes—from startups to Fortune 500s—use
            Stripe’s software and APIs to accept payments, send payouts, and
            manage their businesses online.
          </p>
          <button className="btn">Start now</button>
        </div>
        <div className="hero-images">
          <img src={phone} className="phone-img" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
