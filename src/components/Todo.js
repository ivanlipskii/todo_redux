import React from 'react';

const Todo = props => (
  <div>
    <p>{props.todo.text}</p>
    <button onClick={(e) => {
          e.preventDefault();
          props.removeTodo(props.todo.id);
        }
      }
    >
      delete
    </button>
  </div>
);

export default Todo;
