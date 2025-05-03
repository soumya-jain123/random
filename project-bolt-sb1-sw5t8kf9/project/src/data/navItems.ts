import { 
  LayoutDashboard, 
  Users, 
  FileText, 
  DollarSign, 
  UserCog,
  Settings,
  BookOpen,
  BookPlus,
  BookCheck,
  BookX,
  UsersRound,
  Bell,
  CalendarClock,
  ListTodo,
  BookMarked,
  Clock
} from 'lucide-react';
import { NavItem } from '../types';

export const adminNavItems: NavItem[] = [
  {
    name: 'Dashboard',
    path: 'dashboard',
    icon: LayoutDashboard
  },
  {
    name: 'Librarians',
    path: 'librarians',
    icon: Users
  },
  {
    name: 'Reports',
    path: 'reports',
    icon: FileText
  },
  {
    name: 'Fine Management',
    path: 'fines',
    icon: DollarSign
  },
  {
    name: 'User Management',
    path: 'users',
    icon: UserCog
  },
  {
    name: 'Settings',
    path: 'settings',
    icon: Settings
  }
];

export const librarianNavItems: NavItem[] = [
  {
    name: 'Dashboard',
    path: 'dashboard',
    icon: LayoutDashboard
  },
  {
    name: 'Books',
    path: 'books',
    icon: BookOpen
  },
  {
    name: 'Issue Books',
    path: 'issue',
    icon: BookPlus
  },
  {
    name: 'Issued Books',
    path: 'issued',
    icon: BookCheck
  },
  {
    name: 'Return Books',
    path: 'return',
    icon: BookX
  },
  {
    name: 'Students',
    path: 'students',
    icon: UsersRound
  },
  {
    name: 'Overdue Books',
    path: 'overdue',
    icon: Bell
  },
  {
    name: 'Settings',
    path: 'settings',
    icon: Settings
  }
];

export const studentNavItems: NavItem[] = [
  {
    name: 'Dashboard',
    path: 'dashboard',
    icon: LayoutDashboard
  },
  {
    name: 'Borrow',
    path: 'borrow',
    icon: BookPlus
  },
  {
    name: 'Return',
    path: 'return',
    icon: BookX
  },
  {
    name: 'Status',
    path: 'status',
    icon: ListTodo
  },
  {
    name: 'Request',
    path: 'request',
    icon: BookOpen
  },
  {
    name: 'Reissue',
    path: 'reissue',
    icon: BookMarked
  },
  {
    name: 'Notifications',
    path: 'notifications',
    icon: Bell
  },
  {
    name: 'Settings',
    path: 'settings',
    icon: Settings
  }
];