import React, {PropTypes} from 'react'
import {removeTodo} from "../actions/index";

let Todo = (todo) => (
  <div>
    <p>{todo.text}</p>
    <button onClick={console.log(123)}>delete</button>
  </div>
);

export default Todo