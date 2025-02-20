import React from 'react';
import CategorySection from '../components/CategorySection';
import reactLogo from '../assets/react.svg';

const frameworks = [
  {
    name: 'React',
    description: 'Build dynamic UIs with React.',
    image: reactLogo,
  },
  {
    name: 'Angular',
    description: 'Develop scalable applications with Angular.',
    image: reactLogo,
  },
  {
    name: 'Vue.js',
    description: 'Create reactive interfaces with Vue.js.',
    image: reactLogo,
  },
];

export default function Frameworks() {
  return (
    <CategorySection
      title="Frameworks"
      items={frameworks}
      categoryRouteBase="/frameworks"
    />
  );
}
