import React, { useEffect, useState } from 'react';
import { MovieCard } from '../components/MovieCard';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Input from '@mui/material/Input';

const API_KEY = process.env.API_KEY;

export const Movies = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => setMovies(data.results))
      .catch((err) => console.error(err));
       const stored = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(stored);
  }, []);
 

    const handleWishlist = (movie) => {
    const exists = wishlist.some((item) => item.id === movie.id);
    const updated = exists
      ? wishlist.filter((item) => item.id !== movie.id) // remove if already exists
      : [...wishlist, movie]; // add
    setWishlist(updated);
    localStorage.setItem("wishlist", JSON.stringify(updated));
  };

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          padding: "20px 40px 0 40px",
          marginBottom: "-20px",
        }}
      >
        <Input
          placeholder="🔍 Search movies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{
            width: { xs: "150px", sm: "250px", md: "300px" },
            background: "#fff",
            borderRadius: "8px",
            padding: "5px 10px",
          }}
        />
      </Box>

      <Grid container spacing={5} marginTop={4} justifyContent="center">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => {
            const isWishlisted = wishlist.some((item) => item.id === movie.id);
            return (
              <Grid item xs={12} sm={6} md={4} lg={3} key={movie.id}>
                <MovieCard
                  handleWishlist={() => handleWishlist(movie)}
                  isWishlisted={isWishlisted}
                  name={movie.original_title}
                  img={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                  overview={movie.overview}
                  id={movie.id}
                  movie={movie}
                />
              </Grid>
            );
          })
        ) : (
          <p style={{ color: "white", marginTop: "20px" }}>
            No movies found 😔
          </p>
        )}
      </Grid>
    </>
  );
};
