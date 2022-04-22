import { Container, Grid } from "@mui/material";
import React from "react";
import About from "../../Components/About/About";
import ProfileCard from "../../Components/ProfileCard/ProfileCard";
import Skills from "../../Components/Skills/Skills";

const Homepage = () => {
  return (
    <Container maxWidth="xl">
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <ProfileCard />
        </Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={8}>
          <About />
          <Skills />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Homepage;
