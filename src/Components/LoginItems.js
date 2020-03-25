import React,{useContext,useRef,useEffect} from 'react'
import './LoginRegisterItems.css'
import {LoginContext} from '../Context/LoginContext';

const LoginItems = () => {
  const [setPassword,IsInLogged,CheckLogin,Login,setLogin,IsLoginSucced,setLoginSucced] = useContext(LoginContext)
   const username = useRef()
   const password = useRef()

   useEffect (() =>{
  },[IsLoginSucced,setLoginSucced])
    return (<React.Fragment>

<div className="wrapper fadeInDown">
  <div id="formContent">

  <div className="fadeIn first">
  <img src="https://t4.ftcdn.net/jpg/00/58/78/67/240_F_58786761_Yx7m6rN9c6RRnEIOJOn3bWrSe2zQF6ge.jpg" id="icon" alt="User Icon" />
    </div>

       <span>{IsLoginSucced}</span><br/><br/>
      <input type="text" id="login" className="fadeIn second" name="login" placeholder="username" ref={username} />
      <input type="password" id="password" className="fadeIn third" name="login" placeholder="password" ref={password}/>
      <button className="fadeIn fourth btn btn-primary" onClick={() => CheckLogin(username.current.value,password.current.value)}>Log in</button>
    

  </div>
</div>

    </React.Fragment>)
}

export default LoginItems
