import React from "react";
import "../../css/procedure_codes.css";
import FilterBlock from "../../components/FilterBlock";
import RowsPerPage from "../../components/RowsPerPage";
import { listOfProcedureCodesData } from "../../test_data";
import useTableData from "../../hooks/useTableData";
import ProcedureCodeTable from "../../components/Table/ProcedureCodeTable";
import TableLoadingAnimation from "../../components/TableLoadingAnimation";

const filterProgram = (data, filters) => {
  const safeToLowerCase = (value) =>
    value ? value.toString().toLowerCase() : "";

  return data.filter((procedureCode) => {
    const searchQuery = safeToLowerCase(filters.search || "");

    // Filter by status (only include active if "Active" is selected in filters)
    const matchesSearch =
      !filters.search ||
      [
        procedureCode.id?.toString(),
        procedureCode.code,
        procedureCode.description,
        procedureCode.price,
        procedureCode.status,
      ].some((field) => safeToLowerCase(field).includes(searchQuery));

    return matchesSearch; // Must match both status and search query
  });
};

const Procedure_Codes = () => {
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
  } = useTableData(listOfProcedureCodesData, { search : "" }, filterProgram);

  return (
    <div className="procedure_code auto-sizing">
      <FilterBlock 
        filters={filters} 
        onFilterChange={handleFilterChange} 
        data={listOfProcedureCodesData}
        hasAddToTableButton
      />
      <div className="table_controls">
        <RowsPerPage
          rowsPerPage={rowsPerPage}
          handleRowsPerPageChange={handleRowsPerPageChange}
        />
      </div>
      <div className="table_area">
        {loading && <TableLoadingAnimation />}
        <ProcedureCodeTable data={currentPageData} />
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

export default Procedure_Codes;