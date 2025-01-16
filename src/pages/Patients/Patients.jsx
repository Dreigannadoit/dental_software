import React, { useState } from "react";
import "../../css/patients.css";
import FilterBlock from "../../components/FilterBlock";
import { ImportIcon, Save, Upload, User_Add } from "../../assets/icons";
import AnimatedButton from "../../components/AnimatedButton";
import PatientTable from "../../components/Table/PatientTable";
import { updatedPatientInfo } from "../../test_data";
import usePopup from "../../hooks/usePopUp";
import AddPatients from "../../components/Forms/AddPatients";
import RowsPerPage from "../../components/RowsPerPage";
import useTableData from "../../hooks/useTableData";
import Popup from "../../components/PopUps/Popup";
import TableLoadingAnimation from "../../components/TableLoadingAnimation";

const filterPatients = (patients, filters) => {
  const safeToLowerCase = (value) =>
    value ? value.toString().toLowerCase() : "";

  return patients.filter((patient) => {
    const searchQuery = safeToLowerCase(filters.search || "");
    const matchesSearch =
      !filters.search ||
      [
        patient.name,
        patient.id?.toString(),
        patient.gender,
        patient.age?.toString(),
        patient.teacher,
        patient.school,
        patient.year,
        patient.status,
        patient.birthdate,
        patient.insurance,
      ].some((field) => safeToLowerCase(field).includes(searchQuery));

    const matchesSchool = !filters.school || patient.school === filters.school;
    const matchesGrade =
      !filters.grade || patient.grade?.toString() === filters.grade;
    const matchesYear = !filters.year || patient.year === filters.year;
    const matchesStatus = !filters.status || patient.status === filters.status;
    const matchesTeacher =
      !filters.teacher || patient.teacher === filters.teacher;

    return (
      matchesSearch &&
      matchesSchool &&
      matchesGrade &&
      matchesYear &&
      matchesStatus &&
      matchesTeacher
    );
  });
};

const Patients = () => {
  const initialFilters = {
    search: "",
    school: "",
    grade: "",
    year: "",
    status: "",
    teacher: "",
  };

  const {
    filters,
    rowsPerPage,
    currentPage,
    currentPageData,
    totalPages,
    handleFilterChange,
    handleRowsPerPageChange,
    handlePageChange,
    loading,
  } = useTableData(updatedPatientInfo, initialFilters, filterPatients);

  const {
    isVisible: showImportPopup,
    isExiting,
    openPopup: openImportPopUp,
    closePopup: closeImportPopUp,
  } = usePopup();

  const [showAddPatient, setShowAddPatient] = useState(false);

  const openAddPatient = () => setShowAddPatient(true);
  const closeAddPatient = () => setShowAddPatient(false);

  return (
    <>
      {/* Import File Popup */}
      {showImportPopup && (
        <Popup
          type="Import"
          title="Import Patient List"
          message={`This action can be only done once`}
          icon={ImportIcon}
          onConfirm={closeImportPopUp}
          onCancel={closeImportPopUp}
          confirmLabel="Confirm"
          cancelLabel="Cancel"
          isExiting={isExiting}
          customClass="import-popup"
        />
      )}

      {/* Add Patient Popup */}
      {showAddPatient && <AddPatients exitUser={closeAddPatient} />}

      <div className="patients auto-sizing">
        <FilterBlock
          filters={filters}
          onFilterChange={handleFilterChange}
          data={updatedPatientInfo}
          hasSchoolFilter
          hasGradeFilter
          hasYearFilter
          hasStatusfilter
          hasTeacherFilter
        />

        <div className="table_controls">
          <UserButtons
            openImportPopUp={openImportPopUp}
            addNewPatient={openAddPatient}
          />
          <RowsPerPage
            rowsPerPage={rowsPerPage}
            handleRowsPerPageChange={handleRowsPerPageChange}
          />
        </div>

        <div className="table_area">
          {loading && <TableLoadingAnimation />}
          <PatientTable data={currentPageData} />
        </div>

        {totalPages > 1 && (
          <div className="pagination">
            <button
              className="shadow"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Back
            </button>
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <button
              className="shadow"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </>
  );
};

const UserButtons = ({ openImportPopUp, addNewPatient }) => (
  <div className="user_buttons">
    <AnimatedButton
      type="link"
      classLabel="download_template"
      label="Download Template"
      icon={Save}
      backgroundColor="#FFB20C"
      url="#"
    />
    <AnimatedButton
      type="button"
      classLabel="import_btn"
      label="Import"
      icon={Upload}
      backgroundColor="#8BE5FE"
      method={openImportPopUp}
    />
    <AnimatedButton
      type="button"
      classLabel="new_patient"
      label="New Patient"
      icon={User_Add}
      backgroundColor="#1E8631"
      method={addNewPatient}
    />
  </div>
);

export default Patients;
