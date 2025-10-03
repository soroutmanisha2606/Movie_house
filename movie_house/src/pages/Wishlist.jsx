import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

export const Wishlist = () => {
  const [wishlistedItems, setWishlistedItems] = useState([]);

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlistedItems(storedWishlist);
  }, []);

  const handleRemove = (id) => {
    const updated = wishlistedItems.filter((item) => item.id !== id);
    setWishlistedItems(updated);
    localStorage.setItem("wishlist", JSON.stringify(updated));
  };

  return (
    <>
      <Navbar />
      <div
        style={{
          backgroundColor: "#141414",
          minHeight: "100vh",
          padding: "100px 20px 40px",
          color: "white",
         
        }}
      >
        <h2 style={{ marginBottom: "20px" }}>❤️ Your Wishlist</h2>

        {wishlistedItems.length === 0 ? (
          <p style={{ fontSize: "1.2rem" }}>No movies in your wishlist 😔</p>
        ) : (
          <div
            style={{
              display: "flex",
              overflowX: "auto",
              gap: "15px",
              paddingBottom: "10px",
              scrollbarWidth: "none",
            }}
          >
            {wishlistedItems.map((movie) => (
              <div
                key={movie.id}
                style={{
                  minWidth: "200px",
                  maxWidth: "200px",
                  position: "relative",
                  flexShrink: 0,
                  borderRadius: "8px",
                  overflow: "hidden",
                  background: "#1f1f1f",
                  transition: "transform 0.3s",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                  alt={movie.original_title}
                  style={{ width: "100%", height: "280px", objectFit: "cover" }}
                />
                <div style={{ padding: "10px" }}>
                  <h4
                    style={{
                      margin: 0,
                      fontSize: "0.95rem",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {movie.original_title}
                  </h4>
                </div>
                <button
                  onClick={() => handleRemove(movie.id)}
                  style={{
                    position: "absolute",
                    top: "10px",
                    right: "10px",
                    background: "rgba(0,0,0,0.6)",
                    border: "none",
                    color: "white",
                    padding: "5px 8px",
                    cursor: "pointer",
                    borderRadius: "4px",
                  }}
                >
                  ✖
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
