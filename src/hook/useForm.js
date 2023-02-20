import React, { useState } from 'react';

const useForm = (callback) => {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    event.persist();
    setInputs((inputs) => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
    }
    callback();
  };

  return {
    inputs,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
