import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const isActive = (path) => {
    return location.pathname === path ? 'text-white lg:text-black' : 'text-zinc-300 lg:text-zinc-700';
  };

  return (
    <nav className="flex items-center justify-between flex-wrap h-24 px-6 fixed inset-x-0 top-0 bg-white lg:container lg:mx-auto z-10 font-arial">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link to="/portfolio-penny" className="flex items-center">
          <img
            className="object-contain w-100 mr-2"
            src="https://static.wixstatic.com/media/cb7f63_16719011127049f69c747d75d91739c1~mv2.png/v1/fill/w_171,h_29,al_c,q_85,enc_auto/Penny%E2%80%99s%20profolio.png"
            alt="Logo"
          />
          {/* <span className="font-semibold text-xl tracking-tight">
            My Pages
          </span> */}
        </Link>
      </div>
      <div className="block lg:hidden">
        <button
          className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-500 hover:text-black hover:border-black transition-colors duration-300 ease-in-out"
          onClick={toggleMenu}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path
              d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"
            />
          </svg>
        </button>
      </div>
      <div
        className={`${
          showMenu ? '' : 'hidden'
        } w-full uppercase flex-grow absolute top-24 inset-x-0 bg-gray-500 p-6 lg:bg-transparent lg:static lg:text-right lg:flex lg:items-center lg:w-auto`}
      >
        <div className="text-sm lg:flex-grow">
          <Link
            to="/portfolio-penny"
            className={`block w-full h-10 mt-0 text-base leading-10 tracking-widest lg:text-center lg:w-32 lg:inline-block lg:mt-0 mr-4 ${isActive('/portfolio-penny')}`}
          >
            Projects
          </Link>
          <Link
            to="/portfolio-penny/about"
            className={`block w-full h-10 mt-4 text-base leading-10 tracking-widest lg:text-center lg:w-32 lg:inline-block lg:mt-0 mr-4 ${isActive('/portfolio-penny/about')}`}
          >
            About Me
          </Link>
        </div>
        <div>
          <a
            href="/resume.pdf"
            className="inline-block w-36 h-10 text-smplus leading-10 tracking-widest text-center border rounded-lg text-white border-white bg-gray-500 hover:border-transparent hover:bg-black mt-4 lg:mt-0 transition-colors duration-300 ease-in-out"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
