import React, { useState } from "react";
import AnimatedButton from "../AnimatedButton";
import { Delete, File_Edit, View, Alert } from "../../assets/icons";
import ChangeStatus from "../PopUps/ChangeStatus";
import useUpdateStatus from "../../hooks/useUpdateStatus";
import usePopup from "../../hooks/usePopUp";
import Popup from "../PopUps/Popup";

const ProgramTable = ({ data }) => {
  const [isAscending, setIsAscending] = useState(true); // State for sorting order
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
              <th>Name</th>
              <th>School Year</th>
              <th>Start Month</th>
              <th>End Month</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {sortedData.length > 0 ? (
              sortedData.map((program, index) => (
                <tr key={index} className="shadow">
                  <td>{program.id}</td>
                  <td>{program.name}</td>
                  <td>{program.school_year}</td>
                  <td>{program.start_month}</td>
                  <td>{program.end_month}</td>
                  <td
                    className={`${
                        program.status === "Active"|| program.status === "active" || program.status === true ? "active" : "inactive "
                    }`}
                  >
                    <span>
                      <button onClick={() => updateStatus(program)}>
                        {program.status === "Active" || program.status === "active" || program.status === true ? "Active" : "Inactive"}
                      </button>
                    </span>
                  </td>
                  <td className="crud_controlls">
                    {/* TODO: Replace url to naviate to edit patient */}
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
                      method={() => openDeletePopup(program)}
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

export default ProgramTable;
