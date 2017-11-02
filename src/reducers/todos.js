const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      console.log(state);
      return [
          ...state,
          {
            text: action.text,
            id: action.id
          }
        ]
    case 'REMOVE_TODO':
      return Object.assign({}, state, {
        todos: state.filter((todo) => {
          if (todo.id !== action.id) return true
        })
      })
    default:
      return state
  }
}

export default todos
