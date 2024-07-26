import {
  CodeBracketSquareIcon,
  CommandLineIcon,
  RocketLaunchIcon,
} from "@heroicons/react/20/solid";
import React from "react";
import { useTheme } from '../Components/ThemeContext'; // Adjust the path as needed

const Services = () => {
  const { darkMode } = useTheme(); // Use the custom ThemeContext

  return (
    <div className={`${darkMode ? 'bg-[#121212]' : 'bg-[#f0f0f0]'} pt-[4rem] md:pt-[8rem] pb-[5rem]`}>
      <p className={`heading ${darkMode ? 'text-white' : 'text-black'}`}>
        Work Experiences
      </p>
      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto items-stretch gap-[3rem] mt-[4rem] ${darkMode ? 'text-white' : 'text-black'}`}>
        <div data-aos="fade-right">
          <div
            className={`${darkMode ? 'bg-[#09101a]' : 'bg-white'} hover:scale-110 transform transition-all duration-300 hover:-rotate-6 font-semibold text-center p-[2rem] flex flex-col justify-between h-full`}
            style={{
              boxShadow: darkMode
                ? "rgba(255, 255, 255, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
                : "rgba(0, 0, 0, 0.1) 0px 10px 20px, rgba(0, 0, 0, 0.15) 0px 6px 6px",
            }}
          >
            <div className="flex-grow">
              <CodeBracketSquareIcon className={`w-[6rem] h-[6rem] mx-auto ${darkMode ? 'text-[#d3fae8]' : 'text-[#0d6efd]'}`} />
              <h1 className={`text-[20px] md:text-[30px] mt-[1.5rem] mb-[0.5rem] ${darkMode ? 'text-white' : 'text-black'}`}>
                Data Engineer Intern
              </h1>
              <p className={`text-[16px] ${darkMode ? 'text-[#55e6a5]' : 'text-[#0d6efd]'} mb-[1.5rem]`}>
                Infinera
                <br />
                Jun 2023 – Aug 2023
                <br /> San Jose, California, USA
              </p>
              <div className={`text-[14px] ${darkMode ? 'text-[#d3d2d2]' : 'text-gray-700'} font-sans text-left space-y-2`}>
                <p>
                Designed a Python-based Metric Collection Framework at the firmware level, integrating real-time Chart.js visualizations to monitor memory and CPU usage, enabling optimizations and improving system performance.
                </p>
                <h3 className={`font-semibold ${darkMode ? 'text-[#55e6a5]' : 'text-[#0d6efd]'}`}>Skills Used:</h3>
                <div className="grid grid-cols-2 gap-x-4">
                  <ul className="list-disc list-outside space-y-1">
                    <li>Python</li>
                    <li>React</li>
                    <li>Chart.js</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div data-aos="zoom-in" data-aos-delay="300">
          <div
            className={`${darkMode ? 'bg-[#09101a]' : 'bg-white'} hover:scale-110 transform transition-all duration-300 hover:-rotate-6 font-semibold text-center p-[2rem] flex flex-col justify-between h-full`}
            style={{
              boxShadow: darkMode
                ? "rgba(255, 255, 255, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
                : "rgba(0, 0, 0, 0.1) 0px 10px 20px, rgba(0, 0, 0, 0.15) 0px 6px 6px",
            }}
          >
            <div className="flex-grow">
              <RocketLaunchIcon className={`w-[6rem] h-[6rem] mx-auto ${darkMode ? 'text-[#d3fae8]' : 'text-[#0d6efd]'}`} />
              <h1 className={`text-[20px] md:text-[30px] mt-[1.5rem] mb-[0.5rem] ${darkMode ? 'text-white' : 'text-black'}`}>
                Software Engineer
              </h1>
              <p className={`text-[16px] ${darkMode ? 'text-[#55e6a5]' : 'text-[#0d6efd]'} mb-[1.5rem]`}>
                Sophos
                <br />
                Jun 2019 – Jun 2022
                <br />
                Bengaluru, Karnataka, India
              </p>
              <div className={`text-[14px] ${darkMode ? 'text-[#d3d2d2]' : 'text-gray-700'} font-sans text-left space-y-2`}>
                <p>
                Worked on VPN features for the Sophos XG firewall, establishing site-to-site IPsec VPN connections to AWS VPC. Improved API response times, overhauled the VPN UI, optimized React components, implemented VPN log streaming to AWS CloudWatch, and resolved customer escalations to enhance stability and reliability.
                </p>
                <h3 className={`font-semibold ${darkMode ? 'text-[#55e6a5]' : 'text-[#0d6efd]'}`}>Skills Used:</h3>
                <div className="grid grid-cols-2 gap-x-4">
                  <ul className="list-disc list-outside space-y-1">
                    <li>JavaScript</li>
                    <li>React.js</li>
                    <li>Node.js</li>
                    <li>Java</li>
                    <li>API Design</li>
                  </ul>
                  <ul className="list-disc list-outside space-y-1">
                    <li>CI/CD</li>
                    <li>AWS VPC</li>
                    <li>AWS Cloud Watch</li>
                    <li>Team Collaboration</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div data-aos="fade-left" data-aos-delay="500">
          <div
            className={`${darkMode ? 'bg-[#09101a]' : 'bg-white'} hover:scale-110 transform transition-all duration-300 hover:-rotate-6 font-semibold text-center p-[2rem] flex flex-col justify-between h-full`}
            style={{
              boxShadow: darkMode
                ? "rgba(255, 255, 255, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
                : "rgba(0, 0, 0, 0.1) 0px 10px 20px, rgba(0, 0, 0, 0.15) 0px 6px 6px",
            }}
          >
            <div className="flex-grow">
              <CommandLineIcon className={`w-[6rem] h-[6rem] mx-auto ${darkMode ? 'text-[#d3fae8]' : 'text-[#0d6efd]'}`} />
              <h1 className={`text-[20px] md:text-[30px] mt-[1.5rem] mb-[0.5rem] ${darkMode ? 'text-white' : 'text-black'}`}>
                Data Science Intern
              </h1>
              <p className={`text-[16px] ${darkMode ? 'text-[#55e6a5]' : 'text-[#0d6efd]'} mb-[1.5rem]`}>
                Perfios
                <br />
                Jan 2019 – May 2019
                <br /> Bengaluru, Karnataka, India
              </p>
              <div className={`text-[14px] ${darkMode ? 'text-[#d3d2d2]' : 'text-gray-700'} font-sans text-left space-y-2`}>
                <p>
                Implemented interactive d3.js visualizations for banking customer demographic and financial transaction data, enabling quicker identification of key market trends.
                </p>
                <br></br>
                <br></br>
                <h3 className={`font-semibold ${darkMode ? 'text-[#55e6a5]' : 'text-[#0d6efd]'}`}>Skills Used:</h3>
                <div className="grid grid-cols-2 gap-x-4">
                  <ul className="list-disc list-outside space-y-1">
                    <li>Python</li>
                    <li>d3.js</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScipt</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
