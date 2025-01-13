import React from "react";
import "../../css/grade.css";
import FilterBlock from "../../components/FilterBlock";
import RowsPerPage from "../../components/RowsPerPage";
import { listOfDradeData, schoolData } from "../../test_data";
import useTableData from "../../hooks/useTableData";
import GradeTable from "../../components/Table/gradetable";

const filterSchools = (data, filters) => {
  const safeToLowerCase = (value) =>
    value ? value.toString().toLowerCase() : "";

  return data.filter((grade) => {
    const searchQuery = safeToLowerCase(filters.search || "");
    const matchesSearch =
      !filters.search ||
      [
        grade.name,
        grade.id?.toString(),
        grade.description,
      ].some((field) => safeToLowerCase(field).includes(searchQuery));

    return (
      matchesSearch
    );
  });
};

const Grade = () => {

  const {
    filters,
    rowsPerPage,
    currentPage,
    currentPageData,
    totalPages,
    handleFilterChange,
    handleRowsPerPageChange,
    handlePageChange,
  } = useTableData(listOfDradeData, { search : "" }, filterSchools);

  return (
    <div className="grade auto-sizing">
      <FilterBlock 
        filters={filters} 
        onFilterChange={handleFilterChange} 
        data={listOfDradeData}
      />
      <div className="table_controls">
        <RowsPerPage
          rowsPerPage={rowsPerPage}
          handleRowsPerPageChange={handleRowsPerPageChange}
        />
      </div>
      <div className="table_area">
        <GradeTable data={currentPageData} />
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

export default Grade