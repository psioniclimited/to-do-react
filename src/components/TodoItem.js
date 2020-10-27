import React from "react";

function TodoItem(props) {
  return (
    <div>
      <input type="checkbox" checked={props.item.completed} />
      <label>{props.item.text}</label>
    </div>
  );
}

export default TodoItem;
