import React, { PropTypes } from 'react'
import Todo from '../containers/Todo'

function TodoList(state) {
  console.log(state);
  return (
    <div>
      {state.todos.map((todo) =>
        <Todo key={todo.id} {...todo} />
      )}
    </div>
  )
};

export default TodoList