import React from 'react';
import { connect } from 'react-redux';
import AddTodo from '../containers/DisplayAddTodo';
import DisplayTodoList from '../containers/DisplayTodoList';
import { getCitiesList } from '../actions';

const mapStateToProps = props => ({
  todos: props.todos,
});

class App extends React.Component {
  componentDidMount() {
    this.props.getCitiesList();
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

const DisplayApp = connect(mapStateToProps, { getCitiesList })(App);

export default DisplayApp;

