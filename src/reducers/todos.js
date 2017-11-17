const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_CITY':
      return [
        ...state,
        action.city,
      ];
    case 'REMOVE_TODO':
      return (state.filter(todo => (todo.id !== action.id ? todo : '')));
    case 'TODO_TEMPERATURE':
      return state.map((todo) => {
        if (todo.city === action.text.currentCity) {
          return { ...todo, temperature: action.text.temperature };
        }
        return todo;
      });
    case 'INITIAL_STATE':
      return [
        ...state,
        ...action.cities];
    default:
      return state;
  }
};

export default todos;
