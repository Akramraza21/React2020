import React, { useState, useEffect } from "react";
import "./App.css";
import axios from './Axios/axios'
import { BrowserRouter, Route } from "react-router-dom";
import Nav from './Component/Nav'
import Data from './Component/Data'

function App() {
  const [login,setLogin] = useState(false)
  const [reg,setReg] = useState(false)
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [user,findUser] = useState("")
  const [ userData,setUser ] = useState({data:""})
  const [ data, setData ] = useState([])
  useEffect(() => {
    let value = null
    axios.get('/api/user?page=2')
    .then((resp)=>setData(resp.data.data))
    .catch(error=>console.log(error))
    return value
  }, [])

  const getUser = () => {
    axios.get(`/api/users/${user}`)
    .then((resp)=>{
      setUser({data:resp.data.data})
    }).catch(error=>console.log(error))
  }
const changeHandler = (event) => {
  switch (event.target.id) {
    case "email":
      setEmail(event.target.value)
      break;
    case "password":
      setPassword(event.target.value)
      break;
  
    default:
      break;
  }

}
const loginHandler = () => {
  console.log(email,password)
  axios.post("/api/login",{"email":email,"password":password})
  .then(resp=>{
    if (resp.statusText === "OK" ){
      setLogin(true)
    }
    else {

    }
  }
    )
  .catch(error=>console.log(error))
}
const registerUser = () => {
   axios.post(`/api/register`,{"email":email,"password":password})
  .then(resp=>{
    if (resp.statusText === "OK" ){
      setReg(true)
    }
    else {
      setReg(false)
    }
  }
    )
  .catch(error=>console.log(error))

}
  const RegisterUser = () => {
    return (
      <div>
        <input type="text" id="email" value={email} onChange={changeHandler} /> <br />
        <input type="password" id="password" onChange={changeHandler} /> <br />
        <button onClick={registerUser}>Register</button>
        {reg?<p>Register successful</p>:null}
      </div>
    )
  }
  const LoginUser = () => {
    return(
      <div>
        <input type="text" id="email" value={email}  onChange={changeHandler} /> <br />
        <input type="password" id="password" onChange={changeHandler} /> <br />
        <button onClick={loginHandler}>Login</button>   
        {login? <p>Login successful</p>:null}
      </div>
    )
  }
  const listData = () => {
    return data?.map(item=><Data 
                                    key={item.id} 
                                    name={item.name} 
                                    year={item.year} 
                                    color={item.color} />)
    
  }
  const Singleuser = () => (<div>
     <input type="text" placeholder="Type a number" onChange={(event)=>findUser(event.target.value)} />
    <button onClick={getUser}>Single User</button>
     {userData.data?login? <div>
        first name : {userData.data.first_name}<br />
        last name : {userData.data.last_name}<br />
        email : {userData.data.email}<br />
        <image src={userData.data.avatar} alt="user image" />
      </div>:<p>Login to show user</p>:null}
  </div>)
  return (<BrowserRouter>
            <div >
              <Nav />
              
                
                <Route path="/" exact component={listData} />
                <Route path="/register" component={RegisterUser} />
                <Route path="/login" component={LoginUser} />
                <Route path="/user" component={Singleuser} />
          
            </div>
    </BrowserRouter>
     )
}     
export default App;