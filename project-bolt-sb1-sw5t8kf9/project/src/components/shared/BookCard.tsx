import { motion } from 'framer-motion';
import { BookOpen, Star } from 'lucide-react';
import { Book } from '../../types';

interface BookCardProps {
  book: Book;
}

const BookCard = ({ book }: BookCardProps) => {
  return (
    <motion.div 
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden border border-gray-200 dark:border-gray-700"
    >
      <div className="relative h-48">
        <img 
          src={book.cover} 
          alt={book.title}
          className="w-full h-full object-cover" 
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 flex items-center justify-between">
          <div className="flex items-center text-white">
            <Star className="h-4 w-4 text-yellow-400 fill-yellow-400 mr-1" />
            <span className="text-sm font-medium">{book.rating}</span>
          </div>
          
          <div className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded text-xs text-white font-medium">
            {book.category}
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-base font-semibold text-gray-800 dark:text-white mb-1 line-clamp-1">
          {book.title}
        </h3>
        
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
          by {book.author}
        </p>
        
        <div className="flex justify-between items-center">
          <div className={`px-2 py-1 rounded-full text-xs font-medium ${
            book.status === 'Available' 
              ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
              : book.status === 'Reserved'
                ? 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400'
                : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
          }`}>
            {book.status}
          </div>
          
          <button className="inline-flex items-center text-xs font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300">
            <BookOpen className="h-3.5 w-3.5 mr-1" />
            View Details
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default BookCard;