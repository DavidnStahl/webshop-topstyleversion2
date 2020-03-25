import React, {createContext,useState} from 'react';
import {useHistory} from 'react-router'

export const RegisterContext = createContext();


const RegisterContextProvider = (props) => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [IsRegisterSucced, setRegisterSucced]  = useState("");

    let history = useHistory();

    const CheckRegister = (name,pass) => {
        console.log(name,pass)
       setUsername(name);
       setPassword(pass);
       if(name.length > 1 && pass.length > 1){
        fetch("http://localhost:8080/getCustomers").then(res => res.json()).then((data) => {
            console.log(data);
            let x = data.filter( r => r.username === name)
            if(x.length === 0){
                fetch("http://localhost:8080/addCustomer", {
                mode: 'cors',
                method: 'POST',
                header : {
                'Accept': 'application/json',
                'Content-type': 'application/json'},
                body: JSON.stringify({
                username: name,
                password: pass})})
    
                console.log("added customer")
                history.push('/Login')
    
            }else{
                console.log("username taken")
                setRegisterSucced("Username is taken")
            }
        })
       }else{
        setRegisterSucced("You need atleast 2 characters for username and password")
       }
       
       
    }


     return (
          <RegisterContext.Provider value={[IsRegisterSucced,setRegisterSucced,CheckRegister]}>
            {props.children}
          </RegisterContext.Provider>
  )   
}

export default RegisterContextProvider