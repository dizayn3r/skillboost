import React from 'react';
import CategorySection from '../components/CategorySection';
import reactLogo from '../assets/react.svg';

const devOps = [
  {
    name: 'Docker',
    description: 'Containerize applications with Docker.',
    image: reactLogo,
  },
  {
    name: 'Kubernetes',
    description: 'Manage container orchestration with Kubernetes.',
    image: reactLogo,
  },
  {
    name: 'Jenkins',
    description: 'Automate CI/CD pipelines with Jenkins.',
    image: reactLogo,
  },
];

export default function DevOps() {
  return (
    <CategorySection
      title="DevOps"
      items={devOps}
      categoryRouteBase="/devops"
    />
  );
}
