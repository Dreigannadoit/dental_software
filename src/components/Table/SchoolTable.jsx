import React, { useState, useEffect } from "react";
import { TextField, Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import AnimatedButton from "../AnimatedButton";
import { Delete, File_Edit, View, Alert } from "../../assets/icons";
import ChangeStatus from "../PopUps/ChangeStatus";
import useUpdateStatus from "../../hooks/useUpdateStatus";
import usePopup from "../../hooks/usePopUp";
import Popup from "../PopUps/Popup";

const SchoolTable = ({ data, onEditSchool }) => {
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
              <th>Adress</th>
              <th>Type</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {sortedData.length > 0 ? (
              sortedData.map((school, index) => (
                <tr key={index} className="shadow">
                  <td>{school.id}</td>
                  <td>{school.name}</td>
                  <td>{school.address}</td>
                  <td>{school.type}</td>
                  <td
                    className={`${school.status === "Active" || school.status === "active" ? "active" : "inactive " || school.status === true
                      }`}
                  >
                    <span>
                      <button onClick={() => updateStatus(school)}>
                        {school.status === "Active" || school.status === "active" ? "Active" : "Inactive" || school.status === false}
                      </button>
                    </span>
                  </td>
                  <td className="crud_controlls">
                    {/* TODO: Replace url to naviate to edit patient */}
                    <AnimatedButton
                      type="button"
                      classLabel="edit_patient"
                      label="Edit"
                      icon={File_Edit}
                      backgroundColor="#1E8631"
                      method={() => onEditSchool(school)} 
                    />
                    <AnimatedButton
                      type="button"
                      classLabel="delete_patient"
                      label="Delete"
                      icon={Delete}
                      backgroundColor="#FF1A1A"
                      method={() => openDeletePopup(school)}
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



export default SchoolTable;
