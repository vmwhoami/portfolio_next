const validation = (values) => {
  const errors = {};
  const { name, email, message } = values;
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!name.trim()) {
    errors.name = 'A name is required';
  }
  if (!email) {
    errors.email = 'An email is required';
  } else if (!re.test(email)) {
    errors.email = 'Email adress is invalid';
  }

  if (!message || message.length < 6) {
    errors.message = 'A full message is required';
  }

  return errors;
};

export default validation;
