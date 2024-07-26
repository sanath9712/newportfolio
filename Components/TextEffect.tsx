import React from 'react';
import { TypeAnimation } from 'react-type-animation';

interface TextEffectProps {
  darkMode: boolean;
}

const TextEffect = ({ darkMode }: TextEffectProps) => {
  return (
    <TypeAnimation
      sequence={[
        'Full Stack Engineer',
        1000,
      ]}
      speed={50}
      className={`text-[2rem] md:text-[2rem] font-bold uppercase ${darkMode ? 'text-[#55e6a5]' : 'text-[#0d6efd]'}`}
      repeat={Infinity}
    />
  );
};

export default TextEffect;
