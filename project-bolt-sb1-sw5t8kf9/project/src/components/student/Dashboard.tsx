import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  BookMarked, 
  Clock, 
  CalendarClock, 
  AlertCircle,
  BookOpen
} from 'lucide-react';
import DashboardCard from '../shared/DashboardCard';
import BookCard from '../shared/BookCard';
import { mockBooks } from '../../data/mockData';

const Dashboard = () => {
  const [stats, setStats] = useState({
    currentlyBorrowed: 0,
    overdue: 0,
    reservations: 0,
    totalBorrowed: 0
  });
  
  const [popularBooks, setPopularBooks] = useState([]);

  useEffect(() => {
    // Simulate loading data from API
    const timer = setTimeout(() => {
      setStats({
        currentlyBorrowed: 3,
        overdue: 1,
        reservations: 2,
        totalBorrowed: 24
      });
      
      setPopularBooks(mockBooks.slice(0, 4));
    }, 500);

    return () => clearTimeout(timer);
  }, []);

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
      <motion.h1 
        variants={itemVariants}
        className="text-2xl font-bold text-gray-800 dark:text-white"
      >
        Student Dashboard
      </motion.h1>
      
      <motion.div 
        variants={itemVariants}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        <DashboardCard 
          title="Currently Borrowed"
          value={stats.currentlyBorrowed}
          icon={<BookMarked className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />}
          borderColor="border-indigo-200 dark:border-indigo-800"
        />
        
        <DashboardCard 
          title="Overdue Books"
          value={stats.overdue}
          icon={<AlertCircle className="h-6 w-6 text-red-600 dark:text-red-400" />}
          borderColor="border-red-200 dark:border-red-800"
        />
        
        <DashboardCard 
          title="Book Reservations"
          value={stats.reservations}
          icon={<CalendarClock className="h-6 w-6 text-amber-600 dark:text-amber-400" />}
          borderColor="border-amber-200 dark:border-amber-800"
        />
        
        <DashboardCard 
          title="Total Borrowed"
          value={stats.totalBorrowed}
          icon={<BookOpen className="h-6 w-6 text-teal-600 dark:text-teal-400" />}
          borderColor="border-teal-200 dark:border-teal-800"
        />
      </motion.div>
      
      <motion.div 
        variants={itemVariants}
        className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
            Your Current Books
          </h2>
          <div className="flex items-center space-x-2">
            <Clock className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
            <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
              Due Dates
            </span>
          </div>
        </div>
        
        <div className="space-y-4">
          {[
            {
              id: 1,
              title: "To Kill a Mockingbird",
              author: "Harper Lee",
              cover: "https://images.pexels.com/photos/1765033/pexels-photo-1765033.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=200",
              borrowDate: "2025-03-24",
              dueDate: "2025-04-14",
              isOverdue: false
            },
            {
              id: 2,
              title: "1984",
              author: "George Orwell",
              cover: "https://images.pexels.com/photos/2228580/pexels-photo-2228580.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=200",
              borrowDate: "2025-03-10",
              dueDate: "2025-03-31",
              isOverdue: true
            },
            {
              id: 3,
              title: "The Hobbit",
              author: "J.R.R. Tolkien",
              cover: "https://images.pexels.com/photos/1666816/pexels-photo-1666816.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=200",
              borrowDate: "2025-03-28",
              dueDate: "2025-04-18",
              isOverdue: false
            }
          ].map((book) => (
            <div 
              key={book.id}
              className={`flex items-center p-4 border rounded-lg ${
                book.isOverdue 
                  ? 'border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-900/20'
                  : 'border-gray-200 dark:border-gray-700'
              }`}
            >
              <img 
                src={book.cover} 
                alt={book.title}
                className="w-16 h-24 object-cover rounded-md shadow-sm mr-4" 
              />
              
              <div className="flex-1">
                <h3 className="text-base font-medium text-gray-800 dark:text-white">
                  {book.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {book.author}
                </p>
                <div className="mt-2 flex items-center text-xs text-gray-500 dark:text-gray-400">
                  <Clock className="h-3.5 w-3.5 mr-1" />
                  <span>
                    Borrowed: {new Date(book.borrowDate).toLocaleDateString()}
                  </span>
                </div>
              </div>
              
              <div className={`text-right ${
                book.isOverdue ? 'text-red-600 dark:text-red-400' : 'text-gray-600 dark:text-gray-300'
              }`}>
                <div className="text-sm font-medium">
                  {book.isOverdue ? 'OVERDUE' : 'Due Date'}
                </div>
                <div className="text-sm">
                  {new Date(book.dueDate).toLocaleDateString()}
                </div>
                
                <div className="mt-2">
                  <button className={`text-xs font-medium px-2 py-1 rounded ${
                    book.isOverdue 
                      ? 'text-white bg-red-600 hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-600' 
                      : 'text-indigo-700 bg-indigo-100 hover:bg-indigo-200 dark:text-indigo-300 dark:bg-indigo-900 dark:hover:bg-indigo-800'
                  }`}>
                    {book.isOverdue ? 'Return Now' : 'Renew'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
      
      <motion.div 
        variants={itemVariants}
        className="space-y-6"
      >
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
            Popular Books
          </h2>
          <button className="text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300">
            View All
          </button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Dashboard;