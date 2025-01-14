import { useState, useMemo, useEffect } from "react";
import useDebounce from "./useDebounce";

const useTableData = (data, initialFilters, filterFunction, rowsPerPageDefault = 5) => {
    const [filters, setFilters] = useState(initialFilters);
    const [rowsPerPage, setRowsPerPage] = useState(rowsPerPageDefault);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(false);

    const debouncedFilters = useDebounce(filters, 500);

    useEffect(() => {
      const fetchData = async () => {
        setLoading(true); // Start loading animation
        // Simulate a delay for data loading (e.g., API call)
        await new Promise((resolve) => setTimeout(resolve, 500));
        setLoading(false); // Stop loading animation
      };
  
      fetchData();
    }, []);

    const handleFilterChange = (filterName, value) => {
        setFilters((prevFilters) => ({ ...prevFilters, [filterName]: value }));
    };

    const handleRowsPerPageChange = (event) => {
        setRowsPerPage(Number(event.target.value));
        setCurrentPage(1); // Reset to the first page
    };

    const handlePageChange = (newPage) => setCurrentPage(newPage);

    // Use useMemo to filter data based on the debounced filters
    const filteredData = useMemo(() => {
        return filterFunction(data, debouncedFilters);
    }, [data, debouncedFilters, filterFunction]);

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
        loading, 
    };
};

export default useTableData;
