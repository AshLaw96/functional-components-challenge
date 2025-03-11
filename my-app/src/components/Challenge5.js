import React, { Component } from "react";
import css from "./css/Content.module.css";
import { savedPosts } from "../posts.json";
import PostItem from "./PostItem";
import Loader from "./Loader";

export default class Challenge5 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      posts: [],
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoaded: true,
        posts: savedPosts,
      });
    }, 2000);
  }

  handleChange = (e) => {
    const search = e.target.value;
    const filteredPosts = savedPosts.filter((post) => {
      return post.search.toLowerCase().includes(search.toLowerCase());
    });
    this.setState({
      posts: filteredPosts,
    });
  };

  render() {
    return (
      <div className={CSS.Content}>
        <div className={css.TitleBar}>
          <h1>My Photos</h1>
          <form>
            <label htmlFor="searchinput">Search:</label>
            <input
              id="searchInput"
              type="search"
              name="search"
              placeholder="By Author"
              onChange={(e) => this.handleChange(e)}
            />
            <h4>posts found: {this.state.posts.length}</h4>
          </form>
        </div>
        <div className={css.SearchResults}>
          {this.state.isLoaded ? (
            <PostItem savedPost={this.state.posts} />
          ) : (
            <Loader />
          )}
        </div>
      </div>
    );
  }
}
