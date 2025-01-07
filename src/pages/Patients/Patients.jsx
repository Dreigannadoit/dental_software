import React, { useState, useMemo } from "react";
import "../../css/patients.css";
import FilterBlock from "../../components/FilterBlock";
import { Save, Upload, User_Add } from "../../assets/icons";
import AnimatedButton from "../../components/AnimatedButton";
import PatientTable from "../../components/PatientTable";
import { patientInfo, updatedPatientInfo } from "../../test_data";
import useDebounce from "../../hooks/useDebounce";
import RowsPerPage from "../../components/RowsPerPage";

const Patients = () => {
  const [filters, setFilters] = useState({
    search: "",
    school: "",
    grade: "",
    year: "",
    status: "",
  });
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const handleFilterChange = (filterName, value) => {
    setFilters(prevFilters => ({ ...prevFilters, [filterName]: value }));
  };

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(Number(event.target.value));
    setCurrentPage(1); // Reset to the first page
  };

  const handlePageChange = (newPage) => setCurrentPage(newPage);

  const debouncedSearch = useDebounce(filters.search, 500);

  const handleSearchFilter = (searchQuery) => {
    const birthdatePrefix = "Birthdate: ";
    if (searchQuery.startsWith(birthdatePrefix)) {
      const birthdate = searchQuery.replace(birthdatePrefix, "").trim();
      return (patient) => patient.birthdate.includes(birthdate);
    }
    return null;
  };

  const safeToLowerCase = (value) => (value ? value.toString().toLowerCase() : '');

  const filteredPatients = useMemo(() => {
    return updatedPatientInfo.filter((patient) => {
      const searchQuery = debouncedSearch.toLowerCase();
      const birthdateFilter = handleSearchFilter(debouncedSearch);

      const searchMatch =
        !debouncedSearch ||
        [patient.name, patient.id.toString(), patient.gender, patient.age?.toString()]
          .some(field => safeToLowerCase(field).includes(searchQuery));

      const birthdateMatch = birthdateFilter && birthdateFilter(patient);
      const schoolMatch = !filters.school || patient.school === filters.school;
      const gradeMatch = !filters.grade || patient.grade.toString() === filters.grade;
      const yearMatch = !filters.year || patient.year === filters.year;
      const statusMatch = !filters.status || patient.status === filters.status;

      return (searchMatch || birthdateMatch) && schoolMatch && gradeMatch && yearMatch && statusMatch;
    });
  }, [debouncedSearch, filters]);

  const startIndex = (currentPage - 1) * rowsPerPage;
  const currentPagePatients = filteredPatients.slice(startIndex, startIndex + rowsPerPage);
  const totalPages = Math.ceil(filteredPatients.length / rowsPerPage);

  return (
    <div className="patients auto-sizing">
      <FilterBlock filters={filters} onFilterChange={handleFilterChange} patientInfo={updatedPatientInfo}/>

      <div className="table_controls">
        <UserButtons />
        <RowsPerPage rowsPerPage={rowsPerPage} handleRowsPerPageChange={handleRowsPerPageChange} />
      </div>

      <div className="table_area">
        <PatientTable data={currentPagePatients} />
      </div>

      {totalPages > 1 && (
        <div className="pagination">
          <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
            Previous
          </button>
          <span>Page {currentPage} of {totalPages}</span>
          <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
            Next
          </button>
        </div>
      )}
    </div>
  );
};

const UserButtons = () => (
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
    />
    <AnimatedButton
      type="button"
      classLabel="new_patient"
      label="New Patient"
      icon={User_Add}
      backgroundColor="#1E8631"
    />
  </div>
);

export default Patients;
