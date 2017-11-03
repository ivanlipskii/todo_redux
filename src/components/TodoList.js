import React from 'react';
import Todo from './Todo';

const TodoList = props =>
  (<div>
    {props.todos.map(todo =>
      <Todo key={todo.id} todo={todo} removeTodo={props.removeTodo} />)
    }
  </div>);

export default TodoList;
