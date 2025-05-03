import { useState, FormEvent } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useAuth, UserRole } from '../../contexts/AuthContext';
import { BookOpen, ShieldCheck, User, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';

const Login = () => {
  const { user, login, isLoading } = useAuth();
  const navigate = useNavigate();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<UserRole>('student');
  
  // If already logged in, redirect to appropriate dashboard
  if (user) {
    return <Navigate to={`/${user.role}/dashboard`} replace />;
  }
  
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast.error('Please enter both email and password');
      return;
    }
    
    try {
      await login(email, password, role);
      navigate(`/${role}/dashboard`);
      toast.success(`Welcome back!`);
    } catch (error) {
      toast.error('Login failed. Please check your credentials.');
    }
  };

  // Variants for motion animations
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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-teal-50 dark:from-gray-900 dark:to-gray-800 px-4">
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-md w-full p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg"
      >
        <motion.div 
          variants={itemVariants}
          className="flex justify-center mb-8"
        >
          <BookOpen className="h-12 w-12 text-indigo-600 dark:text-indigo-400" />
        </motion.div>
        
        <motion.h1 
          variants={itemVariants}
          className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-6"
        >
          Library Management System
        </motion.h1>
        
        <motion.p 
          variants={itemVariants}
          className="text-center text-gray-600 dark:text-gray-300 mb-8"
        >
          Sign in to access your library dashboard
        </motion.p>
        
        <motion.form variants={itemVariants} onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="you@example.com"
              required
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="••••••••"
              required
            />
          </div>
          
          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Login As
            </label>
            <div className="grid grid-cols-3 gap-3">
              <button
                type="button"
                onClick={() => setRole('student')}
                className={`flex flex-col items-center justify-center p-3 border rounded-lg transition-colors ${
                  role === 'student'
                    ? 'bg-indigo-100 border-indigo-500 dark:bg-indigo-900 dark:border-indigo-400'
                    : 'border-gray-300 hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-700'
                }`}
              >
                <User className={`h-6 w-6 ${role === 'student' ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-500 dark:text-gray-400'}`} />
                <span className={`mt-2 text-sm ${role === 'student' ? 'font-medium text-indigo-700 dark:text-indigo-300' : 'text-gray-600 dark:text-gray-300'}`}>
                  Student
                </span>
              </button>
              
              <button
                type="button"
                onClick={() => setRole('librarian')}
                className={`flex flex-col items-center justify-center p-3 border rounded-lg transition-colors ${
                  role === 'librarian'
                    ? 'bg-indigo-100 border-indigo-500 dark:bg-indigo-900 dark:border-indigo-400'
                    : 'border-gray-300 hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-700'
                }`}
              >
                <BookOpen className={`h-6 w-6 ${role === 'librarian' ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-500 dark:text-gray-400'}`} />
                <span className={`mt-2 text-sm ${role === 'librarian' ? 'font-medium text-indigo-700 dark:text-indigo-300' : 'text-gray-600 dark:text-gray-300'}`}>
                  Librarian
                </span>
              </button>
              
              <button
                type="button"
                onClick={() => setRole('admin')}
                className={`flex flex-col items-center justify-center p-3 border rounded-lg transition-colors ${
                  role === 'admin'
                    ? 'bg-indigo-100 border-indigo-500 dark:bg-indigo-900 dark:border-indigo-400'
                    : 'border-gray-300 hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-700'
                }`}
              >
                <ShieldCheck className={`h-6 w-6 ${role === 'admin' ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-500 dark:text-gray-400'}`} />
                <span className={`mt-2 text-sm ${role === 'admin' ? 'font-medium text-indigo-700 dark:text-indigo-300' : 'text-gray-600 dark:text-gray-300'}`}>
                  Admin
                </span>
              </button>
            </div>
          </div>
          
          <motion.button
            variants={itemVariants}
            type="submit"
            disabled={isLoading}
            className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <>
                <Loader2 className="animate-spin mr-2 h-5 w-5" />
                Signing in...
              </>
            ) : (
              'Sign In'
            )}
          </motion.button>
        </motion.form>
      </motion.div>
    </div>
  );
};

export default Login;