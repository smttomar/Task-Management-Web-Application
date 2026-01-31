import {
    FaListUl,
    FaHourglassHalf,
    FaSpinner,
    FaCheckCircle,
} from "react-icons/fa";

const filters = [
    { label: "All", value: "All", icon: <FaListUl /> },
    { label: "Pending", value: "Pending", icon: <FaHourglassHalf /> },
    { label: "In Progress", value: "In Progress", icon: <FaSpinner /> },
    { label: "Completed", value: "Completed", icon: <FaCheckCircle /> },
];

const TaskFilter = ({ activeFilter, setActiveFilter }) => {
    return (
        <div className="flex flex-wrap justify-center gap-2 mb-6">
            {filters.map((filter) => (
                <button
                    key={filter.value}
                    onClick={() => setActiveFilter(filter.value)}
                    className={`flex items-center gap-2 px-4 py-2 hover:cursor-pointer rounded-full font-medium transition-all
            ${
                activeFilter === filter.value
                    ? "bg-teal-700 text-white shadow-lg scale-105"
                    : "bg-stone-200 text-gray-600 hover:bg-stone-300"
            }
          `}
                >
                    {filter.icon}
                    {filter.label}
                </button>
            ))}
        </div>
    );
};

export default TaskFilter;
