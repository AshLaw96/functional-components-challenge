import React from "react";
import CSS from "./css/PostItem.module.css";

export default function PostItem({ savedPost }) {
  const { title, name, image, description } = savedPost;
  return (
    <div className={CSS.SearchItem}>
      <p>{title}</p>
      <p>{name}</p>
      <img src={image} alt="random" />
      <p>{description}</p>
    </div>
  );
}
