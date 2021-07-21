import { useSelector } from 'react-redux';

const isBrowser = () => typeof window !== 'undefined';

const ProtectedRoute = ({ router, children }) => {
  const { loggedIn, admin } = useSelector((state) => state.loginReducer);

  const protectedPath = [
    '/admin', '/admin/newItem', '/admin/edit',
  ];

  const pathIsProtected = protectedPath.includes(router.pathname);
  if (isBrowser() && !(loggedIn && admin) && pathIsProtected) {
    router.push('/login');
  }
  return children;
};
export default ProtectedRoute;
