import React, { lazy, Suspense, useState } from "react";
import "../../css/patients.css";
import { csdpProgramTrendsSeries, csdpProgramTrendsSeriesLabels, oralHealthStatusSummaryLabels, oralHealthStatusSummarySeries, childrenReceivingServiceSeries, childrenReceivingServiceLabels, gradeData, ageData, raceData, ethinicityList } from "../../test_data";
import RowsPerPage from "../../components/RowsPerPage";
import useTableData from "../../hooks/useTableData";
import TableLoadingAnimation from "../../components/TableLoadingAnimation";
import FilterBlock from "../../components/FilterBlocks/FilterBlock";
import ProgramTrendsTable from "../../components/Table/Statistics Reports/ProgramTrendsTable";
import { statisticsReport } from "../../test_data";
import Pie_Dental_Charts from "../../components/Charts/Pie_Dental_Charts";
import DemographicChracteristicsTable from "../../components/Table/Statistics Reports/DemographicChracteristicsTable";


const Dental_Charts = lazy(() => import("../../components/Charts/Dental_Charts"));

// TODO: Update Filter method in accordance to the API data format
// Flatten the data structure for easier filtering
const flattenData = (data) => {
  return data.reduce((acc, yearData) => {
    yearData.gradeData.forEach(gradeData => {
      gradeData.schoolData.forEach(schoolData => {
        acc.push({
          year: yearData.year,
          grade: gradeData.grade,
          school: schoolData.school,
          ...schoolData,
        });
      });
    });
    return acc;
  }, []);
};

const filterStatisticsReports = (data, filters) => {
  const safeToLowerCase = (value) => (value ? value.toString().toLowerCase() : "");

  return data.filter(report => {
    const yearMatch = !filters.year || report.year === filters.year;
    const gradeMatch = !filters.grade || safeToLowerCase(report.grade) === safeToLowerCase(filters.grade);
    const schoolMatch = !filters.school || safeToLowerCase(report.school) === safeToLowerCase(filters.school);

    return yearMatch && gradeMatch && schoolMatch;
  });
};


const Statistics_Reports = () => {
  const initialFilters = {
    search: "",
    school: "",
    grade: "1",
    year: "2022-2023",
  };

  // Flatten the data when the component mounts
  const flattenedData = flattenData(statisticsReport);


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
  } = useTableData(flattenedData, initialFilters, filterStatisticsReports);

  return (
    <>
      <div className="statistics_report">
        <FilterBlock
          filters={filters}
          onFilterChange={handleFilterChange}
          data={flattenedData} // Pass the flattened data here for filter options
          hasSearchBar={false}
          hasSchoolFilter
          hasGradeFilter
          hasYearFilter
        />

        <br />

        <h2>CSDP Information and Trends for Brockton</h2>
        <br />

        <div className="program_trends">
          <Suspense fallback={<div>Loading Charts...</div>}>

            <div className="line_charts f-center">
              <Dental_Charts
                chartLabel="CSDP Program Trends"
                chartType="area"
                series={csdpProgramTrendsSeries}
                xLabels={csdpProgramTrendsSeriesLabels}
              />
            </div>

            <br />

            <div className="table_controls">
              <RowsPerPage
                rowsPerPage={rowsPerPage}
                handleRowsPerPageChange={handleRowsPerPageChange}
              />
            </div>

            <div className="table_area">
              {loading && <TableLoadingAnimation />}
              <ProgramTrendsTable data={currentPageData} />
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
          </Suspense>
        </div>

        <br />

        <h2>CSDP Information for All Schools</h2>
        <br />

        <div className="information_for_all_schools">
          <div>
            <Dental_Charts
              chartLabel="Oral Health Status (%) Summary"
              chartType="bar"
              series={oralHealthStatusSummarySeries}
              xLabels={oralHealthStatusSummaryLabels}
            />
          </div>
          <div>

            <Dental_Charts
              chartLabel="% Of Children Receiving The Following Service"
              chartType="bar"
              series={childrenReceivingServiceSeries}
              xLabels={childrenReceivingServiceLabels}
            />
          </div>
        </div>

        <br />

        <h2>CSDP Information for All Schools</h2>
        <br />

        <div className="demographic">
          <div className="pie_charts">
            <Pie_Dental_Charts chartLabel="Grade" series={gradeData} />
            <Pie_Dental_Charts chartLabel="Age" series={ageData} />
            <Pie_Dental_Charts chartLabel="Race" series={raceData} />

          </div>

          <DemographicChracteristicsTable data={ethinicityList} />
        </div>
      </div>
    </>
  );
};

export default Statistics_Reports;