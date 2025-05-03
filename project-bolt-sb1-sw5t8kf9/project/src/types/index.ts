import { DivideIcon as LucideIcon } from 'lucide-react';

export interface NavItem {
  name: string;
  path: string;
  icon: LucideIcon;
}

export interface Book {
  id: number;
  title: string;
  author: string;
  cover: string;
  rating: number;
  category: string;
  status: 'Available' | 'Borrowed' | 'Reserved';
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'librarian' | 'student';
  status: 'active' | 'inactive';
  avatar?: string;
}

export interface Student {
  id: string;
  name: string;
  email: string;
  studentId: string;
  borrowedBooks: number;
  overdueBooks: number;
  status: 'active' | 'inactive';
  avatar?: string;
}

export interface Librarian {
  id: string;
  name: string;
  email: string;
  employeeId: string;
  department: string;
  status: 'active' | 'inactive';
  avatar?: string;
}

export interface Fine {
  id: string;
  studentId: string;
  studentName: string;
  bookId: number;
  bookTitle: string;
  amount: number;
  status: 'paid' | 'unpaid';
  date: string;
}

export interface BorrowedBook {
  id: string;
  bookId: number;
  bookTitle: string;
  studentId: string;
  studentName: string;
  borrowDate: string;
  dueDate: string;
  returnDate?: string;
  status: 'borrowed' | 'returned' | 'overdue';
}

export interface Notification {
  id: string;
  message: string;
  time: string;
  isRead: boolean;
  type?: 'overdue' | 'approval' | 'general';
}