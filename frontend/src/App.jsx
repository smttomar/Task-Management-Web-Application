import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { FaTasks } from "react-icons/fa";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import TaskFilter from "./components/TaskFilter";
import bgImage from "./assets/task2.png";

const API_URL =
    "https://task-management-web-application-production.up.railway.app/api/tasks";

function App() {
    const [tasks, setTasks] = useState([]);
    const [activeFilter, setActiveFilter] = useState("All");

    const fetchTasks = async () => {
        try {
            const res = await axios.get(API_URL);
            setTasks(res.data);
        } catch {
            toast.error("Failed to load tasks");
        }
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    const addTask = async (task) => {
        try {
            await axios.post(API_URL, task);
            toast.success("Task added");
            fetchTasks();
        } catch {
            toast.error("Failed to add task");
        }
    };

    const deleteTask = async (id) => {
        try {
            await axios.delete(`${API_URL}/${id}`);
            toast.success("Task deleted");
            fetchTasks();
        } catch {
            toast.error("Failed to delete task");
        }
    };

    const updateTask = async (id, status) => {
        try {
            await axios.put(`${API_URL}/${id}`, { status });
            toast.success("Status updated");
            fetchTasks();
        } catch {
            toast.error("Failed to update status");
        }
    };

    const filteredTasks =
        activeFilter === "All"
            ? tasks
            : tasks.filter((task) => task.status === activeFilter);

    return (
        <div
            className="min-h-screen flex items-center justify-center p-4 bg-cover bg-center"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            <div className="relative w-screen bg-transparent max-w-2xl backdrop-blur-lg shadow-2xl rounded-2xl p-8 animate-fadeIn">
                <div className="flex items-center justify-center gap-3 mb-6">
                    <FaTasks className="text-stone-300 text-3xl" />
                    <h1 className="text-3xl font-extrabold text-stone-300">
                        Task Manager
                    </h1>
                </div>

                <TaskFilter
                    activeFilter={activeFilter}
                    setActiveFilter={setActiveFilter}
                />

                <TaskForm addTask={addTask} />

                <TaskList
                    tasks={filteredTasks}
                    deleteTask={deleteTask}
                    updateTask={updateTask}
                />
            </div>
        </div>
    );
}

export default App;
