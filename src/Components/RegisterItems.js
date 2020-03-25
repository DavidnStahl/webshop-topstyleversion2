import React,{useRef,useContext,useEffect,useState} from 'react'
import './LoginRegisterItems.css'
import {RegisterContext} from '../Context/RegisterContext';


const RegisterItems = () => {
  const [IsRegisterSucced,setRegisterSucced,CheckRegister] = useContext(RegisterContext)
  const [errorMessage,serErrorMessage] = useState("");
  const username = useRef()
   const password = useRef()

    useEffect (() =>{
      serErrorMessage(IsRegisterSucced)
    },[IsRegisterSucced,setRegisterSucced])
    return (<React.Fragment>

        <div className="wrapper fadeInDown">
          <div id="formContent">
        
          <div className="fadeIn first">
          <img src="https://www.pngitem.com/pimgs/m/224-2244774_image-result-for-registration-icon-blue-transparent-register.png" id="icon" alt="User Icon" />
            </div>
        
              <span>{errorMessage}</span><br/><br/>
              <input type="text" id="login" className="fadeIn second" name="login" placeholder="username" ref={username}/>
              <input type="password" id="password" className="fadeIn third" name="login" placeholder="password" ref={password}/>
              <button className="fadeIn fourth btn btn-primary" onClick={() => CheckRegister(username.current.value,password.current.value)}>Register</button>
              
            
        
          </div>
        </div>
        
            </React.Fragment>)
}

export default RegisterItems
