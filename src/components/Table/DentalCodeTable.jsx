import React, { useState } from "react";
import AnimatedButton from "../AnimatedButton";
import { Delete, File_Edit, View, Alert } from "../../assets/icons";
import ChangeStatus from "../PopUps/ChangeStatus";
import useUpdateStatus from "../../hooks/useUpdateStatus";
import usePopup from "../../hooks/usePopUp";
import Popup from "../PopUps/Popup";

const DentalCodeTable = ({ data, onEditDentalCode }) => {
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
          message={`You are about to delete ${selectedPatient?.code}. This action cannot be undone.`}
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
              <th>Code</th>
              <th>Description</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {sortedData.length > 0 ? (
              sortedData.map((dentalcode, index) => (
                <tr key={index} className="shadow">
                  <td>{dentalcode.id}</td>
                  <td>{dentalcode.code}</td>
                  <td>{dentalcode.description}</td>
                  <td
                    className={`${dentalcode.status === "Active" || dentalcode.status === "active" || dentalcode.status === true ? "active" : "inactive "
                      }`}
                  >
                    <span>
                      <button onClick={() => updateStatus(dentalcode)}>
                        {dentalcode.status === "Active" || dentalcode.status === "active" || dentalcode.status === true ? "Active" : "Inactive"}
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
                      method={() => onEditDentalCode(dentalcode)}
                    />
                    <AnimatedButton
                      type="button"
                      classLabel="delete_patient"
                      label="Delete"
                      icon={Delete}
                      backgroundColor="#FF1A1A"
                      method={() => openDeletePopup(dentalcode)}
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

export default DentalCodeTable;
