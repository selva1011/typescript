import { useState } from 'react';
import AddTask from './AddTask';

interface Task {
  id: number;
  title: string;
}

const Todo: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (taskTitle: string) => {
    const newTask: Task = { id: Date.now(), title: taskTitle };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-gray-100 rounded-md shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-gray-700 text-center">To-Do List</h2>
      <AddTask onAddTask={addTask} />
      <ul className="list-none p-0">
        {tasks.map(task => (
          <li key={task.id} className="flex justify-between items-center mb-2 p-2 bg-white rounded-md shadow-sm">
            <span>{task.title}</span>
            <button
              onClick={() => deleteTask(task.id)}
              className="text-red-500 hover:text-red-600 transition duration-300"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
