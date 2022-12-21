import React from 'react';
import PropTypes from 'prop-types';
import Task from './Task';
import './TaskList.css';
// passing in props intead of {tasks}
const TaskList = ({ tasks, onUpdateTask, onDeleteTask }) => {
  const getTaskListJSX = (tasks) => {
    return tasks.map((task) => {
      return (
        <Task
          key={task.id}
          id={task.id}
          title={task.title}
          description={task.description}
          isComplete={task.isComplete}
          onUpdateTask={onUpdateTask}
          onDeleteTask={onDeleteTask}
        />
      );
    });
  };
  return <ul className="tasks__list no-bullet">{getTaskListJSX(tasks)}</ul>;
};

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      isComplete: PropTypes.bool,
      description: PropTypes.string,
    })
  ).isRequired,
  onUpdateTask: PropTypes.func.isRequired,
  // task list now expects a prop named onUpdateTask
  // whose value is a refrence to a function
  onDeleteTask: PropTypes.func.isRequired,
};

export default TaskList;
