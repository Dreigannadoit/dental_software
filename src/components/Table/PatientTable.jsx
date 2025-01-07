import React, { useState } from "react";
import AnimatedButton from "../AnimatedButton";
import { Delete, File_Edit, View } from "../../assets/icons";
import DeleteData from "../PopUps/DeleteData";

const PatientTable = ({ data }) => {
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState(null);

  const openDeletePopup = (patient) => {
    setSelectedPatient(patient);
    setShowDeletePopup(true);

    // Reset exiting state when opening
    setTimeout(() => {
      setIsExiting(false); 
    }, 100); 
  };

  const closeDeletePopup = () => {
    setIsExiting(true); // Trigger the exit animation

    // After the exit animation finishes, hide the pop-up
    setTimeout(() => {
      setShowDeletePopup(false); // Hide the pop-up
      setSelectedPatient(null); // Clear the selected patient
    }, 500); // Match this duration with the CSS transition time
  };

  const confirmDelete = () => {
    if (selectedPatient) {
      console.log("Request to delete patient with ID:", selectedPatient.id);
      // Add the logic to delete the patient here
    }
    closeDeletePopup();
  };

  return (
    <>
      {showDeletePopup && (
        <DeleteData
          patient={selectedPatient}
          onConfirm={confirmDelete}
          onCancel={closeDeletePopup}
          isExiting={isExiting}
        />
      )}

      <div className="table">
        <table>
          <thead className="shadow">
            <tr>
              <th>#</th>
              <th>Patient Name</th>
              <th>Gender</th>
              <th>Date of Birth</th>
              <th>Age</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((patient, index) => (
                <tr key={index} className="shadow">
                  <td>{patient.id}</td>
                  <td>{patient.name}</td>
                  <td>{patient.gender}</td>
                  <td>{patient.birthdate}</td>
                  <td>{patient.age}</td>
                  <td
                    className={`${
                      patient.status === "Active" ? "inactive" : "active"
                    }`}
                  >
                    <span>
                      <button>{patient.status === "Active" ? "Inactive" : "Active"}</button>
                    </span>
                  </td>
                  <td className="crud_controlls">
                    <AnimatedButton
                      type="routerLink"
                      classLabel="view_patient"
                      label="View"
                      icon={View}
                      backgroundColor="#8BE5FE"
                      url="#"
                    />
                    <AnimatedButton
                      type="routerLink"
                      classLabel="edit_patient"
                      label="Edit"
                      icon={File_Edit}
                      backgroundColor="#1E8631"
                      url="#"
                    />
                    <AnimatedButton
                      type="button"
                      classLabel="delete_patient"
                      label="Delete"
                      icon={Delete}
                      backgroundColor="#FF1A1A"
                      method={() => openDeletePopup(patient)}
                    />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7">No matching records found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default PatientTable;
