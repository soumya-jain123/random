import { Routes, Route } from 'react-router-dom';
import Sidebar from '../shared/Sidebar';
import Header from '../shared/Header';
import Dashboard from '../admin/Dashboard';
import ManageLibrarians from '../admin/ManageLibrarians';
import Reports from '../admin/Reports';
import FineManagement from '../admin/FineManagement';
import UserManagement from '../admin/UserManagement';
import Settings from '../shared/Settings';
import { adminNavItems } from '../../data/navItems';

const AdminLayout = () => {
  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar navItems={adminNavItems} />
      
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header title="Admin Dashboard" />
        
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <Routes>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="librarians" element={<ManageLibrarians />} />
            <Route path="reports" element={<Reports />} />
            <Route path="fines" element={<FineManagement />} />
            <Route path="users" element={<UserManagement />} />
            <Route path="settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;