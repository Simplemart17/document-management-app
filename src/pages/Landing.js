/* eslint-disable array-callback-return */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import zxcvbn from 'zxcvbn';
import './scss/Landing.scss';
import IndexPageDesc from '../components/IndexPageDesc';
import RegisterForm from '../components/RegisterForm';
import { applyValidation } from '../utils/helpers/validationUtils';
import { validationConfig } from '../utils/helpers/formValidation';
import { registerAction } from '../store/auth/index';
import Loader from '../components/Loader';

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
    const { password, cpassword } = this.state;

    this.setState(prevState => ({
      errors: {
        ...prevState.errors,
        [field]: error,
      },
    }));
    if (password !== cpassword) {
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

    name === 'password' ? this.setState({
      [name]: value,
      strength: zxcvbn(password).score,
    }) :
    this.setState({
      errors: {
        ...this.state.errors,
        [`${name}Error`]: '',
      },
      [name]: value
    })
  }

  handleSubmit = async(e) => {
    e.preventDefault();
    const { register, history } = this.props;
    const { fullname, email, jobtitle, password } = this.state;
    const payload = {
      fullname,
      email,
      jobtitle,
      password
    }


    await this.validateInputFields();
    await this.setState({
      errors: {
        ...this.state.errors,
      },
    });
    const hasNoError = Object.values(this.state.errors).every(x => (x === true || x === ''));
    if (!hasNoError) { return; }
    await register(payload);
    history.push('/dashboard');
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
    const { isLoading } = this.props;
    return(
      <div className="wrapper">
        <IndexPageDesc />
        <div className="wrapper__form">
          <div className="wrapper__form-area">
            <h3 className="wrapper__form-area--header">Signup</h3>
            {this.renderRegistrationForm()}
            {isLoading && <Loader />}
          </div>
        </div>
      </div>
    )};
}

const mapStateToProps = state => ({
  registerState: state.auth.data,
  isLoading: state.auth.isLoading
});

const mapDispatchToProps = dispatch => ({
  register: payload => dispatch(registerAction(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Landing));
