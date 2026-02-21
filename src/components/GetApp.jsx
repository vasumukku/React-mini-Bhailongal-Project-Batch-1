import React from 'react'

const GetApp = () => {
  return (
    <div>
      <div  style={{display :'flex',  flexDirection:"column", alignItems:"center", height:"40%"}}>

        <h1>Thank you for choosing Downloading the app 👏👏</h1> 
        <p>  <span style={{color:"red" , fontSize:"20px", fontWeight:"bold"}}>Sorry,for inconvience 🙏🤝 </span> Right now our app is ongoing 
          we wil be release next 30 days .please enable below notify button.. we 
          will send updates day to day .. Thank you 
        </p>
        <button   onClick={()=>{
          confirm("Thank you for notifying ❤️❤️")
        }} style={{backgroundColor:"blue", borderRadius:"10px", padding:"10px", border:"none" , cursor:"pointer"}}>Notify me</button>  

      </div>
    </div>
  )
}

export default GetApp
