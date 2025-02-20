import React from 'react';
import CategorySection from '../components/CategorySection';
import reactLogo from '../assets/react.svg';

const databases = [
  {
    name: 'MongoDB',
    description: 'Learn NoSQL with MongoDB.',
    image: reactLogo,
  },
  {
    name: 'MySQL',
    description: 'Master relational databases with MySQL.',
    image: reactLogo,
  },
  {
    name: 'PostgreSQL',
    description: 'Explore advanced features of PostgreSQL.',
    image: reactLogo,
  },
];

export default function Databases() {
  return (
    <CategorySection
      title="Databases"
      items={databases}
      categoryRouteBase="/databases"
    />
  );
}
