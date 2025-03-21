import React, { useState } from "react";
import "../../css/program.css";
import RowsPerPage from "../../components/RowsPerPage";
import { listOfDradeData, programDataList, schoolData } from "../../test_data";
import useTableData from "../../hooks/useTableData";
import ProgramTable from "../../components/Table/ProgramTable";
import TableLoadingAnimation from "../../components/TableLoadingAnimation";
import AddProgram from "../../components/Forms/AddProgram";
import FilterBlock from "../../components/FilterBlocks/FilterBlock";

const filterProgram = (data, filters) => {
  const safeToLowerCase = (value) =>
    value ? value.toString().toLowerCase() : "";

  return data.filter((program) => {
    const searchQuery = safeToLowerCase(filters.search || "");

    // Filter by status (only include active if "Active" is selected in filters)
    const matchesStatus =
      !filters.status ||
      safeToLowerCase(program.status) === safeToLowerCase(filters.status);

    const matchesSearch =
      !filters.search ||
      [
        program.name,
        program.id?.toString(),
        program.school_year,
        program.start_month,
        program.end_month,
        program.status,
      ].some((field) => safeToLowerCase(field).includes(searchQuery));

    return matchesStatus && matchesSearch; // Must match both status and search query
  });
};

const Program = () => {
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
  } = useTableData(programDataList, { search: "" }, filterProgram);

  const [showAddProgram, setShowAddProgram] = useState(false);
  const [editingProgram, setEditingProgram] = useState(null);

  const openAddProgram = () => setShowAddProgram(true);
  const closeAddProgram = () => {
    setShowAddProgram(false);
    setEditingProgram(null);
  };

  const handleEditProgram = (program) => {
    setEditingProgram(program);
    setShowAddProgram(true);
  };

  return (
    <>
      {/* Add Program Form Popup */}
      {showAddProgram && (
        <AddProgram 
          exitUser={closeAddProgram} 
          program={editingProgram}
          isEdit={!!editingProgram}
        />
      )}

      <div className="program auto-sizing">
        <FilterBlock
          filters={filters}
          onFilterChange={handleFilterChange}
          data={programDataList}
          hasAddToTableButton
          method={openAddProgram}
        />
        <div className="table_controls">
          <RowsPerPage
            rowsPerPage={rowsPerPage}
            handleRowsPerPageChange={handleRowsPerPageChange}
          />
        </div>
        <div className="table_area">
          {loading && <TableLoadingAnimation />}
          <ProgramTable data={currentPageData} onEditProgram={handleEditProgram} />
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

export default Program