import { useSelector } from 'react-redux';

const isBrowser = () => typeof window !== 'undefined';

const ProtectedRoute = ({ router, children }) => {
  const { loggedIn, admin } = useSelector((state) => state.loginReducer);

  const unprotectedRoutes = [
    '/blog', '/portfolio', '/login', '/', '/about', '/contact'
  ];

  const pathIsProtected = unprotectedRoutes.indexOf(router.pathname) === -1;
  if (isBrowser() && !(loggedIn && admin) && pathIsProtected) {
    router.push('/login');
  }
  return children;
};
export default ProtectedRoute;
