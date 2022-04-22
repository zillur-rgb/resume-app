import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { blueGrey } from "@mui/material/colors";
import dp from "../../assets/dp.jpeg";
import {
  FaGithub,
  FaDribbble,
  FaLinkedinIn,
  FaRegEnvelope,
} from "react-icons/fa";

export default function ProfileCard() {
  return (
    <Card sx={{ maxWidth: 345, mt: 4 }}>
      <CardMedia component="img" height="194" image={dp} alt="Paella dish" />
      <CardContent>
        <Typography variant="h5" fontWeight="bold" color={blueGrey[900]}>
          MD Zillur Rahman
        </Typography>
        <Typography variant="body1" color={blueGrey[700]}>
          Frontend Developer & UI Designer
        </Typography>
      </CardContent>
      <CardActions disableSpacing sx={{ mx: "auto" }}>
        <a
          href="https://github.com/zillur-rgb"
          target="_blank"
          rel="noreferrer"
        >
          <IconButton aria-label="Github">
            <FaGithub />
          </IconButton>
        </a>
        <a
          href="https://dribbble.com/zillur-rgb"
          target="_blank"
          rel="noreferrer"
        >
          <IconButton aria-label="share">
            <FaDribbble />
          </IconButton>
        </a>
        <a
          href="https://www.linkedin.com/in/zillur-rgb/"
          target="_blank"
          rel="noreferrer"
        >
          <IconButton aria-label="share">
            <FaLinkedinIn />
          </IconButton>
        </a>
        <a href="mailto:zillurdeu@gmail.com" target="_blank" rel="noreferrer">
          <IconButton aria-label="share">
            <FaRegEnvelope />
          </IconButton>
        </a>
      </CardActions>
    </Card>
  );
}
