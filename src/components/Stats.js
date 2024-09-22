import React from 'react';

const Stats = ({ toDoList }) => {
  const countList = toDoList.length;

  return (
    <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      <p
        className={`text-lg font-medium text-center ${
          countList === 0
            ? 'text-green-600 dark:text-green-400'
            : 'text-blue-600 dark:text-blue-400'
        }`}
      >
        {countList === 0
          ? 'You got everything! Ready to go ✈️'
          : `You have ${countList} items on your list.`}
      </p>
    </div>
  );
};

export default Stats;
