import { useSelector } from 'react-redux';
import Heading from '../../components/smallComponents/Heading';

const AdminPanel = () => {
  const { user } = useSelector((state) => state.loginReducer);

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
