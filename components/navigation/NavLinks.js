import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import {
  Blog, Envelope, Home, Portfolio, User,
} from '../Svgs';

function Navlinks({ link, changeTogle }) {
  const giveSvg = (link) => {
    switch (link) {
      case 'home':
        return <Home />;
      case 'portfolio':
        return <Portfolio />;
      case 'contact':
        return <Envelope />;
      case 'about':
        return <User />;
      case 'blog':
        return <Blog />;
      default:
        return null;
    }
  };

  if (changeTogle) {
    return (
      <Link href={link === 'home'
        ? '/'
        : `/${link}`}
      >
        <a
          className="navigation__itemlink"
          onClick={() => changeTogle()}
        >
          <i className="navigation__icon">
            {giveSvg(link)}
          </i>

          <span className="navigation__item__span">{link}</span>
        </a>
      </Link>
    );
  }

  return (
    <Link href={link === 'home'
      ? '/'
      : `/${link}`}
    >
      <a className="mynav__link">
        <i className="mynav__icon">
          {giveSvg(link)}
        </i>

        <span className="mynav__link__a">{link}</span>
      </a>
    </Link>
  );
}

Navlinks.propTypes = {
  link: PropTypes.string.isRequired,
  changeTogle: PropTypes.func,

};
export default Navlinks;
