import React, { useState } from "react";
import "../../css/users.css";
import RowsPerPage from "../../components/RowsPerPage";
import { listOfUsersData } from "../../test_data";
import useTableData from "../../hooks/useTableData";
import UsersTable from "../../components/Table/UsersTable";
import TableLoadingAnimation from "../../components/TableLoadingAnimation";
import AddUsers from "../../components/Forms/AddUsers";
import FilterBlock from "../../components/FilterBlocks/FilterBlock";

const filterProgram = (data, filters) => {
  const safeToLowerCase = (value) =>
    value ? value.toString().toLowerCase() : "";

  return data.filter((users) => {
    const searchQuery = safeToLowerCase(filters.search || "");

    // Filter by status (only include active if "Active" is selected in filters)
    const matchesSearch =
      !filters.search ||
      [
        users.id?.toString(),
        users.name,
        users.email,
        users.username,
        users.role,
      ].some((field) => safeToLowerCase(field).includes(searchQuery));

    return matchesSearch; // Must match both status and search query
  });
};

const Users = () => {
  const {
    filters,
    rowsPerPage,
    currentPage,
    currentPageData,
    totalPages,
    handleFilterChange,
    handleRowsPerPageChange,
    handlePageChange,
    loading, // Access loading state
  } = useTableData(listOfUsersData, { search: "" }, filterProgram);

  const [showAddUsers, setShowAddUsers] = useState(false);

  const openAddUsers = () => setShowAddUsers(true);
  const closeAddUsers = () => setShowAddUsers(false);

  return (
    <>
      {/* Add Procedure Codes Form Popup */}
      {showAddUsers && <AddUsers exitUser={closeAddUsers} />}

      <div className="users auto-sizing">
        <FilterBlock
          filters={filters}
          onFilterChange={handleFilterChange}
          data={listOfUsersData}
          hasAddToTableButton
          method={openAddUsers}
        />
        <div className="table_controls">
          <RowsPerPage
            rowsPerPage={rowsPerPage}
            handleRowsPerPageChange={handleRowsPerPageChange}
          />
        </div>
        <div className="table_area">
          {/* Show loading overlay if loading is true */}
          {loading && <TableLoadingAnimation />}
          <UsersTable data={currentPageData} />
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

export default Users;