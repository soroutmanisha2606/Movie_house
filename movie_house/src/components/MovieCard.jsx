import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from 'react-router-dom';

export const MovieCard = ({ name, img, overview, handleWishlist, isWishlisted }) => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: 250,
        height: 380,
        borderRadius: 2,
        overflow: 'hidden',
        cursor: 'pointer',
        boxShadow: 5,
        transition: 'transform 0.4s ease, box-shadow 0.4s ease',
        '&:hover': {
          transform: 'scale(1.08)',
          boxShadow: 10,
        },
      }}
    >
      <img
        src={img}
        alt={name}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
        }}
      />

      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '60%',
          background: 'linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0))',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          p: 2,
        }}
      >
        <Typography
          variant="subtitle1"
          sx={{
            color: 'white',
            fontWeight: 'bold',
            fontSize: 21,
            textShadow: '0px 0px 6px rgba(0,0,0,0.8)',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          {name}
        </Typography>

        <Typography
          variant="body2"
          sx={{
            color: 'white',
            textShadow: '0px 0px 6px rgba(0,0,0,0.8)',
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 3,
            overflow: 'hidden',
          }}
        >
          {overview}
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 1 }}>
        
            <Link  onClick={handleWishlist}><FavoriteIcon
              sx={{
                fontSize: 28,
                color: isWishlisted ? '#e50914' : '#ffffffa8',
                              
              }}
            /></Link>            
        
        </Box>
      </Box>
    </Box>
  );
};
