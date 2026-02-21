import React, { useState } from "react";

const NonVeg = () => {
  // ✅ Non Veg Restaurant Data
  const restaurantList = [
    {
      id: 1,
      Resturantname: "Meat & Eat",
      ResturantDetails: "Chicken, burgers, grilled items",
      resimg:
        "https://b.zmtcdn.com/data/dish_photos/164/83084db458731a1721c0d38719f15164.jpeg",
    },
    {
      id: 2,
      Resturantname: "Paradise Biryani",
      ResturantDetails: "Famous chicken and mutton biryani",
      resimg:
        "https://b.zmtcdn.com/data/pictures/3/22429413/7ac17f67e909f791b87336c9c4ddf0e3_o2_featured_v2.jpg",
    },
    {
      id: 3,
      Resturantname: "KFC Style Kitchen",
      ResturantDetails: "Fried chicken and wings",
      resimg:
        "https://b.zmtcdn.com/data/dish_photos/0dd/e01ad6720ff7927d8f891b3a9371e0dd.png?fit=around|130:130&crop=130:130;*,*",
    },
    {
      id: 4,
      Resturantname: "BBQ Nation",
      ResturantDetails: "Grilled chicken and barbeque dishes",
      resimg:
        "https://b.zmtcdn.com/data/dish_photos/759/17480d9a6919719370be51069f412759.jpeg",
    },
    {
      id: 5,
      Resturantname: "Andhra Spice",
      ResturantDetails: "Spicy chicken and fish meals",
      resimg:
        "https://b.zmtcdn.com/data/dish_photos/526/0accd611e57e85343a71609204b1b526.jpeg",
    },
  ];

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Non Veg Restaurants</h2>

      {restaurantList.map((res) => (
        <RestaurantCard key={res.id} res={res} />
      ))}
    </div>
  );
};

// ✅ Same Card Component (reused)
const RestaurantCard = ({ res }) => {
  const [count, setCount] = useState(0);

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
        transition: "0.3s",
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

      {/* Right Side */}
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

export default NonVeg;