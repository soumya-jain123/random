import React from 'react';

const ReturnBooks = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Return Books</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Content will be implemented later */}
        <div className="p-6 bg-white rounded-lg shadow dark:bg-gray-800">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Book Return System</h3>
          <p className="mt-2 text-gray-600 dark:text-gray-300">Return your borrowed books</p>
        </div>
      </div>
    </div>
  );
};

export default ReturnBooks;