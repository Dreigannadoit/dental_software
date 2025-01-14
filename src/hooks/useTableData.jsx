import { useState, useEffect } from "react";

const useTableData = (data, initialFilters, filterFunction) => {
  const [filters, setFilters] = useState(initialFilters);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Start loading animation
      // Simulate a delay for data loading (e.g., API call)
      await new Promise((resolve) => setTimeout(resolve, 500));

      const filtered = filterFunction(data, filters);
      setFilteredData(filtered);
      setLoading(false); // Stop loading animation
    };

    fetchData();
  }, [data, filters, filterFunction]);

  const handleFilterChange = (newFilters) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
    setCurrentPage(1); // Reset to the first page
  };

  const handleRowsPerPageChange = (newRowsPerPage) => {
    setRowsPerPage(newRowsPerPage);
    setCurrentPage(1); // Reset to the first page
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const startIndex = (currentPage - 1) * rowsPerPage;
  const currentPageData = filteredData.slice(startIndex, startIndex + rowsPerPage);
  const totalPages = Math.ceil(filteredData.length / rowsPerPage);

  return {
    filters,
    rowsPerPage,
    currentPage,
    currentPageData,
    totalPages,
    handleFilterChange,
    handleRowsPerPageChange,
    handlePageChange,
    loading, // Expose the loading state
  };
};

export default useTableData;
