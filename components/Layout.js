import { Fragment } from "react";
import Nav from './Nav'
import MobileNav from './Mobilenav'
export const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <MobileNav />
      {children}
    </>
  )
}

export default Layout
