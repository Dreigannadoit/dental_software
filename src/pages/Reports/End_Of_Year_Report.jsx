import React from "react";
import "../../css/end_of_year_report.css";
import { endOfYearReport } from "../../test_data";
import useTableData from "../../hooks/useTableData";
import TableLoadingAnimation from "../../components/TableLoadingAnimation";
import FilterBlock from "../../components/FilterBlocks/FilterBlock";
import useExportCsv from "../../hooks/useExportCsv";

// Component: EndOfYearReport
// Displays end-of-year reports, filtering, pagination, and export functionality.

const filterEndOfYearReport = (data, filters) => {
  const safeToLowerCase = (value) =>
    value ? value.toString().toLowerCase() : "";

  return data
    .filter(
      (report) => !filters.year || report.year === filters.year // Year filter
    )
    .map((report) => {
      const searchQuery = safeToLowerCase(filters.search || "");
      const filteredSchools = report.data.filter(
        (school) =>
          !filters.search || // No search filter or...
          Object.values(school).some((value) =>
            safeToLowerCase(value?.toString() || "").includes(searchQuery)
          ) // ...school data contains search query
      );

      return { ...report, data: filteredSchools }; // Return updated report
    })
    .filter((report) => report.data.length > 0); // Remove empty reports
};

const End_Of_Year_Report = () => {
  // useTableData hook handles data fetching, filtering, and pagination.
  const {
    filters,
    currentPage,
    currentPageData,
    totalPages,
    handleFilterChange,
    handlePageChange,
    loading,
  } = useTableData(
    endOfYearReport,
    { search: "", year: "2024-2025" },
    filterEndOfYearReport
  );

  // useExportCsv hook to handle CSV export.
  const exportCsv = useExportCsv();

  // handleExport: Exports the complete, flattened data as a CSV file.
  const handleExport = () => {
    const flattenedData = endOfYearReport.reduce(
      (acc, { year, data }) => [
        ...acc,
        ...data.map((item) => ({ ...item, year })), // Add year to each item
      ],
      []
    );
    exportCsv(flattenedData, "End_Of_Year_Report.csv");
  };

  return (
    <div className="case_management auto-sizing">
      {/* Filter Section */}
      <FilterBlock
        filters={filters}
        onFilterChange={handleFilterChange}
        data={endOfYearReport}
        hasYearFilter
      />

      {/* Export Button */}
      <div className="table_controls">
        <button className="Export_BTN shadow" onClick={handleExport}>
          Export
        </button>
      </div>

      {/* Data Display Section */}
      <div className="viewing_area">
        {loading && <TableLoadingAnimation />}
        {currentPageData.map((report, index) => (
          <div key={index}>
            <h3>{report.year}</h3>
            <div>
              {report.data.map((school, schoolIndex) => (
                <div key={schoolIndex} className="school_block shadow">
                  <h3>{school.school}</h3>
                  <div className="school-details">
                    {/* School Details */}
                    <p className="shadow">
                      <strong>Students Served:</strong>
                      <br />
                      <span>{school.numStudentsServed}</span>
                    </p>
                    <p className="shadow">
                      <strong>Receiving Sealant:</strong>
                      <br />
                      <span>{school.numReceivingSealant}</span>
                    </p>
                    <p className="shadow">
                      <strong>Receiving Fluoride:</strong>
                      <br />
                      <span>{school.numReceivingFlouride}</span>
                    </p>
                    <p className="shadow">
                      <strong>Receiving Prophy:</strong>
                      <br />
                      <span>{school.numReceivingPhrophy}</span>
                    </p>
                    <p className="shadow">
                      <strong>Referrals:</strong>
                      <br />
                      <span>{school.numReferals}</span>
                    </p>
                    <p className="shadow">
                      <strong>Screened by Dental Hygienist:</strong>
                      <br />
                      <span>{school.numberScreenedByDentalHygienist}</span>
                    </p>
                    <p className="shadow">
                      <strong>Third Graders Screened:</strong>
                      <br />
                      <span>
                        {
                          school.numberOfTheStudentsScreenedForOralHealth_HowManyWereInThirdGrade
                        }
                      </span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Section */}
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
  );
};

export default End_Of_Year_Report;