import React, { useEffect, useState } from 'react';
import TaskList from './components/TaskList.js';
import './App.css';
import axios from 'axios';
import TaskForm from './components/TaskForm.js';

// make this into a state so we can update taskData
// and everytime taskData is updated it should
// affect the UI and the App component should re-render
function App() {
  const [taskData, setTaskData] = useState([]);
  const URL = 'https://task-list-api-c17.herokuapp.com/tasks';

  const getTasks = () => {
    axios
      .get(URL)
      .then((response) => {
        const newTasks = response.data.map((task) => {
          return {
            id: task.id,
            title: task.title,
            isComplete: task.isComplete,
          };
        });
        setTaskData(newTasks);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(getTasks, []);

  const updateTaskData = (id, isComplete) => {
    if (isComplete) {
      axios
      .patch(`${URL}/${id}/mark_complete`)
      .then(() => {
        const newTasks = [];
        for (const task of taskData) {
          const newTask = { ...task };
          if (newTask.id === id) {
            newTask.isComplete = !newTask.isComplete;
          }
          newTasks.push(newTask);
        }
        setTaskData(newTasks);
      })
      .catch((error) => {
        console.log(error);
      });
    }
  };

  const deleteTask = (id) => {
    axios
      .delete(`${URL}/${id}`)
      .then(() => {
        const newTasks = [];
        for (let i = 0; i < taskData.length; i++) {
          if (taskData[i].id === id) {
            taskData.splice(i, 1);
          } else {
            newTasks.push(taskData[i]);
          }
        }
        setTaskData(newTasks);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const addTask = (taskInfo) => {
    axios
      .post(URL, taskInfo)
      .then((response) => {
        console.log(response);
        getTasks();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <div>
          <TaskList
            tasks={taskData}
            onUpdateTask={updateTaskData}
            onDeleteTask={deleteTask}
          ></TaskList>
          <TaskForm addTaskCallback={addTask} />
        </div>
      </main>
    </div>
  );
}

export default App;
