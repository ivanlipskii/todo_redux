import React from 'react';
import { connect } from 'react-redux';
import AddTodo from '../containers/AddTodo';
import DisplayTodoList from '../containers/DisplayTodoList';
import { setInitialState } from '../actions';

const mapStateToProps = props =>
  ({ todos: props.todos });

class AddApp extends React.Component {
  componentDidMount() {
    this.props.setInitialState();
  }
  render() {
    return (
      <div>
        <AddTodo />
        <DisplayTodoList />
      </div>
    );
  }
}

const App = connect(mapStateToProps, { setInitialState })(AddApp);


export default App;
