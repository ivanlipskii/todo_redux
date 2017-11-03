import React from 'react'
import Todo from './Todo'

function TodoList(props) {
  return (
    <div>
      {props.todos.map((todo, onClick) =>
        <Todo key={todo.id} todo={todo} removeTodo={props.removeTodo}/>
      )}
    </div>
  )
};

export default TodoList