import Navlinks from "./NavLinks";
import links from "./linksArray";

function Nav() {
  return (
    <nav className="mynav">
      {links.map((link) => (
        <Navlinks key={link} link={link} />
      ))}
    </nav>
  );
}

export default Nav;
