import React from 'react';
import './scss/RegisterForm.scss';
import InputField from './InputField';
import Button from './Button';

const RegisterForm = (props) => (
  <div className="registration-form">
    <InputField
      autoFocus
      placeholder="Full Name"
      name="fullname"
      onChange={props.handleChange}
      value={props.value}
      className="registration-form__field"
    />
    <InputField
      autoFocus
      placeholder="Email Address"
      name="email"
      onChange={props.handleChange}
      value={props.value}
      type="email"
      className="registration-form__field"
    />
    <InputField
      autoFocus
      placeholder="Job Title"
      name="jobtitle"
      onChange={props.handleChange}
      value={props.value}
      className="registration-form__field"
    />
    <InputField
      autoFocus
      placeholder="Password"
      name="password"
      onChange={props.handleChange}
      value={props.value}
      type="password"
      className="registration-form__field"
    />
    <InputField
      autoFocus
      placeholder="Repeat Password"
      name="rpassword"
      onChange={props.handleChange}
      value={props.value}
      type="password"
    />
    <p className="registration-form__text">Already have an account?
      <span className="registration-form__text--span">Log In</span>
    </p>
    <Button 
      type="submit"
      name="Join Workspace"
      isActive
      onClick={props.handleSubmit}
    />
  </div>
);

export default RegisterForm;
