import React from 'react';
import ProgrammingLanguages from './ProgrammingLanguages';
import Frameworks from './Frameworks';
import Databases from './Databases';
import DevOps from './DevOps';

export default function Home() {
  return (
    <div className="p-8 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8">Skills</h1>
      <div className="flex flex-col gap-4 items-center">
        <ProgrammingLanguages />
        <Frameworks />
        <Databases/>
        <DevOps/>
      </div>
    </div>
  );
}
