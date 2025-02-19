import React, { useState } from "react";

const courses = [
  {
    title: "Node.js Basics",
    chapters: [
      "Introduction to Node.js",
      "Installation & Setup",
      "Hello World",
      "Working with Modules",
      "Using the REPL",
    ],
  },
  {
    title: "NPM and Package Management",
    chapters: [
      "NPM Basics",
      "package.json Explained",
      "Installing Dependencies",
      "Versioning & Semantic Release",
    ],
  },
  {
    title: "Core Modules and Asynchronous Programming",
    chapters: [
      "fs & path Modules",
      "Events & Event Emitters",
      "Async Patterns (Callbacks, Promises, Async/Await)",
    ],
  },
  {
    title: "Express.js Fundamentals",
    chapters: [
      "Setting up Express",
      "Routing Basics",
      "Middleware & Error Handling",
      "Serving Static Files",
    ],
  },
  {
    title: "Template Engines and CRUD Operations",
    chapters: [
      "Working with EJS/Pug/Handlebars",
      "Rendering Templates",
      "Handling Forms & CRUD",
    ],
  },
  {
    title: "Database Integration and RESTful API",
    chapters: [
      "Connecting to MongoDB",
      "Mongoose Basics",
      "Building a RESTful API",
      "GET, POST, PUT, DELETE",
    ],
  },
  {
    title: "Aggregation in MongoDB",
    chapters: [
      "Aggregation Pipeline",
      "Stages (match, group, project)",
      "Practical Examples",
    ],
  },
  {
    title: "Deployment Strategies",
    chapters: [
      "Deploying to Heroku",
      "PM2 & Process Management",
      "Scaling & Load Balancing",
    ],
  },
  {
    title: "Node.js with GraphQL",
    chapters: [
      "Setting Up GraphQL Server",
      "Type Definitions & Resolvers",
      "Integrating with MongoDB",
    ],
  },
];

export default function CourseGrid() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleViewChapters = (course) => {
    setSelectedCourse(course);
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
    setSelectedCourse(null);
  };

  return (
    <div className="p-8 min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold text-center mb-6">Node.js Curriculum</h1>
      
      {/* GRID LAYOUT */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition flex flex-col h-full"
          >
            {/* Content Container (flex-grow to push button down) */}
            <div className="flex-grow">
              <h2 className="text-lg font-semibold mb-8">{course.title}</h2>
            </div>

            {/* Full-width, bottom-aligned button */}
            <button
              className="w-full bg-black text-white px-4 py-2 rounded-md"
              onClick={() => handleViewChapters(course)}
            >
              View Chapters
            </button>
          </div>
        ))}
      </div>

      {/* SIDEBAR (OPEN WHEN isSidebarOpen IS TRUE) */}
      {isSidebarOpen && (
        <div className="fixed inset-0 flex justify-end z-50">
          {/* BACKDROP (TRANSPARENT) */}
          <div
            className="absolute inset-0  bg-opacity-50"
            onClick={closeSidebar}
          />

          {/* SIDEBAR CONTENT */}
          <div className="relative w-96 h-full bg-white shadow-xl p-6">
            {/* CLOSE BUTTON */}
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
              onClick={closeSidebar}
            >
              ✕
            </button>

            {/* COURSE CHAPTERS */}
            {selectedCourse && (
              <div className="mt-8">
                <h2 className="text-xl font-bold mb-4">
                  {selectedCourse.title}
                </h2>
                <ul className="list-disc list-inside space-y-2">
                  {selectedCourse.chapters.map((chapter, idx) => (
                    <li key={idx} className="text-gray-700">
                      {chapter}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
