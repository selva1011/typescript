import React, { useState } from 'react';

const AddTask: React.FC = () => {
  const [task, setTask] = useState<string>('');

  const handleAddTask = () => {
    if (task.trim()) {
      // Logic to add the task (e.g., update state or call an API)
      console.log('Task added:', task);
      setTask(''); // Clear the input field after adding the task
    }
  };

  return (
    <div className="flex flex-col items-center p-4 bg-gray-100 rounded-md shadow-md">
      <h2 className="text-lg font-semibold mb-4 text-gray-700">Add a New Task</h2>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter your task"
        className="mb-2 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={handleAddTask}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
      >
        Add Task
      </button>
    </div>
  );
};

export default AddTask;
