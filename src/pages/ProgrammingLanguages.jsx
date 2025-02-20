import React from 'react';
import CategorySection from '../components/CategorySection';
import reactLogo from '../assets/react.svg';

const programmingLanguages = [
  {
    name: 'C',
    description: 'Learn the fundamentals of C programming.',
    image: reactLogo,
  },
  {
    name: 'C++',
    description: 'Master object-oriented programming with C++.',
    image: reactLogo,
  },
  {
    name: 'Java',
    description: 'Explore Java programming and build robust applications.',
    image: reactLogo,
  },
  {
    name: 'JavaScript',
    description: 'Learn JavaScript for web development and beyond.',
    image: reactLogo,
  },
  {
    name: 'Python',
    description: 'Dive into Python for data science, automation, and more.',
    image: reactLogo,
  },
  {
    name: 'Dart',
    description: 'Build modern mobile apps with Dart and Flutter.',
    image: reactLogo,
  },
  {
    name: 'Go',
    description: 'Learn Go for building efficient and scalable applications.',
    image: reactLogo,
  },
  {
    name: 'TypeScript',
    description: 'Master TypeScript for safer and scalable JavaScript development.',
    image: reactLogo,
  },
  {
    name: 'Kotlin',
    description: 'Learn Kotlin for Android development and modern programming.',
    image: reactLogo,
  },
];

export default function ProgrammingLanguages() {
  return (
    <CategorySection
      title="Programming Languages"
      items={programmingLanguages}
      categoryRouteBase="/programming-languages"
    />
  );
}
