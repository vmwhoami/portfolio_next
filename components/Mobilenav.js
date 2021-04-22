import React, { useRef } from 'react';
import Navlinks from './NavLinks'
import links from './linksArray'
const Navigation = () => {
  const refContainer = useRef(null);

  const changeTogle = () => {
    refContainer.current.checked = false;
  };

  return (
    <div className="navigation">
      <input type="checkbox" className="navigation__checkbox" ref={refContainer} id="nav_toggle" />
      <label className="navigation__button" htmlFor="nav_toggle">
        <span className="navigation__burger" />
      </label>
      <div className="navigation__background">&nbsp;</div>
      <nav className="navigation__nav">
        <ul className="navigation__list">
          {links.map((link) => {
            return <Navlinks key={link} link={link} changeTogle={changeTogle} />
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
