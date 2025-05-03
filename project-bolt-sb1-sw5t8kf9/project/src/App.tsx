import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';
import Login from './components/auth/Login';
// import AdminLayout from './components/layouts/AdminLayout';
import LibrarianLayout from './components/layouts/LibrarianLayout';
import StudentLayout from './components/layouts/StudentLayout';
import ProtectedRoute from './components/auth/ProtectedRoute';
import NotFound from './components/shared/NotFound';

function App() {
  const { user } = useAuth();

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      
      {/* Admin Routes */}
      <Route 
        path="/admin/*" 
        element={
          <ProtectedRoute role="admin">
            {/* <AdminLayout /> */}
          </ProtectedRoute>
        } 
      />
      
      {/* Librarian Routes */}
      <Route 
        path="/librarian/*" 
        element={
          <ProtectedRoute role="librarian">
            <LibrarianLayout />
          </ProtectedRoute>
        } 
      />
      
      {/* Student Routes */}
      <Route 
        path="/student/*" 
        element={
          <ProtectedRoute role="student">
            <StudentLayout />
          </ProtectedRoute>
        } 
      />
      
      {/* Default redirect based on user role */}
      <Route 
        path="/" 
        element={
          user ? (
            user.role === 'admin' ? (
              <Navigate to="/admin/dashboard" replace />
            ) : user.role === 'librarian' ? (
              <Navigate to="/librarian/dashboard" replace />
            ) : (
              <Navigate to="/student/dashboard" replace />
            )
          ) : (
            <Navigate to="/login" replace />
          )
        } 
      />
      
      {/* 404 Route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;