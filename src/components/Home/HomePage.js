import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import Authors from "../blog/author/Authors";
import Bloger from "../blog/Bloger";

const HomePage = () => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2} padding={4}>
        <Grid item xs={12} md={3} mt={4}>
          <Typography component="h3" variant="h5" marginY={3} fontWeight="bold">
            نویسنده ها
          </Typography>
          <Authors />
        </Grid>
        <Grid item xs={12} md={9} mt={4}>
          <Typography component="h3" variant="h5" marginY={3} fontWeight="bold">
            {" "}
            مقالات{" "}
          </Typography>
          <Bloger />
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage;
