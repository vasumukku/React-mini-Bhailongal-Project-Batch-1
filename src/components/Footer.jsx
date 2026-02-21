import React from 'react'

const Footer = () => {
  return (
    <div>
     
     <div className='footer-card'>

        <div>
          <img className='swiggylogo' src="https://png.pngtree.com/png-clipart/20200727/original/pngtree-restaurant-logo-design-vector-template-png-image_5441058.jpg" alt="swiggylogo" />
        </div>

        <div>
         
          <ul style={{listStyle:"none"}}>
            <li> <h3> Company</h3></li>
            <li>About us</li>
            <li>Carrer</li>
            <li>Team</li>
            <li>Conatct us</li>
          </ul>
        </div>


        <div>
          <ul style={{listStyle:"none"}}>
            <li><h3>Legal</h3></li>
            <li>Terms & Conditions</li>
            <li>Cookkies policys</li>
            <li>patner with us</li>
          </ul>
        </div>

     </div>
    </div>
  )
}

export default Footer
