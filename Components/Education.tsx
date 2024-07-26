import React from 'react';
import EducationItem from './EducationItem';
import { useTheme } from '../Components/ThemeContext';
const Education = () => {
  const { darkMode } = useTheme(); // Use the custom ThemeContext

  return (
    <div className={`pt-[4rem] md:pt-[8rem] pb-[5rem] ${darkMode ? 'bg-[#09101a]' : 'bg-[#f0f0f0]'}`}>
      <h1 className={`heading ${darkMode ? 'text-white' : 'text-black'}`}>Education</h1>
      <div className='w-[90%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-start'>
        <EducationItem
          title="Master Of Science, Computer Science"
          year="Sept 2022 - Jan 2024"
          university="Boston University, Boston, Massachusetts"
          courses="Advanced Algorithms, Object Oriented Design Principles, Streaming And Event Driven Systems, Mobile Application Development, Conversational AI,  Computational Tools for Data Science, Natural Language Processing"
          darkMode={darkMode}
        />
        <EducationItem
          title="Bachelor of Technology, Computer Science"
          year="Aug 2015 - Aug 2019"
          university="PES University, Bengaluru, Karnataka, India"
          specialization = "Data Science"
          darkMode={darkMode}
        />
      </div>
    </div>
  );
};

export default Education;
