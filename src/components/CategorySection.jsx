import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function CategorySection({ title, items, categoryRouteBase = '' }) {
  const navigate = useNavigate();

  const handleClick = (itemName) => {
    const route = categoryRouteBase
      ? `${categoryRouteBase}/${encodeURIComponent(itemName)}`
      : `/courses/${encodeURIComponent(itemName)}`;
    navigate(route);
  };

  return (
    <div className="p-8 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <h1 className="text-3xl font-bold text-center mb-8">{title}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
        {items.map((item, idx) => (
          <div
            key={idx}
            onClick={() => handleClick(item.name)}
            className="cursor-pointer bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition p-4 w-80"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
            <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
