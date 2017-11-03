let nextTodoId = 0;

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      nextTodoId += 1;
      return [
        ...state,
        {
          text: action.text,
          id: nextTodoId,
        },
      ];
    case 'REMOVE_TODO':
      return (state.filter(todo => (todo.id !== action.id ? todo : '')));
    default:
      return state;
  }
};

export default todos;
