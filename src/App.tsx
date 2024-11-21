import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux/store";
import { addTask, removeTask } from "./redux/slices/tasksSlice";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const dispatch = useDispatch();

  const addTaskHandler = () => {
    if (task.trim()) {
      dispatch(addTask(task));
      setTask("");
    }
  };

  const removeTaskHandler = (taskToRemove: string) => {
    dispatch(removeTask(taskToRemove));
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
      <button onClick={addTaskHandler}>Add</button>
      <ul>
        {tasks.map((t, index) => (
          <li key={index}>
            {t} <button onClick={() => removeTaskHandler(t)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
