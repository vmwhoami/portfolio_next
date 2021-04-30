import { useState, useEffect } from 'react'

export const useForm = (validation) => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [sending, setSending] = useState(false)

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

    if (Object.values(errors).length === 0) {
      console.log("This is going to be sent");
    } else {
      console.log("This is not going to be sent");
    }
  }

  return { handleChange, handleSubmit, values, errors }
}

export default useForm