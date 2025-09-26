"use client";
//components/navigation/Mobilenav.js
import React, { useRef } from 'react';
import Navlinks from './NavLinks';
import links from './linksArray';

function Navigation() {
  const refContainer = useRef(null);

  const changeTogle = () => {
    refContainer.current.checked = false;
  };

  return (
    <div className="hidden max-md:block">
      <input 
        className="hidden" 
        id="nav_toggle" 
        ref={refContainer} 
        type="checkbox" 
      />
      
      {/* Hamburger Button */}
      <label 
        className="bg-gray-400 h-24 w-24 fixed rounded-2xl top-12 right-[2%] z-[150] 
                   shadow-[0_0_1rem_rgba(0,0,0,0.9)] flex justify-center items-center 
                   cursor-pointer group"
        htmlFor="nav_toggle"
      >
        <span className="navigation__burger"></span>
      </label>

      {/* Background */}
      <div className="h-20 w-20 fixed rounded-2xl top-12 right-[2%] 
                      bg-gradient-radial from-black to-gray-400 z-[100] 
                      transition-transform duration-[800ms] ease-[cubic-bezier(0.97,-0.25,0.13,1.31)]
                      peer-checked:scale-[100]">
        &nbsp;
      </div>

      {/* Navigation Menu */}
      <nav className="h-screen fixed top-0 -left-[400rem] z-[125] 
                      flex justify-center items-center opacity-0 w-full
                      transition-all duration-[800ms] ease-[cubic-bezier(0.97,-0.25,0.13,1.31)]
                      peer-checked:left-0 peer-checked:opacity-100 peer-checked:w-full">
        <ul className="list-none">
          {links.map((link) => (
            <Navlinks key={link} link={link} changeTogle={changeTogle} />
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;