"use client";
import React, { useState } from 'react';
import CreditCard from './components/CreditCard';
import CreditCard_from from './components/CreditCard-from';


export default function Home() {
  let [CN, setCN] = useState("****************");
  let [CH, setCH] = useState("Input your name");
  let [Ep_mon, setEp_mon] = useState("00");
  let [Ep_year, setEp_year] = useState("00");
  let [CVN, setCVN] = useState(" ");
  let [CT,setCT]=useState("")

  
  return (
    <div>
      <div className="credit-card-container">
        <CreditCard 
          CN={CN}
          CH={CH}
          Ep_mon={Ep_mon}
          Ep_year={Ep_year}
          CT={CT}
        />
      </div>
      <div className="credit-card-form-container">
        <CreditCard_from
          setCN={setCN}
          setCH={setCH}
          setEp_mon={setEp_mon}
          setEp_year={setEp_year}
          setCT={setCT}
          CN={CN}
        />
      </div>
    </div>
  );
}
