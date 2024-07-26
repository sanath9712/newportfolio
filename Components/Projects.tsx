import Image from 'next/image';
import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { useTheme } from '../Components/ThemeContext'; // Adjust the path as needed
import AOS from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {
  const { darkMode } = useTheme(); // Use the custom ThemeContext

  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, [darkMode]);

  const projectData = [
    {
      title: 'Emotion Based Music Recommender',
      image: '/images/Emotion_based.jpg',
      githubLink: 'https://github.com/sanath9712/EmotionBasedMusicRecommender',
      description: "The emotion-based music recommender detects over 15 different emotions from user inputs and suggests corresponding music to enhance the listening experience.",
      skills: ["Python", "Flask", "HTML", "CSS", "JavaScript", "GPT-3.5","OpenAI API","BERT"]
    },
    {
      title: 'Cloud Bursting in Apache Flink',
      image: '/images/cloudbursting.jpg',
      githubLink: 'https://github.com/sanath9712/Apache-Flink-Cloud-Bursting',
      description: "Implemented Cloud Bursting in Apache Flink to manage sudden spikes in data workload by offloading extra tasks to AWS Lambda, reducing system strain and demonstrating the method's effectiveness in handling peak loads.",
      skills: ["Apache Flink", "Java","Maven","AWS Lambda"]
    },
    {
      title: 'Plan my trip',
      image: '/images/travel.jpg',
      githubLink: 'https://github.com/sanath9712/PlanMyTrip20',
      description: "Plan My Trip is an Android app that creates personalized travel itineraries by using users' locations to suggest optimized routes and local attractions. It stores data in Firebase for secure and real-time updates",
      skills: ["Kotlin"]
    },
    {
      title: 'ATM/Banking Management System',
      image: '/images/atm.jpg',
      githubLink: 'https://github.com/sanath9712/Final-Project-ATM',
      description: 'Developed a banking app in Java with a user interface built using Swing GUI, a Java toolkit. Implemented a modular, object-oriented architecture with MVC design to improve code reusability and maintainability',
      skills: ["Java", "Swing GUI", "MySQL","Object Oriented Programming"]
    }
  ];

  return (
    <div className={`pt-[4rem] md:pt-[8rem] pb-[1rem] ${darkMode ? 'bg-[#09101a]' : 'bg-[#f0f0f0]'}`}>
      <h1 className={`heading ${darkMode ? 'text-white' : 'text-black'}`}>
        PROJECTS
      </h1>    
      <div className='w-[80%] pt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-[2rem]'>
        {projectData.map((project, index) => (
          <div key={index} data-aos="fade-up" className={`p-2 rounded-xl ${darkMode ? 'bg-[#09101a]' : 'bg-white'}`} style={{ boxShadow: darkMode ? '0 4px 8px rgba(255, 255, 255, 0.2)' : '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <div className='relative w-[100%] h-[200px] md:h-[300px]'>
              <Image 
                src={project.image}
                alt={project.title}
                layout='fill'
                className='object-cover rounded-lg'
              />
            </div>
            <div className={`mt-[1rem] flex flex-col items-center ${darkMode ? 'text-white' : 'text-black'}`}>
              <h2 className='text-[20px] font-bold text-center'>
                <div className='flex items-center justify-center space-x-2'>
                  {project.title} &nbsp;
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} className={`w-[1.2rem] h-[1.2rem] ${darkMode ? 'text-white hover:text-teal-300' : 'text-black hover:text-teal-600'}`} />
                  </a>
                </div>
              </h2>
              <p className={`text-[16px] mt-[0.5rem] text-center ${darkMode ? 'text-[#d3d2d2]' : 'text-gray-700'}`}>{project.description}</p>
              <div className='mt-[0.5rem]'>
                <h3 className={`font-semibold text-center ${darkMode ? 'text-[#55e6a5]' : 'text-[#0d6efd]'}`}>Skills Used:</h3>
                <div className='grid grid-cols-4 gap-12 p-4'>
                  <ul className='list-square'>
                    {project.skills.filter((_, idx) => idx % 4 === 0).map((skill, idx) => (
                      <li key={idx} className='text-[14px]'>{skill}</li>
                    ))}
                  </ul>
                  <ul className='list-square'>
                    {project.skills.filter((_, idx) => idx % 4 === 1).map((skill, idx) => (
                      <li key={idx} className='text-[14px]'>{skill}</li>
                    ))}
                  </ul>
                  <ul className='list-square'>
                    {project.skills.filter((_, idx) => idx % 4 === 2).map((skill, idx) => (
                      <li key={idx} className='text-[14px]'>{skill}</li>
                    ))}
                  </ul>
                  <ul className='list-square'>
                    {project.skills.filter((_, idx) => idx % 4 === 3).map((skill, idx) => (
                      <li key={idx} className='text-[14px]'>{skill}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>  
    </div>
  );
}

export default Projects;
