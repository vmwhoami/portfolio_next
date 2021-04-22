import Navlinks from './NavLinks'
import links from './linksArray'
const Nav = () => {
  return (
    <nav className="mynav">
      {links.map((link) => {
        return <Navlinks key={link} link={link} />
      })}
    </nav>
  )
};


export default Nav;
