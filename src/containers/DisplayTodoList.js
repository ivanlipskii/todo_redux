import { connect } from 'react-redux'
import TodoList from '../components/TodoList'

const mapStateToProps = (state) => {
  console.log(state);
}

const DisplayTodoList = connect(mapStateToProps)(TodoList);

export default DisplayTodoList