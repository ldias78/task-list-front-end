import React from 'react';
import PropTypes from 'prop-types';
import './Task.css';
// passing in props instead of {id, title, isComplete}

const Task = ({ id, title, isComplete, onUpdateTask, onDeleteTask }) => {
  const buttonClass = isComplete ? 'tasks__item__toggle--completed' : '';
  const completedButtonClick = () => {
    onUpdateTask(id, isComplete);
  };
  const deleteTask = () => {
    onDeleteTask(id);
  };

  return (
    <li className="tasks__item" key={id}>
      <button
        className={`tasks__item__toggle ${buttonClass}`}
        // calling on our function created on line 10 completedButtonClick
        onClick={completedButtonClick}
      >
        {title}
      </button>
      <button className="tasks__item__remove button" onClick={deleteTask}>
        x
      </button>
    </li>
  );
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  isComplete: PropTypes.bool,
  onUpdateTask: PropTypes.func.isRequired,
  onDeleteTask: PropTypes.func.isRequired,
};

export default Task;
