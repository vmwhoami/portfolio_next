import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { submitData } from '../../redux/common/commonActions';

export const useForm = (validation) => {
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validation(values));

    if (Object.values(errors).length === 0) {
      dispatch(submitData(values));
    } else {
      console.log('This is not going to be sent');
    }
  };

  return {
    handleChange, handleSubmit, values, errors,
  };
};

export default useForm;
