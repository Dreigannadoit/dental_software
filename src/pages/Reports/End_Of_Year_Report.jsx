import React, { useState } from "react";
import "../../css/end_of_year_report.css";
import RowsPerPage from "../../components/RowsPerPage";
import { csdpsStatisticsBySchool, endOfYearReport, listOfDradeData, patientInfo, updatedPatientInfo } from "../../test_data";
import useTableData from "../../hooks/useTableData";
import TableLoadingAnimation from "../../components/TableLoadingAnimation";
import FilterBlock from "../../components/FilterBlocks/FilterBlock";
import useExportCsv from "../../hooks/useExportCsv";
import "../../css/case_management.css";

// TODO: Change way filter interacts with backend data


const filterEndOfYearReport = (data, filters) => {
  const safeToLowerCase = (value) => (value ? value.toString().toLowerCase() : "");

  return data
    .filter((report) => {
      // Filter by year
      return !filters.year || report.year === filters.year;
    })
    .map((report) => {
      // Filter schools within the year
      const filteredSchools = report.data.filter((school) => {
        const searchQuery = safeToLowerCase(filters.search || "");
        return (
          !filters.search ||
          [
            school.school,
            school.numStudentsServed?.toString(),
            school.numReceivingSealant?.toString(),
            school.numReceivingFlouride?.toString(),
            school.numReceivingPhrophy?.toString(),
            school.numReferals?.toString(),
            school.numberScreenedByDentalHygienist?.toString(),
            school.numberOfTheStudentsScreenedForOralHealth_HowManyWereInThirdGrade?.toString(),
          ].some((field) => safeToLowerCase(field).includes(searchQuery))
        );
      });

      return {
        ...report,
        data: filteredSchools,
      };
    })
    .filter((report) => report.data.length > 0); // Remove empty reports
};

const End_Of_Year_Report = () => {
  const {
    filters,
    currentPage,
    currentPageData,
    totalPages,
    handleFilterChange,
    handlePageChange,
    loading,
  } = useTableData(endOfYearReport, { search: "", year: "2024-2025" }, filterEndOfYearReport);

  const exportCsv = useExportCsv();

  const handleExport = () => {
    const flattenedData = endOfYearReport.reduce((acc, { year, data }) => {
      const formattedData = data.map((item) => ({ ...item, year }))
      return [...acc, ...formattedData]
    }, [])
    exportCsv(flattenedData, "End_Of_Year_Report.csv");
  };
  return (
    <>
      <div className="case_management auto-sizing">
        <FilterBlock
          filters={filters}
          onFilterChange={handleFilterChange}
          data={endOfYearReport}
          hasYearFilter
        />

        <div className="table_controls">
          <button className="Export_BTN shadow" onClick={handleExport}>Export</button>
        </div>
        <div className="viewing_area">
          {loading && <TableLoadingAnimation />}
          {currentPageData.map((report, index) => (
            <div key={index}>
              <h3>{report.year}</h3>
              <div>
                {report.data.map((school, schoolIndex) => (
                  <div key={schoolIndex} className="school_block shadow">
                    <h3>{school.school}</h3>
                    <div>
                      <p><strong>Students Served:</strong> <br /> {school.numStudentsServed}</p>
                      <p><strong>Receiving Sealant:</strong> <br /> {school.numReceivingSealant}</p>
                      <p><strong>Receiving Fluoride:</strong> <br /> {school.numReceivingFlouride}</p>
                      <p><strong>Receiving Prophy:</strong> <br /> {school.numReceivingPhrophy}</p>
                      <p><strong>Referrals:</strong> <br /> {school.numReferals}</p>
                      <p><strong>Screened by Dental Hygienist:</strong> <br /> {school.numberScreenedByDentalHygienist}</p>
                      <p><strong>Third Graders Screened:</strong> <br /> {school.numberOfTheStudentsScreenedForOralHealth_HowManyWereInThirdGrade}</p>
                    </div>
                  </div>
                ))}

              </div>
            </div>
          ))}

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

export default End_Of_Year_Report;
