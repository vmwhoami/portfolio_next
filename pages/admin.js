import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Heading from '../components/smallComponents/Heading';

const AdminPanel = () => {
  const router = useRouter();
  const { loggedIn, admin, user } = useSelector((state) => state.loginReducer);

  useEffect(() => {
    if (!(admin && loggedIn)) {
      router.push('/login');
    }
  }, [admin]);

  return (
    <div className="container">
      <Heading
        white={user && user.split('@')[0]}
        color="Area"
        bg="admin"
      />
      <div className="admin" />
    </div>
  );
};

export default AdminPanel;
