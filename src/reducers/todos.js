let nextTodoId = 0;

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      nextTodoId += 1;
      return [
        ...state,
        {
          city: action.city,
          id: nextTodoId,
        },
      ];
    case 'REMOVE_TODO':
      return (state.filter(todo => (todo.id !== action.id ? todo : '')));
    case 'TODO_TEMPERATURE':
      return state.map((todo) => {
        if (todo.city === action.text.currentCity) {
          return ({ ...todo, temperature: action.text.temperature });
        }
        return todo;
      });
    default:
      return state;
  }
};

export default todos;
