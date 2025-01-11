import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary, {
  accordionSummaryClasses,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import AnimatedButton from '../AnimatedButton';
import { Delete, File_Edit } from '../../assets/icons';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: '12px', // Added border radius for modern design
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
  overflow: 'hidden', // Ensure content stays within rounded corners
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&::before': {
    display: 'none', // Remove default indicator line
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem', color: '#fff' }} />}
    {...props}
  />
))(({ theme }) => ({
  background: 'linear-gradient(-135deg, rgba(249, 202, 167, 1) 0%, rgb(253, 134, 118) 100%)', // Gradient background
  color: '#fff', // Text color
  flexDirection: 'row-reverse',
  padding: theme.spacing(1.5),
  borderRadius: '8px', // Rounded corners for modern design
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
  transition: ' 300ms 0ms cubic-bezier(0.68, -0.25, 0.27, 1.05)',
  fontSize: "30px",
  [`& .${accordionSummaryClasses.expandIconWrapper}`]: {
    transition: 'transform 0.3s ease',
  },
  [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]: {
    transform: 'rotate(90deg)', // Smooth rotation effect
  },
  [`& .${accordionSummaryClasses.content}`]: {
    marginLeft: theme.spacing(1),
  },
  '&:hover': {
    boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.15)', // Enhanced shadow on hover
  },
  '&:focus': {
    outline: '2px solid transparent', // Focus ring for accessibility
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));



const AccordianBlock = ({ schoolyear, panel = "panel1" }) => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return ( // Added return to ensure JSX is rendered
    <Accordion expanded={expanded === panel} onChange={handleChange(panel)}>
      <AccordionSummary
        aria-controls={`${panel}d-content`}
        id={`${panel}d-header`}
      >
        <Typography component="span">{schoolyear}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <div className="table">
          <table>
            <thead>
              <tr>
                <th>Type</th>
                <th>Screening</th>
                <th>Prophy History</th>
                <th>Flouride History</th>
                <th>Sealant Placed</th>
                <th>SDF</th>
                <th>Fillings Placed</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr className="shadow">
                <td>Csdp Program Sy 2024 - 2025</td>
                <td>BAKER ELEMENTARY SCHOOL</td>
                <td>Yes</td>
                <td>Yes</td>
                <td>Jan 20, 2024</td>
                <td>No</td>
                <td>Jan 20, 2024</td>
                <td>
                  <div>
                    <AnimatedButton
                      type="button"
                      classLabel="edit_patient"
                      label="Edit"
                      icon={File_Edit}
                      backgroundColor="#1E8631"
                      method={() => { console.log("button Clicked") }}
                    />
                    <AnimatedButton
                      type="button"
                      classLabel="delete_patient"
                      label="Delete"
                      icon={Delete}
                      backgroundColor="#FF1A1A"
                      method={() => { console.log("button Clicked") }}
                    />
                  </div>
                </td>
              </tr>
            </tbody>

          </table>
        </div>
      </AccordionDetails>
    </Accordion>
  );
};



const Appointments = () => {
  return (
    <div className='patient_profile_block appointments'>
      <button className='main_btn_style'>Add New Button</button>
      <AccordianBlock schoolyear="CSDP Program Sy 2024-2025" panel="panel1" />
    </div>
  );
}

export default Appointments