import React from 'react';
import InputField from './InputField';

const RegisterForm = () => (
  <div>
    <InputField
      autoFocus
      placeholder="Enter name"
      name="fullname"
    />
  </div>
);

export default RegisterForm;
