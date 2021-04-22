import React, { useRef } from 'react';
import Link from 'next/link'
import {
  Home, Portfolio, User, Envelope, Blog,
} from './Svgs';

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

          <li className="navigation__item">
            <Link href="/"><a className="navigation__itemlink" onClick={() => changeTogle()}>
              <i className="navigation__icon">
                <Home />
              </i>
              <span className="navigation__item__span">Home</span>
            </a>
            </Link>
          </li>

          <li className="navigation__item">
            <Link href="/portfolio"><a className="navigation__itemlink" onClick={() => changeTogle()}>
              <i className="navigation__icon">
                <Portfolio />
              </i>
              <span className="navigation__item__span">Portfolio</span>
            </a>
            </Link>
          </li>

          <li className="navigation__item">
            <Link className="navigation__itemlink" onClick={() => changeTogle()} href="/contact">
              <i className="navigation__icon">
                <Envelope />
              </i>
              <span className="navigation__item__span">Contact</span>
            </Link>
          </li>

          {/*
          <li className="navigation__item">
            <Link className="navigation__itemlink" href="/about">
              <i className="navigation__icon">
                <User />
              </i>
              <span className="navigation__item__span">About-me</span>
            </Link>
          </li> */}


          {/*
          <li className="navigation__item">
            <Link className="navigation__itemlink" href="/blog">
              <i className="navigation__icon">
                <Blog />
              </i>
              <span className="navigation__item__span">blog</span>
            </Link>
          </li> */}

        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
