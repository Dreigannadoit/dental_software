import React, { useState } from "react";
import RowsPerPage from "../../components/RowsPerPage";
import { listOfDradeData, patientInfo, updatedPatientInfo } from "../../test_data";
import useTableData from "../../hooks/useTableData";
import TableLoadingAnimation from "../../components/TableLoadingAnimation";
import FilterBlock from "../../components/FilterBlocks/FilterBlock";
import CaseManagementTable from "../../components/Table/CaseManagementTable";
import useExportCsv from "../../hooks/useExportCsv";
import "../../css/case_management.css";

const filterCaseMangement = (data, filters) => {
  const safeToLowerCase = (value) =>
    value ? value.toString().toLowerCase() : "";

  return data.filter((patient) => {
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

const Case_Management = () => {
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
  } = useTableData(updatedPatientInfo, { search: "" }, filterCaseMangement);

  const exportCsv = useExportCsv();

  const handleExport = () => {
    exportCsv(currentPageData, "Case Management.csv");
  };

  return (
    <>
      <div className="case_management auto-sizing">
        <FilterBlock
          filters={filters}
          onFilterChange={handleFilterChange}
          data={listOfDradeData}
        />

        <div className="table_controls">
          <button className="Export_BTN shadow" onClick={handleExport}>Export</button>
          <RowsPerPage
            rowsPerPage={rowsPerPage}
            handleRowsPerPageChange={handleRowsPerPageChange}
          />
        </div>
        <div className="table_area">
          {loading && <TableLoadingAnimation />}
          <CaseManagementTable data={currentPageData} />
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

export default Case_Management;
