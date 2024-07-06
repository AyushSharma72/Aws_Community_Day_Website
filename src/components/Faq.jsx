import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  backgroundColor: "white",
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
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
    theme.palette.mode === "dark" ? "rgba(255, 255, 255, .05)" : "#ffffff",
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
  borderTop: "1px solid rgba(0, 0, 0, 0)",
  transition: "opacity 0.3s ease-in-out",
}));

const Faq = () => {
  const [expanded, setExpanded] = React.useState("");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <div className="py-10 ">
      <p className=" font-[Poppins, sans-serif] leading-10 text-3xl font-bold text-center mt-4 Blackheadingshadow">
        Frequently Asked Questions
      </p>

      <div className="sm:w-2/3 flex flex-col m-auto mt-10 w-full px-3">
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography className="FaqQuestions">
              What are AWS Cloud Clubs?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              The AWS Cloud Club is a student organization dedicated to
              promoting knowledge and skills related to cloud computing using
              Amazon Web Services (AWS).
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography className="FaqQuestions">
              What activities does AWS Cloud Club organize?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              AWS Cloud Club organizes workshops, seminars, hackathons, and
              other events to help students learn about AWS services, cloud
              computing concepts, and real-world applications.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography className="FaqQuestions">
              What are the benefits of joining AWS Cloud Club?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Joining AWS Cloud Club provides opportunities to enhance your
              cloud computing skills, network with industry professionals, and
              participate in hands-on projects.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography className="FaqQuestions">
              Are there any prerequisites for joining AWS Cloud Club ?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              No specific prerequisites are required for joining AWS Cloud Club
              . Students from all disciplines with an interest in cloud
              computing are encouraged to participate.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default Faq;
