import { useSelector } from 'react-redux';
import { Envelope, Phone } from '../components/Svgs';
import SocialLinks from '../components/smallComponents/SocialLinks';
import Heading from '../components/smallComponents/Heading';
import Form from '../components/formValidations/form';
import Success from '../components/formValidations/success';

const Contact = () => {
  const submitted = useSelector((state) => state.commonReducer.submitted);
  return (
    <div className="container">
      <Heading
        white="get in"
        color="touch"
        bg="contact"
      />

      <div className="contact">
        <div className="contact__left">
          {/* eslint-disable-next-line  */}
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
          {submitted ? <Success /> : <Form />}
        </div>

      </div>
    </div>
  );
};

export default Contact;
