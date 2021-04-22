import React from 'react'
import Link from 'next/link'
import {
  Home, Portfolio, User, Envelope, Blog,
} from './Svgs'
const Navlinks = ({ link }) => {
  const giveSvg = (link) => {
    switch (link) {
      case 'home':
        return <Home />
      case 'portfolio':
        return <Portfolio />
      case 'contact':
        return <Envelope />
      default:
        break
    }
  }
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

export default Navlinks