import React from 'react';
import CategorySection from '../components/CategorySection';

const programmingLanguages = [
  {
    name: 'C',
    description: 'Learn the fundamentals of C programming.',
    image: 'https://via.placeholder.com/400x200.png?text=C',
  },
  {
    name: 'C++',
    description: 'Master object-oriented programming with C++.',
    image: 'https://via.placeholder.com/400x200.png?text=C%2B%2B',
  },
  {
    name: 'Java',
    description: 'Explore Java programming and build robust applications.',
    image: 'https://via.placeholder.com/400x200.png?text=Java',
  },
  {
    name: 'JavaScript',
    description: 'Learn JavaScript for web development and beyond.',
    image: 'https://via.placeholder.com/400x200.png?text=JavaScript',
  },
  {
    name: 'Python',
    description: 'Dive into Python for data science, automation, and more.',
    image: 'https://via.placeholder.com/400x200.png?text=Python',
  },
  {
    name: 'Dart',
    description: 'Build modern mobile apps with Dart and Flutter.',
    image: 'https://via.placeholder.com/400x200.png?text=Dart',
  },
  {
    name: 'Go',
    description: 'Learn Go for building efficient and scalable applications.',
    image: 'https://via.placeholder.com/400x200.png?text=Go',
  },
  {
    name: 'TypeScript',
    description: 'Master TypeScript for safer and scalable JavaScript development.',
    image: 'https://via.placeholder.com/400x200.png?text=TypeScript',
  },
  {
    name: 'Kotlin',
    description: 'Learn Kotlin for Android development and modern programming.',
    image: 'https://via.placeholder.com/400x200.png?text=Kotlin',
  },
];

export default function ProgrammingLanguages() {
  return (
    <CategorySection
      title="Programming Languages"
      items={programmingLanguages}
      categoryRouteBase="/courses/programming-languages"
    />
  );
}
