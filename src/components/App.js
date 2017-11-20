import React from 'react';
import AddTodo from '../containers/DisplayAddTodo';
import DisplayTodoList from '../containers/DisplayTodoList';

class App extends React.Component {
  componentDidMount() {
    console.log(this.props);
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

export default App;
