import React from "react";

// MUI & mui-icons
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import BookIcon from "@mui/icons-material/Book";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <AppBar position="sticky">
        <Container maxWidth="lg">
          <Toolbar>
            <Typography
              variant="h5"
              letterSpacing={2}
              component="h1"
              fontWeight="bold"
              flex={1}
            >
              <Link to="/">بلاگ هاب</Link>
            </Typography>
            <BookIcon />
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Header;
