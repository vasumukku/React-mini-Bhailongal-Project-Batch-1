import React from 'react'

const Footer = () => {
  return (
    <div>
     
     <div className='footer-card'>

        <div>
          <img className='swiggylogo' src="https://media-assets.swiggy.com/portal/testing/seo-home/Group.svg" alt="swiggylogo" />
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
