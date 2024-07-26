import {
  DevicePhoneMobileIcon,
  EnvelopeIcon,
  GlobeAltIcon
} from "@heroicons/react/20/solid";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

import React, { useState, useEffect } from "react";
import { useTheme } from '../Components/ThemeContext'; // Adjust the path as needed

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const { darkMode } = useTheme(); // Use the custom ThemeContext

  useEffect(() => {
    const date = new Date().getFullYear();
    setCurrentYear(date);
  }, []);

  return (
    <div className={`pt-[4rem] pb-[2rem] ${darkMode ? 'bg-[#02050a]' : 'bg-[#f0f0f0]'}`}>
      <div className={`flex flex-col md:flex-row justify-around border-b-[1px] pb-[3rem] ${darkMode ? 'border-gray-400' : 'border-gray-600'} w-[90%] mx-auto gap-[2rem]`}>
        <div className="flex items-center space-x-4">
          <div className={`w-[2.5rem] h-[2.5rem] flex items-center justify-center rounded-full ${darkMode ? 'bg-[#55e6a5]' : 'bg-[#0d6efd]'}`}>
            <FontAwesomeIcon icon={faGithub} className={`${darkMode ? 'text-black' : 'text-white'} w-[1.5rem] h-[1.5rem]`} />
          </div>
          <p className={`text-[17px] ${darkMode ? 'text-white opacity-60' : 'text-black opacity-80'}`}>
            <a href="https://github.com/sanath9712" target="_blank" rel="noopener noreferrer">
              GitHub <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <div className={`w-[2.5rem] h-[2.5rem] flex items-center justify-center rounded-full ${darkMode ? 'bg-[#55e6a5]' : 'bg-[#0d6efd]'}`}>
            <FontAwesomeIcon icon={faLinkedin} className={`${darkMode ? 'text-black' : 'text-white'} w-[1.5rem] h-[1.5rem]`} />
          </div>
          <p className={`text-[17px] ${darkMode ? 'text-white opacity-60' : 'text-black opacity-80'}`}>
            <a href="https://www.linkedin.com/in/sanathbhimsen/" target="_blank" rel="noopener noreferrer">
              LinkedIn <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <div className={`w-[2.5rem] h-[2.5rem] flex items-center justify-center rounded-full ${darkMode ? 'bg-[#55e6a5]' : 'bg-[#0d6efd]'}`}>
            <DevicePhoneMobileIcon className={`w-[1.5rem] h-[1.5rem] ${darkMode ? 'text-black' : 'text-white'}`} />
          </div>
          <div>
            <p className={`text-[17px] ${darkMode ? 'text-white opacity-60' : 'text-black opacity-80'}`}>
              +1 (857) 381-8952
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className={`w-[2.5rem] h-[2.5rem] flex items-center justify-center rounded-full ${darkMode ? 'bg-[#55e6a5]' : 'bg-[#0d6efd]'}`}>
            <EnvelopeIcon className={`w-[1.5rem] h-[1.5rem] ${darkMode ? 'text-black' : 'text-white'}`} />
          </div>
          <div>
            <p className={`text-[17px] ${darkMode ? 'text-white opacity-60' : 'text-black opacity-80'}`}>
              <a href="mailto:sanathbhimsen26@gmail.com">sanathbhimsen26@gmail.com</a>
            </p>
          </div>
        </div>
      </div>
      <div className="w-[90%] mt-[2rem] mx-auto flex flex-col md:flex-row items-center justify-between text-center md:text-left">
        <div className={`text-[16px] ${darkMode ? 'text-[#55e6a5] opacity-90' : 'text-[#0d6efd] opacity-90'} mb-4 md:mb-0`}>
          © {currentYear} Sanath Bhimsen | All rights reserved.
        </div>
        <div className="flex items-center justify-center space-x-4 md:space-x-10">
          <p className={`text-[16px] ${darkMode ? 'text-[#55e6a5] opacity-90' : 'text-[#0d6efd] opacity-90'}`}>Thank you for visiting my Portfolio!</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
