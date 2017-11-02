import React, {PropTypes} from 'react'
import {removeTodo} from "../actions/index";


const Todo = (todo) => (
  <div>
    <p>{todo.text}</p>
    <button onClick={() => removeTodo(todo.id)}>delete</button>
  </div>
);

export default Todo