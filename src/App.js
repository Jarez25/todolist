import React, { useState } from 'react';
import TaskInput from './components/TaskInput';
import TaskItem from './components/TaskItem';
import Stats from './components/Stats';

function App() {
  const [toDoList, setToDoList] = useState([]);

  const addTask = (taskName) => {
    const newTask = { taskName, checked: false };
    setToDoList([...toDoList, newTask]);
  };

  function deleteTask(deleteTaskName) {
    setToDoList(toDoList.filter((task) => task.taskName !== deleteTaskName));
  }

  function toggleCheck(taskName) {
    setToDoList((prevToDoList) =>
      prevToDoList.map((task) =>
        task.taskName === taskName ? { ...task, checked: !task.checked } : task
      )
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md dark:bg-gray-800">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6 dark:text-gray-100">
          TO DO APP 📝
        </h1>

        {/* Task Input Component */}
        <TaskInput addTask={addTask} />

        <div className="mt-6">
          <span className="block text-xl font-semibold text-gray-700 dark:text-gray-200 mb-4">
            To do 📚
          </span>

          {/* Task List */}
          <ul className="list-items space-y-2">
            {toDoList.map((task, key) => (
              <TaskItem
                task={task}
                key={key}
                deleteTask={deleteTask}
                toggleCheck={toggleCheck}
              />
            ))}
          </ul>

          {/* Empty State Notification */}
          {toDoList.length === 0 ? (
            <p className="notify mt-4 text-center text-lg text-gray-500 dark:text-gray-400">
              You are Done! 🎉
            </p>
          ) : null}
        </div>
      </div>

      {/* Stats Component */}
      <Stats toDoList={toDoList} />
    </div>
  );
}

export default App;
