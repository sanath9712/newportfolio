import React from 'react';

interface Skill {
  name: string;
  icon: string;
}

interface SkillItemProps {
  category: string;
  skills: Skill[];
  darkMode: boolean;
}

const SkillItem = ({ category, skills, darkMode }: SkillItemProps) => {
  return (
    <div className={`p-[2rem] rounded-xl ${darkMode ? 'bg-[#09101a]' : 'bg-white'}`} style={{ boxShadow: darkMode ? '0 4px 8px rgba(255, 255, 255, 0.2)' : '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <h2 className={`text-[20px] font-bold mb-[1rem] ${darkMode ? 'text-white' : 'text-black'}`}>{category}</h2>
      <div className='grid grid-cols-2 gap-[1rem]'>
        {skills.map((skill, index) => (
          <div key={index} className='flex flex-col items-center'>
            <i className={`${skill.icon} colored text-[4rem] ${darkMode && skill.name === 'Flask' ? 'text-white' : ''}`}></i>
            <p className={`mt-[0.5rem] ${darkMode ? 'text-white' : 'text-black'}`}>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillItem;
