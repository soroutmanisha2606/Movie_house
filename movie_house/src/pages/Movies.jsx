import React, { useEffect } from 'react'
import { MovieCard } from '../components/MovieCard'
import Box from '@mui/material/Box';
import "../style/movies.css"
import Grid from '@mui/material/Grid';
import Input from '@mui/material/Input';

 const API_KEY = "4558d1cc5e7ed19d582b263db4cd7015";


export const Movies = () => {
      const [searchTerm, setSearchTerm] = React.useState("");
      const [movies,setMovies] = React.useState([])
   

useEffect(() => {   
  fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`)
    .then((res) => res.json())
    .then((data) => {      
      setMovies(data.results);
    })
    .catch((err) => console.error(err));
}, []);
console.log(movies[1])


  // Filter movies based on search term
  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );


  console.log("Movinnnnes-----",movies)

  return (<>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          padding: "20px 40px 0 40px",
          marginBottom:"-20px"
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
          filteredMovies.map((movie, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <MovieCard name={movie.original_title} img={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} overview = {movie.overview} id={movie.id} />
            </Grid>
          ))
        ) : (
          <p style={{ color: "white", marginTop: "20px" }}>
            No movies found 😔
          </p>
        )}
    </Grid>
    </>
  )
}
