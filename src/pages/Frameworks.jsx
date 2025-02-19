import React from 'react';
import CategorySection from '../components/CategorySection';

const frameworks = [
  {
    name: 'React',
    description: 'Build dynamic UIs with React.',
    image: 'https://via.placeholder.com/400x200.png?text=React',
  },
  {
    name: 'Angular',
    description: 'Develop scalable applications with Angular.',
    image: 'https://via.placeholder.com/400x200.png?text=Angular',
  },
  {
    name: 'Vue.js',
    description: 'Create reactive interfaces with Vue.js.',
    image: 'https://via.placeholder.com/400x200.png?text=Vue.js',
  },
];

export default function Frameworks() {
  return (
    <CategorySection
      title="Frameworks"
      items={frameworks}
      categoryRouteBase="/courses/frameworks"
    />
  );
}
