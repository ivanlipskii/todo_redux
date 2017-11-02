import { connect } from 'react-redux'
import TodoList from '../components/TodoList'

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

const DisplayTodoList = connect(mapStateToProps)(TodoList);

export default DisplayTodoList