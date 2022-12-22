import React, { useState } from 'react';
import propTypes from 'prop-types';

const defaultTask = {
  title: '',
  description: '',
  isComplete: false,
};

const TaskForm = (props) => {
  const [formData, setFormData] = useState(defaultTask);

  const updateForm = (event) => {
    const stateName = event.target.name;
    const inputValue = event.target.value;

    const newFormData = { ...formData };
    newFormData[stateName] = inputValue;
    setFormData(newFormData);
  };

  const submitForm = (event) => {
    event.preventDefault();

    props.addTaskCallback(formData);
  };

  return (
    <form onSubmit={submitForm}>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={updateForm}
      />
      <label htmlFor="description">Description</label>
      <input
        type="text"
        name="description"
        value={formData.description}
        onChange={updateForm}
      />
      <input type="submit" value="Add Task" />
    </form>
  );
};

TaskForm.propTypes = {
  addTaskCallback: propTypes.func.isRequired,
};

export default TaskForm;
