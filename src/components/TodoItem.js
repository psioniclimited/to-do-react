import React, { Component } from "react";

export class TodoItem extends Component {
  completedStyle = {
    fontStyle:  'italic',
    color: '#cdcdcd',
    textDecoration: 'line-through'
  }

  render() {
    return (
      <div>
        <div>
          <input
            type="checkbox"
            checked={this.props.item.completed}
            onChange={() => this.props.handleChange(this.props.item.id)}
          />
          <label style={this.props.item.completed ? this.completedStyle : null}>{this.props.item.text}</label>
        </div>
      </div>
    );
  }
}

export default TodoItem;
