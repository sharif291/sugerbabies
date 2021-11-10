import React from "react";
import useravatar from "../assets/images/icon/user-avatar.png";
import star from "../assets/images/icon/star.png";
import comment from "../assets/images/icon/comment.png";
import like from "../assets/images/icon/like.png";
import image1 from "../assets/images/image 1.png";

export default function PostList() {
  return (
    <div className="post-list">
      <div className="post-card">
        <div className="post-creator row">
          <img className="user-avatar" src={useravatar} alt="" srcset="" />
          <div className="user-description">
            <p className="username">Sharif Hossain</p>
            <p className="wallet-address">@ajsh.....jhg</p>
          </div>
          <img src={star} alt="" className="star" />
        </div>
        <div className="post-body">
          <p className="post-body-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quae
            cumque sequi eveniet quod obcaecati! Ad ullam, rerum quasi quis
            molestias velit quibusdam dolorem quae.
          </p>
          <img src={image1} alt="" className="post-body-image" />
        </div>
        <div className="post-action row">
          <img src={comment} alt="" className="comment" />
          <img src={like} alt="" className="like" />
          <p className="tip">Send Tip</p>
        </div>
      </div>
      <div className="post-card">
        <div className="post-creator row">
          <img className="user-avatar" src={useravatar} alt="" srcset="" />
          <div className="user-description">
            <p className="username">Sharif Hossain</p>
            <p className="wallet-address">@ajsh.....jhg</p>
          </div>
          <img src={star} alt="" className="star" />
        </div>
        <div className="post-body">
          <p className="post-body-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quae
            cumque sequi eveniet quod obcaecati! Ad ullam, rerum quasi quis
            molestias velit quibusdam dolorem quae.
          </p>
          <img src={image1} alt="" className="post-body-image" />
        </div>
        <div className="post-action row">
          <img src={comment} alt="" className="comment" />
          <img src={like} alt="" className="like" />
          <p className="tip">Send Tip</p>
        </div>
      </div>
      <div className="post-card">
        <div className="post-creator row">
          <img className="user-avatar" src={useravatar} alt="" srcset="" />
          <div className="user-description">
            <p className="username">Sharif Hossain</p>
            <p className="wallet-address">@ajsh.....jhg</p>
          </div>
          <img src={star} alt="" className="star" />
        </div>
        <div className="post-body">
          <p className="post-body-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quae
            cumque sequi eveniet quod obcaecati! Ad ullam, rerum quasi quis
            molestias velit quibusdam dolorem quae.
          </p>
          <img src={image1} alt="" className="post-body-image" />
        </div>
        <div className="post-action row">
          <img src={comment} alt="" className="comment" />
          <img src={like} alt="" className="like" />
          <p className="tip">Send Tip</p>
        </div>
      </div>
    </div>
  );
}
