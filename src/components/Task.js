import React from 'react';
import PropTypes from 'prop-types';

import './Task.css';
// passing in props instead of {id, title, isComplete}
const Task = (props) => {
  // no longer using state - state should only come from App.js
  // so we only have a single source of truth!
  // const [complete, setComplete] = useState(isComplete);
  const completedButtonClick = () => {
    const updatedTask = {
      id: props.id,
      title: props.title,
      isComplete: !props.isComplete
      
    };
    // new line to update task
    props.onUpdate(updatedTask);
  };

  const buttonClass = props.isComplete ? 'tasks__item__toggle--completed' : '';

  return (
    <li className="tasks__item">
      <button
        className={`tasks__item__toggle ${buttonClass}`}
        // calling on our function created on line 10 completedButtonClick
        onClick={completedButtonClick}
      >
        {props.title}
      </button>
      <button className="tasks__item__remove button">x</button>
    </li>
  );
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
  // new line to update task
  onUpdate: PropTypes.func.isRequired
};

export default Task;
