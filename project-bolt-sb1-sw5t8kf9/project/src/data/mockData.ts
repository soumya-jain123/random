export const mockBooks = [
  {
    id: 1,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    cover: "https://images.pexels.com/photos/1765033/pexels-photo-1765033.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    rating: 4.8,
    category: "Fiction",
    status: "Available"
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    cover: "https://images.pexels.com/photos/2228580/pexels-photo-2228580.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    rating: 4.6,
    category: "Fiction",
    status: "Borrowed"
  },
  {
    id: 3,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    cover: "https://images.pexels.com/photos/2203051/pexels-photo-2203051.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    rating: 4.5,
    category: "Fiction",
    status: "Available"
  },
  {
    id: 4,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    cover: "https://images.pexels.com/photos/1266302/pexels-photo-1266302.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    rating: 4.7,
    category: "Romance",
    status: "Reserved"
  },
  {
    id: 5,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    cover: "https://images.pexels.com/photos/1666816/pexels-photo-1666816.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    rating: 4.9,
    category: "Fantasy",
    status: "Available"
  },
  {
    id: 6,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    cover: "https://images.pexels.com/photos/4132936/pexels-photo-4132936.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    rating: 4.3,
    category: "Fiction",
    status: "Borrowed"
  },
  {
    id: 7,
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
    cover: "https://images.pexels.com/photos/3747139/pexels-photo-3747139.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    rating: 4.9,
    category: "Fantasy",
    status: "Available"
  },
  {
    id: 8,
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    cover: "https://images.pexels.com/photos/2850812/pexels-photo-2850812.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    rating: 4.9,
    category: "Fantasy",
    status: "Reserved"
  }
];

export const mockBorrowingStats = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'Books Borrowed',
      data: [65, 59, 80, 81, 56, 55, 40, 45, 60, 75, 85, 90],
      borderColor: 'rgb(79, 70, 229)',
      backgroundColor: 'rgba(79, 70, 229, 0.1)',
      fill: true
    },
    {
      label: 'Books Returned',
      data: [45, 50, 65, 59, 80, 81, 56, 55, 40, 45, 60, 70],
      borderColor: 'rgb(13, 148, 136)',
      backgroundColor: 'rgba(13, 148, 136, 0.1)',
      fill: true
    }
  ]
};

export const mockCategoryStats = {
  labels: ['Fiction', 'Fantasy', 'Science Fiction', 'Mystery', 'Biography', 'History', 'Self-Help'],
  datasets: [
    {
      label: 'Number of Books',
      data: [420, 350, 280, 210, 190, 150, 120],
      backgroundColor: [
        'rgba(79, 70, 229, 0.8)',
        'rgba(13, 148, 136, 0.8)',
        'rgba(245, 158, 11, 0.8)',
        'rgba(16, 185, 129, 0.8)',
        'rgba(239, 68, 68, 0.8)',
        'rgba(107, 114, 128, 0.8)',
        'rgba(251, 191, 36, 0.8)'
      ],
      borderColor: [
        'rgb(79, 70, 229)',
        'rgb(13, 148, 136)',
        'rgb(245, 158, 11)',
        'rgb(16, 185, 129)',
        'rgb(239, 68, 68)',
        'rgb(107, 114, 128)',
        'rgb(251, 191, 36)'
      ],
      borderWidth: 1
    }
  ]
};