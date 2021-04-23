import Nav from './navigation/Nav';
import MobileNav from './navigation/Mobilenav';

export function Layout({ children }) {
  return (
    <>
      <Nav />

      <MobileNav />

      {children}
    </>
  );
}

export default Layout;
