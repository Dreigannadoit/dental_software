import React, { useState } from "react";
import "../../css/dental_codes.css";
import RowsPerPage from "../../components/RowsPerPage";
import { listOfDentalCodesData, listOfDradeData, programDataList, schoolData } from "../../test_data";
import useTableData from "../../hooks/useTableData";
import ProgramTable from "../../components/Table/ProgramTable";
import DentalCodeTable from "../../components/Table/DentalCodeTable";
import TableLoadingAnimation from "../../components/TableLoadingAnimation";
import AddDentalCode from "../../components/Forms/AddDentalCode";
import FilterBlock from "../../components/FilterBlocks/FilterBlock";

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
    loading,
  } = useTableData(listOfDentalCodesData, { search: "" }, filterProgram);

  const [showAddDentalCodes, setShowAddDentalCodes] = useState(false);

  const openAddDentalCodes = () => setShowAddDentalCodes(true);
  const closeAddDentalCodes = () => setShowAddDentalCodes(false);

  return (
      <>
      {/* Add DentalCodes Form Popup */}
      {showAddDentalCodes && <AddDentalCode exitUser={closeAddDentalCodes} />}

      <div className="dental_code auto-sizing">
        <FilterBlock
          filters={filters}
          onFilterChange={handleFilterChange}
          data={listOfDentalCodesData}
          hasAddToTableButton
          method={openAddDentalCodes}
        />
        <div className="table_controls">
          <RowsPerPage
            rowsPerPage={rowsPerPage}
            handleRowsPerPageChange={handleRowsPerPageChange}
          />
        </div>
        <div className="table_area">
          {loading && <TableLoadingAnimation />}
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

    </>
  );
}

export default Dental_Codes