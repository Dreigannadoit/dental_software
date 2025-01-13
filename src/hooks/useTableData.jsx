import { useState, useMemo } from "react";
import useDebounce from "./useDebounce";

const useTableData = (data, initialFilters, filterFn, rowsPerPageDefault = 10) => {
    const [filters, setFilters] = useState(initialFilters);
    const [rowsPerPage, setRowsPerPage] = useState(rowsPerPageDefault);
    const [currentPage, setCurrentPage] = useState(1);

    const handleFilterChange = (filterName, value) => {
        setFilters((prevFilters) => ({ ...prevFilters, [filterName]: value }));
    };

    const handleRowsPerPageChange = (event) => {
        setRowsPerPage(Number(event.target.value));
        setCurrentPage(1); // Reset to the first page
    };

    const handlePageChange = (newPage) => setCurrentPage(newPage);

    const debouncedFilters = useDebounce(filters, 500);

    const filteredData = useMemo(() => {
        return filterFn(data, debouncedFilters);
    }, [data, debouncedFilters, filterFn]);

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
    };
};

export default useTableData;
