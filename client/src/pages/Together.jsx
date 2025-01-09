import React, { useState } from 'react';
import '../index.css';
import Navbar from '../components/Navbar.jsx';
import Welcome from '../components/group-page/Welcome.jsx';
import Chores from '../components/group-page/Chores.jsx';
import InviteFriends from '../components/group-page/InviteFriends.jsx';
import AddChore from '../components/group-page/AddChore.jsx';

function Together() {

  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [currentTaskIndex, setCurrentTaskIndex] = useState(null);

  const addTask = () => {
    if (task) {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask('');
    }
  };

  const editTask = (index) => {
    setTask(tasks[index].text);
    setIsEditing(true);
    setCurrentTaskIndex(index);
  };

  const updateTask = () => {
    if (task) {
      const updatedTasks = tasks.map((t, index) =>
        index === currentTaskIndex ? { ...t, text: task } : t
      );
      setTasks(updatedTasks);
      setTask('');
      setIsEditing(false);
      setCurrentTaskIndex(null);
    }
  };

  const toggleCompletion = (index) => {
    const updatedTasks = tasks.map((t, i) =>
      i === index ? { ...t, completed: !t.completed } : t
    );
    setTasks(updatedTasks);
  };

  const removeTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div>
      <Navbar one={'Log Out'} two={<InviteFriends/>} three={'Dark Mode'} btn={'My Profile'}/>
      <Welcome/>
      <Chores/>
      <AddChore/>
      {/* <div className="app">
        <h1>To-Do List</h1>
        <div className="input-container">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Add a new task"
          />
          <button onClick={isEditing ? updateTask : addTask}>
            {isEditing ? 'Update' : 'Add'}
          </button>
        </div>
        <ul className="task-list">
          {tasks.map((task, index) => (
            <li key={index} className={task.completed ? 'completed' : ''}>
              <span onClick={() => toggleCompletion(index)}>{task.text}</span>
              <button onClick={() => editTask(index)}>Edit</button>
              <button onClick={() => removeTask(index)}>Remove</button>
            </li>
          ))}
        </ul>
      </div> */}
      {/* <CleaningChores /> */}
    </div>
  );
};

export default Together;