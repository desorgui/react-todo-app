import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodosList = ({
  setUpdate, handleChangeProps, deleteTodoProps, todos,
}) => (
  <ul>
    {todos.map((todo) => (
      <TodoItem
        key={todo.id}
        todo={todo}
        handleChangeProps={handleChangeProps}
        deleteTodoProps={deleteTodoProps}
        setUpdate={setUpdate}
      />
    ))}
  </ul>
);

TodosList.propTypes = {
  handleChangeProps: PropTypes.func.isRequired,
  deleteTodoProps: PropTypes.func.isRequired,
  setUpdate: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default TodosList;
