import React,{ useState,use } from 'react';
import '../css/CreditCard.css'; // 假設你將 CSS 文件放在 css 目錄中


let CreditCard_from = ({ setCN, setCH, setEp_mon, setEp_year,setCT,CN }) => {

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

async function postCardData() {
   let cardData={
    
   }

  try {
    const response = await fetch(url, {
      method: "POST", // 指定 HTTP 方法為 POST
      headers: {
        "Content-Type": "application/json" // 設置請求標頭為 JSON
      },
      body: JSON.stringify(data) // 將要發送的數據轉換為 JSON 格式
    });

    if (!response.ok) {
      throw new Error(`網路錯誤: ${response.status}`); // 如果回應不是成功狀態，拋出錯誤
    }

    const responseData = await response.json(); // 等待將回應轉換為 JSON 格式
    console.log("成功:", responseData); // 輸出取得的資料
    return responseData; // 返回資料
  } catch (error) {
    console.error("錯誤:", error); // 捕獲異常並輸出錯誤
  }
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
        setCT(""); // 當輸入不匹配時清空卡片類型
      }
    } else {
      setCT(""); // 當輸入為空時清空卡片類型
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
