import React from 'react'

const Body = ({resname,img}) => {
  return (
    <div>
      <div className='res-card'>

        <div>
          <img  className='res-styel' src={img} alt="res-logo" />
        </div>

        <div style={{paddingLeft:"20px"}}> 
          <h3>{resname}</h3>
           <p>Belgaum Locality</p>
          <p> ⭐4.3 (1.0K+ ratings)</p>
          <button style={{backgroundColor:"yellow" ,border:"none" ,padding:"10px 30px", borderRadius:"30px"}}>View Details</button>
         
        </div>

      </div>
    </div>
  )
}

export default Body
