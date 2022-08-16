import React from 'react';
import useForm from './useForm';
import validation from './validation';
import { Plane } from '../Svgs';

const Form = () => {
  const {
    handleChange, handleSubmit, values, errors,
  } = useForm(validation);

  return (
    <form
      className="contact_form"
      method="POST"
      name="contact"
      onSubmit={handleSubmit}
    >

      <div className="contact__nes">
        <div className="contact__input">
          <input
            placeholder="YOUR NAME"
            type="text"
            name="name"
            id="name"
            value={values.name}
            onChange={handleChange}
          />
          {errors.name && <p>{errors.name}</p>}
        </div>

        <div className="contact__input">
          <input
            placeholder="YOUR EMAIL"
            type="email"
            name="email"
            id="email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>

        <div className="contact__input">
          <input
            placeholder="YOUR SUBJECT"
            type="text"
            name="subject"
            id="subject"
            value={values.subject}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="contact__message">
        <textarea
          placeholder="YOUR MESSAGE"
          name="message"
          id="message"
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
  );
};

export default Form;
