const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          city: action.city,
        },
      ];
    case 'REMOVE_TODO':
      return (state.filter(todo => (todo.id !== action.id ? todo : '')));
    case 'ADD_ID':
      return state.map((todo, index) => Object.assign({ ...todo }, { id: index + 1 }))
    case 'TODO_TEMPERATURE':
      return state.map((todo) => {
        if (todo.city === action.text.currentCity) {
          return Object.assign({ ...todo }, { temperature: action.text.temperature });
        }
        return todo;
      });
    default:
      return state;
  }
};

export default todos;
