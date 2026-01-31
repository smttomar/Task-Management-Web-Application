import {
    FaTrashAlt,
    FaCheckCircle,
    FaHourglassHalf,
    FaSpinner,
} from "react-icons/fa";
import { ImSpinner2 } from "react-icons/im";
import { useState } from "react";

const statusStyles = {
    Pending: {
        color: "bg-teal-600 text-stone-200",
        icon: <FaHourglassHalf />,
    },
    "In Progress": {
        color: "bg-teal-600 text-stone-200",
        icon: <FaSpinner className="animate-spin" />,
    },
    Completed: {
        color: "bg-teal-600 text-stone-200",
        icon: <FaCheckCircle />,
    },
};

const TaskList = ({ tasks, deleteTask, updateTask }) => {
    const [deletingId, setDeletingId] = useState(null);

    const handleDelete = async (id) => {
        setDeletingId(id);
        await deleteTask(id);
        setDeletingId(null);
    };

    if (tasks.length === 0) {
        return (
            <div className="text-center text-stone-300 py-10">
                <FaCheckCircle className="mx-auto text-4xl mb-3 text-stone-300" />
                <p>No tasks yet. Start by adding one above.</p>
            </div>
        );
    }

    return (
        <div className="space-y-4">
            {tasks.map((task) => (
                <div
                    key={task._id}
                    className="bg-teal-700 shadow-sm rounded-xl p-4 hover:shadow-md transition"
                >
                    <div className="flex justify-between items-start">
                        <div>
                            <h3 className="text-lg text-stone-200 font-semibold">
                                {task.title}
                            </h3>
                            <p className="text-stone-300">{task.description}</p>
                        </div>

                        <span
                            className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${statusStyles[task.status].color}`}
                        >
                            {statusStyles[task.status].icon}
                            {task.status}
                        </span>
                    </div>

                    <div className="flex justify-between items-center mt-4">
                        <select
                            value={task.status}
                            onChange={(e) =>
                                updateTask(task._id, e.target.value)
                            }
                            className="border text-stone-200 rounded-md px-3 py-1 focus:outline-none hover:cursor-pointer"
                        >
                            <option className="text-black">Pending</option>
                            <option className="text-black">In Progress</option>
                            <option className="text-black">Completed</option>
                        </select>

                        <button
                            onClick={() => handleDelete(task._id)}
                            disabled={deletingId === task._id}
                            className={`flex items-center gap-2 font-medium transition
                ${
                    deletingId === task._id
                        ? "text-stone-400 cursor-not-allowed"
                        : "text-stone-200 hover:text-stone-300"
                }
              `}
                        >
                            {deletingId === task._id ? (
                                <>
                                    <ImSpinner2 className="animate-spin" />
                                    Deleting...
                                </>
                            ) : (
                                <>
                                    <FaTrashAlt />
                                    Delete
                                </>
                            )}
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TaskList;
