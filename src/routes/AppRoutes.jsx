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
      {/* Index route renders Home */}
      <Route index element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path="/programming-languages" element={<ProgrammingLanguages />} />
      <Route path="/frameworks" element={<Frameworks />} />
      <Route path="/databases" element={<Databases />} />
      <Route path="/devops" element={<DevOps />} />
      <Route path="/:category/:itemName" element={<CourseDetail />} />
    </Routes>
  );
}
