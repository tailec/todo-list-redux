import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Todo from "./Todo";
import { FILTERS } from "../filterConstants";
import { getVisibleTodos } from "../redux/reducers/index";
import { fetchTodos } from "../api";
class TodoList extends React.Component {
  componentDidMount() {
    // fetchTodos();
  }

  render() {
    const { todos } = this.props;
    return (
      <ul>
        {todos && todos.length ? (
          todos.map((todo, index) => {
            return <Todo key={index} todo={todo} />;
          })
        ) : (
          <p>Nothing here</p>
        )}
      </ul>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const todos = getVisibleTodos(
    state,
    ownProps.match.params.filter || FILTERS.ALL
  );
  return { todos };
};

export default withRouter(connect(mapStateToProps)(TodoList));
