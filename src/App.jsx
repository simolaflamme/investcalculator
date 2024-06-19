import React from "react"
import Header from "./components/Header"
import UserInput from "./components/UserInput.jsx"
import { useState } from "react";
import Result from "./components/Result.jsx";

function App() {
  const [stateInput, setStateInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
});

const inputIsValid=stateInput.duration >=1;

function handleinput (event){
  const {name,value}=event.target;

  setStateInput((predata)=>({

      ...predata,
      [name]: +value,
  }))
  
};

  return (
    <>
    <Header/>
    
    
   
    <div id="user-input">

           
            <div className="input-group">
            <UserInput Id={'investid'} InitialValue={stateInput['initialInvestment']}  name={'initialInvestment'} Label={'Initial Ivestment'} Onlift={stateInput} handlelift={handleinput}/> 
            <UserInput Id={'aninvestid'} InitialValue={stateInput['annualInvestment']} name={'annualInvestment'} Label={'Annual Investment'} Onlift={stateInput} handlelift={handleinput}/> 
            </div>

            <div className="input-group">
            <UserInput Id={'expinvestid'} InitialValue={stateInput['expectedReturn']}   name={'expectedReturn'} Label={'Expected-Investment'} Onlift={stateInput} handlelift={handleinput}/> 
            <UserInput Id={'duraid'} InitialValue={stateInput['duration']} name={'duration'} Label={'Duration'} Onlift={stateInput} handlelift={handleinput}/> 
            </div>
            
        </div >
        { !inputIsValid && <p className="center">please enter a valid duration</p>  }
       { inputIsValid && <Result inputr={stateInput}/>} 
    </>
  )
}

export default App
