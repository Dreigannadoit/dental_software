import React from "react";
import { NavLink } from "react-router-dom";

const PatientTable = ({ data }) => {
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
                <td className={`${patient.status === "Active" ? "active" : "inactive"}`}>
                  <span>
                    {patient.status}
                  </span>
                </td>
                <td className="crud_controlls">
                  
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
