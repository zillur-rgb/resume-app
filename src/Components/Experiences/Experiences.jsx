import { Card, CardContent, Grid, Typography } from "@mui/material";
import { teal } from "@mui/material/colors";
import React from "react";

const Experiences = () => {
  return (
    <Card sx={{ minWidth: 275, mt: 4 }}>
      <CardContent>
        <Typography
          variant="h5"
          sx={{ fontSize: 24, fontWeight: "medium" }}
          color={teal[600]}
          component="div"
        >
          Experiences
        </Typography>
        <Grid container sx={{ mt: 4 }}>
          <Grid item sm={4}>
            <Typography variant="subtitle1">Nov 2016 - Jul 2020</Typography>
          </Grid>
          <Grid item sm={8}>
            <Typography variant="h6">Freelance UI Designer - Upwork</Typography>
            <Typography variant="body1">
              I have completed more than 50 jobs in Upwork and my job Success
              Score was 98%. Also, I was involved in a long-term employment
              relationship with 2 of my client.
            </Typography>
          </Grid>
        </Grid>
        <Grid container sx={{ mt: 4 }}>
          <Grid item sm={4}>
            <Typography variant="subtitle1">Mar 2019 - Feb 2021</Typography>
          </Grid>
          <Grid item sm={8}>
            <Typography variant="h6">
              User Interface Designer - Dessein Lab
            </Typography>
            <Typography variant="body1">
              I had the privilege to work in one og the leading IT Firms in my
              city, I served the company with my skill of User Interface. Where
              I along with a UX designer implemented some user and eye-catching
              interfaces.
            </Typography>
          </Grid>
        </Grid>
        <Grid container sx={{ mt: 4 }}>
          <Grid item sm={4}>
            <Typography variant="subtitle1">Feb 2021 - Jun 2021</Typography>
          </Grid>
          <Grid item sm={8}>
            <Typography variant="h6">
              Junior Frontend Engineer - Dessein Lab
            </Typography>
            <Typography variant="body1">
              As a technology enthusiastic I started learning front-end
              technology. And I started working as a junior designer in Dessein
              Lab where I mostly design the client -side UI with bootstrap and
              javascript
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Experiences;
