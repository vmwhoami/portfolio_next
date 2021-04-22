import Navlinks from './NavLinks'
const Nav = () => {
  const links = ["home", "portfolio", "contact"]
  return (
    <nav className="mynav">
      {links.map((link) => {
        return <Navlinks link={link} />
      })}
    </nav>
  )
};


export default Nav;
