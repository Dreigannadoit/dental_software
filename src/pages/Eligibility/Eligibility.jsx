import React, { useState } from "react";
import RowsPerPage from "../../components/RowsPerPage";
import { eligibilityData, listOfDradeData, patientInfo, updatedPatientInfo } from "../../test_data";
import useTableData from "../../hooks/useTableData";
import TableLoadingAnimation from "../../components/TableLoadingAnimation";
import FilterBlock from "../../components/FilterBlocks/FilterBlock";
import useExportCsv from "../../hooks/useExportCsv";
import "../../css/eligibility.css";
import EligibilityTable from "../../components/Table/EligibilityTable";

const filterEligibility = (data, filters) => {
  const safeToLowerCase = (value) =>
    value ? value.toString().toLowerCase() : "";

  return data.filter((report) => {
    const searchQuery = safeToLowerCase(filters.search || "");
    const matchesSearch =
      !filters.search ||
      [
        report.name,
        report.dob,
        report.gender,
        report.m_h_num?.toString(),
        report.sl_hx.toString(),
        report.sl_date,
        report.pro,
        report.proDate,
        report.flu,
        report.fluDate,
        report.fillings,
        report.school,
        report.grade,
      ].some((field) => safeToLowerCase(field).includes(searchQuery));

    const matchesSchool = !filters.school || report.school === filters.school;
    const matchesGrade =
      !filters.grade || report.grade?.toString() === filters.grade;
    return (
      matchesSearch &&
      matchesSchool &&
      matchesGrade
    );
  });
};

const Eligibility = () => {
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
  } = useTableData(eligibilityData, { search: "", school: "", grade: "" }, filterEligibility);

  const exportCsv = useExportCsv();

  const handleExport = () => {
    exportCsv(currentPageData, "Eliligibility.csv");
  };

  return (
    <>
      <div className="eliligibility auto-sizing">
        <FilterBlock
          filters={filters}
          onFilterChange={handleFilterChange}
          data={eligibilityData}
          hasSchoolFilter
          hasGradeFilter
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
          <div className="container">
              <EligibilityTable data={currentPageData} />
          </div>
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

export default Eligibility;
