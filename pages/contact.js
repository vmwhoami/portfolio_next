import { Envelope, Phone, Plane } from '../components/Svgs';
import SocialLinks from '../components/smallComponents/SocialLinks';
import Heading from '../components/smallComponents/Heading';
import useForm from "../components/formValidations/useForm";
import validation from "../components/formValidations/validation";
const Contact = () => {
  const { handleChange, handleSubmit, values, errors } = useForm(validation)

  return (
    <div className="container">
      <Heading
        white="get in"
        color="touch"
        bg="contact"
      />

      <div className="contact">
        <div className="contact__left">
          <h3 className="text-uppercase contact__title ">Don't be shy !</h3>
          <p className="mb-3">Get in touch I am open to discuss new projects and ideas. </p>
          <div className="contact__info">
            <i className="contact__icon">
              <Envelope />
            </i>
            <div className="contact__details">
              <p>mail me:</p>
              <p>vmwhoami@gmail.com</p>
            </div>
          </div>
          <div className="contact__info">
            <i className="contact__icon">
              <Phone />
            </i>
            <div className="contact__details">
              <p>call me:</p>
              <p> +373 69442476</p>
            </div>
          </div>
          <SocialLinks />
        </div>
        {/* START OF THE RIGHT SIDE */}
        <div className="contact__right">
          <form className="contact_form" method="POST"
            name="contact"
            onSubmit={handleSubmit} >
            <div className="contact__nes">
              <div className="contact__input">
                <input placeholder="YOUR NAME" type="text"
                  name="name"
                  id="name"
                  value={values.name}
                  onChange={handleChange}
                />
                {errors.name && <p>{errors.name}</p>}
              </div>

              <div className="contact__input">
                <input placeholder="YOUR EMAIL" type="email" name="email" id="email"
                  value={values.email}
                  onChange={handleChange}
                />
                {errors.email && <p>{errors.email}</p>}
              </div>

              <div className="contact__input">
                <input placeholder="YOUR SUBJECT" type="text" name="subject" id="subject"
                  value={values.subject}
                  onChange={handleChange}
                />
              </div>

            </div>

            <div className="contact__message">
              <textarea placeholder="YOUR MESSAGE" name="message" id="message"
                onChange={handleChange}
                value={values.message}
              />
              {errors.message && <p>{errors.message}</p>}
            </div>
            <div data-netlify-recaptcha="true" />
            <button type="submit" className="contact__button">
              <span>SEND MESSAGE</span>
              <i className="social__icon">
                <Plane />
              </i>
            </button>
          </form>
        </div>

      </div>
    </div>
  )
};

export default Contact;
