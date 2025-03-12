import React, { useState, useEffect } from "react";
import css from "./css/Content.module.css";
import PostItemAPI from "./PostItemAPI";
import Loader from "./Loader";
import API_KEY from "../secrets";
import axios from "axios";

export default function ContentAPIHooks() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [posts, setPosts] = useState([]);
  const [savedPosts, setSavedPosts] = useState([]);
  const fetchImages = async () => {
    const response = await axios.get(
      `https://pixabay.com/api/?key=${API_KEY}&per_page=100&safeSearch=true&editors_choice=true&orientation=horizontal`
    );
    const fetchedPosts = response.data.hits;
    setPosts(fetchedPosts);
    setSavedPosts(fetchedPosts);
    setIsLoaded(true);
  };
  useEffect(() => {
    fetchImages();
  }, []);
  const handleChange = (e) => {
    const name = e.target.value;
    const filteredPosts = savedPosts.filter((post) => {
      return post.user.toLowerCase().includes(name.toLowerCase());
    });
    setPosts(filteredPosts);
  };
  return (
    <div className={css.Content}>
      <div className={css.TitleBar}>
        <h1>My Photos</h1>
        <form>
          <label htmlFor="searchinput">Search:</label>
          <input
            id="searchInput"
            type="search"
            placeholder="By Author"
            onChange={(e) => handleChange(e)}
          />
          <h4>posts found: {posts.length}</h4>
        </form>
      </div>
      <div className={css.SearchResults}>
        {isLoaded ? <PostItemAPI savedPosts={posts} /> : <Loader />}
      </div>
    </div>
  );
}
