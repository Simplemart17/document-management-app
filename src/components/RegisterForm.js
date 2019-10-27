import React from 'react';
import './scss/RegisterForm.scss';
import InputField from './InputField';
import Button from './Button';

const RegisterForm = (props) => (
  <div className="registration-form">
    <InputField
      placeholder="Full Name"
      name="fullname"
      onChange={props.handleChange}
      value={props.value}
      error={props.nameError}
      className="registration-form__field"
      showTextOnError={true}
    />
    <InputField
      placeholder="Email Address"
      name="email"
      onChange={props.handleChange}
      value={props.value}
      error={props.emailError}
      type="email"
      className="registration-form__field"
      showTextOnError={true}
    />
    <InputField
      placeholder="Job Title"
      name="jobtitle"
      onChange={props.handleChange}
      value={props.value}
      error={props.jobTitleError}
      className="registration-form__field"
      showTextOnError={true}
    />
    <InputField
      placeholder="Password"
      name="password"
      onChange={props.handleChange}
      value={props.value}
      error={props.passwordError}
      type="password"
      className="registration-form__field"
      showTextOnError={true}
    />
    <InputField
      placeholder="Repeat Password"
      name="cpassword"
      onChange={props.handleChange}
      value={props.value}
      error={props.cPasswordError}
      type="password"
      className="registration-form__field"
      showTextOnError={true}
    />
    <div className="registration-form__password-meter">
      <div
        className="registration-form__password-meter--fill"
        data-strength={props.passwordStrength}></div>
    </div>
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
