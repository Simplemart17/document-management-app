import React from 'react';
import './scss/Landing.scss';
import IndexPageDesc from '../components/IndexPageDesc';
import RegisterForm from '../components/RegisterForm';

const Landing = () => (
  <div className="wrapper">
    <IndexPageDesc />
    <header className="header">
      <p>
        Testing out the feature
      </p>
      <RegisterForm />
    </header>
  </div>
);

export default Landing;
