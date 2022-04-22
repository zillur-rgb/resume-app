import { Container, Grid } from "@mui/material";
import React from "react";
import About from "../../Components/About/About";
import ProfileCard from "../../Components/ProfileCard/ProfileCard";
import FrontendProjects from "../../Components/Projects/FrontendProjects";
import UIProjects from "../../Components/Projects/UIProjects";
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
          <FrontendProjects />
          <UIProjects />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Homepage;
