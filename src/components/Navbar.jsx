import React from 'react'
import { Link } from 'react-router';
const Navbar = ({status,setStatus,email,password}) => {
  return (
    <div>
      <div className='main-nav'>

        <div>
          <img className='logo-style' src="https://png.pngtree.com/png-clipart/20200727/original/pngtree-restaurant-logo-design-vector-template-png-image_5441058.jpg" alt="logo" />
        </div>

        <div className='nav-info'>
          <ul>
            {  status?<Link  to="/Dineout"   style={{ textDecoration: "none", color: "white" }}> <li >DineOut</li> </Link> :   <li >DineOut</li>}

            
            {  status?<Link  to="/veg"   style={{ textDecoration: "none", color: "white" }}> <li >Veg</li> </Link> :   <li>Veg</li>}
            {  status?<Link  to="/nonveg"   style={{ textDecoration: "none", color: "white" }}>  <li>Non-veg</li> </Link> :   <li>Non-Veg</li>}

          {  status?<Link  to="/GetApp"   style={{ textDecoration: "none", color: "white" }}>  <li><button className='App-style'>Get the App</button></li> </Link> :   <li><button className='App-style'>Get the App</button></li>}

            
            <li><button className='login-style' onClick={()=>
              {
              if (password=="Kle@123" && email=="Kle@gmail.com"){
                  return setStatus(!status)

              }
              else{
                alert("Invalid credintials")
              }
              
              }
            }>{status?"Logout":"Login"}</button></li>

            
          </ul>

        
        </div>

      </div>
    </div>
  )
}

export default Navbar

