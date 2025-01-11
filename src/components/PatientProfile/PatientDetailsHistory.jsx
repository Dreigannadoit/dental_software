import * as React from 'react';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { Accordion, AccordionDetails, AccordionSummary } from '../CustumeAccordian';
import { Checkbox } from '@mui/material';


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
                <th>Field</th>
                <th>From</th>
                <th>To</th>
              </tr>
            </thead>
            <tbody>
              <tr className="shadow">
                <td>Status</td>
                <td>0</td>
                <td>1</td>
              </tr>
            </tbody>

          </table>
        </div>
      </AccordionDetails>
    </Accordion>
  );
};

const PatientDetailsHistory = () => {
  return (
    <div className='patient_profile_block patient_details_history'>
      <AccordianBlock schoolyear="2025-01-09" panel="panel1" />
    </div>
  );
}

export default PatientDetailsHistory;