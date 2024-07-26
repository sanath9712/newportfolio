import React from "react";
import Particle from "./Particle";
import TextEffect from "./TextEffect";
import Image from "next/image";
import { ClipboardDocumentCheckIcon } from "@heroicons/react/20/solid";
import { useTheme } from '../Components/ThemeContext'; // Adjust the path as needed

const Hero = () => {
  const { darkMode } = useTheme(); // Use the custom ThemeContext

  return (
    <div className={`h-[88vh] mt-[5vh] bg-cover bg-center relative ${darkMode ? 'bg-[url("/images/banner.jpg")]' : 'bg-[url("/images/banner_white.jpg")]'}`}>
      <Particle color={darkMode ? '#ffffff' : '#000000'} /> {/* Pass the color prop */}
      <div className="w-[90%] md:w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[3rem] h-full items-center">
        <div>
          <h2 className={`text-[28px] md:text-[40px] lg:text-[50px] font-bold ${darkMode ? 'text-white' : 'text-black'}`}>
            HI, I AM SANATH BHIMSEN
          </h2>
          <TextEffect darkMode={darkMode} /> 
          <p className={`mt-[1.5rem] text-[16px] md:text-[18px] ${darkMode ? 'text-[#ffffff92]' : 'text-[#00000092]'}`}>
          Hello, I'm Sanath Bhimsen. I recently graduated from my Master's program in Computer Science at Boston University.
          I have over 3 years of experience in frontend backend development, cloud technologies, and building scalable applications.
          I am actively seeking full-time roles and am eager to explore new opportunities and contribute to innovative projects.
          </p>
          <div className="mt-[2rem] flex flex-col space-y-6 sm:space-y-0 sm:flex-row sm:items-center sm:space-x-6">
          <a className={`px-[2rem] hover:bg-blue-400 transition-all duration-200 py-[1rem] text-[16px] md:text-[18px] 
          font-bold uppercase ${darkMode ? 'bg-[#55e6a5] text-black' : 'bg-[#0d6efd] text-white'} flex items-center space-x-2 cursor-pointer`} href="/resume/resume.pdf" target="_blank">
          <p>Check Out My Resume</p>
          <ClipboardDocumentCheckIcon className={`w-[1.6rem] h-[1.7rem] ${darkMode ? 'text-black' : 'text-white'}`} />
          </a>



            {/* <button className="flex items-center space-x-2">
                <PlayCircleIcon className="w-[4rem] h-[4rem] hover:text-yellow-400 transition-all duration-200 
                text-[#55e6a5]"/>
                <p className="text-[20px] font-semibold text-white">Watch The Video</p>
            </button> */}
          </div>
        </div>
        <div className="w-full max-w-[500px] hidden lg:flex items-center justify-center">
          <div className="w-[80%] relative pt-[80%] rounded-full overflow-hidden">
            <Image src="/images/1.jpeg" alt="user" layout="fill" className="object-cover rounded-full"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
