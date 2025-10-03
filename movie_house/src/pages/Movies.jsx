import React, { useEffect, useState } from 'react';
import { MovieCard } from '../components/MovieCard';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Input from '@mui/material/Input';
import { getPopularMovies } from '../api/movieApi';

export const Movies = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);  
  const [wishlist, setWishlist] = useState([]);

  // Fetch movies and load wishlist from localStorage on mount
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        console.log("Popular movies fetched ➡️", popularMovies);
        setMovies(popularMovies);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();

    // Load wishlist from localStorage
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(storedWishlist);
  }, []);

  //Add or remove a movie from the wishlist
  const handleWishlist = (movie) => {
    const exists = wishlist.some((item) => item.id === movie.id);

    const updatedWishlist = exists
      ? wishlist.filter((item) => item.id !== movie.id) // remove if exists
      : [...wishlist, movie]; // add if not exists

    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  // Filter movies based on search term
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

      {/* Movies Grid */}
      <Grid container spacing={5} marginTop={4} justifyContent="center">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => {
            const isWishlisted = wishlist.some(
              (item) => item.id === movie.id
            );

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
              <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              mt: 6,
              color: "white",
            }}
          >
            <img
              src="https://media.giphy.com/media/14uQ3cOFteDaU/giphy.gif"
              alt="No movies found"
              style={{
                width: "250px",
                height: "auto",
                marginBottom: "20px",
                borderRadius: "12px",
              }}
            />
            <p style={{ fontSize: "1.3rem", fontWeight: "bold" }}>
              Oops! No movies found
            </p>
          </Box>
        )}
      </Grid>
    </>
  );
};
