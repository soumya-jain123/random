import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { ReactNode } from 'react';

interface DashboardCardProps {
  title: string;
  value: number | string;
  icon: ReactNode;
  trend?: number;
  trendLabel?: string;
  isTrendPositive?: boolean;
  borderColor?: string;
}

const DashboardCard = ({ 
  title, 
  value, 
  icon, 
  trend, 
  trendLabel,
  isTrendPositive = true,
  borderColor = 'border-gray-200 dark:border-gray-700'
}: DashboardCardProps) => {
  return (
    <motion.div 
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className={`bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border ${borderColor}`}
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
          {title}
        </h3>
        {icon}
      </div>
      
      <div className="flex items-end justify-between">
        <div>
          <p className="text-2xl font-bold text-gray-800 dark:text-white">
            {typeof value === 'number' ? value.toLocaleString() : value}
          </p>
          
          {trend !== undefined && trendLabel && (
            <div className="flex items-center mt-2">
              {isTrendPositive ? (
                <>
                  <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                  <span className="text-xs font-medium text-green-500">
                    {trend > 0 && '+'}{trend}%
                  </span>
                </>
              ) : (
                <>
                  <TrendingDown className="h-4 w-4 text-red-500 mr-1" />
                  <span className="text-xs font-medium text-red-500">
                    {trend > 0 && '+'}{trend}%
                  </span>
                </>
              )}
              
              <span className="text-xs text-gray-500 dark:text-gray-400 ml-1">
                {trendLabel}
              </span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default DashboardCard;