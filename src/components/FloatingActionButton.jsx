import React from 'react';

export default function FloatingActionButton({ onClick, icon, tooltip }) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-8 right-8 p-4 rounded-full shadow-lg bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none transition-colors"
      title={tooltip}
    >
      {icon}
    </button>
  );
}
