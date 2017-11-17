import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import { removeCity } from '../actions';

const mapStateToProps = props =>
  ({ todos: props.todos });

const DisplayTodoList = connect(mapStateToProps, { removeCity })(TodoList);

export default DisplayTodoList;
