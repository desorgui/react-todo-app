import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FiCheck } from 'react-icons/fi';

const InputTodo = (props) => {
  const [inputText, setInputText] = useState({
    title: '',
    description: '',
  });

  const onChange = (e) => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
    });
  };
  const { addTodoProps } = props;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.title.trim()) {
      addTodoProps(inputText.title, inputText.description);
      setInputText({
        title: '',
        description: '',
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2 className="popup-title">New task</h2>
      <input
        type="text"
        className="input-text"
        placeholder="Task title..."
        value={inputText.title}
        name="title"
        onChange={onChange}
      />
      <textarea
        name="description"
        id="description"
        cols="30"
        rows="10"
        placeholder="Task description..."
        value={inputText.description}
        onChange={onChange}
      />
      <button type="submit" aria-label="submit" className="input-submit"><FiCheck /></button>
    </form>
  );
};

InputTodo.propTypes = {
  addTodoProps: PropTypes.func.isRequired,
};

export default InputTodo;
