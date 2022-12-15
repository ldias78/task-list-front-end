import React, { useState } from 'react';
import TaskList from './components/TaskList.js';
import './App.css';

// make this into a state so we can update taskData
// and everytime taskData is updated it should 
// affect the UI and the App component should re-render
function App () {
  const [taskData, setTaskData] = useState ([{
    id: 1,
    title: 'Mow the lawn',
    isComplete: false,
  },
  {
    id: 2,
    title: 'Cook Pasta',
    isComplete: true,
  }]);
  // creating function to update taskData in App
  // this way react will see the changes and trigger a 
  // re-render 
  const updateTaskData = (updatedTask) => {
    // updatedTask is in one argument which holds updated task data
    const tasks = taskData.map(task => {
      // create helper array to hold updated task data
      // map over taskData
      // inside map we reference each item with task
      if (task.id === updatedTask.id) {
        // of we find a task id updatedTask is updating...
        return updatedTask;
        // the item should map into our tasks array as the updated task data
      } else {
        return task;
        // otherwise map the unchaged task into tasks 
      }
    });
    setTaskData(tasks);
    // we update the taskData in our state by using our
    // function setTaskData and update it to our 
    // newwly formed tasks array 
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <div>{<TaskList tasks={taskData} 
        // new prop named onUpdateTask sends function updateTaskData to tasklist
        onUpdateTask={updateTaskData}/>}</div>
      </main>
    </div>
  );

}
// ------------- OLD/ORIGINAL CODE ---------------
// const TASKS = [
//   {
//     id: 1,
//     title: 'Mow the lawn',
//     isComplete: false,
//   },
//   {
//     id: 2,
//     title: 'Cook Pasta',
//     isComplete: true,
//   },
// ];

// const App = () => {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Ada&apos;s Task List</h1>
//       </header>
//       <main>
//         <div>{<TaskList tasks={TASKS} />}</div>
//       </main>
//     </div>
//   );
// };
// ------------- OLD/ORIGINAL CODE ---------------

export default App;
