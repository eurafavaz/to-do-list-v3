import React, { Component } from "react";
import PropTypes from "prop-types";
import generators from "../library/generators";

export default class Add extends Component {
  constructor() {
    super();

    this.initialState = {
      id: 0,
      task: "",
      complete: false,
    };

    this.state = this.initialState;

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(event) {
    const { randomId } = generators;
    this.setState({
      id: randomId(999999999),
      task: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { onCreate } = this.props;
    const { id } = this.state;
    if (id > 0) {
      onCreate(this.state)
      this.setState(this.initialState);
    }
  }

  render() {
    const { task } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={task} onChange={this.handleInput} />
        <button type="submit" className="btn btn-primary">
          Add
        </button>
      </form>
    );
  }
}

Add.propTypes = {
  onCreate: PropTypes.func,
}.isRequired;
