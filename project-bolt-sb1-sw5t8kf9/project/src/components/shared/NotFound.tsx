import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookX, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full text-center"
      >
        <div className="flex justify-center mb-6">
          <BookX className="h-24 w-24 text-indigo-600 dark:text-indigo-400" />
        </div>
        
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
          404 - Page Not Found
        </h1>
        
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-lg shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Go Back
        </button>
      </motion.div>
    </div>
  );
};

export default NotFound;