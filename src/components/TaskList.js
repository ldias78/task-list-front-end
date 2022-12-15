import React from 'react';
import PropTypes from 'prop-types';
import Task from './Task';
import './TaskList.css';
// passing in props intead of {tasks}
const TaskList = (props) => {
  const getTaskListJSX = (props) => {
    return props.tasks.map((task) => {
      return (
        <Task
          key={task.id}
          id={task.id}
          title={task.title}
          isComplete={task.isComplete}
          onUpdate={props.onUpdateTask}
          onDeleteTask={props.onDeleteTask}
          // send the function onUpdateTask refrence 
          //  from the tasks to the task component 
          // now each task component has a prop named onUpdate
          // the value of onUpdate is whatever we pass in a prop.onUpdateTask
          // which we expect to be a refrence to our updateTaskData function 
        />
      );
    });
  };
  return <ul className="tasks__list no-bullet">{getTaskListJSX(props)}</ul>;
};

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      isComplete: PropTypes.bool.isRequired,
    })
  ),
  onUpdateTask: PropTypes.func.isRequired,
  // task list now expects a prop named onUpdateTask 
  // whose value is a refrence to a function
  onDeleteTask: PropTypes.func.isRequired
};

export default TaskList;
