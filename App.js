import { useState } from 'react';
import './App.css';

function App() {
  const [showTaskList, setShowTaskList] = useState(false);
  const [taskInput, setTaskInput] = useState("");
  const [page, setPage] = useState("dashboard");

  const [tasks, setTasks] = useState([
    { name: "Frontend Development", status: "Completed" },
    { name: "Requirement Analysis", status: "Completed" },
    { name: "Dashboard Layout Design", status: "Completed" },
    { name: "UI Design", status: "Pending" },
    { name: "Database Connection", status: "Pending" },
    { name: "API Integration", status: "Pending" },
    { name: "Testing and Debugging", status: "Pending" }
  ]);

  const projects = [
    "Project Management Dashboard",
    "E-Commerce Website",
    "Student Portal System",
    "Task Tracking Application",
    "Inventory Management System"
  ];

  const addTask = () => {
    if (taskInput.trim() === "") return;

    const newTask = {
      name: taskInput,
      status: "Pending"
    };

    setTasks([...tasks, newTask]);
    setTaskInput("");
    setShowTaskList(false);
  };

  const completedTasks = tasks.filter((task) => task.status === "Completed");
  const pendingTasks = tasks.filter((task) => task.status === "Pending");

  if (page === "projects") {
    return (
      <div className="App">
        <h1>Ongoing Projects</h1>

        <button className="back-btn" onClick={() => setPage("dashboard")}>
          Back to Dashboard
        </button>

        <div className="project-list">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              {project}
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (page === "completed") {
    return (
      <div className="App">
        <h1>Completed Tasks</h1>

        <button className="back-btn" onClick={() => setPage("dashboard")}>
          Back to Dashboard
        </button>

        <div className="project-list">
          {completedTasks.map((task, index) => (
            <div className="project-card" key={index}>
              {task.name}
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (page === "pending") {
    return (
      <div className="App">
        <h1>Pending Tasks</h1>

        <button className="back-btn" onClick={() => setPage("dashboard")}>
          Back to Dashboard
        </button>

        <div className="project-list">
          {pendingTasks.map((task, index) => (
            <div className="project-card" key={index}>
              {task.name}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <h1>Project Management Dashboard</h1>

      <div className="stats">
        <div className="card" onClick={() => setPage("projects")}>
          <h2>Total Projects</h2>
          <p>{projects.length}</p>
        </div>

        <div className="card" onClick={() => setPage("completed")}>
          <h2>Completed Tasks</h2>
          <p>{completedTasks.length}</p>
        </div>

        <div className="card" onClick={() => setPage("pending")}>
          <h2>Pending Tasks</h2>
          <p>{pendingTasks.length}</p>
        </div>
      </div>

      <div className="task-section">
        <h2>Recent Tasks</h2>

        <div className="add-task">
          <input
            type="text"
            placeholder="Enter new task"
            value={taskInput}
            onFocus={() => setShowTaskList(true)}
            onChange={(e) => setTaskInput(e.target.value)}
          />

          <button onClick={addTask}>Add Task</button>
        </div>

        {showTaskList && (
          <div className="suggestion-list">
            {tasks.map((task, index) => (
              <p key={index}>{task.name}</p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;