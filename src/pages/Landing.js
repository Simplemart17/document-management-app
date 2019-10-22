import React, { Component } from 'react';
import './scss/Landing.scss';
import IndexPageDesc from '../components/IndexPageDesc';
import RegisterForm from '../components/RegisterForm';

class Landing extends Component {
  state = {
    fullname: '',
    email: '',
    jobtitle: '',
    password: '',
    rpassword: '',
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { fullname, email, jobtitle, password, rpassword } = this.state;
  }
  
  renderRegistrationForm = () => {

    return (
      <RegisterForm
      handleChange={this.handleChange}
      handleSubmit={this.handleSubmit}
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
