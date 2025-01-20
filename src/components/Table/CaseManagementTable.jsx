import React, { Fragment, useState } from "react";
import AnimatedButton from "../AnimatedButton";
import { Alert, Patients } from "../../assets/icons";

const CaseManagementTable = ({ data }) => {
    const [expandedRow, setExpandedRow] = useState(null);

    const toggleRow = (index) => {
        setExpandedRow((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <>
            <div className="table">
                <table>
                    <thead className="shadow">
                        <tr>
                            <th>Name</th>
                            <th>Gender</th>
                            <th>Insurance</th>
                            <th>Parent/ <br /> Guardian</th>
                            <th>Decay</th>
                            <th>Dentist Name</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.length > 0 ? (
                            data.map((patient, index) => (
                                <Fragment key={index}>
                                    {/* Main Row */}
                                    <tr className="shadow">
                                        <td>{patient.name}</td>
                                        <td>{patient.gender === "Male" ? "M" : "F"}</td>
                                        <td>{patient.insurance}</td>
                                        <td>{patient.parent_gauridian}</td>
                                        <td>
                                            {patient.decayList.map((decay, decayIndex) => (
                                                <span key={decayIndex}>
                                                    {decay}
                                                    {decayIndex < patient.decayList.length - 1 && ", "}
                                                </span>
                                            ))}
                                        </td>
                                        <td>{patient.dentistName}</td>
                                        <td className="crud_controlls">
                                            <AnimatedButton
                                                type="button"
                                                classLabel="edit_patient"
                                                label="More"
                                                icon={Patients}
                                                backgroundColor="#1E8631"
                                                method={() => toggleRow(index)}
                                            />
                                        </td>
                                    </tr>

                                    {/* Expanded Row */}
                                    <tr
                                        className={`${expandedRow === index ? "expanded-row" : "collapsed-row"} more_info`}
                                    >
                                        <td 
                                            colSpan="7"
                                            className="patient-details"
                                        >
                                            <p>
                                                <strong>Full Address:</strong> {patient.address}
                                            </p>
                                            <p>
                                                <strong>Date of Birth:</strong> {patient.dob}
                                            </p>
                                            <p>
                                                <strong>Allergies:</strong> {patient.allergies?.join(", ") || "None"}
                                            </p>
                                            <p>
                                                <strong>Last Visit:</strong> {patient.lastVisit}
                                            </p>
                                        </td>
                                    </tr>

                                </Fragment>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="8">No matching records found</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default CaseManagementTable;
