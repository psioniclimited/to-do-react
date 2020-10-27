import React, { Component } from "react";

export class TodoItem extends Component {
  render() {
    return (
      <div>
        <div>
          <input
            type="checkbox"
            checked={this.props.item.completed}
            onChange={() => this.props.handleChange(this.props.item.id)}
          />
          <label>{this.props.item.text}</label>
        </div>
      </div>
    );
  }
}

export default TodoItem;
