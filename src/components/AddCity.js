import React from 'react';

const AddTodo = (props) => {
  let input;
  function onSubmit(e) {
    e.preventDefault();
    props.addCityInServer(input.value);
    input.value = '';
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          required
          ref={(node) => {
            input = node;
          }
          }
        />
        <button type="submit">
          AddTodo
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
