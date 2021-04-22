import { Fragment } from 'react';
import Nav from './Nav';
import MobileNav from './Mobilenav';

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
