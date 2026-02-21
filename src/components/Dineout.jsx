import React, { useState } from "react";

const DineOut = () => {
  // ✅ Dineout Restaurant Data
  const restaurantList = [
    {
      id: 1,
      Resturantname: "Barbeque Nation",
      ResturantDetails: "Buffet dining experience",
      resimg:
        "https://b.zmtcdn.com/data/pictures/8/20926948/e9a5ccfc5c2e580cc4a0234b1a7cdb1e_featured_v2.jpg",
    },
    {
      id: 2,
      Resturantname: "Absolute Barbecue",
      ResturantDetails: "Live grill at table",
      resimg:
        "https://b.zmtcdn.com/data/dish_photos/526/0accd611e57e85343a71609204b1b526.jpeg",
    },
    {
      id: 3,
      Resturantname: "Empire Restaurant",
      ResturantDetails: "Family dining and meals",
      resimg:
        "https://b.zmtcdn.com/data/dish_photos/5ce/ff4468ffdc76ebe0739c2ee9815765ce.jpg",
    },
    {
      id: 4,
      Resturantname: "The Dinner House",
      ResturantDetails: "Fine dining experience",
      resimg:
        "https://b.zmtcdn.com/data/dish_photos/231/2dad287edf1b1b6eef57b7900fe15231.jpg",
    },
  ];

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>DineOut Restaurants</h2>

      <div style={{display:"flex", flexDirection:"row", justifyContent:"center" ,marginBottom:"10px", cursor:"pointer"}}>
          <img src="https://b.zmtcdn.com/data/o2_assets/e067a1cf0d3fe27b366402b98b994e9f1716296909.png" alt=""  style={{width:"90vw", borderRadius:"20px"}}/>

      </div>

      {restaurantList.map((res) => (
        <DineCard key={res.id} res={res} />
      ))}
    </div>
  );
};

// ✅ Card Component with Members Counter
const DineCard = ({ res }) => {
  const [members, setMembers] = useState(0);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "20px",
        minWidth: "60vw",
        maxWidth: "900px",
        margin: "20px auto",
        padding: "15px",
        borderRadius: "10px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      }}
    >
      {/* Left Side */}
      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        <img
          src={res.resimg}
          alt="restaurant"
          style={{
            height: "120px",
            width: "120px",
            borderRadius: "10px",
            objectFit: "cover",
          }}
        />

        <div>
          <h3 style={{ margin: 0 }}>{res.Resturantname}</h3>
          <p style={{ color: "gray", marginTop: "5px" }}>
            {res.ResturantDetails}
          </p>
        </div>
      </div>

      {/* Right Side → Members Counter */}
      <div>
        {members === 0 ? (
          <button
            onClick={() => setMembers(1)}
            style={{
              border: "2px solid blue",
              color: "blue",
              background: "white",
              padding: "6px 18px",
              borderRadius: "8px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            ADD MEMBERS
          </button>
        ) : (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              border: "2px solid blue",
              padding: "6px 12px",
              borderRadius: "8px",
              color: "blue",
              fontWeight: "bold",
            }}
          >
            <button
              onClick={() => setMembers(members - 1)}
              style={{
                border: "none",
                background: "white",
                cursor: "pointer",
                fontSize: "16px",
              }}
            >
              −
            </button>

            {members}

            <button
              onClick={() => setMembers(members + 1)}
              style={{
                border: "none",
                background: "white",
                cursor: "pointer",
                fontSize: "16px",
              }}
            >
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DineOut;