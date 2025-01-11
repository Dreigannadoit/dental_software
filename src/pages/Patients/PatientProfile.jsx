import React, { useState } from "react";
import { updatedPatientInfo } from "../../test_data";
import "../../css/patientProfile.css";
import AnimatedButton from "../../components/AnimatedButton";
import { Arrow_left, Arrow_right, Chart } from "../../assets/icons";
import MedicalHistory from "../../components/PatientProfile/MedicalHistory";
import Appointments from "../../components/PatientProfile/Appointments";
import PerioChart from "../../components/PatientProfile/PerioChart";
import TreatmentHistory from "../../components/PatientProfile/TreatmentHistory";
import PatientDetailsHistory from "../../components/PatientProfile/PatientDetailsHistory";
import Communications from "../../components/PatientProfile/Communications";
import Guardians from "../../components/PatientProfile/Guardians";
import Attachments from "../../components/PatientProfile/Attachments";
import ProgramParticipants from "../../components/PatientProfile/ProgramPaticipants";

const PatientProfile = ({ id = 1 }) => {
    const [renderSection, setRenderSection] = useState("Select A Section");
    const patient = updatedPatientInfo.find((p) => p.id === id);

    if (!patient) return <p>Patient not found.</p>;


    const [currentPage, setCurrentPage] = useState(0);

    const sections = [
        { label: "Medical History", component: <MedicalHistory /> },
        { label: "Program Participants", component: <ProgramParticipants /> },
        { label: "Appointments", component: <Appointments /> },
        { label: "Perio Chart", component: <PerioChart /> },
        { label: "Treatment History", component: <TreatmentHistory /> },
        { label: "Patient Details History", component: <PatientDetailsHistory /> },
        { label: "Communications", component: <Communications /> },
        { label: "Guardians", component: <Guardians /> },
        { label: "Attachments", component: <Attachments /> },
    ];

    const sectionsPerPage = 5; // Number of buttons to show at a time
    const totalPages = Math.ceil(sections.length / sectionsPerPage);

    const displayedSections = sections.slice(
        currentPage * sectionsPerPage,
        (currentPage + 1) * sectionsPerPage
    );

    const handlePrevious = () => {
        setCurrentPage((prev) => (prev > 0 ? prev - 1 : 0));
    };

    const handleNext = () => {
        setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : totalPages - 1));
    };

    const handleSectionClick = (label) => {
        setRenderSection(label);
    };


    const renderInfoSection = (title, details) => (
        <div className={`block ${title.toLowerCase().replace(" ", "_")} `}>
            <h2>{title}</h2>
            <div className="info">
                {details.map(({ label, value }) => (
                    <div key={label}>
                        <p><strong>{label}</strong></p>
                        <p>{value}</p>
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <>
            <div className="patientInfo">
                {renderInfoSection("Patient Details", [
                    { label: "Full Name", value: patient.name },
                    { label: "Gender", value: patient.gender },
                    { label: "Year", value: patient.birthdate },
                    { label: "Age", value: patient.age },
                    { label: "Status", value: patient.insurance },
                ])}

                {renderInfoSection("School Details", [
                    { label: "School", value: patient.school },
                    { label: "Grade", value: patient.grade },
                    { label: "Room", value: patient.room },
                    { label: "Teacher", value: patient.teacher },
                    { label: "School Year", value: patient.school_year },
                ])}

                {renderInfoSection("Parent/Guardian Details", [
                    { label: "Parent/Guardian", value: patient.parent_gauridian },
                    { label: "Relationship", value: patient.parent_gauridian_relationship },
                    { label: "Phone", value: patient.parent_gauridian_phoneNumber },
                    { label: "Email", value: patient.parent_gauridian_email },
                    { label: "Dentist Name", value: patient.dentistName },
                ])}

                <div className="block approval_details">
                    <h2>
                        Consented: <span className={patient.consented ? "Yes" : "No"}>{patient.consented ? "Yes" : "No"}</span>
                    </h2>
                    <p>Notes: {patient.consentedNotes}</p>
                    <h2>
                        Signed: <span className={patient.signed ? "Yes" : "No"}>{patient.signed ? "Yes" : "No"}</span>
                    </h2>
                    <p>Notes: {patient.signedNotes}</p>
                </div>

                <AnimatedButton
                    type="routerLink"
                    classLabel="view_chart"
                    label="View Charts"
                    icon={Chart}
                    backgroundColor="#FE9C8F"
                    url="#"
                />
            </div>

            <div className="patientInfoAction">
                <div className="top">
                    <div className="title">
                        <h1>{renderSection || "Select a Section"}</h1>
                    </div>
                    <div className="selector">
                        <button className="prev pag shadow f-center" onClick={handlePrevious} disabled={currentPage === 0}>
                            <img src={Arrow_left} alt="" />
                        </button>
                        {displayedSections.map(({ label }, index) => (
                            <button 
                                className={`shadow f-center ${renderSection === label ? "active" : "inactive"}`}
                                key={index} 
                                onClick={() => setRenderSection(label)}
                            >
                                <span>
                                    {label}
                                </span>
                            </button>
                        ))}
                        <button className="next pag shadow f-center" onClick={handleNext} disabled={currentPage === totalPages - 1}>
                            <img src={Arrow_right} alt="" />
                        </button>
                    </div>
                </div>
                {sections.find((section) => section.label === renderSection)?.component}
            </div>
        </>
    );
};

export default PatientProfile;
