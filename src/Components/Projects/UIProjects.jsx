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

  const uiProjects = [
    {
      id: 1,
      name: "User Interface Layout for Law Consultancy Company",
      link: "https://dribbble.com/shots/16674784-User-Interface-Layout-for-Law-Consultancy-Company",
    },
    {
      id: 2,
      name: "Business Consultancy Website Layout",
      link: "https://dribbble.com/shots/16674659-Business-Consultancy-Website-Layout",
    },
    {
      id: 3,
      name: "Flexytrips - A Tour Agency Website",
      link: "https://dribbble.com/shots/18084756-Flexytrips-A-Layout-for-Tour-Agency",
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
          Recent User Interface Project
        </Typography>
        {uiProjects.map((project) => {
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
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  sx={{
                    m: 2,
                  }}
                >
                  Dribbble Link
                </Button>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </CardContent>
    </Card>
  );
}
