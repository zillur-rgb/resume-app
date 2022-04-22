import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { teal } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { Box, Button } from "@mui/material";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function FrontendProjects() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const frontendProjects = [
    {
      id: 1,
      name: "Zillflix-A-movie-app",
      tech: [
        "React Js",
        "Tailwind CSS",
        "Context API",
        "Custom Hook",
        "Daisy UI",
        "React-Icons",
      ],
      features: [
        "See the trending movie, latest movie and tv series.",
        "ser will be able to see the details of the movie/ TV Series when he clicks on the movie.",
        "User can search the movie name.",
        "User will be able to bookmark the movie.",
      ],
      github: "https://github.com/zillur-rgb/zillflix-A-movie-app",
      live: "https://delicate-stardust-b57c15.netlify.app/",
    },
    {
      id: 2,
      name: "Note-App using Typescript",
      tech: ["React Js", "TypScript", "Bootstrap 5"],
      features: [
        "see all the notes that has been added",
        "Add note with custom background color.",
        "User can search the movie name.",
        "delete note which he does not need . create note with custom color",
      ],
      github: "https://github.com/zillur-rgb/notes-app-react-typescript",
      live: "https://silly-kulfi-eba079.netlify.app/",
    },
    {
      id: 3,
      name: "Recipe-App using React Js and Styled Components",
      tech: [
        "React Js",
        "Styled Components",
        "React-icons",
        "React-Router-DOM",
        "Splide",
        "Local Storage",
      ],
      features: [
        "see different kinds of recipes.",
        "Can search for their desired recipe with keyword.",
        "Can see single recipe details.",
        "User will be able to see the ingredients of the recipes and the instructions.",
        "Vegeterian are also able to see different vegetarian recipes.",
      ],
      github: "https://github.com/zillur-rgb/Recipe-App",
      live: "https://storied-starlight-7f24e7.netlify.app/",
    },
    {
      id: 4,
      name: "Rock Paper Scissor",
      tech: ["JavaScript", "Plain CSS"],
      features: [
        "Simple Rock Paper Scissor with Vanilla JavaScript",
        "One of my oldest projects.",
        "Can restart the game once it's over.",
      ],
      github: "https://github.com/zillur-rgb/rock-paper-scissor",
      live: "https://zillur-rgb.github.io/rock-paper-scissor/",
    },
  ];

  return (
    <Card sx={{ minWidth: 275, mt: 4 }}>
      <CardContent>
        <Typography
          variant="h5"
          sx={{ fontSize: 24, fontWeight: "medium", mb: 4 }}
          color={teal[600]}
          component="div"
        >
          Recent Frontend Project
        </Typography>
        {frontendProjects.map((project) => {
          return (
            <Accordion
              key={project.id}
              onChange={handleChange(`panel${project.id}`)}
            >
              <AccordionSummary aria-controls={`panel${project.id}d-header`}>
                <Typography
                  sx={{
                    fontWeight: "medium",
                    padding: 1,
                  }}
                >
                  {project.name}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Button
                  variant="contained"
                  sx={{
                    m: 2,
                  }}
                >
                  Github
                </Button>
                <Button
                  variant="contained"
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  sx={{
                    m: 2,
                  }}
                >
                  Live Site
                </Button>
                <Typography
                  sx={{
                    typography: "subtitle2",
                    fontWeight: "medium",
                    mb: 0.5,
                  }}
                  color={teal[600]}
                  component="div"
                >
                  Technology Used
                </Typography>
                <Box sx={{ typography: "subtitle2", my: 0.5, p: 2 }}>
                  <ul>
                    {project.tech.map((t, idx) => {
                      return <li key={idx}>{t}</li>;
                    })}
                  </ul>
                </Box>
                <Typography
                  sx={{
                    typography: "subtitle2",
                    fontWeight: "medium",
                    mb: 0.5,
                  }}
                  color={teal[600]}
                  component="div"
                >
                  Features
                </Typography>
                <Box sx={{ typography: "text1", my: 1.5, p: 2 }}>
                  <ul>
                    {project.features.map((t, idx) => {
                      return <li key={idx}>{t}</li>;
                    })}
                  </ul>
                </Box>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </CardContent>
    </Card>
  );
}
