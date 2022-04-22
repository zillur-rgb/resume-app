import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { teal } from "@mui/material/colors";

export default function Skills() {
  const frontend = [
    "JavaScript",
    "React",
    "SASS",
    "CSS",
    "Bootstrap",
    "Tailwind CSS",
    "Material UI",
    "Firebase",
    "Netlify",
    "Heroku",
    "Styled Components",
  ];
  const uis = [
    "Figma",
    "Adobe XD",
    "Adobe Photoshop",
    "Wireframing",
    "Prototyping",
    "Balsamiq",
    "Invision App",
  ];
  return (
    <Card sx={{ mt: 6, p: 4 }} variant="outlined">
      <Typography
        variant="h5"
        sx={{ fontSize: 24, fontWeight: "medium" }}
        color={teal[600]}
        component="div"
      >
        Technologies I am skilled at
      </Typography>
      <Grid container spacing={2}>
        <Grid item m={6} sx={{ textAlign: "center" }}>
          <Card sx={{ minWidth: 275, p: 2 }}>
            <CardContent>
              <Typography variant="h5" component="div">
                Frontend Technologies
              </Typography>
              <div color="text.secondary">
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr)",
                    marginTop: "12px",
                  }}
                >
                  {frontend.map((front, idx) => {
                    return (
                      <p style={{ marginBottom: "10px" }} key={idx}>
                        {front}
                      </p>
                    );
                  })}
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item sm={6}>
          <Card sx={{ minWidth: 275, p: 2 }}>
            <CardContent>
              <Typography variant="h5" component="div">
                User Interface Design Technology
              </Typography>
              <div sx={{ mb: 1.5 }}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr)",
                    marginTop: "12px",
                  }}
                >
                  {uis.map((ui, idx) => {
                    return (
                      <p
                        style={{
                          marginBottom: "10px",
                        }}
                        key={idx}
                      >
                        {ui}
                      </p>
                    );
                  })}
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Card>
  );
}
