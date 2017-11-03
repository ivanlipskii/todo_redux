export const addTodo = text => (
  {
    type: 'ADD_TODO',
    id: 0,
    text,
  }
);

export const removeTodo = id => (
  {
    type: 'REMOVE_TODO',
    id,
  }
);
