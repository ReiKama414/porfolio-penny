import React from 'react';
import { Link } from 'react-router-dom';
import projectsData from '../data/projectsData';

function Projects() {
  document.title = `Penny's Profolio`;

  const categories = ['All', 'UIUX', 'Graphic Design'];

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0">
        {/* 預留區塊 */}
      </div>

      

      <h1 className="mt-100vh mb-11 font-helvetica uppercase text-xlplus font-semibold text-gray-900 text-center tracking-d2em">
        Projects
      </h1>
      <ul className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projectsData.map((project) => (
          <li key={project.id} className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200">
            <Link to={`/portfolio-penny/projects/${project.id}`} className="flex-1 flex flex-col p-8">
              <img className="w-64 h-64 flex-shrink-0 mx-auto bg-black rounded-md" src={project.image} alt={project.title} />
              <h3 className="mt-6 text-gray-900 text-xl font-medium">{project.title}</h3>
              <dl className="mt-1 flex-grow flex flex-col justify-between">
                <dt className="sr-only">Technologies used</dt>
                <dd className="text-gray-500 text-sm">{project.technologies}</dd>
                <dt className="sr-only">Project description</dt>
                <dd className="mt-3 text-gray-500">{project.description}</dd>
              </dl>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Projects;