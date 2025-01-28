import * as React from 'react';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react';
import AnimatedButton from '../AnimatedButton';
import { Alert, Delete, File_Edit } from '../../assets/icons';
import { Accordion, AccordionDetails, AccordionSummary } from '../CustumeAccordian';
import dayjs from 'dayjs'; // Import dayjs
import Popup from '../PopUps/Popup';
import usePopup from '../../hooks/usePopUp';
import { appointmentPatient } from '../../test_data';
import AppointmentsForm from '../Forms/AppointmentsForm';


const AccordianBlock = ({ schoolyear, panel = "panel1", onEdit }) => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  const {
    isVisible: showDeletePopup,
    isExiting,
    popupData: selectedPatient,
    openPopup: openDeletePopup,
    closePopup: closeDeletePopup,
  } = usePopup();

  const confirmDelete = () => {
    if (selectedPatient) {
      console.log("Request to delete patient with ID:", selectedPatient.id);
      // Add the logic to delete the patient here
    }
    closeDeletePopup();
  };

  const handleEditClick = () => {
    onEdit({
      type: "Csdp Program Sy 2024 - 2025",
      serviceDate: "BAKER ELEMENTARY SCHOOL",
      screening: true,
      prophyHistory: true,
      prophyDate: dayjs('2025-01-10'),
      flourideHistory: "2025-01-10",
      sealantPlaced: false,
      sdf: dayjs('2025-01-10'),
      filantsPlaced: "filantsPlaced",
    });
  };


  return ( // Added return to ensure JSX is rendered
    <>
      {/* Delete Popup */}
      {showDeletePopup && (
        <Popup
          type="Inform"
          title="Are You Sure?"
          message={`You are about to delete ${selectedPatient?.name}. This action cannot be undone.`}
          icon={Alert}
          onConfirm={confirmDelete}
          onCancel={closeDeletePopup}
          confirmLabel="Yes, Delete it!"
          cancelLabel="Cancel"
          isExiting={isExiting}
          customClass="delete-popup"
        />
      )}
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
                  <th>Service Date</th>

                  <th>Screening</th>
                  <th>Prophy History</th>
                  <th>Flouride History</th>
                  <th>Sealant Placed</th>

                  <th>SDF</th>

                  <th>Filants Placed</th>
                  <th>Not Seen</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {appointmentPatient.map((patient, index) => (
                  <tr className="shadow" key={index}>
                    <td>{patient.type}</td>
                    <td>{patient.serviceDate}</td>
                    <td>{patient.screening === true ? "Yes" : "No"}</td>
                    <td>{patient.prophyHistory === true ? "Yes" : "No"}</td>
                    <td>{patient.FlourideHistory === true ? "Yes" : "No"}</td>
                    <td>{Array.isArray(patient.sealantPlaced) ? patient.sealantPlaced.join(", ") : "N/A"}</td>
                    <td>{patient.sdf === true ? "Yes" : "No"}</td>
                    <td>{Array.isArray(patient.filantPlaced) ? patient.filantPlaced.join(", ") : "N/A"}</td>
                    <td>{patient.notSeen === true ? "Yes" : "No"}</td>
                    <td>
                      <div>
                        <AnimatedButton
                          type="button"
                          classLabel="edit_patient"
                          label="Edit"
                          icon={File_Edit}
                          backgroundColor="#1E8631"
                          method={handleEditClick}
                        />
                        <AnimatedButton
                          type="button"
                          classLabel="delete_patient"
                          label="Delete"
                          icon={Delete}
                          backgroundColor="#FF1A1A"
                          method={() => openDeletePopup(patient)}
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>


            </table>
          </div>
        </AccordionDetails>
      </Accordion>
    </>

  );
};


const Appointments = ({ id = null }) => {
  const [showAppointments, setShowAppointments] = useState(false);
  const [editFormData, setEditFormData] = useState(null);

  const openAppointments = () => {
    setShowAppointments(true);
    setEditFormData(null);
  }
  const closeAppointments = () => setShowAppointments(false);

  const handleEdit = (formData) => {
    setEditFormData(formData);
    setShowAppointments(true);
  }

  return (
    <>
      {showAppointments && <AppointmentsForm exitUser={closeAppointments} initialFormData={editFormData} />}
      <div className='patient_profile_block appointments'>
        <button className='main_btn_style' onClick={openAppointments}>Add New Button</button>
        <AccordianBlock schoolyear="CSDP Program Sy 2024-2025" panel="panel1" onEdit={handleEdit} />
      </div>
    </>
  );
}

export default Appointments