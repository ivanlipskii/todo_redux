import React from 'react';

const Todo = props =>
  (<div>
    <p>{props.todo.city}</p>
    <p>{props.todo.temperature}</p>
    <button onClick={(e) => {
      e.preventDefault();
      props.removeCity(props.todo.id);
    }
    }
    >
      delete
    </button>
   </div>);

export default Todo;
