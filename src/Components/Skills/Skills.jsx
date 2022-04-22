import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
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
        <Grid item xs={6}>
          <Card sx={{ minWidth: 275, p: 2 }}>
            <CardContent>
              <Typography variant="h5" component="div">
                Frontend Technologies
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                <ul
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr)",
                    marginTop: "12px",
                  }}
                >
                  {frontend.map((front, idx) => {
                    return <li key={idx}>{front}</li>;
                  })}
                </ul>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card sx={{ minWidth: 275, p: 2 }}>
            <CardContent>
              <Typography variant="h5" component="div">
                User Interface Design Technology
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                <ul
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr)",
                    marginTop: "12px",
                  }}
                >
                  {uis.map((ui, idx) => {
                    return <li key={idx}>{ui}</li>;
                  })}
                </ul>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Card>
  );
}
