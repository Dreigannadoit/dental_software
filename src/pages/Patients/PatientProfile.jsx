import React from "react";
import { updatedPatientInfo } from "../../test_data";
import "../../css/patientProfile.css";

const PatientProfile = ({ id = 1 }) => {
    // Fetch the patient by ID from the test data
    const patient = updatedPatientInfo.find((p) => p.id === id);

    // Check if patient exists
    if (!patient) {
        return <p>Patient not found.</p>;
    }

    return (
        <>
            <div className="userInfo">
                <div className="block patient_details shadow">
                    <h2>Patient Details</h2>
                    <div className="info">
                        <div>
                            <p>
                                <strong>Full Name</strong>
                            </p>
                            <p>{patient.name}</p>
                        </div>
                        <div>
                            <p>
                                <strong>Gender</strong>
                            </p>
                            <p>{patient.gender}</p>
                        </div>
                        <div>
                            <p>
                                <strong>Year</strong>
                            </p>
                            <p>{patient.birthdate}</p>
                        </div>
                        <div>
                            <p>
                                <strong>Age</strong>
                            </p>
                            <p>{patient.age}</p>
                        </div>
                        <div>
                            <p>
                                <strong>Status</strong>
                            </p>
                            <p>{patient.insurance}</p>
                        </div>
                    </div>
                </div>

                <div className="block school_details shadow">
                    <h2>School Details</h2>
                    <div className="info">
                        <div>
                            <p>
                                <strong>SCHOOL</strong>
                            </p>
                            <p>{patient.school}</p>
                        </div>
                        <div>
                            <p>
                                <strong>GRADE</strong>
                            </p>
                            <p>{patient.grade}</p>
                        </div>
                        <div>
                            <p>
                                <strong>ROOM</strong>
                            </p>
                            <p>{patient.room}</p>
                        </div>
                        <div>
                            <p>
                                <strong>TEACHER</strong>
                            </p>
                            <p>{patient.teacher}</p>
                        </div>
                        <div>
                            <p>
                                <strong>SCHOOL YEAR</strong>
                            </p>
                            <p>{patient.school_year}</p>
                        </div>
                    </div>
                </div>

                <div className="block guardian_details shadow">
                    <h2>Parent/Guardian Details</h2>
                    <div className="info">
                        <div>
                            <p>
                                <strong>Parent/Guardian</strong>
                            </p>
                            <p>{patient.parent_gauridian}</p>
                        </div>
                        <div>
                            <p>
                                <strong>Relationship</strong>
                            </p>
                            <p>{patient.parent_gauridian_relationship}</p>
                        </div>
                        <div>
                            <p>
                                <strong>Phone</strong>
                            </p>
                            <p>{patient.parent_gauridian_phoneNumber}</p>
                        </div>
                        <div>
                            <p>
                                <strong>Email</strong>
                            </p>
                            <p>{patient.parent_gauridian_email}</p>
                        </div>

                        <div>
                            <p>
                                <strong>Dentis Name</strong>
                            </p>
                            <p>{patient.dentistName}</p>
                        </div>
                    </div>
                </div>

                <div className="block approval_details shadow">
                    <h2>Consented: <span className={`${patient.consented === true ? "Yes" : "No"}`}>{patient.consented === true ? "Yes" : "No"}</span></h2>
                    <p>Notes: {patient.consentedNotes}</p>
                    <h2>
                        Signed: 
                        <span className={`${patient.signed === true ? "Yes" : "No"}`}>
                            {patient.signed === true ? " Yes" : " No"}
                        </span>
                    </h2>
                    <p>Notes: {patient.signedNotes}</p>
                </div>
            </div>
        </>
    );
};

export default PatientProfile;
