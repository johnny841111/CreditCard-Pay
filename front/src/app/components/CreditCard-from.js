import React,{ useState,use } from 'react';
import '../css/CreditCard.css'; // 假設你將 CSS 文件放在 css 目錄中


let CreditCard_from = ({ setCN, setCH, setEp_mon, setEp_year,setCT,CN,CH,CVV,setCVV,Ep_mon,Ep_year }) => {

  const generateMonthOptions = () => {
    let Month=["01","02","03","04","05","06","07","08","09","10","11","12"]
    return (
      Month.map((value)=>
        <option key={value} value={value}>
          {value}
        </option>
      )
    );
  };

  const generateYearOptions = () => {
    let currentYear = new Date().getFullYear();
    let array=[]
    for(let i =0;i<11;i++){
      array.push(currentYear+i)
    }
    return (
      array.map((value)=>
        <option key={value} value={value}>
          {value}
        </option>
      )
    );

  };


      

function checkType (value){
  if (value.length > 0) {
      if (value[0] === "4") {
        setCT(<img src="/Logo-VISA-transparent-PNG.png" alt="Visa Logo" className="input-image" />);
      } else if (value[0] === "5") {
        setCT(<img src="MS.png" alt="MASTERCARD Logo" className="input-image2" />);
      } else if (value[0] === "3") {
        setCT(<img src="/JCB.png" alt="JCB Logo" className="input-image3" />);
      } else {
        setCT(""); // 當輸入不匹配時清空卡片類型
      }
    } else {
      setCT(""); // 當輸入為空時清空卡片類型
    }
  }


  function have_correct_infromation(){
    let cardNumber= isNumeric(CN)
        let cardHolder=No_value(CH)
        let CVV_type=check_CVV_type(CVV)
        if (cardNumber==false){
          alert("卡號為不支援的字符或長度不足")
          return false
        }
        if (cardHolder==false){
          alert("持卡人欄位不支援此字符")
          return false
        }
        if (CVV_type==false){
          alert("CVV不支援此字符")
          return false
        }
        
      }
  
  function isNumeric(str) {
    if (str.length!=16){
      return false
    }

    return /^\d+$/.test(str);
    
  }

  function No_value(str) {
    return  /^[a-zA-Z]+$/.test(str);
  }
  function check_CVV_type(str) {
    return  /^\d+$/.test(str);
  }

  async function post_data_to_backend(){
    let cardData={
      CardNumber:CN,
      CardHolder:CH,
      ExpirationMonth:Ep_mon,
      ExpirationYear:Ep_year,
      CVV:CVV
    };
    let url="http://127.0.0.1:8080/cardData_Post";

    try{
      let response = await fetch(url,{
        method: 'POST', // 指定 HTTP 方法
        headers: {
            'Content-Type': 'application/json', // 設定內容類型
        },
        body: JSON.stringify(cardData)
      });
      if (response.ok==false){
        throw new Error("傳送失敗");
      }
      let data= await response
      if (data.ok==true){
          alert("付款成功")
      }
    }catch(err){
       console.log(err)
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
                value=""
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
            onChange={(e) => setCVV(e.target.value)}
          />
        </div>

    </div>

      <button 
      className="submit-button" 
      onClick={()=>{  //先檢查資料服不符合格式，再提交卡片資料到後端
       have_correct_infromation(); 
       post_data_to_backend()
      }}
      >
        Submit</button>
    </div>
  );
}

export default CreditCard_from;
