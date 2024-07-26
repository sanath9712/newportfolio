import React, { useEffect, useState } from "react";
import { Bars3Icon } from "@heroicons/react/20/solid";
import { Brightness7TwoTone, NightlightTwoTone } from '@mui/icons-material';
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Switch from '@mui/material/Switch';
import CssBaseline from '@mui/material/CssBaseline';
import { useTheme } from '../Components/ThemeContext'; // Adjust the path as needed

interface Props {
  openNav: () => void;
}

const Nav = ({ openNav }: Props) => {
  const [scrolled, setScrolled] = useState(false);
  const { darkMode, toggleDarkMode } = useTheme(); // Use the custom ThemeContext

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <div className={`fixed w-full top-0 z-[10000] transition-colors duration-300 ${scrolled ? (darkMode ? 'bg-[#141c27] backdrop-blur-md' : 'bg-[#f0f4f8] backdrop-blur-md') : (darkMode ? 'bg-[#141c27]' : 'bg-[#f0f4f8]')}`}>
        <div className="flex items-center justify-between w-[80%] mx-auto h-[12vh]">
          <h1 className={`flex-[0.6] cursor-pointer text-[25px] font-bold ${darkMode ? 'text-white' : 'text-black'}`}>
            <a href="/">Sanath Bhimsen</a>
          </h1>
          <div className="hidden md:flex space-x-6">
            <div className="nav-link"><a className={`${darkMode ? 'text-white' : 'text-black'}`} href="/">HOME</a></div>
            <div className="nav-link"><a className={`${darkMode ? 'text-white' : 'text-black'}`} href="#about">ABOUT</a></div>
            <div className="nav-link"><a className={`${darkMode ? 'text-white' : 'text-black'}`} href="#experience">EXPERIENCE</a></div>
            <div className="nav-link"><a className={`${darkMode ? 'text-white' : 'text-black'}`} href="#projects">PROJECTS</a></div>
            <div className="nav-link"><a className={`${darkMode ? 'text-white' : 'text-black'}`} href="#education">EDUCATION</a></div>
            <div className="nav-link"><a className={`${darkMode ? 'text-white' : 'text-black'}`} href="#footer">CONTACT</a></div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <IconButton color="inherit">
                {darkMode ? <Brightness7TwoTone/> : <NightlightTwoTone />}
              </IconButton>
              <Switch checked={darkMode} onChange={toggleDarkMode} />
            </div>
            <div onClick={openNav} className="md:hidden">
              <Bars3Icon className={`${darkMode ? 'text-white' : 'text-black'} w-[2rem] h-[2rem] cursor-pointer`} />
            </div>
          </div>
        </div>
      </div>
    </MuiThemeProvider>
  );
};

export default Nav;
