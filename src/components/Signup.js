import React,{ useState } from 'react'
import {Link,useNavigate} from "react-router-dom"
import "../css/Signup.css"
import wave from "../images/wave.png"
import avatar from "../images/avatar.svg"
import bg from "../images/bg.svg"

export default function SignUp() {
  const [credentials, setCredentials] = useState({username:"",email:"",password:"",cpassword:""});
  let navigate = useNavigate();

  const handelSubmit=async(e)=>{
    e.preventDefault();
    // if(credentials.password===credentials.cpassword){
    //     const response = await fetch(`http://localhost:5000/api/auth/createuser`, {
    //         method: 'POST',
    //         headers: {
    //         'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({name:credentials.username,email:credentials.email,password:credentials.password})
    //     });
    //     const res=await response.json();
    //     console.log(res);
    //     if(res.success){
    //         localStorage.setItem("token",res.token);
    //         navigate("/home", { replace: true });
    //     }
    // }
    
    navigate("/informationform",{replace:true});
  }
  const onChangeHandeler=(e)=>{
    setCredentials({...credentials,[e.target.id]:e.target.value});
  }
  return (
    <div>
      <img className="wave" src={wave} alt="img"/>
        <div className="container">
          <div className="img">
            <img src={bg} alt="img"/>
          </div>
          <div className="login-content">
            <form onSubmit={handelSubmit}>
              <img src={avatar} alt="img"/>
                <h2 className="title">Welcome</h2>
                <div className="input-div one">
                  <div className="i">
                    <i className="fas fa-user"></i>
                  </div>
                  <div className="div">
                    <input type="text" className="input" id="username" placeholder='Username' value={credentials.username} onChange={onChangeHandeler}/>
                  </div>
                </div>
                <div className="input-div email">
                  <div className="i">
                    <i className="fa-solid fa-envelope"></i>
                  </div>
                  <div className="div">
                    <input type="text" className="input" id="email" placeholder='Email' value={credentials.email} onChange={onChangeHandeler}/>
                  </div>
                </div>
                <div className="input-div pass">
                  <div className="i">
                    <i className="fas fa-lock"></i>
                  </div>
                  <div className="div">
                    <input type="password" className="input" id="password" placeholder='Password' value={credentials.password} onChange={onChangeHandeler}/>
                  </div>
                </div>
                <div className="input-div cpass">
                  <div className="i">
                    <i className="fas fa-lock"></i>
                  </div>
                  <div className="div">
                    <input type="password" className="input" id="cpassword" placeholder='Confirm Password' value={credentials.cpassword} onChange={onChangeHandeler}/>
                  </div>
                </div>
                <Link to="/">Aldready Have An Account</Link>
                <input type="submit" className="btn" value="SignUp"/>
                </form>
              </div>
          </div>
        </div>
      )
}
