import { Container, Grid } from "@mui/material";
import React from "react";
import ProfileCard from "../../Components/ProfileCard/ProfileCard";

const Homepage = () => {
  return (
    <Container maxWidth="xl">
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <ProfileCard />
        </Grid>
        <Grid item xs={9}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
          aliquam excepturi repudiandae nihil doloremque dolor ipsum ullam et.
          Esse, incidunt!
        </Grid>
      </Grid>
    </Container>
  );
};

export default Homepage;
