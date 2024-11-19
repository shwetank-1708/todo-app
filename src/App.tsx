import { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState<string[]>([]);

  const addTask = () => {
    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks, task];
      console.log(updatedTasks);
      return updatedTasks;
    });
    setTask("");
  };

  return (
    <div>
      <h1>To Do App</h1>
      <input
        type="text"
        placeholder="Enter Your Task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={addTask}>Add</button>
      <ul>
        {tasks.map((t) => (
          <li>{t}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
