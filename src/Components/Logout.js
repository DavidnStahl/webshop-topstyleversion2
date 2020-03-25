import React,{useContext} from 'react'
import './LoginRegisterItems.css'
import {LoginContext} from '../Context/LoginContext';
import {useHistory} from 'react-router'

const Logout = () => {
  const [setPassword,IsInLogged,CheckLogin,Login,setLogin] = useContext(LoginContext)
   
  let history = useHistory();
   const Logout = () =>{
       setLogin("Login")
       setPassword(undefined);
       let searchnav = document.getElementById("Search")
            searchnav.hidden = true;
            let customerbasketnav = document.getElementById("CustomerBasket")
            customerbasketnav.hidden = true
            let registernav = document.getElementById("Register")
            registernav.hidden = false;
       history.push('/Login');
   }
    return (<React.Fragment>

<div className="wrapper fadeInDown">
  <div id="formContent">

  <div className="fadeIn first">
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT4N0TiboaTHLMNtVBqRVQbhkg7q1xk0OaGQc0dSnmWcip_Al4e" id="icon" alt="User Icon" />
    </div>
      <button className="fadeIn fourth btn btn-primary" onClick={Logout}>Logout</button><br/><br/>
    

  </div>
</div>

    </React.Fragment>)
}

export default Logout
