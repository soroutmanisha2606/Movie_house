import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';

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


  return (<>
  <Navbar/>
    <div style={{ backgroundColor: '#141414', minHeight: '100vh', padding: '20px', color: 'white' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '20px' }}>My Wishlist ❤️</h1>

      {wishlistedItems.length === 0 ? (
        <p style={{ fontSize: '1.2rem' }}>No movies in your wishlist 😔</p>
      ) : (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gap: '20px',
          }}
        >
          {wishlistedItems.map((movie) => (
            <div
              key={movie.id}
              style={{
                background: '#1f1f1f',
                borderRadius: '8px',
                overflow: 'hidden',
                position: 'relative',
                transition: 'transform 0.3s',
              }}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                alt={movie.original_title}
                style={{ width: '100%', height: '250px', objectFit: 'cover' }}
              />
              <div style={{ padding: '10px' }}>
                <h4 style={{ margin: 0, fontSize: '1rem' }}>{movie.original_title}</h4>
              </div>
              <button
                onClick={() => handleRemove(movie.id)}
                style={{
                  position: 'absolute',
                  top: '10px',
                  right: '10px',
                  background: 'rgba(0,0,0,0.6)',
                  border: 'none',
                  color: 'white',
                  padding: '5px 10px',
                  cursor: 'pointer',
                  borderRadius: '4px',
                }}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
    </>
  );
};
