import Link from 'next/link'
import {
  Home, Portfolio, User, Envelope, Blog,
} from './Svgs';

const Nav = () => (
  <nav className="mynav">
    {/* Home link */}
    <Link href="/">
      <a className="mynav__link">
        <i className="mynav__icon">
          <Home />
        </i>
      </a>
      <span className="mynav__link__a">Home</span>
    </Link>

    {/* Portfolio link */}
    <Link href="/portfolio">
      <a className="mynav__link">
        <i className="mynav__icon">
          <Portfolio />
        </i>
      </a>
      <span className="mynav__link__a">Portfolio</span>
    </Link>

    {/* About me link */}
    {/* <Link className="mynav__link" href="/about">
        <i className="mynav__icon">
          <User />
        </i>
        <span className="mynav__link__a">About-me</span>
      </Link> */}

    {/* Contact link */}
    <Link href="/contact">
      <a className="mynav__link">
        <i className="mynav__icon">
          <Envelope />
        </i>
      </a>
      <span className="mynav__link__a">Contact</span>
    </Link>
    {/* Blog link */}
    {/* <Link className="mynav__link" href="/blog">
        <i className="mynav__icon">
          <Blog />
        </i>
        <span className="mynav__link__a">Blog</span>
      </Link> */}

  </nav>
);

export default Nav;
