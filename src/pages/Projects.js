import React from 'react';
import { Link } from 'react-router-dom';
import projectsData from '../data/projectsData';

function Projects() {
  document.title = `Penny's Protfolio`;

  // const [selectedCategory, setSelectedCategory] = useState('All');
  // const categories = ['All', 'UIUX', 'Graphic Design'];

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="mt-8 mb-32 lg:mt-16">
        <img
            className="object-contain w-100 mx-auto mb-5 px-6 lg:px-12 lg:max-w-974"
            src="https://static.wixstatic.com/media/cb7f63_a804d17498bc4e1291e11081dccaf8b0~mv2.png/v1/fill/w_1169,h_220,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Penny%E2%80%99s%20profolio_%E5%B7%A5%E4%BD%9C%E5%8D%80%E5%9F%9F%201-02.png"
            alt="Website Title"
        />
        <div className="flex mx-auto lg:max-w-974 flex-col lg:flex-row">
          <div>
            <img 
              className="mx-auto lg:max-w-501"
              src="https://static.wixstatic.com/media/cb7f63_114ab44191f14156a590bb197506d429~mv2.png/v1/fill/w_601,h_397,al_c,lg_1,q_85,enc_auto/%E5%9C%96%E5%83%8F-03.png"
              alt="Protfolio"
            />
          </div>
          <div className="inline-flex flex-col w-full justify-center font-bold mt-10 lg:mt-0">
            <h4 className="text-2xlplus font-rubik mb-8 text-textcustom">
              Hello! I’m Penny,Based in Taiwan.
              <br />
              I'm a UI/UX Designer .
            </h4>
            <p className="font-helvetica font-normal leading-7">
              I have 7 years of work experience, 6 years of graphic design, and 1 years of UI/UX design.
              <br/>
              My job is to draw the Web. App UI interface and do some research, to find the pain point and think about the solutions.
            </p>
          </div>
        </div>
      </div>

      

      <h1 className="mb-11 font-rubik uppercase text-xlplus font-medium text-gray-900 text-center">
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