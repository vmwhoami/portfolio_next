import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Nav from './navigation/Nav';
import MobileNav from './navigation/Mobilenav';
import { loginSuccess } from '../redux/login/loginActions';

const Layout = ({ children }) => {
  if (typeof window !== "undefined") {
    let l = localStorage.getItem('vitaliemelnic')
    console.log(JSON.parse(l));
  }
  return (
    <>
      <Nav />
      <MobileNav />
      {children}
    </>
  )
};

Layout.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
};

export default Layout;
