// components/navigation/Nav.js
import Navlinks from "./NavLinks";
import links from "./linksArray";

function Nav() {
  return (
    <nav className="fixed right-[2%] 
                    top-1/2 transform 
                    -translate-y-1/2 z-[10000] 
                    hidden md:block">
      {links.map((link) => (
        <Navlinks key={link} link={link} />
      ))}
    </nav>
  );
}

export default Nav;