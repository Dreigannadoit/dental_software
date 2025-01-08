import React from "react";
import AnimatedButton from "../AnimatedButton";
import { Delete, File_Edit, View, Alert } from "../../assets/icons"; // Import Alert icon
import ChangeStatus from "../PopUps/ChangeStatus";
import useUpdateStatus from "../../hooks/useUpdateStatus";
import usePopup from "../../hooks/usePopUp";
import Popup from "../PopUps/Popup";

const PatientTable = ({ data }) => {
  const { updateStatus, setChangeStatusRef } = useUpdateStatus();
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

  return (
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

      {/* Status Popups */}
      <ChangeStatus ref={(ref) => setChangeStatusRef(ref)} />

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
                      <button onClick={() => updateStatus(patient)}>
                        {patient.status === "Active" ? "Inactive" : "Active"}
                      </button>
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
