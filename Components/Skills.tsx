import React from 'react';
import { useTheme } from '../Components/ThemeContext'; // Adjust the path as needed
import SkillItem from './SkillItem';

const Skills = () => {
  const { darkMode } = useTheme(); // Use the custom ThemeContext

  const frontendSkills = [
    { name: 'React', icon: 'devicon-react-original' },
    { name: 'JavaScript', icon: 'devicon-javascript-plain' },
    { name: 'TypeScript', icon: 'devicon-typescript-plain' },
    { name: 'HTML5', icon: 'devicon-html5-plain' },
    { name: 'd3.js', icon: 'devicon-d3js-plain' },
    { name: 'AngularJS', icon: 'devicon-angularjs-plain' },
  ];

  const backendSkills = [
    { name: 'Python', icon: 'devicon-python-plain' },
    { name: 'Java', icon: 'devicon-java-plain' },
    { name: 'Node.js', icon: 'devicon-nodejs-plain' },
    { name: 'Express', icon: 'devicon-express-original' },
    { name: 'Flask', icon: 'devicon-flask-original' },
    { name: 'Spring', icon: 'devicon-spring-plain' },
  ];

  const cloudDevOpsSkills = [
    { name: 'AWS', icon: 'devicon-amazonwebservices-plain' },
    { name: 'Docker', icon: 'devicon-docker-plain' },
    { name: 'Kubernetes', icon: 'devicon-kubernetes-plain' },
    { name: 'Git', icon: 'devicon-git-plain' },
    { name: 'GitHub', icon: 'devicon-github-original' },
    { name: 'CI/CD (Jenkins)', icon: 'devicon-jenkins-line' },
  ];

  const databases = [
    { name: 'MySQL', icon: 'devicon-mysql-plain' },
    { name: 'PostgreSQL', icon: 'devicon-postgresql-plain' },
    { name: 'MongoDB', icon: 'devicon-mongodb-plain' },
    { name: 'SQLite3', icon: 'devicon-sqlite-plain' },
    { name: 'Redis', icon: 'devicon-redis-plain' },
    { name: 'Apache Kafka', icon: 'devicon-apachekafka-plain' },
  ];

  return (
    <div className={`pt-[4rem] md:pt-[4rem] pb-[5rem] ${darkMode ? 'bg-[#09101a]' : 'bg-[#f0f0f0]'}`}>
      <h1 className={`heading ${darkMode ? 'text-white' : 'text-black'} mt-[2.5rem] mb-[2rem]`}>Skills</h1>
      <div className='w-[90%] mx-auto grid grid-cols-1 md:grid-cols-4 gap-[2rem] items-start'>
        <SkillItem category="Frontend" skills={frontendSkills} darkMode={darkMode} />
        <SkillItem category="Backend" skills={backendSkills} darkMode={darkMode} />
        <SkillItem category="Cloud/DevOps" skills={cloudDevOpsSkills} darkMode={darkMode} />
        <SkillItem category="Databases/Tools" skills={databases} darkMode={darkMode} />
      </div>
    </div>
  );
};

export default Skills;
