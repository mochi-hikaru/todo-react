import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    }
  }

  onChange = (e) => {
    let msg = e.target.value;
    this.setState({
      input: msg
    });
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { addTodo } = this.props;
    addTodo(this.state.input);
    this.setState({
      input: ""
    });
  }

  render() {
    return (
      <form>
        <input type="text" onChange={this.onChange} value={this.state.input} />
        <input type="submit" value="登録" onClick={this.onSubmit} />
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: (value) => {
      dispatch(addTodo(value));
    }
  }
}

export default connect(null, mapDispatchToProps)(Add);