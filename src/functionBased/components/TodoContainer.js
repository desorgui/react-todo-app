import React, { useState, useEffect } from 'react';
import { FiPlus, FiArrowLeft } from 'react-icons/fi';
import { v4 as uuidv4 } from 'uuid';
import Header from './Header';
import InputTodo from './InputTodo';
import TodosList from './TodosList';

const TodoContainer = () => {
  const [todos, setTodos] = useState(getInitialTodos()); // eslint-disable-line
  const [open, setOpen] = useState(false);

  const handleChange = (id) => {
    setTodos((prevState) => prevState.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    }));
  };

  const delTodo = (id) => {
    setTodos([
      ...todos.filter((todo) => todo.id !== id),
    ]);
  };

  const addTodoItem = (title, description) => {
    const newTodo = {
      id: uuidv4(),
      title,
      description,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setOpen(false);
  };

  const setUpdate = (updatedTitle, id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.title = updatedTitle; // eslint-disable-line
        }
        return todo;
      }),
    );
  };

  function getInitialTodos() {
    // getting stored items
    const temp = localStorage.getItem('todos');
    const savedTodos = JSON.parse(temp);
    return savedTodos || [];
  }

  const Popup = () => (
    <div className="popup-container">
      <div className="popup-header">
        <button aria-label="close" className="close-popup" type="button" onClick={() => setOpen(false)}><FiArrowLeft /></button>
      </div>
      <InputTodo addTodoProps={addTodoItem} />
    </div>
  );

  useEffect(() => {
    // storing todos items
    const temp = JSON.stringify(todos);
    localStorage.setItem('todos', temp);
  }, [todos]);

  return (
    <>
      <div className="container">
        <div className="inner">
          <Header />
          <button type="button" onClick={() => setOpen(true)} className="addTodo">
            <FiPlus />
          </button>
          {open ? <Popup /> : null}
          <TodosList
            todos={todos}
            handleChangeProps={handleChange}
            deleteTodoProps={delTodo}
            setUpdate={setUpdate}
          />
        </div>
      </div>
    </>
  );
};

export default TodoContainer;
