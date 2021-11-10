import React, { useEffect } from "react";
import CreatorsList from "../components/CreatorsList";
import LeftNavigation from "../components/LeftNavigation";
import PostList from "../components/PostList";
import useravatar from "../assets/images/icon/user-avatar.png";

export default function Profile() {
    useEffect(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }, []);
  return (
    <div className="container">
      <div className="home-page profile-page">
        <div className="row">
          <div className="col-3">
            <LeftNavigation></LeftNavigation>
          </div>
          <div className="col-4">
            <h2>Home</h2>
            <div className="post-creator row">
              <img className="user-avatar" src={useravatar} alt="" srcset="" />
              <div className="user-description">
                <p className="username">Sharif Hossain</p>
                <p className="wallet-address">@ajsh.....jhg</p>
              </div>
            </div>
            <div className="update-profile">
              <p>Update Profile</p>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Username*"
              />
              <br />
              <input type="text" name="email" id="email" placeholder="Email" />
              <br />
              <input type="submit" value="Update" />
            </div>
            <PostList></PostList>
          </div>
          <div className="col-3">
            <CreatorsList></CreatorsList>
          </div>
        </div>
      </div>
    </div>
  );
}
