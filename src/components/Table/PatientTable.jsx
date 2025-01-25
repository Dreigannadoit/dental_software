import React, { useState } from "react";
import AnimatedButton from "../AnimatedButton";
import { Delete, File_Edit, View, Alert } from "../../assets/icons";
import ChangeStatus from "../PopUps/ChangeStatus";
import useUpdateStatus from "../../hooks/useUpdateStatus";
import usePopup from "../../hooks/usePopUp";
import Popup from "../PopUps/Popup";

const PatientTable = ({ data }) => {
  const [hoveredRow, setHoveredRow] = useState(null);
  const [isAscending, setIsAscending] = useState(true); // State for sorting order
  const {
    updateStatus,
    setChangeStatusRef,
    updateConsent,
    setChangeConsentRef,
    updateSDF,
    setChangeSDFRef,
  } = useUpdateStatus();
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

  // Sort data by ID
  const sortedData = [...data].sort((a, b) => {
    return isAscending ? a.id - b.id : b.id - a.id;
  });

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
      <ChangeStatus ref={(ref) => setChangeConsentRef(ref)} />
      <ChangeStatus ref={(ref) => setChangeSDFRef(ref)} />

      <div className="table">
        <table>
          <thead className="shadow">
            <tr>
              <th>
                <div>
                  #
                  <button
                    onClick={() => setIsAscending(!isAscending)} // Toggle sorting order
                    className={`${isAscending ? "Ascending" : "Descending"}`}
                  >
                    {isAscending ? "➤" : "➤"}
                  </button>
                </div>
              </th>
              <th>Patient Name</th>
              <th>Date of Birth</th>
              <th>Grade</th>
              <th>School</th>
              <th>Consented</th>
              <th>SDF</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {sortedData.length > 0 ? (
              sortedData.map((patient, index) => (
                <tr
                  key={index}
                  className="shadow"
                  onMouseEnter={() => {
                    console.log("Mouse Entered:", patient.id); // Debugging log
                    setHoveredRow(patient.id);
                  }}
                  onMouseLeave={() => {
                    console.log("Mouse Left:", patient.id); // Debugging log
                    setHoveredRow(null);
                  }}

                >
                  <td>{patient.id}</td>
                  <td>{patient.name}</td>
                  <td>{patient.birthdate}</td>
                  <td>{patient.grade}</td>
                  <td>{patient.school}</td>

                  {/* Consented colunm */}
                  <td
                    className={`${patient.consented === "Active" || patient.consented === true ? "active" : "inactive "
                      }`}
                  >
                    <span>
                      <button onClick={() => updateConsent(patient)}>
                        {patient.consented === "Active" || patient.consented === true ? "Yes" : "No"}
                      </button>
                    </span>
                  </td>

                  {/* SDF colunm */}
                  <td
                    className={`${patient.sdf === "Active" || patient.sdf === true ? "active" : "inactive "
                      }`}
                  >
                    <span>
                      <button onClick={() => updateSDF(patient)}>
                        {patient.sdf === "Active" || patient.sdf === true ? "Yes" : "No"}
                      </button>
                    </span>
                  </td>

                  {/* Status colunm */}
                  <td
                    className={`${patient.status === "Active" || patient.status === true ? "active" : "inactive "
                      }`}
                  >
                    <span>
                      <button onClick={() => updateStatus(patient)}>
                        {patient.status === "Active" || patient.status === true ? "Active" : "Inactive"}
                      </button>
                    </span>
                  </td>

                  {/* Action buttons  */}
                  <td className="crud_controlls">
                    <AnimatedButton
                      type="routerLink"
                      classLabel="view_patient"
                      label="View"
                      icon={View}
                      backgroundColor="#8BE5FE"
                      url="#"
                    />
                    <div className={`outer_more ${hoveredRow === patient.id ? "hovered" : ""}`}>
                      <UserActionButtons openDeletePopup={() => openDeletePopup(patient)} />
                    </div>
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

const UserActionButtons = ({ deteleLogic }) => {
  return (
    <div className="action_buttons f-center">
      {/* TODO: Replace url to naviate to edit patient */}
      <div className=" f-center shadow">
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
          method={deteleLogic}
        />

      </div>
    </div>
  )
}

export default PatientTable;
