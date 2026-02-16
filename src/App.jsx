import React from 'react'
import Body from './components/Body'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
     <Navbar />
      <div style={{display:"flex" ,justifyContent:"center",flexWrap:"wrap" ,gap:"30px"}}>
        <Body resname="Pista house" img="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/11/15/d92a1e44-100c-4b65-9de9-7e32e8041f63_450266.jpg"/> 
        <Body  resname="Biryani bap" img="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/9/3/c652744b-a716-43d7-858e-e2a209efb37d_450264.jpg"/> 
        <Body  resname="Panner Tikka"  img="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/85e6e427481332842d4413983ef45bdd"/> 
         <Body resname="starbuggs" img ="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/8/21/26b918cf-1f91-49b7-8966-75fcf0265256_358168.JPG"/> 
        <Body  resname="kfc" img="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/5/8/fc7d0cc5-7c54-4478-aa93-56d508d79097_881906.jpg"/> 
        <Body  resname="Pista house" img="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/9/9/a18b5b3f-bd04-43da-ba03-b80f38eed4d7_575255.JPG"/> 
        <Body  resname="Panner Tikka"  img="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/85e6e427481332842d4413983ef45bdd"/> 
         <Body resname="starbuggs" img ="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/8/21/26b918cf-1f91-49b7-8966-75fcf0265256_358168.JPG"/> 
        <Body resname="bannana shake" img ="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2025/10/29/ec8c65b2-dad1-412c-bb35-6312c73b35e0_0b4859a2-5cbf-48ae-9c32-86e31fef09a3.jpg"/> 
        <Body resname="Dosa" img="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/j8co529svej7dgigswlq"/> 

        <Body resname="bannana shake" img ="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2025/10/29/ec8c65b2-dad1-412c-bb35-6312c73b35e0_0b4859a2-5cbf-48ae-9c32-86e31fef09a3.jpg"/> 
        <Body resname="Dosa" img="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/j8co529svej7dgigswlq"/> 
      </div>
      <Footer /> 
    </div>
  )
}

export default App
