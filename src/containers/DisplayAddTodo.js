import { connect } from 'react-redux';
import { addTodo, setTemperature } from '../actions';
import AddTodo from '../components/AddTodo';

const mapStateToProps = props =>
  ({ todos: props.todos });

const DisplayAddTodo = connect(mapStateToProps, { addTodo, setTemperature })(AddTodo);

export default DisplayAddTodo;
