import React from 'react'

const Navbar = () => {
  return (
    <div>
      <div className='main-nav'>

        <div>
          <img className='logo-style' src="https://png.pngtree.com/png-clipart/20200727/original/pngtree-restaurant-logo-design-vector-template-png-image_5441058.jpg" alt="logo" />
        </div>

        <div className='nav-info'>
          <ul>
            <li>Location</li>
            <li>Veg </li>
            <li>Non-veg</li>
            <li><button className='login-style'>Login</button></li>
          </ul>

        
        </div>

      </div>
    </div>
  )
}

export default Navbar
