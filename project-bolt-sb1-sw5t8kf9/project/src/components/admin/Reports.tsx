import { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, Filter, Calendar } from 'lucide-react';

const Reports = () => {
  const [selectedReport, setSelectedReport] = useState('books');
  const [dateRange, setDateRange] = useState('month');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: 'spring',
        stiffness: 100
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="space-y-6"
    >
      <motion.div 
        variants={itemVariants}
        className="flex items-center justify-between"
      >
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
          System Reports
        </h1>
        
        <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-lg shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <Download className="h-5 w-5 mr-2" />
          Export Report
        </button>
      </motion.div>
      
      <motion.div 
        variants={itemVariants}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
              Report Type
            </h2>
            <Filter className="h-5 w-5 text-gray-500 dark:text-gray-400" />
          </div>
          
          <div className="space-y-3">
            {[
              { id: 'books', label: 'Books Overview' },
              { id: 'users', label: 'User Statistics' },
              { id: 'fines', label: 'Fine Collection' },
              { id: 'activity', label: 'System Activity' }
            ].map((type) => (
              <button
                key={type.id}
                onClick={() => setSelectedReport(type.id)}
                className={`w-full flex items-center p-3 rounded-lg transition-colors ${
                  selectedReport === type.id
                    ? 'bg-indigo-50 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300'
                    : 'text-gray-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700'
                }`}
              >
                <FileText className="h-5 w-5 mr-3" />
                {type.label}
              </button>
            ))}
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
              Time Period
            </h2>
            <Calendar className="h-5 w-5 text-gray-500 dark:text-gray-400" />
          </div>
          
          <div className="space-y-3">
            {[
              { id: 'week', label: 'Last 7 Days' },
              { id: 'month', label: 'Last 30 Days' },
              { id: 'quarter', label: 'Last 3 Months' },
              { id: 'year', label: 'Last 12 Months' }
            ].map((period) => (
              <button
                key={period.id}
                onClick={() => setDateRange(period.id)}
                className={`w-full flex items-center p-3 rounded-lg transition-colors ${
                  dateRange === period.id
                    ? 'bg-indigo-50 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300'
                    : 'text-gray-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700'
                }`}
              >
                <Calendar className="h-5 w-5 mr-3" />
                {period.label}
              </button>
            ))}
          </div>
        </div>
      </motion.div>
      
      <motion.div 
        variants={itemVariants}
        className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
            Report Preview
          </h2>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Last updated: {new Date().toLocaleDateString()}
          </span>
        </div>
        
        <div className="space-y-6">
          {selectedReport === 'books' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg">
                  <h3 className="text-sm font-medium text-indigo-700 dark:text-indigo-300">
                    Total Books
                  </h3>
                  <p className="text-2xl font-bold text-indigo-800 dark:text-indigo-200 mt-2">
                    1,458
                  </p>
                </div>
                
                <div className="p-4 bg-green-50 dark:bg-green-900/30 rounded-lg">
                  <h3 className="text-sm font-medium text-green-700 dark:text-green-300">
                    Books Added
                  </h3>
                  <p className="text-2xl font-bold text-green-800 dark:text-green-200 mt-2">
                    +124
                  </p>
                </div>
                
                <div className="p-4 bg-amber-50 dark:bg-amber-900/30 rounded-lg">
                  <h3 className="text-sm font-medium text-amber-700 dark:text-amber-300">
                    Books Borrowed
                  </h3>
                  <p className="text-2xl font-bold text-amber-800 dark:text-amber-200 mt-2">
                    328
                  </p>
                </div>
              </div>
              
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Category
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Total Books
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Available
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Borrowed
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    {[
                      { category: 'Fiction', total: 450, available: 380, borrowed: 70 },
                      { category: 'Science', total: 320, available: 290, borrowed: 30 },
                      { category: 'History', total: 280, available: 250, borrowed: 30 },
                      { category: 'Technology', total: 408, available: 358, borrowed: 50 }
                    ].map((row, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                          {row.category}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">
                          {row.total}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600 dark:text-green-400">
                          {row.available}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-amber-600 dark:text-amber-400">
                          {row.borrowed}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
          
          {selectedReport === 'fines' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg">
                  <h3 className="text-sm font-medium text-indigo-700 dark:text-indigo-300">
                    Total Fines
                  </h3>
                  <p className="text-2xl font-bold text-indigo-800 dark:text-indigo-200 mt-2">
                    $2,458
                  </p>
                </div>
                
                <div className="p-4 bg-green-50 dark:bg-green-900/30 rounded-lg">
                  <h3 className="text-sm font-medium text-green-700 dark:text-green-300">
                    Collected
                  </h3>
                  <p className="text-2xl font-bold text-green-800 dark:text-green-200 mt-2">
                    $1,845
                  </p>
                </div>
                
                <div className="p-4 bg-red-50 dark:bg-red-900/30 rounded-lg">
                  <h3 className="text-sm font-medium text-red-700 dark:text-red-300">
                    Pending
                  </h3>
                  <p className="text-2xl font-bold text-red-800 dark:text-red-200 mt-2">
                    $613
                  </p>
                </div>
              </div>
              
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Student
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Book
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Days Late
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Fine Amount
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    {[
                      { student: 'John Doe', book: 'The Great Gatsby', days: 5, amount: 25, status: 'Paid' },
                      { student: 'Jane Smith', book: '1984', days: 3, amount: 15, status: 'Pending' },
                      { student: 'Mike Johnson', book: 'To Kill a Mockingbird', days: 7, amount: 35, status: 'Paid' },
                      { student: 'Sarah Wilson', book: 'Pride and Prejudice', days: 4, amount: 20, status: 'Pending' }
                    ].map((row, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                          {row.student}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">
                          {row.book}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">
                          {row.days}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">
                          ${row.amount}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                            row.status === 'Paid'
                              ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
                              : 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300'
                          }`}>
                            {row.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Reports;