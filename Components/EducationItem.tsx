import React from 'react';

interface Props {
  title: string;
  year: string;
  university: string;
  darkMode: boolean;
  courses?: string;           
  specialization?: string;   
}

const EducationItem = ({ title, year, university, darkMode, courses, specialization }: Props) => {
  return (
    <div className='mb-[4rem] md:mb-[8rem]'>
      <div className='flex items-center'>
        <span className={`px-[1rem] py-[0.5rem] ${darkMode ? 'text-[#55e6a5] border-[#55e6a5]' : 'text-[#0d6efd] border-[#0d6efd]'} font-bold text-[14px] sm:text-[16px] md:text-[18px] border-[2px]`}>
          {year}
        </span>
      </div>
      <h1 className={`mt-[2rem] capitalize font-semibold mb-[1rem] text-[20px] sm:text-[25px] md:text-[30px] ${darkMode ? 'text-white' : 'text-black'}`}>
        {title}
      </h1>
      <p className={`mt-[0.5rem] capitalize font-semibold mb-[0.5rem] text-[10px] sm:text-[13px] md:text-[20px] ${darkMode ? 'text-[#55e6a5]' : 'text-[#0d6efd]'}`}>
        {university}
      </p>
      <p className={`font-normal w-full text-[14px] sm:text-[16px] md:text-[17px] ${darkMode ? 'text-[#aaaaaa] opacity-80' : 'text-gray-700 opacity-80'}`}>
        {courses ? <><b>Courses Taken:</b> {courses}</> : (specialization ? <><b>Specialization:</b> {specialization}</> : null)}
      </p>
    </div>
  );
};

export default EducationItem;
