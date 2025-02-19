import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white dark:bg-gray-800 shadow p-4">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="text-xl font-bold text-gray-900 dark:text-gray-100">
          My Courses App
        </Link>
        <div>
          <Link to="/" className="mr-4 text-gray-600 dark:text-gray-300 hover:underline">
            Home
          </Link>
          <Link to="/courses/programming-languages" className="mr-4 text-gray-600 dark:text-gray-300 hover:underline">
            Programming Languages
          </Link>
          <Link to="/courses/frameworks" className="mr-4 text-gray-600 dark:text-gray-300 hover:underline">
            Frameworks
          </Link>
          <Link to="/courses/databases" className="mr-4 text-gray-600 dark:text-gray-300 hover:underline">
            Databases
          </Link>
          <Link to="/courses/devops" className="text-gray-600 dark:text-gray-300 hover:underline">
            DevOps
          </Link>
        </div>
      </div>
    </nav>
  );
}
