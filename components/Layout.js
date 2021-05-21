import PropTypes from 'prop-types';
import Nav from './navigation/Nav';
import MobileNav from './navigation/Mobilenav';

const Layout = ({ children }) => (
  <>
    <Nav />

    <MobileNav />

    {children}
  </>
);

Layout.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
};

export default Layout;
