import React, { useState, useEffect } from "react";

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  //   const [storeData, setStore] = useState("");

  // const handleInputChange = (e) => {
  //   setTask(e.target.value);
  // };

  const handleAddTask = () => {
    // if (task.trim()) {
    const newTask = [...tasks, task];
    setTasks(newTask);
    localStorage.setItem("tasks", JSON.stringify(newTask));
    // }
  };

  // const handleDeleteTask = (index) => {
  //   const newTasks = tasks?.filter((_, i) => i !== index);
  //   setTasks(newTasks);
  //   localStorage.removeItem("tasks", JSON.stringify(newTasks));
  // };

  useEffect(() => {
    const storedItem = JSON.parse(localStorage.getItem("tasks"));

    if (storedItem) {
      setTasks(storedItem);
    }
  }, []);

  return (
    <div>
      <h1>To-Do List</h1>
      <input
        type="text"
        value={task}
        onChange={(e) => {
          setTask(e.target.value);
        }}
        placeholder="Enter a new task"
      />
      <button onClick={handleAddTask}>Add Task</button>
      <ul>
        {tasks?.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
      <br />
    </div>
  );
}

export default TodoList;
