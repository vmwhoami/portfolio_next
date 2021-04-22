import React from 'react'
import Link from 'next/link'
import {
  Home, Portfolio, User, Envelope, Blog,
} from './Svgs'
const Navlinks = ({ link, changeTogle }) => {
  const giveSvg = (link) => {
    switch (link) {
      case 'home':
        return <Home />
      case 'portfolio':
        return <Portfolio />
      case 'contact':
        return <Envelope />
      case 'about':
        return <User />
      case 'blog':
        return <Blog />
      default:
        break
    }
  }
  if (changeTogle) {
    return (
      <Link href={link == 'home' ? "/" : `/${link}`}><a className="navigation__itemlink" onClick={() => changeTogle()}>
        <i className="navigation__icon">
          {giveSvg(link)}
        </i>
        <span className="navigation__item__span">{link}</span>
      </a>
      </Link>
    )
  } else {
    return (
      <Link href={link == 'home' ? "/" : `/${link}`}><a className="mynav__link">
        <i className="mynav__icon">
          {giveSvg(link)}
        </i>
        <span className="mynav__link__a">{link}</span>
      </a>
      </Link>
    )
  }
}

export default Navlinks