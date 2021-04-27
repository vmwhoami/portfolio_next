import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Nav from './navigation/Nav';
import MobileNav from './navigation/Mobilenav';
import { getPortfolios } from '../redux/portfolios/portfolioActions';


export function Layout({ children }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPortfolios());
  }, []);
  return (
    <>
      <Nav />

      <MobileNav />

      {children}
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,

};
export default Layout;
