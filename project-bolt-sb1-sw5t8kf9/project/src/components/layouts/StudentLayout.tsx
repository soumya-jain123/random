import { Routes, Route } from 'react-router-dom';
import Sidebar from '../shared/Sidebar';
import Header from '../shared/Header';
import Dashboard from '../student/Dashboard';
import BorrowBooks from '../student/BorrowBooks';
import ReturnBooks from '../student/ReturnBooks';
import BorrowingStatus from '../student/BorrowingStatus';
import RequestBooks from '../student/RequestBooks';
import ReissueBooks from '../student/ReissueBooks';
import Notifications from '../student/Notifications';
import Settings from '../shared/Settings';
import { studentNavItems } from '../../data/navItems';

const StudentLayout = () => {
  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar navItems={studentNavItems} />
      
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header title="Student Dashboard" />
        
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <Routes>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="borrow" element={<BorrowBooks />} />
            <Route path="return" element={<ReturnBooks />} />
            <Route path="status" element={<BorrowingStatus />} />
            <Route path="request" element={<RequestBooks />} />
            <Route path="reissue" element={<ReissueBooks />} />
            <Route path="notifications" element={<Notifications />} />
            <Route path="settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default StudentLayout;