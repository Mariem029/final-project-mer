
import React, { useState } from "react";
import Login from './Login';
import { Register } from "./Register";
import './App.css';








function App() {
  const [currentForm, setCurrentForm] = useState('Login')
  const toggleForm =(forname) => {
    setCurrentForm(forname);
  }
  return(
    <div className ="App">
      {
        currentForm === 'Login'?
        <Login onFormSwitch ={toggleForm}/>:
        <Register onFormSwitch ={toggleForm} />
      }

    </div>
  );
}


export default App;