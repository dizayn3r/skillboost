import React from "react";
import { useNavigate } from "react-router-dom";

export default function CategoryGrid() {
  const navigate = useNavigate();

  // Categories can be extended as needed.
  const categories = [
    {
      name: "Programming Languages",
      description: "Courses on JavaScript, Python, Java, C++, and more.",
      image:
        "https://via.placeholder.com/400x200.png?text=Programming+Languages",
    },
    {
      name: "Frameworks",
      description: "Learn frameworks like React, Angular, Vue, and others.",
      image: "https://via.placeholder.com/400x200.png?text=Frameworks",
    },
  ];

  return (
    <div className="min-h-screen p-8 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <h1 className="text-3xl font-bold text-center mb-8">Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categories.map((category, idx) => (
          <div
            key={idx}
            onClick={() =>
              navigate(`/courses/${encodeURIComponent(category.name)}`)
            }
            className="cursor-pointer bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition p-4"
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{category.name}</h2>
            <p className="text-gray-600 dark:text-gray-300">
              {category.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
