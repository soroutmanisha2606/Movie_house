import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Banner = () => {
  const bannerImg =
    'https://image.tmdb.org/t/p/original/8YFL5QQVPy3AgrEQxNYVSgiPEbe.jpg'; 

  return (
    <Box
      sx={{
        position: 'relative',
        height: { xs: '300px', md: '500px' },
        width: '100%',
        backgroundImage: `url(${bannerImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        color: '#fff',
        marginTop:"70px",
      }}
    >
    
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.2))',
          zIndex: 1,
        }}
      />

      
      <Box
        sx={{
          position: 'relative',
          zIndex: 2,
          p: { xs: 2, md: 6 },
          maxWidth: '600px',
        }}
      >
        <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 2 }}>
          Featured Movie
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          Dive into an epic adventure and experience breathtaking visuals and storytelling.
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#e50914',
            '&:hover': {
              backgroundColor: '#f40612',
            },
          }}
        >
          Watch Now
        </Button>
      </Box>
    </Box>
  );
};

export default Banner;
