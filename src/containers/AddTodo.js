import React from 'react';
import { connect } from 'react-redux';
import { addTodo, setTemperature } from '../actions';

const mapStateToProps = props =>
  ({ todos: props.todos });

const AddTodo = (props) => {
  let input;
  function onSubmit(e) {
    e.preventDefault();
    props.addTodo(input.value);
    input.value = '';
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          required
          ref={(node) => {
              input = node;
            }
          }
        />
        <button type="submit">
          AddTodo
        </button>
      </form>
    </div>
  );
};
const AddTodoList = connect(mapStateToProps, { addTodo, setTemperature })(AddTodo);

export default AddTodoList;
