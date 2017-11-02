import React, { PropTypes } from 'react'
import Todo from './Todo'

function TodoList(todos) {
  console.log(todos);
  return (
    <div>
      {todos.map((todo) =>
        <Todo key={todo.id} todo={todo} />
      )}
    </div>
  )
};

/*TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired
};*/

export default TodoList