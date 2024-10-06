// components/CreditCard.js
import React, { useState } from 'react';
import '../css/CreditCard.css';

const CreditCard = ({CN,CH,Ep_year,Ep_mon,CT}) => {


  return (
    <div className="credit-card">
      <div className="card-top">
        <div className="card-chip"></div>
        <div className="card-type">{CT}</div>
      </div>
      <div className="card-number">{CN}</div>
      <div className="card-holder">
        <span>Card Holder</span>
        <span>{CH}</span>
      </div>
      <div className="card-expiry">
        <span>Expires</span>
        <span>{Ep_mon}/{Ep_year}</span>
      </div>
    </div>
  );
};

export default CreditCard;
