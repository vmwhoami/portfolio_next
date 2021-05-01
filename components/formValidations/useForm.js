import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { submitData } from '../../redux/common/commonActions';

const useForm = (validation) => {
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

    dispatch(submitData(values));
  };

  return {
    handleChange, handleSubmit, values, errors,
  };
};

export default useForm;
