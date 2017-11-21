import { connect } from 'react-redux';
import { addCityInServer, setTemperature } from '../actions';
import AddTodo from '../components/AddCity';

const mapStateToProps = props =>
  ({ todos: props.todos });

const DisplayAddTodo = connect(mapStateToProps, { addCityInServer, setTemperature })(AddTodo);

export default DisplayAddTodo;
