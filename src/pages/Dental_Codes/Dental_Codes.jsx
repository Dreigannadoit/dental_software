import React from "react";
import "../../css/dental_codes.css";
import FilterBlock from "../../components/FilterBlock";
import RowsPerPage from "../../components/RowsPerPage";
import { listOfDentalCodesData, listOfDradeData, programDataList, schoolData } from "../../test_data";
import useTableData from "../../hooks/useTableData";
import ProgramTable from "../../components/Table/ProgramTable";
import DentalCodeTable from "../../components/Table/DentalCodeTable";

const filterProgram = (data, filters) => {
  const safeToLowerCase = (value) =>
    value ? value.toString().toLowerCase() : "";

  return data.filter((dentalCode) => {
    const searchQuery = safeToLowerCase(filters.search || "");

    // Filter by status (only include active if "Active" is selected in filters)
    const matchesSearch =
      !filters.search ||
      [
        dentalCode.id?.toString(),
        dentalCode.code,
        dentalCode.description,
        dentalCode.status,
      ].some((field) => safeToLowerCase(field).includes(searchQuery));

    return matchesSearch; // Must match both status and search query
  });
};

const Dental_Codes = () => {
  const {
    filters,
    rowsPerPage,
    currentPage,
    currentPageData,
    totalPages,
    handleFilterChange,
    handleRowsPerPageChange,
    handlePageChange,
  } = useTableData(listOfDentalCodesData, { search : "" }, filterProgram);

  return (
    <div className="dental_code auto-sizing">
      <FilterBlock 
        filters={filters} 
        onFilterChange={handleFilterChange} 
        data={listOfDentalCodesData}
        hasAddToTableButton
      />
      <div className="table_controls">
        <RowsPerPage
          rowsPerPage={rowsPerPage}
          handleRowsPerPageChange={handleRowsPerPageChange}
        />
      </div>
      <div className="table_area">
        <DentalCodeTable data={currentPageData} />
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
  );
}

export default Dental_Codes