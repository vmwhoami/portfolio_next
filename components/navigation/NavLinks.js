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
        return <Home key={'home'}/>;
      case 'portfolio':
        return <Portfolio key={'portfolio'}/>;
      case 'contact':
        return <Envelope key={'contact'}/>;
      case 'about':
        return <User key={'about'}/>;
      case 'blog':
        return <Blog key={'blog'} />;
      default:
        return null;
    }
  };

  if (changeTogle) {
    return (
      <li>
        <Link href={link === 'home' ? '/': `/${link}`} >
          {/* eslint-disable-next-line  */}
          <a className="navigation__itemlink"
             onClick={() => changeTogle()}
             onKeyDown={() => changeTogle()}
             role="button"
             tabIndex={0} >
            <i className="navigation__icon">{giveSvg(link)}</i>
            <span className="navigation__item__span">{link}</span>
          </a>
        </Link>
      </li>
    );
  }

  return (
    <Link href={link === 'home' ? '/' : `/${link}`} >
      <button type="button" className="mynav__link">
        <i className="mynav__icon"> {giveSvg(link)}</i>
        <span className="mynav__link__a">{link}</span>
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
