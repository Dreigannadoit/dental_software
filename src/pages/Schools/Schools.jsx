import React, { useState } from "react";
import "../../css/school.css";
import RowsPerPage from "../../components/RowsPerPage";
import SchoolTable from "../../components/Table/SchoolTable";
import { schoolData } from "../../test_data";
import useTableData from "../../hooks/useTableData";
import TableLoadingAnimation from "../../components/TableLoadingAnimation";
import AddSchool from "../../components/Forms/AddSchool";
import FilterBlock from "../../components/FilterBlocks/FilterBlock";

const filterSchools = (data, filters) => {
  const safeToLowerCase = (value) =>
    value ? value.toString().toLowerCase() : "";

  return data.filter((school) => {
    const searchQuery = safeToLowerCase(filters.search || "");
    const matchesSearch =
      !filters.search ||
      [
        school.name,
        school.id?.toString(),
        school.address,
        school.type,
        school.status,
      ].some((field) => safeToLowerCase(field).includes(searchQuery));

    const matchesStatus = !filters.status || school.status === filters.status;
    const matchesType = !filters.type || school.type === filters.type;

    return (
      matchesSearch &&
      matchesStatus &&
      matchesType
    );
  });
};


const Schools = () => {
  const initialFilters = {
    search: "",
    type: "",
    status: "",
  };

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
  } = useTableData(schoolData, initialFilters, filterSchools);

  const [showAddSchool, setShowAddSchool] = useState(false);
  const [editingSchool, setEditingSchool] = useState(null);

  const openAddSchool = () => setShowAddSchool(true);
  const closeAddSchool = () => {
    setShowAddSchool(false);
    setEditingSchool(null); // Reset editing school on close
  };

  const handleEditSchool = (school) => {
    setEditingSchool(school);
    setShowAddSchool(true);
  };

  return (
    <>
      {showAddSchool && (
        <AddSchool
          exitUser={closeAddSchool}
          school={editingSchool}
          isEdit={!!editingSchool}
        />
      )}
      <div className="schools auto-sizing">
        <FilterBlock
          filters={filters}
          onFilterChange={handleFilterChange}
          data={schoolData}
          hasTypeFilter
          hasStatusfilter
          hasAddToTableButton
          method={openAddSchool}
        />
        <div className="table_controls">
          <RowsPerPage rowsPerPage={rowsPerPage} handleRowsPerPageChange={handleRowsPerPageChange} />
        </div>
        <div className="table_area">
          {loading && <TableLoadingAnimation />}
          <SchoolTable data={currentPageData} onEditSchool={handleEditSchool} />
        </div>
        {totalPages > 1 && (
          <div className="pagination">
            <button className="shadow" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
              Back
            </button>
            <span>Page {currentPage} of {totalPages}</span>
            <button className="shadow" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
              Next
            </button>
          </div>
        )}
      </div>
    </>
  );
};


export default Schools;
