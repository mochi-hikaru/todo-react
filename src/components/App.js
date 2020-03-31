import React from 'react';
import { connect } from 'react-redux';

import { getTodo } from '../actions';

class App extends React.Component {

  componentDidMount() {
    this.props.getTodo();
  }

  list = (todos) => {
    const list = todos.map((todo, index) => (
      <li key={index}>{todo.task}</li>
    ));

    return list;
  }

  render() {
    console.log(this.props.todolist);
    return (
      <div>
        <h1>TodoList</h1>
        <ul>{this.list(this.props.todolist)}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todolist: state,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getTodo: () => {
      dispatch(getTodo());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
