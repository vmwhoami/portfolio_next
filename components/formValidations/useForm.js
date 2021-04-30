import { useState } from 'react'

export const useForm = (validation) => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value
    })

  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setErrors(validation(values))
    if (!errors) {
      console.log("this will be sent");
    }
  }

  return { handleChange, handleSubmit, values, errors }
}

export default useForm