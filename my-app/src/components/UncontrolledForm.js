import React, { Component } from "react";

export class UncontrolledForm extends Component {
  constructor(props) {
    super(props);
    this.inputName = React.createRef();
    this.inputCategory = React.createRef();
    this.inputComments = React.createRef();
  }

  render() {
    return (
      <div>
        <h1>Please fill out this form below</h1>
        <form onSubmit={(event) => event.preventDefault()}>
          <div>
            <label htmlFor="id-name">Name: </label>
            <input
              type="text"
              name="name"
              id="id-name"
              defaultValue="John Smith"
              ref={this.inputName}
            />
          </div>
          <div>
            <label htmlFor="id-category">Query category: </label>
            <select id="id-category" name="category" ref={this.inputCategory}>
              <option value="website">Website issue</option>
              <option value="order">Order issue</option>
              <option value="general">General issue</option>
            </select>
          </div>
          <div>
            <label htmlFor="id-comments">Comments: </label>
            <textarea
              id="id-comments"
              name="comments"
              ref={this.inputComments}
            ></textarea>
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default UncontrolledForm;
