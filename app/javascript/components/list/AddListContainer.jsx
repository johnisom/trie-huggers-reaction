import React from "react";
import { connect } from "react-redux";
import AddList from "./AddList";
import * as actions from "../../actions/ListActions";

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSubmit: (newList, callback) => {
      dispatch(actions.createList(newList, ownProps.boardId, callback));
    },
  };
};

class AddListContainer extends React.Component {
  state = {
    addInputOpen: false,
    title: "",
  };

  toggleInput = () => {
    this.setState({ addInputOpen: !this.state.addInputOpen });
  };

  handleAddClick = () => {
    this.toggleInput();
  };

  handleTextChange = (e) => {
    this.setState({
      title: e.target.value,
    });
  };

  handleSubmitClick = () => {
    this.toggleInput();

    const newList = { title: this.state.title };

    this.props.onSubmit(newList, () => {
      this.setState({
        title: "",
      });
      this.toggleInput();
    });
  };

  handleAddCancelClick = () => {
    this.toggleInput();
  };

  render() {
    return (
      <AddList
        title={this.state.title}
        inputOpen={this.state.addInputOpen}
        onTextChange={this.handleTextChange}
        onAddClick={this.handleAddClick}
        onSubmitClick={this.handleSubmitClick}
        onAddCancelClick={this.handleAddCancelClick}
      />
    );
  }
}

export default connect(null, mapDispatchToProps)(AddListContainer);
