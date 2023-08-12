import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaGoogleDrive, FaHome } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { GiSkills } from "react-icons/gi";
import { MdWork } from "react-icons/md";
import { RiContactsBook2Line } from "react-icons/ri";
import { MdCastForEducation } from "react-icons/md";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isLinkActive = (path) => {
    return location.pathname === path ? "underline text-green-400" : "";
  };

  return (
    <nav className="bg-gray-800 text-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center flex-shrink-0 mr-6">
          <Link to="/" className="font-semibold text-2xl tracking-tight">
            Sudama Dhakad
          </Link>
        </div>

        <button
          onClick={toggleMenu}
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen ? "true" : "false"}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full md:flex md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-4 md:mt-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                to="/"
                className={`block mt-4 lg:inline-block lg:mt-0 hover:text-green-400 mr-4 ${isLinkActive(
                  "/"
                )}`}
              >
                <FaHome className="inline mr-1" size="1.2em" color="white" />
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                className={`block mt-4 lg:inline-block lg:mt-0 hover:text-green-400 mr-4 ${isLinkActive(
                  "/about"
                )}`}
              >
                <BsFillPersonFill
                  className="inline mr-1"
                  size="1.2em"
                  color="white"
                />
                About
              </Link>
            </li>
            <li>
              <Link
                to="/educations"
                className={`block mt-4 lg:inline-block lg:mt-0 hover:text-green-400 mr-4 ${isLinkActive(
                  "/educations"
                )}`}
              >
                <MdCastForEducation
                  className="inline mr-1"
                  size="1.2em"
                  color="white"
                />
                Educations
              </Link>
            </li>
            <li>
              <Link
                to="/experiences"
                className={`block mt-4 lg:inline-block lg:mt-0 hover:text-green-400 mr-4 ${isLinkActive(
                  "/experiences"
                )}`}
              >
                <AiOutlineFundProjectionScreen
                  className="inline mr-1"
                  size="1.2em"
                  color="white"
                />
                Experiences
              </Link>
            </li>
            <li>
              <Link
                to="/skills"
                className={`block mt-4 lg:inline-block lg:mt-0 hover:text-green-400 mr-4 ${isLinkActive(
                  "/skills"
                )}`}
              >
                <GiSkills className="inline mr-1" size="1.2em" color="white" />
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className={`block mt-4 lg:inline-block lg:mt-0 hover:text-green-400 mr-4 ${isLinkActive(
                  "/projects"
                )}`}
              >
                <MdWork className="inline mr-1" size="1.2em" color="white" />
                Projects
              </Link>
            </li>
            <li>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                to="https://drive.google.com/file/d/1KIwIZbvtPsSK_oq4OvhAJVZG-IznUteA/view?usp=drive_link"
                className={`block mt-4 lg:inline-block lg:mt-0 hover:text-green-400 mr-4 ${isLinkActive(
                  "/resume"
                )}`}
              >
                <FaGoogleDrive
                  className="inline mr-1"
                  size="1.2em"
                  color="white"
                />
                Resume
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`block mt-4 lg:inline-block lg:mt-0 hover:text-green-400 mr-4 ${isLinkActive(
                  "/contact"
                )}`}
              >
                <RiContactsBook2Line
                  className="inline mr-1"
                  size="1.2em"
                  color="white"
                />
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
