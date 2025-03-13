import React, { useState } from "react";
import RowsPerPage from "../../components/RowsPerPage";
import { listOfDradeData, patientInfo, updatedPatientInfo } from "../../test_data";
import useTableData from "../../hooks/useTableData";
import TableLoadingAnimation from "../../components/TableLoadingAnimation";
import FilterBlock from "../../components/FilterBlocks/FilterBlock";
import useExportCsv from "../../hooks/useExportCsv";
import "../../css/state_report_grade.css";
import StateReportsGradeTable from "../../components/Table/StateReportsGradeTable";

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

const State_Reports_Grade = () => {
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
          hasSchoolFilter
          hasYearFilter
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
          <StateReportsGradeTable data={currentPageData} />
        </div>
      </div>
    </>
  );
};

export default State_Reports_Grade;
