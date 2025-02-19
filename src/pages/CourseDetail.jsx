import React from 'react';
import { useParams, Link } from 'react-router-dom';

export default function CourseDetail() {
  const { category, itemName } = useParams();
  
  // For now, display a placeholder detail page.
  return (
    <div className="p-8 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
      <Link to="/" className="text-blue-500 hover:underline mb-4 inline-block">← Back to Home</Link>
      <h1 className="text-3xl font-bold mb-4">{itemName} Details</h1>
      <p>
        This page is a placeholder for detailed information about <strong>{itemName}</strong> under the <strong>{category}</strong> category.
      </p>
    </div>
  );
}
