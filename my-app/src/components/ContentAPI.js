import React, { Component } from "react";
import css from "./css/Content.module.css";
import PostItemAPI from "./PostItemAPI";
import Loader from "./Loader";
import API_KEY from "../secrets";
import axios from "axios";

export default class ContentAPI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      posts: [],
      savedPosts: [],
    };
  }

  componentDidMount() {
    this.fetchImages();
  }

  async fetchImages() {
    const response = await axios.get(
      `https://pixabay.com/api/?key=${API_KEY}&per_page=100&safeSearch=true&editors_choice=true&orientation=horizontal`
    );
    const fetchedPosts = response.data.hits;

    this.setState({
      isLoaded: true,
      posts: fetchedPosts,
      savedPosts: fetchedPosts,
    });
  }

  handleChange = (e) => {
    const name = e.target.value;
    const filteredPosts = this.state.savedPosts.filter((post) => {
      return post.user.toLowerCase().includes(name.toLowerCase());
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
              placeholder="By Author"
              onChange={(e) => this.handleChange(e)}
            />
            <h4>posts found: {this.state.posts.length}</h4>
          </form>
        </div>
        <div className={css.SearchResults}>
          {this.state.isLoaded ? (
            <PostItemAPI savedPosts={this.state.posts} />
          ) : (
            <Loader />
          )}
        </div>
      </div>
    );
  }
}
