import React from 'react';
import { MdDeleteSweep } from 'react-icons/md';

const TaskItem = ({ task, deleteTask, toggleCheck }) => {
  return (
    <li className="flex items-center justify-between p-4 mb-2 bg-white rounded-lg shadow-sm dark:bg-gray-800">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={task.checked}
          onChange={() => toggleCheck(task.taskName)}
          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
        />
        <p
          className={`ml-3 text-gray-900 dark:text-gray-100 ${
            task.checked ? 'line-through text-gray-400' : ''
          }`}
        >
          {task.taskName}
        </p>
      </div>
      <MdDeleteSweep
        className="text-red-500 transition duration-200 ease-in-out cursor-pointer hover:text-red-700"
        onClick={() => deleteTask(task.taskName)}
        size={24}
      />
    </li>
  );
};

export default TaskItem;
