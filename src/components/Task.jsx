import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Task extends Component {
  constructor(props) {
    super(props);

    const { data } = this.props;
    this.state = {
        id: data.id,
        complete: false,
    };

    this.handleCheckbox = this.handleCheckbox.bind(this);
  }

  handleCheckbox(event) {
    const { onUpdate } = this.props;
    const currentState = this.state;
    this.setState({
        complete: event.target.checked,
    });

    onUpdate({
        ...currentState,
        complete: event.target.checked,
    });
  }

  render() {
    const { complete } = this.state;
    const { data, onRemove } = this.props;
    const { id, task } = data;
    return (
      <div>
        <input type="checkbox" onChange={this.handleCheckbox} checked={complete}/>
        {task}
        <button type="button" onClick={() => onRemove(id)}>Remove</button>
      </div>
    );
  }
}

Task.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    task: PropTypes.string,
  }),
  onUpdate: PropTypes.func,
  onRemove: PropTypes.func,
}.isrequired;
