import React, { Component } from "react";
import css from "./css/Content.module.css";
import { savedPosts } from "../posts.json";
import PostItem from "./PostItem";
import Loader from "./Loader";

export default class Challenge4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoaded: true,
      });
    }, 2000);
  }

  render() {
    return (
      <div className={CSS.Content}>
        <div className={css.TitleBar}>
          <h1>My Photos</h1>
        </div>
        <div className={css.SearchResults}>
          {this.state.isLoaded ? (
            savedPosts.map((post, index) => (
              <PostItem key={index} savedPost={post} />
            ))
          ) : (
            <Loader />
          )}
        </div>
      </div>
    );
  }
}
