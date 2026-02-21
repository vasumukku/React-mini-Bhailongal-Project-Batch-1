import React from 'react'
import { useState } from 'react'

const Login = ({email,setEmail,password,setPassword,status,setStatus}) => {

  
  return (
    <div className='login-constainer'>
      <div className='login-page'>
        <h1>Login Page</h1>
        
        <input type="email" placeholder='Enter your email' value={email} onChange={(e)=>setEmail(e.target.value)} />
        <input type="password" placeholder='enter your password' value={password} onChange={(e)=>setPassword(e.target.value)} /> 
        
        <div>
          <button onClick={()=>
            {
              if (password=="Kle@123" && email=="Kle@gmail.com"){
                  return setStatus(!status)
              }
              else{
                alert("Invalid credintials")
              }
              
              }
          }>submit</button>
        </div>
      </div>
      
    </div>
  )
}

export default Login
