import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth, UserRole } from '../../contexts/AuthContext';

interface ProtectedRouteProps {
  children: ReactNode;
  role: UserRole;
}

const ProtectedRoute = ({ children, role }: ProtectedRouteProps) => {
  const { user } = useAuth();

  // If not logged in, redirect to login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // If logged in but wrong role, redirect to their appropriate dashboard
  if (user.role !== role) {
    return <Navigate to={`/${user.role}/dashboard`} replace />;
  }

  // If logged in and correct role, render the protected component
  return <>{children}</>;
};

export default ProtectedRoute;