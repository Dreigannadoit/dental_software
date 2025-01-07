import React from "react";
import { NavLink } from "react-router-dom";
import AnimatedButton from "../AnimatedButton";
import { Delete, File_Edit, Upload, View } from "../../assets/icons";

const PatientTable = ({ data }) => {
  const toggleChangeStatusPopUp = () => {
    
  }

  return (
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
              <tr
                key={index}
                className={`shadow`}
              >
                <td>{patient.id}</td>
                <td>{patient.name}</td>
                <td>{patient.gender}</td>
                <td>{patient.birthdate}</td>
                <td>{patient.age}</td>
                <td className={`${patient.status === "Active" ? "inactive" : "active"}`}>
                  <span> 
                    <button onClick={toggleChangeStatusPopUp}>
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
                    label="View"
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
                    url="#"
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
  );
};

export default PatientTable;
