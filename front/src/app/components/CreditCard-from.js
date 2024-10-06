import React,{ useState,use } from 'react';
import '../css/CreditCard.css'; // 假設你將 CSS 文件放在 css 目錄中


let CreditCard_from = ({ setCN, setCH, setEp_mon, setEp_year,setCT,CN }) => {

  const generateMonthOptions = () => {
    return [...Array(12)].map((_, index) => {
      const monthNumber = index + 1;
      return (
        <option key={monthNumber} value={monthNumber}>
          {monthNumber}
        </option>
      );
    });
  };

  const generateYearOptions = () => {
    const currentYear = new Date().getFullYear();
    return Array.from({ length: 15 }, (_, index) => {
      const year = currentYear + index;
      return (
        <option key={year} value={year}>
          {year}
        </option>
      );
    });
  };

function test() {
        alert(CN);
      }
      

function checkType (value){
  if (value.length > 0) {
      if (value[0] === "4") {
        setCT(<img src="/Logo-VISA-transparent-PNG.png" alt="Visa Logo" className="input-image" />);
      } else if (value[0] === "5") {
        setCT(<img src="MS.png" alt="MASTERCARD Logo" className="input-image2" />);
      } else if (value[0] === "3") {
        setCT(<img src="/JCB.png" alt="JCB Logo" className="input-image3" />);
      } else {
        setCT(<img src="/question.png" alt="JCB Logo" className="input-image4" />); // 當輸入不匹配時清空卡片類型
      }
    } else {
      setCT(<img src="/question.png" alt="JCB Logo" className="input-image4" />); // 當輸入為空時清空卡片類型
    }
  }


  return (
    <div className="submit-form">
      <div className="form-group">
        <label className="form-label">Card Number</label>
        <input
          className="form-input"
          id="form-input"
          type="text"
          maxLength="16"
          onChange={(e) => {
            let value=e.target.value
            if (value===""){
                value="****************"
            }
                setCN(value);
                checkType(value)     
          }}
        />
      </div>
      <div className="form-group">
        <label className="form-label">Card Holder</label>
        <input
          className="form-input"
          type="text"
          onChange={(e) => {
            let value=e.target.value
            if (value===""){
                value="Input your name"
            }
            setCH(value); 
                   
          }}
        />



      </div>
      <div className="expiry-cvn-group">
        <div className="form-group">
          <label className="form-label">Expiration Date</label>
          <div className="form-row">
                <select
                  className="form-input select-input"
                  onChange={(e) => setEp_mon(e.target.value)}
            >
                  <option value="" disabled>Month</option>
                  {generateMonthOptions()}
                </select>

                  <select
                    className="form-input select-input"
                    
                    onChange={(e) => setEp_year(e.target.value)}
                  >
                    <option value="" disabled>Year</option>
                    {generateYearOptions()}
                  </select>
          </div>
        </div>


        <div className="form-group">
          <label className="form-label">CVV</label>
          <input
            className="form-input"
            type="text"
            maxLength="3"
          />
        </div>

    </div>

      <button 
      className="submit-button" 
      onClick={()=>{
        test()
      }}
      
      >
        Submit</button>
    </div>
  );
}

export default CreditCard_from;
