import React from "react";
import CSS from "./css/PostItem.module.css";

export default function PostItemAPI({ savedPosts }) {
  if (!Array.isArray(savedPosts)) {
    return <p>No posts available</p>;
  }
  return savedPosts.map((post) => {
    const { id, type, user, webformatURL, tags } = post;
    return (
      <div className={CSS.SearchItem} key={id}>
        <p>{type}</p>
        <p>{user}</p>
        <img src={webformatURL} alt="random" />
        <p>{tags}</p>
      </div>
    );
  });
}
