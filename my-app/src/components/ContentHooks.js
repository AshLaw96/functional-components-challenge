import React, { useState, useEffect } from "react";
import css from "./css/Content.module.css";
import PostItem from "./PostItem";
import { savedPosts } from "../posts.json";
import Loader from "./Loader";

function ContentHooks() {
  const [fetchedPosts, setfetchedPosts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setfetchedPosts(savedPosts);
      setIsLoaded(true);
    }, 2000);
  }, []);

  const handleChanges = (e) => {
    const name = e.target.value;
    const filteredPosts = savedPosts.filter((post) => {
      return post.name.toLowerCase().includes(name.toLowerCase());
    });
    setfetchedPosts(filteredPosts);
  };

  return (
    <div className={CSS.Content}>
      <div className={css.TitleBar}>
        <h1>My Photos</h1>
        <form>
          <label htmlFor="searchinput">Search:</label>
          <input
            id="searchInput"
            type="search"
            placeholder="By Author"
            onChange={(e) => handleChanges(e)}
          />
          <h4>posts found: {fetchedPosts.length}</h4>
        </form>
      </div>
      <div className={css.SearchResults}>
        {isLoaded ? <PostItem savedPost={fetchedPosts} /> : <Loader />}
      </div>
    </div>
  );
}

export default ContentHooks;
