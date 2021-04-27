import Heading from '../components/smallComponents/Heading';
import { Lock } from '../components/Svgs';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/login/loginActions'
const Login = () => {
  const dispatch = useDispatch();
  const loggedIn = useSelector((state) => state.loginReducer.loggedIn);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        break;
    }
    return null;
  };
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(login({ email, password }))
    setEmail('')
    setPassword('')
  }
  console.log(loggedIn);
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
              <input required placeholder="EMAIL"
                type="email"
                onChange={(e) => handleChange(e)} value={email} name="email" id="email" />
            </div>

            <div className="login__input">
              <input required placeholder="PASSWORD"
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => handleChange(e)} />
            </div>
            <div className="login__message">

            </div>
          </div>
          <button type="submit" className="mybutton">
            <span className="mybutton__span">login</span>
            <i className="mybutton__icon">
              <Lock size={"size"} />
            </i>
          </button>
        </form>
      </div>
    </div>
  )
};

export default Login;
