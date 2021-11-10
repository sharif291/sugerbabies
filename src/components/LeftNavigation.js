import React from "react";
import useravatar from "../assets/images/icon/user-avatar.png";
import home from "../assets/images/icon/home.png";
import profile from "../assets/images/icon/profile.png";
import disconnect from "../assets/images/icon/disconnect.png";
import { Link, NavLink } from "react-router-dom";

export default function LeftNavigation() {
  return (
    <div className="left-navigation">
      <div className="post-creator row">
        <img className="user-avatar" src={useravatar} alt="" srcset="" />
        <div className="user-description">
          <p className="username">Sharif Hossain</p>
          <p className="wallet-address">@ajsh.....jhg</p>
        </div>
      </div>
      <div className="nav">
        <div className="nav-item row">
          <img src={home} alt="" />
          <NavLink activeClassName="active" to="/home">
            <p>Home</p>
          </NavLink>
        </div>
        <div className="nav-item row">
          <img src={profile} alt="" />
          <NavLink activeClassName="active" to="/myprofile">
            <p>My Profile</p>
          </NavLink>
        </div>
        <div className="nav-item row">
          <img src={disconnect} alt="" />
          <NavLink activeClassName="active" to="/disconnect">
            <p>Disconnect</p>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
