import { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState<string[]>([]);

  const manageTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask(""); // Clear the input after adding
    } else {
      alert("Task cannot be empty!");
    }
  };

  return (
    <div>
      <h1>To Do App</h1>
      <input
        type="text"
        placeholder="Enter Your Task"
        value={task}
        onChange={(e) => setTask(e.target.value)} // Update state on input change
      />
      <button onClick={manageTask}>Add</button>
      <ul>
        {tasks.map((t, index) => (
          <li key={index}>{t}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
