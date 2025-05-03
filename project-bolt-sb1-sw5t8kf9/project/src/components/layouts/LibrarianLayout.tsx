import { Routes, Route } from 'react-router-dom';
import Sidebar from '../shared/Sidebar';
import Header from '../shared/Header';
import Dashboard from '../librarian/Dashboard';
import BookManagement from '../librarian/BookManagement';
import IssueBooks from '../librarian/IssueBooks';
import IssuedBooks from '../librarian/IssuedBooks';
import ReturnBooks from '../librarian/ReturnBooks';
import StudentRecords from '../librarian/StudentRecords';
import OverdueBooks from '../librarian/OverdueBooks';
import Settings from '../shared/Settings';
import { librarianNavItems } from '../../data/navItems';

const LibrarianLayout = () => {
  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar navItems={librarianNavItems} />
      
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header title="Librarian Dashboard" />
        
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <Routes>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="books" element={<BookManagement />} />
            <Route path="issue" element={<IssueBooks />} />
            <Route path="issued" element={<IssuedBooks />} />
            <Route path="return" element={<ReturnBooks />} />
            <Route path="students" element={<StudentRecords />} />
            <Route path="overdue" element={<OverdueBooks />} />
            <Route path="settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default LibrarianLayout;