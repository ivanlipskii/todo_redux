export const todoTemperature = text => (
  {
    type: 'TODO_TEMPERATURE',
    text,
  }
);

export const initialState = cities => (
  {
    type: 'INITIAL_STATE',
    cities,
  }
);

export const addCity = city => (
  {
    type: 'ADD_CITY',
    city,
  }
);

export const setTemperature = city => dispatch => (
  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f897602315c3e8c1bbf2f287508a0415`)
    .then(res => res.json())
    .then(data => dispatch(todoTemperature({
      currentCity: city,
      temperature: data.main.temp - 273,
    })))
    .catch((error) => {
      console.error(error);
      throw Error('Что-то пошло не так');
    })
);

export const addCityInServer = city => (dispatch) => {
  fetch('http://localhost:8080', {
    method: 'post',
    body: JSON.stringify(city),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(res => res.json())
    .then(data => dispatch(addCity({
      id: data,
      city: city.city,
    })))
    .catch((error) => {
      console.error(error);
      throw Error('Что-то не так в addCityInServer');
    });
};

export const addTodo = city => (dispatch) => {
  dispatch(addCityInServer({ city }));
  dispatch(setTemperature(city));
};

export const setInitialState = () => dispatch =>
  fetch('http://localhost:8080')
    .then(res => res.json())
    .then((data) => {
      dispatch(initialState(data));
      data.forEach(item => dispatch(setTemperature(item.city)));
    })
    .catch((error) => {
      console.error(error);
      throw Error('Ошибка в setInitialState');
    });

export const removeTodo = id => (
  {
    type: 'REMOVE_TODO',
    id,
  }
);

export const removeCity = id => (dispatch) => {
  fetch('http://localhost:8080', {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id }),
  })
    .then(() => dispatch(removeTodo(id)))
    .catch((error) => {
      console.error(error);
      throw Error('Ошибка в removeCity');
    });
};
