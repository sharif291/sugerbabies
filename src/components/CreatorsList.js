import React from "react";
import creator from "../assets/images/icon/creator-image.png";

export default function CreatorsList() {
  return (
    <div className="creator-list-page">
      <div className="search">
        <input type="text" id="searchInput" placeholder="Search.." />
      </div>
      <div className="creator-list">
        <p>Creators</p>
        <div className="post-creator row">
          <img className="user-avatar" src={creator} alt="" srcset="" />
          <div className="user-description">
            <p className="username">Sharif Hossain</p>
            <p className="wallet-address">@ajsh.....jhg</p>
          </div>
        </div>
        <div className="post-creator row">
          <img className="user-avatar" src={creator} alt="" srcset="" />
          <div className="user-description">
            <p className="username">Sharif Hossain</p>
            <p className="wallet-address">@ajsh.....jhg</p>
          </div>
        </div>
        <div className="post-creator row">
          <img className="user-avatar" src={creator} alt="" srcset="" />
          <div className="user-description">
            <p className="username">Sharif Hossain</p>
            <p className="wallet-address">@ajsh.....jhg</p>
          </div>
        </div>
      </div>
      <div className="links">
        <a>Become a Creartor</a>
        <p>
          <a>Marketplace - </a>
          <a>Twitter - </a>
          <a>Discord</a>
        </p>
      </div>
    </div>
  );
}
