"use client";
//components/navigation/NavLinks.js
import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { Blog, Envelope, Home, Portfolio, User } from "../Svgs";

const linksDictionary = {
  home: <Home />,
  portfolio: <Portfolio />,
  contact: <Envelope />,
  blog: <Blog />,
  about: <User />,
};

function Navlinks({ link, changeTogle }) {
  const giveSvg = (link) => <>{linksDictionary[link]}</>;

  if (changeTogle) {
    return (
      <li>
        <Link 
         className="navigation__itemlink"
            onClick={() => changeTogle()}
            onKeyDown={() => changeTogle()}
            role="button"
            tabIndex={0} href={link === "home" ? "/" : `/${link}`}>
          {/* eslint-disable-next-line  */}
            <i className="navigation__icon">{giveSvg(link)}</i>
            <span className="navigation__item__span">{link}</span>
          
        </Link>
      </li>
    );
  }

  return (
    <Link href={link === "home" ? "/" : `/${link}`}>
      <button type="button" 
        className="group relative w-20 h-20 text-2xl my-8 bg-gray-400 rounded-full flex outline-none cursor-pointer items-center transition-all duration-300 hover:bg-blue-500 active:bg-blue-500"
      >
        {/* Icon */}
        <i className="w-full h-full flex justify-center items-center z-[1000]">
          {giveSvg(link)}
        </i>
        
        {/* Expandable text label */}
        <span className="absolute text-transparent no-underline bg-transparent z-30 origin-right -translate-x-3/4 text-2xl font-bold w-0 h-20 rounded-full flex items-center justify-center uppercase transition-all duration-300 ease-[cubic-bezier(0.44,0.87,0.83,1)] group-hover:text-white group-hover:bg-blue-500 group-hover:w-80">
          {link}
        </span>
      </button>
    </Link>
  );
}

Navlinks.defaultProps = {
  changeTogle: null,
};

Navlinks.propTypes = {
  link: PropTypes.string.isRequired,
  changeTogle: PropTypes.func,
};

export default Navlinks;