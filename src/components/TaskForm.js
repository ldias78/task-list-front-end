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
};
export default TaskForm;
