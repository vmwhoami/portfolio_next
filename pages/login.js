import { useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import Heading from '../components/smallComponents/Heading';
import { Lock } from '../components/Svgs';
import { login } from '../redux/login/loginActions';

const Login = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const {
    loggedIn, user, errorMsg, admin,
  } = useSelector((state) => state.loginReducer);
  const [values, setValues] = useState({
    email: '',
    password: '',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = values;
    dispatch(login({ email, password }));
    setValues({
      email: '',
      password: '',
    });
  };
  if (loggedIn && admin) router.push('/admin');
  return (
    <div className="container">
      <Heading
        white="Admin"
        color="Login"
        bg="Authenticate"
      />
      <div className="login">
        <form className="form" onSubmit={handleSubmit}>
          <div className="form__container">
            <input type="hidden" name="form-name" value="contact" />
            <div className="login__input">
              <input
                required
                placeholder="EMAIL"
                type="email"
                onChange={handleChange}
                value={values.email}
                name="email"
                id="email"
              />
            </div>

            <div className="login__input">
              <input
                required
                placeholder="PASSWORD"
                autoComplete="current-password"
                type="password"
                name="password"
                id="password"
                value={values.password}
                onChange={handleChange}
              />
            </div>
            <div className="login__message" />
          </div>
          {loggedIn ? <p>{`Logged In as ${user}`}</p> : <p>{errorMsg}</p>}
          <button type="submit" className="mybutton">
            <span className="mybutton__span">login</span>
            <i className="mybutton__icon">
              <Lock />
            </i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
