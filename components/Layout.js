import { Fragment } from "react";
import Nav from './Nav'
export const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      {children}

    </>
  )
}

export default Layout
