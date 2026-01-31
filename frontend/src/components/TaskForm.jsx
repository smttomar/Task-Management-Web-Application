import { useState } from "react";
import { FaPlusCircle, FaHeading, FaAlignLeft } from "react-icons/fa";
import { ImSpinner2 } from "react-icons/im";

const TaskForm = ({ addTask }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [loading, setLoading] = useState(false);

    const submitHandler = async (e) => {
        e.preventDefault();

        setLoading(true);
        await addTask({
            title,
            description,
            status: "Pending",
        });

        setLoading(false);

        setTitle("");
        setDescription("");
    };

    return (
        <form
            onSubmit={submitHandler}
            className="bg-teal-700 shadow-md rounded-xl p-5 mb-8 space-y-4"
        >
            <div className="relative">
                <FaHeading className="absolute top-3 left-3 text-stone-200" />
                <input
                    type="text"
                    placeholder="Task title"
                    className="w-full pl-10 pr-4 py-2 text-stone-300 border rounded-lg outline-none"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </div>

            <div className="relative">
                <FaAlignLeft className="absolute top-3 left-3 text-stone-200" />
                <textarea
                    placeholder="Task description"
                    className="w-full pl-10 pr-4 py-2 border rounded-lg text-stone-300 outline-none"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
            </div>

            <button
                type="submit"
                disabled={loading}
                className={`w-full flex items-center justify-center gap-2 py-2 rounded-lg font-semibold transition
          ${
              loading
                  ? "bg-stone-400 cursor-not-allowed"
                  : "bg-stone-200 hover:bg-stone-300 text-black hover:cursor-pointer"
          }
        `}
            >
                {loading ? (
                    <>
                        <ImSpinner2 className="animate-spin" />
                        Adding Task...
                    </>
                ) : (
                    <>
                        <FaPlusCircle />
                        Add Task
                    </>
                )}
            </button>
        </form>
    );
};

export default TaskForm;
