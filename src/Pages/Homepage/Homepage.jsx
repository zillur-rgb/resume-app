import { Container, Grid } from "@mui/material";
import React from "react";
import About from "../../Components/About/About";
import Experiences from "../../Components/Experiences/Experiences";
import ProfileCard from "../../Components/ProfileCard/ProfileCard";
import FrontendProjects from "../../Components/Projects/FrontendProjects";
import UIProjects from "../../Components/Projects/UIProjects";
import Skills from "../../Components/Skills/Skills";

const Homepage = () => {
  return (
    <Container maxWidth="xl">
      <Grid container spacing={2}>
        <Grid item sm={3}>
          <ProfileCard />
        </Grid>
        <Grid item sm={1}></Grid>
        <Grid item sm={8}>
          <About />
          <Skills />
          <FrontendProjects />
          <UIProjects />
          <Experiences />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Homepage;
