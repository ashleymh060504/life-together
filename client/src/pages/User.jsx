import Navbar from "../components/navbar"

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
      <h1 className="text-center">My Profile</h1>
      <div>
        <input 
          type="text" 
          placeholder="Task Name" 
          value={taskName} 
          onChange={(e) => setTaskName(e.target.value)} 
        />
        <input 
          type="text" 
          placeholder="Username" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
        />
        <input 
          type="date" 
          value={deadline} 
          onChange={(e) => setDeadline(e.target.value)} 
        />
        <button onClick={addTask}>Add Task</button>
      </div>

      <h2>Assigned Tasks</h2>
      <ul>
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
