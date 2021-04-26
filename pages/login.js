import Heading from '../components/smallComponents/Heading';
import { Lock } from '../components/Svgs'
const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault()

  }
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
              <input required placeholder="EMAIL" type="email" name="email" id="email" />
            </div>

            <div className="login__input">
              <input required placeholder="PASSWORD" type="password" name="password" id="password" />
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
