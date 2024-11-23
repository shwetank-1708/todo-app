import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux/store";
import { addTask, removeTask } from "./redux/slices/tasksSlice";
import "./App.css";
import { RiCloseCircleLine } from "react-icons/ri";
import { TbPointFilled } from "react-icons/tb";

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
      <div className="flex flex-col justify-center items-center h-[100vh]">
        <h1 className="text-4xl font-bold m-4">To Do App</h1>
        <div className="flex gap-2 m-4">
          <input
            className="bg-gray-100 p-2 rounded-full w-[400px]"
            type="text"
            placeholder="Enter Your Task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button
            onClick={addTaskHandler}
            className="bg-sky-200 py-2 px-5 rounded-full"
          >
            Add
          </button>
        </div>
        <ul>
          {tasks.map((t, index) => (
            <li
              key={index}
              className="flex items-center justify-between w-[500px] m-2"
            >
              <div className="flex items-center">
                <TbPointFilled className="mx-2" />
                {t}{" "}
              </div>
              <div>
                <RiCloseCircleLine
                  onClick={() => removeTaskHandler(t)}
                  className="cursor-pointer"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
