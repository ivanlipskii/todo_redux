const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      console.log(action);
      return [
          ...state,
          {
            text: action.text,
            id: action.id
          }
        ]
    case 'REMOVE_TODO':
      return(state.filter((todo) => todo.id !== action.id ? todo : ''));
    default:
      return state
  }
}

export default todos
