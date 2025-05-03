import React from 'react';

const OverdueBooks = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Overdue Books</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Content will be implemented later */}
        <div className="p-6 bg-white rounded-lg shadow dark:bg-gray-800">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Overdue Books List</h3>
          <p className="mt-2 text-gray-600 dark:text-gray-300">Track overdue book returns</p>
        </div>
      </div>
    </div>
  );
};

export default OverdueBooks;