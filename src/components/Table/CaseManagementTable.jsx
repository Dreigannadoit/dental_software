import React, { Fragment, useState } from "react";
import AnimatedButton from "../AnimatedButton";
import { Alert, Patients } from "../../assets/icons";

const CaseManagementTable = ({ data }) => {
    const [expandedRow, setExpandedRow] = useState(null);

    const toggleRow = (index) => {
        setExpandedRow(expandedRow === index ? null : index);
    };

    return (
        <>
            <div className="dropdown_table">
                <div className="thead">
                    <div>
                        <p>Name</p>
                        <p>Gender</p>
                        <p>Insurance</p>
                        <p>Parent/ Guardian</p>
                        <p>Decay</p>
                        <p>Dentist Name</p>
                        <p></p>
                    </div>
                </div>
                <div className="tbody">
                    {data.map((patient, index) => (
                        <Fragment key={index}>
                            <div className="main">
                                <p>{patient.name}</p>
                                <p>{patient.gender === "Male" ? "M" : "F"}</p>
                                <p>{patient.insurance}</p>
                                <p>{patient.parent_gauridian}</p>
                                <p>
                                    {patient.decayList.map((decay, decayIndex) => (
                                        <span key={decayIndex}>
                                            {decay}
                                            {decayIndex < patient.decayList.length - 1 && ", "}
                                        </span>
                                    ))}
                                </p>
                                <p>{patient.dentistName}</p>
                                <div className="action_button">
                                    <AnimatedButton
                                        type="button"
                                        classLabel="edit_patient"
                                        label="Details"
                                        icon={Patients}
                                        backgroundColor="#FE9C8F"
                                        method={() => toggleRow(index)}
                                    />
                                </div>
                            </div>
                            <div
                                className={`${expandedRow === index ? "expanded-row" : "collapsed-row"} more_info`}
                            >
                                <div
                                    className="patient-details"
                                >
                                    <div className="table">
                                        <h3>Patient Communication</h3>
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>Referral <br /> Complete</th>
                                                    <th>School Year</th>
                                                    <th>Current <br /> Dentist</th>
                                                    <th>Date Called</th>
                                                    <th>Teeth <br /> Issue</th>
                                                    <th>Notes</th>
                                                    <th>Created by</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="shadow">
                                                    <td>Yes</td>
                                                    <td>Csdp Program Sy 2023 - 2024</td>
                                                    <td>Brockton Pediatrics & Ortho</td>
                                                    <td>2024-02-01</td>
                                                    <td>B, S</td>
                                                    <td>mother has been bringing child to appts</td>
                                                    <td>Super Admin</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </Fragment>

                    ))}
                </div>
            </div>
        </>
    );
};

export default CaseManagementTable;
