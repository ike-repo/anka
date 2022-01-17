import React from 'react';
import './LoadSpinner.css';
import spinner from '../../assets/spinner50.svg'

const LoadSpinner = () => (
  <div className="spinner-container">
    <div className="lds-spinner" >
      <img src={ spinner } alt="spinner"></img>
    </div>
  </div>  
);

export default LoadSpinner;