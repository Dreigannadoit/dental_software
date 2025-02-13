import React, { useState, useRef, useEffect } from "react";
import RowsPerPage from "../../components/RowsPerPage";
import { distributionData } from "../../test_data";
import useTableData from "../../hooks/useTableData";
import TableLoadingAnimation from "../../components/TableLoadingAnimation";
import FilterBlock from "../../components/FilterBlocks/FilterBlock";
import useExportCsv from "../../hooks/useExportCsv";
import "../../css/distribution.css";
import DistributionTable from "../../components/Table/DistributionTable";

const filterDistribution = (data, filters) => {
  const safeToLowerCase = (value) => (value ? value.toString().toLowerCase() : "");
  const searchQuery = safeToLowerCase(filters.search || "");
  const yearFilter = filters.year;

  const filteredByYear = data.filter((report) => 
    !yearFilter || report.year === yearFilter
  );

  return filteredByYear.map((yearData) => ({
    ...yearData,
    preK: yearData.preK.filter((school) => safeToLowerCase(school.name).includes(searchQuery)),
    k5: yearData.k5.filter((school) => safeToLowerCase(school.name).includes(searchQuery)),
    m6_8: yearData.m6_8.filter((school) => safeToLowerCase(school.name).includes(searchQuery)),
    high9_12: yearData.high9_12.filter((school) => safeToLowerCase(school.name).includes(searchQuery)),
  })).filter(
    (yearData) => yearData.preK.length || yearData.k5.length || yearData.m6_8.length || yearData.high9_12.length
  );
};

const Distribution = () => {
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
  } = useTableData(distributionData, { search: "", year: "Csdp Program Sy 2020 - 2021" }, filterDistribution);

  const exportCsv = useExportCsv();
  const tableRef = useRef(null);
  const isScrolling = useRef(false);

  const handleExport = () => {
    const flattenData = (data) => {
      const flattened = [];
      data.forEach((program) => {
        const { year, preK, k5, m6_8, high9_12 } = program;
        [preK, k5, m6_8, high9_12].forEach((group, index) => {
          const groupName = ["preK", "k5", "m6_8", "high9_12"][index];
          group.forEach((item) => {
            flattened.push({
              year,
              group: groupName,
              name: item.name,
              enrolled: item.enrolled,
              distribution: item.distribution,
              classroomNum: item.classroomNum,
              consentPackerNum: item.consentPackerNum,
              totalFormsDisNum: item.totalFormsDisNum,
              consents: item.consents,
              nurse_contact_person: item.nurse_contact_person,
            });
          });
        });
      });

      return flattened;
    };

    const processedData = flattenData(distributionData);
    exportCsv(processedData, "Eligibility.csv");
  };

  // Sync scrollbar position
  useEffect(() => {
    const tableContainer = tableRef.current;

    const handleScroll = () => {
      if (tableContainer && !isScrolling.current) {
        isScrolling.current = true;
        requestAnimationFrame(() => {
          tableContainer.scrollLeft += 1;
          isScrolling.current = false;
        });
      }
    };

    if (tableContainer) {
      tableContainer.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (tableContainer) {
        tableContainer.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div className="distribution auto-sizing">
      <FilterBlock
        filters={filters}
        onFilterChange={handleFilterChange}
        data={distributionData}
        hasYearFilter
      />

      <div className="table_controls">
        <button className="Export_BTN shadow" onClick={handleExport}>
          Export
        </button>
        <RowsPerPage
          rowsPerPage={rowsPerPage}
          handleRowsPerPageChange={handleRowsPerPageChange}
        />
      </div>

      <div className="table_area" ref={tableRef}>
        {loading ? (
          <TableLoadingAnimation />
        ) : (
          <div className="container">
            <DistributionTable data={currentPageData} />
          </div>
        )}
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
};

export default Distribution;
