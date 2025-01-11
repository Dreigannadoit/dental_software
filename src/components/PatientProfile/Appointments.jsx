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
import { AccordionDetails, AccordionSummary } from '../CustumeAccordian';

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