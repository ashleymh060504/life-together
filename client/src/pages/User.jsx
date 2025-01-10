import Navbar from "../components/Navbar";
import CleaningChores from "../components/cleaning-chores";
import React, { useState } from 'react';

const User = () => {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [taskName, setTaskName] = useState('');
  const [username, setUsername] = useState('');
  const [deadline, setDeadline] = useState('');

  const addTask = () => {
    if (taskName && username && deadline) {
      setTasks([...tasks, { taskName, username, deadline, completed: false }]);
      setTaskName('');
      setUsername('');
      setDeadline('');
    }
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const updateStatus = (index) => {
    const newTasks = tasks.map((task, i) => 
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
  };

  const completeTask = (index) => {
    const taskToComplete = tasks[index];
    setCompletedTasks([...completedTasks, taskToComplete]);
    deleteTask(index);
  };

  return (
    <div>
      <div><Navbar/></div>
        <div>
        <h1 class = "text-center">My profile</h1>
          </div>
            <h2>Assigned Tasks</h2>
              <ul>
                <CleaningChores/>
              {tasks.map((task, index) => (
              <li key={index}>
                <div>
                <span>{task.taskName} - {task.username} - {task.deadline}</span>
                <button onClick={() => updateStatus(index)}>
                {task.completed ? 'Undo' : 'Complete'}
                </button>
                <button onClick={() => completeTask(index)}>Complete Task</button>
                <button onClick={() => deleteTask(index)}>Delete</button>
              </div>
            </li>
          ))}
       </ul>
      <h2>Completed Tasks</h2>
      <ul>
        {completedTasks.map((task, index) => (
          <li key={index}>
            <span>{task.taskName} - {task.username} - {task.deadline}</span>
           </li>
           ))}
         </ul>
       </div>
 );
};

export default User;

// function User() {

 


//   /*
//   fetch("/api/users/")
//   .then(res =>  res.json())
//   .then(data => {
//     console.log(data)}


//   */
//   return (
//     <>
//     <div>
//       <Navbar/>
//     </div>

//     <div>
//       <h1 className="text-center">My profile</h1>
//     </div>

    

//     </>

//   )
// }   

// export default User
