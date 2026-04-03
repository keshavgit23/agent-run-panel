function TaskCard({ task }) {
  return (
    <div className={`border p-4 rounded mb-3 shadow-sm bg-white
      ${task.parallel ? "ml-6 border-l-4 border-purple-400" : ""}
    `}>
      
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-semibold">{task.label}</h3>

        <span className={`px-2 py-1 rounded text-xs
          ${task.status === "running" && "bg-blue-100 text-blue-600"}
          ${task.status === "complete" && "bg-green-100 text-green-600"}
          ${task.status === "failed" && "bg-red-100 text-red-600"}
          ${task.status === "cancelled" && "bg-gray-100 text-gray-600"}
        `}>
          {task.status}
        </span>
      </div>

      <p className="text-sm text-gray-500 mb-2">
        Agent: {task.agent}
      </p>
      <ul className="text-sm text-gray-700 space-y-1">
        {task.outputs.map((o, i) => (
          <li key={i}>• {o}</li>
        ))}
      </ul>

    </div>
  );
}

export default TaskCard;