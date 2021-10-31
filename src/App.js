import React from 'react';
import { connect } from 'react-redux';
import { handleSubmit } from './store/action';
import TodoList from './TodoList';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: '',
      check: false,
    };
  }
  updateTodo = (event) => {
    this.setState({
      todo: event.target.value,
    });
  };
  handleChange = ({ target }) => {
    var { name, value } = target;
    this.setState({
      [name]: value,
    });
  };
  emptyInputTag = (event) => {
    event.target.value = '';
  };

  render() {
    return (
      <div>
        <input
          placeholder='Enter a TODO'
          value={this.state.todo}
          onChange={this.handleChange}
          onKeyUp={(event) => this.updateTodo(event)}
          name='todo'
        />
        <button
          onClick={() =>
            this.props.dispatch(handleSubmit(this.state.todo, this.state.check))
          }
        >
          ADD
        </button>
        <TodoList {...this.state} />
      </div>
    );
  }
}
function getState(state) {
  return {
    todo: state,
  };
}

export default connect(getState)(App);
