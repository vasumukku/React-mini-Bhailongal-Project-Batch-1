import React, { useState } from "react";

const Veg = () => {
  // ✅ Restaurant Data
  const restaurantList = [
    {
      id: 1,
      Resturantname: "Udupi Veg Palace",
      ResturantDetails: "Pure veg meals, South Indian food",
      resimg: "https://b.zmtcdn.com/data/pictures/1/20194611/fe814c0a0e42e0d377730129446e976a_o2_featured_v2.jpg",
    },
    {
      id: 2,
      Resturantname: "Green Leaf Restaurant",
      ResturantDetails: "Healthy organic veg dishes",
      resimg: "https://b.zmtcdn.com/data/dish_photos/1ac/8a6d63ef0347748bd9fa209afcad01ac.png",
    },
    {
      id: 3,
      Resturantname: "Saravana Bhavan",
      ResturantDetails: "Famous dosa and idli",
      resimg: "https://b.zmtcdn.com/data/dish_photos/5ce/ff4468ffdc76ebe0739c2ee9815765ce.jpg",
    },
    {
      id: 4,
      Resturantname: "Veg Delight",
      ResturantDetails: "Chinese and paneer dishes",
      resimg: "https://b.zmtcdn.com/data/dish_photos/526/0accd611e57e85343a71609204b1b526.jpeg",
    },
    {
      id: 5,
      Resturantname: "Royal Veg Kitchen",
      ResturantDetails: "Luxury North Indian meals",
      resimg: "https://b.zmtcdn.com/data/dish_photos/231/2dad287edf1b1b6eef57b7900fe15231.jpg",
    },
  ];

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Veg Restaurants</h2>

      {restaurantList.map((res) => (
        <RestaurantCard key={res.id} res={res} />
      ))}
      
    </div>
  );
};

// ✅ Separate Card Component (Correct React Practice)
const RestaurantCard = ({ res }) => {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "20px",
        minWidth: "60vw", // ✅ minimum 60% screen width
        maxWidth: "900px",
        margin: "20px auto",
        padding: "15px",
        borderRadius: "10px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        transition: "0.3s",
      }}
    >
      {/* Left Side (Image + Details) */}
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

      {/* Right Side (ADD Button / Counter) */}
      <div>
        {count === 0 ? (
          <button
            onClick={() => setCount(1)}
            style={{
              border: "2px solid green",
              color: "green",
              background: "white",
              padding: "6px 18px",
              borderRadius: "8px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            ADD
          </button>
        ) : (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              border: "2px solid green",
              padding: "6px 12px",
              borderRadius: "8px",
              color: "green",
              fontWeight: "bold",
            }}
          >
            <button
              onClick={() => setCount(count - 1)}
              style={{
                border: "none",
                background: "white",
                cursor: "pointer",
                fontSize: "16px",
              }}
            >
              −
            </button>

            {count}

            <button
              onClick={() => setCount(count + 1)}
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

export default Veg;
