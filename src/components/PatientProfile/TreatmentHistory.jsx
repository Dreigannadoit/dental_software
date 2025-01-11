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
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th> </th>
                <th>Completed</th>
                <th>Submitted</th>
                <th>Other Dentist</th>
              </tr>
            </thead>
            <tbody>
              <tr className="shadow">
                <td>Initial Visit</td>
                <td>2025-01-10</td>
                <td>D1120</td>
                <td>Prophlaxis </td>
                <td>$55.00</td>
                <td>
                  <Checkbox inputProps={{ 'aria-label': 'Completed Checkbox' }}  />
                </td>
                <td>
                  <Checkbox inputProps={{ 'aria-label': 'Submitted Checkbox' }}  />
                </td>
                <td>
                  <Checkbox inputProps={{ 'aria-label': 'Other Dentist Checkbox' }}  />
                </td>
              </tr>
            </tbody>

          </table>
        </div>
      </AccordionDetails>
    </Accordion>
  );
};

const TreatmentHistory = ({ id = null }) => {
  return (
    <div className='patient_profile_block treatment_history'>
      <AccordianBlock schoolyear="CSDP Program Sy 2024-2025" panel="panel1" />
    </div>
  );
}

export default TreatmentHistory