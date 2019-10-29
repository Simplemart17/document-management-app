import React from 'react';
import './scss/IndexPageDesc.scss';

const IndexPageDesc = () => (
  <div className="content">
    <div className= "content__header">
      <h1>Join Your</h1>
      <h1>Workspace</h1>
    </div>
    <div className="content__text">
      <p>EDMS is an intelligent document management solution that helps you</p>
      <p>bring all your documents into a place-quickly, easily and securely.</p>
    </div>
    <img src="https://res.cloudinary.com/dq7p8ff2f/image/upload/v1571659326/Assets/illustration.png" alt="page illustration" className="content__image" />
  </div>
);

export default IndexPageDesc;