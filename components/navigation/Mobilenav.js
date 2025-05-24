"use client";

import React, { useRef } from 'react';
import Navlinks from './NavLinks';
import links from './linksArray';

function Navigation() {
  const refContainer = useRef(null);

  const changeTogle = () => {
    refContainer.current.checked = false;
  };

  return (
    <div className="navigation">
      <input className="navigation__checkbox" id="nav_toggle" ref={refContainer} type="checkbox" />
      <>{ /* eslint-disable-next-line jsx-a11y/label-has-associated-control */}</>
      <label className="navigation__button" htmlFor="nav_toggle">
        <span className="navigation__burger" />
      </label>

      <div className="navigation__background">&nbsp;</div>
      <nav className="navigation__nav">
        <ul className="navigation__list">
          {links.map((link) => (<Navlinks key={link} link={link} changeTogle={changeTogle} />))}
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
