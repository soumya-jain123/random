import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  BookOpen, 
  BookMarked, 
  Calendar, 
  TrendingUp, 
  AlertCircle 
} from 'lucide-react';
import DashboardCard from '../shared/DashboardCard';
import LineChart from '../shared/LineChart';
import { mockBorrowingStats } from '../../data/mockData';

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalBooks: 0,
    booksIssued: 0,
    overdueBooks: 0
  });

  useEffect(() => {
    // Simulate loading data from API
    const timer = setTimeout(() => {
      setStats({
        totalUsers: 256,
        totalBooks: 1458,
        booksIssued: 328,
        overdueBooks: 42
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
        Admin Dashboard
      </motion.h1>
      
      <motion.div 
        variants={itemVariants}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        <DashboardCard 
          title="Total Users"
          value={stats.totalUsers}
          icon={<Users className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />}
          trend={+12.5}
          trendLabel="vs last month"
        />
        
        <DashboardCard 
          title="Total Books"
          value={stats.totalBooks}
          icon={<BookOpen className="h-6 w-6 text-teal-600 dark:text-teal-400" />}
          trend={+4.2}
          trendLabel="vs last month"
        />
        
        <DashboardCard 
          title="Books Issued"
          value={stats.booksIssued}
          icon={<BookMarked className="h-6 w-6 text-amber-600 dark:text-amber-400" />}
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
      </motion.div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div 
          variants={itemVariants}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
              Borrowing Trends
            </h2>
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
              <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                Monthly Analysis
              </span>
            </div>
          </div>
          <div className="h-80">
            <LineChart 
              data={mockBorrowingStats} 
              title="Book Borrowing Statistics" 
            />
          </div>
        </motion.div>
        
        <motion.div 
          variants={itemVariants}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
              Upcoming Events
            </h2>
            <div className="flex items-center space-x-2">
              <Calendar className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
              <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                Calendar
              </span>
            </div>
          </div>
          
          <div className="space-y-4">
            {[
              { 
                id: 1, 
                title: 'New Book Arrival', 
                date: '2025-04-15', 
                description: '25 new books will be added to the collection' 
              },
              { 
                id: 2, 
                title: 'Library Staff Meeting', 
                date: '2025-04-18', 
                description: 'Annual staff meeting to discuss improvements' 
              },
              { 
                id: 3, 
                title: 'System Maintenance', 
                date: '2025-04-25', 
                description: 'Scheduled maintenance for catalog database' 
              }
            ].map((event) => (
              <div 
                key={event.id} 
                className="flex items-start p-4 border rounded-lg border-gray-200 dark:border-gray-700 transition-colors hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-indigo-100 dark:bg-indigo-900 rounded-lg mr-4">
                  <Calendar className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div>
                  <h3 className="text-base font-medium text-gray-800 dark:text-white">
                    {event.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    {new Date(event.date).toLocaleDateString('en-US', { 
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                    {event.description}
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