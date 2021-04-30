import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { submitData } from '../../redux/common/commonActions';

export const useForm = (validation) => {
  const error = useSelector(state => state.commonReducer.error)
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

    dispatch(submitData(values))

  };

  return {
    handleChange, handleSubmit, values, errors,
  };
};

export default useForm;
