import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { teal } from "@mui/material/colors";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function About() {
  return (
    <Card sx={{ minWidth: 275, mt: 4 }}>
      <CardContent>
        <Typography
          variant="h5"
          sx={{ fontSize: 24, fontWeight: "medium" }}
          color={teal[600]}
          component="div"
        >
          About Me
        </Typography>
        <Typography sx={{ my: 1.5, fontSize: 18 }} color="text.secondary">
          Technology Enthusiastic with strong skills and passion for Frontend
          technology and User Interface Design. Currently learning backend
          technology.
        </Typography>
      </CardContent>
    </Card>
  );
}
