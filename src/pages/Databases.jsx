import React from 'react';
import CategorySection from '../components/CategorySection';

const databases = [
  {
    name: 'MongoDB',
    description: 'Learn NoSQL with MongoDB.',
    image: 'https://via.placeholder.com/400x200.png?text=MongoDB',
  },
  {
    name: 'MySQL',
    description: 'Master relational databases with MySQL.',
    image: 'https://via.placeholder.com/400x200.png?text=MySQL',
  },
  {
    name: 'PostgreSQL',
    description: 'Explore advanced features of PostgreSQL.',
    image: 'https://via.placeholder.com/400x200.png?text=PostgreSQL',
  },
];

export default function Databases() {
  return (
    <CategorySection
      title="Databases"
      items={databases}
      categoryRouteBase="/courses/databases"
    />
  );
}
