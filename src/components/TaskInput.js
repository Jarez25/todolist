import React, { useState } from 'react';

const TaskInput = ({ addTask }) => {
  const [task, setTask] = useState('');

  function handleInputValue(event) {
    setTask(event.target.value);
  }

  function handleAddTask(event) {
    event.preventDefault();
    if (task.trim() === '') return;
    addTask(task);
    setTask('');
  }

  return (
    <form className="flex items-center gap-2 mb-4" onSubmit={handleAddTask}>
      <input
        type="text"
        value={task}
        placeholder="Add Item"
        onChange={handleInputValue}
        className="flex-grow px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
      />
      <button
        type="submit"
        className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-blue-700 dark:hover:bg-blue-800"
      >
        +
      </button>
    </form>
  );
};

export default TaskInput;
