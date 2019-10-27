/* eslint-disable array-callback-return */
import React, { Component } from 'react';
import zxcvbn from 'zxcvbn';
import './scss/Landing.scss';
import IndexPageDesc from '../components/IndexPageDesc';
import RegisterForm from '../components/RegisterForm';
import { applyValidation } from '../utils/helpers/validationUtils';
import { validationConfig } from '../utils/helpers/formValidation';

class Landing extends Component {
  state = {
    fullname: '',
    email: '',
    jobtitle: '',
    password: '',
    cpassword: '',
    strength: '',
    errors: {
      fullnameError: '',
      emailError: '',
      jobtitleError: '',
      passwordError: '',
      cpasswordError: ''
    },
  }

  validateInputFields = (config = validationConfig) => {
    const fields = ['fullname', 'email', 'jobtitle', 'password', 'cpassword'];

    fields.map((field) => {
      const value = this.state[field];
      const error = applyValidation(value, config[field]);
      this.setFieldError(`${field}Error`, error);
    });
  }

  setFieldError = (field, error) => {
    const { password, cpassword, errors: { cpasswordError } } = this.state;

    this.setState(prevState => ({
      errors: {
        ...prevState.errors,
        [field]: error,
      },
    }));
    if (password !== cpassword) {
      console.log(password, cpasswordError, cpassword)
      this.setState(prevState => ({
        errors: {
          ...prevState.errors,
          cpasswordError: 'Password must match',
        }
      }))
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    const { password } = this.state;

    this.setState({
      errors: {
        ...this.state.errors,
        [`${name}Error`]: '',
      },
      strength: zxcvbn(password).score,
      [name]: value
    })
  }

  handleSubmit = async(event) => {
    event.preventDefault();

    await this.validateInputFields();
    await this.setState({
      errors: {
        ...this.state.errors,
      },
    });
    const hasNoError = Object.values(this.state.errors).every(x => (x === true || x === ''));
    if (!hasNoError) { return; }
  }
  
  renderRegistrationForm = () => {
    const {
      strength,
      errors: { fullnameError, emailError, jobtitleError, passwordError, cpasswordError }
  } = this.state;

    return (
      <RegisterForm
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        nameError={fullnameError}
        emailError={emailError}
        jobTitleError={jobtitleError}
        passwordError={passwordError}
        cPasswordError={cpasswordError}
        passwordStrength={strength}
      />
    )
  }
  
  render() {
    return(
      <div className="wrapper">
        <IndexPageDesc />
        <div className="wrapper__form">
          <div className="wrapper__form-area">
            <h3 className="wrapper__form-area--header">Signup</h3>
            {this.renderRegistrationForm()}
          </div>
        </div>
      </div>
    )};
}

export default Landing;
