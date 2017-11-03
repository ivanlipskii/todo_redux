import { connect } from 'react-redux'
import TodoList from '../components/TodoList'
import {removeTodo} from "../actions"

const mapStateToProps = (props) => {
  return {
    todos: props.todos
  }
}

const DisplayTodoList = connect(mapStateToProps, {removeTodo} )(TodoList);

export default DisplayTodoList