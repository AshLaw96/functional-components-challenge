import React, { Component } from "react";

export class ControlledForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      category: "website",
      comments: "",
    };
  }
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <h1>Please fill out this form below</h1>
        <form onSubmit={(event) => event.preventDefault()}>
          <div>
            <label htmlFor="id-name">Name: </label>
            <input
              value={this.state.name}
              type="text"
              name="name"
              id="id-name"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="id-category">Query category: </label>
            <select
              value={this.state.category}
              id="id-category"
              name="category"
              onChange={this.handleChange}
            >
              <option value="website">Website issue</option>
              <option value="order">Order issue</option>
              <option value="general">General issue</option>
            </select>
          </div>
          <div>
            <label htmlFor="id-comments">Comments: </label>
            <textarea
              value={this.state.comments}
              id="id-comments"
              name="comments"
              onChange={this.handleChange}
            ></textarea>
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default ControlledForm;
