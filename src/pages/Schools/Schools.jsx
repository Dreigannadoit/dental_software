import React, { useState, useMemo } from "react";
import "../../css/patients.css";
import FilterBlock from "../../components/FilterBlock";
import { ImportIcon, Save, Upload, User_Add } from "../../assets/icons";
import AnimatedButton from "../../components/AnimatedButton";
import PatientTable from "../../components/Table/PatientTable";
import { updatedPatientInfo } from "../../test_data";
import useDebounce from "../../hooks/useDebounce";
import RowsPerPage from "../../components/RowsPerPage";
import Popup from "../../components/PopUps/Popup";
import usePopup from "../../hooks/usePopUp";
import AddPatients from "../../components/Forms/AddPatients";


const Schools = () => {
  const [filters, setFilters] = useState({
    search: "",
    school: "",
    grade: "",
    year: "",
    status: "",
    techer:""
  });
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);  
  const [showAddPatient, setShowAddPatient] = useState(false); // State for AddPatient Popup


  const handleFilterChange = (filterName, value) => {
    setFilters((prevFilters) => ({ ...prevFilters, [filterName]: value }));
  };

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(Number(event.target.value));
    setCurrentPage(1); // Reset to the first page
  };

  const handlePageChange = (newPage) => setCurrentPage(newPage);

  const debouncedSearch = useDebounce(filters.search, 500);

  // Function to handle search queries that start with "Birthdate: "
  const handleSearchFilter = (searchQuery) => {
    const birthdatePrefix = "Birthdate: ";
    if (searchQuery.startsWith(birthdatePrefix)) {
      // Extract the birthdate from the search query
      const birthdate = searchQuery.replace(birthdatePrefix, "").trim();
      // Return a function that checks if a patient's birthdate includes the extracted value
      return (patient) => patient.birthdate.includes(birthdate);
    }
    return null;
  };

  // Utility function to safely convert a value to lowercase string
  const safeToLowerCase = (value) =>
    value ? value.toString().toLowerCase() : "";

  // Memoized function to filter patients based on search query and filters
  const filteredPatients = useMemo(() => {
    // TODO: replace updatedPatientInfo with actual database

    // Filter the patients based on various criteria
    return updatedPatientInfo.filter((patient) => {
      const searchQuery = debouncedSearch.toLowerCase();
      const birthdateFilter = handleSearchFilter(debouncedSearch);

      // Check if any of the patient's fields match the search query
      const searchMatch =
        !debouncedSearch ||
        [
          patient.name,
          patient.id.toString(),
          patient.gender,
          patient.age?.toString(),
          patient.teacher?.toString(),
        ].some((field) => safeToLowerCase(field).includes(searchQuery));

      // Check if the patient's birthdate matches the search query
      const birthdateMatch = birthdateFilter && birthdateFilter(patient);

      // Check if the patient's school matches the selected filter
      const schoolMatch = !filters.school || patient.school === filters.school;

      // Check if the patient's grade matches the selected filter
      const gradeMatch =
        !filters.grade || patient.grade.toString() === filters.grade;

      // Check if the patient's year matches the selected filter
      const yearMatch = !filters.year || patient.year === filters.year;

      // Check if the patient's status matches the selected filter
      const statusMatch = !filters.status || patient.status === filters.status;

      // Check if the patient's teacjer matches the selected filter
      const teacherMatch = !filters.teacher || patient.teacher === filters.teacher;

      // Return true if the patient matches all the criteria
      return (
        (searchMatch || birthdateMatch) &&
        schoolMatch &&
        gradeMatch &&
        yearMatch &&
        statusMatch &&
        teacherMatch
      );
    });
  }, [debouncedSearch, filters]);

  const startIndex = (currentPage - 1) * rowsPerPage; // Calculate the start index for the current page
  const currentPagePatients = filteredPatients.slice(
    startIndex,
    startIndex + rowsPerPage
  ); // Get the patients for the current page by slicing the filtered patients array
  const totalPages = Math.ceil(filteredPatients.length / rowsPerPage); // Calculate the total number of pages based on the length of the filtered patients and rows per page

  const {
    isVisible: showImportPopup,
    isExiting,
    openPopup: openImportPopUp,
    closePopup: closeImportPopUp,
  } = usePopup();

  const openAddPatient = () => setShowAddPatient(true); // Open AddPatient Popup
  const closeAddPatient = () => setShowAddPatient(false); // Close AddPatient Popup

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
      {showAddPatient && (
          <AddPatients exitUser={closeAddPatient} />
      )}

      <div className="patients auto-sizing">
        <FilterBlock
          filters={filters}
          onFilterChange={handleFilterChange}
          patientInfo={updatedPatientInfo}
        />

        <div className="table_controls">
          <UserButtons openImportPopUp={openImportPopUp} addNewPatient={openAddPatient} />
          <RowsPerPage
            rowsPerPage={rowsPerPage}
            handleRowsPerPageChange={handleRowsPerPageChange}
          />
        </div>

        <div className="table_area">
          <PatientTable data={currentPagePatients} />
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

export default Schools;
