import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Nav from './navigation/Nav';
import MobileNav from './navigation/Mobilenav';
import { loginSuccess, setAdmin } from '../redux/login/loginActions';

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  let logedInUser;
  if (typeof window !== 'undefined') {
    const logger = localStorage.getItem('vitaliemelnic');
    logedInUser = JSON.parse(logger);
  }
  useEffect(() => {
    if (logedInUser && logedInUser.admin) {
      dispatch(setAdmin(true));
      dispatch(loginSuccess(logedInUser.email));
    }
    if (logedInUser) {
      dispatch(loginSuccess(logedInUser.email));
    }
  }, [logedInUser]);
  return (
    <>
      <Nav />
      <MobileNav />
      {children}
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
};

export default Layout;
