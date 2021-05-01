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
      <li>
        <Link href={link === 'home'
          ? '/'
          : `/${link}`}
        >
          <button
            type="button"
            className="navigation__itemlink"
            onClick={() => changeTogle()}
            onKeyDown={() => changeTogle()}
            role="button"
            tabIndex={0}
          >
            <i className="navigation__icon">
              {giveSvg(link)}
            </i>

            <span className="navigation__item__span">{link}</span>
          </button>
        </Link>
      </li>
    );
  }

  return (
    <Link href={link === 'home'
      ? '/'
      : `/${link}`}
    >
      <button type="button" className="mynav__link">
        <i className="mynav__icon">
          {giveSvg(link)}
        </i>

        <span className="mynav__link__a">{link}</span>
      </button>
    </Link>
  );
}

Navlinks.propTypes = {
  link: PropTypes.string.isRequired,
  changeTogle: PropTypes.func,

};
export default Navlinks;
