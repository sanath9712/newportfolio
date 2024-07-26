// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGithub } from '@fortawesome/free-brands-svg-icons';

// interface Props {
//   icon: React.ReactNode;
//   title: string;
//   description: string;
//   skills: string;
//   githubLink: string;
// }

// const ClientReview = ({ icon, title, description, skills, githubLink }: Props) => {
//   return (
//     <div className='bg-[#09101a] p-12 rounded-lg shadow-lg mx-auto w-[85%] my-8' style={{boxShadow: "rgba(255, 255, 255, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"}}>
//       <div className='flex items-center justify-center mb-4'>
//         {icon}
//         <h1 className='ml-4 text-[20px] sm:text-[25px] md:text-[30px] text-white font-bold'>{title}</h1>
//         <a href={githubLink} target="_blank" rel="noopener noreferrer" className='ml-2'>
//           <FontAwesomeIcon icon={faGithub} className='w-6 h-6 text-white hover:text-[#55e6a5] transition-colors duration-200' />
//         </a>
//       </div>
//       <p className='text-[#e0e0e0] font-normal text-[16px] mb-4 text-center'>{description}</p>
//       <p className='text-[#55e6a5] font-semibold text-center'>Skills Used:</p>
//       <p className='text-[#e0e0e0] font-normal text-center'>{skills}</p>
//     </div>
//   );
// };

// export default ClientReview;



import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

interface Props {
  icon: React.ReactNode;
  title: string;
  description: string;
  skills: string;
  githubLink: string;
}

const ClientReview = ({ icon, title, description, skills, githubLink }: Props) => {
  return (
    <div className='bg-[#09101a] p-12 rounded-lg shadow-lg mx-auto w-[85%] my-8' style={{ boxShadow: "rgba(255, 255, 255, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px" }}>
      <div className='flex items-center justify-center mb-4'>
        {icon}
        <h1 className='ml-4 text-[20px] sm:text-[25px] md:text-[30px] text-white font-bold'>{title}</h1>
        <a href={githubLink} target="_blank" rel="noopener noreferrer" className='ml-2'>
          <FontAwesomeIcon icon={faGithub} className='w-6 h-6 text-white hover:text-[#55e6a5] transition-colors duration-200' />
        </a>
      </div>
      <p className='text-[#e0e0e0] font-normal text-[16px] mb-4 text-center hidden md:block'>{description}</p>
      <p className='text-[#55e6a5] font-semibold text-center'>Skills Used:</p>
      <p className='text-[#e0e0e0] font-normal text-center'>{skills}</p>
    </div>
  );
};

export default ClientReview;
