import React from "react";
import { Redirect, useHistory } from "react-router";
import { Link } from "react-router-dom";
import background from "../assets/images/background/background.png";
import logo from "../assets/images/background/logo.png";
export default function LandingPage() {
  const history = useHistory();
  function connectWallet() {
    history.push("/home");
  }
  return (
    <div className="landing-page">
      <div className="center-box">
        <img src={logo}></img>
        <p className="tag-line">
          Connect to support <br /> your favourite creator
        </p>
        <button
          className="wallet"
          onClick={() => {
            connectWallet();
          }}
        >
          Connect Wallet
        </button>
        <Link to="/privacy"><p className="privacy">Privacy Policy</p></Link>
      </div>
    </div>
  );
}
