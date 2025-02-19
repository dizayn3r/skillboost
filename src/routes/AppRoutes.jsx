import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import ProgrammingLanguages from '../pages/ProgrammingLanguages';
import Frameworks from '../pages/Frameworks';
import Databases from '../pages/Databases';
import DevOps from '../pages/DevOps';
import CourseDetail from '../pages/CourseDetail';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/courses/programming-languages" element={<ProgrammingLanguages />} />
      <Route path="/courses/frameworks" element={<Frameworks />} />
      <Route path="/courses/databases" element={<Databases />} />
      <Route path="/courses/devops" element={<DevOps />} />
      <Route path="/courses/:category/:itemName" element={<CourseDetail />} />
    </Routes>
  );
}
