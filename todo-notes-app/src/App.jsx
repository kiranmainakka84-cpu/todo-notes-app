import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Notes from "./components/Notes";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
const completedTasks = tasks.filter(task => task.completed).length;
  const addTask = () => {
   if (task.trim() === "") {
  alert("Please enter a task");
  return;
} 

    setTasks([...tasks, { text: task, completed: false }]);
    setTask("");
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const completeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  return (
    <div className="container">
      <Header />
<div className="stats">
  <h3>Total Tasks: {tasks.length}</h3>
  <h3>completed: {completedTasks}</h3>
</div>
      <div className="input-section">
        <input
          type="text"
          placeholder="Enter your task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyDown={(e) => {
  if (e.key === "Enter") {
    addTask();
  }
}}
        />

        <button onClick={addTask}>Add Task</button>
      </div>

      <ul className="task-list">
        {tasks.map((item, index) => (
          <li key={index}>
            <span
  style={{
    textDecoration: item.completed ? "line-through" : "none",
    color: item.completed ? "green" : "#333",
    fontWeight: "bold",
  }}
>
  {item.text}
</span>
            <div>
              <button
                className="complete-btn"
                onClick={() => completeTask(index)}
              >
                ✓
              </button>

              <button
                className="delete-btn"
                onClick={() => deleteTask(index)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
      {tasks.length === 0 && (
  <p style={{ marginTop: "20px", color: "#777" }}>
    No tasks added yet.
  </p>
)}
<Notes />
    </div>
  );
}

export default App;