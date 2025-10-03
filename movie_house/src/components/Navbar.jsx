import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";

import Box from "@mui/material/Box";

import { Link } from "react-router-dom";




const Navbar = () => {
  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#1c1c1c" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
      
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "white",
          }}
        >
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "1rem", sm: "1.25rem" },
            }}
          >
            🎬 Movie House
          </Typography>
        </Link>

        <Box sx={{ display: "flex", alignItems: "center" }}>
   
          <IconButton size="large" edge="end" color="inherit" aria-label="wishlist" sx={{ ml: { xs: 1, sm: 3 } }}>
            <Link
              to="/movies/wishlist"
              style={{
                color: "white",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
              }}
            >
              <FavoriteIcon />
            </Link>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
