import React from 'react'

import banner from "../assets/header_img.png"
const Banner = () => {
  const style = {
    backgroundImage: `url(${banner})`, 
    height: '90vh', 
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    marginTop:"-20px"
  };
  return (
    <div>
      <div style={style} className='banner-content'>
        {/* <img className='banner-img' src={banner} alt="" /> */}

          {/* <div>
            <input type="text" placeholder='Search for restaurant, item or more' />
          </div> */}

        <div className='imgs-div-banner'>
          {/* <div>
          <img className='banner-img-1' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png" alt="" />
        </div> */}
        <div>
          <img className='banner-img' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/faa6d07d-e43c-4aa1-90d8-eda6c14e467d_Food2BU.png" alt="" />
        </div>
        <div>
          <img className='banner-img' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/7a7904a7-e0a9-4466-8226-715999664e83_IM2BU.png" alt="" />
        </div>
        </div>
        
      </div>
    </div>
  )
}

export default Banner
