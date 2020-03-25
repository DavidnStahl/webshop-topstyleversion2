import React, {createContext,useState,useEffect} from 'react';

export const LoginContext = createContext();


const LoginContextProvider = (props) => {
    const [username, setUsername] = useState(undefined);
    const [password, setPassword] = useState();
    const [IsInLogged, setInLogged]  = useState("false");
    const [Login,setLogin] = useState("Login")
    const [IsLoginSucced, setLoginSucced] = useState("")
    const CheckLogin = (name,pass) => {
       setUsername(name);
       setPassword(pass);
       
    }
    useEffect (() =>{
        fetch("http://localhost:8080/getCustomers").then(res => res.json()).then((data) => {
        console.log(data);
        let x = data.filter( r => r.username === username && r.password === password)
        console.log(x)
        if(x.length !== 0){
            setInLogged("true");
            localStorage.clear();
            localStorage.setItem("loggedinuser",x[0].customerID)
            setLogin("Logout")
            
        }else if(username !== undefined){
            setLoginSucced("wright a valid username and password!!")
        }else{
            setLoginSucced("")

        }
        console.log(IsInLogged)})
        
    },[IsInLogged,password,username,setUsername])

     return (
          <LoginContext.Provider value={[setPassword,IsInLogged,CheckLogin,Login,setLogin,IsLoginSucced, setLoginSucced]}>
            {props.children}
          </LoginContext.Provider>
  )   
}

export default LoginContextProvider