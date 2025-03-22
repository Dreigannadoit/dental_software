import React, { useState } from "react";
import "../../css/grade.css";
import RowsPerPage from "../../components/RowsPerPage";
import { listOfDradeData, schoolData } from "../../test_data";
import useTableData from "../../hooks/useTableData";
import GradeTable from "../../components/Table/gradetable";
import TableLoadingAnimation from "../../components/TableLoadingAnimation";
import AddGrade from "../../components/Forms/AddGrade";
import FilterBlock from "../../components/FilterBlocks/FilterBlock";

const filterGrade = (data, filters) => {
  const safeToLowerCase = (value) =>
    value ? value.toString().toLowerCase() : "";

  return data.filter((grade) => {
    const searchQuery = safeToLowerCase(filters.search || "");
    const matchesSearch =
      !filters.search ||
      [
        grade.name?.toString(),
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
    loading,
  } = useTableData(listOfDradeData, { search: "" }, filterGrade);

  const [showAddGrade, setShowAddGrade] = useState(false);
  const [editingGrade, setEditingGrade] = useState(null);

  const openAddGrade = () => setShowAddGrade(true);
  const closeAddGrade = () => {
    setShowAddGrade(false);
    setEditingGrade(null); // Reset editing grade on close
  };

  const handleEditGrade = (grade) => {
    setEditingGrade(grade);
    setShowAddGrade(true);
  };

  return (
    <>
      {/* Add Grade Form Popup */}
      {showAddGrade && (
        <AddGrade
          exitUser={closeAddGrade}
          grade={editingGrade}
          isEdit={!!editingGrade}
        />
      )}

      <div className="grade auto-sizing">
        <FilterBlock
          filters={filters}
          onFilterChange={handleFilterChange}
          data={listOfDradeData}
          hasAddToTableButton
          method={openAddGrade}
        />
        <div className="table_controls">
          <RowsPerPage
            rowsPerPage={rowsPerPage}
            handleRowsPerPageChange={handleRowsPerPageChange}
          />
        </div>
        <div className="table_area">
          {loading && <TableLoadingAnimation />}
          <GradeTable data={currentPageData} onEditGrade={handleEditGrade} />
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

export default Grade