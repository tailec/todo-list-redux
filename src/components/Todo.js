import React from "react";
import { connect } from "react-redux";
import { toggleTodo } from "../redux/actions";

class Todo extends React.Component {
  handleClick = () => {
    this.props.toggleTodo(this.props.todo.id);
  };
  render() {
    const { todo } = this.props;
    return (
      <li
        className={todo.completed ? "strikethrough cursor" : "cursor"}
        onClick={this.handleClick}
      >
        {todo.content}
      </li>
    );
  }
}

export default connect(
  null,
  { toggleTodo }
)(Todo);
