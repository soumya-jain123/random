import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  BookMarked, 
  AlertCircle, 
  User,
  BarChart3,
  Clock
} from 'lucide-react';
import DashboardCard from '../shared/DashboardCard';
import BarChart from '../shared/BarChart';
import { mockCategoryStats } from '../../data/mockData';

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalBooks: 0,
    booksIssued: 0,
    overdueBooks: 0,
    activeStudents: 0
  });

  useEffect(() => {
    // Simulate loading data from API
    const timer = setTimeout(() => {
      setStats({
        totalBooks: 1458,
        booksIssued: 328,
        overdueBooks: 42,
        activeStudents: 185
      });
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
        Librarian Dashboard
      </motion.h1>
      
      <motion.div 
        variants={itemVariants}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        <DashboardCard 
          title="Total Books"
          value={stats.totalBooks}
          icon={<BookOpen className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />}
          trend={+4.2}
          trendLabel="vs last month"
        />
        
        <DashboardCard 
          title="Books Issued"
          value={stats.booksIssued}
          icon={<BookMarked className="h-6 w-6 text-teal-600 dark:text-teal-400" />}
          trend={+7.8}
          trendLabel="vs last month"
        />
        
        <DashboardCard 
          title="Overdue Books"
          value={stats.overdueBooks}
          icon={<AlertCircle className="h-6 w-6 text-red-600 dark:text-red-400" />}
          trend={-2.3}
          trendLabel="vs last month"
          isTrendPositive={false}
        />
        
        <DashboardCard 
          title="Active Students"
          value={stats.activeStudents}
          icon={<User className="h-6 w-6 text-amber-600 dark:text-amber-400" />}
          trend={+5.1}
          trendLabel="vs last month"
        />
      </motion.div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div 
          variants={itemVariants}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
              Books by Category
            </h2>
            <div className="flex items-center space-x-2">
              <BarChart3 className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
              <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                Distribution
              </span>
            </div>
          </div>
          <div className="h-80">
            <BarChart 
              data={mockCategoryStats} 
              title="Books by Category" 
            />
          </div>
        </motion.div>
        
        <motion.div 
          variants={itemVariants}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
              Recent Activities
            </h2>
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
              <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                Last 24 hours
              </span>
            </div>
          </div>
          
          <div className="space-y-4">
            {[
              { 
                id: 1, 
                action: 'Book Issued', 
                book: 'The Great Gatsby',
                student: 'Emma Thompson',
                time: '2 hours ago' 
              },
              { 
                id: 2, 
                action: 'Book Returned', 
                book: 'To Kill a Mockingbird',
                student: 'Michael Chen',
                time: '4 hours ago' 
              },
              { 
                id: 3, 
                action: 'New Book Added', 
                book: 'Dune',
                student: null,
                time: '6 hours ago' 
              },
              { 
                id: 4, 
                action: 'Fine Collected', 
                book: 'Pride and Prejudice',
                student: 'James Wilson',
                time: '8 hours ago' 
              },
              { 
                id: 5, 
                action: 'Book Reserved', 
                book: 'The Hobbit',
                student: 'Sarah Ahmed',
                time: '10 hours ago' 
              }
            ].map((activity) => (
              <div 
                key={activity.id} 
                className="flex items-start p-4 border rounded-lg border-gray-200 dark:border-gray-700 transition-colors hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-indigo-100 dark:bg-indigo-900 rounded-lg mr-4">
                  {activity.action === 'Book Issued' && <BookMarked className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />}
                  {activity.action === 'Book Returned' && <BookOpen className="h-5 w-5 text-teal-600 dark:text-teal-400" />}
                  {activity.action === 'New Book Added' && <BookOpen className="h-5 w-5 text-amber-600 dark:text-amber-400" />}
                  {activity.action === 'Fine Collected' && <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400" />}
                  {activity.action === 'Book Reserved' && <User className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <h3 className="text-base font-medium text-gray-800 dark:text-white">
                      {activity.action}
                    </h3>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {activity.time}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                    <span className="font-medium">{activity.book}</span>
                    {activity.student && ` - ${activity.student}`}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Dashboard;