import React, { useEffect } from "react";
import LeftNavigation from "../components/LeftNavigation.js";
import CreatorsList from "../components/CreatorsList.js";
import PostList from "../components/PostList.js";

export default function Home() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className="container">
      <div className="home-page">
        <div className="row">
          <div className="col-3">
            <LeftNavigation></LeftNavigation>
          </div>
          <div className="col-4">
            <h2>Home</h2>
            <div className="create-post">
              <form>
                <textarea
                  name="post-desc"
                  id="post-desc"
                  placeholder="Create new post ..."
                />
                <input type="file" id="img" name="img" accept="image/*"/>
                <input type="submit" value="Post"/>
              </form>
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
