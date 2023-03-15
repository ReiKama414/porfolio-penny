import React from 'react';
import { useParams } from 'react-router-dom';
import projectsData from '../data/projectsData';

function ProjectDetail() {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === id);

  document.title = `${project.title} | Penny's Profolio`;

  if (!project) {
    return <div>Project not found</div>;
  }

  const { name, description, image, demoUrl, codeUrl } = project;

  return (
    <div className="container mx-auto px-4">
      <div className="md:flex mt-8 mb-8">
        <div className="md:w-1/2">
          <img
            className="rounded-lg shadow-md"
            src={image}
            alt={name}
          />
        </div>
        <div className="md:w-1/2 md:pl-8">
          <h2 className="text-3xl font-bold mb-4">{name}</h2>
          <p className="text-lg mb-8">{description}</p>
          <div>
            <a
              href={demoUrl}
              target="_blank"
              rel="noreferrer"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
            >
              Demo
            </a>
            <a
              href={codeUrl}
              target="_blank"
              rel="noreferrer"
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            >
              Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;