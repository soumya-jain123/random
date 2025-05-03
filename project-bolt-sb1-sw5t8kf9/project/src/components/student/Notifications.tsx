import React from 'react';

const Notifications = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Notifications</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Content will be implemented later */}
        <div className="p-6 bg-white rounded-lg shadow dark:bg-gray-800">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Library Notifications</h3>
          <p className="mt-2 text-gray-600 dark:text-gray-300">View your library notifications</p>
        </div>
      </div>
    </div>
  );
};

export default Notifications;