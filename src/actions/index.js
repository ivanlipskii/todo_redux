export const todoTemperature = text => (
  {
    type: 'TODO_TEMPERATURE',
    text,
  }
);

export const addId = () => (
  {
    type: 'ADD_ID',
  }
)

export const setTemperature = city => dispatch =>
  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f897602315c3e8c1bbf2f287508a0415`)
    .then(res => res.json())
    .then(data => dispatch(todoTemperature({
      currentCity: city,
      temperature: data.main.temp - 273,
    })))
    .catch((error) => {
      console.error(error);
      throw Error('Что-то пошло не так');
    });

export const addTodo = city => (dispatch) => {
  dispatch({
    type: 'ADD_TODO',
    city,
  });
  dispatch(addId());
  dispatch(setTemperature(city));
};

export const removeTodo = id => (
  {
    type: 'REMOVE_TODO',
    id,
  }
);
