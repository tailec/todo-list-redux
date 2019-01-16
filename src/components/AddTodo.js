import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../redux/actions";

class AddTodo extends React.Component {
  state = {
    text: ""
  };

  handleTextChange = text => {
    this.setState({ text });
  };

  handleButtonClick = () => {
    this.props.addTodo(this.state.text);
    this.setState({ text: "" });
  };

  render() {
    return (
      <React.Fragment>
        <input
          placeholder="Write here"
          value={this.state.text}
          onChange={e => this.handleTextChange(e.target.value)}
        />
        <button onClick={this.handleButtonClick}>Add</button>
      </React.Fragment>
    );
  }
}

export default connect(
  null,
  { addTodo }
)(AddTodo);
