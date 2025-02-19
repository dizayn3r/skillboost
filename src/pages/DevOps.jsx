import React from 'react';
import CategorySection from '../components/CategorySection';

const devOps = [
  {
    name: 'Docker',
    description: 'Containerize applications with Docker.',
    image: 'https://via.placeholder.com/400x200.png?text=Docker',
  },
  {
    name: 'Kubernetes',
    description: 'Manage container orchestration with Kubernetes.',
    image: 'https://via.placeholder.com/400x200.png?text=Kubernetes',
  },
  {
    name: 'Jenkins',
    description: 'Automate CI/CD pipelines with Jenkins.',
    image: 'https://via.placeholder.com/400x200.png?text=Jenkins',
  },
];

export default function DevOps() {
  return (
    <CategorySection
      title="DevOps"
      items={devOps}
      categoryRouteBase="/courses/devops"
    />
  );
}
